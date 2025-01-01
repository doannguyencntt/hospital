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
  selector: 'app-ap-dung-don-thuoc-da-het-popup',
  templateUrl: './ap-dung-don-thuoc-da-het-popup.component.html',
  styleUrls: ['./ap-dung-don-thuoc-da-het-popup.component.scss']
})
export class ApDungDonThuocDaHetPopupComponent implements OnInit {
  validationErrors: any[] = [];
  icClose = icClose;
  gridColumnThuocs: any[] = [];
  gridColumnDichTruyens: any[] = [];
  popupSavingData: any = null;
  dataToaThuoc = {
    data: [],
    total: 0
  }
  dataDichTruyen = {
    data: [],
    total: 0
  }
  canhBao: string = "";
  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('toiTemplate', { static: true }) toiTemplate: TemplateRef<any>;
  @ViewChild('lieuDungTemplate', { static: true }) lieuDungTemplate: TemplateRef<any>;
  @ViewChild('slTemplate', { static: true }) slTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  groups: GroupDescriptor[] = [{ field: 'NgayDieuTriDisplay' }];

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    public dialogRef: MatDialogRef<ApDungDonThuocDaHetPopupComponent>,
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    // console.log("data ", this.data)
    this.canhBao = this.data.GhiChu;
    this.gridColumnThuocs = [
      { Field: "SoThuTu", Title: "#", Width: 50 },
      { Field: "NgayDieuTriDisplay", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ten", Title: "Tên", MinWidth: 300, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 50, Template: this.slTemplate },
      { Field: "DungSang", Title: "Sáng", Width: 70, Template: this.sangTemplate },
      { Field: "DungTrua", Title: "Trưa", Width: 70, Template: this.truaTemplate },
      { Field: "DungChieu", Title: "Chiều", Width: 70, Template: this.chieuTemplate },
      { Field: "DungToi", Title: "Tối", Width: 70, Template: this.toiTemplate },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 70, Sortable: false },
      { Field: "SoLanDungTrongNgay", Title: "Liều Dùng", Width: 100, Sortable: false, Template: this.lieuDungTemplate },
      { Field: "GhiChu", Title: "Cách Dùng", Width: 250, Sortable: false, ShowTooltip: true },

    ];

    this.gridColumnDichTruyens = [
      { Field: "SoThuTu", Title: "#", Width: 50 },
      { Field: "NgayDieuTriDisplay", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ten", Title: "Tên", MinWidth: 300, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL(/ml)", Width: 50, Sortable: false, Template: this.slTemplate },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 70, Sortable: false },
      { Field: "GioSuDung", Title: "Giờ sử dụng", Width: 80, Sortable: false, ShowTooltip: true },
      { Field: "SoLanTrenMui", Title: "Lần/mũi", Width: 80, Sortable: false, ShowTooltip: true },
      { Field: "TheTich", Title: "Thể tích(ml)", Width: 60, Sortable: false },
      { Field: "TocDoTruyen", Title: "Tốc độ truyền", Width: 60, Sortable: false },
      { Field: "DonViTocDoTruyenDisplay", Title: "Đơn vị tốc độ truyền", Width: 80, Sortable: false },
      { Field: "SoLanDungTrongNgay", Title: "Liều Dùng", Width: 100, Sortable: false, Template: this.lieuDungTemplate },
      { Field: "GhiChu", Title: "Cách Dùng", Width: 250, Sortable: false, ShowTooltip: true },

    ];
    this.dataToaThuoc.data = this.data.ResultData.NoiTruDonThuocTongHopChiTietVos.filter((z: any) => !z.LaDichTruyen);
    this.dataToaThuoc.total = this.data.ResultData.NoiTruDonThuocTongHopChiTietVos.filter((z: any) => !z.LaDichTruyen).length;
    for (let i = 0; i < this.dataToaThuoc.data.length; i++) {
      if (this.dataToaThuoc.data[i].SoLuong > this.dataToaThuoc.data[i].SoLuongTonKho) {
        this.dataToaThuoc.data[i].HighLightClass = 'bg-row-lightpink';
      }
    }

    this.dataDichTruyen.data = this.data.ResultData.NoiTruDonThuocTongHopChiTietVos.filter((z: any) => z.LaDichTruyen);
    this.dataDichTruyen.total = this.data.ResultData.NoiTruDonThuocTongHopChiTietVos.filter((z: any) => z.LaDichTruyen).length;
    for (let i = 0; i < this.dataDichTruyen.data.length; i++) {
      if (this.dataDichTruyen.data[i].SoLuong > this.dataDichTruyen.data[i].SoLuongTonKho) {
        this.dataDichTruyen.data[i].HighLightClass = 'bg-row-lightpink';
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
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "đơn thuốc"]) }
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
          NoiTruDonThuocTongHopChiTietVos: uniqueData(self.data.ResultData.NoiTruDonThuocTongHopChiTietVos.filter((z: any) => z.SoLuongTonKho >= z.SoLuong), 'Id'),
          NoiTruDonThuocTuVanChiTietVos: self.data.ResultData.NoiTruDonThuocTuVanChiTietVos,
        };
        self.savingPage();
        self.apiService.post("DieuTriNoiTru/TaoNgayDieuTriVaApDungDonThuocConfirm", dataConfirm).subscribe(
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
