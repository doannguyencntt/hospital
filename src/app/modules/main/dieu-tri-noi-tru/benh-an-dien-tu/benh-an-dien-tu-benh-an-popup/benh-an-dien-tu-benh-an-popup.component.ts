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
import { BenhAnDienTuTimKiemNangCao } from '../benh-an-dien-tu.model';

@Component({
  selector: 'app-benh-an-dien-tu-benh-an-popup',
  templateUrl: './benh-an-dien-tu-benh-an-popup.component.html',
  styleUrls: ['./benh-an-dien-tu-benh-an-popup.component.scss']
})
export class BenhAnDienTuBenhAnPopupComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;

  gridColumns: any[] = [];
  gridData: any;
  documentType: DocumentType = DocumentType.BenhAnDienTu;
  timKiemNangCaoObj: BenhAnDienTuTimKiemNangCao = new BenhAnDienTuTimKiemNangCao();
  modelQRCode: any;
  isScanF1: boolean = false;
  strAdditionalSearchString: string = "";
  searchCtrl = new FormControl();

  sort: SortDescriptor[] = [
    {
      field: "Id",
      dir: "asc",
    },
  ];

  urlGetDataGrid: string = "BenhAnDienTu/GetDataForGridTimKiemNoiTruBenhAn";
  urlGetTotalPageGrid: string = "BenhAnDienTu/GetTotalPageForGridTimKiemNoiTruBenhAn";

  @ViewChild(GridComponent, { static: true }) gridTimKiem: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  , public dialogRef: MatDialogRef<BenhAnDienTuBenhAnPopupComponent>
  , private notificationService: NotificationService
  ) { }

  ngOnInit() {
    let hasLocalSearchString = false;
    var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringBenhAnDienTu");
    if (additionalSearchString != null) {
      this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
      if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay != '') {
        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate);
      }
      if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay != '') {
        this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate);
      }
      if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay != '') {
        this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate);
      }
      if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay != '') {
        this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate);
      }
      this.gridTimKiem.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
      hasLocalSearchString = true;
    }
    if (!hasLocalSearchString) {
      let now = new Date();
      let currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate = this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate  = currentDate;
      this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate, "mm/dd/yyyy");
      this.gridTimKiem.additionalSearchString = this.strAdditionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
    }


    this.gridColumns = [
      { Field: "SoBenhAn", Title: "Số BA", Width: 90, Sortable: true },
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 90, Sortable: true },
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
      { Field: "BHYTMaSoThe", Title: "Mã thẻ BHYT", Width: 100, Sortable: true },
      { Field: "HoTen", Title: "Họ và tên", Width: 150, Sortable: true },
      { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 120, Sortable: false },
      { Field: "GioiTinhDisplay", Title: "GT", Width: 60, Sortable: false },
      { Field: "SoChungMinhThu", Title: "CMND", Width: 100, Sortable: false },
      { Field: "SoDienThoaiDisplay", Title: "Điện thoại", Width: 120, Sortable: false },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 180, Sortable: false },
      { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
    ];
  }

  close(answer: string = null) {
    this.dialogRef.close(answer);
  }

  chonBenhAn(dataItem) {
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
    if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay = null;
    }

    if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay = null;
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
