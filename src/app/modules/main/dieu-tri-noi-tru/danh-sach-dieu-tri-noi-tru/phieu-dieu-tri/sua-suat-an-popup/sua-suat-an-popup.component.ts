import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ThemSuatAn } from '../../../dieu-tri-noi-tru.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
@Component({
  selector: 'app-sua-suat-an-popup',
  templateUrl: './sua-suat-an-popup.component.html',
  styleUrls: ['./sua-suat-an-popup.component.scss']
})
export class SuaSuatAnPopupComponent implements OnInit {
  icClose = icClose;
  validationErrors: any[] = [];
  popupSavingData: any = null;
  isSelectDuocPham: boolean = false;
  suatAnEdit: ThemSuatAn = new ThemSuatAn();
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  format = "n2";

  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SuaSuatAnPopupComponent>
  ) { }

  ngOnInit() {
    this.suatAnEdit = this.data;
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


  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.luuSuatAn();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }

  dangXuLy:boolean=false;
  luuSuatAn() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    this.validationErrors = null;
    this.ref.detectChanges();
    this.savingPage();
    this.apiService.post("DieuTriNoiTru/CapNhatYeuCauSuatAn", this.suatAnEdit).subscribe(
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
  openDropDownList(event) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }
}
