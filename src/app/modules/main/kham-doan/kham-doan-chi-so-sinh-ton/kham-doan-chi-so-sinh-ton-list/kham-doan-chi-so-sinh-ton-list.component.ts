import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCopy from '@iconify/icons-ic/outline-content-copy';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage, TaiKhoanNguoiDungMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KetQuaSinhHieu, KhamDoanChiSoSinhTonDetailed, KhamDoanChiSoSinhTonTimKiem, KhamDoanChiSoSinhTonTimKiemGrid } from '../kham-doan-chi-so-sinh-ton.model';
import { DuTruTheoDuocPhamDetail } from '../../../nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-giam-doc/du-tru-giam-doc.model';
import {
    KhamDoanChiSoSinhTonDetailedComponent
} from '../kham-doan-chi-so-sinh-ton-detailed/kham-doan-chi-so-sinh-ton-detailed.component';
import { KhamDoanTiepNhanNhanVienTimKiem } from '../../kham-doan-tiep-nhan/kham-doan-tiep-nhan.model';
import { KhamDoanThongTinHanhChinh, TimKiemHopDongKhamTheoCongTy } from '../../kham-doan.model';
import { HinhThucKhamBenh } from 'src/app/shared/enum/kham-doan.enum';
import { Observable } from 'rxjs-compat';
import { delayWhen, retryWhen, tap } from 'rxjs/operators';
import { timer } from 'rxjs';
declare var jQuery: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kham-doan-chi-so-sinh-ton-list',
    templateUrl: './kham-doan-chi-so-sinh-ton-list.component.html',
    styleUrls: ['./kham-doan-chi-so-sinh-ton-list.component.scss']
})
export class KhamDoanChiSoSinhTonListComponent implements OnInit {

    icSearch = icSearch;
    icFileExcel = icFileExcel;
    icFilterList = icFilterList;
    icAdd = icAdd;
    icDelete = icDelete;
    icCopy = icCopy;

    searchCtrl = new FormControl();
    documentType: DocumentType;
    baseRoute = '/kham-doan/do-chi-so-sinh-ton';

    gridColumns: any[] = [];
    _isCheckColumnFilter = true;
    yeuCauTiepNhanId: number;
    strAdditionalSearchString = '';
    timKiemObj: KhamDoanTiepNhanNhanVienTimKiem = new KhamDoanTiepNhanNhanVienTimKiem();
    thongTinHopDong: TimKiemHopDongKhamTheoCongTy = new TimKiemHopDongKhamTheoCongTy();
    getDataForGridUrl = 'KhamDoan/GetDataForListNhanVienKhamChiSoSinhTon';
    getTotalForGridUrl = 'KhamDoan/GetTotalPageForListNhanVienKhamChiSoSinhTon';
    validationErrors: any;
    popupLoadingData: any;
    format = 'n2';
    public nhanVienId: number;

    current: Date = new Date();
    gridSinhHieuColumns: any[] = [];
    dataSourceSinhHieu: any = {
        data: [],
        total: 0
    };

    ketQuaSinhHieu: KetQuaSinhHieu = new KetQuaSinhHieu();

    dataSourceSinhHieuDisplay: any = {
        data: [],
        total: 0
    };

    
    khamDoanSinhTon: KhamDoanChiSoSinhTonDetailed = new KhamDoanChiSoSinhTonDetailed();
    thongTinHanhChinh: KhamDoanThongTinHanhChinh = new KhamDoanThongTinHanhChinh();
    lanDauLoadData: boolean = true;
    changeDataCongTy: boolean = false;
    @ViewChild('maNhanVienTemplate', { static: true }) maNhanVienTemplate: TemplateRef<any>;
    @ViewChild('tenNhanVienTemplate', { static: true }) tenNhanVienTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
    @ViewChild('gridNhanVien', { static: true }) gridChild: GridComponent;
    @ViewChild('gridNhanVienDaDo', { static: true }) gridNhanVienDaDo: GridComponent;

    @ViewChild('actionSinhHieuTemplate', { static: true }) actionSinhHieuTemplate: TemplateRef<any>;
    @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
    @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
    @ViewChild('nhipTimTemplate', { static: true }) nhipTimTemplate: TemplateRef<any>;
    @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
    @ViewChild('BMITemplate', { static: true }) BMITemplate: TemplateRef<any>;
    @ViewChild('glassgowTemplate', { static: true }) glassgowTemplate: TemplateRef<any>;
    @ViewChild('spO2Template', { static: true }) spO2Template: TemplateRef<any>;
    @ViewChild('gridSinhHieu', { static: false }) gridSinhHieu: GridComponent;

    constructor(
        private authService: AuthService,
        private notificationService: NotificationService,
        private route: ActivatedRoute,
        private location: Location,
        private dialog: MatDialog,
        private apiService: ApiService,
        private router: Router
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.KhamDoanChiSoSinhTon;
        this.gridColumns = [
            { Field: 'MaYeuCauTiepNhan', Title: 'Mã Tiếp nhận', Width: 80 },
            { Field: 'MaNhanVien', Title: 'Mã NV', Width: 80 }, //, Template: this.maNhanVienTemplate
            { Field: 'TenNhanVien', Title: 'Tên NV', Width: 100, Template: this.tenNhanVienTemplate },
            { Field: 'GioiTinh', Title: 'Giới tính', Width: 90 },
            { Field: 'NamSinh', Title: 'Năm sinh', Width: 90 },
            { Field: 'DonViBoPhan', Title: 'Bộ phận', Width: 90 },

            // { Field: 'SoDienThoai', Title: 'SĐT', Width: 90 },
            // { Field: 'Email', Title: 'Email', Width: 90 },
            // { Field: 'ChungMinhThu', Title: 'CMT/HC', Width: 90 },
            // { Field: 'DanToc', Title: 'Dân tộc', Width: 90 },
            // { Field: 'TinhThanh', Title: 'Tỉnh/TP', Width: 90 },
            // { Field: 'NhomKham', Title: 'Nhóm khám', Width: 90 },
            // { Field: 'TinhTrangSoDoCSST', Title: 'Tình trạng', Width: 120, Template: this.tinhTrangTemplate }
        ];

        this.gridSinhHieuColumns = [
            { Field: 'NhipTim', Title: 'Mạch (nhịp/phút)', Width: 137, Template: this.nhipTimTemplate },
            { Field: 'ThanNhiet', Title: 'Nhiệt độ (°C)', Width: 100, Template: this.thanNhietTemplate },
            { Field: 'HuyetAp', Title: 'Huyết áp (mmHg)', Width: 135, Template: this.huyetApTemplate },
            { Field: 'NhipTho', Title: 'Nhịp thở (lần/phút)', Width: 150, Template: this.nhipThoTemplate },
            { Field: 'CanNang', Title: 'Cân nặng (kg)', Width: 113, Template: this.canNangTemplate },
            { Field: 'ChieuCao', Title: 'Chiều cao (cm)', Width: 117, Template: this.chieuCaoTemplate },
            { Field: 'BMI', Title: 'BMI (kg/m²)', Width: 91, Template: this.BMITemplate },
            { Field: 'Glassgow', Title: 'Glassgow', Width: 120, Template: this.glassgowTemplate },
            { Field: 'SpO2', Title: 'SpO2 (%)', Width: 120, Template: this.spO2Template },
            { Field: 'NgayThucHien', Title: 'Ngày thực hiện', Width: 145 },
            { Field: 'Action', Title: '', Width: 70, Template: this.actionSinhHieuTemplate }
        ];
        this.lanDauLoadData = false;
        this.timKiemNangCao();
        jQuery("#splitter").css({ "height": jQuery(window).height() - 200 });
    }
    changeLookupHopDong(event) {
        if (!this.lanDauLoadData && this.changeDataCongTy) {
            if (event && event.length > 0 && this.thongTinHopDong.CongTyId && !this.thongTinHopDong.HopDongId) {
                this.thongTinHopDong.HopDongId = event[0].KeyId;
                this.changeDataCongTy = false;
                this.getThongTinHopDongById();
            }
        }
    }

    changeCongTy(event) {
        if (event != undefined && event != null) {
            this.changeDataCongTy = true;
            this.thongTinHopDong.HopDongId = null;
            this.clearThongTinHopDong();
        }
        else {
            this.changeDataCongTy = true;
            this.thongTinHopDong.HopDongId = null;        
            this.clearThongTinHopDong();    
            this.timKiemNangCao();
        }

    }

    changeHopDong(event) {
        if (event != undefined && event != null) {
            this.getThongTinHopDongById();
        }
        else {
            this.clearThongTinHopDong();
            this.timKiemNangCao();
        }
    }

    clearThongTinHopDong() {
        this.thongTinHopDong.NgayHopDong = null;
        this.thongTinHopDong.LoaiHopDong = null;
        this.thongTinHopDong.TrangThai = null;
        this.thongTinHopDong.SoBenhNhan = null;
        this.thongTinHopDong.NgayHieuLuc = null;
        this.thongTinHopDong.NgayKetThuc = null;
        this.clearThongTinCSST();
    }

    clearThongTinCSST() {
        this.yeuCauTiepNhanId = null;
        this.ketQuaSinhHieu = new KetQuaSinhHieu();
    }

    getThongTinHopDongById(reloadGrid: boolean = true) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.showPopupLoadingData();
            this.apiService.post<any>("KhamDoan/TimKiemThongTinHopDongKhamTheoCongTy", this.thongTinHopDong)
                .subscribe((resultData) => {
                    this.thongTinHopDong = resultData;
                    if (reloadGrid) {
                        this.timKiemNangCao();
                    }
                    this.closePopupLoadingData();
                },
                    (err: ApiError) => {
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                        this.closePopupLoadingData();
                    });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupLoadingData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải dữ liệu...' },
            });
        }
    }

    searchChanges(event) {
        if ((event == null || event == "")) {
            this.timKiemNangNhanChuaDo();
        }
    }

    onKey(event: any) {
        if (event.key == "Enter") {
            this.timKiemNangNhanChuaDo();
        }
    }

    clearSearch() {
        this.timKiemObj.SearchString = null;
        this.gridChild.searchString = null;
        this.timKiemNangNhanChuaDo();
    }

    searchChangeDaDos(event) {
        if ((event == null || event == "")) {
            this.timKiemNangNhanDaDo();
        }
    }

    onKeyDaDo(event: any) {
        if (event.key == "Enter") {
            this.timKiemNangNhanDaDo();
        }
    }

    clearSearchDaDo() {
        this.timKiemObj.SearchString = null;
        this.gridChild.searchString = null;
        this.timKiemNangNhanDaDo();
    }

    timKiemNangNhanChuaDo() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        this.kiemTraChonHopDong();

        this.timKiemObj.TrangThai = null;

        this.timKiemObj.TinhTrangDoChiSoSinhTon.ChuaDo = true;
        this.timKiemObj.TinhTrangDoChiSoSinhTon.DaDo = false;

        var queryString = JSON.stringify(this.timKiemObj);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }

    timKiemNangNhanDaDo() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        this.kiemTraChonHopDong();


        this.timKiemObj.TrangThai = null;
        this.timKiemObj.TinhTrangDoChiSoSinhTon.ChuaDo = false;
        this.timKiemObj.TinhTrangDoChiSoSinhTon.DaDo = true;

        this.timKiemObj.SearchString = this.timKiemObj.SearchDaDoString;
        var queryStringDaDo = JSON.stringify(this.timKiemObj);
        this.timKiemObj.SearchString = null;
        this.gridNhanVienDaDo._additionalSearchString = queryStringDaDo;
        this.gridNhanVienDaDo.search();
    }

    kiemTraChonHopDong() {
        this.timKiemObj.CongTyId = !this.thongTinHopDong.CongTyId ? 0 : this.thongTinHopDong.CongTyId;
        this.timKiemObj.HopDongId = !this.thongTinHopDong.HopDongId ? 0 : this.thongTinHopDong.HopDongId;

        this.timKiemObj.IsDangKhamVaDaKham = true;
        // this.timKiemObj.TrangThai.HuyKham = false;
    }

    timKiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        this.kiemTraChonHopDong();

        this.timKiemObj.TrangThai = null;

        this.timKiemObj.TinhTrangDoChiSoSinhTon.ChuaDo = true;
        this.timKiemObj.TinhTrangDoChiSoSinhTon.DaDo = false;
        var queryString = JSON.stringify(this.timKiemObj);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();

        this.timKiemObj.TinhTrangDoChiSoSinhTon.ChuaDo = false;
        this.timKiemObj.TinhTrangDoChiSoSinhTon.DaDo = true;
        var queryStringDaThu = JSON.stringify(this.timKiemObj);
        this.gridNhanVienDaDo._additionalSearchString = queryStringDaThu;
        this.gridNhanVienDaDo.search();
        this.closePopupLoadingData();
    }

    xuLyXuatExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            // tslint:disable-next-line: deprecation
            this.apiService.postExportExcel<string>('KhamDoan/ExportDanhSachCongTy', this.gridChild._gridQueryInfo).subscribe(res => {
                const dateTimeNow = new Date();
                CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'CongTy' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupChiTiet(id: number = null) {
        let securityOperation = SecurityOperation.Add;
        let url = '/them/';
        if (id != null) {
            securityOperation = SecurityOperation.Update;
            url = '/chi-tiet/';
        }
        if (this.authService.hasPermission(this.documentType, securityOperation)) {
            this.router.navigate([this.baseRoute + url + (id == null ? '' : id)]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xoa(Id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
                // tslint:disable-next-line: deprecation
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    // tslint:disable-next-line: deprecation
                    this.apiService.delete('KhamDoan/XuLyXoaCongTy?id=' + Id).subscribe(_ => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
                        this.gridChild.search();
                    }, err => {
                        if (err.Message !== 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }


    showPopupChiTietNhanVien(id: number, yeuCauTiepNhanId: number) {
        this.yeuCauTiepNhanId = yeuCauTiepNhanId;
        this.nhanVienId = id;
        this.getThongTinHanhChinh(yeuCauTiepNhanId);
        this.getDataCongTy(id, yeuCauTiepNhanId);
    }

    getThongTinHanhChinh(yeuCauTiepNhanId: number) {
        this.apiService
            .get<KhamDoanThongTinHanhChinh>("KhamDoan/GetThongTinHanhChinh?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe(
                (resultData) => {
                    this.thongTinHanhChinh = resultData;
                },
                (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                }
            );
    }

    submit() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "400px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn lưu chỉ số sinh tồn này không?"
            },
        })
            .afterClosed()
            .subscribe((result) => {
                if (result == "Yes") {
                    this.dataSourceSinhHieu.data = [];
                    this.ketQuaSinhHieu.IsUpdate = true;
                    this.dataSourceSinhHieu.data.push(this.ketQuaSinhHieu);
                    const sendingParam = {
                        data: [...this.dataSourceSinhHieu.data],
                        Id: this.yeuCauTiepNhanId
                    };
                    console.log(sendingParam);
                    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
                        this.showPopupLoadingData();
                        this.apiService.post('KhamDoan/UpdateChiSoSinhTonAsync',
                            sendingParam)
                            // tslint:disable-next-line: deprecation
                            .subscribe(
                                _ => {
                                    this.notificationService.
                                        showSuccess(CommonService.format(TaiKhoanNguoiDungMessage.MessageChangeSuccessfully, ['Cập nhật']));
                                    //this.quayLai();
                                    this.dataSourceSinhHieu = {
                                        data: [],
                                        total: 0
                                    };

                                    this.dataSourceSinhHieuDisplay = {
                                        data: [],
                                        total: 0
                                    };

                                    this.apiService.get<any>
                                        (`KhamDoan/GetDataListForChiSoSinhTon?id=` + this.yeuCauTiepNhanId).subscribe((resultData) => {
                                            if (resultData !== null && resultData !== undefined) {
                                                this.dataSourceSinhHieu = {
                                                    data: [...resultData.Data],
                                                    total: resultData.Data.length
                                                };
                                                this.dataSourceSinhHieuDisplay = {
                                                    data: [...resultData.Data],
                                                    total: resultData.Data.length
                                                };
                                            }
                                        });

                                    this.timKiemObj.SearchString = null;
                                    this.timKiemObj.SearchDaDoString = null;
                                    this.timKiemNangCao();

                                    this.closePopupLoadingData();
                                },
                                (err: any) => {
                                    this.notificationService.showError(err.Message);
                                    this.closePopupLoadingData();
                                });
                    } else {
                        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    }
                }
            });

    }

    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }

    getDataCongTy(id: number, yeuCauTiepNhanId: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showPopupLoadingData();
            Observable.forkJoin([
                this.apiService.get<KhamDoanChiSoSinhTonDetailed>
                    (`KhamDoan/GetHopDongKhamSucKhoe?id=${id}`)
                    .pipe(retryWhen(errors =>
                        errors.pipe(
                            tap(_ => {
                                this.khamDoanSinhTon = new KhamDoanChiSoSinhTonDetailed();
                            }),
                            delayWhen(_ => {
                                return timer(5 * 1000);
                            })
                        ))),
                this.apiService.get<any>
                    (`KhamDoan/GetDataListForChiSoSinhTon?id=${yeuCauTiepNhanId}`)
                    .pipe(retryWhen(errors =>
                        errors.pipe(
                            tap(_ => {
                                this.dataSourceSinhHieu = {
                                    data: [],
                                    total: 0
                                };

                                this.dataSourceSinhHieuDisplay = {
                                    data: [],
                                    total: 0
                                };
                            }),
                            delayWhen(_ => {
                                return timer(5 * 1000);
                            })
                        )))
                // tslint:disable-next-line: deprecation
            ]).subscribe(results => {
                this.khamDoanSinhTon = { ...results[0] };
                this.dataSourceSinhHieu = {
                    data: [...results[1].Data],
                    total: results[1].Data.length
                };
                this.dataSourceSinhHieuDisplay = {
                    data: [...results[1].Data],
                    total: results[1].Data.length
                };

                if (this.dataSourceSinhHieu.data.length > 0) {
                    this.ketQuaSinhHieu = this.dataSourceSinhHieu.data[this.dataSourceSinhHieu.data.length - 1];
                }
                else {
                    this.ketQuaSinhHieu = new KetQuaSinhHieu();
                    this.ketQuaSinhHieu.NgayThucHien = CommonService.formatDateTimeSACH(this.current, 'dd/mm/yyyy').toString();
                }

                this.closePopupLoadingData();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    themChiSoSinhTon() {
        if (this.dataSourceSinhHieuDisplay.data.findIndex(x => x.Id === 0) === -1) {

            const newItem = new KetQuaSinhHieu();
            newItem.NgayThucHien = CommonService.formatDateTimeSACH(this.current, 'dd/mm/yyyy').toString();
            this.dataSourceSinhHieuDisplay.data.push(newItem);
            this.dataSourceSinhHieu.data.push(newItem);
        } else {
            const sendingParam = {
                data: [...this.dataSourceSinhHieu.data],
                Id: this.yeuCauTiepNhanId
            };
            if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
                this.showPopupLoadingData();
                this.apiService.post('KhamDoan/UpdateChiSoSinhTonAsync',
                    sendingParam)
                    // tslint:disable-next-line: deprecation
                    .subscribe(
                        _ => {
                            this.notificationService.
                                showSuccess(CommonService.format(TaiKhoanNguoiDungMessage.MessageChangeSuccessfully, ['Cập nhật']));

                            //this.quayLai();
                            this.dataSourceSinhHieu = {
                                data: [],
                                total: 0
                            };

                            this.dataSourceSinhHieuDisplay = {
                                data: [],
                                total: 0
                            };
                            this.apiService.get<any>
                                (`KhamDoan/GetDataListForChiSoSinhTon?id=` + this.yeuCauTiepNhanId).subscribe((resultData) => {
                                    if (resultData !== null && resultData !== undefined) {
                                        this.dataSourceSinhHieu = {
                                            data: [...resultData.Data],
                                            total: resultData.Data.length
                                        };

                                        this.dataSourceSinhHieuDisplay = {
                                            data: [...resultData.Data],
                                            total: resultData.Data.length
                                        };
                                        const newItem = new KetQuaSinhHieu();
                                        newItem.NgayThucHien = CommonService.formatDateTimeSACH(this.current, 'dd/mm/yyyy').toString();
                                        this.dataSourceSinhHieuDisplay.data.push(newItem);
                                        this.dataSourceSinhHieu.data.push(newItem);
                                    }
                                });
                            this.closePopupLoadingData();
                        },
                        (err: any) => {
                            this.notificationService.showError(err.Message);
                            this.closePopupLoadingData();
                        });
            }

        }
    }

    onChangeNhipTim(data: any, input: any) {
        if (input % 1 !== 0) {
            data.NhipTim = input.toFixed();

            if (typeof data.NhipTim === 'string') {
                data.NhipTim = Number(data.NhipTim);
            }
        }
    }

    onChangeNhipTho(input: any, dataItem) {
        if (input % 1 !== 0) {
            dataItem.NhipTho = input.toFixed();

            if (typeof dataItem.NhipTho === 'string') {
                dataItem.NhipTho = Number(dataItem.NhipTho);
            }
        }
    }

    onChangeHuyetApTamThu(input: any, dataItem) {
        if (input % 1 !== 0) {
            dataItem.HuyetApTamThu = input.toFixed();

            if (typeof dataItem.HuyetApTamThu === 'string') {
                dataItem.HuyetApTamThu = Number(dataItem.HuyetApTamThu);
            }
        }

        if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
            dataItem.HuyetAp = null;
        } else {
            dataItem.HuyetAp = dataItem.HuyetApTamThu + '/' + dataItem.HuyetApTamTruong;
        }
    }

    onChangeHuyetApTamTruong(input: any, dataItem) {
        if (input % 1 !== 0) {
            dataItem.HuyetApTamTruong = input.toFixed();

            if (typeof dataItem.HuyetApTamTruong === 'string') {
                dataItem.HuyetApTamTruong = Number(dataItem.HuyetApTamTruong);
            }
        }

        if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
            dataItem.HuyetAp = null;
        } else {
            dataItem.HuyetAp = dataItem.HuyetApTamThu + '/' + dataItem.HuyetApTamTruong;
        }
    }

    onChangeCanNang(data: any) {
        const chieuCao = data.ChieuCao / 100;

        if (chieuCao === 0) {
            data.BMI = null;
            return;
        }

        data.BMI = data.CanNang / (chieuCao * chieuCao);
    }

    onChangeChieuCao(data: any) {
        const chieuCao = data.ChieuCao / 100;

        if (chieuCao === 0) {
            data.BMI = null;
            return;
        }

        data.BMI = data.CanNang / (chieuCao * chieuCao);
    }

    suaChiSoSinhHieu(dataItem: any) {
        
        if (dataItem) {
            dataItem.IsUpdate = true;
            this.dataSourceSinhHieu.data.filter(x => x === dataItem)[0].IsUpdate = true;
            dataItem.NgayThucHien = CommonService.formatDateTimeSACH(new Date(), 'dd/mm/yyyy').toString();
        }
    }

    xoaChiSoSinhHieu(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed()
            // tslint:disable-next-line: deprecation
            .subscribe(result => {
                if (result === 'Yes' && this.dataSourceSinhHieuDisplay.data.some(x => x === item)) {
                    this.dataSourceSinhHieu.data.filter(x => x === item)[0].IsDelete = true;
                    this.dataSourceSinhHieuDisplay.data.splice(this.dataSourceSinhHieuDisplay.data.findIndex(x => x === item), 1);
                }
            });
    }

    huy() {
        this.ketQuaSinhHieu = new KetQuaSinhHieu();
    }
}
