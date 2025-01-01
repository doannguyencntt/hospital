import { ChangeDetectorRef, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SearchBaoCao, BaoCaoThongKeDonThuocAnVo } from '../bao-cao-don-thuoc-thong-ke.model';
declare var jQuery: any;
@Component({
  selector: 'app-bao-cao-don-thuoc-thong-ke-list',
  templateUrl: './bao-cao-don-thuoc-thong-ke-list.component.html',
  styleUrls: ['./bao-cao-don-thuoc-thong-ke-list.component.scss']
})
export class BaoCaoDonThuocThongKeListComponent implements OnInit {

  documentType: DocumentType;
  gridColumns: any[] = [];
  gridDataSource: any = {
    data: [],
    total: 0
  };
  search = {} as SearchBaoCao;
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  validationErrors: any;
  skip = 0;
  take: number;
  pageSize = 100;
  height: number;
  gridView: GridDataResult;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  ishowView: boolean = false;
  urlGetDataGridChild: string = "";
  urlGetPageDataGridChild: string = "";
  @ViewChild('baoCaoThongKeDonThuocGrid', { static: true }) baoCaoThongKeDonThuocGrid: any;
  @Input() heightToolbar: number = 140;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }
  ngOnInit() {
    this.documentType = DocumentType.BaoCaoThongKeDonThuoc;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50 }, //0 
      { Field: "MaYT", Title: "Mã YT", Width: 150 },//1
      { Field: "SoBenhAn", Title: "Số bệnh án", Width: 100 },//2
      { Field: "HoVaTen", Title: "Họ và tên", Width: 150 },//3
      { Field: "NamSinh", Title: "Năm sinh", MinWidth: 100 },//4
      { Field: "GioiTinh", Title: "Giới tính", Width: 100 },//5
      { Field: "DiaChi", Title: "Địa chỉ", Width: 300 },//6
      { Field: "MaBHYT", Title: "Mã BHYT", Width: 120 },//7
      { Field: "MaDKBD", Title: "Mã ĐKBD", Width: 100 },//8
      { Field: "MaBenh", Title: "Mã bệnh", Width: 150 },//9
      { Field: "NgayVaoString", Title: "Ngày vào", Width: 100 },//10
      { Field: "NgayRaString", Title: "Ngày ra", Width: 100 },//11
      { Field: "ChanDoan", Title: "Chẩn đoán", Width: 200 },//12
      { Field: "TienSuBenh", Title: "Tiền sử bệnh", Width: 80 },//13
      { Field: "KhoaRa", Title: "Khoa ra", Width: 100 },//14
      { Field: "TrangThai", Title: "Trạng thái", Width: 100 },//15
      { Field: "BsKeToa", Title: "Bs Kê toa", Width: 120 },//16
      { Field: "TenThuoc", Title: "Tên thuốc", Width: 200 },//17
      { Field: "HamLuong", Title: "Hàm lượng", Width: 100 },//18
      { Field: "SoLuong", Title: "Số lượng", Width: 80 },//19
      { Field: "Sang", Title: "Sáng", Width: 80 },//20
      { Field: "Trua", Title: "Trưa", Width: 80 },//21
      { Field: "Chieu", Title: "Chiều", Width: 80 },//22
      { Field: "Toi", Title: "Tối", Width: 80 },//23
      { Field: "Tra", Title: "Trả", Width: 80 },//24
      { Field: "GhiChu", Title: "Ghi chú", Width: 100 },//25
      { Field: "KhoPhat", Title: "Kho phát", Width: 150 },//26
      { Field: "BHYT", Title: "BHYT", Width: 80 },//27
      { Field: "NgayDuyetPhieuString", Title: "Ngày duyệt phiếu", Width: 100 },//28
    ];
    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
  }
  XemBaoCao() {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.search.DateStart == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.DateStart = this.minDateTuNgay;
    }
    if (this.search.DateEnd == null) {
      this.minDateDenNgay = new Date();
      this.search.DateEnd = this.minDateDenNgay;
    }
    let baoCaoThongKeDonThuocAnVo = new BaoCaoThongKeDonThuocAnVo();
    baoCaoThongKeDonThuocAnVo.TuNgay = this.search.DateStart;
    baoCaoThongKeDonThuocAnVo.DenNgay = this.search.DateEnd;
    this.ishowView = true;
    this.apiService.post<any>("BaoCao/GetBaoCaoThongKeDonThuocForGridAsync", baoCaoThongKeDonThuocAnVo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if (resultData !== undefined && resultData != null) {
          this.showPrintExport = true;
          this.gridView = {
            data: resultData.Data,
            total: resultData.TotalRowCount
          };
          this._isLoadingTotalPage = false;
          this.gridView.data.forEach((item, idx) => {
            this.baoCaoThongKeDonThuocGrid.collapseRow(idx);
          })
          this._isLoading = false;

        }
      }
    });
  }
  columnResize(event: any): void {
    //khi resize column parent thì column child cũng resize theo
    if (event != null && event.length > 0) {
      event.forEach(element => {
        var columnIndex = this.gridColumns.findIndex(x => x.Field === element.column.field);
        if (columnIndex >= 0) {
          this.gridColumns[columnIndex].Width = element.newWidth;
          if (jQuery(".k-detail-cell .k-grid-table").find("col") != undefined && jQuery(".k-detail-cell .k-grid-table").find("col").length > 0) {
            jQuery(jQuery(".k-detail-cell .k-grid-table").find("col")[columnIndex]).css({ width: element.newWidth });
          }
        }
      });
    }
  }

  getFieldColumn(index: number) {
    return this.gridColumns[index].Field;
  }
  getTitleColumn(index: number) {
    return this.gridColumns[index].Title;
  }
  getWidthColumn(index: number) {
    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
  }
  getMinWidthColumn(minWidth: number) {
    var widthParent = jQuery("#baoCaoThongKeDonThuocGrid").parent().width();
    var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
    var totalWidth = this.gridColumns.filter((item) => {
      return item.Width != null;
    }).reduce((sum, item) => sum + item.Width, 0);
    if ((widthScreen < totalWidth + minWidth + 100)) {
      return minWidth;
    }
    else {
      return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
    }
  }
  ngAfterContentInit() {
    var self = this;
    self.height = jQuery(window).height() - 180;
    if (self.height < 400)
      self.height = 400;
    jQuery(window).resize(function () {
      self.height = jQuery(window).height() - 180;
      if (self.height < 400)
        self.height = 400;
    });

  }
  searchRefresh() {
    this.XemBaoCao();
  }
  InbaoCao() {
  }
  // XuatBaoCao(){
  //   this.dialog.open(LoadingComponent, {
  //     disableClose: true,
  //     width: '200px',
  //     height: '90px',
  //     data: { Title: 'Đang xuất excel...' }
  //   });
  //   let baoCaoThongKeDonThuocAnVo = new BaoCaoThongKeDonThuocAnVo();
  //   baoCaoThongKeDonThuocAnVo.TuNgay = this.search.DateStart;
  //   baoCaoThongKeDonThuocAnVo.DenNgay = this.search.DateEnd;
  //   if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
  //     this.apiService.postExportExcel<string>("BaoCao/ExportThongKeDonThuoc",baoCaoThongKeDonThuocAnVo).subscribe(res => {
  //       let dateTimeNow = new Date();
  //       CommonService.downLoadFile(res, "application/vnd.ms-excel", "ThongKeDonThuoc" + dateTimeNow.getFullYear() + ".xlsx");
  //       this.dialog.closeAll();
  //     }, err => {
  //       this.notificationService.showError(err.Message);
  //       this.dialog.closeAll();
  //     })
  //   } else {
  //     this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
  //   }
  // }
  XuatBaoCao() {
    const self = this;
    let baoCaoThongKeDonThuocAnVo = new BaoCaoThongKeDonThuocAnVo();
    baoCaoThongKeDonThuocAnVo.TuNgay = this.search.DateStart;
    baoCaoThongKeDonThuocAnVo.DenNgay = this.search.DateEnd;
    baoCaoThongKeDonThuocAnVo.hosting =  window.location.protocol + "//" + window.location.host;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.postExportExcel<string>('BaoCao/ExportThongKeDonThuoc',
      baoCaoThongKeDonThuocAnVo).subscribe(
          resultData => {
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'BaoCaoThongKeDonThuoc' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
