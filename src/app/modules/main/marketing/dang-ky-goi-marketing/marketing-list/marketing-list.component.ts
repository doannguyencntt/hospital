import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DangKyGoiMarketingMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DanhSachMarketingSearch } from '../../marketing.model';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ThongTinPhieuPdfPopupComponent } from '../../../thu-chi/thu-chi-vien-phi/common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import icPrint from '@iconify/icons-ic/twotone-print';
import { CommonPdfPopupComponent } from '../../../thu-chi/thu-chi-vien-phi/common/common-pdf-popup/common-pdf-popup.component';
import { visitAll } from '@angular/compiler';

@Component({
  selector: 'app-marketing-list',
  templateUrl: './marketing-list.component.html',
  styleUrls: ['./marketing-list.component.scss']
})

export class MarketingListComponent implements OnInit {

  baseRoute: string = "/marketing/dang-ky-goi-marketing";

  icPrint = icPrint;
  icDelete = icDelete;
  icEdit = icEdit;
  icMoreHoriz = icMoreHoriz;

  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icAdd = icAdd;
  icFilterList = icFilterList;
  searchCtrl = new FormControl;

  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  public loadingPopup: any;

  marketing: DanhSachMarketingSearch = new DanhSachMarketingSearch();
  holdQuery: any = null;
  additionalSearchString: string = null;

  sort: SortDescriptor[] =
    [{
      field: "NgayTao",
      dir: "desc"
    },
    {
      field: "Id",
      dir: "asc"
    }]

  urlGetDataGridChild: string = "DanhMucMarketing/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "DanhMucMarketing/GetTotalPageForGridChildAsync";

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate2', { static: true }) actionTemplate2: TemplateRef<any>;
  @ViewChild('maBNTemplate', { static: true }) maBNTemplate: TemplateRef<any>;
  @ViewChild('grid', { static: true }) grid: GridComponent;

  @ViewChild('detailGrid', { static: false }) detailGrid: GridComponent;

  constructor(private apiService: ApiService, private authService: AuthService, private dialog: MatDialog,
    private location: Location, private route: ActivatedRoute,
    private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachMarketing;

    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }

    if (
      this.holdQuery != null &&
      LocalStorageHelper.getItem('additionalSearchStringDSMarketing') != null
    ) {
      this.additionalSearchString = LocalStorageHelper.getItem(
        'additionalSearchStringDSMarketing'
      );
      this.backWithSearch();
    } else {
      LocalStorageHelper.setItem('additionalSearchStringDSMarketing', null);
      this.additionalSearchString = JSON.stringify(this.marketing);
    }


    this.gridColumns = [
      ////MaBenhNhan, TenBenhNhan, NamSinh, GioiTinh, DienThoai, ChungMinhThu, DiaChi
      // { Field: "STT", Title: "#", Width: 30, Sortable: false },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 100, Sortable: true, Template: this.maBNTemplate },
      { Field: "TenBenhNhan", Title: "Người bệnh", Width: 250, Sortable: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "GioiTinh", Title: "Giới tính", Width: 80, Sortable: true },
      { Field: "DienThoaiDisplay", Title: "Điện thoại", Width: 100, Sortable: true },
      { Field: "ChungMinhThu", Title: "CMND", Width: 100, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 200, Sortable: true },
      // { Field: "NgayTaoDisplay", Title: "Ngày tạo", Width: 200, Sortable: true },
      { Field: "Action", Title: "", Width: 50, Sortable: false, HideFilter: false, Template: this.actionTemplate }

    ];

    this.gridChildColumns = [
      //ChuongTrinhGoiMarketing, TongTienTT, TrangThaiTT, TrangThaiSuDung, TrangThaiNhanQua
      //{ Field: "STT", Title: "#", Width: 30, Sortable: false },
      { Field: "ChuongTrinhGoiMarketing", Title: "Chương Trình Gói Marketing", MinWidth: 200, Sortable: false },
      { Field: "TongTienTTDisplay", Title: "Tổng Tiền TT", Width: 150, Sortable: false },
      { Field: "TrangThaiTT", Title: "T.Trạng Thanh Toán", Width: 150, Sortable: false },
      { Field: "TrangThaiSuDung", Title: "T.Trạng Sử Dụng", Width: 150, Sortable: false },
      { Field: "TrangThaiNhanQua", Title: "T.Trạng Nhận Quà", Width: 150, Sortable: false },
      { Field: "NgayDangKyDisplay", Title: "Ngày đăng ký", Width: 150, Sortable: true },
      { Field: "Action", Title: "", Width: 50, Sortable: false, HideFilter: false, Template: this.actionTemplate2 }

    ];

  }

  backWithSearch() {
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDSMarketing");
        if (additionalSearchString != null) {
          let marketingClone = JSON.parse(additionalSearchString);
          if (this.marketing.TuNgay != null && this.marketing.TuNgay != undefined) {
            let startDate = new Date(this.marketing.TuNgay);
            this.marketing.TuNgay = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
              , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
          }
          if (this.marketing.DenNgay != null && this.marketing.DenNgay != undefined) {
            let endDate = new Date(this.marketing.DenNgay);
            this.marketing.DenNgay = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
              , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
          }
          //this.addtionStringDefault = additionalSearchString;
          this.marketing = JSON.parse(additionalSearchString);
          this.grid.additionalSearchString = JSON.stringify(marketingClone);
          this.grid.searchString = this.marketing.SearchString;
        }
      }
    }
  }

  xemChiTiet(id: number, dataItem: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate(["/marketing/dang-ky-goi-marketing" + "/chinh-sua/" + id]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  daNhanTien(id) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);
      var self = this;

      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: DangKyGoiMarketingMessage.MessageDaNhanTien }
      }).afterClosed().subscribe(result => {
        //this.dialogRef = null;
        if (result == "Yes") {

          self.apiService.post<any>("DanhMucMarketing/ChangeTrangThaiDangChoNhanTienOfBenhNhan?benhNhanId=" + id).subscribe(
            resultData => {
              self.notificationService.showSuccess(DangKyGoiMarketingMessage.MessageDaNhanTienThanhCong);
              self.grid.search();
            },
            (err: any) => {
              //this.validationErrors = err.ValidationErrors;
              if (err != undefined && err.ValidationErrors != null) {
                //self.validationErrors = err.ValidationErrors;
              }
              else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                self.notificationService.showError(err.Message);
              }
              //console.log("error = ", err)
            });
        }
        else { }
      });

    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  delete(id) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);
      var self = this;

      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: DangKyGoiMarketingMessage.MessageXoa }
      }).afterClosed().subscribe(result => {
        //this.dialogRef = null;
        if (result == "Yes") {

          self.apiService.post<any>("DanhMucMarketing/RemoveMarketingOfBenhNhan?benhNhanId=" + id).subscribe(
            resultData => {
              self.notificationService.showSuccess(DangKyGoiMarketingMessage.MessageXoaThanhCong);
              self.grid.search();
            },
            (err: any) => {
              //this.validationErrors = err.ValidationErrors;
              if (err != undefined && err.ValidationErrors != null) {
                //self.validationErrors = err.ValidationErrors;
              }
              else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                self.notificationService.showError(err.Message);
              }
              //console.log("error = ", err)
            });
        }
        else { }
      });

    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  deleteChild(id) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);

      var self = this;

      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: DangKyGoiMarketingMessage.MessageXoaChild }
      }).afterClosed().subscribe(result => {
        //this.dialogRef = null;
        if (result == "Yes") {

          self.apiService.post<any>("DanhMucMarketing/RemoveMarketingOfChild?yeuCauGoiId=" + id).subscribe(
            resultData => {
              self.notificationService.showSuccess(DangKyGoiMarketingMessage.MessageXoaThanhCong);
              self.detailGrid.search();
            },
            (err: any) => {
              //this.validationErrors = err.ValidationErrors;
              if (err != undefined && err.ValidationErrors != null) {
                //self.validationErrors = err.ValidationErrors;
              }
              else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                self.notificationService.showError(err.Message);
              }
              //console.log("error = ", err)
            });
        }
        else { }
      });

    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  daNhanTienChild(id) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);

      var self = this;

      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: DangKyGoiMarketingMessage.MessageDaNhanTienChild }
      }).afterClosed().subscribe(result => {
        //this.dialogRef = null;
        if (result == "Yes") {

          self.apiService.post<any>("DanhMucMarketing/ChangeTrangThaiDangChoNhanTienOfChild?yeuCauGoiId=" + id).subscribe(
            resultData => {
              self.notificationService.showSuccess(DangKyGoiMarketingMessage.MessageDaNhanTienThanhCong);
              self.detailGrid.search();
            },
            (err: any) => {
              //this.validationErrors = err.ValidationErrors;
              if (err != undefined && err.ValidationErrors != null) {
                //self.validationErrors = err.ValidationErrors;
              }
              else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                self.notificationService.showError(err.Message);
              }
              //console.log("error = ", err)
            });
        }
        else { }
      });

    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuatQuaChild(benhNhanId, chuongTrinhGoiId) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);

      var self = this;

      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: DangKyGoiMarketingMessage.MessageXuatQuaChild }
      }).afterClosed().subscribe(result => {
        //this.dialogRef = null;
        if (result == "Yes") {

          self.apiService.post<any>("DanhMucMarketing/XuatQuaOfChild?benhNhanId=" + benhNhanId + "&chuongTrinhGoiDichVuId=" + chuongTrinhGoiId).subscribe(
            resultData => {
              if (resultData == null || resultData == undefined) {
                //MessageXuatQuaChildError
                self.notificationService.showError(DangKyGoiMarketingMessage.MessageXuatQuaChildError);
              }
              else {
                self.notificationService.showSuccess(DangKyGoiMarketingMessage.MessageXuatQuaChildThanhCong);
              }
              self.detailGrid.search();
            },
            (err: any) => {
              //this.validationErrors = err.ValidationErrors;
              if (err != undefined && err.ValidationErrors != null) {
                //self.validationErrors = err.ValidationErrors;
              }
              else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                self.notificationService.showError(err.Message);
              }
              //console.log("error = ", err)
            });
        }
        else { }
      });

    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  hoanThanhSuDungChild(id) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      //this.router.navigate(["/danh-muc/danh-sach-marketing" + "/chinh-sua/" + id]);

      var self = this;

      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: DangKyGoiMarketingMessage.MessageDangSuDungChild }
      }).afterClosed().subscribe(result => {
        //this.dialogRef = null;
        if (result == "Yes") {

          self.apiService.post<any>("DanhMucMarketing/ChangeTrangThaiDangDangSuDungOfChild?yeuCauGoiId=" + id).subscribe(
            resultData => {
              self.notificationService.showSuccess(DangKyGoiMarketingMessage.MessageDaNhanTienThanhCong);
              self.detailGrid.search();
            },
            (err: any) => {
              //this.validationErrors = err.ValidationErrors;
              if (err != undefined && err.ValidationErrors != null) {
                //self.validationErrors = err.ValidationErrors;
              }
              else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                self.notificationService.showError(err.Message);
              }
              //console.log("error = ", err)
            });
        }
        else { }
      });

    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  add() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/marketing/dang-ky-goi-marketing/them"]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  clearSearch() {
    if (this.marketing.SearchString == "" || this.marketing.SearchString == null) {
      this.grid.searchString = "";

      let xuatKhoClone: DanhSachMarketingSearch = JSON.parse(JSON.stringify(this.marketing));
      let queryForHole = JSON.parse(JSON.stringify(xuatKhoClone));
      LocalStorageHelper.setItem(
        'additionalSearchStringDSMarketing',
        JSON.stringify(queryForHole)
      );

      this.grid.search();
    }
  }

  onKey(event: any) {
    if (event.keyCode == 13) {
      this.Timkiem();
    }
  }

  Timkiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    let QueryString = null;
    this.grid._additionalSearchString = null;

    QueryString = this.marketing.SearchString;
    let xuatKhoClone: DanhSachMarketingSearch = JSON.parse(JSON.stringify(this.marketing));

    if (xuatKhoClone.TuNgay != null && xuatKhoClone.TuNgay != undefined) {
      let date = new Date(xuatKhoClone.TuNgay);
      xuatKhoClone.TuNgay = new Date(Date.UTC(date.getFullYear(), date.getMonth()
        , date.getDate(), date.getHours(), date.getMinutes()));
    }
    if (xuatKhoClone.DenNgay != null && xuatKhoClone.DenNgay != undefined) {
      let date = new Date(xuatKhoClone.DenNgay);
      xuatKhoClone.DenNgay = new Date(Date.UTC(date.getFullYear(), date.getMonth()
        , date.getDate(), date.getHours(), date.getMinutes()));
    }

    var query = JSON.stringify(xuatKhoClone);

    LocalStorageHelper.setItem("additionalSearchStringDSMarketing", JSON.stringify(this.marketing));

    this.grid._additionalSearchString = query;
    //LocalStorageHelper.setItem("additionalSearchStringDSMarketing", query);
    this.grid.searchString = QueryString;
    this.grid.search();

  }

  CheckboxChange($event, dangChoNhanTien: boolean = false, dangChoThanhToan: boolean = false, daThanhToan: boolean = false) {
    this.router.navigateByUrl('/marketing/dang-ky-goi-marketing?holdQuery=true');
    if (dangChoNhanTien) {
      this.marketing.DangChoNhanTien = $event;
    }
    else if (dangChoThanhToan) {
      this.marketing.DangChoThanhToan = $event;
    }
    else if (daThanhToan) {
      this.marketing.DaThanhToan = $event;
    }
    this.Timkiem();
  }

  onKeyTuNgayDenNgay(event: any) {
    if (event.key == "Enter") {
      this.Timkiem();
    }
  }

  tuNgayChange() {
    this.Timkiem();
  }

  denNgayChange() {
    this.Timkiem();
  }

  exportExcel() {
    //console.log("exportExcel");
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("DanhMucMarketing/ExportDanhSachMarketing", this.grid._gridQueryInfo).subscribe(
        resultData => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(resultData, "application/vnd.ms-excel", "DangKyGoiMarketing" + dateTimeNow.getFullYear() + ".xlsx");
        },
        () => {
          //return null;
          //console.log("error")
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inBangKeTrongGoiBenhNhan(benhNhanId: any) {
    this.showLoadingPopup();

    let arrFileUrl: Array<any> = [];
    let arrFilePdf: Array<any> = [];
    let hostingName = "";
    if (window.location.protocol == "http:") {
      hostingName = "http://" + window.location.host;
    } else {
      hostingName = "https://" + window.location.host;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.postExportPdf<any>("DanhMucMarketing/InBangKeGoiMarketingBenhNhan?benhNhanId=" + benhNhanId + "&hostingName=" + hostingName).subscribe(
        (file) => {
          let newBlob = new Blob([file], { type: "application/pdf" });
          let datalocalURL = window.URL.createObjectURL(newBlob);
          arrFileUrl.push(datalocalURL);
          arrFilePdf.push(file);

          if (arrFilePdf.length > 0) {
            this.dialog
              .open(CommonPdfPopupComponent, {
                disableClose: false,
                width: "1000px",
                data: { arrFileUrl, arrFilePdf },
              })
              .afterClosed()
              .subscribe((result) => {
                this.closeAllDialogs();
              });
          } else {
            this.notificationService.showError("Không có thông tin.");
            this.closeAllDialogs();
          }
        },
      );
      (err: ApiError) => {
        if (err.Message !== "Validation Failed") {
          this.notificationService.showError(err.Message);
          this.closeAllDialogs();
        }
      }
    }

    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      this.closeAllDialogs();
    }
  }

  ketXuatGoiTheoBenhNhanExcel(benhNhanId: any) {
    this.showLoadingPopup();
    //Bệnh nhân có bao nhiêu yêu cầu chương trình maketing 
    this.apiService.get<any[]>("DanhMucMarketing/AllGoiTheoBenhBenh?benhNhanId=" + benhNhanId).subscribe(ketQuaChuongTrinhs => {
      if (ketQuaChuongTrinhs.length > 0) {
        ketQuaChuongTrinhs.forEach(itemChuongTrinh => {
          this.apiService.postExportExcel<any>("DanhMucMarketing/KetXuatGoiTheoBenhNhanExcel?yeuCauGoiDichVuId=" + itemChuongTrinh)
            .subscribe(res => {
              this.showLoadingPopup();
              let dateTimeNow = new Date();
              CommonService.downLoadFile(res, "application/vnd.ms-excel", "KetXuatGoiTheoBenhNhanExcel_" + itemChuongTrinh + dateTimeNow.getFullYear() + ".xlsx");
              this.dialog.closeAll();
            }, err => {
              this.notificationService.showError(err.Message);
              this.dialog.closeAll();
            });
        });
      }
    });
  }

  showLoadingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải...' }
      });
    }
  }

  showSavingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang lưu...' }
      });
    }
  }

  closeAllDialogs() {
    if (this.loadingPopup) {
      this.loadingPopup.close();
      this.loadingPopup = null;
    }
  }

}
