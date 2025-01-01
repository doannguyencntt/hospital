import { ChangeDetectorRef, Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { EnumNhomGoiDichVu } from 'src/app/shared/enum/kham-benh.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PTTTHoanTraThuocVatTuVo, ThongTinHoanTraVatTuThuocPTTTVo } from '../../../phau-thuat-thu-thuat/phau-thuat-thu-thuat.model';

@Component({
  selector: 'app-ghi-nhan-hoan-tra-popup',
  templateUrl: './ghi-nhan-hoan-tra-popup.component.html',
  styleUrls: ['./ghi-nhan-hoan-tra-popup.component.scss']
})

export class GhiNhanHoanTraPopupComponent implements OnInit {
    thongTinTraVT: PTTTHoanTraThuocVatTuVo = new PTTTHoanTraThuocVatTuVo();
    thongTinHoanTraVTVo: ThongTinHoanTraVatTuThuocPTTTVo = new ThongTinHoanTraVatTuThuocPTTTVo();
    nhomGoiDichVu = EnumNhomGoiDichVu;
    // isSelectDuocPham: boolean = false;
    validationErrors: any[] = [];
    popupLoadingData: any = null;
    additionString: any = null;

    gridColumns: any[] = [];

    icClose = icClose;

    @ViewChild("ngayTraTemplate", { static: true }) ngayTraTemplate: TemplateRef<any>;
    @ViewChild("ngayTaoTemplate", { static: true }) ngayTaoTemplate: TemplateRef<any>;
    @ViewChild("tinhTrangTemplate", { static: true }) tinhTrangTemplate: TemplateRef<any>;

    constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<GhiNhanHoanTraPopupComponent>,
                private ref: ChangeDetectorRef, private notificationService: NotificationService,
                private apiService: ApiService) { }

    ngOnInit() {
        this.additionString = JSON.stringify({
            YeuCauDuocPhamVatTuBenhVienId: this.data.Id,
            DuocHuongBaoHiem: this.data.DuocHuongBaoHiem,
            NhomYeuCauId: this.data.NhomYeuCauId
        });

        this.thongTinTraVT = this.data;
        this.getThongTinHoanTraVT();
        this.gridColumns = [
            { Field: "NgayTra", Title: "Ngày trả", Width: 70, Sortable: false, Template: this.ngayTraTemplate, },
            { Field: "SoLuongTra", Title: "SL Trả", Width: 30, Sortable: false, },
            { Field: "NhanVienTra", Title: "Người trả", Width: 70, Sortable: false, },
            { Field: "SoPhieu", Title: "Số phiếu trả", Width: 50, Sortable: false, Hidden: (this.thongTinTraVT.NhomYeuCauId != this.nhomGoiDichVu.VatTuTieuHao) },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 50, Sortable: false, Template: this.tinhTrangTemplate },
            { Field: "NgayTao", Title: "Ngày tạo", Width: 70, Sortable: false, Template: this.ngayTaoTemplate, },
        ];

        // this.additionString = `${this.thongTinTraVT.YeuCauBenhVienId};${this.thongTinTraVT.DuocHuongBaoHiem};${this.thongTinTraVT.NhomYeuCauId};`;
    }

    getThongTinHoanTraVT() {
        this.loadingPage();
        this.apiService.post<any>("PhauThuatThuThuat/GetThongTinHoanTraVatTuThuocPTTT", this.thongTinTraVT).subscribe((res) => {
            this.closePopupLoadingData();

            if (res) {
                this.thongTinHoanTraVTVo = res;
                //update BVHD-3411: Khi hoàn trả thuốc/vật tư từ người bệnh (chưa cần duyệt phiếu hoàn trả) thì phần mềm ghi nhận số lượng và thành tiền còn lại sau khi hoàn trả
                if(this.thongTinHoanTraVTVo.YeuCauDuocPhamVatTuBenhViens != null){
                  this.thongTinTraVT.SoLuong = this.thongTinHoanTraVTVo.YeuCauDuocPhamVatTuBenhViens.reduce((n,{SoLuong, SoLuongTra}) =>  n + SoLuong + SoLuongTra, 0)
                }
            }
        }, (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;

            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }

            this.closePopupLoadingData();
        });
    }

    huy() {
        this.dialogRef.close();
    }

    loadingPage() {
        if(!this.popupLoadingData) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang tải dữ liệu..." },
            });
        }
    }

    savingPage() {
        if(!this.popupLoadingData) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang lưu dữ liệu..." },
            });
        }
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
            this.popupLoadingData = null;
        }
    }

    luu() {
        this.validationErrors = null;
        this.ref.detectChanges();
        this.savingPage();

        this.thongTinHoanTraVTVo.YeuCauTiepNhanId = this.thongTinTraVT.YeuCauTiepNhanId;
        this.thongTinHoanTraVTVo.DuocHuongBaoHiem = this.thongTinTraVT.DuocHuongBaoHiem;
        // this.thongTinHoanTraVTVo.NhomYeuCauId = this.thongTinTraVT.NhomYeuCauId;
        this.apiService.post<any>("PhauThuatThuThuat/HoanTraVatTuThuocTuBenhNhanPTTT", this.thongTinHoanTraVTVo).subscribe(() => {
            this.closePopupLoadingData();
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            this.dialogRef.close();
        }, (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;

            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }

            this.closePopupLoadingData();
        });
    }
}
