import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { FormControl } from '@angular/forms';
import { SortDescriptor } from '@progress/kendo-data-query';
import { NhapKhoMauTimKiem } from '../../../nhap-xuat/mau/mau.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
  selector: 'app-nhap-gia-mau-list',
  templateUrl: './nhap-gia-mau-list.component.html',
  styleUrls: ['./nhap-gia-mau-list.component.scss']
})
export class NhapGiaMauListComponent implements OnInit {

  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icAdd = icAdd;
  icDelete = icDelete;

  searchCtrl = new FormControl();
  documentType: DocumentType;
  baseRoute: string = "/ke-toan/nhap-gia-mau";

  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";
  sort: SortDescriptor[] = [{
    field: 'TinhTrang',
    dir: 'asc'
  }];

  timKiemObj: NhapKhoMauTimKiem = new NhapKhoMauTimKiem();
  
  @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
  @ViewChild('ngayHoaDonTemplate', { static: true }) ngayHoaDonTemplate: TemplateRef<any>;
  @ViewChild('ngayNhapTemplate', { static: true }) ngayNhapTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild('ngaySanXuatTemplate', { static: true }) ngaySanXuatTemplate: TemplateRef<any>;
  @ViewChild('hanSuDungTemplate', { static: true }) hanSuDungTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('donGiaDVTemplate', { static: true }) donGiaDVTemplate: TemplateRef<any>;
  @ViewChild('donGiaBHTemplate', { static: true }) donGiaBHTemplate: TemplateRef<any>;
  @ViewChild('gridParent', { static: true }) gridChild: GridComponent;
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DuyetNhapKhoMau;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachNhapGiaMau");
        if (additionalSearchString != null) {
          this.timKiemObj = JSON.parse(additionalSearchString);
          if(this.timKiemObj.TuNgayDenNgay.TuNgay != null && this.timKiemObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemObj.TuNgayDenNgay.TuNgay != '')
          {
            this.timKiemObj.TuNgayDenNgay.startDate = new Date(this.timKiemObj.TuNgayDenNgay.startDate);
          }
          if(this.timKiemObj.TuNgayDenNgay.DenNgay != null && this.timKiemObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemObj.TuNgayDenNgay.DenNgay != '')
          {
            this.timKiemObj.TuNgayDenNgay.endDate = new Date(this.timKiemObj.TuNgayDenNgay.endDate);
          }
          this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if(!hasLocalSearchString)
    {
      this.gridChild.additionalSearchString = null;
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachNhapGiaMau");
    }

    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true, Template: this.soPhieuTemplate},
      { Field: "SoHoaDon", Title: "Số Hóa Đơn", Width: 100, Sortable: true},
      { Field: "NgayHoaDon", Title: "Ngày Hóa Đơn", Width: 120, Sortable: true, Template: this.ngayHoaDonTemplate},
      { Field: "NhaCungCap", Title: "Nhà cung cấp", Width: 180, Sortable: true},
      { Field: "GhiChu", Title: "Ghi chú", Width: 160, Sortable: true },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 120, Sortable: true, Template: this.trangThaiTemplate },
      { Field: "NguoiNhap", Title: "Người nhập", Width: 140, Sortable: true},
      { Field: "NgayNhap", Title: "Ngày nhập", Width: 120, Sortable: true, Template: this.ngayNhapTemplate},
      { Field: "NguoiDuyet", Title: "Người duyệt", Width: 140, Sortable: false},
      { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 120, Sortable: true, Template: this.ngayDuyetTemplate}
    ];

    this.gridChildColumns = [
      { Field: "MaTuiMau", Title: "Mã túi máu", Width: 80, Sortable: true},
      { Field: "ChePhamMau", Title: "Chế phẩm máu", Width: 180, Sortable: true},
      { Field: "NgaySanXuat", Title: "Ngày sản xuất", Width: 120, Sortable: true, Template: this.ngaySanXuatTemplate},
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 120, Sortable: true, Template: this.hanSuDungTemplate },
      { Field: "DonGiaDichVu", Title: "Đơn giá DV", Width: 140, Sortable: true, Template: this.donGiaDVTemplate},
      { Field: "DonGiaBaoHiem", Title: "Đơn giá BH", Width: 140, Sortable: true, Template: this.donGiaBHTemplate}
    ]

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
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
    this.timKiemObj.SearchString = null;
    this.gridChild.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.timKiemObj.TuNgayDenNgay != null && this.timKiemObj.TuNgayDenNgay.startDate != null) {
      this.timKiemObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemObj.TuNgayDenNgay.TuNgay = null;
    }
    if (this.timKiemObj.TuNgayDenNgay != null && this.timKiemObj.TuNgayDenNgay.endDate != null) {
      this.timKiemObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemObj.TuNgayDenNgay.DenNgay = null;
    }

    var queryString = JSON.stringify(this.timKiemObj);
    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringDanhSachNhapGiaMau",queryString);
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
      this.apiService.postExportExcel<string>("NhapKhoMau/ExportDanhSachNhapKhoMau", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "NhapKhoMau" + dateTimeNow.getFullYear() + ".xlsx");
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
      this.router.navigate([this.baseRoute + "/chi-tiet/" + dataItem.Id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
