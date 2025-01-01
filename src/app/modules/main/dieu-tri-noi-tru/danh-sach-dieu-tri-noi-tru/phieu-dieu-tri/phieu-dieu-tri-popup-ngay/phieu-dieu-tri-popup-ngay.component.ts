import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ChiTietDieuTriNoiTruViewModel, LstYearOrderByModel, YearModel } from '../../../dieu-tri-noi-tru.model';
import icClose from '@iconify/icons-ic/twotone-close';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ChiTietDieuTriMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { PhieuDieuTriPopupTaoNgayComponent } from '../phieu-dieu-tri-popup-tao-ngay/phieu-dieu-tri-popup-tao-ngay.component';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icChevronLeft from '@iconify/icons-ic/twotone-chevron-left';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-phieu-dieu-tri-popup-ngay',
  templateUrl: './phieu-dieu-tri-popup-ngay.component.html',
  styleUrls: ['./phieu-dieu-tri-popup-ngay.component.scss']
})
export class PhieuDieuTriPopupNgayComponent implements OnInit {

  icClose = icClose;
  icChevronLeft = icChevronLeft;
  icChevronRight = icChevronRight;
  popupAddingData: any = null;
  popupDeletingData: any = null;
  ngayDieuTriHienTai: Date;
  phieuDieuTriHienTaiId: number;
  ngayDieuTriHienTaiHienThi: string = "Chưa có";
  lstYear: Array<YearModel> = new Array<YearModel>();
  lstYearOrderBy: LstYearOrderByModel[] = new Array<LstYearOrderByModel>();
  dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel = new ChiTietDieuTriNoiTruViewModel();
  isHasRemove: boolean = false;
  id: number;
  modelReturn: any;
  dataAll: any;
  coHienThiNutLuu: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private notificationService: NotificationService
    , private apiService: ApiService
    , private dialog: MatDialog, public dialogRef: MatDialogRef<PhieuDieuTriPopupNgayComponent>) {
    this.dieuTriNoiTruModel = data.dieuTriNoiTruModel;
    if (data.currentDate != undefined && data.currentDate != null) {
      this.ngayDieuTriHienTai = data.currentDate;
      this.phieuDieuTriHienTaiId = data.phieuDieuTriId;
      this.ngayDieuTriHienTaiHienThi = CommonService.formatDate(this.ngayDieuTriHienTai, "dd/mm/yyyy");
    }
    //console.log("PhieuDieuTriPopupNgayComponent = ", this.ngayDieuTriHienTai);

    this.id = data.id;

    this.lstYear = data.lstYear;

    this.lstYearOrderBy = data.lstYearOrderBy;

    this.setExpandsForList(this.lstYear, this.ngayDieuTriHienTaiHienThi);
  }

  ngOnInit() {
  }

  checkActiveDay(phieuDieuTriId: number, laNgayDieuTriTamThoi: boolean) {
    //let dayParam = new Date(year, month - 1, date);
    //if(date == 1 && month == 3 && year == 2010) console.log("checkActiveDay = ", this.ngayDieuTriHienTai.getDate() == date && this.ngayDieuTriHienTai.getMonth() == month && this.ngayDieuTriHienTai.getFullYear() == year);
    // if (laNgayDieuTriTamThoi) {
    //   return 'day-tag-temporary';
    // }
    // else {
    //   if (this.phieuDieuTriHienTaiId == phieuDieuTriId) {
    //     return 'day-tag-active';
    //   }
    //   else {
    //     return 'day-tag-non-active';
    //   }

    // }

    if (this.phieuDieuTriHienTaiId == phieuDieuTriId) {
      if (laNgayDieuTriTamThoi) {
        return 'day-tag-temporary';
      } else {
        return 'day-tag-active';
      }
    }
    else {
      return 'day-tag-non-active';
    }
  }

  dayAction(date: number, month: number, year: number, phieuDieuTriId: number) {
    this.ngayDieuTriHienTai = new Date(year, month - 1, date);
    this.phieuDieuTriHienTaiId = phieuDieuTriId;
    this.ngayDieuTriHienTaiHienThi = CommonService.formatDate(this.ngayDieuTriHienTai, "dd/mm/yyyy");
    //this.setExpandsForList(this.lstYear, this.ngayDieuTriHienTai);
  }

  dayDoubleClick(date: number, month: number, year: number, phieuDieuTriId: number, laNgayDieuTriTamThoi: boolean) {
    //ban co muon luu cac ngay dieu tri moi chon hay ko? // apply da co phieu dieu tri
    if (laNgayDieuTriTamThoi != true) {
      this.ngayDieuTriHienTai = new Date(year, month - 1, date);
      this.phieuDieuTriHienTaiId = phieuDieuTriId;
      this.ngayDieuTriHienTaiHienThi = CommonService.formatDate(this.ngayDieuTriHienTai, "dd/mm/yyyy");
      if (this.dataAll != undefined && this.dataAll != null) {
        if (this.dataAll.resultData.LstYearOrderBy.some((z: any) => z.LaNgayDieuTriTamThoi)) {
          this.dialog
            .open(ConfirmComponent, {
              disableClose: false,
              width: "400px",
              data: {
                Title: "Xác nhận",
                Message: ChiTietDieuTriMessage.MessageConfirmSave,
              },
            })
            .afterClosed().subscribe((result) => {
              /* result is a string:Yes,No,No answer*/
              if (result == "Yes") {
                this.apiService.post<any>("DieuTriNoiTru/CreateNewDate", this.modelReturn).subscribe(
                  (res) => {
                    this.notificationService.showSuccess(ChiTietDieuTriMessage.MessageAddDateSuccess);
                    this.lstYear = res.LstYear;
                    this.lstYearOrderBy = res.LstYearOrderBy;
                    this.dialogRef.close({
                      ngayDieuTriHienTai: this.ngayDieuTriHienTai,
                      PhieuDieuTriId: this.phieuDieuTriHienTaiId,
                      lstYear: this.lstYear,
                      lstYearOrderBy: this.lstYearOrderBy
                    });
                  })
              }
            });
        }
        else {
          this.close();
        }
      }
      else {
        this.close()
      }
    }
  }

  setExpandsForList(lstYear: Array<YearModel>, ngayDieuTriHienTaiHienThi: string) {
    let find = false;
    lstYear.forEach(y => {
      if (find) return false;
      y.Months.forEach(m => {
        if (find) return false;
        m.Days.forEach(d => {
          if (d.PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
            //console.log("find");
            if (find) return false;
            y.Expands = true;
            find = true;
          }
        });
      });
    });
  }

  decreaseDate() {
    //console.log("decreaseDate");
    let find = false;
    this.lstYear.forEach(y => {
      if (find) return false;
      y.Months.forEach(m => {
        if (find) return false;
        m.Days.forEach(d => {
          if (d.PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
            //console.log("find");
            if (find) return false;
            this.ngayDieuTriHienTai = d.FullDatePre;
            this.phieuDieuTriHienTaiId = d.PhieuDieuTriIdPre;
            this.ngayDieuTriHienTaiHienThi = CommonService.formatDate(d.FullDatePre, "dd/mm/yyyy");

            this.setExpandsForList(this.lstYear, this.ngayDieuTriHienTaiHienThi);
            find = true;
          }
        });
      });
    });
  }
  increaseDate() {
    //console.log("increaseDate");
    let find = false;
    this.lstYear.forEach(y => {
      if (find) return false;
      y.Months.forEach(m => {
        if (find) return false;
        m.Days.forEach(d => {
          if (d.PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
            //console.log("find");
            if (find) return false;
            this.ngayDieuTriHienTai = d.FullDateNext;
            this.phieuDieuTriHienTaiId = d.PhieuDieuTriIdNext;
            this.ngayDieuTriHienTaiHienThi = CommonService.formatDate(d.FullDateNext, "dd/mm/yyyy");

            this.setExpandsForList(this.lstYear, this.ngayDieuTriHienTaiHienThi);
            find = true;
          }
        });
      });
    });
  }

  deletingPage() {
    this.popupDeletingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang xóa ngày điều trị..." },
    });
  }

  closePopupDeletingData() {
    if (this.popupDeletingData != undefined && this.popupDeletingData != null) {
      this.popupDeletingData.close();
    }
  }

  removeDate() {
    this.isHasRemove = false;
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: {
        Title: 'Xác nhận', Message: CommonService.format(ChiTietDieuTriMessage.MessageRemoveDate,
          [this.ngayDieuTriHienTaiHienThi])
      }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        //this.increaseDate();
        var dateRemove = new Date(this.ngayDieuTriHienTai);
        let indexItemRemove = this.dataAll != undefined && this.dataAll != null ? this.dataAll.resultData.LstYearOrderBy.findIndex((z: any) => new Date(z.Date).getFullYear() == dateRemove.getFullYear()
          && new Date(z.Date).getMonth() == dateRemove.getMonth()
          && new Date(z.Date).getDate() == dateRemove.getDate() && z.LaNgayDieuTriTamThoi) : -1;
        if (indexItemRemove != -1) {
          let phieuDieuTris = this.dataAll.resultData.LstYearOrderBy.filter((z: any) =>
            new Date(z.Date).getFullYear() == dateRemove.getFullYear()
            && new Date(z.Date).getMonth() == dateRemove.getMonth()
            && new Date(z.Date).getDate() == dateRemove.getDate() && z.LaNgayDieuTriTamThoi);
          var dates: any[] = [];
          this.dataAll.resultData.LstYearOrderBy.splice(indexItemRemove, 1);
          this.dataAll.resultData.LstYearOrderBy.filter((z: any) =>
            !(new Date(z.Date).getFullYear() == dateRemove.getFullYear()
              && new Date(z.Date).getMonth() == dateRemove.getMonth()
              && new Date(z.Date).getDate() == dateRemove.getDate()) && z.LaNgayDieuTriTamThoi).forEach(item => {
                dates.push(item.Date);
              });
          let model = {
            Dates: dates,
            yeuCauTiepNhanId: this.id,
            phieuDieuTriId: phieuDieuTris[0].PhieuDieuTriId,
            KhoaId: phieuDieuTris[0].KhoaId
          };
          this.apiService.post<any>("DieuTriNoiTru/RemoveDateTemp", model).subscribe(
            rsData => {
              this.lstYear = rsData.LstYear;
              this.lstYearOrderBy = rsData.LstYearOrderBy;
              if (!this.lstYearOrderBy.some(z => z.LaNgayDieuTriTamThoi)) {
                this.coHienThiNutLuu = false;
              }
              this.setDateTimeForModel();

              this.setDateNextPrev(this.lstYear, this.lstYearOrderBy);

              if (this.lstYear != undefined && this.lstYear != null && this.lstYear.length != 0) {
                this.ngayDieuTriHienTai = new Date(this.lstYear[0].Months[0].Days[0].FullDate);
                this.phieuDieuTriHienTaiId = this.lstYear[0].Months[0].Days[0].PhieuDieuTriId;
                this.ngayDieuTriHienTaiHienThi = this.lstYear[0].Months[0].Days[0].FullDateDisplay;
              }

              this.setExpandsForList(this.lstYear, this.ngayDieuTriHienTaiHienThi);
              this.notificationService.showSuccess(ChiTietDieuTriMessage.MessageRemoveDateSuccess);
            })
        }
        else {
          let model = {
            Date: new Date(this.ngayDieuTriHienTai),
            yeuCauTiepNhanId: this.id,
            phieuDieuTriId: this.phieuDieuTriHienTaiId
          };
          this.deletingPage();
          this.apiService.post<any>("DieuTriNoiTru/RemoveDate", model).subscribe(
            resultData => {
              this.closePopupDeletingData();
              this.isHasRemove = true;
              this.lstYear = resultData.LstYear;
              this.lstYearOrderBy = resultData.LstYearOrderBy;
              if (!this.lstYearOrderBy.some(z => z.LaNgayDieuTriTamThoi)) {
                this.coHienThiNutLuu = false;
              }
              this.setDateTimeForModel();

              this.setDateNextPrev(this.lstYear, this.lstYearOrderBy);

              if (this.lstYear != undefined && this.lstYear != null && this.lstYear.length != 0) {
                this.ngayDieuTriHienTai = new Date(this.lstYear[0].Months[0].Days[0].FullDate);
                this.phieuDieuTriHienTaiId = this.lstYear[0].Months[0].Days[0].PhieuDieuTriId;
                this.ngayDieuTriHienTaiHienThi = this.lstYear[0].Months[0].Days[0].FullDateDisplay;
              }

              this.setExpandsForList(this.lstYear, this.ngayDieuTriHienTaiHienThi);

              this.notificationService.showSuccess(ChiTietDieuTriMessage.MessageRemoveDateSuccess);
              // window.location.reload();
            },
            (err: ApiError) => {
              if (err != undefined) {
                this.notificationService.showError(err.Message);
              }
              this.closePopupDeletingData();
            });
        }
      }
    });
  }
  addDate() {
    let dialogRef = this.dialog.open(PhieuDieuTriPopupTaoNgayComponent, {
      disableClose: false,
      width: '450px',
      height: '475px',
      data: { 
        lstYearOrderBy: this.lstYearOrderBy, 
        id: this.id, 
        phieuDieuTriHienTaiId: this.phieuDieuTriHienTaiId, 
        dates: this.lstYear, 
        dieuTriNoiTruModel: this.dieuTriNoiTruModel,
        ngayNhapVien: this.data.ngayNhapVien
       },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dataAll = result;
      if (result != null && result != undefined && result.model != null && result.model != undefined) {
        this.modelReturn = result.model;
        let dates: any[] = [];
        this.dataAll.resultData.LstYearOrderBy.filter((z: any) => z.LaNgayDieuTriTamThoi).forEach(item => {
          dates.push(item.Date);
        });
        this.modelReturn.Dates = dates;
      }
      if (result != null && result != undefined && result.resultData != null && result.resultData != undefined && result.resultData.LstYearOrderBy.length > 0) {
        this.lstYear = result.resultData.LstYear;
        this.lstYearOrderBy = result.resultData.LstYearOrderBy;

        this.coHienThiNutLuu = true;
        this.setDateTimeForModel();

        this.setDateNextPrev(this.lstYear, this.lstYearOrderBy);

        this.ngayDieuTriHienTai = new Date(this.lstYear[0].Months[0].Days[0].FullDate);
        this.phieuDieuTriHienTaiId = this.lstYear[0].Months[0].Days[0].PhieuDieuTriId;
        this.ngayDieuTriHienTaiHienThi = this.lstYear[0].Months[0].Days[0].FullDateDisplay;

        this.setExpandsForList(this.lstYear, this.ngayDieuTriHienTaiHienThi);
        if (result.message === "OK") {
          this.notificationService.showSuccess(ChiTietDieuTriMessage.MessageAddDateSuccess);
        }
      }
    });
  }

  setDateTimeForModel() {
    this.lstYear.forEach(o => {
      o.Months.forEach(m => {
        m.Days.forEach(d => {
          if (d.FullDate != undefined && d.FullDate != null) {
            d.FullDate = new Date(d.FullDate);
          }
          if (d.FullDateNext != undefined && d.FullDateNext != null) {
            d.FullDateNext = new Date(d.FullDateNext);
          }
          if (d.FullDatePre != undefined && d.FullDatePre != null) {
            d.FullDatePre = new Date(d.FullDatePre);
          }
        })
      })
    });

    if (this.lstYearOrderBy != undefined && this.lstYearOrderBy.length > 0) {
      for (let i = 0; i < this.lstYearOrderBy.length; i++) {
        this.lstYearOrderBy[i].Date = new Date(this.lstYearOrderBy[i].Date);
      }
    }

  }

  // removeDateItem(){

  // }

  close() {
    if (this.dataAll != undefined && this.dataAll != null && this.dataAll.resultData.LstYearOrderBy.some((z: any) => z.LaNgayDieuTriTamThoi)) {
      this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: ChiTietDieuTriMessage.MessageConfirmCancel,
          },
        })
        .afterClosed().subscribe((result) => {
          /* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            this.dialogRef.close('NoResult');
          }
        });
    }
    else {
      this.dialogRef.close({
        ngayDieuTriHienTai: this.ngayDieuTriHienTai
        , PhieuDieuTriId: this.phieuDieuTriHienTaiId
        , lstYear: this.lstYear, lstYearOrderBy: this.lstYearOrderBy, isHasRemove: this.isHasRemove
      });
    }
  }

  setDateNextPrev(lstYear: YearModel[], lstYearOrderBy: LstYearOrderByModel[]) {
    lstYear.forEach(o => {
      o.Months.forEach(m => {
        m.Days.forEach(d => {
          //let dateIndex = lstYearOrderBy.findIndex(p => p.getTime() === d.FullDate.getTime());
          let dateIndex = lstYearOrderBy.findIndex(p => p.PhieuDieuTriId == d.PhieuDieuTriId);
          if (lstYearOrderBy.length == 1) {
            d.FullDateNext = d.FullDate;
            d.FullDatePre = d.FullDate;
            d.PhieuDieuTriIdNext = d.PhieuDieuTriId;
            d.PhieuDieuTriIdPre = d.PhieuDieuTriId;
          }
          else if (dateIndex == 0) {
            d.FullDatePre = lstYearOrderBy[lstYearOrderBy.length - 1].Date;
            d.FullDateNext = lstYearOrderBy[dateIndex + 1].Date;
            d.PhieuDieuTriIdPre = lstYearOrderBy[lstYearOrderBy.length - 1].PhieuDieuTriId;
            d.PhieuDieuTriIdNext = lstYearOrderBy[dateIndex + 1].PhieuDieuTriId;
          }
          else if (dateIndex == lstYearOrderBy.length - 1) {
            d.FullDatePre = lstYearOrderBy[dateIndex - 1].Date;
            d.FullDateNext = lstYearOrderBy[0].Date;
            d.PhieuDieuTriIdPre = lstYearOrderBy[dateIndex - 1].PhieuDieuTriId;
            d.PhieuDieuTriIdNext = lstYearOrderBy[0].PhieuDieuTriId;
          }
          else {
            d.FullDatePre = lstYearOrderBy[dateIndex - 1].Date;
            d.FullDateNext = lstYearOrderBy[dateIndex + 1].Date;
            d.PhieuDieuTriIdPre = lstYearOrderBy[dateIndex - 1].PhieuDieuTriId;
            d.PhieuDieuTriIdNext = lstYearOrderBy[dateIndex + 1].PhieuDieuTriId;
          }


          d.FullDateNextDisplay = CommonService.formatDate(d.FullDateNext, "dd/mm/yyyy");
          d.FullDatePreDisplay = CommonService.formatDate(d.FullDatePre, "dd/mm/yyyy");

        });
      });
    });
  }

  addingPage() {
    this.popupAddingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tạo ngày điều trị..." },
    });
  }

  closePopupAddingData() {
    if (this.popupAddingData != undefined && this.popupAddingData != null) {
      this.popupAddingData.close();
    }
  }

  luuNgayDieuTri() {
    if (this.lstYear.length == 0 || this.lstYearOrderBy.length == 0) {
      this.notificationService.showError('Vui lòng tạo ngày điều trị.');
    } else {
      if (this.modelReturn != undefined && this.modelReturn.Dates.length > 0) {
        this.addingPage();
        this.apiService.post<any>("DieuTriNoiTru/CreateNewDate", this.modelReturn).subscribe(
          resultData => {
            this.closePopupAddingData();
            if (this.dataAll != undefined && this.dataAll != null) {
              this.dataAll.resultData.LstYearOrderBy = resultData.LstYearOrderBy;
            }
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]);
            this.notificationService.showSuccess(mess);
            this.lstYear = resultData.LstYear;
            this.lstYearOrderBy = resultData.LstYearOrderBy;
            if (!this.lstYearOrderBy.some(z => z.LaNgayDieuTriTamThoi)) {
              this.coHienThiNutLuu = false;
            }
            this.setDateTimeForModel();

            this.setDateNextPrev(this.lstYear, this.lstYearOrderBy);

            if (this.lstYear != undefined && this.lstYear != null && this.lstYear.length != 0) {
              this.ngayDieuTriHienTai = new Date(this.lstYear[0].Months[0].Days[0].FullDate);
              this.phieuDieuTriHienTaiId = this.lstYear[0].Months[0].Days[0].PhieuDieuTriId;
              this.ngayDieuTriHienTaiHienThi = this.lstYear[0].Months[0].Days[0].FullDateDisplay;
            }

            this.setExpandsForList(this.lstYear, this.ngayDieuTriHienTaiHienThi);
            this.modelReturn = undefined;
          },
          (err: ApiError) => {
            if (err != undefined) {
              this.notificationService.showError(err.Message);
            }
            this.closePopupAddingData();
          });
      } else {
        this.close();
      }
    }

  }
}
