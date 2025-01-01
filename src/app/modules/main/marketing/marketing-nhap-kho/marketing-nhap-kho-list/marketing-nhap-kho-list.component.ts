import {
  Component,
  OnInit,
  ViewChild,
  Input,
  TemplateRef,
} from "@angular/core";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import icSearch from "@iconify/icons-ic/twotone-search";
import icAdd from "@iconify/icons-ic/twotone-add";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";
import { FormControl } from "@angular/forms";
import { SortDescriptor } from "@progress/kendo-data-query";
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
import icPrint from "@iconify/icons-ic/twotone-print";
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import { MarketingNhapKho,ExportQueryInfoQueryInfo } from '../../marketing.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

@Component({
  selector: 'app-marketing-nhap-kho-list',
  templateUrl: './marketing-nhap-kho-list.component.html',
  styleUrls: ['./marketing-nhap-kho-list.component.scss']
})
export class MarketingNhapKhoListComponent implements OnInit {

  documentType: DocumentType;
  nhapKhoMarketing: MarketingNhapKho;
  expression: boolean = false;
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
  _gridColumns: any[] = [];
  icPrint = icPrint;
  addtionStringDefault: string = null;
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  validationErrors: any[] = [];
  @Input() sort: SortDescriptor[] = [
    {
      field: "NgayNhap",
      dir: "desc",
    },
  ];
  baseRoute: string = "/marketing/nhap-kho-marketing";
  holdQuery: any = null;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('acTionTemplate', { static: true }) acTionTemplate: TemplateRef<any>;
  @ViewChild("ngayNhapTemplate", { static: true }) ngayNhapTemplate: TemplateRef<any>;
  @ViewChild('chiTietTemplate', { static: true }) chiTietTemplate: TemplateRef<any>;
  searchCtrl = new FormControl();

  gridColumns: any[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private location: Location,
    private apiService: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.NhapKhoMarketing;
    this.nhapKhoMarketing = new MarketingNhapKho();
    // let dateNow = new Date();
    // this.nhapKhoMarketing.NgayNhapTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    // this.nhapKhoMarketing.NgayNhapDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    // if (this.nhapKhoMarketing.NgayNhapTuFormat != null) {
    //   this.nhapKhoMarketing.FromDate = CommonService.formatDateTime(
    //     this.nhapKhoMarketing.NgayNhapTuFormat,
    //     "dd/mm/yyyy"
    //   );
    // } else {
    //   this.nhapKhoMarketing.FromDate = null;
    // }

    // if (this.nhapKhoMarketing.NgayNhapDenFormat != null) {
    //   this.nhapKhoMarketing.ToDate = CommonService.formatDateTime(this.nhapKhoMarketing.NgayNhapDenFormat, "dd/mm/yyyy");
    // } else {
    //   this.nhapKhoMarketing.ToDate = null;
    // }
    var queryString = JSON.stringify(this.nhapKhoMarketing);
    this.addtionStringDefault = queryString;

    this.backWithSearch();
    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số PN", Width: 120, Sortable: true, Template: this.chiTietTemplate },
      { Field: "SoChungTu", Title: "Số chứng từ", MinWidth: 150, Sortable: true },
      { Field: "LoaiNguoiGiaoString", Title: "Loại người giao", Width: 150, Sortable: true },
      { Field: "TenNguoiGiao", Title: "Tên người giao", Width: 150, Sortable: true },
      { Field: "NhanVienNhap", Title: "Người nhập", Width: 150, Sortable: true },
      { Field: "NgayNhapDisplay", Title: "Ngày nhập", Width: 150, Sortable: true, Template: this.ngayNhapTemplate, },
      {
        Field: "Action",
        Title: "",
        Width: 50,
        Template: this.acTionTemplate,
      },
    ];
  }
  XuatExcel(){
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.exportQueryInfoQueryInfo.AdditionalSearchString = null;
      this.apiService.postExportExcel<string>("Marketing/ExportNhapKhoMarketing", this.exportQueryInfoQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "NhapKhoMarketing" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  Edit(data){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate(["/marketing/nhap-kho-marketing/chinh-sua/" + data.Id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  Delete(event){
    if (event != undefined && event != null) {
      this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn xóa nhập kho này không ?",
          },
      }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            this.apiService.post<any>("Marketing/XoaQuaTang?id=" + event.Id).subscribe(
              resultData => {
                this.notificationService.showSuccess("Xóa thành công");
                this.TimkiemNangCao();
              },
              (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
              });
          }});
        }
  }
  backWithSearch() {
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringNhapKhoMarketing");
        if (additionalSearchString != null) {
          this.nhapKhoMarketing = JSON.parse(additionalSearchString);
          if (this.nhapKhoMarketing.NgayNhapTuFormat != undefined && this.nhapKhoMarketing.NgayNhapTuFormat != null && this.nhapKhoMarketing.NgayNhapTuFormat != "") {
            this.nhapKhoMarketing.NgayNhapTuFormat = new Date(this.nhapKhoMarketing.NgayNhapTuFormat);
          }
          else {
            this.nhapKhoMarketing.NgayNhapTuFormat = null;
          }
          if (this.nhapKhoMarketing.NgayNhapDenFormat != undefined && this.nhapKhoMarketing.NgayNhapDenFormat != null && this.nhapKhoMarketing.NgayNhapDenFormat != "") {
            this.nhapKhoMarketing.NgayNhapDenFormat = new Date(this.nhapKhoMarketing.NgayNhapDenFormat);
          }
          else {
            this.nhapKhoMarketing.NgayNhapDenFormat = null;

          }
          this.addtionStringDefault = additionalSearchString;
          this.gridChild.additionalSearchString = additionalSearchString;
        }
      }
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.TimkiemNangCao();
    }
  }

  clearSearch() {
    this.searchString = null;
    //this.danhSachChoKham.SearchString = null;
    this.gridChild.search();
  }

  TimkiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.nhapKhoMarketing.NgayNhapTuFormat != null) {
      this.nhapKhoMarketing.FromDate = CommonService.formatDateTime(this.nhapKhoMarketing.NgayNhapTuFormat, "dd/mm/yyyy");
    } else {
      this.nhapKhoMarketing.FromDate = null;
    }

    if (this.nhapKhoMarketing.NgayNhapDenFormat != null) {
      this.nhapKhoMarketing.ToDate = CommonService.formatDateTime(this.nhapKhoMarketing.NgayNhapDenFormat, "dd/mm/yyyy");
    } else {
      this.nhapKhoMarketing.ToDate = null;
    }
    var queryString = JSON.stringify(this.nhapKhoMarketing);
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringNhapKhoMarketing", queryString);
    this.gridChild.search();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.TimkiemNangCao();
    }
  }

  view(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate(["/marketing/nhap-kho-marketing/chinh-sua/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
