import { Component, OnInit, ViewChild, TemplateRef, Input, OnChanges } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icicclose from '@iconify/icons-ic/twotone-close';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { TagItem } from '../../tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.model';
import { DanhSachChoKhamSearch } from '../kham-benh.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { FormControl } from '@angular/forms';
import icBlock from '@iconify/icons-ic/twotone-block';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPlay from '@iconify/icons-ic/play-circle-filled';
import icAssignment from '@iconify/icons-ic/assignment';
import { ApiService } from 'src/app/core/services/api.service';
import { LoaiHangDoi } from 'src/app/shared/enum/kham-benh.enum';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-kham-benh-cho-kham-list',
  templateUrl: './kham-benh-cho-kham-list.component.html',
  styleUrls: ['./kham-benh-cho-kham-list.component.scss']
})
export class KhamBenhChoKhamListComponent implements OnInit, OnChanges {

  documentType: DocumentType;
  gridColumns: any[] = [];
  searchString: string;
  icSearch = icSearch;
  icicclose = icicclose;
  icBlock = icBlock;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icEdit = icEdit;
  icPlay = icPlay;
  icAssignment = icAssignment;
  phongKhamTemp: number = 0;
  danhSachChoKhamSearch: DanhSachChoKhamSearch;
  danhSachChoKhamSearchDefault: DanhSachChoKhamSearch;
  showCancelSearch: boolean = false;
  listTagShowOnHeader: Array<TagItem>;
  listTagSearch: Array<TagItem>;
  urlGetData: string = "KhamBenh/GetDataForGridAsyncDanhSachChoKhams";
  urlGetTotalPage: string = "KhamBenh/GetTotalPageForGridAsyncDanhSachChoKhams";
  groups: GroupDescriptor[] = [{ field: 'Khoa' }];
  flagOnceSearch: boolean = false;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('tinhtrangTemplate', { static: true }) tinhtrangTemplate: TemplateRef<any>;
  @ViewChild('thoiDiemTiepNhanTemplate', { static: true }) thoiDiemTiepNhanTemplate: TemplateRef<any>;

  @Input() phongKham: number = 0;
  phongKhamIdWhere: number = 0;
  searchCtrl = new FormControl;
  @Input() sort: SortDescriptor[] = [{
    field: "ThoiDiemTiepNhan",
    dir: 'desc'
  }
  ];
  constructor(
    private dialog: MatDialog
    , private apiService: ApiService,
    private notificationService: NotificationService,

  ) { }


  ngOnInit() {
    this.danhSachChoKhamSearch = new DanhSachChoKhamSearch();
    this.danhSachChoKhamSearchDefault = new DanhSachChoKhamSearch();
    this.documentType = DocumentType.KhamBenh;
    this.gridColumns = [
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100, Sortable: true },
      { Field: "HoTen", Title: "Tên Người Bệnh", Width: 200, Sortable: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 220, Sortable: true },
      { Field: "TrangThaiDisplay", Title: "Tình Trạng", Width: 100, Sortable: true, Template: this.tinhtrangTemplate },
      { Field: "ThoiDiemTiepNhan", Title: "Tiếp Nhận Lúc", Width: 150, Sortable: true, Template: this.thoiDiemTiepNhanTemplate },
      { Field: "TenBenh", Title: "Lý Do Khám Bệnh", Width: 130, Sortable: true },
      { Field: "DoiTuong", Title: "Đối Tượng", Width: 140, Sortable: true },
      { Field: "Action", Title: "", Width: 50, Template: this.trangThaiTemplate }
    ];
    this.listTagSearch = new Array<TagItem>();
    this.TimkiemById();
  }

  ngOnChanges() {
    this.phongKhamIdWhere = this.phongKham;
    this.TimkiemById();
  }

  TimkiemNangCao() {
    this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));

        if (this.danhSachChoKhamSearch.ThoiDiemTiepNhanTuFormat != null) {
            this.danhSachChoKhamSearch.FromDate = CommonService.formatDateTime(this.danhSachChoKhamSearch.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }

        if (this.danhSachChoKhamSearch.ThoiDiemTiepNhanDenFormat != null) {
            this.danhSachChoKhamSearch.ToDate = CommonService.formatDateTime(this.danhSachChoKhamSearch.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        this.danhSachChoKhamSearch.PhongBenhVienId = this.phongKham; // phong khám
        var queryString = JSON.stringify(this.danhSachChoKhamSearch);
        this.gridChild.searchString = this.searchString;
        this.gridChild._additionalSearchString = queryString;
     
        this.gridChild.search();
        this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.phongKham != 0) {
        this.TimkiemById();
        this.closeMenu();
      }
    }
  }

  clearSearch() {
    this.searchString = "";
    this.gridChild.search();
  }

  TimkiemById() {
    this.gridChild.urlGetData = this.urlGetData;
    this.gridChild.urlGetTotalPage = this.urlGetTotalPage;
    let phongKhamId = null;
    this.gridChild._additionalSearchString = null;
    if (this.searchString != null || this.searchString != "") {
    }
    this.gridChild.searchString = null;
    let SearchQueryString = null;
    if (this.phongKhamIdWhere != 0) {
      phongKhamId = this.phongKhamIdWhere;
    } else {
      this.phongKhamTemp = phongKhamId;
      phongKhamId = this.phongKhamIdWhere;
    }
    if (this.searchString != null) {
      SearchQueryString = "\"" + this.searchString + "\"";
    }
    if (this.phongKhamIdWhere != 0) {
      this.danhSachChoKhamSearch = new DanhSachChoKhamSearch();
      this.listTagSearch = new Array<TagItem>();
      this.listTagShowOnHeader = new Array<TagItem>();
      let queryString = "{\"PhongBenhVienId\":" + phongKhamId + ",\"searchString\":" + SearchQueryString + "}";
      this.gridChild.searchString = queryString;
      this.gridChild.search();
      this.showCancelSearch = false;
    }
  }

  closeMenu() {
    this.trigger.closeMenu();
  }
 


  searchChanges() {
    if (this.searchString == null || this.searchString == "") {
      this.TimkiemById();
    }
  }


  getInputSearchValue(obj: any, keyValue: any, titleValue: any) {
    let index = this.listTagSearch.findIndex(x => x.Key == keyValue);
    if (obj !== null && obj !== undefined && obj !== '') {

      // let valueFormat = typeof obj == "string" ? obj : CommonService.formatDateTime(obj, "dd/mm/yyyy");
      let valueFormat = undefined;
      if (typeof obj == "string" || typeof obj == "number") {
        valueFormat = obj;
      } else {
        valueFormat = CommonService.formatDateTimeSACH(obj, "dd/mm/yyyy");
      }

      if (index < 0) {
        let item = new TagItem();
        item.Key = keyValue;
        item.Value = valueFormat;
        item.Title = titleValue;
        this.listTagSearch.push(item);
      }
      else {
        this.listTagSearch[index].Value = valueFormat;
      }
    }
    else {
      if (index != -1) {
        this.listTagSearch.splice(index, 1);
      }
    }
  }

  getDropdownItem(obj: any, keyValue: any, titleValue: any) {
    let index = this.listTagSearch.findIndex(x => x.Key == keyValue && x.Title == titleValue);
    if (obj == undefined && this.listTagSearch.findIndex(x => x.Title == titleValue) != -1) {
      let indexTitle = this.listTagSearch.findIndex(x => x.Title == titleValue);
      this.listTagSearch.splice(indexTitle, 1);
    }
    if (obj != undefined && obj.KeyId != null) {
      if (obj.KeyId == null) {
        if (index != -1) {
          this.listTagSearch.splice(index, 1);
        }
      }
      else {
        if (index < 0) {
          let item = new TagItem();
          item.Key = keyValue;
          item.Value = obj.DisplayName;
          item.Title = titleValue;
          let indexTitle = this.listTagSearch.findIndex(x => x.Title == titleValue);
          if (indexTitle >= 0) {
            this.listTagSearch.splice(indexTitle, 1);
          }
          this.listTagSearch.push(item);
        }
        else {
          this.listTagSearch.pop();
          this.listTagSearch[index].Value = obj.DisplayName;
        }
      }
    }
    else {
      if (index != -1) {
        this.listTagSearch.splice(index, 1);

      }
    }
  }

  vaoHangDoi(event: any) {
    console.log(event)
    if (event != undefined && event != null) {
      if (event.LoaiHangDoi == LoaiHangDoi.ChuanBiKham) {
        this.apiService.post("KhamBenh/XuLyThemBenhNhanVaoChoKhamHienTai?hangDoiId=" + event.Id)
          .subscribe(() => {
            this.notificationService.showSuccess("Thêm người bệnh vào hàng đợi thành công.");
            this.TimkiemById();
          })
      }
    }

  }
}