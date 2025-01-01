import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
@Component({
  selector: 'app-ap-dung-don-vtyt-da-het-popup',
  templateUrl: './ap-dung-don-vtyt-da-het-popup.component.html',
  styleUrls: ['./ap-dung-don-vtyt-da-het-popup.component.scss']
})
export class ApDungDonVtytDaHetPopupComponent implements OnInit {
  validationErrors: any[] = [];
  icClose = icClose;
  gridColumnVTYTs: any[] = [];
  popupSavingData: any = null;
  dataToaVTYTLe = {
    data: [],
    total: 0
  }
  dataToaVTYTTong = {
    data: [],
    total: 0
  }

  canhBao: string = "";
  groups: GroupDescriptor[] = [{ field: 'NgayDieuTriDisplay' }];
  @ViewChild('slTemplate', { static: true }) slTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    public dialogRef: MatDialogRef<ApDungDonVtytDaHetPopupComponent>,
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    this.canhBao = this.data.GhiChu;

    this.gridColumnVTYTs = [
      // { Field: "STT", Title: "#", Width: 20, Sortable: false },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên Vật Tư", MinWidth: 300, Sortable: false, ShowTooltip: true },
      { Field: "NgayDieuTriDisplay", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Nhom", Title: "Là BHYT", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 50, Sortable: false },
      { Field: "TenDVKT", Title: "DVKT", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: false, Template: this.slTemplate },
    ];

    this.dataToaVTYTLe.data = this.data.ResultData.NoiTruDonVTYTTongHopChiTietVos.filter(z => z.LaTuTruc);
    this.dataToaVTYTLe.total = this.data.ResultData.NoiTruDonVTYTTongHopChiTietVos.filter(z => z.LaTuTruc).length;
    for (let i = 0; i < this.dataToaVTYTLe.data.length; i++) {
      if (this.dataToaVTYTLe.data[i].SoLuong > this.dataToaVTYTLe.data[i].SoLuongTonKho) {
        this.dataToaVTYTLe.data[i].HighLightClass = 'bg-row-lightpink';
      }
    }

    this.dataToaVTYTTong.data = this.data.ResultData.NoiTruDonVTYTTongHopChiTietVos.filter(z => !z.LaTuTruc);
    this.dataToaVTYTTong.total = this.data.ResultData.NoiTruDonVTYTTongHopChiTietVos.filter(z => !z.LaTuTruc).length;
    for (let i = 0; i < this.dataToaVTYTTong.data.length; i++) {
      if (this.dataToaVTYTTong.data[i].SoLuong > this.dataToaVTYTTong.data[i].SoLuongTonKho) {
        this.dataToaVTYTTong.data[i].HighLightClass = 'bg-row-lightpink';
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
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }

  apDung() {
    var self = this;
    let comfirm = "áp dụng";
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "đơn VTYT"]) }
    }).afterClosed().subscribe(result => {
      if (result == "Yes") {
        function uniqueData(array: any, key: any) {
          // create new objects for use
          var uniqueArray = [];
          var map = new Map();

          // loop throught array
          array.forEach((user, index) => {
            // first item is always unique add to unique whithout check
            if (index == 0) {
              // using map set first item in map key and value is dynamic which we can set
              map.set(array[index].Id, array[index].Id);
              uniqueArray.push(array[index]);
            }

            //check if the key already exists if exists do not push else push
            if (!map.get(user[key])) {
              map.set(user[key], user[key]);
              uniqueArray.push(user);
            }
          });
          return uniqueArray;
        }
        let dataConfirm = {
          YeuCauTiepNhanId: self.data.YeuCauTiepNhanId,
          KhoaId: self.data.KhoaId,
          Dates: self.data.Dates,
          NoiTruDonVTYTTongHopChiTietVos: uniqueData(self.data.ResultData.NoiTruDonVTYTTongHopChiTietVos.filter((z: any) => z.SoLuongTonKho >= z.SoLuong), 'Id'),
        };
        self.savingPage();
        self.apiService.post("DieuTriNoiTru/TaoNgayDieuTriVaApDungDonVTYTConfirm", dataConfirm).subscribe(
          () => {
            self.closepopupSavingData();
            self.close('Confirm');
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            self.closepopupSavingData();
          });
      }
    });
  }

  close(text: string) {
    this.dialogRef.close(text);
  }


}
