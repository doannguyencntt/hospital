import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CalendarComponent } from '@progress/kendo-angular-dateinputs';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icClose from '@iconify/icons-ic/twotone-close';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
declare var $: any;


@Component({
  selector: 'app-phieu-dieu-tri-popup-tao-ngay',
  templateUrl: './phieu-dieu-tri-popup-tao-ngay.component.html',
  styleUrls: ['./phieu-dieu-tri-popup-tao-ngay.component.scss']
})
export class PhieuDieuTriPopupTaoNgayComponent implements OnInit {
  popupAddingData: any = null;
  lstYearOrderBy: Date[] = new Array<Date>();
  icClose = icClose;
  ngayTao: Date;
  id: number;
  phieuDieuTriHienTaiId: number;
  selectedDates: Date[] = [];
  selectedDatesPre: Date[] = [];
  selectedDatesTemp: Date[] = [];
  disabledDates: Date[] = [];
  dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel = new ChiTietDieuTriNoiTruViewModel();
  @ViewChild("calendar", { static: true }) calendar: CalendarComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private route: ActivatedRoute
    , private dialog: MatDialog, public dialogRef: MatDialogRef<PhieuDieuTriPopupTaoNgayComponent>
    , private apiService: ApiService, private notificationService: NotificationService) {
    this.lstYearOrderBy = data.lstYearOrderBy;
    this.dieuTriNoiTruModel = data.dieuTriNoiTruModel;

    this.id = data.id;
    this.phieuDieuTriHienTaiId = data.phieuDieuTriHienTaiId;
    //disable date is selected
    if (data.dates != null && data.dates.length > 0) {
      data.dates.forEach(year => {
        if (year.Months != null && year.Months.length > 0) {
          year.Months.forEach(month => {
            if (month.Days != null && month.Days.length > 0) {
              month.Days.forEach(day => {
                if (day.LaNgayDieuTriTamThoi) {
                  this.selectedDatesPre.push(new Date(day.FullDate));
                }
                if (day.KhoaId == this.dieuTriNoiTruModel.KhoaId) {
                  this.disabledDates.push(new Date(year.Year, month.Month - 1, day.Day));
                }
              });
            }
          });
        }
      });
    }
    //console.log("id = ", this.id);
  }

  ngOnInit() {
    var self = this;
    console.log("selectedDatesPre: ", this.selectedDatesPre)
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
        var arrDisabledDates = self.disabledDates.filter(item => item.getDate() === daySelect.getDate() && item.getMonth() === daySelect.getMonth() && item.getFullYear() === daySelect.getFullYear());
        if (arrDisabledDates.length > 0) {
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
  }

  onActiveDateChange(value: Date): void {
    var self = this;
    console.log("onActiveDateChange = ", value, self.selectedDates);
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

  close() {
    let dataRs = {
      resultData: {
        LstYear: this.data.dates,
        LstYearOrderBy: this.lstYearOrderBy
      },
      model: {
        Dates: this.selectedDatesPre,
        yeuCauTiepNhanId: this.id,
        phieuDieuTriId: this.phieuDieuTriHienTaiId,
        KhoaId: this.dieuTriNoiTruModel.KhoaId,
      },
      message: "NoAnswer"
    }
    this.dialogRef.close(dataRs);
  }

  addingPage() {
    this.popupAddingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "250px",
      height: "90px",
      data: { Title: "Đang thêm ngày điều trị..." },
    });
  }

  closePopupAddingData() {
    if (this.popupAddingData != undefined && this.popupAddingData != null) {
      this.popupAddingData.close();
    }
  }


  tao() {
    //console.log("ngayTao = ", this.ngayTao);
    if (this.selectedDates == undefined || this.selectedDates == null || this.selectedDates.length == 0) {
      this.notificationService.showError('Vui lòng chọn ngày');
    }
    else {
      this.selectedDates.forEach(date => {
        this.selectedDatesPre.push(date);
      });
      // remove duplicate items
      this.selectedDatesTemp = this.selectedDatesPre.map(function (date) { return date.getTime() })
        .filter(function (date, i, array) {
          return array.indexOf(date) === i;
        })
        .map(function (time) { return new Date(time); });
      //end
      let model = {
        Dates: this.selectedDatesTemp,
        yeuCauTiepNhanId: this.id,
        phieuDieuTriId: this.phieuDieuTriHienTaiId,
        KhoaId: this.dieuTriNoiTruModel.KhoaId,
        // DateAdds: this.selectedDates
      };
      this.addingPage();
      this.apiService.post<any>("DieuTriNoiTru/CreateNewDateTemp", model).subscribe(
        resultData => {
          this.closePopupAddingData();
          let dataRs = {
            resultData,
            model,
            message: "OK"
          }
          this.dialogRef.close(dataRs);
        },
        (err: ApiError) => {
          if (err != undefined) {
            this.notificationService.showError(err.Message);
          }
          this.selectedDatesPre = this.selectedDatesPre.filter(z => z.getDate() >= new Date(this.data.ngayNhapVien).getDate()
            && z.getMonth() >= new Date(this.data.ngayNhapVien).getMonth()
            && z.getFullYear() >= new Date(this.data.ngayNhapVien).getFullYear()
          );
          // console.log("date return: ", this.selectedDatesPre)
          this.closePopupAddingData();
        });

    }
  }
  checkExist(date: Date) {
    var arr = this.disabledDates.filter(item => item.getDate() === date.getDate() && item.getMonth() === date.getMonth() && item.getFullYear() === date.getFullYear());
    return arr.length > 0;
  }
}
