import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icChevronLeft from '@iconify/icons-ic/twotone-chevron-left';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { TongHopYLenhTimKiem } from '../tong-hop-y-lenh.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { Location } from '@angular/common';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { IntlService } from '@progress/kendo-angular-intl';
import { ShowDateTime } from '../../../danh-muc/lich-phan-cong/lich-phan-cong-ngoai-tru/lich-phan-cong-ngoai-tru.model';
import { addDays, weekInYear, firstDayInWeek, Day } from '@progress/kendo-date-math';
import { GroupDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-tong-hop-y-lenh-list',
  templateUrl: './tong-hop-y-lenh-list.component.html',
  styleUrls: ['./tong-hop-y-lenh-list.component.scss']
})
export class TongHopYLenhListComponent implements OnInit {

  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icChevronLeft = icChevronLeft;
  icChevronRight = icChevronRight;

  searchCtrl = new FormControl();
  documentType: DocumentType;
  gridColumns: any[] = [];
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";
  groups: GroupDescriptor[] = [{ field: 'Phong', dir: null }];

  baseRoute: string = "/noi-tru/tong-hop-y-lenh";
  tongHopYLenhTimKiem: TongHopYLenhTimKiem = new TongHopYLenhTimKiem();

  dateLinkText:string="";
  showDateTime: ShowDateTime;

  @ViewChild('maBenhAnTemplate', { static: true }) maBenhAnTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('ngaySinhTemplate', { static: true }) ngaySinhTemplate: TemplateRef<any>;
  @ViewChild('ngayYLenhTemplate', { static: true }) ngayYLenhTemplate: TemplateRef<any>;
  @ViewChild('hoanThanhTemplate', { static: true }) hoanThanhTemplate: TemplateRef<any>;
  @ViewChild('ngayCapNhatTemplate', { static: true }) ngayCapNhatTemplate: TemplateRef<any>;
  @ViewChild('gridParent', { static: true }) gridChild: GridComponent;
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    public intl: IntlService,
    private router: Router
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TongHopYLenh;
    this.showDateTime = new ShowDateTime();

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachTongHopYLenh");
        if (additionalSearchString != null) {
          this.tongHopYLenhTimKiem = JSON.parse(additionalSearchString);
          if(this.tongHopYLenhTimKiem.strNgayYLenh != null && this.tongHopYLenhTimKiem.strNgayYLenh != 'null' && this.tongHopYLenhTimKiem.strNgayYLenh != '')
          {
            this.tongHopYLenhTimKiem.NgayYLenh = new Date(this.tongHopYLenhTimKiem.NgayYLenh);
          }
          this.ganGiaTriNgayYLenh();
          this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if(!hasLocalSearchString)
    {
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachTongHopYLenh");

      this.tongHopYLenhTimKiem.NgayYLenh = new Date();
      this.tongHopYLenhTimKiem.strNgayYLenh = CommonService.formatDateTime(this.tongHopYLenhTimKiem.NgayYLenh, "mm/dd/yyyy");
      var queryString = JSON.stringify(this.tongHopYLenhTimKiem);
      this.gridChild.additionalSearchString = queryString;
      this.ganGiaTriNgayYLenh();
    }

    // tô màu dòng chưa done ở api
    this.gridColumns = [
      { Field: "Giuong", Title: "Giường", Width: 120, Sortable: true},
      { Field: "Phong", Title: "Phòng", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "MaBenhAn", Title: "Mã BA", Width: 80, Sortable: true, Template: this.maBenhAnTemplate},
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 80, Sortable: true},
      { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true},
      { Field: "NgaySinh", Title: "Ngày sinh", Width: 80, Sortable: true, Template: this.ngaySinhTemplate},
      { Field: "GioiTinh", Title: "Giới tính", Width: 80, Sortable: true },
      // { Field: "NgayYLenh", Title: "Ngày sinh", Width: 80, Sortable: true, Template: this.ngayYLenhTemplate},
      { Field: "BacSi", Title: "Bác sĩ", Width: 120, Sortable: true},
      { Field: "YTa", Title: "Y tá", Width: 120, Sortable: true},
      { Field: "SoLuong", Title: "Sl (Hoàn thành/tổng)", Width: 120, Sortable: false}
    ];

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '' && !p.Hidden);
  }

  ganGiaTriNgayYLenh()
  {  
    this.tongHopYLenhTimKiem.NgayYLenh = this.tongHopYLenhTimKiem.NgayYLenh == null ? new Date() : this.tongHopYLenhTimKiem.NgayYLenh;
    this.dateLinkText=this.formatDateLink(this.tongHopYLenhTimKiem.NgayYLenh);
  }

  searchChanges(event) {
    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
      this.timKiemNangCao();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.tongHopYLenhTimKiem.SearchString = null;
    this.gridChild.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.tongHopYLenhTimKiem.NgayYLenh != null) {
      this.tongHopYLenhTimKiem.strNgayYLenh = CommonService.formatDateTime(this.tongHopYLenhTimKiem.NgayYLenh, "mm/dd/yyyy");
    }
    else {
      this.tongHopYLenhTimKiem.strNgayYLenh = null;
    }

    var queryString = JSON.stringify(this.tongHopYLenhTimKiem);
    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringDanhSachTongHopYLenh",queryString);
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
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xemChiTiet(dataItem){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      //this.router.navigate([this.baseRoute + "/chi-tiet/" + dataItem.Id]);
      var ngayYLenh = new Date(dataItem.NgayYLenh);
      var ngayYLenhDate = ngayYLenh.getDate();
      var ngayYLenhMonth = ngayYLenh.getMonth() + 1;
      var ngayYLenhYear = ngayYLenh.getFullYear();
      var strNgayYLenh = ngayYLenhMonth + "." + ngayYLenhDate + "." + ngayYLenhYear; //CommonService.formatDateTime(new Date(ngayYLenhYear, ngayYLenhMonth, ngayYLenhDate), "mm/dd/yyyy");
      //let ngayYLenh = CommonService.formatDateTime(, "mm/dd/yyyy");
      this.router.navigate([this.baseRoute + "/chi-tiet"], { queryParams: { NoiTruBenhAnId: dataItem.Id, strNgayDieuTri: strNgayYLenh } });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  // xử lý date
  changeDateLink(event:any){
    this.tongHopYLenhTimKiem.NgayYLenh=event;
    //this.dateLinkText=this.formatDateLink(event);
    this.ganGiaTriNgayYLenh();
    this.timKiemNangCao();
  }

  prevDateLink(){
    this.tongHopYLenhTimKiem.NgayYLenh=addDays(this.tongHopYLenhTimKiem.NgayYLenh,-1);
    //this.dateLinkText=this.formatDateLink(this.tongHopYLenhTimKiem.NgayYLenh);
    this.ganGiaTriNgayYLenh();
    this.timKiemNangCao();
  }

  nextDateLink(){
    this.tongHopYLenhTimKiem.NgayYLenh=addDays(this.tongHopYLenhTimKiem.NgayYLenh,1);
    //this.dateLinkText=this.formatDateLink(this.tongHopYLenhTimKiem.NgayYLenh);
    this.ganGiaTriNgayYLenh();
    this.timKiemNangCao();
  }

  formatDateLink(date: Date) {
    return "<strong>" + this.intl.formatDate(date, "dd/MM/yyyy") + "</strong>";
  }
}
