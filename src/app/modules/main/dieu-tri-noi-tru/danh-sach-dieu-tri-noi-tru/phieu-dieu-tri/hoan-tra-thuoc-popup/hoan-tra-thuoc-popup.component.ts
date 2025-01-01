import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { HoanTraThuocVo, KeToaThuocDieuTriNoiTru, ThongTinHoanTraThuocVo } from '../../../dieu-tri-noi-tru.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
@Component({
  selector: 'app-hoan-tra-thuoc-popup',
  templateUrl: './hoan-tra-thuoc-popup.component.html',
  styleUrls: ['./hoan-tra-thuoc-popup.component.scss']
})
export class HoanTraThuocPopupComponent implements OnInit {
  thongTinHoanTraThuocVo: ThongTinHoanTraThuocVo = new ThongTinHoanTraThuocVo();
  hoanTraThuocVo: HoanTraThuocVo = new HoanTraThuocVo();

  icClose = icClose;
  validationErrors: any[] = [];
  popupSavingData: any = null;
  popupLoadingData: any = null;
  isSelectDuocPham: boolean = false;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  gridColumns: any[] = [];
  additionString: any = null;
  format = "n2";
  @ViewChild("ngayTraTemplate", { static: true }) ngayTraTemplate: TemplateRef<any>;
  @ViewChild("ngayTaoTemplate", { static: true }) ngayTaoTemplate: TemplateRef<any>;
  @ViewChild("tinhTrangTemplate", { static: true }) tinhTrangTemplate: TemplateRef<any>;
  laTuTruc: boolean = null;

  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<HoanTraThuocPopupComponent>
  ) { }

  ngOnInit() {
    this.hoanTraThuocVo = this.data;
    // console.log("data ", this.data)
    this.laTuTruc = this.data.LaTuTruc;
    this.getThongTinHoanTraThuoc();
    this.gridColumns = [
      { Field: "NgayTra", Title: "Ngày trả", Width: 70, Sortable: false, Template: this.ngayTraTemplate, },
      { Field: "SoLuongTra", Title: "SL Trả", Width: 30, Sortable: false, },
      { Field: "NhanVienTra", Title: "Người trả", Width: 70, Sortable: false, },
      { Field: "SoPhieu", Title: "Số phiếu trả", Width: 50, Sortable: false, Hidden: (this.hoanTraThuocVo.LaTuTruc != null && this.hoanTraThuocVo.LaTuTruc) },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 50, Sortable: false, Template: this.tinhTrangTemplate },
      { Field: "NgayTao", Title: "Ngày tạo", Width: 70, Sortable: false, Template: this.ngayTaoTemplate, },
    ];
    this.additionString = this.hoanTraThuocVo.NoiTruChiDinhDuocPhamId + ";" + this.hoanTraThuocVo.LaDuocPhamBHYT + ";" + this.hoanTraThuocVo.LaTuTruc;
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
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

  getThongTinHoanTraThuoc() {
    var self = this;
    self.loadingPage();
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinHoanTraThuocVo", self.hoanTraThuocVo).subscribe(
      (res) => {
        this.closePopupLoadingData();
        if (res != undefined && res != null) {
          self.thongTinHoanTraThuocVo = res;
          // console.log("thongTinHoanTraThuocVo ", res)
          //update BVHD-3411: Khi hoàn trả thuốc/vật tư từ người bệnh (chưa cần duyệt phiếu hoàn trả) thì phần mềm ghi nhận số lượng và thành tiền còn lại sau khi hoàn trả
          if(self.thongTinHoanTraThuocVo.YeuCauDuocPhamBenhViens != null){
            self.hoanTraThuocVo.SoLuong = self.thongTinHoanTraThuocVo.YeuCauDuocPhamBenhViens.reduce((n,{SoLuong, SoLuongTra}) =>  n + SoLuong + SoLuongTra, 0)
          }
        }

      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  huy() {
    this.dialogRef.close();
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

  luu() {
    this.validationErrors = null;
    this.ref.detectChanges();
    this.savingPage();
    if (this.thongTinHoanTraThuocVo.LaDichTruyen == null) {
      this.thongTinHoanTraThuocVo.LaDichTruyen = false;
    }
    this.thongTinHoanTraThuocVo.LaDuocPhamBHYT = this.hoanTraThuocVo.LaDuocPhamBHYT;
    this.apiService.post<any>("DieuTriNoiTru/HoanTraDuocPhamTuBenhNhan", this.thongTinHoanTraThuocVo).subscribe(
      () => {
        this.closepopupSavingData();
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
        this.dialogRef.close();
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closepopupSavingData();
      });
  }
}
