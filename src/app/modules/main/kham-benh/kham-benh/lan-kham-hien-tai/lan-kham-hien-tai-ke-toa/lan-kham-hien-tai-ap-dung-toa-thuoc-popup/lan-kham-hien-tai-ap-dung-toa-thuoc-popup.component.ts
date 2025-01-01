import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ToaMauSoNgayDung } from '../../../../kham-benh.model';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

@Component({
  selector: 'app-lan-kham-hien-tai-ap-dung-toa-thuoc-popup',
  templateUrl: './lan-kham-hien-tai-ap-dung-toa-thuoc-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-ap-dung-toa-thuoc-popup.component.scss']
})
export class LanKhamHienTaiApDungToaThuocPopupComponent implements OnInit {
  validationErrors: any[] = [];
  icClose = icClose;
  gridColumns: any[] = [];
  dataToaThuoc = {
    data: [],
    total: 0
  }
  isDisabled: boolean = false;
  canhBao: string = "Ghi chú: Những thuốc bị tô đỏ vì số lượng thuốc trong kho không đủ hoặc đã hết.";
  @ViewChild('nhomThuocGroupHeaderTemplate', { static: true }) nhomThuocGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('toiTemplate', { static: true }) toiTemplate: TemplateRef<any>;
  groupNhomThuocLichSuKeToa: GroupDescriptor[] = [{ field: 'NhomThuoc' }];
  toaMau: ToaMauSoNgayDung = new ToaMauSoNgayDung();
  documentType: DocumentType;
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private dialogRef: MatDialogRef<LanKhamHienTaiApDungToaThuocPopupComponent>,
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    //console.log("data toa mẫu: ", this.data)
    this.gridColumns = [
      // { Field: "STT", Title: "#", Width: 50 },
      { Field: "Ten", Title: "Dược Phẩm", Width: 100, ShowTooltip: true },
      // { Field: "NhomThuoc", Title: "Nhóm", Width: 60, Hidden: true, TemplateGroupHeader: this.nhomThuocGroupHeaderTemplate },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 100, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 80 },
      { Field: "SangDisplay", Title: "Sáng", Width: 100, Template: this.sangTemplate },
      { Field: "TruaDisplay", Title: "Trưa", Width: 100, Template: this.truaTemplate },
      { Field: "ChieuDisplay", Title: "Chiều", Width: 100, Template: this.chieuTemplate },
      { Field: "ToiDisplay", Title: "Tối", Width: 100, Template: this.toiTemplate },
      { Field: "SoNgayDung", Title: "Số ngày", Width: 80 },
      { Field: "SoLuongDisplay", Title: "SL", Width: 50 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 70 },
    ];
    this.dataToaThuoc.data = this.data.ResultData.ApDungToaThuocChiTietVos;
    this.isDisabled = this.data.ResultData.ThanhCong;
    //console.log("this.isDisabled", this.isDisabled)
    let index = 1;
    let indexs = 1;
    this.dataToaThuoc.data.forEach((x: { STT: number; NhomThuoc: string }) => {
      if (x.NhomThuoc === "Thuốc BHYT") {
        x.STT = index;
        index++;
      }
      if (x.NhomThuoc === "Thuốc Không BHYT") {
        x.STT = indexs;
        indexs++;
      }
    });
    this.dataToaThuoc.data = [...this.dataToaThuoc.data];
    for (let i = 0; i < this.dataToaThuoc.data.length; i++) {
      if (this.dataToaThuoc.data[i].SoLuong > this.dataToaThuoc.data[i].SoLuongTonKho) {
        this.dataToaThuoc.data[i].HighLightClass = 'bg-row-lightpink';
      }
    }
  }

  close() {
    this.dialogRef.close();
  }
  apDung() {
    let lstData = this.dataToaThuoc.data;
    let yeuCauKhamBenhHienTaiId = this.data.YeuCauKhamBenhId;
    this.validationErrors = [];
    this.ref.detectChanges();
    let comfirm = "áp dụng";
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "toa thuốc"]) }
    }).afterClosed().subscribe(result => {
      if (result == "Yes") {
        let dataSend = {
          YeuCauKhamBenhHienTaiId: yeuCauKhamBenhHienTaiId,
          ApDungToaThuocChiTietVos: lstData
        }
        self.apiService.post<any>("KhamBenh/ApDungToaThuocConfirmAsync", dataSend).subscribe(
          () => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Áp dụng toa thuốc"]));
            self.close();
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          });
      }
    });
  }


}



