import { Component, OnInit, ViewChild } from '@angular/core';
import { GridThongTinKhoaPhongModel, GridThongTinKhoModel, HoSoCuaToi, HoSoNhanVien, NhomKhoaPhongModel, SreachKhoaPhong, ThongTinKho, ThongTinKhoaPhong } from '../ho-so-cua-toi';
import { BaseService } from 'src/app/core/services/base.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import { TemplateRef } from '@angular/core';
import { GroupDescriptor } from '@progress/kendo-data-query';
import icClear from '@iconify/icons-ic/twotone-clear';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-thong-tin-ho-so-cua-toi',
    templateUrl: './thong-tin-ho-so-cua-toi.component.html',
    styleUrls: ['./thong-tin-ho-so-cua-toi.component.scss'],
})
export class ThongTinHoSoCuaToiComponent implements OnInit {
    public hoSoCuaToi: HoSoCuaToi;
    validationErrors: any;
    fileData: File = null;
    previewUrl: any = null;
    public khoaPhongIds = '';
    public id = 0;
    public userId = 0;
    public phongKhamHienTais: any;
    icSearch = icSearch;
    icClear =icClear;
    modelFE = {} as HoSoNhanVien;
    sreachKhoaPhong = new SreachKhoaPhong(0, [], []);
    sreachKhoaPhongJson = null;
    urlGetDataGridKhoaPhongAsync = 'NhanVien/GetListKhoaPhongDataForGridAsync';
    urlGetDataGridPhongBenhVienAsync = 'NhanVien/GetListKhoTheoPhongDataForGridAsync';
    dataSourceKhoaPhong: GridThongTinKhoaPhongModel = {
        Data: [],
        TotalRowCount: 0
    };
    dataSourceKho: GridThongTinKhoModel = {
        Data: [],
        TotalRowCount: 0
    };
    nhomKhoaPhongs: NhomKhoaPhongModel[] = [];
    isCheckAll = false;
    searchString: string;
    gridKhoaPhongsColumn: any[] = [];
    gridKhoColumn: any[] = [];
    searchStringKho: string;
    isCheckAllKho = false;
    public groups: GroupDescriptor[] = [{
        field: 'NhomKhoa', aggregates: [
            { field: 'PhongChinh', aggregate: 'sum' }
        ]
    }];

    @ViewChild('gridKhoaPhong', { static: false }) gridKhoaPhong: GridComponent;
    @ViewChild('khoTemplateHeader', { static: true }) khoTemplateHeader: GridComponent;
    @ViewChild('gridKho', { static: false }) gridKho: GridComponent;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('maPhongTemplate', { static: true }) maPhongTemplate: TemplateRef<any>;
    @ViewChild('khoTemplate', { static: true }) khoTemplate: TemplateRef<any>;
    @ViewChild('phongChinhTemplate', { static: true }) phongChinhTemplate: TemplateRef<any>;
    @ViewChild('maPhongTemplateHeader', { static: true }) maPhongTemplateHeader: TemplateRef<any>;

    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];

    constructor(
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private baseService: BaseService,
        private authService: AuthService,
        private apiService: ApiService
    ) {
        this.baseService.controllerName = 'NhanVien';
    }

    ngOnInit() {
        this.hoSoCuaToi = {} as HoSoCuaToi;
        this.hoSoCuaToi.GioiTinh = 1;
        this.gridKhoaPhongsColumn = [
            {
                Field: 'NhomKhoa', Title: 'Nhóm', Width: 0, Sortable: true,
                Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate
            },
            { Field: '', Title: '', Width: 33, Sortable: true, TemplateHeader: this.maPhongTemplateHeader, Template: this.maPhongTemplate },
            { Field: 'MaPhong', Title: 'Mã', Width: 93, Sortable: true },
            { Field: 'TenPhong', Title: 'Tên', Width: 386, Sortable: true },
            { Field: 'PhongChinh', Title: 'Phòng chính', Width: 255, Sortable: true, Template: this.phongChinhTemplate }
        ];

        this.gridKhoColumn = [
            { Field: '', Title: '', Width: 30, TemplateHeader: this.khoTemplateHeader, Template: this.khoTemplate },
            { Field: 'TenKho', Title: 'Tên', Width: 200, Sortable: true },
            { Field: 'TenKhoa', Title: 'Khoa', Width: 100, Sortable: true },
            { Field: 'TenPhong', Title: 'Phòng', Width: 100, Sortable: true },
        ];
        const currentAccessUser = this.authService.getAccessUser();
        if (currentAccessUser !== undefined && currentAccessUser !== null) {
            this.getById(currentAccessUser.Id);
            this.userId = currentAccessUser.Id;
            this.sreachKhoaPhong =new SreachKhoaPhong(this.userId, [], []);
        }
    }

    getById(id: number) {
        this.apiService
            .get<HoSoCuaToi>('NhanVien/GetNhanVienProflie/' + id)
            .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                    this.hoSoCuaToi = resultData;
                    this.khoaPhongIds = JSON.stringify(this.hoSoCuaToi.KhoaPhongIds);
                    this.loadPhongKhamHienTaiByNhanVien(id, this.khoaPhongIds);
                }
            });
    }

    fileProgress(fileInput: any) {
        this.fileData = fileInput.target.files[0] as File;
        this.preview();
    }

    preview() {
        if (this.fileData !== undefined) {
            const mimeType = this.fileData.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(this.fileData);
            reader.onload = (_event) => {
                this.hoSoCuaToi.Avatar = reader.result;
            };
        }
    }

    GetDataKhoaPhong(result: GridThongTinKhoaPhongModel) {
        this.dataSourceKhoaPhong.Data = [...result.Data];
        this.dataSourceKhoaPhong.TotalRowCount = result.TotalRowCount;
        const nhomKhoaIds = [...this.dataSourceKhoaPhong.Data.map(x => x.NhomKhoaId).filter((value, index, self) => {
            return self.indexOf(value) === index;
        })];
        nhomKhoaIds.forEach(x => {
            this.nhomKhoaPhongs.push({
                Id: x,
                Visit: false
            });
        });
        this.WillCheckAll();

        if (this.userId !== 0) {
            this.bindCheckEditUserKho(result.Data);
        }

        setTimeout(() => {
            result.Data.forEach(x => {
                if (x.PhongChinh) {
                    $('#phongChinh' + x.Id).prop('checked', true);
                }
            });
        }, 100);
    }

    GetDataKho(result: GridThongTinKhoModel) {
        this.dataSourceKho.Data = [...result.Data];
        this.dataSourceKho.TotalRowCount = result.TotalRowCount;
        this.WillCheckAllKho();
    }

    SelectionKho(khoId: any) {
        this.modelFE.KhoNhanVienQuanLyIds = khoId;
    }

    searchKhoChanges(dataEvent: any) {
        this.gridKho.searchString = dataEvent;
        this.gridKho.setDataSource();
    }

    WillCheckAll() {
        if (this.dataSourceKhoaPhong.Data.length === this.dataSourceKhoaPhong.Data.filter(x => x.IsChecked).length) {
            if (!this.isCheckAll) {
                this.isCheckAll = true;
            }
        }
    }

    WillCheckAllKho() {
        if (this.dataSourceKho.Data.length === this.dataSourceKho.Data.filter(x => x.DaChon).length) {
            if (!this.isCheckAllKho) {
                this.isCheckAllKho = true;
            }
        }
    }

    bindCheckEditUserKho(data: any) {
        data.filter(x => x.IsChecked).forEach(item => {
            this.sreachKhoaPhong.PhongBenhVienIds.push(item.Id);
            if (item.IsCheckedParent) {
                this.nhomKhoaPhongs.filter(x => x.Visit === false && x.Id === item.NhomKhoaId).forEach(nhomKhoa => {
                    nhomKhoa.Visit = true;
                    this.sreachKhoaPhong.KhoaPhongIds.push(nhomKhoa.Id);
                });
            }
        });

        // sreach kho theo phong kho đã có sẳn
        this.sreachKhoaPhong.NhanVienId = this.userId;
        this.sreachKhoaPhongJson = JSON.stringify(this.sreachKhoaPhong);
        this.gridKho._additionalSearchString = this.sreachKhoaPhongJson;
        this.gridKho._masterName = 'khonhanvien';
        this.gridKho.setDataSource();
    }

    ChonPhongChinh(phongChinh: any) {
        this.modelFE.PhongChinhId = phongChinh;
    }

    ViewImage(thongTinAnh: HoSoCuaToi) {
        if (thongTinAnh.Avatar === undefined) {
            thongTinAnh.Avatar = null;
        }

        this.dialog.open(ViewImagePdfComponent, {
            disableClose: false,
            width: '1000px',
            height: '600px',
            data: {
                Type: 'Image',
                Title: 'Xem ảnh',
                Description: '',
                Src: thongTinAnh.Avatar,
            },
        });
    }

    searchChanges(dataEvent: any) {
        this.gridKhoaPhong.searchString = dataEvent;
        this.gridKhoaPhong.setDataSource();
    }

    CapNhat() {
        this.validationErrors = [];
        this.dialog
            .open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: {
                    Title: 'Xác nhận',
                    Message: CommonService.format(SystemMessage.MessConfirm, [
                        'cập nhật',
                    ]),
                },
            })
            .afterClosed()
            .subscribe((result) => {
                /* result is a string:Yes,No,No answer*/
                if (result === 'Yes') {
                    this.apiService
                        .post('NhanVien/CapNhatProfileNhanVien', this.hoSoCuaToi)
                        .subscribe(
                            () => {
                                this.notificationService.showSuccess(
                                    'Cập nhật hồ sơ thành công.'
                                );
                            },
                            (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                if (err.Message !== 'Validation Failed') {
                                    this.notificationService.showError(err.Message);
                                }
                            }
                        );
                }
            });
    }

    loadPhongKhamHienTaiByNhanVien(userId: any, khoaPhongs) {
        this.apiService
            .get<any>(
                'NhanVien/GetListPhongByKhoa?nhanVienId=' +
                userId +
                '&khoaphongIds=' +
                khoaPhongs
            )
            .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                    this.phongKhamHienTais = resultData;
                }
            });
    }
}
