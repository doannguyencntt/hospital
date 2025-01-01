import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LstYearOrderByModel, NoiTruDonThuocTongHopVo, YearModel } from '../../../dieu-tri-noi-tru.model';
import icClose from '@iconify/icons-ic/twotone-close';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ApDungDonThuocCacNgayPopupComponent } from '../ap-dung-don-thuoc-cac-ngay-popup/ap-dung-don-thuoc-cac-ngay-popup.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApDungDonThuocDaHetPopupComponent } from '../ap-dung-don-thuoc-da-het-popup/ap-dung-don-thuoc-da-het-popup.component';


@Component({
  selector: 'app-sao-chep-don-thuoc-popup',
  templateUrl: './sao-chep-don-thuoc-popup.component.html',
  styleUrls: ['./sao-chep-don-thuoc-popup.component.scss']
})
export class SaoChepDonThuocPopupComponent implements OnInit {
  noiTruDonThuocTongHopVo: NoiTruDonThuocTongHopVo = new NoiTruDonThuocTongHopVo();

  icClose = icClose;
  popupAddingData: any = null;
  popupDeletingData: any = null;
  ngayDieuTriHienTai: Date;
  phieuDieuTriHienTaiId: number;
  phieuDieuTriIdConstant: number;
  isShowKhoTongThuoc: boolean = false;
  isShowKhoTongDichTruyen: boolean = false;
  disabled: boolean = false;
  ngayDieuTriHienTaiHienThi: string = "Chưa có";
  lstYear: Array<YearModel> = new Array<YearModel>();
  lstYearOrderBy: LstYearOrderByModel[] = new Array<LstYearOrderByModel>();
  gridTruyenDichKhoTongColumns: any[] = [];
  gridThuocKhoTongColumns: any[] = [];
  validationErrors: any[] = [];
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  selectedDates: Date[] = [];
  selectedDate: Date = null;
  sortToaThuoc: SortDescriptor[] = [{
    field: 'SoThuTu',
    dir: 'asc'
  }];

  @ViewChild('gridThuoc', { read: GridComponent, static: false }) gridThuoc: GridComponent;
  @ViewChild('gridDichTruyen', { read: GridComponent, static: false }) gridDichTruyen: GridComponent;
  @ViewChild('gridThuocNgoai', { read: GridComponent, static: false }) gridThuocNgoai: GridComponent;
  @ViewChild('gridTruyenDichNgoai', { read: GridComponent, static: false }) gridTruyenDichNgoai: GridComponent;

  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('toiTemplate', { static: true }) toiTemplate: TemplateRef<any>;
  @ViewChild('SLTemplate', { static: true }) SLTemplate: TemplateRef<any>;
  @ViewChild('lieuDungTemplate', { static: true }) lieuDungTemplate: TemplateRef<any>;

  additionString: any = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private authService: AuthService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<SaoChepDonThuocPopupComponent>) {
    this.phieuDieuTriHienTaiId = data.phieuDieuTriHienTaiId;
    this.phieuDieuTriIdConstant = data.phieuDieuTriHienTaiId;
    if (this.phieuDieuTriIdConstant == this.phieuDieuTriHienTaiId) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
    this.additionString = data.yeuCauTiepNhanId + ";" + data.phieuDieuTriHienTaiId;
    this.lstYear = data.lstYear;
    this.lstYearOrderBy = data.lstYearOrderBy;
    this.setExpandsForList(this.lstYear);
  }
  ngOnInit() {
    console.log("data = ", this.data);
    this.noiTruDonThuocTongHopVo.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
    this.selectedDates.push(this.data.ngayDieuTriDuocChon)
    this.selectedDate = new Date(this.data.ngayDieuTriDuocChon);
    this.getKhoaId();
    this.gridTruyenDichKhoTongColumns = [
      { Field: "SoThuTu", Title: "#", Width: 40, Sortable: true },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", MinWidth: 300, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL(/ml)", Width: 30, Sortable: false, Template: this.SLTemplate },
      { Field: "GioSuDung", Title: "Giờ sử dụng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLanTrenMui", Title: "Lần/mũi", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TheTich", Title: "Thể tích(ml)", Width: 30, Sortable: false },
      { Field: "TocDoTruyen", Title: "Tốc độ truyền", Width: 30, Sortable: false },
      { Field: "DonViTocDoTruyenDisplay", Title: "Đơn vị tốc độ truyền", Width: 50, Sortable: false },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLanTrenNgay", Title: "Liều Dùng", Width: 50, Sortable: false, Template: this.lieuDungTemplate },
      { Field: "GhiChu", Title: "Cách Dùng", Width: 500, Sortable: false, ShowTooltip: true },
    ];

    this.gridThuocKhoTongColumns = [
      { Field: "SoThuTu", Title: "#", Width: 40, Sortable: true },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", MinWidth: 300, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 30, Sortable: false, Template: this.SLTemplate },
      { Field: "DungSang", Title: "Sáng", Width: 50, Sortable: false, Template: this.sangTemplate },
      { Field: "DungTrua", Title: "Trưa", Width: 50, Sortable: false, Template: this.truaTemplate },
      { Field: "DungChieu", Title: "Chiều", Width: 50, Sortable: false, Template: this.chieuTemplate },
      { Field: "DungToi", Title: "Tối", Width: 50, Sortable: false, Template: this.toiTemplate },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLanTrenNgay", Title: "Liều Dùng", Width: 50, Sortable: false, Template: this.lieuDungTemplate },
      { Field: "GhiChu", Title: "Cách Dùng", Width: 500, Sortable: false, ShowTooltip: true },
    ];
  }

  checkActiveDay(phieuDieuTriId: number) {
    if (this.phieuDieuTriHienTaiId == phieuDieuTriId) {
      return 'day-tag-active';
    }
    else {
      return 'day-tag-non-active';
    }
  }

  setExpandsForList(lstYear: Array<YearModel>) {
    let find = false;
    lstYear.forEach(y => {
      if (find) return false;
      y.Months.forEach(m => {
        if (find) return false;
        m.Days.forEach(d => {
          if (d.PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
            if (find) return false;
            y.Expands = true;
            find = true;
          }
          else if (d.LaNgayDieuTriDauTien) {
            if (find) return false;
            y.Expands = true;
            find = true;
          }
        });
      });
    });
  }
  onDataBoundChildKhoTongDichTruyen(event: any) {
    if (event != undefined && event != null) {
      if (event != undefined && event.Data.length > 0) {
        this.isShowKhoTongDichTruyen = true;
      }
      else {
        this.isShowKhoTongDichTruyen = false;
      }
    }
  }

  onDataBoundChildKhoTong(event: any) {
    if (event != undefined && event != null) {
      if (event.Data.length > 0) {
        this.isShowKhoTongThuoc = true;
      }
      else {
        this.isShowKhoTongThuoc = false;
      }
    }
  }

  dayAction(date: number, month: number, year: number, phieuDieuTriId: number) {
    this.isShowKhoTongThuoc=true;
    this.ngayDieuTriHienTai = new Date(year, month - 1, date);
    this.selectedDate = new Date(year, month - 1, date);
    this.phieuDieuTriHienTaiId = phieuDieuTriId;
    if (this.phieuDieuTriIdConstant == phieuDieuTriId) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
    this.ngayDieuTriHienTaiHienThi = CommonService.formatDate(this.ngayDieuTriHienTai, "dd/mm/yyyy");
    this.additionString = this.data.yeuCauTiepNhanId + ";" + phieuDieuTriId;
    this.gridDichTruyen._additionalSearchString = this.additionString;
    this.gridDichTruyen.search();
    this.gridThuoc._additionalSearchString = this.additionString;
    this.gridThuoc.search();
    //this.setExpandsForList(this.lstYear, this.ngayDieuTriHienTai);
  }

  chonNgayApDung() {
    var self = this;
    let dataThuoc = self.gridThuoc.getAllDataFromDatasource();
    let dataDichTruyen = self.gridDichTruyen.getAllDataFromDatasource();
    let dataAll = dataThuoc.concat(dataDichTruyen);
    if (dataAll.length > 0) {
      self.dialog.open(ApDungDonThuocCacNgayPopupComponent, {
        disableClose: false,
        width: '450px',
        height: '475px',
        data: {
          thuocs: dataAll,
          lstYear: this.lstYear,
          lstYearOrderBy: this.data.lstYearOrderByFull,
          yeuCauTiepNhanId: this.data.yeuCauTiepNhanId,
          phieuDieuTriHienTaiId: this.phieuDieuTriHienTaiId,
          ngayNhapVien: this.data.ngayNhapVien,
          selectedDate: this.selectedDate,
          isCopy: true
        },
      }).afterClosed().subscribe(resData => {
        if (resData != "NoAnswer") {
          self.close(resData);
        }
      });
    }
    else {
      this.notificationService.showError('Vui lòng chọn ngày điều trị.');
    }
  }

  addingPage() {
    this.popupAddingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang thêm dữ liệu..." },
    });
  }

  closePopupAddingData() {
    if (this.popupAddingData != undefined && this.popupAddingData != null) {
      this.popupAddingData.close();
    }
  }

  getKhoaId() {
    let user = this.authService.getAccessUser();
    let idPhong = this.authService.getPhongLamViecId();
    this.apiService.post("User/GetUserAndDepartmentInformation?idNhanVien=" + user.Id + "&idPhongBenhVien=" + idPhong).subscribe(
      (resultData: any) => {
        if (resultData != undefined && resultData != null) {
          this.noiTruDonThuocTongHopVo.KhoaId = resultData.KhoaId;
        }
        else {
          this.noiTruDonThuocTongHopVo.KhoaId = this.lstYearOrderBy[0].KhoaId;
        }
      }, err => {

      });
  }

  tao() {
    var self = this;
    let dataThuoc = self.gridThuoc.getAllDataFromDatasource();
    let dataDichTruyen = self.gridDichTruyen.getAllDataFromDatasource();
    let dataAll = dataThuoc.concat(dataDichTruyen);
    if (dataAll.length > 0) {
      var self = this;
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
        self.noiTruDonThuocTongHopVo.Dates = self.selectedDates;
        self.noiTruDonThuocTongHopVo.NoiTruDonThuocTongHopChiTietVos = [...dataAll];
        self.addingPage();
        self.apiService.post<any>("DieuTriNoiTru/TaoNgayDieuTriVaApDungDonThuoc", self.noiTruDonThuocTongHopVo).subscribe(
          (resultData) => {
            self.closePopupAddingData();
            if (resultData != null) {
              if (resultData == "OK") {
                let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Áp dụng"]);
                self.notificationService.showSuccess(mess);
                if (self.data.isCopy) {
                  self.close("Copy");
                } else {
                  self.close("OK");
                }
              }
              else {
                let datas = {
                  YeuCauTiepNhanId: self.noiTruDonThuocTongHopVo.YeuCauTiepNhanId,
                  KhoaId: self.noiTruDonThuocTongHopVo.KhoaId,
                  Dates: self.noiTruDonThuocTongHopVo.Dates,
                  ResultData: resultData,
                  GhiChu: "Ghi chú: Những thuốc bị tô đỏ vì số lượng tồn không đủ hoặc đã hết và sẽ không thêm vào ngày điều trị hiện tại khi áp dụng.",
                };
                if (!resultData.ThanhCong) {
                  self.dialog.open(ApDungDonThuocDaHetPopupComponent, {
                    disableClose: false,
                    width: '1200px',
                    height: '500px',
                    data: datas,
                  }).afterClosed().subscribe(resultData => {
                    if (resultData == "Confirm") {
                      self.close(resultData);
                    }
                  });
                }
              }
            }

          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            self.closePopupAddingData();
          });
      } else {
        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
    else {
      this.notificationService.showError('Vui lòng chọn ngày điều trị.');
    }
  }
  close(text: string) {
    this.dialogRef.close(text);
  }
}
