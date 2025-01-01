import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiService } from 'src/app/core/services/api.service';
import { KSNKCanBuSearch } from '../yeu-cau-linh-ksnk.model';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { GroupDescriptor } from '@progress/kendo-data-query';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-danh-sach-ksnk-can-bu',
  templateUrl: './danh-sach-ksnk-can-bu.component.html',
  styleUrls: ['./danh-sach-ksnk-can-bu.component.scss']
})
export class DanhSachKSNKCanBuComponent implements OnInit {

  documentType: DocumentType;
  searchString: string;
  gridColumns: any[] = [];
  gridChildLevel1Columns: any[] = [];
  gridChildLevel2Columns: any[] = [];
  icFileExcel = icFileExcel;
  popupLoadingData: any = null;
  validationErrors: any = null;
  kSNKCanBuSearch: KSNKCanBuSearch;
  additionalSearchString: string = "";
  urlGetDataGrid: string = "YeuCauLinhKSNK/GetDanhSachKSNKCanBuForGrid";
  urlGetDataGridChildLevel1: string = "YeuCauLinhKSNK/GetDanhSachChiTietKSNKCanBuForGrid";
  urlGetDataGridChildLevel2: string = "YeuCauLinhKSNK/GetDanhSachChiTietYeuCauTheoKSNKCanBuForGrid";
  urlGetTotalPageGridChildLevel1: string = "YeuCauLinhKSNK/GetTotalPageDanhSachChiTietKSNKCanBuForGrid";
  urlGetTotalPageGridChildLevel2: string = "YeuCauLinhKSNK/GetTotalPageDanhSachChiTietYeuCauTheoKSNKCanBuForGrid";
  groups: GroupDescriptor[] = [{ field: 'KhoLinh' }];
  groupChilds: GroupDescriptor[] = [{ field: 'Nhom' }];
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: false }) gridChildLevel1: GridComponent;
  @ViewChild('actionChildTemplate', { static: true }) actionChildTemplate: TemplateRef<any>;
  @ViewChild('loaiTemplate', { static: true }) loaiTemplate: TemplateRef<any>;
  @ViewChild('grid', { static: true }) grid: GridComponent;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) { }
  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhBuKSNK;
    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 50, Template: this.STTTemplate },
      { Field: "KhoLinh", Title: "Kho lĩnh", Width: 200, Hidden: true },
      { Field: "KhoBu", Title: "Kho bù", MinWidth: 120 },
      { Field: "Action", Title: "", Width: 120, Template: this.actionTemplate }
    ];
    this.gridChildLevel1Columns = [
      { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "LoaiDuocPhamHayVatTu", Title: "Loại", Width: 180, ShowTooltip: true ,Template:this.loaiTemplate},
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
      { Field: "SoLuongDaLinhBu", Title: "SL đã bù", Width: 100 },
      { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 100 },
      { Field: "Action", Title: "", Width: 100, Template: this.actionChildTemplate },

    ];
    this.gridChildLevel2Columns = [
      { Field: "STT", Title: "#", Width: 25 },
      { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: true },
      { Field: "MaBN", Title: "Mã NB", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BSKeToa", Title: "BS kê toa", Width: 150 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 170 },
      { Field: "SLDaBu", Title: "SL đã bù", Width: 100 },
      { Field: "SL", Title: "SL cần bù", Width: 160 },
    ];
    this.kSNKCanBuSearch = new KSNKCanBuSearch();
    this.additionalSearchString = "{'KhoLinhId':" + (this.kSNKCanBuSearch.KhoLinhId != undefined ? this.kSNKCanBuSearch.KhoLinhId : null) + ",'KhoBuId':" + (this.kSNKCanBuSearch.KhoBuId != undefined ? this.kSNKCanBuSearch.KhoBuId : null) + "}";
  }
  search($event: any) {
    this.additionalSearchString = "{'KhoLinhId':" + (this.kSNKCanBuSearch.KhoLinhId != undefined ? this.kSNKCanBuSearch.KhoLinhId : null) + ",'KhoBuId':" + (this.kSNKCanBuSearch.KhoBuId != undefined ? this.kSNKCanBuSearch.KhoBuId : null) + "}";
    this.grid._additionalSearchString = this.additionalSearchString;
    this.grid.setDataSource();
  }
  extOnDataBound(dataSource: any) {
  }
  taoPhieuLinh(dataItem: any) {
    this.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/tao-phieu-linh-ksnk-bu'], { queryParams: { KhoLinhId: dataItem.KhoLinhId, KhoBuId: dataItem.KhoBuId } });
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  khongBu(dataItem: any) {
    //console.log(dataItem)
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn không  bù cho KSNK này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.loadingPage();

          let queryStringSearch = JSON.stringify(dataItem.YeuCauLinhVatTuInFos);
          self.apiService.post<any>("YeuCauLinhKSNK/KhongBuKSNK?yeuCauLinhVatTuIdstring=" + queryStringSearch ).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              dataItem.KhongLinhBu = true;
              self.gridChildLevel1.search();
              self.closePopupLoadingData();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }
}
