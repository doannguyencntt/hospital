import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
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
import { DSNoiTruTimKiemTimKiemTrangThai } from '../../dieu-tri-noi-tru.model';


@Component({
  selector: 'app-danh-sach-dieu-tri-noi-tru',
  templateUrl: './danh-sach-dieu-tri-noi-tru.component.html',
  styleUrls: ['./danh-sach-dieu-tri-noi-tru.component.scss']
})
export class DanhSachDieuTriNoiTruComponent implements OnInit {
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;

  searchCtrl = new FormControl();
  documentType: DocumentType;
  gridColumns: any[] = [];
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";
  theFirstSearch: any;

  dsNoiTruTimKiem: DSNoiTruTimKiemTimKiemTrangThai = new DSNoiTruTimKiemTimKiemTrangThai();
  danhSachDieuTriNoiTruTuNgay: any;
  danhSachDieuTriNoiTruDenNgay: any;
  
  danhSachDieuTriNoiTruTuNgayRaVien: any;
  danhSachDieuTriNoiTruDenNgayRaVien: any;

  baseRoute: string = "/dieu-tri-noi-tru";
  urlGetDataGridParentAsync = "DieuTriNoiTru/GetDanhSachDieuTriNoiTruForGrid";
  urlGetTotalPageGridParentAsync = "DieuTriNoiTru/GetTotalPagesDanhSachDieuTriNoiTruForGrid";

  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild('thoiGianTiepNhanTemplate', { static: true }) thoiGianTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('nhapVienTiepNhanTemplate', { static: true }) nhapVienTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('capCuuTemplate', { static: true }) capCuuTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('soTienConLaiTemplate', { static: true }) soTienConLaiTemplate: TemplateRef<any>;

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
    this.documentType = DocumentType.DanhSachDieuTriNoiTru;
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachNoiTru");
        if (additionalSearchString != null) {
          this.dsNoiTruTimKiem = JSON.parse(additionalSearchString);

          // if (this.dsNoiTruTimKiem.TuNgayDenNgay.TuNgay != null && this.dsNoiTruTimKiem.TuNgayDenNgay.TuNgay != 'null' && this.dsNoiTruTimKiem.TuNgayDenNgay.TuNgay != '') {
          //   this.dsNoiTruTimKiem.TuNgayDenNgay.startDate = new Date(this.dsNoiTruTimKiem.TuNgayDenNgay.startDate);
          // }
          // if (this.dsNoiTruTimKiem.TuNgayDenNgay.DenNgay != null && this.dsNoiTruTimKiem.TuNgayDenNgay.DenNgay != 'null' && this.dsNoiTruTimKiem.TuNgayDenNgay.DenNgay != '') {
          //   this.dsNoiTruTimKiem.TuNgayDenNgay.endDate = new Date(this.dsNoiTruTimKiem.TuNgayDenNgay.endDate);
          // }

          // this.convertDateTimeToUTC();
          // this.theFirstSearch = JSON.stringify(this.dsNoiTruTimKiem);
          // this.reverseDateTime();

          // this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
          // hasLocalSearchString = true;
        }
      }
    }
    // if (!hasLocalSearchString) {
    //   this.gridChild.additionalSearchString = null;
    //   LocalStorageHelper.removeItem("additionalSearchStringDanhSachNoiTru");
    // }

    this.convertDateTimeToUTC();
    this.theFirstSearch = JSON.stringify(this.dsNoiTruTimKiem);
    this.reverseDateTime();

    this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;

    this.gridColumns = [
      { Field: "Phong", Title: "Phòng", Width: 80, Sortable: true },      
      { Field: "MaTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
      { Field: "SoBenhAn", Title: "Số BA", Width: 80, Sortable: true },      
      { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true },
      { Field: "NamSinhDisplay", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "GioiTinhDisplay", Title: "GT", Width: 60, Sortable: true },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 60, Sortable: true },
      { Field: "CapCuu", Title: "CC", Width: 50, Sortable: true, Template: this.capCuuTemplate },
      { Field: "ChanDoan", Title: "Chẩn đoán", Width: 120, Sortable: true },      

      // { Field: "KhoaNhapVien", Title: "Khoa nhập viện", Width: 120, Sortable: true },
      // { Field: "ThoiGianTiepNhanDisplay", Title: "Thời gian tiếp nhận", Width: 120, Sortable: true, Template: this.thoiGianTiepNhanTemplate },
      
      { Field: "ThoiGianNhapVienDisplay", Title: "Thời gian nhập viện", Width: 120, Sortable: true, Template: this.nhapVienTiepNhanTemplate },
      { Field: "ThoiGianRaVienDisplay", Title: "Thời gian ra viện", Width: 120, Sortable: true },
     

      // { Field: "SoTienConLai", Title: "Số Tiền", Width: 100, Sortable: false , Template: this.soTienConLaiTemplate},    
      { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: false, Template: this.trangThaiTemplate },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 120, Sortable: true },
    ];
    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
    // this.theFirstSearch = JSON.stringify(this.dsNoiTruTimKiem);
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
    this.dsNoiTruTimKiem.SearchString = null;
    this.gridChild.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    // if (this.dsNoiTruTimKiem.TuNgayDenNgay != null && this.dsNoiTruTimKiem.TuNgayDenNgay.startDate != null) {
    //   this.dsNoiTruTimKiem.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.dsNoiTruTimKiem.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.dsNoiTruTimKiem.TuNgayDenNgay.TuNgay = null;
    // }
    // if (this.dsNoiTruTimKiem.TuNgayDenNgay != null && this.dsNoiTruTimKiem.TuNgayDenNgay.endDate != null) {
    //   this.dsNoiTruTimKiem.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.dsNoiTruTimKiem.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.dsNoiTruTimKiem.TuNgayDenNgay.DenNgay = null;
    // }

    this.convertDateTimeToUTC();

    var queryString = JSON.stringify(this.dsNoiTruTimKiem);
    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;

    this.reverseDateTime();

    LocalStorageHelper.setItem("additionalSearchStringDanhSachNoiTru", queryString);
    this.gridChild.search();
  }

  convertDateTimeToUTC() {
		if(this.dsNoiTruTimKiem.TuNgayDenNgay.startDate) {
			this.danhSachDieuTriNoiTruTuNgay = new Date(this.dsNoiTruTimKiem.TuNgayDenNgay.startDate); 
			this.dsNoiTruTimKiem.TuNgayDenNgay.startDate = new Date(Date.UTC(this.danhSachDieuTriNoiTruTuNgay.getFullYear(), this.danhSachDieuTriNoiTruTuNgay.getMonth(), this.danhSachDieuTriNoiTruTuNgay.getDate(), this.danhSachDieuTriNoiTruTuNgay.getHours(), this.danhSachDieuTriNoiTruTuNgay.getMinutes()));
		}

		if(this.dsNoiTruTimKiem.TuNgayDenNgay.endDate) {
			this.danhSachDieuTriNoiTruDenNgay = new Date(this.dsNoiTruTimKiem.TuNgayDenNgay.endDate);
			this.dsNoiTruTimKiem.TuNgayDenNgay.endDate = new Date(Date.UTC(this.danhSachDieuTriNoiTruDenNgay.getFullYear(), this.danhSachDieuTriNoiTruDenNgay.getMonth(), this.danhSachDieuTriNoiTruDenNgay.getDate(), this.danhSachDieuTriNoiTruDenNgay.getHours(), this.danhSachDieuTriNoiTruDenNgay.getMinutes()));
		}

    if(this.dsNoiTruTimKiem.TuNgayDenNgayRaVien.startDate) {
			this.danhSachDieuTriNoiTruTuNgayRaVien = new Date(this.dsNoiTruTimKiem.TuNgayDenNgayRaVien.startDate); 
			this.dsNoiTruTimKiem.TuNgayDenNgayRaVien.startDate = new Date(Date.UTC(this.danhSachDieuTriNoiTruTuNgayRaVien.getFullYear(), this.danhSachDieuTriNoiTruTuNgayRaVien.getMonth(), this.danhSachDieuTriNoiTruTuNgayRaVien.getDate(), this.danhSachDieuTriNoiTruTuNgayRaVien.getHours(), this.danhSachDieuTriNoiTruTuNgayRaVien.getMinutes()));
		}

		if(this.dsNoiTruTimKiem.TuNgayDenNgayRaVien.endDate) {
			this.danhSachDieuTriNoiTruDenNgayRaVien = new Date(this.dsNoiTruTimKiem.TuNgayDenNgayRaVien.endDate);
			this.dsNoiTruTimKiem.TuNgayDenNgayRaVien.endDate = new Date(Date.UTC(this.danhSachDieuTriNoiTruDenNgayRaVien.getFullYear(), this.danhSachDieuTriNoiTruDenNgayRaVien.getMonth(), this.danhSachDieuTriNoiTruDenNgayRaVien.getDate(), this.danhSachDieuTriNoiTruDenNgayRaVien.getHours(), this.danhSachDieuTriNoiTruDenNgayRaVien.getMinutes()));
		}
	}

	reverseDateTime() {
		if(this.dsNoiTruTimKiem.TuNgayDenNgay.startDate) {
			this.dsNoiTruTimKiem.TuNgayDenNgay.startDate = new Date(this.danhSachDieuTriNoiTruTuNgay.getFullYear(), this.danhSachDieuTriNoiTruTuNgay.getMonth(), this.danhSachDieuTriNoiTruTuNgay.getDate(), this.danhSachDieuTriNoiTruTuNgay.getHours(), this.danhSachDieuTriNoiTruTuNgay.getMinutes());
		}

		if(this.dsNoiTruTimKiem.TuNgayDenNgay.endDate) {
			this.dsNoiTruTimKiem.TuNgayDenNgay.endDate = new Date(this.danhSachDieuTriNoiTruDenNgay.getFullYear(), this.danhSachDieuTriNoiTruDenNgay.getMonth(), this.danhSachDieuTriNoiTruDenNgay.getDate(), this.danhSachDieuTriNoiTruDenNgay.getHours(), this.danhSachDieuTriNoiTruDenNgay.getMinutes());
		}

    if(this.dsNoiTruTimKiem.TuNgayDenNgayRaVien.startDate) {
			this.dsNoiTruTimKiem.TuNgayDenNgayRaVien.startDate = new Date(this.danhSachDieuTriNoiTruTuNgayRaVien.getFullYear(), this.danhSachDieuTriNoiTruTuNgayRaVien.getMonth(), this.danhSachDieuTriNoiTruTuNgayRaVien.getDate(), this.danhSachDieuTriNoiTruTuNgayRaVien.getHours(), this.danhSachDieuTriNoiTruTuNgayRaVien.getMinutes());
		}

		if(this.dsNoiTruTimKiem.TuNgayDenNgayRaVien.endDate) {
			this.dsNoiTruTimKiem.TuNgayDenNgayRaVien.endDate = new Date(this.danhSachDieuTriNoiTruDenNgayRaVien.getFullYear(), this.danhSachDieuTriNoiTruDenNgayRaVien.getMonth(), this.danhSachDieuTriNoiTruDenNgayRaVien.getDate(), this.danhSachDieuTriNoiTruDenNgayRaVien.getHours(), this.danhSachDieuTriNoiTruDenNgayRaVien.getMinutes());
		}
	}
  
  xuLyXuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("DieuTriNoiTru/ExportDanhSachNoiTru", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DanhSachDieuTriNoiTru" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xemChiTiet(yeuCauTiepNhanId: number = null) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate(["/dieu-tri-noi-tru/chi-tiet-dieu-tri/" + yeuCauTiepNhanId]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  xemChiTietChuyenKhoa(yeuCauTiepNhanId: number = null) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate(["/dieu-tri-noi-tru/chi-tiet-dieu-tri/" + yeuCauTiepNhanId + "/" + 'chuyenKhoa']);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
