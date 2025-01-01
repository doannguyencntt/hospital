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
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import { MarketingXuatKho } from '../../marketing.model';


@Component({
  selector: 'app-marketing-xuat-kho-list',
  templateUrl: './marketing-xuat-kho-list.component.html',
  styleUrls: ['./marketing-xuat-kho-list.component.scss']
})
export class MarketingXuatKhoListComponent implements OnInit {
  documentType: DocumentType;
  xuatKhoMarketing: MarketingXuatKho;
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

  @Input() sort: SortDescriptor[] = [
    {
      field: "NgayXuat",
      dir: "desc",
    },
  ];
  baseRoute: string = "/marketing/xuat-kho";
  holdQuery: any = null;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('acTionTemplate', { static: true }) acTionTemplate: TemplateRef<any>;
  @ViewChild("ngayXuatTemplate", { static: true }) ngayXuatTemplate: TemplateRef<any>;
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
    this.documentType = DocumentType.XuatKhoMarketing;
    this.xuatKhoMarketing = new MarketingXuatKho();

    // let dateNow = new Date();
    // this.xuatKhoMarketing.NgayXuatTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    // this.xuatKhoMarketing.NgayXuatDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    // if (this.xuatKhoMarketing.NgayXuatTuFormat != null) {
    //   this.xuatKhoMarketing.FromDate = CommonService.formatDateTime(
    //     this.xuatKhoMarketing.NgayXuatTuFormat,
    //     "dd/mm/yyyy"
    //   );
    // } else {
    //   this.xuatKhoMarketing.FromDate = null;
    // }

    // if (this.xuatKhoMarketing.NgayXuatDenFormat != null) {
    //   this.xuatKhoMarketing.ToDate = CommonService.formatDateTime(this.xuatKhoMarketing.NgayXuatDenFormat, "dd/mm/yyyy");
    // } else {
    //   this.xuatKhoMarketing.ToDate = null;
    // }
    // var queryString = JSON.stringify(this.xuatKhoMarketing);
    // this.addtionStringDefault = queryString;

    this.backWithSearch();
    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số PX", Width: 100, Sortable: true, Template: this.chiTietTemplate },
      { Field: "NoiXuat", Title: "Nơi xuất", Width: 200, Sortable: true },
      { Field: "NhanVienXuat", Title: "Người xuất", Width: 150, Sortable: true },
      { Field: "NgayXuat", Title: "Ngày xuất", Width: 150, Sortable: true, Template: this.ngayXuatTemplate, },
      { Field: "NguoiNhan", Title: "Người nhận", Width: 150, Sortable: true },
      { Field: "GhiChu", Title: "Lý Do xuất", MinWidth: 150, Sortable: true, },
      {
        Field: "Action",
        Title: "",
        Width: 50,
        Template: this.acTionTemplate,
      },
    ];
  }

  backWithSearch() {
    let hasLocalSearchString = false;

    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringXuatKhoMarketing");
        if (additionalSearchString != null) {
          this.xuatKhoMarketing = JSON.parse(additionalSearchString);
          if (this.xuatKhoMarketing.NgayXuatTuFormat != undefined && this.xuatKhoMarketing.NgayXuatTuFormat != null && this.xuatKhoMarketing.NgayXuatTuFormat != "") {
            this.xuatKhoMarketing.NgayXuatTuFormat = new Date(this.xuatKhoMarketing.NgayXuatTuFormat);
          }
          else {
            this.xuatKhoMarketing.NgayXuatTuFormat = null;
          }
          if (this.xuatKhoMarketing.NgayXuatDenFormat != undefined && this.xuatKhoMarketing.NgayXuatDenFormat != null && this.xuatKhoMarketing.NgayXuatDenFormat != "") {
            this.xuatKhoMarketing.NgayXuatDenFormat = new Date(this.xuatKhoMarketing.NgayXuatDenFormat);
          }
          else {
            this.xuatKhoMarketing.NgayXuatDenFormat = null;

          }
          //this.addtionStringDefault = additionalSearchString;
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringXuatKhoMarketing");
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
    if (this.xuatKhoMarketing.NgayXuatTuFormat != null) {
      this.xuatKhoMarketing.FromDate = CommonService.formatDateTime(this.xuatKhoMarketing.NgayXuatTuFormat, "dd/mm/yyyy");
    } else {
      this.xuatKhoMarketing.FromDate = null;
    }

    if (this.xuatKhoMarketing.NgayXuatDenFormat != null) {
      this.xuatKhoMarketing.ToDate = CommonService.formatDateTime(this.xuatKhoMarketing.NgayXuatDenFormat, "dd/mm/yyyy");
    } else {
      this.xuatKhoMarketing.ToDate = null;
    }
    var queryString = JSON.stringify(this.xuatKhoMarketing);
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringXuatKhoMarketing", queryString);
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
      this.router.navigate(["/marketing/xuat-kho" + "/chi-tiet/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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
      this.apiService.postExportExcel<string>("Marketing/ExportXuatKhoMarketing", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatKhoMarketing" + dateTimeNow.getFullYear() + ".xlsx");
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
