import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import icRestore from '@iconify/icons-ic/restore';
import icDelete from '@iconify/icons-ic/delete';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { CongNoBaoHiemTuNhanTimKiem } from '../cong-no-bao-hiem-tu-nhan.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CongNoBaoHiemTuNhanLichSuPopupComponent } from '../cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component';
import { MatDialog } from '@angular/material';
import { CongNoBaoHiemTuNhanThuNoPopupComponent } from '../cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component';
import { LoaiTienTe, TrangThaiGachNo } from 'src/app/shared/enum/gach-no.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-cong-no-bao-hiem-tu-nhan-list',
  templateUrl: './cong-no-bao-hiem-tu-nhan-list.component.html',
  styleUrls: ['./cong-no-bao-hiem-tu-nhan-list.component.scss']
})
export class CongNoBaoHiemTuNhanListComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;
  icRestore = icRestore;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icFileExcel = icFileExcel;

  documentType: DocumentType;
  gridColumns: any[] = [];
  searchCtrl = new FormControl();
  timKiemNangCaoObj: CongNoBaoHiemTuNhanTimKiem = new CongNoBaoHiemTuNhanTimKiem();
  baseRoute: string = "/ke-toan/cong-no-bhtn";
  loaiTienTeUSD: LoaiTienTe = LoaiTienTe.USD;
  trangThaiNhapLieu: TrangThaiGachNo = TrangThaiGachNo.NhapLieu;
  trangThaiXacNhanNhapLieu: TrangThaiGachNo = TrangThaiGachNo.XacNhanNhapLieu;
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;

  @ViewChild('soChungTuTemplate', { static: true }) soChungTuTemplate: TemplateRef<any>;
  @ViewChild('ngayChungTuTemplate', { static: true }) ngayChungTuTemplate: TemplateRef<any>;
  @ViewChild('ngayHoaDonTemplate', { static: true }) ngayHoaDonTemplate: TemplateRef<any>;
  @ViewChild('tienHachToanTemplate', { static: true }) tienHachToanTemplate: TemplateRef<any>;
  @ViewChild('tienThueHachToanTemplate', { static: true }) tienThueHachToanTemplate: TemplateRef<any>;
  @ViewChild('tongTienHachToanTemplate', { static: true }) tongTienHachToanTemplate: TemplateRef<any>;
  @ViewChild('ngayXacNhanNhapLieuTemplate', { static: true }) ngayXacNhanNhapLieuTemplate: TemplateRef<any>;


  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;  

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  constructor(private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.CongNoBhtn;
    let hasLocalSearchString = false;

    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringCongNoBaoHiemTuNhanList");
        if (additionalSearchString != null) {
          hasLocalSearchString = true;
          this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
          // kiểm tra ngày CT
          if(this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay != '')
          {
            this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate);
          }
          if(this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay != '')
          {
            this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate);
          }

          // kiểm tra ngày HD
          if(this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay != '')
          {
            this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate);
          }
          if(this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay != '')
          {
            this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate);
          }
          this.gridChild.additionalSearchString = additionalSearchString;
        }
      }
    }
    if(!hasLocalSearchString)
    {
      LocalStorageHelper.removeItem("additionalSearchStringCongNoBaoHiemTuNhanList");
    }

    this.gridColumns = [
      { Field: "SoChungTu", Title: "Số CT", Width: 80, Sortable: true, Template: this.soChungTuTemplate},
      { Field: "TenLoaiDoiTuong", Title: "Loại ĐT", Width: 90, Sortable: true},
      { Field: "LoaiThuChi", Title: "Loại T/C", Width: 90, Sortable: true, ShowTooltip: true},
      { Field: "NgayChungTu", Title: "Ngày CT", Width: 80, Sortable: true, Template: this.ngayChungTuTemplate},
      { Field: "TaiKhoan", Title: "Tài khoản", Width: 90, Sortable: true},
      { Field: "DienGiai", Title: "Diễn giải", Width: 120, Sortable: true, ShowTooltip: true },
      { Field: "VAT", Title: "VAT", Width: 50, Sortable: true },

      { Field: "KhoanMucPhi", Title: "Khoản mục phí", Width: 100, Sortable: true, ShowTooltip: true},
      { Field: "TienHachToan", Title: "Tiền HT", Width: 120, Sortable: true, Template: this.tienHachToanTemplate },
      { Field: "TienThueHachToan", Title: "Tiền thuế HT", Width: 120, Sortable: true, Template: this.tienThueHachToanTemplate },
      { Field: "TongTienHachToan", Title: "Tổng tiền HT", Width: 120, Sortable: true, Template: this.tongTienHachToanTemplate },

      { Field: "SoHoaDon", Title: "Số HĐ", Width: 90, Sortable: true},
      { Field: "NgayHoaDon", Title: "Ngày HĐ", Width: 80, Sortable: true, Template: this.ngayHoaDonTemplate },
      { Field: "MaKhachHang", Title: "Mã ĐT", Width: 90, Sortable: true },
      { Field: "TenKhachHang", Title: "Tên ĐT", Width: 130, Sortable: true, ShowTooltip: true },
      { Field: "MaSoThue", Title: "MST", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "TenTrangThai", Title: "Trạng thái", Width: 125, Sortable: true, Template: this.trangThaiTemplate },
      { Field: "NguoiXacNhanNhapLieu", Title: "Người xác nhận nhập liệu", Width: 90, Sortable: true, ShowTooltip: true},
      { Field: "NgayXacNhanNhapLieu", Title: "Ngày xác nhận nhập liệu", Width: 80, Sortable: true, Template: this.ngayXacNhanNhapLieuTemplate},
      { Field: "Action", Title: "", Width: 80, Sortable: true, Template: this.actionTemplate}
    ];

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
  }

  searchChanges(event){
    if(event != undefined && (event == null || event == ""))
    {
      this.gridChild.searchString = null;
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

  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    // kiểm tra ngày CT
    if (this.timKiemNangCaoObj.TuNgayDenNgayCT != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgayCT != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay = null;
    }

    // kiểm tra ngày HD
    if (this.timKiemNangCaoObj.TuNgayDenNgayHD != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgayHD != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay = null;
    }

    var queryString = JSON.stringify(this.timKiemNangCaoObj);
    this.gridChild._additionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringCongNoBaoHiemTuNhanList",queryString);
    this.gridChild.search();
  }

  showPopupLichSu(id: number = 0) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.dialog.open(CongNoBaoHiemTuNhanLichSuPopupComponent, {
        disableClose: false,
        width: '1200px',
        data: { Id: id }
      }).afterClosed().subscribe(result => {
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupThongTinThuNo(id: number = 0){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.dialog.open(CongNoBaoHiemTuNhanThuNoPopupComponent, {
        disableClose: false,
        width: '1600px',
        data: { Id: id }
      }).afterClosed().subscribe(result => {
        this.gridChild.search();
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaGachNo(id: number)
  {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {

      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
      }).afterClosed().subscribe(result => {
        if (result == 'Yes') {
          self.apiService.delete<boolean>("GachNo/XuLyXoaThongTinThuNo?id=" + id)
            .subscribe(
              () => {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
                this.gridChild.search();
              },
              (err: any) => {
                self.notificationService.showError(err.Message);
              });
        }
      });
  } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
  }
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("GachNo/ExportGachNo", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "GachNo" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
