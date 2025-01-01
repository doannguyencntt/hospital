import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { KeVatTuDieuTriNoiTru } from '../../../dieu-tri-noi-tru.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { VatTuTonKhos } from 'src/app/modules/main/kham-benh/kham-benh.model';

@Component({
  selector: 'app-sua-vat-tu-popup',
  templateUrl: './sua-vat-tu-popup.component.html',
  styleUrls: ['./sua-vat-tu-popup.component.scss']
})
export class SuaVatTuPopupComponent implements OnInit {
  keVatTuEdit: KeVatTuDieuTriNoiTru = new KeVatTuDieuTriNoiTru();
  thongTinVatTu: VatTuTonKhos = new VatTuTonKhos();
  icClose = icClose;
  validationErrors: any[] = [];
  isSelectDuocPham: boolean = false;
  popupSavingData: any = null;
  format = "n2";
  laTuTruc: boolean = null;

  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SuaVatTuPopupComponent>
  ) { }

  ngOnInit() {
    // console.log("data ", this.data)
    this.laTuTruc = this.data.LaTuTruc;
    this.keVatTuEdit = this.data;
    this.thongTinVatTu = this.data;
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.luuVatTu();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }
  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
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
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }

  dangXuLy:boolean=false;
  luuVatTu() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    this.validationErrors = null;
    this.ref.detectChanges();
    if (this.data.LaDuocPhamBHYT) {
      this.keVatTuEdit.LaVatTuBHYT = 2;
    } else {
      this.keVatTuEdit.LaVatTuBHYT = 1;
    }
    this.savingPage();
    this.apiService.post<any>("DieuTriNoiTru/CapNhatVatTu", this.keVatTuEdit).subscribe(
      () => {
        this.closepopupSavingData();
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
        this.dialogRef.close();
        this.dangXuLy=false;
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closepopupSavingData();
        this.dangXuLy=false;
      });
  }
}
