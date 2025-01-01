import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { parseNumber } from '@progress/kendo-angular-intl';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { KeMauVaChePhamDieuTriNoiTru } from '../../../dieu-tri-noi-tru.model';
@Component({
  selector: 'app-sua-truyen-mau-popup',
  templateUrl: './sua-truyen-mau-popup.component.html',
  styleUrls: ['./sua-truyen-mau-popup.component.scss']
})
export class SuaTruyenMauPopupComponent implements OnInit {

  icClose = icClose;
  validationErrors: any[] = [];
  popupSavingData: any = null;
  isSelectDuocPham: boolean = false;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;

  keMauVaCPEdit: KeMauVaChePhamDieuTriNoiTru = new KeMauVaChePhamDieuTriNoiTru();

  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SuaTruyenMauPopupComponent>
  ) { }

  ngOnInit() {
    console.log("data ", this.data)
    this.keMauVaCPEdit = this.data;
    this.xuLyNhomMau();
  }
  xuLyNhomMau() {
    this.keMauVaCPEdit.NhomMauRH = this.keMauVaCPEdit.NhomMau + ";" + this.keMauVaCPEdit.YeuToRh;
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

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.luuKeTruyenMau();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }

  nhomMauRHChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      let nhomMauRHId = dataItem.split(";");
      this.keMauVaCPEdit.NhomMau = nhomMauRHId[0];
      this.keMauVaCPEdit.YeuToRh = nhomMauRHId[1];
    } else {
      this.keMauVaCPEdit.NhomMau = null;
      this.keMauVaCPEdit.YeuToRh = null;

    }
  }



  dangXuLy:boolean=false;
  luuKeTruyenMau() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    this.validationErrors = null;
    this.ref.detectChanges();
    this.savingPage();
    this.apiService.post<any>("DieuTriNoiTru/CapNhatYeuCauTruyenMau", this.keMauVaCPEdit).subscribe(
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
