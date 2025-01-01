import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-lan-kham-hien-tai-cap-nhat-ghi-nhan-vtth-thuoc-popup',
  templateUrl: './lan-kham-hien-tai-cap-nhat-ghi-nhan-vtth-thuoc-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-cap-nhat-ghi-nhan-vtth-thuoc-popup.component.scss']
})
export class LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent implements OnInit {

  validationErrors: any[] = [];
  isSelectingVatTuThuoc: boolean = false;
  popupSavingData: any = null;
  format = "n2";
  thongTinVatTuThuoc: any;
  tenLoai: string = "";
  soLuongBanDau: number = null;

  icClose = icClose;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
    public dialogRef: MatDialogRef<LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent>, 
    private dialog: MatDialog,
    private notificationService: NotificationService, 
    private apiService: ApiService, 
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.thongTinVatTuThuoc = this.data;
    this.tenLoai = this.thongTinVatTuThuoc.LaDuocPham ? "Thuốc" : "Vật tư";
    this.soLuongBanDau = this.thongTinVatTuThuoc.SoLuong;
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
      SoLuong: this.thongTinVatTuThuoc.SoLuong,
      SoLuongBanDau: this.soLuongBanDau,
      LaDuocPham: this.thongTinVatTuThuoc.LaDuocPham,
      VatTuThuocBenhVienId: this.thongTinVatTuThuoc.VatTuThuocBenhVienId,
      LaBHYT: this.thongTinVatTuThuoc.LaBHYT,
      KhoId: this.thongTinVatTuThuoc.KhoId
    }
    this.apiService.post<any>("KhamBenh/KiemTraValidtionSoLuongGhiNhanThuocVTTH", newObj).subscribe(
      resultData => {
        var result = {
          "SoLuong": this.thongTinVatTuThuoc.SoLuong,
          "TinhPhi": this.thongTinVatTuThuoc.TinhPhi
        }
        this.dialogRef.close(result);
        this.dangXuLy=false;
      },
      (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
          }
          this.dangXuLy=false;
      });
  }
}
