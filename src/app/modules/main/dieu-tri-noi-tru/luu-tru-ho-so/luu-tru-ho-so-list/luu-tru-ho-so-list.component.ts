import { Component, OnInit, ViewChild, TemplateRef, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DocumentType } from "src/app/shared/enum/document-type.enum";

import { FormControl } from '@angular/forms';
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";

import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from "src/app/core/utilities/common.helper";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SortDescriptor } from '@progress/kendo-data-query';
import icSearch from "@iconify/icons-ic/twotone-search";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";
import { LuuTruHoSo } from "../luu-tru-ho-so.model";
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { LuuTruHoSoUpdatePopupComponent } from "../luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component";

@Component({
  selector: 'app-luu-tru-ho-so-list',
  templateUrl: './luu-tru-ho-so-list.component.html',
  styleUrls: ['./luu-tru-ho-so-list.component.scss']
})
export class LuuTruHoSoListComponent implements OnInit {
  documentType: DocumentType;
  luuTruHoSo: LuuTruHoSo;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icSearch = icSearch;
  gridColumns: any[] = [];
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild('gioiTinhTemplate', { static: true }) gioiTinhTemplate: TemplateRef<any>;
  @ViewChild('icdTemplate', { static: true }) icdTemplate: TemplateRef<any>;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @Input() sort: SortDescriptor[] = [
    {
      field: "TinhTrang",
      dir: "asc",
    },
  ];
  searchCtrl = new FormControl;
  date  = new Date();
  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.LuuTruHoSo;
    this.luuTruHoSo = new LuuTruHoSo();
    this.gridColumns = [
      { Field: "ThuTuSapXepLuuTru", Title: "Thứ tự sắp xếp", Width: 120, Sortable: true},
      { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: true, Template: this.maTNTemplate },
      { Field: "SoBA", Title: "Số BA", Width: 120, Sortable: true },
      { Field: "SoLuuTru", Title: "Số lưu trữ", Width: 120, Sortable: true },
      { Field: "HoTen", Title: "Họ Tên", Width: 170, Sortable: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true},
      { Field: "GioiTinh", Title: "Giới tính", Width: 150, Sortable: true, Template: this.gioiTinhTemplate },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 150, Sortable: true },
      { Field: "KhoaNhapVien", Title: "Khoa nhập viện", Width: 150, Sortable: true },
      { Field: "ICDChanDoanDieuTri", Title: "ICD-chẩn đoán điều trị", MinWidth: 150, Sortable: true,Template:this.icdTemplate },
      { Field: "NgayVaoVienDisplay", Title: "Ngày vào viện", Width: 150, Sortable: true },
      { Field: "NgayRaVienDisplay", Title: "Ngày ra viện", Width: 150, Sortable: true },
      { Field: "TinhTrangRaVien", Title: "Tình trạng vào viện", Width: 150, Sortable: true },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: true, Template: this.tinhTrangTemplate },
    ];
  }
  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  clearSearch() {
    this.luuTruHoSo.SearchString = null;
    this.gridChild.search();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.timKiem();
    }
  }

  trangThaiCheckBox(event: any, tinhTrang: any) {
    if (tinhTrang == "dasapxep") {
      this.luuTruHoSo.DaSapXep = event;
    }
    if (tinhTrang == "chuasapxep") {
      this.luuTruHoSo.ChuaSapXep = event;
    }
    if (tinhTrang == "bhyt") {
      this.luuTruHoSo.CheckBHYT = event;
    }
    if (tinhTrang == "vienphi") {
      this.luuTruHoSo.CheckVienPhi = event;
    }
    this.timKiem();
  }

  timKiem() {
    var queryString = JSON.stringify(this.luuTruHoSo);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }

  chinhSua(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(LuuTruHoSoUpdatePopupComponent, {
        disableClose: false,
        width: '1100px',
        data: id,
      }).afterClosed().subscribe(() => {
        self.gridChild.search();
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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
      this.apiService.postExportExcel<string>("DieuTriNoiTru/ExportLuuTruBenhAn", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "LuuTruBenhAn" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  changTuNgay(event:any){
    if(event!= null)
    {
      this.luuTruHoSo.TuNgayText =CommonService.formatDateTime(event, "mm/dd/yyyy")
    }
    else{
      this.luuTruHoSo.TuNgayText = null;
    }
    this.timKiem();
  }
  changDenNgay(event:any){
    if(event!= null)
    {
      this.luuTruHoSo.DenNgaytext =CommonService.formatDateTime(event, "mm/dd/yyyy")
    }
    else{
      this.luuTruHoSo.DenNgaytext = null;
    }
    this.timKiem();
  }
  changeKhoaPhong(event:any){
    this.timKiem();
  }
}
