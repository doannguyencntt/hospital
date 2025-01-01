import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { addDays } from '@progress/kendo-date-math';
import { TongHopYLenhPhieuDieuTri, TongHopYLenhThem, TongHopYLenhThongTinBenhAn } from '../tong-hop-y-lenh.model';
import icChevronLeft from '@iconify/icons-ic/twotone-chevron-left';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icCancel from "@iconify/icons-ic/cancel";
import icDelete from '@iconify/icons-ic/twotone-delete';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Location } from '@angular/common';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { TongHopYLenhInPhieuPopupComponent } from '../tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../dieu-tri-noi-tru.model';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-tong-hop-y-lenh-detail',
  templateUrl: './tong-hop-y-lenh-detail.component.html',
  styleUrls: ['./tong-hop-y-lenh-detail.component.scss']
})
export class TongHopYLenhDetailComponent implements OnInit {

  icChevronLeft = icChevronLeft;
  icChevronRight = icChevronRight;
  icCancel = icCancel;
  icDelete = icDelete;

  tongHopYLenhPhieuDieuTri: TongHopYLenhPhieuDieuTri = new TongHopYLenhPhieuDieuTri();
  thongTinHanhChinh: TongHopYLenhThongTinBenhAn = new TongHopYLenhThongTinBenhAn();
  tongHopYLenhThem: TongHopYLenhThem = new TongHopYLenhThem();
  isDuoi6Tuoi: boolean = false;
  Duoi6TuoiDisplay: string = "";

  id: number;
  strNgayDieuTri: string;
  yeuCauTiepNhanId: number;
  documentype: DocumentType;
  validationErrors: any;
  popupLoadingData: any;

  gridColumns: any[] = [];
  gridDataSource: any = {
    data: [],
    total: 0
  };

  IsDisableEdit: boolean = false;
  IsChangeData: boolean = false;
  IsShowButtonIn: boolean = true;

  @ViewChild('gioYLenhTemplate', { static: true }) gioYLenhTemplate: TemplateRef<any>;
  @ViewChild('dienBienTemplate', { static: true }) dienBienTemplate: TemplateRef<any>;
  @ViewChild('yLenhTemplate', { static: true }) yLenhTemplate: TemplateRef<any>;
  @ViewChild('yTaThucHienTemplate', { static: true }) yTaThucHienTemplate: TemplateRef<any>;
  @ViewChild('gioThucHienTemplate', { static: true }) gioThucHienTemplate: TemplateRef<any>;
  @ViewChild('ngayCapNhatTemplate', { static: true }) ngayCapNhatTemplate: TemplateRef<any>;
  @ViewChild('nguoiCapNhatTemplate', { static: true }) nguoiCapNhatTemplate: TemplateRef<any>;
  @ViewChild('nguoiRaYLenhTemplate', { static: true }) nguoiRaYLenhTemplate: TemplateRef<any>;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

  @Input() IsDieuTriNoiTru: boolean = false;
  constructor(
    public intl: IntlService,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.documentype = DocumentType.TongHopYLenh;
    if(this.IsDieuTriNoiTru)
    {
      this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id;
      this.yeuCauTiepNhanId = (this.yeuCauTiepNhanId === undefined || this.yeuCauTiepNhanId === null) ? 0 : this.yeuCauTiepNhanId;
      this.id = this.yeuCauTiepNhanId;
      this.strNgayDieuTri = CommonService.formatDateTime(new Date(), "mm/dd/yyyy");
      //this.getById(this.id);
      this.ganVaKiemTraPhieuDieuTriTheoNgay(new Date());
    }
    else
    {
      // this.id = this.route.snapshot.params.id;
      // this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
      let fullNgayDieuTri = new Date();
      this.route.queryParams.subscribe(param => {
        this.id = param['NoiTruBenhAnId'];
        var strFullNgayDieuTri = param['strNgayDieuTri'].split('.').join('/');
        fullNgayDieuTri = new Date(strFullNgayDieuTri);
        this.strNgayDieuTri = CommonService.formatDateTime(fullNgayDieuTri, "mm/dd/yyyy"); //param['strNgayDieuTri'].split('.').join('/');
      });
      //this.getById(this.id);
      this.ganVaKiemTraPhieuDieuTriTheoNgay(fullNgayDieuTri);
    }
    

    this.gridColumns = [
      { Field: "GioYLenh", Title: "Giờ y lệnh", Width: 80, Template: this.gioYLenhTemplate},
      { Field: "DienBien", Title: "Theo dõi diễn biến", Width: 180, Template: this.dienBienTemplate},
      { Field: "YLenh", Title: "Thực hiện y lệnh/chăm sóc", Width: 220, Template: this.yLenhTemplate },
      { Field: "NhanVienChiDinhId", Title: "Người ra y lệnh", Width: 120, Template: this.nguoiRaYLenhTemplate},
      { Field: "NhanVienXacNhanThucHienId", Title: "Người thực hiện", Width: 120, Template: this.yTaThucHienTemplate},
      { Field: "GioThucHien", Title: "Giờ thực hiện", Width: 80, Template: this.gioThucHienTemplate},
      { Field: "NhanVienCapNhatId", Title: "Người cập nhật", Width: 120, Template: this.nguoiCapNhatTemplate},
      { Field: "ThoiDiemCapNhat", Title: "Ngày cập nhật", Width: 100, Template: this.ngayCapNhatTemplate}
    ]
  }

  // kiemTraPhieuDieuTriNgayHienTaiTheoYeuCauTiepNhan(yeuCauTiepNhanId: number) {
  //   if (this.authService.hasPermission(this.documentype, SecurityOperation.View) || this.authService.hasPermission(DocumentType.DanhSachDieuTriNoiTru, SecurityOperation.View)) {
  //     this.showPopupLoadingData();
  //     this.apiService.get<any>("DieuTriNoiTru/KiemTraPhieuDieuTriNgayHienTaiTheoYeuCauTiepNhan?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
  //       .subscribe(res => {
  //         this.id = res;
  //         this.getById(res, false);
  //       }, err => {
  //         this.IsShowButtonIn = false;
  //         this.IsDisableEdit = true;
  //         this.ganGiaTriNgayYLenh();
  //         if (err.Message != "Validation Failed") {
  //           this.notificationService.showError(err.Message);
  //         }
  //         this.closePopupLoadingData();
  //       });
  //   } else {
  //     this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
  //   }
  // }

  getById(id: number, showLoadingPopup: boolean = true, inphieu: boolean = null) {
    if (showLoadingPopup) {
      this.showPopupLoadingData();
    }

    let obj = {
      NoiTruBenhAnId: id,
      NgayDieuTriStr: this.strNgayDieuTri
    }
    forkJoin(
      // this.apiService.get<TongHopYLenhThongTinBenhAn>("DieuTriNoiTru/GetTongHopYLenhThongTinHanhChinh?phieuDieuTriId=" + id),
      // this.apiService.get<TongHopYLenhPhieuDieuTri>("DieuTriNoiTru/GetThongTinChiTietYLenhPhieuDieuTri?phieuDieuTriId=" + id)
      this.apiService.post<TongHopYLenhThongTinBenhAn>("DieuTriNoiTru/GetTongHopYLenhThongTinHanhChinh", obj),
      this.apiService.post<TongHopYLenhPhieuDieuTri>("DieuTriNoiTru/GetThongTinChiTietYLenhPhieuDieuTri", obj)
    ).subscribe((res) => {
      this.IsDisableEdit = false;
      this.IsChangeData = false;
      this.thongTinHanhChinh = res[0];
      if (
        this.thongTinHanhChinh.NamSinh != null &&
        this.thongTinHanhChinh.ThangSinh != null &&
        this.thongTinHanhChinh.NgaySinh != null
      ) {
        var ngaySinh = new Date(
          this.thongTinHanhChinh.ThangSinh +
          "/" +
          this.thongTinHanhChinh.NgaySinh +
          "/" +
          this.thongTinHanhChinh.NamSinh +
          "/"
        );
        this.getAge(ngaySinh, new Date());
      }

      if(res[1].NgayYLenh != undefined)
      {
        res[1].NgayYLenh = new Date(res[1].NgayYLenh);
      }
      this.tongHopYLenhPhieuDieuTri = res[1];
      this.IsDisableEdit = this.tongHopYLenhPhieuDieuTri.IsDisableEdit;
      this.tongHopYLenhThem.NgayYLenh = CommonService.formatDateTime(this.tongHopYLenhPhieuDieuTri.NgayYLenh, "mm/dd/yyyy");
      this.gridDataSource.data = this.tongHopYLenhPhieuDieuTri.TongHopYLenhDienBiens;
      this.gridDataSource.data.sort((n1,n2) => n1.GioYLenh - n2.GioYLenh);
      // if(this.tongHopYLenhPhieuDieuTri.TongHopYLenhDienBiens.length > 0)
      // {
      //   this.IsShowButtonIn = true;
      // }
      // else
      // {
      //   this.IsShowButtonIn = false;
      // }
      this.IsShowButtonIn = this.tongHopYLenhPhieuDieuTri.CoYLenhThemMoi;
      this.ganGiaTriNgayYLenh();
      if(inphieu != null)
      {
        this.InPhieu(inphieu, false);
      }
      else
      {
        this.closePopupLoadingData();
      }
    },
      (err: ApiError) => {
        this.IsShowButtonIn = false;
        this.IsDisableEdit = true;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  xuLyXoaYLenh(itemDienBien, itemYLenh) {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Delete) || this.authService.hasPermission(DocumentType.DanhSachDieuTriNoiTru, SecurityOperation.Delete)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, [
            "xóa",
          ]),
        },
      }).afterClosed().subscribe((result) => {
        if (result == "Yes") {
          let indexDienBien = this.gridDataSource.data.findIndex(x => x == itemDienBien);
          if (indexDienBien != -1) {
            if (itemDienBien.TongHopYLenhDienBienChiTiets.length == 1) {
              this.gridDataSource.data.splice(indexDienBien, 1);
            }
            else {
              // this.gridDataSource.data = this.gridDataSource.data.filter(x => x.TongHopYLenhDienBienChiTiets.findIndex(y => y == itemYLenh) == -1);
              // let dienBien = this.gridDataSource.data.find(x => x.TongHopYLenhDienBienChiTiets.findIndex(y => y == itemYLenh) != -1);
              // dienBien.TongHopYLenhDienBienChiTiets = dienBien.TongHopYLenhDienBienChiTiets.filter(x => x != itemYLenh);

              itemDienBien.TongHopYLenhDienBienChiTiets = itemDienBien.TongHopYLenhDienBienChiTiets.filter(x => x != itemYLenh);
            }
            this.IsChangeData = true;
            //this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
          }
        }
      });

    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyThemYLenh() {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Add) || this.authService.hasPermission(DocumentType.DanhSachDieuTriNoiTru, SecurityOperation.Add)) {
      this.validationErrors = [];
      //this.tongHopYLenhThem.NoiTruPhieuDieuTriId = this.tongHopYLenhPhieuDieuTri.NoiTruPhieuDieuTriId;
      this.tongHopYLenhThem.NoiTruBenhAnId = this.tongHopYLenhPhieuDieuTri.NoiTruBenhAnId;
      this.apiService.post<any>("DieuTriNoiTru/KiemTraThemYLenh", this.tongHopYLenhThem).subscribe(res => {
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
        
        // xử lý thêm vào grid
        // kiểm tra tồn tại diễn biến
        var itemDienBien = this.gridDataSource.data.find(x => x.GioYLenh == res.GioYLenh);
        if(itemDienBien == undefined || itemDienBien == null)
        {
          this.gridDataSource.data.push(res);
        }
        else
        {
          if(res.DienBien != null && res.DienBien != "")
          {
            itemDienBien.DienBien = (itemDienBien.DienBien == null ? "" : itemDienBien.DienBien + " ") + res.DienBien;
          }
          itemDienBien.TongHopYLenhDienBienChiTiets.push(res.TongHopYLenhDienBienChiTiets[0]);
        }
        this.gridDataSource.data.sort((n1,n2) => n1.GioYLenh - n2.GioYLenh);

        this.IsChangeData = true;
        this.closePopupLoadingData();
        this.huyThemYLenh();
      }, (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyLuuYLenh(backToGrid: boolean = true, date: Date = new Date(), inPhieu: boolean = null) {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Update) || this.authService.hasPermission(DocumentType.DanhSachDieuTriNoiTru, SecurityOperation.Update)) {
      this.validationErrors = [];
          this.apiService.put<any>("DieuTriNoiTru/KiemTraLuuDienBienYLenh", this.tongHopYLenhPhieuDieuTri).subscribe(res => {
            this.apiService.put<any>("DieuTriNoiTru/XuLyLuuDienBienYLenh", this.tongHopYLenhPhieuDieuTri).subscribe(result => {
              if(inPhieu == null)
              {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              }
              this.closePopupLoadingData();
              if (!this.IsDieuTriNoiTru) {
                if (backToGrid) {
                  this.quayLai();
                }
                else {
                  this.ganVaKiemTraPhieuDieuTriTheoNgay(date, inPhieu);
                }
              }
              else {
                this.ganVaKiemTraPhieuDieuTriTheoNgay(this.tongHopYLenhPhieuDieuTri.NgayYLenh, inPhieu);
              }
            }, err => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            })
          }, err => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          });
        
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupXacNhanLuu(backToGrid: boolean = true, date: Date = new Date(), inPhieu: boolean = null) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "400px",
      data: {
        Title: "Xác nhận",
        Message: CommonService.format(SystemMessage.MessConfirm, ["lưu"])
      },
    }).afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.xuLyLuuYLenh(backToGrid, date, inPhieu);
      }
    });
  }

  huyThemYLenh(){
    this.validationErrors = [];
    this.tongHopYLenhThem = new TongHopYLenhThem();
    this.tongHopYLenhThem.NgayYLenh = CommonService.formatDateTime(this.tongHopYLenhPhieuDieuTri.NgayYLenh, "mm/dd/yyyy");;
  }

  kiemTraPhieuDieuTriTheoNgay(id: number, ngay: Date, inphieu: boolean = null) {
    this.showPopupLoadingData();
    var obj = {
      "NoiTruBenhAnId": id,
      "NgayDieuTri": CommonService.formatDateTime(ngay, "mm/dd/yyyy"),
      "YeuCauTiepNhanId": this.yeuCauTiepNhanId
    }
    this.apiService.post<number>("DieuTriNoiTru/KiemTraPhieuDieuTriNoiTruByNgayDieuTri", obj)
      .subscribe((resultData) => {
        // this.id = resultData;
        this.getById(id, false, inphieu);
      },
        (err: ApiError) => {
          this.IsDisableEdit = true;
          this.IsShowButtonIn = false;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.gridDataSource.data.splice(0, this.gridDataSource.data.length);
          this.closePopupLoadingData();
        });
  }

  getAge(date_1, date_2) {
    let yAppendix, mAppendix, dAppendix;

    // let days = date_2.getDate() - date_1.getDate() + 1;
    let days = date_2.getDate() - date_1.getDate();//Thach edit

    if (days < 0) {
      date_2.setMonth(date_2.getMonth() - 1);
      days += this.DaysInMonth(date_2);
    }

    let months = date_2.getMonth() - date_1.getMonth();
    if (months < 0) {
      date_2.setFullYear(date_2.getFullYear() - 1);
      months += 12;
    }
    let years = date_2.getFullYear() - date_1.getFullYear();

    if (years > 1) yAppendix = " years";
    else yAppendix = " year";
    if (months > 1) mAppendix = " months";
    else mAppendix = " month";
    if (days > 1) dAppendix = " days";
    else dAppendix = " day";

    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
      this.isDuoi6Tuoi = true;
    } else {
      this.isDuoi6Tuoi = false;
    }

    this.Duoi6TuoiDisplay =
      years + " Tuổi " + months + " Tháng " + days + " Ngày ";
  }

  DaysInMonth(date2_UTC) {
    let monthStart: any = new Date(
      date2_UTC.getFullYear(),
      date2_UTC.getMonth(),
      1
    );
    let monthEnd: any = new Date(
      date2_UTC.getFullYear(),
      date2_UTC.getMonth() + 1,
      1
    );
    let monthLength: any = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
  }

  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == undefined
      || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: "200px",
        height: "90px",
        data: { Title: "Đang tải dữ liệu..." },
      });
    }

  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  chonYTaThucHien(event)
  {
    if(event)
    {
      this.tongHopYLenhThem.NhanVienXacNhanThucHienDisplay = event.DisplayName;
    }
    else
    {
      this.tongHopYLenhThem.NhanVienXacNhanThucHienDisplay = null;
    }
  }

  clearValidateErrorOtherCallback(event: any) {
    CommonService.clearValidateErrorOtherCallback(this, event);
  }

  changeData(){
    this.IsChangeData = true;
  }

  changeXacNhanThucHien(event, item) {
    if (event && (item.NhanVienXacNhanThucHienId == null || item.GioThucHien == null)) {
      this.showPopupLoadingData();
      this.apiService.get<any>("DieuTriNoiTru/GetThongTinYLenhNhanVienDangLogin").subscribe(res => {
        if (item.NhanVienXacNhanThucHienId == null) {
          item.NhanVienXacNhanThucHienId = res.NhanVienXacNhanThucHienId;
        }
        if (item.GioThucHien == null) {
          item.GioThucHien = res.GioThucHien;
        }
        this.closePopupLoadingData();
      }, err => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
    }
    else
    {
      item.NhanVienXacNhanThucHienId = null;
      item.GioThucHien = null;
    }
    this.changeData();
  }

  // xử lý date
  ganGiaTriNgayYLenh()
  {
    this.tongHopYLenhPhieuDieuTri.NgayYLenh = this.tongHopYLenhPhieuDieuTri.NgayYLenh == null ? new Date() : this.tongHopYLenhPhieuDieuTri.NgayYLenh;
    this.tongHopYLenhPhieuDieuTri.NgayYLenhDisplay=this.formatDateLink(this.tongHopYLenhPhieuDieuTri.NgayYLenh);
    this.strNgayDieuTri = CommonService.formatDateTime(this.tongHopYLenhPhieuDieuTri.NgayYLenh, "mm/dd/yyyy");
  }

  changeDateLink(event:any){
    // this.tongHopYLenhPhieuDieuTri.NgayYLenh=event;
    // this.ganGiaTriNgayYLenh();
    // this.kiemTraPhieuDieuTriTheoNgay(this.id, event);
    this.changeDateDieuTriNoiTru(event);
  }

  prevDateLink(){
    // this.tongHopYLenhPhieuDieuTri.NgayYLenh=addDays(this.tongHopYLenhPhieuDieuTri.NgayYLenh,-1);
    // this.ganGiaTriNgayYLenh();
    // this.kiemTraPhieuDieuTriTheoNgay(this.id, this.tongHopYLenhPhieuDieuTri.NgayYLenh);
    let dateChange = addDays(this.tongHopYLenhPhieuDieuTri.NgayYLenh,-1);
    this.changeDateDieuTriNoiTru(dateChange);
  }

  nextDateLink(){
    // this.tongHopYLenhPhieuDieuTri.NgayYLenh=addDays(this.tongHopYLenhPhieuDieuTri.NgayYLenh,1);
    // this.ganGiaTriNgayYLenh();
    // this.kiemTraPhieuDieuTriTheoNgay(this.id, this.tongHopYLenhPhieuDieuTri.NgayYLenh);
    let dateChange = addDays(this.tongHopYLenhPhieuDieuTri.NgayYLenh,1);
    this.changeDateDieuTriNoiTru(dateChange);
  }

  changeDateDieuTriNoiTru(date: Date) {
    if(this.IsChangeData)
    {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: "Dữ liệu có thay đổi, bạn có lưu không?",
        },
      }).afterClosed().subscribe((result) => {
        if (result == "Yes") {
          this.showPopupXacNhanLuu(false, date);
        }
        else
        {
          this.ganVaKiemTraPhieuDieuTriTheoNgay(date);
        }
      });
    }
    else
    {
      this.ganVaKiemTraPhieuDieuTriTheoNgay(date);
    }
  }

  ganVaKiemTraPhieuDieuTriTheoNgay(date: Date, inphieu: boolean = null){
    this.IsChangeData = false;
    this.tongHopYLenhPhieuDieuTri.NgayYLenh = date;
    this.ganGiaTriNgayYLenh();
    this.kiemTraPhieuDieuTriTheoNgay(this.id, date, inphieu);
  }

  formatDateLink(date: Date) {
    return "<strong>" + this.intl.formatDate(date, "dd/MM/yyyy") + "</strong>";
  }

  quayLai(){
    this.location.back();
  }

  xuLyKiemTraInPhieu(loaiIn: boolean = false){
    if(this.IsDisableEdit)
    {
      this.InPhieu(loaiIn);
    }
    else
    {
      this.xuLyLuuYLenh(false, this.tongHopYLenhPhieuDieuTri.NgayYLenh, loaiIn);
    }
  }

  InPhieu(inTatCa: boolean = false, showPopupLoadingData: boolean = true) {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.View) || this.authService.hasPermission(DocumentType.DanhSachDieuTriNoiTru, SecurityOperation.View)) {
      if(showPopupLoadingData)
      {
        this.showPopupLoadingData();
      }
      var obj = {
        "BenhNhanId": this.thongTinHanhChinh.BenhNhanId,
        //"PhieuDieuTriId": this.tongHopYLenhPhieuDieuTri.NoiTruPhieuDieuTriId,
        "NoiTruBenhAnId": this.tongHopYLenhPhieuDieuTri.NoiTruBenhAnId,
        "NgayDieuTriStr": inTatCa ? null : this.strNgayDieuTri,
        "YeuCauTiepNhanId": this.yeuCauTiepNhanId,
        "InTatCa": inTatCa
      }
      this.apiService.post<string>("DieuTriNoiTru/InPhieuChamSoc", obj).subscribe(resultData => {
        this.closePopupLoadingData();
        if (resultData != undefined && resultData != null) {
          this.dialog.open(TongHopYLenhInPhieuPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: resultData,
          }).afterClosed().subscribe(result => {
            if(!this.IsDieuTriNoiTru)
            {
              this.quayLai();
            }
          });
        }
      },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  changeGioYLenh(event){
    if(event)
    {
      this.tongHopYLenhThem.GioThucHien = event;
    }
  }
}
