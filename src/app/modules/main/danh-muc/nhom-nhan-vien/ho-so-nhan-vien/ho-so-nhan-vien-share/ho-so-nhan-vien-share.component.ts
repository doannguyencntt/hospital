import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
    GridThongTinKhoaPhongModel, GridThongTinKhoModel, HoSoNhanVien,
    KhoaPhongIdViewModel, NhomKhoaPhongModel, SreachKhoaPhong, ThongTinKhoaPhong
} from '../ho-so-nhan-vien.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { MatDialog } from '@angular/material';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { ApiService } from 'src/app/core/services/api.service';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import icClear from '@iconify/icons-ic/twotone-clear';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-ho-so-nhan-vien-share',
    templateUrl: './ho-so-nhan-vien-share.component.html',
    styleUrls: ['./ho-so-nhan-vien-share.component.scss'],
})
export class HoSoNhanVienShareComponent implements OnInit {
    Multiselect: any;
    modelFE = {} as HoSoNhanVien;
    khoaPhongIdViewModel = {} as KhoaPhongIdViewModel;
    sreachKhoaPhong = new SreachKhoaPhong(0, [], []);
    sreachKhoaPhongJson = null;

    khoaPhongIds = '';
    validationErrors: any;
    fileData: File = null;
    public id: number;
    public userId = 0;
    public phongKhamHienTais: any;
    public isChonKhoaPhong = true;
    public allKhoaPhong = true;
    gridKhoaPhongsColumn: any[] = [];
    gridKhoColumn: any[] = [];

    dataSourceKhoaPhong: GridThongTinKhoaPhongModel = {
        data: [],
        total: 0
    };
    
    gridDataKhoSource: GridThongTinKhoModel = {
        data: [],
        total: 0
    };

    khoaPhongViewModel = [];
    tmpdataSourceKhoaPhongViewModel = [];
    tmp1dataSourceKhoaPhongViewModel = [];

    khoViewModel = [];
    tmpdataSourceKhoViewModel = [];
    tmp1dataSourceKhoViewModel = [];


    gridDataKhoSourceTam: GridThongTinKhoModel = {
        data: [],
        total: 0
    };

    gridDataSource: any = {
        data: [],
        total: 0
    };

    public groups: GroupDescriptor[] = [{
        field: 'NhomKhoa', aggregates: [
            { field: 'PhongChinh', aggregate: 'sum' }
        ]
    }];

    icSearch = icSearch;
    searchCtrl = new FormControl();
    searchString: string;
    searchStringKho: string;
    nhomKhoaPhongs: NhomKhoaPhongModel[] = [];
    isCheckAll = false;

    urlGetDataGridKhoaPhongAsync = 'NhanVien/GetListKhoaPhongDataForGridAsync';
    urlGetDataGridPhongBenhVienAsync = 'NhanVien/GetListKhoTheoPhongDataForGridAsync';

    @ViewChild('gridKhoaPhong', { static: false }) gridKhoaPhong: GridComponent;
    @ViewChild('gridKho', { static: false }) gridKho: GridComponent;
    @ViewChild('lstPtttCmb', { static: false }) lstPtttCmb: ComboboxComponent;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('maPhongTemplate', { static: true }) maPhongTemplate: TemplateRef<any>;
    @ViewChild('maPhongTemplateHeader', { static: true }) maPhongTemplateHeader: TemplateRef<any>;
    @ViewChild('phongChinhTemplate', { static: true }) phongChinhTemplate: TemplateRef<any>;

    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    icClear = icClear;
    constructor(
        private route: ActivatedRoute,
        private baseService: BaseService,
        private dialog: MatDialog,
        private apiService: ApiService
    ) { }

    ngOnInit() {
        this.gridKhoaPhongsColumn = [
            {
                Field: 'NhomKhoa', Title: 'Nhóm', Width: 0, Sortable: true,
                Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate
            },
            { Field: '', Title: '', Width: 50, Sortable: true, TemplateHeader: this.maPhongTemplateHeader, Template: this.maPhongTemplate },
            { Field: 'MaPhong', Title: 'Mã', Width: 100, Sortable: true },
            { Field: 'TenPhong', Title: 'Tên', Width: 386, Sortable: true },
            { Field: 'PhongChinh', Title: 'Phòng chính', Width: 255, Sortable: true, Template: this.phongChinhTemplate }
        ];
        this.gridKhoColumn = [
            { Field: 'TenKho', Title: 'Tên', Width: 200, Sortable: true },
            { Field: 'TenKhoa', Title: 'Khoa', Width: 100, Sortable: true },
            { Field: 'TenPhong', Title: 'Phòng', Width: 100, Sortable: true },
        ];

        this.modelFE.GioiTinh = 1;
        this.modelFE.TaoTaiKhoan = true;
        this.id = this.route.snapshot.params.id;
        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
            this.userId = this.id;
        }
        this.modelFE.KhoaPhongIds = [];
        this.modelFE.PhongBenhVienIds = [];
    }

    onSelectAll(isCheck: boolean) {
        if (isCheck) {
            // đang check
            this.dataSourceKhoaPhong.data.forEach(khoaPhong => {
                khoaPhong.IsChecked = true;
                if (!this.sreachKhoaPhong.PhongBenhVienIds.some(x => x === khoaPhong.Id)) {
                    this.sreachKhoaPhong.PhongBenhVienIds.push(khoaPhong.Id);
                    this.modelFE.PhongBenhVienIds.push(khoaPhong.Id);
                }
            });
            this.nhomKhoaPhongs.forEach(nhomKhoaPhong => {
                const id = '#check_' + nhomKhoaPhong.Id;
                if (!$(id).hasClass('mat-checkbox-checked')) {
                    $(id).addClass('mat-checkbox-checked');
                    $(id).attr('ng-reflect-model', 'true');
                }
                if (!this.sreachKhoaPhong.KhoaPhongIds.some(x => x === nhomKhoaPhong.Id)) {
                    this.sreachKhoaPhong.KhoaPhongIds.push(nhomKhoaPhong.Id);
                    this.modelFE.KhoaPhongIds.push(nhomKhoaPhong.Id);
                }
            });
        } else {
            // uncheck
            this.dataSourceKhoaPhong.data.forEach(khoaPhong => {
                khoaPhong.IsChecked = false;
                if (this.sreachKhoaPhong.PhongBenhVienIds.some(x => x === khoaPhong.Id)) {
                    const pos = this.sreachKhoaPhong.PhongBenhVienIds.indexOf(khoaPhong.Id);
                    if (pos > -1) {
                        this.sreachKhoaPhong.PhongBenhVienIds.splice(pos, 1);
                    }

                    const posDb = this.modelFE.PhongBenhVienIds.indexOf(khoaPhong.Id);
                    if (posDb > -1) {
                        this.modelFE.PhongBenhVienIds.splice(posDb, 1);
                    }
                }
            });
            this.nhomKhoaPhongs.forEach(nhomKhoaPhong => {
                const id = '#check_' + nhomKhoaPhong.Id;
                if ($(id).hasClass('mat-checkbox-checked')) {
                    $(id).removeClass('mat-checkbox-checked');
                    $(id).attr('ng-reflect-model', 'false');
                }
                if (this.sreachKhoaPhong.KhoaPhongIds.some(x => x === nhomKhoaPhong.Id)) {
                    const pos = this.sreachKhoaPhong.KhoaPhongIds.indexOf(nhomKhoaPhong.Id);
                    if (pos > -1) {
                        this.sreachKhoaPhong.KhoaPhongIds.splice(pos, 1);
                    }
                    const posDb = this.modelFE.KhoaPhongIds.indexOf(nhomKhoaPhong.Id);
                    if (posDb > -1) {
                        this.modelFE.KhoaPhongIds.splice(posDb, 1);
                    }
                }
            });

           
        }
        
        this.gridKho.gridDataSource = null;
        this.sreachKhoaPhongJson = JSON.stringify(this.sreachKhoaPhong);
        this.gridKho._additionalSearchString = this.sreachKhoaPhongJson;
        this.gridKho._masterName = 'khonhanvien';
        this.gridKho.setDataSource();
    }

    OnChangeParent(isChecked: boolean, data: any, aggregates: any) {
        aggregates.items.forEach(item => {
            item.IsCheckedParent = true;
            if (item.IsChecked === false) {
                item.IsCheckedParent = false;
            }
        });

        const id = '#check_' + data.items[0].NhomKhoaId;
        isChecked = !$(id).hasClass('mat-checkbox-checked');
        if (isChecked) {
            data.items.forEach(children => {
                children.IsChecked = true;
                if (!this.sreachKhoaPhong.PhongBenhVienIds.some(x => x === children.Id)) {
                    this.sreachKhoaPhong.PhongBenhVienIds.push(children.Id);
                    this.modelFE.PhongBenhVienIds.push(children.Id);
                }
            });
            if (!$(id).hasClass('mat-checkbox-checked')) {
                setTimeout(() => {
                    $(id).addClass('mat-checkbox-checked');
                }, 100);
            }
            this.WillCheckAll();
            this.sreachKhoaPhong.KhoaPhongIds.push(data.items[0].NhomKhoaId);
            this.modelFE.KhoaPhongIds.push(data.items[0].NhomKhoaId);
        } else {
            data.items.forEach(children => {
                children.IsChecked = false;
                if (this.sreachKhoaPhong.PhongBenhVienIds.some(x => x === children.Id)) {
                    const pos = this.sreachKhoaPhong.PhongBenhVienIds.indexOf(children.Id);
                    if (pos > -1) {
                        this.sreachKhoaPhong.PhongBenhVienIds.splice(pos, 1);
                    }

                    const posDb = this.modelFE.PhongBenhVienIds.indexOf(children.Id);
                    if (posDb > -1) {
                        this.modelFE.PhongBenhVienIds.splice(posDb, 1);
                    }
                }
            });
            if ($(id).hasClass('mat-checkbox-checked')) {
                setTimeout(() => {
                    $(id).removeClass('mat-checkbox-checked');
                }, 100);
            }
            if (this.sreachKhoaPhong.KhoaPhongIds.some(x => x === data.items[0].NhomKhoaId)) {
                const pos = this.sreachKhoaPhong.KhoaPhongIds.indexOf(data.items[0].NhomKhoaId);
                if (pos > -1) {
                    this.sreachKhoaPhong.KhoaPhongIds.splice(pos, 1);
                }

                const posDb = this.modelFE.KhoaPhongIds.indexOf(data.items[0].NhomKhoaId);
                if (posDb > -1) {
                    this.modelFE.KhoaPhongIds.splice(posDb, 1);
                }
            }
            if (this.isCheckAll) {
                this.isCheckAll = false;
            }
        }

        this.gridKho.gridDataSource = null;
        this.sreachKhoaPhongJson = JSON.stringify(this.sreachKhoaPhong);
        this.gridKho._additionalSearchString = this.sreachKhoaPhongJson;
        this.gridKho._masterName = 'khonhanvien';
        this.gridKho.setDataSource();
    }

    OnChangeChildren(isChecked: boolean, kpNv: ThongTinKhoaPhong) {
        kpNv.IsChecked = isChecked;
        const id = '#check_' + kpNv.NhomKhoaId;

        if (!this.dataSourceKhoaPhong.data.some(x => x.NhomKhoaId === kpNv.NhomKhoaId && !x.IsChecked)) {
            if (!$(id).hasClass('mat-checkbox-checked')) {
                $(id).addClass('mat-checkbox-checked');
                $(id).attr('ng-reflect-model', 'true');
            }
        } else {
            if ($(id).hasClass('mat-checkbox-checked')) {
                $(id).removeClass('mat-checkbox-checked');
                $(id).attr('ng-reflect-model', 'false');
            }
        }

        if (isChecked) {
            this.sreachKhoaPhong.PhongBenhVienIds.push(kpNv.Id);
            this.modelFE.PhongBenhVienIds.push(kpNv.Id);

            if (!this.dataSourceKhoaPhong.data.some(x => x.NhomKhoaId === kpNv.NhomKhoaId && !x.IsChecked)) {
                this.sreachKhoaPhong.KhoaPhongIds.push(kpNv.NhomKhoaId);
                this.modelFE.KhoaPhongIds.push(kpNv.NhomKhoaId);
            }

            this.WillCheckAll();
        } else {
            if (this.sreachKhoaPhong.PhongBenhVienIds.some(x => x === kpNv.Id)) {
                const pos = this.sreachKhoaPhong.PhongBenhVienIds.indexOf(kpNv.Id);
                if (pos > -1) {
                    this.sreachKhoaPhong.PhongBenhVienIds.splice(pos, 1);
                }

                const posDb = this.modelFE.PhongBenhVienIds.indexOf(kpNv.Id);
                if (posDb > -1) {
                    this.modelFE.PhongBenhVienIds.splice(posDb, 1);
                }
            }
            if (this.dataSourceKhoaPhong.data.some(x => x.NhomKhoaId === kpNv.NhomKhoaId && !x.IsChecked)) {
                if (this.sreachKhoaPhong.KhoaPhongIds.some(x => x === kpNv.NhomKhoaId)) {
                    const pos = this.sreachKhoaPhong.KhoaPhongIds.indexOf(kpNv.NhomKhoaId);
                    if (pos > -1) {
                        this.sreachKhoaPhong.KhoaPhongIds.splice(pos, 1);
                    }

                    const posDb = this.modelFE.KhoaPhongIds.indexOf(kpNv.NhomKhoaId);
                    if (posDb > -1) {
                        this.modelFE.KhoaPhongIds.splice(posDb, 1);
                    }
                }
            }
            if (this.isCheckAll) {
                this.isCheckAll = false;
            }
        }
        
        this.gridKho.gridDataSource = null;
        this.sreachKhoaPhongJson = JSON.stringify(this.sreachKhoaPhong);
        this.gridKho._additionalSearchString = this.sreachKhoaPhongJson;
        this.gridKho.setDataSource();
    }

    GetDataKhoaPhong(result: any) {        
        this.khoaPhongViewModel = result.Data;
        this.tmp1dataSourceKhoaPhongViewModel = result.Data;

        this.dataSourceKhoaPhong.data = [...result.Data];
        this.dataSourceKhoaPhong.total = result.TotalRowCount;

        const nhomKhoaIds = [...this.dataSourceKhoaPhong.data.map(x => x.NhomKhoaId).filter((value, index, self) => {
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
                if (x.PhongChinh === true) {
                    $('#phongChinh' + x.Id).prop('checked', true);
                    this.modelFE.PhongChinhId = x.Id;
                } else {
                    $('#phongChinh' + x.Id).prop('checked', false);
                }
            });
        }, 100);
    }

    WillCheckAll() {
        if (this.dataSourceKhoaPhong.data.length === 0) return;
        if (this.dataSourceKhoaPhong.data.length === this.dataSourceKhoaPhong.data.filter(x => x.IsChecked).length) {
            if (!this.isCheckAll) {
                this.isCheckAll = true;
            }
        }
    }

    getById(id: number) {
        this.baseService.getById<HoSoNhanVien>(id).subscribe((resultData) => {
            if (resultData !== null && resultData !== undefined) {
                this.modelFE = resultData;
                this.modelFE.IsUpdateView = true;
                if (this.modelFE.KhoaPhongIds.length > 0) {
                    this.isChonKhoaPhong = false;
                }
                this.khoaPhongIds = JSON.stringify(this.modelFE.KhoaPhongIds);
                this.loadPhongKhamHienTaiByNhanVien(id, this.khoaPhongIds);

                // this.modelFE.Password = SystemDefaultPassword.DefaultPassword;
                // this.modelFE.PasswordConfirm = this.modelFE.Password;
            }
        });
    }

    searchChanges(dataEvent: any) {       
        if (dataEvent != "" && dataEvent != undefined) {
            let searchStr = CommonService.removeVietnamese(dataEvent.toLowerCase().trim());
            let data = this.filtreText(this.khoaPhongViewModel, searchStr);
            this.tmpdataSourceKhoaPhongViewModel = data;

            this.tmp1dataSourceKhoaPhongViewModel = this.tmp1dataSourceKhoaPhongViewModel[this.tmp1dataSourceKhoaPhongViewModel.indexOf(this.tmpdataSourceKhoaPhongViewModel)] = this.tmpdataSourceKhoaPhongViewModel;
            this.dataSourceKhoaPhong.data = this.tmp1dataSourceKhoaPhongViewModel;

            this.gridKhoaPhong.gridDataSource = this.dataSourceKhoaPhong;
            this.gridKhoaPhong.groups = this.groups;
            this.gridKhoaPhong.setDataSource();

        }
        else {
            // this.tmp1dataSourceKhoaPhongViewModel[this.tmp1dataSourceKhoaPhongViewModel.indexOf(this.tmpdataSourceKhoaPhongViewModel)] = this.tmpdataSourceKhoaPhongViewModel;         
            this.dataSourceKhoaPhong.data = this.khoaPhongViewModel;
            this.gridKhoaPhong.groups = this.groups;
            this.gridKhoaPhong.gridDataSource = this.dataSourceKhoaPhong; 
            this.gridKhoaPhong.setDataSource();     
        }

        setTimeout(() => { 
            $('#phongChinh' + this.modelFE.PhongChinhId).prop('checked', true);      
               
            // this.dataSourceKhoaPhong.data.forEach(x => {
            //     if (x.PhongChinh === true) {
            //         $('#phongChinh' + this.modelFE.PhongChinhId).prop('checked', true);
            //         this.modelFE.PhongChinhId = x.Id;
            //     } else {
            //         $('#phongChinh' + x.Id).prop('checked', false);
            //     }
            // });
        }, 100);
    }

    searchKhoChanges(dataEvent: any) {
        if (dataEvent != "" && dataEvent != undefined) {
            let searchStr = CommonService.removeVietnamese(dataEvent).toLowerCase().trim();
            let data = this.filtreTextKho(this.khoViewModel, searchStr);
            this.tmpdataSourceKhoViewModel = data;

            this.tmp1dataSourceKhoViewModel = this.tmp1dataSourceKhoViewModel[this.tmp1dataSourceKhoViewModel.indexOf(this.tmp1dataSourceKhoViewModel)] = this.tmpdataSourceKhoViewModel;
            this.gridDataKhoSource.data = this.tmp1dataSourceKhoViewModel;

            this.gridKho.gridDataSource = this.gridDataKhoSource;  
            this.gridKho._gridDataSource = this.gridDataKhoSource.data;  
            this.gridKho._gridDataSource.data = this.gridDataKhoSource.data; 
             //this.gridKho.setDataSource();
        }
        else {
            // this.tmp1dataSourceKhoaPhongViewModel[this.tmp1dataSourceKhoaPhongViewModel.indexOf(this.tmpdataSourceKhoaPhongViewModel)] = this.tmpdataSourceKhoaPhongViewModel;         
            this.gridDataKhoSource.data = this.khoViewModel;         
            this.gridKho._gridDataSource =  this.gridDataKhoSource.data;      
            //this.gridKho.setDataSource();        
        }
    }

    filtreText(arr, searchStr) {
        return arr.filter(function (el) {
            return   CommonService.removeVietnamese(el.TenPhong).toLowerCase().indexOf(searchStr) !== -1 || CommonService.removeVietnamese(el.NhomKhoa).toLowerCase().indexOf(searchStr) !== -1 || CommonService.removeVietnamese(el.MaPhong).toLowerCase().indexOf(searchStr) !== -1;
        })
    }

    filtreTextKho(arr, searchStr) {
        return arr.filter(function (el) {
            if (el.TenPhong !== null)
                return CommonService.removeVietnamese(el.TenKho).toLowerCase().indexOf(searchStr) !== -1 || CommonService.removeVietnamese(el.TenKhoa).toLowerCase().indexOf(searchStr) !== -1 || CommonService.removeVietnamese(el.TenPhong).toLowerCase().toLowerCase().indexOf(searchStr) !== -1;
            else
                return CommonService.removeVietnamese(el.TenKho).toLowerCase().indexOf(searchStr) !== -1 || CommonService.removeVietnamese(el.TenKhoa).toLowerCase().indexOf(searchStr) !== -1;
        })
    }

    bindCheckEditUserKho(data: ThongTinKhoaPhong[]) {
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

    getSharedData() {
        // this.checkPasswordChange();
        return this.modelFE;
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
                this.modelFE.Avatar = reader.result;
            };
        }
    }

    ViewImage(thongTinAnh: HoSoNhanVien) {
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

    onSelectChangeKhoaPhong(ev: any) {
        if (ev.length === 0) {
            this.isChonKhoaPhong = true;
            this.modelFE.PhongBenhVienIds = [];
        } else {
            this.khoaPhongIds = JSON.stringify(this.modelFE.KhoaPhongIds);
            // this.loadPhongKhamHienTaiByNhanVien(this.userId, this.khoaPhongIds);
            this.isChonKhoaPhong = false;
        }
    }

    OnOpen(isOpen: boolean) {
        if (isOpen) {
            const url = 'NhanVien/GetListPhongByKhoas?nhanVienId=' + this.userId + '&khoaphongIds=' + this.khoaPhongIds;
            this.lstPtttCmb.url = url;
            this.lstPtttCmb.data = null;
            this.lstPtttCmb.queryInfo.Query = null;
            return;
        }
        this.lstPtttCmb.url = '';


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
                    const phongKhams = [];
                    this.phongKhamHienTais.forEach((element) => {
                        phongKhams.push(element.KeyId);
                    });
                    if (
                        this.modelFE.PhongBenhVienIds !== undefined &&
                        this.modelFE.PhongBenhVienIds.length > 0 &&
                        phongKhams.length > 0
                    ) {
                        const removePhongKhongChonKhoas = this.differenceOf2Arrays(
                            this.modelFE.PhongBenhVienIds,
                            phongKhams
                        );
                        this.modelFE.PhongBenhVienIds = removePhongKhongChonKhoas;
                    }
                }
            });
    }

    ChonPhongChinh(phongChinh: any) {
        this.modelFE.PhongChinhId = phongChinh;
    }

    SelectionKho(khoIds: any) {
        this.modelFE.KhoNhanVienQuanLyIds = [];
        khoIds.forEach((element) => {            
            this.modelFE.KhoNhanVienQuanLyIds.push(element);
        });
    }

    GetDataKho(data: any) {       
        this.modelFE.KhoNhanVienQuanLyIds = [];
        this.gridDataKhoSource = data.Data;   
        this.khoViewModel = data.Data;
        this.tmp1dataSourceKhoViewModel = data.Data;

        const self = this;
        setTimeout(() => {
            data.Data.forEach((element) => {
                if (element.DaChon) {
                    if (!$('#' + 'khonhanvienselectCheckboxId' + element.Id).prop('checked')){
                        $('#' + 'khonhanvienselectCheckboxId' + element.Id).trigger('click');                       
                    }
                     //reset lại                   
                     this.modelFE.KhoNhanVienQuanLyIds.push(element.Id);
                }
            });

        }, 100);
    }

    differenceOf2Arrays(arr1: any, arr2: any) {
        const temp = [];

        arr1 = arr1.toString().split(',').map(Number);
        arr2 = arr2.toString().split(',').map(Number);
        // tslint:disable-next-line: forin
        for (const i in arr2) {
            for (const j in arr1) {
                if (arr2[i] === arr1[j]) {
                    temp.push(arr1[j]);
                }
            }
        }
        return temp;
    }
}
