import { Component, OnInit, Inject, ViewChild, TemplateRef, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TimKiemBenhNhanGridVo, BenhNhanTiepNhanBenhNhanViewModel, DataTimKiem } from '../tiep-nhan-benh-nhan.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-popup-tim-kiem-benh-nhan',
  templateUrl: './popup-tim-kiem-benh-nhan.component.html',
  styleUrls: ['./popup-tim-kiem-benh-nhan.component.scss']
})
export class PopupTimKiemBenhNhanComponent implements OnInit {

  icClose = icClose;
  gridColumns: any[] = [];
  gridData: any;
  documentType: DocumentType;
  timKiemBenhNhanSearch: TimKiemBenhNhanGridVo = new TimKiemBenhNhanGridVo();

  @Input() sort: SortDescriptor[] = [
    {
      field: "MaBN",
      dir: "asc",
    },
  ];

  addtionStringDefault: string = null;
  urlGetDataGrid: string = "TiepNhanBenhNhan/GetDataForGridAsyncPopupTimKiem";
  urlGetTotalPageGrid: string = "TiepNhanBenhNhan/GetTotalPageForGridAsyncPopupTimKiem";

  @ViewChild(GridComponent, { static: true }) gridTimKiemTiepNhan: GridComponent;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DataTimKiem
    , public dialogRef: MatDialogRef<PopupTimKiemBenhNhanComponent>
    , private apiService: ApiService) {
    //console.log("---: ", data); 
    if (data == null || data == undefined) {
      data = new DataTimKiem();
    }
  }

  ngOnInit() {

    this.documentType = DocumentType.YeuCauTiepNhan;

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
    this.timKiemBenhNhanSearch.MaBN = this.data.searchBenhNhan.MaBN;
    this.timKiemBenhNhanSearch.BHYTMaSoThe = this.data.searchBenhNhan.MaBHYT;
    this.timKiemBenhNhanSearch.HoTen = this.data.searchBenhNhan.HoTen;
    this.timKiemBenhNhanSearch.NgaySinhDisplay = this.data.searchBenhNhan.NgaySinhDisplay;
    this.timKiemBenhNhanSearch.ThangSinh = this.data.searchBenhNhan.ThangSinh;
    this.timKiemBenhNhanSearch.NamSinh = this.data.searchBenhNhan.NamSinh;
    this.timKiemBenhNhanSearch.SoChungMinhThu = this.data.searchBenhNhan.SoChungMinhThu;
    this.timKiemBenhNhanSearch.SoDienThoai = this.data.searchBenhNhan.SoDienThoai;
    this.timKiemBenhNhanSearch.DiaChi = this.data.searchBenhNhan.DiaChi;

    if (this.timKiemBenhNhanSearch.NgaySinhDisplay != null) {
      this.timKiemBenhNhanSearch.NgaySinhFormat = CommonService.formatDateTime(new Date(this.timKiemBenhNhanSearch.NgaySinhDisplay), "dd/mm/yyyy");
    }

    this.addtionStringDefault = JSON.stringify(this.timKiemBenhNhanSearch);
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }

  chonBenhNhan(item: TimKiemBenhNhanGridVo) {
    this.apiService.post<BenhNhanTiepNhanBenhNhanViewModel>("TiepNhanBenhNhan/GetBenhNhan/?benhNhanId=" + item.Id).subscribe(
      resultData => {
        //console.log("chonBenhNhan = ", resultData);
        this.dialogRef.close(resultData);
      },
      (err: ApiError) => {
      });

  }

  onKey(event: any) {
    if (event.keyCode === 13) {
      this.TimKiem();
    }
  }

  TimKiem() {
    if (this.timKiemBenhNhanSearch.NgaySinhDisplay != null) {
      this.timKiemBenhNhanSearch.NgaySinhFormat = CommonService.formatDateTime(
        this.timKiemBenhNhanSearch.NgaySinhDisplay,
        "dd/mm/yyyy"
      );
    } else {
      this.timKiemBenhNhanSearch.NgaySinhFormat = null;
    }
    var queryString = JSON.stringify(this.timKiemBenhNhanSearch);
    this.gridTimKiemTiepNhan._additionalSearchString = queryString;
    this.gridTimKiemTiepNhan.search();
  }
}
