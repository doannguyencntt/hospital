import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute } from '@angular/router';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ChiTietDieuTriNoiTruViewModel, EkipDieuTriPhongGiuongBs } from '../../../dieu-tri-noi-tru.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { EnumNhomChucDanh } from 'src/app/shared/enum/nhom-chuc-danh-enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';

@Component({
  selector: 'app-bs-dieu-tri',
  templateUrl: './bs-dieu-tri.component.html',
  styleUrls: ['./bs-dieu-tri.component.scss']
})

export class BsDieuTriComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    nhomChucDanh = EnumNhomChucDanh;
    validationErrors: any[] = [];
    isEditing: boolean = false;
    isDaChiDinhBacSi: boolean = false;
    isEditingFirstData: boolean = false;

    cbbBacSiOpened: boolean = false;
    cbbDieuDuongOpened: boolean = false;

    addDialog: any = null;
    editDialog: any = null;

    yeuCauTiepNhanId: number = null;
    ekipDieuTriPhongGiuongBs: EkipDieuTriPhongGiuongBs = new EkipDieuTriPhongGiuongBs();

    currentUser: any;
    currentPhongLamViecId: any;
    currentKhoaPhong: any;
    currentUserInformation: any;

    gridColumns: any[] = [];
    sortDanhSachEkipDieuTri: SortDescriptor[] = [ { field: "TuNgay", dir: "desc" }]

    urlGetDanhSachEkipDieuTriForGrid = `DieuTriNoiTru/GetDanhSachEkipDieuTriForGrid`;
	urlGetTotalPagesDanhSachEkipDieuTriForGrid = `DieuTriNoiTru/GetTotalPagesDanhSachEkipDieuTriForGrid`;

    icEdit = icEdit;
    icDelete = icDelete;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

    @Output() outputEkipDieuTriChanged = new EventEmitter();

    @ViewChild('khoaTemplate', { static: true }) khoaTemplate: TemplateRef<any>;
    @ViewChild('bacSiTemplate', { static: true }) bacSiTemplate: TemplateRef<any>;
    @ViewChild('dieuDuongTemplate', { static: true }) dieuDuongTemplate: TemplateRef<any>;
    @ViewChild('tuNgayTemplate', { static: true }) tuNgayTemplate: TemplateRef<any>;
    @ViewChild('denNgayTemplate', { static: true }) denNgayTemplate: TemplateRef<any>;
    @ViewChild('nguoiLapTemplate', { static: true }) nguoiLapTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridEkipDieuTri', { static: true }) gridEkipDieuTri: GridComponent;

    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id; 
        this.ekipDieuTriPhongGiuongBs.NoiTruBenhAnId = this.yeuCauTiepNhanId;

        this.currentUser = this.authService.getAccessUser();
        this.currentPhongLamViecId = this.authService.getPhongLamViecId();

        this.getCurrentUserInformation();
        this.getCurrentKhoaPhong();
        this.getIsDaChiDinhBacSi();

        this.gridColumns = [
            { Field: "KhoaPhongDieuTriId", Title: "Khoa chỉ định", Width: 150, Sortable: false, Template: this.khoaTemplate },
            { Field: "BacSiId", Title: "BS điều trị", Width: 150, Sortable: false, Template: this.bacSiTemplate },
            { Field: "DieuDuongId", Title: "Điều dưỡng", Width: 150, Sortable: false, Template: this.dieuDuongTemplate },
            { Field: "TuNgay", Title: "Từ ngày", Width: 150, Sortable: false, Template: this.tuNgayTemplate },
            { Field: "DenNgay", Title: "Đến ngày", Width: 150, Sortable: false, Template: this.denNgayTemplate },
            { Field: "NhanVienLapId", Title: "Người lập", Width: 150, Sortable: false, Template: this.nguoiLapTemplate },
            { Field: "Action", Title: "", Width: 100, Sortable: false, Template: this.actionTemplate }
        ];
    }

    getCurrentUserInformation() {
        if (this.currentUser) {
            this.apiService.post(`User/GetUserAndDepartmentInformation?idNhanVien=${this.currentUser.Id}&idPhongBenhVien=${this.currentPhongLamViecId}`).subscribe((res: any) => {
                this.currentUserInformation = res;

                this.ekipDieuTriPhongGiuongBs.NhanVienLapId = this.currentUser.Id;
                this.ekipDieuTriPhongGiuongBs.NhanVienLapDisplay = this.currentUserInformation.Ten;
            });
        }
    }

    getCurrentKhoaPhong() {
        if (this.currentPhongLamViecId) {
            this.apiService.get(`PhongBenhVien/GetKhoaByPhong?phongId=${this.currentPhongLamViecId}`).subscribe((res: any) => {
                this.currentKhoaPhong = res;
                this.ekipDieuTriPhongGiuongBs.KhoaPhongDieuTriId = this.currentKhoaPhong.KeyId;
            });
        }
    }

    getIsDaChiDinhBacSi() {
        this.apiService.get<any>(`DieuTriNoiTru/IsDaChiDinhBacSi?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
            this.isDaChiDinhBacSi = res;

            if(!this.isDaChiDinhBacSi) {
                this.getThoiDiemNhapVien();
            }
        }, (err: ApiError) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        });
    }

    getThoiDiemNhapVien() {
        this.apiService.get<any>(`DieuTriNoiTru/GetThoiDiemNhapVien?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
            this.ekipDieuTriPhongGiuongBs.TuNgay = res;
        }, (err: ApiError) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        });
    }

    huy() {
        this.isEditing = false;
        this.validationErrors = [];

        this.ekipDieuTriPhongGiuongBs = new EkipDieuTriPhongGiuongBs();
        this.ekipDieuTriPhongGiuongBs.NoiTruBenhAnId = this.yeuCauTiepNhanId;
        this.ekipDieuTriPhongGiuongBs.KhoaPhongDieuTriId = this.currentKhoaPhong.KeyId;
        this.ekipDieuTriPhongGiuongBs.NhanVienLapId = this.currentUser.Id;
        this.ekipDieuTriPhongGiuongBs.NhanVienLapDisplay = this.currentUserInformation.Ten;
        this.isEditingFirstData = false;

        this.getIsDaChiDinhBacSi();
    }

    chinhsua(dataItem) {
        this.isEditing = true;
        this.validationErrors = [];

        this.ekipDieuTriPhongGiuongBs.Id = dataItem.Id;
        this.ekipDieuTriPhongGiuongBs.NoiTruBenhAnId = this.yeuCauTiepNhanId;
        this.ekipDieuTriPhongGiuongBs.BacSiId = dataItem.BacSiId;
        this.ekipDieuTriPhongGiuongBs.BacSiDisplay = dataItem.BacSiDisplay;
        this.ekipDieuTriPhongGiuongBs.DieuDuongId = dataItem.DieuDuongId;
        this.ekipDieuTriPhongGiuongBs.DieuDuongDisplay = dataItem.DieuDuongDisplay;
        this.ekipDieuTriPhongGiuongBs.NhanVienLapId = this.currentUser.Id;
        this.ekipDieuTriPhongGiuongBs.NhanVienLapDisplay = this.currentUserInformation.Ten;
        this.ekipDieuTriPhongGiuongBs.KhoaPhongDieuTriId = this.currentKhoaPhong.KeyId;
        this.ekipDieuTriPhongGiuongBs.TuNgay = dataItem.TuNgay;
        this.ekipDieuTriPhongGiuongBs.DenNgay = null;
        // this.ekipDieuTriPhongGiuongBs.DenNgay = dataItem.DenNgay;
        this.isEditingFirstData = dataItem.IsFirstData;
    }

    xoa(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.apiService.post<any>(`DieuTriNoiTru/XoaBacSiDieuTri?yeuCauTiepNhanId=${dataItem.NoiTruBenhAnId}&noiTruEkipDieuTriId=${dataItem.Id}`).subscribe(res => {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xoá"]));
                    this.huy();
                    this.gridEkipDieuTri.search();
                    this.outputEkipDieuTriChanged.emit(true);
                }, (err: ApiError) => {
                    err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                })
            }
        });
    }

    themEkipDieuTri() {
        if(!this.addDialog) {
            this.addDialog = this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["thêm"]) }
            }).afterClosed().subscribe(result => {
                this.addDialog = null;

                if (result === 'Yes') {
                    this.validationErrors = [];
                    this.ekipDieuTriPhongGiuongBs.Id = 0;
                    this.apiService.post<any>(`DieuTriNoiTru/ThemBacSiDieuTri`, this.ekipDieuTriPhongGiuongBs).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
                        this.huy();
                        this.gridEkipDieuTri.search();
                        this.outputEkipDieuTriChanged.emit(true);
                    }, (err: ApiError) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    })
                }
            });
        }
    }

    luuEkipDieuTri() {
        if(!this.editDialog) {
            this.editDialog = this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
            }).afterClosed().subscribe(result => {
                this.editDialog = null;
                
                if (result === 'Yes') {
                    this.validationErrors = [];
    
                    this.apiService.post<any>(`DieuTriNoiTru/SuaBacSiDieuTri`, this.ekipDieuTriPhongGiuongBs).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                        this.huy();
                        this.gridEkipDieuTri.search();
                        this.outputEkipDieuTriChanged.emit(true);
                    }, (err: ApiError) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    })
                }
            });
        }
    }

    evtThemEkipDieuTri() {
        if(!this.isEditing && !this.cbbBacSiOpened && !this.cbbDieuDuongOpened) {
            this.themEkipDieuTri();
        }
    }

    evtSuaEkipDieuTri() {
        if(this.isEditing) {
            this.luuEkipDieuTri();
        }
    }

    evtComboboxBacSiOpened(evt) {
        this.cbbBacSiOpened = evt;
    }

    evtComboboxDieuDuongOpened(evt) {
        this.cbbDieuDuongOpened = evt;
    }
}
