import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { EnumNhomGoiDichVu } from 'src/app/shared/enum/kham-benh.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';

import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-thuoc-vat-tu-cap-nhat-popup',
  templateUrl: './thuoc-vat-tu-cap-nhat-popup.component.html',
  styleUrls: ['./thuoc-vat-tu-cap-nhat-popup.component.scss']
})

export class ThuocVatTuCapNhatPopupComponent implements OnInit {
    validationErrors: any[] = [];
    isSelectingVatTuThuoc: boolean = false;
    popupSavingData: any = null;
    soLuongBanDau: number = null;
    format = "n2";

    vatTuThuocTiemChung: any;
    nhomGoiDichVu = EnumNhomGoiDichVu;

    icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ThuocVatTuCapNhatPopupComponent>, private dialog: MatDialog,
                private notificationService: NotificationService, private apiService: ApiService) { }

    ngOnInit() {
        this.vatTuThuocTiemChung = this.data;
        this.soLuongBanDau = this.vatTuThuocTiemChung.SoLuong;
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
            SoLuong: this.vatTuThuocTiemChung.SoLuong,
            SoLuongBanDau: this.soLuongBanDau,
            LaDuocPham: this.vatTuThuocTiemChung.NhomYeuCauId == this.nhomGoiDichVu.DuocPham,
            VatTuThuocBenhVienId: this.vatTuThuocTiemChung.VatTuThuocBenhVienId,
            LaBHYT: this.vatTuThuocTiemChung.LaBHYT,
            KhoId: this.vatTuThuocTiemChung.KhoId
        }

        this.apiService.post<any>("KhamBenh/KiemTraValidtionSoLuongGhiNhanThuocVTTH", newObj).subscribe(res => {
            var result = {
                "SoLuong": this.vatTuThuocTiemChung.SoLuong,
                "TinhPhi": this.vatTuThuocTiemChung.TinhPhi
            }

            this.dialogRef.close(result);
            this.dangXuLy=false;
            // this.dialogRef.close(this.vatTuThuocTiemChung.SoLuong);
        }, (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;

            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.dangXuLy=false;
        });
    }
}