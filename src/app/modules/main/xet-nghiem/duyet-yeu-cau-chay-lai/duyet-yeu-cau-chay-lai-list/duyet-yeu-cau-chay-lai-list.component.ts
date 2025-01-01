import { Location } from '@angular/common';
import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { DanhSachGoiXetNghiemLai, DuyetYeuCauChayLaiXetNghiemTimKiem, DuyetYeuCauGoiLaiXetNghiem, TuChoiYeuCauGoiLaiXetNghiem } from '../duyet-yeu-cau-chay-lai.model';
import { DuyetYeuCauChayLaiTuChoiPopupComponent } from '../duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-duyet-yeu-cau-chay-lai-list',
  templateUrl: './duyet-yeu-cau-chay-lai-list.component.html',
  styleUrls: ['./duyet-yeu-cau-chay-lai-list.component.scss']
})
export class DuyetYeuCauChayLaiListComponent implements OnInit {

  icSearch = icSearch;
  icFilterList = icFilterList;
  icFileExcel = icFileExcel;
  icMoreHoriz = icMoreHoriz;

  documentType: DocumentType;
  gridColumns: any[] = [];
  gridNhomXetNghiemColumns: any[] = [];
  gridDichVuColumns: any[] = [];
  modelQRCode: any;
  isScanF1: boolean = false;
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  danhSachGoiXetNghiemLai = {} as DanhSachGoiXetNghiemLai;

  duyetYeuCauChayLaiTuNgay: any;
  duyetYeuCauChayLaiDenNgay: any;

  searchCtrl = new FormControl();
  timKiemNangCaoObj: DuyetYeuCauChayLaiXetNghiemTimKiem = new DuyetYeuCauChayLaiXetNghiemTimKiem();
  baseRoute: string = "/xet-nghiem/duyet-yeu-cau-chay-lai";

  urlGetDataGridParentAsync = "XetNghiem/GetDanhSachYeuCauChayLaiXetNghiemForGrid";
  urlGetTotalPageParentAsync = "XetNghiem/GetTotalDanhSachYeuCauChayLaiXetNghiemForGrid";

  urlGetDataGridChildAsync = "XetNghiem/GetDanhSachYeuCauChayLaiXetNghiemChiTietForGrid";
  urlGetTotalPageGridChild: string = "XetNghiem/GetTotalDanhSachYeuCauChayLaiXetNghiemChiTietForGrid";

  sortDaGoi: SortDescriptor[] =
    [{
      field: "TrangThai",
      dir: "asc"
    }];

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('barcodeTemplate', { static: true }) barcodeTemplate: TemplateRef<any>;
  @ViewChild('trangThaiNhomTemplate', { static: true }) trangThaiNhomTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetKetQuaTemplate', { static: true }) ngayDuyetKetQuaTemplate: TemplateRef<any>;
  @ViewChild('ngayYeuCauTemplate', { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
  @ViewChild('ngayNgayDuyetTemplate', { static: true }) ngayNgayDuyetTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @ViewChild('gridParent', { static: true }) gridChild: GridComponent;
  constructor(private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.DuyetYeuCauChayLaiXetNghiem;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachDuyetYeuCauChayKaiXetNghiem");
        if (additionalSearchString != null) {
          this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
          // if (this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '') {
          //   this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
          // }
          // if (this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '') {
          //   this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
          // }
          this.convertDateTimeToUTC();
          // this.gridChild.additionalSearchString = additionalSearchString;
          this.gridChild.additionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
          this.reverseDateTime();
          hasLocalSearchString = true;
        }
      }
    }
    if (!hasLocalSearchString) {
      this.gridChild.additionalSearchString = "";
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachDuyetYeuCauChayKaiXetNghiem");
    }

    this.gridColumns = [
      { Field: "MaBarCode", Title: "Barcode", Width: 80, Sortable: true, Template: this.barcodeTemplate },
      { Field: "MaTN", Title: "Mã TN", Width: 80, Sortable: true },
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
      { Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true },
      { Field: "GioiTinh", Title: "Giới tính", Width: 80, Sortable: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 80, Sortable: true },
      { Field: "TrangThai", Title: "Trạng thái", Width: 100, Template: this.trangThaiNhomTemplate },
      { Field: "NguoiDuyetKetQua", Title: "Người duyệt KQ", Width: 100, Sortable: true },
      { Field: "NgayDuyetKetQua", Title: "Ngày duyệt KQ", Width: 100, Sortable: true, Template: this.ngayDuyetKetQuaTemplate },
      { Field: "Action", Title: "", Width: 110, Sortable: false, Template: this.actionTemplate }
    ];

    this.gridNhomXetNghiemColumns = [
      { Field: "NhomXetNghiem", Title: "Nhóm XN", Width: 160, Sortable: false },
      { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 100, Sortable: false },
      { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 100, Sortable: false, Template: this.ngayYeuCauTemplate },
      { Field: "LyDoYeuCau", Title: "Lý do yêu cầu", Width: 120, Sortable: false },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 80, Sortable: false, Template: this.tinhTrangTemplate },
      { Field: "NguoiDuyet", Title: "Người duyệt", Width: 120, Sortable: false },
      { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 100, Sortable: false, Template: this.ngayNgayDuyetTemplate },
      { Field: "LyDoTuChoi", Title: "Lý do", Width: 120, Sortable: false }
    ];

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
  }

  timeoutSearchChange: any;
  searchChanges(event) {
    var self = this;
    if (event != null && typeof event == "string" && event.endsWith("@")) {
      self.timeoutSearchChange = setTimeout(function () {
        self.modelQRCode = event;
        self.changeQR(self.modelQRCode);
      }, 10);
    }
    else if (event == null || event == "") {
      this.modelQRCode = null;
      this.timKiemNangCao();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.timKiemNangCaoObj.SearchString = null;
    this.gridChild.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    // if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
    //   this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
    // }
    // if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
    //   this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
    // }

    // var queryString = JSON.stringify(this.timKiemNangCaoObj);
    // this.gridChild._additionalSearchString = queryString;

    // LocalStorageHelper.setItem("additionalSearchStringDanhSachDuyetYeuCauChayKaiXetNghiem", queryString);
    // this.gridChild.search();
    
    this.convertDateTimeToUTC();
    var query = JSON.stringify(this.timKiemNangCaoObj);
    
    this.gridChild._additionalSearchString = query;
    this.gridChild.searchString = this.timKiemNangCaoObj.SearchString;
    this.gridChild.search();

    this.reverseDateTime();

    LocalStorageHelper.setItem("additionalSearchStringDanhSachDuyetYeuCauChayKaiXetNghiem", JSON.stringify(this.timKiemNangCaoObj));
  }

  QuetMaQRCodeClick() {
    let elementBarcode: HTMLElement = document.getElementById(
      "barcodeActive"
    ) as HTMLElement;
    if (elementBarcode != undefined) {
      elementBarcode.click();
    }
  }

  changeQR(event) {
    if (event != null && typeof event == "string" && event.endsWith("@")) {
      var dataTimKiem = event.split("|");
      if (dataTimKiem.length > 1) {
        this.timKiemNangCaoObj.SearchString = dataTimKiem[0];
      } else {
        this.timKiemNangCaoObj.SearchString = event.slice(0, -1);
      }
      this.timKiemNangCao();
    } else {
      this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
    }
    this.isScanF1 = false;
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
      this.isScanF1 = true;
      event.preventDefault();
      this.QuetMaQRCodeClick();
    }
  }

  xemChiTiet(dataItem: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/xet-nghiem/duyet-yeu-cau-chay-lai/chi-tiet/" + dataItem.Id + "/" + dataItem.PhienXetNghiemId]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyTuChoi(dataItem) {
    this.dialog.open(DuyetYeuCauChayLaiTuChoiPopupComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối yêu cầu chạy lại xét nghiệm này không?" }
    }).afterClosed().subscribe(result => {      
      if (result !== null && result !== undefined && result !== "") {
        let tuChoiYeuCauGoiLaiXetNghiem = new TuChoiYeuCauGoiLaiXetNghiem();
        tuChoiYeuCauGoiLaiXetNghiem.PhienXetNghiemId = dataItem.PhienXetNghiemId;
        tuChoiYeuCauGoiLaiXetNghiem.LyDoTuChoi = result;
        this.apiService.post("XetNghiem/TuChoiXetNghiemLai", tuChoiYeuCauGoiLaiXetNghiem)
          .subscribe((resultData) => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Từ chối"]));
            this.gridChild.search();
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
      }
    });
  }

  xuLyDuyet(dataItem) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt yêu cầu chạy lại xét nghiệm này không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.danhSachGoiXetNghiemLai.DuyetYeuCauGoiLaiXetNghiems = [];
          dataItem.DanhSachPhienXetNghiemIds.forEach((element) => {
            let duyet = new DuyetYeuCauGoiLaiXetNghiem();
            duyet.Id = element;
            duyet.NhanVienYeuCauId = dataItem.NhanVienYeuCauId;
            self.danhSachGoiXetNghiemLai.DuyetYeuCauGoiLaiXetNghiems.push(duyet);
          });
          self.apiService.post("XetNghiem/DuyetXetNghiemLai", self.danhSachGoiXetNghiemLai).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt"]));
            this.gridChild.search();
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  exportExcel() {
    const self = this;
    self.showPopupLoadingData();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.postExportExcel<string>('XetNghiem/ExportYeuCauXetNghiemChayLai',
        self.gridChild._gridQueryInfo).subscribe(
          resultData => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'YeuCauXetNghiemChayLai' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }

  convertDateTimeToUTC() {
		if(this.timKiemNangCaoObj.TuNgayDenNgay.startDate) {
			this.duyetYeuCauChayLaiTuNgay = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate); 
			this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(Date.UTC(this.duyetYeuCauChayLaiTuNgay.getFullYear(), this.duyetYeuCauChayLaiTuNgay.getMonth(), this.duyetYeuCauChayLaiTuNgay.getDate(), this.duyetYeuCauChayLaiTuNgay.getHours(), this.duyetYeuCauChayLaiTuNgay.getMinutes()));
		}

		if(this.timKiemNangCaoObj.TuNgayDenNgay.endDate) {
			this.duyetYeuCauChayLaiDenNgay = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
			this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(Date.UTC(this.duyetYeuCauChayLaiDenNgay.getFullYear(), this.duyetYeuCauChayLaiDenNgay.getMonth(), this.duyetYeuCauChayLaiDenNgay.getDate(), this.duyetYeuCauChayLaiDenNgay.getHours(), this.duyetYeuCauChayLaiDenNgay.getMinutes()));
		}
	}

	reverseDateTime() {
		if(this.timKiemNangCaoObj.TuNgayDenNgay.startDate) {
			this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.duyetYeuCauChayLaiTuNgay.getFullYear(), this.duyetYeuCauChayLaiTuNgay.getMonth(), this.duyetYeuCauChayLaiTuNgay.getDate(), this.duyetYeuCauChayLaiTuNgay.getHours(), this.duyetYeuCauChayLaiTuNgay.getMinutes());
		}

		if(this.timKiemNangCaoObj.TuNgayDenNgay.endDate) {
			this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.duyetYeuCauChayLaiDenNgay.getFullYear(), this.duyetYeuCauChayLaiDenNgay.getMonth(), this.duyetYeuCauChayLaiDenNgay.getDate(), this.duyetYeuCauChayLaiDenNgay.getHours(), this.duyetYeuCauChayLaiDenNgay.getMinutes());
		}
	}
}
