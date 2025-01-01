import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { LocalStorageHelper } from "src/app/core/utilities/local-storage.helper";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { AuthService } from "src/app/core/services/auth.service";
import icSearch from "@iconify/icons-ic/twotone-search";
import icCancel from "@iconify/icons-ic/cancel";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import {
  TagItem,
  XacNhanThuTienHoanThanh,
  TimKiemThongTinBenhNhan,
} from "../xac-nhan-thu-tien-hoan-thanh";
import { FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog, MatMenuTrigger } from "@angular/material";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
@Component({
  selector: "app-xac-nhan-thu-tien-hoan-thanh-list",
  templateUrl: "./xac-nhan-thu-tien-hoan-thanh-list.component.html",
  styleUrls: ["./xac-nhan-thu-tien-hoan-thanh-list.component.scss"],
})
export class XacNhanThuTienHoanThanhListComponent implements OnInit {
  gridThuNganColumns: any[] = [];
  gridThuNganChoThuPhiColumns: any[] = [];
  gridThuNganChoThuDaThuPhiColumns: any[] = [];
  icSearch = icSearch;
  icCancel = icCancel;
  listTagSearch: Array<TagItem>;
  listTagShowOnHeader: Array<TagItem>;
  choThuTien = new XacNhanThuTienHoanThanh();
  choThuTienDefault = new XacNhanThuTienHoanThanh();
  showCancelSearch: boolean = false;
  searchString: string;
  searchCtrl = new FormControl();
  documentType: DocumentType;
  modelQRCode: any;
  isScanF1: boolean = false;
  additionalSearchString: string = null;
  icFileExcel = icFileExcel;
  public queryStrings: any;
  public loaiThanhToan: string = "0";
  public kiemTraDanhSachThanhToan: boolean = true;
  public kiemTraDanhSachDaThanhToan: boolean = false;
  public _pageSize = 20;
  public allDaThuChuaThu: boolean = true;
  public dathu: boolean = true;
  public chuaThu: boolean = true;
  public timKiemThongTinBenhNhan = {} as TimKiemThongTinBenhNhan;
  public STT: number = 1;
  timeoutSearchChange: any;
  icFilterList = icFilterList;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private dialog: MatDialog,
    private location: Location
  ) { }
  baseRoute: string = "/xac-nhan-thu-tien-da-hoan-thanh";

  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  @ViewChild("templateTextSoTienChoXacNhan", { static: true })
  templateTextSoTienChoXacNhan: TemplateRef<any>;
  @ViewChild("templateTextSoTienDaXacNhan", { static: true })
  templateTextSoTienDaXacNhan: TemplateRef<any>;
  @ViewChild("templateSTT", { static: true }) templateSTT: TemplateRef<any>;
  @ViewChild("gridList", { static: false }) gridList: GridComponent;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild("maTnTemplate", { static: true }) maTnTemplate: TemplateRef<any>;

  public keyCode: string = "Enter";
  ngOnInit() {
    this.documentType = DocumentType.ThuNgan;
    this.backWithSearch();
    this.gridThuNganColumns = [
      // {
      //   Field: "",
      //   Title: "STT",
      //   Width: 70,
      //   Sortable: true,
      //   Template: this.templateSTT,
      // },
      {
        Field: "MaTN",
        Title: "Mã TN",
        Width: 100,
        Sortable: true,
        Template: this.maTnTemplate,
      },
      { Field: "MaBN", Title: "Mã NB", Width: 70, Sortable: true },
      { Field: "HoTen", Title: "Họ tên", MinWidth: 150, Sortable: true },
      { Field: "NamSinh", Title: "Năm Sinh", Width: 80, Sortable: true },
      { Field: "GioiTinhStr", Title: "Giới tính", Width: 100, Sortable: true },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 100, Sortable: true },
      {
        Field: "SoTienBNDaTT",
        Title: "Số tiền đã thu",
        Sortable: false,
        Width: 200,
        Template: this.templateTextSoTienDaXacNhan,
      },
    ];
  }

  sortConfig = [
    {
      field: "ChuaThu",
      dir: "desc",
    },
    {
      field: "Id",
      dir: "asc",
    },
  ];

  backWithSearch() {
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDSDichVuDaHoanThanh");
        if (additionalSearchString != null) {
          this.gridChild.additionalSearchString = additionalSearchString;
        }
      }
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

  thongTinChiTiet(dataItem: any) {
    this.router.navigateByUrl(
      "/xac-nhan-thu-tien-da-hoan-thanh/thong-tin-chi-tiet-xac-nhan-hoan-thanh/" +
      dataItem.Id
    );
  }

  onKey(event: any) {
    if (event.key === "Enter") {
      this.Timkiem();
    }
  }

  Timkiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    let QueryString = null;
    if (this.searchString != null) {
      QueryString = this.searchString;
    }
    this.gridChild.searchString = QueryString;
    LocalStorageHelper.setItem("additionalSearchStringDSDichVuDaHoanThanh", QueryString);

    this.gridChild.search();
  }

  searchChanges(event: any) {
    const self = this;
    if (self.timeoutSearchChange != null) {
      clearTimeout(self.timeoutSearchChange);
      self.timeoutSearchChange = null;
    }

    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.Timkiem();
    }
  }

  clearSearch() {
    this.searchString = "";
    this.gridChild.search();
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
        .postExportExcel<string>(
          "ThuNgan/ExportDVThuNganDaHoanThanh",
          self.gridChild._gridQueryInfo
        )
        .subscribe(
          (resultData) => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(
              resultData,
              "application/vnd.ms-excel",
              "DVThuNganDaHoanThanh" + dateTimeNow.getFullYear() + ".xlsx"
            );
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
          }
        );
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
