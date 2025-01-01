import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import { SortDescriptor } from '@progress/kendo-data-query';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LichSuKhamChuaBenhTimKiemNangCao } from '../lich-su-kham-chua-benh.model';

@Component({
  selector: 'app-lich-su-kham-chua-benh-nguoi-benh-popup',
  templateUrl: './lich-su-kham-chua-benh-nguoi-benh-popup.component.html',
  styleUrls: ['./lich-su-kham-chua-benh-nguoi-benh-popup.component.scss']
})
export class LichSuKhamChuaBenhNguoiBenhPopupComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;

  gridColumns: any[] = [];
  gridData: any;
  documentType: DocumentType = DocumentType.LichSuKhamChuaBenh;
  timKiemNangCaoObj: LichSuKhamChuaBenhTimKiemNangCao = new LichSuKhamChuaBenhTimKiemNangCao();
  modelQRCode: any;
  isScanF1: boolean = false;
  strAdditionalSearchString: string = "";
  searchCtrl = new FormControl();

  sort: SortDescriptor[] = [
    {
      field: "MaBN",
      dir: "asc",
    },
  ];

  urlGetDataGrid: string = "LichSuKhamChuaBenh/GetDataForGridTimKiemNguoiBenhDaTiepNhan";
  urlGetTotalPageGrid: string = "LichSuKhamChuaBenh/GetTotalPageForGridTimKiemNguoiBenhDaTiepNhan";

  @ViewChild(GridComponent, { static: true }) gridTimKiem: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  , public dialogRef: MatDialogRef<LichSuKhamChuaBenhNguoiBenhPopupComponent>
  , private notificationService: NotificationService) { }

  ngOnInit() {
    let hasLocalSearchString = false;
    var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringLichSuKhamChuaBenh");
    if (additionalSearchString != null) {
      this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
      if (this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '') {
        this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
      }
      if (this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '') {
        this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
      }
      this.gridTimKiem.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
      hasLocalSearchString = true;
    }
    if (!hasLocalSearchString) {
      let now = new Date();
      let currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      this.timKiemNangCaoObj.TuNgayDenNgay.startDate = this.timKiemNangCaoObj.TuNgayDenNgay.endDate = currentDate;
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
      this.gridTimKiem.additionalSearchString = this.strAdditionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
    }


    this.gridColumns = [
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
      { Field: "BHYTMaSoThe", Title: "Mã thẻ BHYT", Width: 150, Sortable: true },
      { Field: "HoTen", Title: "Họ và tên", Width: 150, Sortable: true },
      { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 120, Sortable: false },
      { Field: "GioiTinhDisplay", Title: "GT", Width: 60, Sortable: false },
      { Field: "SoChungMinhThu", Title: "CMND", Width: 150, Sortable: false },
      { Field: "SoDienThoaiDisplay", Title: "Điện thoại", Width: 120, Sortable: false },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 300, Sortable: false },
      { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
    ];
  }

  close(answer: string = null) {
    this.dialogRef.close(answer);
  }

  chonNguoiBenh(dataItem) {
    this.close(dataItem.Id);
  }

  timeoutSearchChange: any;
  searchChanges(event){
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
    this.timKiemNangCaoObj.SearchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
    }

    var queryString = JSON.stringify(this.timKiemNangCaoObj);
    this.gridTimKiem._additionalSearchString = this.strAdditionalSearchString = queryString;
    this.gridTimKiem.search();
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
}
