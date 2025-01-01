import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiTietDieuTriNoiTruViewModel, ChuyenKhoaPhongGiuongBs, KhoaPhongChuyenDen } from '../../../dieu-tri-noi-tru.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';

@Component({
  selector: 'app-chuyen-khoa',
  templateUrl: './chuyen-khoa.component.html',
  styleUrls: ['./chuyen-khoa.component.scss']
})
export class ChuyenKhoaComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];
    isEditing: boolean = false;
    isEditingFirstData: boolean = false;

    cbbKhoaChuyenDenOpened: boolean = false;
    cbbMaICDOpened: boolean = false;

    addDialog: any = null;
    editDialog: any = null;

    yeuCauTiepNhanId: number = null;
    currentKhoaChuyenDen: KhoaPhongChuyenDen = new KhoaPhongChuyenDen();
    chuyenKhoaPhongGiuongBs: ChuyenKhoaPhongGiuongBs = new ChuyenKhoaPhongGiuongBs();
    // currentChuyenKhoaPhongGiuongBs: ChuyenKhoaPhongGiuongBs = new ChuyenKhoaPhongGiuongBs();

    currentUser: any;
    currentPhongLamViecId: any;
    currentUserInformation: any;

    gridColumns: any[] = [];
    sortDanhSachChuyenKhoa: SortDescriptor[] = [ { field: "ThoiDiemVaoKhoa", dir: "desc" }]

    urlGetDanhSachChuyenKhoaForGrid = `DieuTriNoiTru/GetDanhSachChuyenKhoaForGrid`;
	urlGetTotalPagesDanhSachChuyenKhoaForGrid = `DieuTriNoiTru/GetTotalPagesDanhSachChuyenKhoaForGrid`;
	urlGetKhoas = `DieuTriNoiTru/GetDanhSachKhoaChuyenDen`;
	urlGetICDs = `DieuTriNoiTru/GetChanDoanICD`;

    icEdit = icEdit;
    icDelete = icDelete;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Input() IsBenhAnSoSinh: boolean = false;

    @Output() outputKhoaDieuTriChanged = new EventEmitter();

    @ViewChild('tuKhoaTemplate', { static: true }) tuKhoaTemplate: TemplateRef<any>;
    // @ViewChild('icdTemplate', { static: true }) icdTemplate: TemplateRef<any>;
    @ViewChild('denKhoaTemplate', { static: true }) denKhoaTemplate: TemplateRef<any>;
    @ViewChild('thoiGianBatDauTemplate', { static: true }) thoiGianBatDauTemplate: TemplateRef<any>;
    @ViewChild('thoiGianKetThucTemplate', { static: true }) thoiGianKetThucTemplate: TemplateRef<any>;
    @ViewChild('bacSiDieuTriTemplate', { static: true }) bacSiDieuTriTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridChuyenKhoa', { static: true }) gridChuyenKhoa: GridComponent;

    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id; 
        this.chuyenKhoaPhongGiuongBs.NoiTruBenhAnId = this.yeuCauTiepNhanId;

        this.currentUser = this.authService.getAccessUser();
        this.currentPhongLamViecId = this.authService.getPhongLamViecId();

        this.getCurrentUserInformation();
        this.getCurrentKhoaHienTaiBenhNhanChuyenDen();
        // this.getCurrentNoiTruKhoaPhongDieuTri();

        this.gridColumns = [
            { Field: "KhoaPhongChuyenDiId", Title: "Khoa chuyển đi", Width: 150, Sortable: false, Template: this.tuKhoaTemplate },
            { Field: "LyDoChuyenKhoa", Title: "Lý do chuyển khoa", Width: 150, Sortable: false },
            // { Field: "ChanDoanVaoKhoaICDId", Title: "Chẩn đoán", Width: 150, Sortable: false, Template: this.icdTemplate },
            { Field: "ChanDoanVaoKhoaGhiChu", Title: "Chẩn đoán", Width: 150, Sortable: false },
            { Field: "KhoaPhongChuyenDenId", Title: "Khoa chuyển đến", Width: 150, Sortable: false, Template: this.denKhoaTemplate },
            { Field: "ThoiDiemVaoKhoa", Title: "Thời gian bắt đầu", Width: 150, Sortable: false, Template: this.thoiGianBatDauTemplate },
            { Field: "ThoiDiemRaKhoa", Title: "Thời gian kết thúc", Width: 150, Sortable: false, Template: this.thoiGianKetThucTemplate },
            { Field: "BacSiDieuTriId", Title: "BS điều trị", Width: 150, Sortable: false, Template: this.bacSiDieuTriTemplate },
            { Field: "Action", Title: "", Width: 100, Template: this.actionTemplate }
        ];
    }

    getCurrentUserInformation() {
        if (this.currentUser) {
            this.apiService.post(`User/GetUserAndDepartmentInformation?idNhanVien=${this.currentUser.Id}&idPhongBenhVien=${this.currentPhongLamViecId}`).subscribe((res: any) => {
                this.currentUserInformation = res;

                this.chuyenKhoaPhongGiuongBs.NhanVienChiDinhId = this.currentUser.Id;
                this.chuyenKhoaPhongGiuongBs.NhanVienChiDinhDisplay = this.currentUserInformation.Ten;
            }, (err: ApiError) => {
                err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }

    getCurrentKhoaHienTaiBenhNhanChuyenDen() {
        this.apiService.get(`DieuTriNoiTru/GetCurrentKhoaHienTaiBenhNhanChuyenDen?noiTruBenhAnId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
            this.currentKhoaChuyenDen = res;
        }, (err: ApiError) => {
            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        });
    }

    // getCurrentNoiTruKhoaPhongDieuTri() {
    //     this.apiService.get(`DieuTriNoiTru/GetCurrentNoiTruKhoaPhongDieuTri?noiTruBenhAnId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
    //         this.currentChuyenKhoaPhongGiuongBs = res;
    //     }, (err: ApiError) => {
    //         err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
    //     });
    // }

    huy() {
        this.isEditing = false;
        this.validationErrors = [];

        this.chuyenKhoaPhongGiuongBs = new ChuyenKhoaPhongGiuongBs();
        this.chuyenKhoaPhongGiuongBs.NoiTruBenhAnId = this.yeuCauTiepNhanId;
        this.chuyenKhoaPhongGiuongBs.NhanVienChiDinhId = this.currentUser.Id;
        this.chuyenKhoaPhongGiuongBs.NhanVienChiDinhDisplay = this.currentUserInformation.Ten;
        this.isEditingFirstData = false;
    }
    
    chinhsua(dataItem) {
        this.isEditing = true;
        this.validationErrors = [];

        this.chuyenKhoaPhongGiuongBs.Id = dataItem.Id;
        this.chuyenKhoaPhongGiuongBs.NoiTruBenhAnId = this.yeuCauTiepNhanId;
        this.chuyenKhoaPhongGiuongBs.KhoaPhongChuyenDenId = dataItem.KhoaPhongChuyenDenId;
        this.chuyenKhoaPhongGiuongBs.KhoaPhongChuyenDenDisplay = dataItem.KhoaPhongChuyenDenDisplay;
        this.chuyenKhoaPhongGiuongBs.ThoiDiemVaoKhoa = dataItem.ThoiDiemVaoKhoa;
        this.chuyenKhoaPhongGiuongBs.ThoiDiemRaKhoa = null;
        // this.chuyenKhoaPhongGiuongBs.ThoiDiemRaKhoa = dataItem.ThoiDiemRaKhoa;
        this.chuyenKhoaPhongGiuongBs.ChanDoanVaoKhoaICDId = dataItem.ChanDoanVaoKhoaICDId;
        this.chuyenKhoaPhongGiuongBs.ChanDoanVaoKhoaICDDisplay = dataItem.ChanDoanVaoKhoaICDDisplay;
        this.chuyenKhoaPhongGiuongBs.NhanVienChiDinhId = this.currentUser.Id;
        this.chuyenKhoaPhongGiuongBs.NhanVienChiDinhDisplay = this.currentUserInformation.Ten;
        this.chuyenKhoaPhongGiuongBs.ChanDoanVaoKhoaGhiChu = dataItem.ChanDoanVaoKhoaGhiChu;
        this.chuyenKhoaPhongGiuongBs.LyDoChuyenKhoa = dataItem.LyDoChuyenKhoa;
        this.isEditingFirstData = dataItem.IsFirstData;
    }

    xoa(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.apiService.post<any>(`DieuTriNoiTru/XoaKhoaPhongDieuTri?yeuCauTiepNhanId=${dataItem.NoiTruBenhAnId}&noiTruKhoaPhongDieuTriId=${dataItem.Id}`).subscribe(res => {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xoá"]));
                    this.huy();
                    this.gridChuyenKhoa.search();
                    this.outputKhoaDieuTriChanged.emit(true);
                    this.getCurrentKhoaHienTaiBenhNhanChuyenDen();
                }, (err: ApiError) => {
                    err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                })
            }
        });
    }

    themChuyenKhoa() {
        if(!this.addDialog) {
            this.addDialog = this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["thêm"]) }
            }).afterClosed().subscribe(result => {
                this.addDialog = null;

                if (result === 'Yes') {
                    this.chuyenKhoaPhongGiuongBs.Id = 0;
                    this.validationErrors = [];
    
                    this.apiService.post<any>(`DieuTriNoiTru/ThemKhoaPhongDieuTri`, this.chuyenKhoaPhongGiuongBs).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
                        this.huy();
                        this.gridChuyenKhoa.search();
                        this.outputKhoaDieuTriChanged.emit(true);
                        this.getCurrentKhoaHienTaiBenhNhanChuyenDen();
                    }, (err: ApiError) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    })
                }
            });
        }
    }

    luuChuyenKhoa() {
        if(!this.editDialog) {
            this.editDialog = this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
            }).afterClosed().subscribe(result => {
                this.editDialog = null;
                
                if (result === 'Yes') {
                    this.validationErrors = [];
                    
                    this.apiService.post<any>(`DieuTriNoiTru/SuaKhoaPhongDieuTri`, this.chuyenKhoaPhongGiuongBs).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                        this.huy();
                        this.gridChuyenKhoa.search();
                        this.outputKhoaDieuTriChanged.emit(true);
                        this.getCurrentKhoaHienTaiBenhNhanChuyenDen();
                    }, (err: ApiError) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    })
                }
            });
        }
    }

    ICDChanged(evt) {
        if(evt) {
            this.chuyenKhoaPhongGiuongBs.ChanDoanVaoKhoaGhiChu = evt.TenTiengViet;
        }
    }

    evtThemChuyenKhoa() {
        if(!this.isEditing && !this.cbbKhoaChuyenDenOpened && !this.cbbMaICDOpened) {
            this.themChuyenKhoa();
        }
    }

    evtSuaChuyenKhoa() {
        if(this.isEditing) {
            this.luuChuyenKhoa();
        }
    }

    evtComboboxKhoaChuyenDenOpened(evt) {
        this.cbbKhoaChuyenDenOpened = evt;
    }

    evtComboboxMaICDOpened(evt) {
        this.cbbMaICDOpened = evt;
    }
}
