import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatMenuTrigger, MatDialog } from "@angular/material";
import { DsBaoHiemYTe, TimKiemDSBaoHiemYTe, DanhSachYeuCauTiepNhanIds, EnumTypeLoadingData, } from "../bao-hiem-y-te";
import icSearch from "@iconify/icons-ic/twotone-search";
import { CommonService } from "src/app/core/utilities/common.helper";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { FormControl } from "@angular/forms";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { ApiService } from "src/app/core/services/api.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { NotificationService } from "src/app/core/services/notification.service";
import icSend from "@iconify/icons-ic/send";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import icArrowDownward from '@iconify/icons-ic/arrow-downward';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

@Component({
  selector: "app-ds-bao-hiem-y-te",
  templateUrl: "./ds-bao-hiem-y-te.component.html",
  styleUrls: ["./ds-bao-hiem-y-te.component.scss"],
})
export class DsBaoHiemYTeComponent implements OnInit {
  public timKiemDSBaoHiemYTe = new TimKiemDSBaoHiemYTe();
  public sort = [{ field: 'ThoiGianTiepNhanStr', dir: 'desc' }];
  public loadingPopup: any;
  public gridDanhSachBHYTColumns: any;
  public searchString: string;
  public searchCtrl = new FormControl();
  public documentType: DocumentType;
  public mySelection: number[] = [];
  public icFilterList = icFilterList;
  public icFileExcel = icFileExcel;
  public icArrowDownward = icArrowDownward;
  public icSend = icSend;
  public icSearch = icSearch;
  public baseRoute: string = "/danh-sach-goi";
  public holdQuery: any = null;
  public query: string = null;
  public additionalSearchString: string = null;
  public danhSachYeuCauTiepNhanIds = {} as DanhSachYeuCauTiepNhanIds;
  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private apiService: ApiService,
    private authService: AuthService,
    private location: Location,
    private notificationService: NotificationService
  ) { }
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

  backWithSearch() {
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }
    if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringBHYT') != null) {
      this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringBHYT');

      if (this.additionalSearchString != null) {
        this.timKiemDSBaoHiemYTe = JSON.parse(this.additionalSearchString);
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

  view(id: any) {
    this.apiService.post<any>("BHYT/KiemTraYeuCauTiepNhanGoiBHYT/" + id).subscribe((resultData) => {
      if (resultData != null && resultData != "") {
        this.notificationService.showError(resultData);
      } else {
        this.router.navigateByUrl("/danh-sach-goi/thong-tin-chi-tiet-goi-bhyt/" + id + "?holdQuery=true");
      }
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
          this.closeAllDialogs();
        }
      }
    );
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

    //this.timKiemDSBaoHiemYTe.SearchString = this.searchString;
    var queryString = JSON.stringify(this.timKiemDSBaoHiemYTe);

    //this.gridChild.searchString = this.searchString;
    this.gridChild._additionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringBHYT", queryString);
    this.gridChild.clearCheckBox();

    this.gridChild.search();
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
      let dsBaoHiemYTe: TimKiemDSBaoHiemYTe = JSON.parse(JSON.stringify(this.timKiemDSBaoHiemYTe));
      let queryForHole = JSON.parse(JSON.stringify(dsBaoHiemYTe));
      LocalStorageHelper.setItem('additionalSearchStringBHYT', JSON.stringify(queryForHole));
      this.gridChild.search();
    }
  }

  extCheckboxSelection(data: any) {
    this.mySelection = [];
    this.mySelection = data;
  }

  DownloadThongTinTongHopXMLNguoiBenh() {
    const self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "400px",
      data: {
        Title: "Xác nhận",
        Message: `Bạn có chắc chắn muốn tải tổng hợp thông tin người bệnh này không?`,
      },
    }).afterClosed().subscribe((result) => {
      if (result == "Yes") {

        self.showPopupLoadingData(EnumTypeLoadingData.LoadingTaiFile);

        this.danhSachYeuCauTiepNhanIds.Id = this.mySelection;
        this.apiService.post<any>("BHYT/DownloadHoSoGiamDinhXMLs", this.danhSachYeuCauTiepNhanIds).subscribe(
          (resultData) => {
            if (resultData != null) {
              if (typeof resultData == "string" && resultData !== "") {
                this.notificationService.showError(resultData);
                this.dialog.closeAll();
              }
              else if (resultData.NameFileDown !== "") {
                this.apiService.postExportXML<any>(`BHYT/DownloadHoSoGiamDinhXML?NameFileDown=${resultData.NameFileDown}`)
                  .subscribe(res => {
                    let dateTimeNow = new Date();
                    CommonService.downLoadFile(res, "application/xml", "TongHop" + dateTimeNow.getFullYear() + ".xml");
                    self.closeAllDialogs();
                  }, err => {
                    this.notificationService.showError(err.Message);
                    self.closeAllDialogs();
                  });
              }
            }
            this.dialog.closeAll();
          },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
              self.closeAllDialogs();
            }
          }
        );
      }
    });
  }

  GuiTongHopHoSoGiamDinh() {
    const self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "400px",
      data: {
        Title: "Xác nhận",
        Message: CommonService.format(SystemMessage.MessConfirm, ["gửi lên bảo hiểm y tế",]),
      },
    }).afterClosed().subscribe((result) => {
      if (result == "Yes") {
        self.showPopupLoadingData(EnumTypeLoadingData.DangGuiHoSo);
        self.danhSachYeuCauTiepNhanIds.Id = self.mySelection;
        self.apiService.post<any>("BHYT/GuiHoSoGiamDinhs", self.danhSachYeuCauTiepNhanIds).subscribe((resultData) => {
          if (resultData != undefined && resultData != null) {
            if (typeof resultData == "string" && resultData !== "") {
              self.notificationService.showError(resultData);
              self.closeAllDialogs();
            }
            else {
              if (resultData.XMLError != undefined) {
                self.notificationService.showSuccess("Đã xảy ra lỗi vui lòng liên hệ admin");
                self.closeAllDialogs();
              } else if (resultData.APIError != undefined) {
                self.notificationService.showSuccess("Đã xảy ra lỗi API trả về vui lòng liên hệ admin");
                self.closeAllDialogs();
              } else {
                self.notificationService.showSuccess("Gửi hồ sơ giám định thành công.");
                self.timKiemNangCao();
                self.closeAllDialogs();
              }
            }
          }
        },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
              self.closeAllDialogs();
            }
          }
        );
      }
    });
  }

  DownloadFileExcels() {
    const self = this;
    self.showPopupLoadingData(EnumTypeLoadingData.LoadingExcel);
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.postExportExcel<string>("BHYT/ExportBaoHiemYTe", this.gridChild._gridQueryInfo).subscribe((resultData) => {
        self.closeAllDialogs();
        const dateTimeNow = new Date();
        CommonService.downLoadFile(resultData, "application/vnd.ms-excel", "GiamDinhBHYT" + dateTimeNow.getFullYear() + ".xlsx");
        this.timKiemNangCao()
      },
        (err: any) => {
          self.notificationService.showError(err.Message);
          self.closeAllDialogs();
        }
      );
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
    let mess = "";
    switch (typeLoading) {
      case EnumTypeLoadingData.View:
        mess = "Đang tải dữ liệu..."; break;
      case EnumTypeLoadingData.Update:
        mess = "Đang lưu dữ liệu..."; break;
      case EnumTypeLoadingData.Delete:
        mess = "Đang xóa dữ liệu..."; break;
      case EnumTypeLoadingData.DangGuiHoSo:
        mess = "Đang gửi hồ sơ giám định..."; break;
      case EnumTypeLoadingData.LoadingExcel:
        mess = "Đang tải excel..."; break;
      case EnumTypeLoadingData.LoadingTaiFile:
        mess = "Đang tải hồ sơ giám định..."; break;
      default: mess = "Đang tải dữ liệu...";
    }

    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: mess }
      });
    }
  }

  closeAllDialogs() {
    if (this.loadingPopup) {
      this.loadingPopup.close();
      this.loadingPopup = null;
    }
  }
}
