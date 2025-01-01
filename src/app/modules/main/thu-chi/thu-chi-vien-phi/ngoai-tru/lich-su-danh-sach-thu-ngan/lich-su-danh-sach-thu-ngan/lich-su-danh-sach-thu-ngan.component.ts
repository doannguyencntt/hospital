import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { MatMenuTrigger, MatDialog } from "@angular/material";
import icSearch from "@iconify/icons-ic/twotone-search";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import icCancel from "@iconify/icons-ic/cancel";
import icicclose from "@iconify/icons-ic/twotone-close";
import { FormControl } from "@angular/forms";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { CommonService } from "src/app/core/utilities/common.helper";
import { TagItem, LichSuDanhSachThuNgan } from "../lich-su-danh-sach-thu-ngan";
import { AuthService } from "src/app/core/services/auth.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { NotificationService } from "src/app/core/services/notification.service";
import icPrint from "@iconify/icons-ic/twotone-print";
import { ViewFileCompoment } from '../view-file/view-file.component';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
@Component({
  selector: "app-lich-su-danh-sach-thu-ngan",
  templateUrl: "./lich-su-danh-sach-thu-ngan.component.html",
  styleUrls: ["./lich-su-danh-sach-thu-ngan.component.scss"],
})
export class LichSuDanhSachThuNganComponent implements OnInit {
  gridThuNganChoThuPhiColumns: any[] = [];
  icSearch = icSearch;
  icCancel = icCancel;
  listTagSearch: Array<TagItem>;
  listTagShowOnHeader: Array<TagItem>;
  lichSuDanhSachThuNgan = new LichSuDanhSachThuNgan();
  lichSuDanhSachThuNganDefault = new LichSuDanhSachThuNgan();
  showCancelSearch: boolean = false;
  searchString: string;
  icicclose = icicclose;
  searchCtrl = new FormControl();
  theFirstSearch: any;
  documentType: DocumentType;
  public keyCode: string = "Enter";
  icPrint = icPrint;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  baseRoute: string = "/lich-su-thu-ngan";
  sort = [{
    field: 'NgayThuDisplay ',
    dir: 'desc'
  }];
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<
    any
  >;
  
  @ViewChild("templateTextSoTienChoXacNhan", { static: true })
  templateTextSoTienChoXacNhan: TemplateRef<any>;
  @ViewChild("templateTextTienMat", { static: true })
  templateTextTienMat: TemplateRef<any>;
  @ViewChild("templateTextChuyenKhoan", { static: true })
  templateTextChuyenKhoan: TemplateRef<any>;
  @ViewChild("templateTextPos", { static: true }) templateTextPos: TemplateRef<
    any
  >;
  @ViewChild("templateTrangThai", { static: true })
  templateTrangThai: TemplateRef<any>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  ngOnInit() {
    this.documentType = DocumentType.LichSuThuNgan;

    let dateNow = new Date();
    this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);

    if (this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanTuFormat != null) {
      this.lichSuDanhSachThuNgan.FromDate = CommonService.formatDateTime(this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
    } else {
      this.lichSuDanhSachThuNgan.FromDate = null;
    }

    if (this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanDenFormat != null) {
      this.lichSuDanhSachThuNgan.ToDate = CommonService.formatDateTime(this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
    } else {
      this.lichSuDanhSachThuNgan.ToDate = null;
    }

    this.backWithSearch();
    this.gridThuNganChoThuPhiColumns = [
      {
        Field: "SoBLHD",
        Title: "Số BLHD",
        Width: 80,
        Sortable: true,
        Template: this.actionTemplate,
      },
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
      { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true },
      {
        Field: "NgayThuDisplay",
        Title: "Ngày thực hiện",
        Width: 150,
        Sortable: true,
      },
      {
        Field: "NguoiThu",
        Title: "Người thực hiện",
        Width: 160,
        Sortable: true,
      },
      { Field: "LyDoHuy", Title: "Lý do hủy", MinWidth: 130, Sortable: true },
      {
        Field: "ThuChiTienBenhNhanStr",
        Title: "Loại thanh toán",
        Width: 130,
        Sortable: true,
      },
      {
        Field: "SoTienThu",
        Title: "Số tiền",
        Width: 100,
        Sortable: true,
        Template: this.templateTextSoTienChoXacNhan,
      },
      {
        Field: "TienMat",
        Title: "Tiền mặt",
        Width: 100,
        Sortable: true,
        Template: this.templateTextTienMat,
      },
      {
        Field: "ChuyenKhoan",
        Title: "Chuyển khoản",
        Width: 100,
        Sortable: true,
        Template: this.templateTextChuyenKhoan,
      },
      {
        Field: "Pos",
        Title: "Pos",
        Width: 100,
        Sortable: true,
        Template: this.templateTextPos,
      },
      {
        Field: "Action",
        Title: "",
        Width: 50,
        Template: this.templateTrangThai,
      },
    ];
    
    var queryString = JSON.stringify(this.lichSuDanhSachThuNgan);
    this.gridChild.additionalSearchString = queryString;
  }

  backWithSearch() {
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringLichSuThuNgan");
        if (additionalSearchString != null) {

          this.lichSuDanhSachThuNgan = JSON.parse(additionalSearchString);
          if (this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanTuFormat != undefined && this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanTuFormat != null && this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanTuFormat != "") {
            this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanTuFormat = new Date(this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanTuFormat);
          }
          if (this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanDenFormat != undefined && this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanDenFormat != null && this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanDenFormat != "") {
            this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanDenFormat = new Date(this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanDenFormat);
          }
          this.gridChild.additionalSearchString = additionalSearchString;
        }
      }
    }
  }


  getInputSearchValue(obj: any, keyValue: any, titleValue: any) {
    let index = this.listTagSearch.findIndex((x) => x.Key == keyValue);
    if (obj !== null && obj !== undefined && obj !== "") {
      let valueFormat = undefined;
      if (typeof obj == "string" || typeof obj == "number") {
        valueFormat = obj;
      } else {
        valueFormat = CommonService.formatDateTime(obj, "dd/mm/yyyy");
      }

      if (index < 0) {
        let item = new TagItem();
        item.Key = keyValue;
        item.Value = valueFormat;
        item.Title = titleValue;
        this.listTagSearch.push(item);
      } else {
        this.listTagSearch[index].Value = valueFormat;
      }
    } else {
      if (index != -1) {
        this.listTagSearch.splice(index, 1);
      }
    }
  }

  cancelSearch() {
    this.lichSuDanhSachThuNgan = new LichSuDanhSachThuNgan();
    this.listTagSearch = new Array<TagItem>();
    this.listTagShowOnHeader = new Array<TagItem>();
    var queryString = JSON.stringify(this.lichSuDanhSachThuNgan);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
    this.showCancelSearch = false;
  }

  closeMenu() {
    this.trigger.closeMenu();
  }

  TimkiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanTuFormat != null) {
      this.lichSuDanhSachThuNgan.FromDate = CommonService.formatDateTime(
        this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.lichSuDanhSachThuNgan.FromDate = null;
    }

    if (this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanDenFormat != null) {
      this.lichSuDanhSachThuNgan.ToDate = CommonService.formatDateTime(
        this.lichSuDanhSachThuNgan.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.lichSuDanhSachThuNgan.ToDate = null;
    }

    var queryString = JSON.stringify(this.lichSuDanhSachThuNgan);
    //this.gridChild.searchString = this.searchString;
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringLichSuThuNgan", queryString);
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

  onKey(event: any) {
    if (event.key == "Enter") {
      this.TimkiemNangCao();
    }
  }
  clearSearch() {
    this.searchString = "";
    this.lichSuDanhSachThuNgan.SearchString = null;
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

  cancelTagSearch(tagKey: any) {
    if (tagKey != null && tagKey != undefined) {
      this.listTagSearch.splice(
        this.listTagSearch.findIndex((x) => x.Key == tagKey),
        1
      );
      this.listTagShowOnHeader.splice(
        this.listTagShowOnHeader.findIndex((x) => x.Key == tagKey),
        1
      );
      if (this.listTagSearch.length == 0) {
        this.cancelSearch();
        return;
      }
      for (let item in this.lichSuDanhSachThuNgan) {
        if (item == tagKey) {
          this.lichSuDanhSachThuNgan[item] = this.lichSuDanhSachThuNganDefault[
            item
          ];
        }
      }
      this.TimkiemNangCao();
    }
  }

  view(id: any, loaiPhieu: any, yeuCauTiepNhanId: any) {
    if (
      this.authService.hasPermission(this.documentType, SecurityOperation.View)
    ) {
      this.router.navigate([
        "/lich-su-thu-ngan/chi-tiet-lich-su-thu-ngan/" +
        id +
        "/" +
        yeuCauTiepNhanId +
        "/" +
        loaiPhieu,
      ]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  extEnterChangePage(data: any) {
    if (data !== null) {
      this.router.navigate([
        "/lich-su-thu-ngan/chi-tiet-lich-su-thu-ngan/" +
        data.SoBLHD +
        "/" +
        data.YeuCauTiepNhanId +
        "/" +
        data.LoaiPhieu,
      ]);
    }
  }

  getInputSearchValue1(data) {
    if (data != null) {
      this.lichSuDanhSachThuNgan.FromDate = CommonService.formatDateTime(
        data,
        "dd/mm/yyyy"
      );
    } else {
      this.lichSuDanhSachThuNgan.FromDate = null;
    }
    this.TimkiemNangCao();
  }

  getInputSearchValue2(data) {
    if (data != null) {
      this.lichSuDanhSachThuNgan.ToDate = CommonService.formatDateTime(
        data,
        "dd/mm/yyyy"
      );
    } else {
      this.lichSuDanhSachThuNgan.ToDate = null;
    }
    this.TimkiemNangCao();
  }

  InPhieu(soBLHD: any, ThuChiTienBenhNhanStr: any) {
    //====================Chon thông tin tương ứng ta show modal và in phiếu ====================
    let tk = soBLHD;
    let result: any[] = [];
    if (ThuChiTienBenhNhanStr === "Thu theo chi phí") {
      result = ["InPhieuThu"];
    }
    if (ThuChiTienBenhNhanStr === "Thu tạm ứng") {
      result = ["InPhieuThuTamUng"];
    }
    if (ThuChiTienBenhNhanStr === "Trả lại người bệnh") {
      result = ["InPhieuChi"];
    }
    if (result.length > 0) {
      this.dialog
        .open(ViewFileCompoment, {
          disableClose: true,
          width: "1200px",
          data: { tk, result },
        })
        .afterClosed()
        .subscribe((result) => { });
    }
  }

  exportExcel() {
    const self = this;
    self.showPopupLoadingData();
    if (
      self.authService.hasPermission(
        self.documentType,
        SecurityOperation.Process
      )
    ) {
      self.apiService
        .postExportExcel<string>("ThuNgan/ExportLichSuThuNgan", this.gridChild._gridQueryInfo)
        .subscribe(
          (resultData) => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(
              resultData,
              "application/vnd.ms-excel",
              "LichSuThuNgan" + dateTimeNow.getFullYear() + ".xlsx"
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
