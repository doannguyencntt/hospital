import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { FormControl } from '@angular/forms';
import { SortDescriptor } from '@progress/kendo-data-query';
import { MatMenuTrigger } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { LichSuTiepNhan } from '../lich-su-tiep-nhan.model';
import { TagItem } from '../../danh-sach-cho-kham/danh-sach-cho-kham.model';

import icicclose from '@iconify/icons-ic/twotone-close';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icBlock from '@iconify/icons-ic/twotone-block';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icPrint from '@iconify/icons-ic/twotone-print';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { Location } from '@angular/common';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { InBangKeChiPhiLSKhamBenhComponent } from '../popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component';
import { LichSuTiepNhanPopupComponent } from '../lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ThongTinPhieuPdfPopupComponent } from '../../../thu-chi/thu-chi-vien-phi/common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { XemTruocBangKeChiPhiPopupComponent } from '../../xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component';
@Component({
  selector: 'app-lich-su-tiep-nhan-list',
  templateUrl: './lich-su-tiep-nhan-list.component.html',
  styleUrls: ['./lich-su-tiep-nhan-list.component.scss']
})

export class LichSuTiepNhanListComponent implements OnInit {
  documentType: DocumentType;
  expression: boolean = false;
  gridColumns: any[] = [];
  icSearch = icSearch;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icicclose = icicclose;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icEdit = icEdit;
  icBlock = icBlock;
  icPrint = icPrint;
  icFileExcel = icFileExcel;
  searchString: string;
  hostingName: string;
  soPhanTramHuongBHYT: number = null;
  lichSuTiepNhan: LichSuTiepNhan;
  _gridColumns: any[] = [];
  showCancelSearch: boolean = false;
  listTagShowOnHeader: Array<TagItem>;
  listTagSearch: Array<TagItem>;
  addtionStringDefault: string = null;

  @Input() sort: SortDescriptor[] = [{
    field: "ThoiDiemTiepNhan",
    dir: 'desc'
  }
  ];
  baseRoute: string = "/lich-su-tiep-nhan";
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('thoiDiemTiepNhanTemplate', { static: true }) thoiDiemTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('chiTietTemplate', { static: true }) chiTietTemplate: TemplateRef<any>;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('hienThiNgayThangNamTemplate', { static: true }) hienThiNgayThangNamTemplate: TemplateRef<any>;
  
  searchCtrl = new FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private apiService: ApiService,
    private location: Location,
    private route: ActivatedRoute,
  ) {

  }
  ngOnInit() {
    this.lichSuTiepNhan = new LichSuTiepNhan();
    let dateNow = new Date();
    this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    if (this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat != null) {
      this.lichSuTiepNhan.ThoiDiemTiepNhanTu = CommonService.formatDateTime(
        this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.lichSuTiepNhan.ThoiDiemTiepNhanTu = null;
    }

    if (this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat != null) {
      this.lichSuTiepNhan.ThoiDiemTiepNhanDen = CommonService.formatDateTime(
        this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.lichSuTiepNhan.ThoiDiemTiepNhanDen = null;
    }
    var queryString = JSON.stringify(this.lichSuTiepNhan);
    this.addtionStringDefault = queryString;
    this.documentType = DocumentType.LichSuTiepNhan;
    this.backWithSearch();
    this.gridColumns = [
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.chiTietTemplate },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 100, Sortable: true },
      { Field: "HoTen", Title: "Tên Người Bệnh", Width: 180, Sortable: true },
      { Field: "NamSinh", Title: "Năm Sinh", Width: 135, Sortable: true, Template : this.hienThiNgayThangNamTemplate },
      { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 150, Sortable: true },
      { Field: "TenNhanVienTiepNhan", Title: "Người tiếp nhận", Width: 180, Sortable: true },
      { Field: "ThoiDiemTiepNhan", Title: "Tiếp Nhận Lúc", Width: 190, Sortable: true, Template: this.thoiDiemTiepNhanTemplate },
      { Field: "TrieuChungTiepNhan", Title: "Lý Do Khám Bệnh", Width: 145, Sortable: true },
      { Field: "DoiTuong", Title: "Đối Tượng", Width: 140, Sortable: true },
      { Field: "CoBaoHiemTuNhan", Title: "Bảo Hiểm Tư Nhân", Width: 140, Sortable: true },
      { Field: "TrangThaiYeuCauTiepNhan", Title: "Trạng Thái", Width: 140, Sortable: true, Template: this.trangThaiTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate }
    ];
  }
  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringLichSuTiepNhan");
        if (additionalSearchString != null) {

          this.lichSuTiepNhan = JSON.parse(additionalSearchString);
          if (this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat != undefined && this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat != null && this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat != "") {
            this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat = new Date(this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat);
          }
          else {
            this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat = null;
          }
          if (this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat != undefined && this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat != null && this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat != "") {
            this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat = new Date(this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat);
          }
          else {
            this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat = null;

          }
          this.addtionStringDefault = additionalSearchString;
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringLichSuTiepNhan");
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.TimkiemNangCao();
    }
  }

  clearSearch() {
    this.searchString = "";
    this.lichSuTiepNhan.SearchString = null;
    this.gridChild.search();
  }

  Timkiem() {
    let QueryString = null;
    this.gridChild._additionalSearchString = null;
    if (this.searchString != null) {
      QueryString = this.searchString;
    }
    this.gridChild.searchString = QueryString;
    this.gridChild.search();
  }

  TimkiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat != null) {
      this.lichSuTiepNhan.ThoiDiemTiepNhanTu = CommonService.formatDateTime(this.lichSuTiepNhan.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
    }
    else {
      this.lichSuTiepNhan.ThoiDiemTiepNhanTu = null;
    }
    if (this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat != null) {
      this.lichSuTiepNhan.ThoiDiemTiepNhanDen = CommonService.formatDateTime(this.lichSuTiepNhan.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
    }
    else {
      this.lichSuTiepNhan.ThoiDiemTiepNhanDen = null;
    }
    if (this.lichSuTiepNhan.NamSinh != null)
      this.lichSuTiepNhan.NamSinh = Math.round(this.lichSuTiepNhan.NamSinh);
    var queryString = JSON.stringify(this.lichSuTiepNhan);
    //this.gridChild.searchString = null;
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringLichSuTiepNhan", queryString);
    this.gridChild.search();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      // self.gridChild._additionalSearchString = null;
      self.TimkiemNangCao();
    }
  }

  thoiDiemTNChange() {
    this.TimkiemNangCao();
  }



  view(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate(["/lich-su-tiep-nhan/chi-tiet/" + id]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  InBangKeChiPhiKhamBenh(id: number) {
    this.dialog.open(XemTruocBangKeChiPhiPopupComponent, {
      disableClose: false,
      width: "1000px",
      data: id,
    })
      .afterClosed()
      .subscribe(result => { });
  }
  InHoSoLichSuKhamBenh(id: number, laPhieuKhamBenh: boolean) {
    // this.dialog
    //   .open(LichSuTiepNhanPopupComponent, {
    //     disableClose: true,
    //     width: "1200px",
    //     data: { id, laPhieuKhamBenh },
    //   });
    this.hostingName = "http://" + "//" + window.location.host;
    this.apiService.get<any>("LichSuTiepNhan/InPhieuLichSuCacDichVuKhamBenh?yeuCauTiepNhanId=" + id
      + "&hostingName=" + this.hostingName
      + "&header=false"
      + "&laPhieuKhamBenh=" + laPhieuKhamBenh).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null && resultData != "") {
            this.dialog
              .open(LichSuTiepNhanPopupComponent, {
                disableClose: true,
                width: "1000px",
                data: { html: resultData, Title: "THÔNG TIN LỊCH SỬ PHIẾU KHÁM BỆNH CÁC DỊCH VỤ" },
              })
              .afterClosed()
              .subscribe(() => {
              });
          }
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          };
        });
  }

  XuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("LichSuTiepNhan/ExportLichSuTiepNhan", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "LichSuTiepNhan" + dateTimeNow.getFullYear() + ".xlsx");
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
