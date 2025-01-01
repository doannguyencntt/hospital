import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { PTTTVatTuThuoc, PTTTVatTuThuocTonKho } from '../../../phau-thuat-thu-thuat.model';
import icClose from '@iconify/icons-ic/twotone-close';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { EnumNhomGoiDichVu } from 'src/app/shared/enum/kham-benh.enum';

@Component({
  selector: 'app-pttt-ghi-nhan-cap-nhat-popup',
  templateUrl: './pttt-ghi-nhan-cap-nhat-popup.component.html',
  styleUrls: ['./pttt-ghi-nhan-cap-nhat-popup.component.scss']
})
export class PtttGhiNhanCapNhatPopupComponent implements OnInit {
    validationErrors: any[] = [];
    isSelectingVatTuThuoc: boolean = false;
    popupSavingData: any = null;
    soLuongBanDau: number = null;
    format = "n2";

    ptttVatTuThuoc: any;
    thongTinVatTu: PTTTVatTuThuocTonKho = new PTTTVatTuThuocTonKho();
    nhomGoiDichVu = EnumNhomGoiDichVu;

    icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PtttGhiNhanCapNhatPopupComponent>, private dialog: MatDialog,
                private notificationService: NotificationService, private apiService: ApiService, private ref: ChangeDetectorRef) { }

    ngOnInit() {
        this.ptttVatTuThuoc = this.data;
        this.thongTinVatTu = this.data;
        this.soLuongBanDau = this.ptttVatTuThuoc.SoLuong;
    }

    onKey(event: any) {
        if (event.key == "Enter") {
            if (this.isSelectingVatTuThuoc != true) {
                this.luuVatTu();
            }
            else {
                this.isSelectingVatTuThuoc = false;
            }
        }
    }

    savingPage() {
        this.popupSavingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }

    closepopupSavingData() {
        if (this.popupSavingData) {
            this.popupSavingData.close();
        }
    }

    dangXuLy:boolean=false;
    luuVatTu() {
        if(this.dangXuLy)
            return;
        this.dangXuLy=true;
        var newObj = {
            SoLuong: this.ptttVatTuThuoc.SoLuong,
            SoLuongBanDau: this.soLuongBanDau,
            LaDuocPham: this.ptttVatTuThuoc.NhomYeuCauId == this.nhomGoiDichVu.DuocPham,
            VatTuThuocBenhVienId: this.ptttVatTuThuoc.VatTuThuocBenhVienId,
            LaBHYT: this.ptttVatTuThuoc.LaBHYT,
            KhoId: this.ptttVatTuThuoc.KhoId
        }

        this.apiService.post<any>("KhamBenh/KiemTraValidtionSoLuongGhiNhanThuocVTTH", newObj).subscribe(res => {
            var result = {
                "SoLuong": this.ptttVatTuThuoc.SoLuong,
                "TinhPhi": this.ptttVatTuThuoc.TinhPhi
            }

            this.dialogRef.close(result);
            this.dangXuLy=false;
            // this.dialogRef.close(this.ptttVatTuThuoc.SoLuong);
        }, (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;

            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.dangXuLy=false;
        });
    }
}
