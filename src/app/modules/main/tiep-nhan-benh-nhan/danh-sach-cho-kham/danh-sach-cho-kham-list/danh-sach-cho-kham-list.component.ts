import {
  Component,
  OnInit,
  ViewChild,
  Input,
  TemplateRef,
  HostListener,
} from "@angular/core";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import icSearch from "@iconify/icons-ic/twotone-search";
import icAdd from "@iconify/icons-ic/twotone-add";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";
import { FormControl } from "@angular/forms";
import { SortDescriptor, GroupDescriptor } from "@progress/kendo-data-query";
import { DanhSachChoKhamPdfComponent } from "../danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component";
import { MatMenuTrigger } from "@angular/material";
import {
  DanhSachChoKham,
  TagItem,
  TimKiemThongTinBenhNhan,
} from "../danh-sach-cho-kham.model";
import { ApiService } from "src/app/core/services/api.service";
import { CommonService } from "src/app/core/utilities/common.helper";
import icicclose from "@iconify/icons-ic/twotone-close";
import icMoreHoriz from "@iconify/icons-ic/twotone-more-horiz";
import icDelete from "@iconify/icons-ic/twotone-delete";
import icEdit from "@iconify/icons-ic/twotone-edit";
import icBlock from "@iconify/icons-ic/twotone-block";
import { AuthService } from "src/app/core/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationService } from "src/app/core/services/notification.service";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { MatDialog } from "@angular/material";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import icPrint from "@iconify/icons-ic/twotone-print";
import { HoSoBenhAnPopupComponent } from "../ho-so-benh-an-popup/ho-so-benh-an-popup.component";
import { TheBenhNhanPopupComponent } from "../the-benh-nhan-popup/the-benh-nhan-popup.component";
import { VongDeoTayPopupComponent } from "../vong-deo-tay-popup/vong-deo-tay-popup.component";
import { NghiHuongBhxhTiepNhanPopupComponent } from '../nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { InPhieuDangKyKhamPopupComponent } from '../in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import { ThongTinPhieuPdfPopupComponent } from "../../../thu-chi/thu-chi-vien-phi/common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component";
import { ApiError } from "src/app/shared/models/api-error.model";
import { XemTruocBangKeChiPhiPopupComponent } from "../../xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component";

@Component({
  selector: "app-danh-sach-cho-kham-list",
  templateUrl: "./danh-sach-cho-kham-list.component.html",
  styleUrls: ["./danh-sach-cho-kham-list.component.scss"],
})
export class DanhSachChoKhamListComponent implements OnInit {
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
  icFileExcel = icFileExcel;
  searchString: string;
  hostingName: string;
  soPhanTramHuongBHYT: number = null;
  danhSachChoKham: DanhSachChoKham;
  _gridColumns: any[] = [];
  groups: GroupDescriptor[] = [{ field: "Khoa" }];
  showCancelSearch: boolean = false;
  isDisabledExport: boolean = false;
  listTagShowOnHeader: Array<TagItem>;
  listTagSearch: Array<TagItem>;
  icPrint = icPrint;
  @Input() sort: SortDescriptor[] = [
    {
      field: "ThoiDiemTiepNhan",
      dir: "desc",
    },
  ];
  baseRoute: string = "/danh-sach-tiep-nhan";
  modelQRCode: any;
  isScanF1: boolean = false;
  holdQuery: any = null;
  public timKiemThongTinBenhNhan = {} as TimKiemThongTinBenhNhan;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild("trangThaiTemplate", { static: true })
  trangThaiTemplate: TemplateRef<any>;
  @ViewChild("thoiDiemTiepNhanTemplate", { static: true }) thoiDiemTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('chiTietTemplate', { static: true }) chiTietTemplate: TemplateRef<any>;
  @ViewChild('hienThiNgayThangNamTemplate', { static: true }) hienThiNgayThangNamTemplate: TemplateRef<any>;

  @ViewChild(DanhSachChoKhamPdfComponent, { static: true }) layoutPrint: any;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  searchCtrl = new FormControl();
  timeoutSearchChange: any;
  addtionStringDefault: string = null;
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit() {
    if (window.location.protocol == "http:") {
      this.hostingName = "http://" + window.location.host;
    } else {
      this.hostingName = "https://" + window.location.host;
    }
    this.danhSachChoKham = new DanhSachChoKham();
    let dateNow = new Date();
    this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null) {
      this.danhSachChoKham.FromDate = CommonService.formatDateTime(this.danhSachChoKham.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
    } else {
      this.danhSachChoKham.FromDate = null;
    }

    if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null) {
      this.danhSachChoKham.ToDate = CommonService.formatDateTime(
        this.danhSachChoKham.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.danhSachChoKham.ToDate = null;
    }
    var queryString = JSON.stringify(this.danhSachChoKham);
    this.addtionStringDefault = queryString;

    this.documentType = DocumentType.DanhSachChoKham;
    this.backWithSearch();
    this.gridColumns = [
      {
        Field: "MaYeuCauTiepNhan",
        Title: "Mã TN",
        Width: 100,
        Sortable: true,
        Template: this.chiTietTemplate
      },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 100, Sortable: true },
      { Field: "HoTen", Title: "Tên Người Bệnh", Width: 180, Sortable: true },
      { Field: "NamSinh", Title: "Năm Sinh", Width: 135, Sortable: true  , Template : this.hienThiNgayThangNamTemplate },
      { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 150, Sortable: true },
      { Field: "TenNhanVienTiepNhan", Title: "Người tiếp nhận", Width: 180, Sortable: true },
      {
        Field: "ThoiDiemTiepNhan",
        Title: "Tiếp Nhận Lúc",
        Width: 190,
        Sortable: true,
        Template: this.thoiDiemTiepNhanTemplate,
      },
      {
        Field: "TrieuChungTiepNhan",
        Title: "Lý Do Khám Bệnh",
        Width: 145,
        Sortable: true,
      },
      { Field: "DoiTuong", Title: "Đối Tượng", Width: 140, Sortable: true },
      {
        Field: "Action",
        Title: "",
        Width: 50,
        Template: this.trangThaiTemplate,
      },
    ];
  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDSTN");
        if (additionalSearchString != null) {
          this.danhSachChoKham = JSON.parse(additionalSearchString);
          if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != undefined && this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null && this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != "") {
            this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = new Date(this.danhSachChoKham.ThoiDiemTiepNhanTuFormat);
          }
          else {
            this.danhSachChoKham.ThoiDiemTiepNhanTuFormat = null;
          }
          if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != undefined && this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null && this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != "") {
            this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = new Date(this.danhSachChoKham.ThoiDiemTiepNhanDenFormat);
          }
          else {
            this.danhSachChoKham.ThoiDiemTiepNhanDenFormat = null;

          }
          this.addtionStringDefault = additionalSearchString;
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringDSTN");
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.TimkiemNangCao();
    }
  }

  clearSearch() {
    this.searchString = null;
    this.danhSachChoKham.SearchString = null;
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
    if (this.danhSachChoKham.ThoiDiemTiepNhanTuFormat != null) {
      this.danhSachChoKham.FromDate = CommonService.formatDateTime(
        this.danhSachChoKham.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.danhSachChoKham.FromDate = null;
    }

    if (this.danhSachChoKham.ThoiDiemTiepNhanDenFormat != null) {
      this.danhSachChoKham.ToDate = CommonService.formatDateTime(
        this.danhSachChoKham.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.danhSachChoKham.ToDate = null;
    }
    var queryString = JSON.stringify(this.danhSachChoKham);
    //this.gridChild.searchString = this.searchString;
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringDSTN", queryString);
    this.gridChild.search();
  }

  searchChanges(event: any) {
    var self = this;
    if (this.timeoutSearchChange != null) {
      clearTimeout(this.timeoutSearchChange);
      this.timeoutSearchChange = null;
    }
    this.timeoutSearchChange = setTimeout(function () {
      if (event !== undefined && event !== null && event.endsWith("@")) {
        var dataTimKiem = event.split("|");
        if (dataTimKiem.length > 1) {
          self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
        } else {
          self.searchString = event.slice(0, -1);
          self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = event.slice(0, -1);
        }
        self.getThongTinYeuCauBenhNhan(self.timKiemThongTinBenhNhan);
      }

    }, 100);
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      // self.gridChild._additionalSearchString = null;
      self.TimkiemNangCao();
    }
  }

  thoiDiemTNChange() {
    this.TimkiemNangCao();
  }

  getSharedPrintForm(id: any) {
    return new Promise((resolve) => {
      this.apiService
        .get<any>(
          "TiepNhanBenhNhan/InPhieuKhamBenh?id=" +
          id +
          "&hostingName=" +
          this.hostingName
        )
        .subscribe((resultData) => {
          // resolve(resultData);
          let dialogRef = this.dialog.open(InPhieuDangKyKhamPopupComponent, {
            width: '1000px',
            height: 'auto',
            data: { Model: resultData }
          }).afterClosed().subscribe(result => {
          });
        });
    });
  }

  edit(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/danh-sach-tiep-nhan" + "/chinh-sua/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  deleteTinhTrang(id: number) {
    let comfirm = "hủy";
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: CommonService.format(SystemMessage.MessLockTemplate, [
              comfirm,
              "người bệnh chờ khám",
            ]),
          },
        })
        .afterClosed()
        .subscribe((result) => {
          /* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            self.apiService
              .post("DanhSachChoKham/HuyBenhNhanChoKham?id=" + id)
              .subscribe(
                () => {
                  self.gridChild.search();
                },
                (err: any) => {
                  self.notificationService.showError(err.Message);
                }
              );
          }
        });
    } else {
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

  InHoSoKhamBenh(id: number, laPhieuKhamBenh: boolean) {
    // this.dialog.open(HoSoBenhAnPopupComponent, {
    //   disableClose: true,
    //   width: "1200px",
    //   data: { id, laPhieuKhamBenh },
    // });
    this.apiService.get<any>("DanhSachChoKham/InPhieuCacDichVuKhamBenh?yeuCauTiepNhanId=" + id
      + "&hostingName=" + this.hostingName
      + "&header=false"
      + "&laPhieuKhamBenh=" + laPhieuKhamBenh).subscribe(
        resultData => {
          if (resultData != null) {
            this.dialog.open(HoSoBenhAnPopupComponent, {
              disableClose: true,
              width: "1000px",
              data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
            });
          }
        },
        (err: ApiError) => {
        });
  }

  InTheBenhNhan(id: number) {
    this.dialog.open(TheBenhNhanPopupComponent, {
      disableClose: true,
      width: "466px",
      data: id,
    });
  }

  InVongDeoTay(id: number) {
    this.dialog.open(VongDeoTayPopupComponent, {
      disableClose: true,
      height: "780px",
      width: "200px",
      data: id,
    });
  }
  InGiayNghiHuongBHXH(dataItem: any) {
    this.dialog.open(NghiHuongBhxhTiepNhanPopupComponent, {
      disableClose: true,
      width: "700px",
      data: dataItem,
    });
  }

  changeQR($event) {
    if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
      this.modelQRCode = $event;
      var dataTimKiem = $event.split("|");
      if (dataTimKiem.length > 1) {
        this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
      } else {
        this.searchString = $event.slice(0, -1);
        this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
      }
      this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
    } else {
      this.notificationService.showError(
        "Không tìm thấy thông tin cần tìm."
      );
    }
    this.isScanF1 = false;
  }

  QuetMaQRCodeClick() {
    let elementBarcode: HTMLElement = document.getElementById(
      "barcodeActive"
    ) as HTMLElement;
    if (elementBarcode != undefined) {
      elementBarcode.click();
    }
  }

  getThongTinYeuCauBenhNhan(timKiemThongTinBenhNhan: TimKiemThongTinBenhNhan) {
    if (
      this.authService.hasPermission(
        this.documentType,
        SecurityOperation.Update
      )
    ) {
      this.apiService
        .post<any>(
          "DanhSachChoKham/GetThongTinYeuCauTiepNhan/",
          timKiemThongTinBenhNhan
        )
        .subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            if (resultData !== 0) {
              this.router.navigate([
                "/danh-sach-tiep-nhan" + "/chinh-sua/" + resultData,
              ]);
            }
          } else {
            this.notificationService.showError(
              "Không tìm thấy thông tin tiếp nhận cần tìm."
            );
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
      event.preventDefault();
      this.QuetMaQRCodeClick();
    }
  }

  XuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("DanhSachChoKham/ExportDanhSachTiepNhan", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DSTiepNhan" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  //BVHD-3761
    //=======================================================================================================
    InPhieuXN(id:any){
      this.apiService
      .get<any>(
        "TiepNhanBenhNhan/InPhieuXetNghiemCovid?id=" +
        id +
        "&hostingName=" +
        this.hostingName
      )
      
      .subscribe((resultData) => {
        // resolve(resultData);
        let dialogRef = this.dialog.open(InPhieuDangKyKhamPopupComponent, {
          width: '1000px',
          height: 'auto',
          data: { Model: resultData }
        }).afterClosed().subscribe(result => {
        });
      });
    }
    //=======================================================================================================
  
}
