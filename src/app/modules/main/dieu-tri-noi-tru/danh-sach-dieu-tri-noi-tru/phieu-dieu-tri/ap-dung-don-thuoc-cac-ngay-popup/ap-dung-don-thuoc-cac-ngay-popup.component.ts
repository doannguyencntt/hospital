import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { LstYearOrderByModel, NoiTruDonThuocTongHopVo, YearModel } from '../../../dieu-tri-noi-tru.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApDungDonThuocDaHetPopupComponent } from '../ap-dung-don-thuoc-da-het-popup/ap-dung-don-thuoc-da-het-popup.component';
import { CalendarComponent } from '@progress/kendo-angular-dateinputs';

declare var $: any;

@Component({
  selector: 'app-ap-dung-don-thuoc-cac-ngay-popup',
  templateUrl: './ap-dung-don-thuoc-cac-ngay-popup.component.html',
  styleUrls: ['./ap-dung-don-thuoc-cac-ngay-popup.component.scss']
})
export class ApDungDonThuocCacNgayPopupComponent implements OnInit {
  icClose = icClose;
  validationErrors: any[] = [];
  popupSavingData: any = null;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  popupAddingData: any = null;
  popupDeletingData: any = null;
  ngayTao: Date;
  ngayDieuTriHienTai: Date;
  phieuDieuTriHienTaiId: number;
  lstYear: Array<YearModel> = new Array<YearModel>();
  lstYearOrderBy: LstYearOrderByModel[] = new Array<LstYearOrderByModel>();
  lstDateChuaCoDonThuoc: any[] = [];
  lstDateCoDonThuoc: any[] = [];
  noiTruDonThuocTongHopVo: NoiTruDonThuocTongHopVo = new NoiTruDonThuocTongHopVo();
  @ViewChild("calendar", { static: true }) calendar: CalendarComponent;
  idTDs: any[] = []
  disabledDates: Date[] = [];
  selectedDates: Date[] = [];
  borderIds: any[] = [];
  constructor(
    private notificationService: NotificationService,
    private apiService: ApiService,
    private authService: AuthService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ApDungDonThuocCacNgayPopupComponent>
  ) {
  }

  ngOnInit() {
    console.log("data ", this.data)
    var self = this;
    this.lstYear = this.data.lstYear;
    this.lstYearOrderBy = this.data.lstYearOrderBy;
    this.noiTruDonThuocTongHopVo.YeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
    this.noiTruDonThuocTongHopVo.NoiTruDonThuocTongHopChiTietVos = [...this.data.thuocs];
    this.ngayDieuTriHienTai = new Date(this.lstYearOrderBy[0].Date);
    this.lstDateChuaCoDonThuoc = self.lstYearOrderBy.filter(item => !item.CoDonThuocNoiTru);
    this.lstDateCoDonThuoc = self.lstYearOrderBy.filter(item => item.CoDonThuocNoiTru);
    this.getKhoaId();
    // this.ngayNhapVien = new Date(this.data.ngayNhapVien);
    $("#calendar").on("mousedown", "td", function (e) {
      // get item if the user clicked on an item template
      var clickedItem = $(e.target).closest("td[role='gridcell']");
      clickedItem.on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
      });

      if (clickedItem.length > 0) {
        //Lấy ra view tháng đang click
        var arrTitleDate = clickedItem.attr("title").split(',');
        var month = 0;
        var year = 0;
        if (arrTitleDate.length == 3) {
          month = parseInt(arrTitleDate[1].split(' tháng ')[1]) - 1;
          year = parseInt(arrTitleDate[2]);
        }
        var day = clickedItem[0].innerText;
        var daySelect = new Date(year, month, day);
        //Nếu click vào ngày đã tạo thì ko cho
        // var arrDisabledDates = self.disabledDates.filter(item => item.getDate() === daySelect.getDate() && item.getMonth() === daySelect.getMonth() && item.getFullYear() === daySelect.getFullYear());
        // if (arrDisabledDates.length > 0) {
        //   return;
        // }
        if (self.lstDateCoDonThuoc.some(z => new Date(z.Date).getDate() == daySelect.getDate()
          && new Date(z.Date).getMonth() == daySelect.getMonth()
          && new Date(z.Date).getFullYear() == daySelect.getFullYear())) {
          return;
        }
        let dateNew = new Date(self.data.ngayNhapVien);
        if (daySelect < dateNew) {
          return;
        }
        if (self.selectedDates.length == 0) {
          self.selectedDates.push(daySelect);
          clickedItem.addClass("k-state-selected");
        }
        else {
          var checkExist = self.selectedDates.filter(item => item.getDate() == daySelect.getDate() && item.getMonth() == daySelect.getMonth() && item.getFullYear() == daySelect.getFullYear());
          var arrNew = self.selectedDates.filter(item => !(item.getDate() == daySelect.getDate() && item.getMonth() == daySelect.getMonth() && item.getFullYear() == daySelect.getFullYear()));
          if (checkExist.length > 0) {
            self.selectedDates = arrNew;
            clickedItem.removeClass("k-state-selected");
          }
          else {
            self.selectedDates.push(daySelect);
            clickedItem.addClass("k-state-selected");
          }
        }
      }
    });
    self.funcBorder();
  }

  activeDateChange(value: Date): void {
    this.borderIds.forEach(item => {
      if (value.getMonth() == item.month && value.getFullYear() == item.year) {
        $("#" + item.id).attr('style', "border:1px solid red !important;")
      }
      else {
        $("#" + item.id).attr('style', "border:1px solid transparent !important")
      }
    });
  }
  funcBorder() {
    var self = this;
    $(document).ready(function () {
      $("#calendar td[role='gridcell']").each(function () {
        var arrTitleDate = $(this).attr("title").split(',');
        var month = 0;
        var year = 0;
        if (arrTitleDate.length == 3) {
          month = parseInt(arrTitleDate[1].split(' tháng ')[1]) - 1;
          year = parseInt(arrTitleDate[2]);
        }
        var day = $(this)[0].innerText;
        var daySelect = new Date(year, month, day);

        if (self.lstDateChuaCoDonThuoc.length > 0) {
          self.lstDateChuaCoDonThuoc.forEach(itemChild => {
            let dateCompare = new Date(itemChild.Date);
            if (dateCompare.getDate() == daySelect.getDate()
              && dateCompare.getMonth() == daySelect.getMonth()
              && dateCompare.getFullYear() == daySelect.getFullYear()) {
              if (!$(this).hasClass("k-state-selected")) {
                self.idTDs.push($(this)[0].attributes[5].value);
                // console.log("$(this) :", $(this))
                self.borderIds.push({ id: $(this).closest('td').attr('id'), month: dateCompare.getMonth(), year: dateCompare.getFullYear() });
                // $(this).closest('td').css({ "border": "1px solid red" });
                $(this).closest('td').attr('style', "border:1px solid red !important;")
                // $(this).closest('td').addClass("k-state-red")

              }
            }
          });

        }
      });
    });
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

  checkExist(date: Date) {
    if (this.lstDateCoDonThuoc.some(z => new Date(z.Date).getDate() == date.getDate()
      && new Date(z.Date).getMonth() == date.getMonth()
      && new Date(z.Date).getFullYear() == date.getFullYear())) {
      return true;
    }
    let dateNew = new Date(this.data.ngayNhapVien);
    return (date < dateNew);
  }

  checkActiveDay(date: Date) {
    this.idTDs.forEach(title => {
      var arrTitleDate = title.split(',');
      var day = 0;
      var month = 0;
      var year = 0;
      if (arrTitleDate.length == 3) {
        day = parseInt(arrTitleDate[1].split(' tháng ')[0]);
        month = parseInt(arrTitleDate[1].split(' tháng ')[1]) - 1;
        year = parseInt(arrTitleDate[2]);
      }
      var daySelect = new Date(year, month, day);
      if (date.getDate() == daySelect.getDate()
        && date.getMonth() == daySelect.getMonth()
        && date.getFullYear() == daySelect.getFullYear()) {
        return "k-state-border-red"
      }
    });
  }


  onActiveDateChange(value: Date): void {
    var self = this;
    let dateChoice = self.selectedDates.find(o => o == value);
    if (dateChoice == undefined) {
      self.selectedDates.push(value);
    }

    $("#calendar td[role='gridcell']").removeClass("k-state-selected");
    $("#calendar td[role='gridcell']").each(function (e) {
      var arrTitleDate = $(this).attr("title").split(',');
      var month = 0;
      var year = 0;
      if (arrTitleDate.length == 3) {
        month = parseInt(arrTitleDate[1].split(' tháng ')[1]) - 1;
        year = parseInt(arrTitleDate[2]);
      }
      var day = $(this)[0].innerText;
      var daySelect = new Date(year, month, day);

      var checkExist = self.selectedDates.filter(item => item.getDate() === daySelect.getDate() && item.getMonth() === daySelect.getMonth() && item.getFullYear() === daySelect.getFullYear());
      if (checkExist.length > 0) {
        if (!$(this).hasClass("k-state-selected")) {
          $(this).addClass("k-state-selected");
        }
      }
    });
  }



  close(text: string) {
    this.dialogRef.close(text);
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

  apDungDonThuoc() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      let selectedDatesTemp: Date[] = [];
      if (self.data.isCopy) {
        selectedDatesTemp = self.selectedDates.filter(z => !(z.getDate() == self.data.selectedDate.getDate()
          && z.getMonth() == self.data.selectedDate.getMonth()
          && z.getFullYear() == self.data.selectedDate.getFullYear()));
      }
      else {
        selectedDatesTemp = self.selectedDates.filter(z => !(z.getDate() == this.ngayDieuTriHienTai.getDate()
          && z.getMonth() == this.ngayDieuTriHienTai.getMonth()
          && z.getFullYear() == this.ngayDieuTriHienTai.getFullYear()));
      }
      if (selectedDatesTemp.length == 0) {
        self.notificationService.showError("Vui lòng chọn ngày điều trị (không bị làm mờ) trước khi lưu.");
      }
      else {
        self.noiTruDonThuocTongHopVo.Dates = selectedDatesTemp;
        // console.log("self.noiTruDonThuocTongHopVo: ", self.noiTruDonThuocTongHopVo)
        self.addingPage();
        self.apiService.post<any>("DieuTriNoiTru/TaoNgayDieuTriVaApDungDonThuoc", self.noiTruDonThuocTongHopVo).subscribe(
          (resultData) => {
            self.closePopupAddingData();
            if (resultData != null) {
              if (resultData == "OK") {
                let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Áp dụng"]);
                self.notificationService.showSuccess(mess);
                if (self.data.isCopy) {
                  self.close("CopyApDung");
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
                  GhiChu: "Ghi chú: Những thuốc bị tô đỏ vì số lượng tồn không đủ hoặc đã hết và không thêm vào các ngày điều trị được chọn khi áp dụng.",
                };
                if (!resultData.ThanhCong) {
                  self.dialog.open(ApDungDonThuocDaHetPopupComponent, {
                    disableClose: false,
                    width: '1400px',
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
      }
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


}
