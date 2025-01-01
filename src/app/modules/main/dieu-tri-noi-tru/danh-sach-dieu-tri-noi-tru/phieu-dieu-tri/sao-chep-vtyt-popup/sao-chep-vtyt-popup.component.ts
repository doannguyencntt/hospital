import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LstYearOrderByModel, NoiTruDonVTYTTongHopVo, YearModel } from '../../../dieu-tri-noi-tru.model';
import icClose from '@iconify/icons-ic/twotone-close';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApDungDonVtytDaHetPopupComponent } from '../ap-dung-don-vtyt-da-het-popup/ap-dung-don-vtyt-da-het-popup.component';
import { ApDungDonVtytCacNgayPopupComponent } from '../ap-dung-don-vtyt-cac-ngay-popup/ap-dung-don-vtyt-cac-ngay-popup.component';
@Component({
  selector: 'app-sao-chep-vtyt-popup',
  templateUrl: './sao-chep-vtyt-popup.component.html',
  styleUrls: ['./sao-chep-vtyt-popup.component.scss']
})
export class SaoChepVtytPopupComponent implements OnInit {
  noiTruDonVTYTTongHopVo: NoiTruDonVTYTTongHopVo = new NoiTruDonVTYTTongHopVo();

  icClose = icClose;
  popupAddingData: any = null;
  popupDeletingData: any = null;
  ngayDieuTriHienTai: Date;
  phieuDieuTriHienTaiId: number;
  phieuDieuTriIdConstant: number;
  isShowKhoLe: boolean = false;
  isShowKhoTong: boolean = false;
  disabled: boolean = false;
  ngayDieuTriHienTaiHienThi: string = "Chưa có";
  lstYear: Array<YearModel> = new Array<YearModel>();
  lstYearOrderBy: LstYearOrderByModel[] = new Array<LstYearOrderByModel>();
  gridColumnVTYTs: any[] = [];
  validationErrors: any[] = [];
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  selectedDates: Date[] = [];
  selectedDate: Date = null;
  sortToaThuoc: SortDescriptor[] = [{
    field: 'SoThuTu',
    dir: 'asc'
  }];
  @ViewChild('slTemplate', { static: true }) slTemplate: TemplateRef<any>;
  @ViewChild('gridVatTu', { read: GridComponent, static: false }) gridVatTu: GridComponent;
  @ViewChild('gridVatTuKhoTong', { read: GridComponent, static: false }) gridVatTuKhoTong: GridComponent;

  additionString: any = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private authService: AuthService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<SaoChepVtytPopupComponent>) {
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
    console.log("data VTYT: ", this.data)
    this.noiTruDonVTYTTongHopVo.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
    this.selectedDates.push(this.data.ngayDieuTriDuocChon)
    this.selectedDate = new Date(this.data.ngayDieuTriDuocChon);
    this.getKhoaId();

    this.gridColumnVTYTs = [
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên Vật Tư", MinWidth: 300, Sortable: false, ShowTooltip: true },
      // { Field: "Nhom", Title: "Là BHYT", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 50, Sortable: false },
      { Field: "TenDVKT", Title: "DVKT", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: false, Template: this.slTemplate },
    ];

  }

  onDataBoundChild(event: any) {
    if (event != undefined && event != null) {
      if (event != undefined && event.Data.length > 0) {
        this.isShowKhoLe = true;
      }
      else {
        this.isShowKhoLe = false;
      }
    }
  }

  onDataBoundChildKhoTong(event: any) {
    if (event != undefined && event != null) {
      if (event != undefined && event.Data.length > 0) {
        this.isShowKhoTong = true;
      }
      else {
        this.isShowKhoTong = false;
      }
    }
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


  dayAction(date: number, month: number, year: number, phieuDieuTriId: number) {
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
    this.gridVatTu._additionalSearchString = this.additionString;
    this.gridVatTu.search();
    this.gridVatTuKhoTong._additionalSearchString = this.additionString;
    this.gridVatTuKhoTong.search();
    //this.setExpandsForList(this.lstYear, this.ngayDieuTriHienTai);
  }

  chonNgayApDung() {
    var self = this;
    let dataVTYTLe = self.gridVatTu.getAllDataFromDatasource();
    let dataVTYTTong = self.gridVatTuKhoTong.getAllDataFromDatasource();
    let dataAll = dataVTYTLe.concat(dataVTYTTong);
    if (dataAll.length > 0) {
      self.dialog.open(ApDungDonVtytCacNgayPopupComponent, {
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
          this.noiTruDonVTYTTongHopVo.KhoaId = resultData.KhoaId;
        }
        else {
          this.noiTruDonVTYTTongHopVo.KhoaId = this.lstYearOrderBy[0].KhoaId;
        }
      }, err => {

      });
  }

  tao() {
    var self = this;
    let dataVTYTLe = self.gridVatTu.getAllDataFromDatasource();
    let dataVTYTTong = self.gridVatTuKhoTong.getAllDataFromDatasource();
    let dataAll = dataVTYTLe.concat(dataVTYTTong);
    if (dataAll.length > 0) {
      var self = this;
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
        self.noiTruDonVTYTTongHopVo.Dates = self.selectedDates;
        self.noiTruDonVTYTTongHopVo.NoiTruDonVTYTTongHopChiTietVos = [...dataAll];
        self.addingPage();
        self.apiService.post<any>("DieuTriNoiTru/TaoNgayDieuTriVaApDungDonVTYT", self.noiTruDonVTYTTongHopVo).subscribe(
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
                  YeuCauTiepNhanId: self.noiTruDonVTYTTongHopVo.YeuCauTiepNhanId,
                  KhoaId: self.noiTruDonVTYTTongHopVo.KhoaId,
                  Dates: self.noiTruDonVTYTTongHopVo.Dates,
                  ResultData: resultData,
                  GhiChu: "Ghi chú: Những VTYT bị tô đỏ vì số lượng tồn không đủ hoặc đã hết và sẽ không thêm vào ngày điều trị hiện tại khi áp dụng.",
                };
                if (!resultData.ThanhCong) {
                  self.dialog.open(ApDungDonVtytDaHetPopupComponent, {
                    disableClose: false,
                    width: '1200px',
                    height: '650px',
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
