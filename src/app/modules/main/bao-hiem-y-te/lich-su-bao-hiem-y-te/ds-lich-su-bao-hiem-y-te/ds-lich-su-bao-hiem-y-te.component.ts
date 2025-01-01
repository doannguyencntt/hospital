import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import icSearch from "@iconify/icons-ic/twotone-search";
import { FormControl } from '@angular/forms';
import { TagItem, TimKiemLichSuBaoHiemYTe, DsLSBaoHiemYTe } from '../lich-su-bao-hiem-y-te';
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ActivatedRoute, Router } from '@angular/router';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

@Component({
  selector: 'app-ds-lich-su-bao-hiem-y-te',
  templateUrl: './ds-lich-su-bao-hiem-y-te.component.html',
  styleUrls: ['./ds-lich-su-bao-hiem-y-te.component.scss']
})
export class DsLichSuBaoHiemYTeComponent implements OnInit {
  public dsBaoHiemYTe = {} as DsLSBaoHiemYTe;
  timKiemDSBaoHiemYTe = new TimKiemLichSuBaoHiemYTe();
  listTagShowOnHeader: Array<TagItem>;
  listTagSearch: Array<TagItem>;
  showCancelSearch: boolean = false;
  searchString: string;
  icFileExcel = icFileExcel;
  searchCtrl = new FormControl();
  queryStrings: any;
  gridDanhSachBHYTColumns: any;
  documentType: DocumentType;
  icSearch = icSearch;
  icFilterList = icFilterList;
  holdQuery: any = null;
  query: string = null;
  additionalSearchString: string = null;
  baseRoute: string = "/lich-su-bao-hiem-y-te";

  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  constructor(private router: Router, private authService: AuthService, private notificationService: NotificationService, private dialog: MatDialog, private location: Location, private route: ActivatedRoute, private apiService: ApiService) { }
  sort = [{
    field: 'ThoiGianTiepNhanStr',
    dir: 'desc'
  }];

  ngOnInit() {
    this.documentType = DocumentType.GuiBaoHiemYTe;
    let dateNow = new Date();

    this.timKiemDSBaoHiemYTe.TuNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.timKiemDSBaoHiemYTe.DenNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);

    if (this.timKiemDSBaoHiemYTe.TuNgay != null) {
      this.timKiemDSBaoHiemYTe.FromDate = CommonService.formatDateTime(this.timKiemDSBaoHiemYTe.TuNgay, "dd/mm/yyyy");
    } else {
      this.timKiemDSBaoHiemYTe.FromDate = null;
    }

    if (this.timKiemDSBaoHiemYTe.DenNgay != null) {
      this.timKiemDSBaoHiemYTe.ToDate = CommonService.formatDateTime(this.timKiemDSBaoHiemYTe.DenNgay, "dd/mm/yyyy");
    } else {
      this.timKiemDSBaoHiemYTe.ToDate = null;
    }

    this.backWithSearch();
    this.gridDanhSachBHYTColumns = [
      { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.actionTemplate, LinkDetail: true },
      { Field: "MaBN", Title: "Mã NB", Width: 100, Sortable: true },
      { Field: "HoTen", Title: "Tên Người Bệnh", Width: 200, Sortable: true },
      { Field: "NamSinh", Title: "Năm Sinh", Width: 100, Sortable: true },
      { Field: "GioiTinh", Title: "Giới tính", Width: 100, Sortable: true },
      { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 200, Sortable: true },
      { Field: "ThoiGianTiepNhanStr", Title: "Tiếp nhận lúc", Width: 150, Sortable: true },
      { Field: "MucHuong", Title: "Mức Hưởng", Width: 150, Sortable: true },
    ];

    var queryString = JSON.stringify(this.timKiemDSBaoHiemYTe);
    this.gridChild.additionalSearchString = queryString;
  }

  view(id: any) {
    this.router.navigateByUrl("/lich-su-bao-hiem-y-te/thong-tin-chi-tiet-lich-su-bhyt/" + id + "?holdQuery=true");
  }

  backWithSearch() {
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }
    if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringLichSuBHYT') != null) {
      this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringLichSuBHYT');

      if (this.additionalSearchString != null) {
        this.timKiemDSBaoHiemYTe = JSON.parse(this.additionalSearchString);
        this.searchString = this.timKiemDSBaoHiemYTe.SearchString;
        this.timKiemDSBaoHiemYTe.TimKiem = this.timKiemDSBaoHiemYTe.SearchString;

        if (this.timKiemDSBaoHiemYTe.TuNgay != undefined && this.timKiemDSBaoHiemYTe.TuNgay != null && this.timKiemDSBaoHiemYTe.TuNgay != "") {
          this.timKiemDSBaoHiemYTe.TuNgay = new Date(this.timKiemDSBaoHiemYTe.TuNgay);
        }
        if (this.timKiemDSBaoHiemYTe.DenNgay != undefined && this.timKiemDSBaoHiemYTe.DenNgay != null && this.timKiemDSBaoHiemYTe.DenNgay != "") {
          this.timKiemDSBaoHiemYTe.DenNgay = new Date(this.timKiemDSBaoHiemYTe.DenNgay);
        }
        this.gridChild.additionalSearchString = this.additionalSearchString;
      }
    } else {
      LocalStorageHelper.setItem('additionalSearchStringBHYT', null);
      this.additionalSearchString = JSON.stringify(this.timKiemDSBaoHiemYTe);
    }
  }

  closeMenu() {
    this.trigger.closeMenu();
  }

  timKiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    if (this.timKiemDSBaoHiemYTe.TuNgay != null) {
      this.timKiemDSBaoHiemYTe.FromDate = CommonService.formatDateTime(this.timKiemDSBaoHiemYTe.TuNgay, "dd/mm/yyyy");
    } else {
      this.timKiemDSBaoHiemYTe.FromDate = null;
    }

    if (this.timKiemDSBaoHiemYTe.DenNgay != null) {
      this.timKiemDSBaoHiemYTe.ToDate = CommonService.formatDateTime(this.timKiemDSBaoHiemYTe.DenNgay, "dd/mm/yyyy");
    } else {
      this.timKiemDSBaoHiemYTe.ToDate = null;
    }
    if (this.searchString != null) {
      this.timKiemDSBaoHiemYTe.TimKiem = this.searchString;
    }

    this.timKiemDSBaoHiemYTe.SearchString = this.searchString;
    var queryString = JSON.stringify(this.timKiemDSBaoHiemYTe);
    this.gridChild.searchString = this.searchString;
    this.gridChild._additionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringLichSuBHYT", queryString);
    this.gridChild.search();
    this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.timKiemNangCao();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    if (this.timKiemDSBaoHiemYTe.SearchString == "" || this.timKiemDSBaoHiemYTe.SearchString == null) {
      this.gridChild.searchString = "";
      let xuatKhoClone: TimKiemLichSuBaoHiemYTe = JSON.parse(JSON.stringify(this.timKiemDSBaoHiemYTe));
      let queryForHole = JSON.parse(JSON.stringify(xuatKhoClone));
      LocalStorageHelper.setItem('additionalSearchStringLichSuBHYT', JSON.stringify(queryForHole)
      );

      this.gridChild.search();
    }
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

  DownloadFileExcels() {
    const self = this;
    self.showPopupLoadingData();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.postExportExcel<string>("BHYT/ExportLichSuBaoHiemYTe", this.gridChild._gridQueryInfo).subscribe((resultData) => {
        self.closePopupLoadingData();
        const dateTimeNow = new Date();
        CommonService.downLoadFile(
          resultData,
          "application/vnd.ms-excel",
          "LichSuGiamDinhBHYT" + dateTimeNow.getFullYear() + ".xlsx"
        );
      },
        (err: any) => {
          self.notificationService.showError(err.Message);
          self.closePopupLoadingData();
        }
      );
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang xuất excel..." },
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }
}
