import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { BaoCaoSoXetNghiemSangLocHivSearch, InBaoCaoSoXetNghiemSangLocHiv } from '../bao-cao-so-xet-nghiem-sang-loc-hiv.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { BaoCaoSoXetNghiemSangLocHivPopupComponent } from '../bao-cao-so-xet-nghiem-sang-loc-hiv-popup/bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
@Component({
  selector: 'app-bao-cao-so-xet-nghiem-sang-loc-hiv-list',
  templateUrl: './bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.html',
  styleUrls: ['./bao-cao-so-xet-nghiem-sang-loc-hiv-list.component.scss']
})
export class BaoCaoSoXetNghiemSangLocHivListComponent implements OnInit {
  baoCaoSearch: BaoCaoSoXetNghiemSangLocHivSearch = new BaoCaoSoXetNghiemSangLocHivSearch();
  //inBaoCaoSoXetNghiemSangLocHiv: InBaoCaoSoXetNghiemSangLocHiv = new InBaoCaoSoXetNghiemSangLocHiv();
  public gridView: GridDataResult;
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  height: number;
  documentType: DocumentType;
  ishowView: boolean = false;
  gridColumns: any[];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoSoXetNghiemSangLocHiv;
    this.gridColumns = [
      //{ Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate },
      { Field: "MaBN", Title: "Mã BN",Width: 120  },
      { Field: "MaBarcode", Title: "Mã Barcode", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 250 },
      { Field: "GioiTinh", Title: "Giới tính", Width: 100 },
      { Field: "NamSinh", Title: "Năm sinh", Width: 120 },
      { Field: "KhoaPhong", Title: "Khoa phòng", Width: 250 },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 120 },
      { Field: "NgayLayMau", Title: "Ngày lấy mẫu", Width: 120 },
      { Field: "NgayXetNghiem", Title: "Ngày xét nghiệm", Width: 120 },
      { Field: "KetQua", Title: "Kết quả", Width: 300 },
      { Field: "KetQuaKhangDinh", Title: "KQ khẳng định", Width: 200 },
      { Field: "GhiChu", Title: "Ghi chú", Width: 120 }
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    //this.minDateTuNgay.setMonth((new Date()).getMonth() -1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
    }


  }
  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");

      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoSoXetNghiemSangLocHiv", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoSoXetNghiemSangLocHiv" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          , err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  XemBaoCao() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    }
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoSoXetNghiemSangLocHivForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {       
        this.gridView = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };        
        if (this.gridView.total != 0) {
          this.ishowView = true;
        } else {
          this.ishowView = false;
        }
      }
    });
  }
  // InBaoCao() {
  //   if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
  //     this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
  //     return;
  //   }
  //   let khoId = 0;
  //   if (this.baoCaoSearch.DichVuKyThuatBenhVienId != null) {
  //     khoId = this.baoCaoSearch.DichVuKyThuatBenhVienId;
  //   }
  //   this.inBaoCaoSoXetNghiemSangLocHiv.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
  //   this.inBaoCaoSoXetNghiemSangLocHiv.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
  //   this.dialog.open(BaoCaoSoXetNghiemSangLocHivPopupComponent, {
  //     disableClose: false,
  //     width: '1200px',
  //     data: this.inBaoCaoSoXetNghiemSangLocHiv,
  //   }
  //   ).afterClosed().subscribe(() => {
  //   });
  // }


  // changeValueStart() {
  //   this.minDateDenNgay = new Date();

  //   if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
  //     && this.baoCaoSearch.DenNgayFormat < this.baoCaoSearch.TuNgayFormat) {
  //     this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
  //   }
  // }
}
