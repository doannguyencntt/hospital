import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { TiepNhanNoiTruTimKiem } from '../tiep-nhan-noi-tru.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { Location } from '@angular/common';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { TiepNhanNoiTruBenhAnPopupComponent } from '../tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component';
import { SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-tiep-nhan-noi-tru-list',
  templateUrl: './tiep-nhan-noi-tru-list.component.html',
  styleUrls: ['./tiep-nhan-noi-tru-list.component.scss']
})
export class TiepNhanNoiTruListComponent implements OnInit {

  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;

  searchCtrl = new FormControl();
  documentType: DocumentType;
  gridColumns: any[] = [];
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";
  modelQRCode: any;
  isScanF1: boolean = false;
  sort: SortDescriptor[] = [{
    field: 'TrangThai',
    dir: 'asc'
  }];

  baseRoute: string = "/noi-tru/tiep-nhan";
  tiepNhanNoiTruTimKiem: TiepNhanNoiTruTimKiem = new TiepNhanNoiTruTimKiem();

  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild('thoiGianTiepNhanTemplate', { static: true }) thoiGianTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('capCuuTemplate', { static: true }) capCuuTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('thoiGianNhapVienTemplate', { static: true }) thoiGianNhapVienTemplate: TemplateRef<any>;

  
  @ViewChild('gridParent', { static: true }) gridChild: GridComponent;
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TiepNhanNoiTru;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachTiepNhanNoiTru");
        if (additionalSearchString != null) {
          this.tiepNhanNoiTruTimKiem = JSON.parse(additionalSearchString);
          if(this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.TuNgay != null && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.TuNgay != 'null' && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.TuNgay != '')
          {
            this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.startDate = new Date(this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.startDate);
          }
          if(this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.DenNgay != null && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.DenNgay != 'null' && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.DenNgay != '')
          {
            this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.endDate = new Date(this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.endDate);
          }
          this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if(!hasLocalSearchString)
    {
      var queryString = JSON.stringify(this.tiepNhanNoiTruTimKiem);
      this.gridChild.additionalSearchString = queryString;
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachTiepNhanNoiTru");
    }

    this.gridColumns = [
      { Field: "MaTiepNhan", Title: "Mã TN", Width: 60, Sortable: true, Template: this.maTNTemplate},
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 60, Sortable: true},
      { Field: "HoTen", Title: "Họ tên", Width: 160, Sortable: true},
      { Field: "GioiTinh", Title: "Giới tính", Width: 80, Sortable: true },
      //{ Field: "KhoaNhapVien", Title: "Khoa nhập viện", Width: 120, Sortable: true },
      { Field: "ThoiGianTiepNhan", Title: "Thời gian tiếp nhận", Width: 100, Sortable: true, Template: this.thoiGianTiepNhanTemplate},
      { Field: "ThoiGianNhapVien", Title: "Thời gian nhập viện", Width: 100, Sortable: true, Template: this.thoiGianNhapVienTemplate},
      { Field: "SoBenhAn", Title: "Số BA", Width: 60, Sortable: true},
      { Field: "NoiChiDinh", Title: "Nơi chỉ định", Width: 100, Sortable: true},
      { Field: "ChanDoan", Title: "Chẩn đoán", Width: 120, Sortable: true},
      { Field: "DoiTuong", Title: "Đối tượng", Width: 60, Sortable: true},
      { Field: "CapCuu", Title: "Cấp cứu", Width: 50, Sortable: true,  Template: this.capCuuTemplate },
      { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiTemplate}
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
        else if ((event == null || event == "") && this.strAdditionalSearchString != "") {
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
    this.tiepNhanNoiTruTimKiem.SearchString = null;
    this.gridChild.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.tiepNhanNoiTruTimKiem.TuNgayDenNgay != null && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.startDate != null) {
      this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.TuNgay = null;
    }
    if (this.tiepNhanNoiTruTimKiem.TuNgayDenNgay != null && this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.endDate != null) {
      this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.tiepNhanNoiTruTimKiem.TuNgayDenNgay.DenNgay = null;
    }

    var queryString = JSON.stringify(this.tiepNhanNoiTruTimKiem);
    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringDanhSachTiepNhanNoiTru",queryString);
    this.gridChild.search();
  }

  xuLyXuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("DieuTriNoiTru/ExportDanhSachTiepNhanNoiTru", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "TiepNhanNoiTru" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xemChiTiet(dataItem) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(TiepNhanNoiTruBenhAnPopupComponent, {
        disableClose: false,
        width: '1400px',
        height:'455px',
        data: { Id: dataItem.YeuCauTiepNhanId, TenBenhNhan: dataItem.HoTen}
      }).afterClosed().subscribe(result => {
        if(result == true)
        {
          this.gridChild.search();
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
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
            this.tiepNhanNoiTruTimKiem.SearchString = dataTimKiem[0];
        } else {
            this.tiepNhanNoiTruTimKiem.SearchString = event.slice(0, -1);
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
}
