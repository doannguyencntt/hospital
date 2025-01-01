import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LocKetQua, NoiChiDinh, KSK, BHYT } from '../bc-luu-ket-qua-xet-nghiem-hang-ngay.model';
import { environment } from 'src/environments/environment';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BcLuuKetQuaXetNghiemHangNgayPopupComponent } from '../bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
@Component({
  selector: 'app-bc-luu-ket-qua-xet-nghiem-hang-ngay-list',
  templateUrl: './bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.html',
  styleUrls: ['./bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.scss']
})
export class BcLuuKetQuaXetNghiemHangNgayListComponent implements OnInit {
  search = new LocKetQua;
  doucument: DocumentType;
  noiChiDinh = new NoiChiDinh();
  kSK = new KSK();
  bHYT = new BHYT();
  gridColumns: any[] = [];
  showGrid: boolean = false;
  ishowView: boolean = false;
  gridDataSource: any;
  validationErrors: any;
  minDateTuNgay: Date = null;
  @ViewChild('gridl', { read: GridComponent, static: false }) grid: GridComponent;
  urlGetDataGridChild: string = "";
  urlGetPageDataGridChild: string = "";

  constructor(private apiService: ApiService, private notificationService: NotificationService, private dialog: MatDialog, private authService: AuthService) {
  }

  ngOnInit() {
    this.doucument = DocumentType.BaoCaoLuuKetQuaXetNghiemHangNgay;
    this.gridColumns = [
      { Field: "Sid", Title: "Sid", Width: 120 }, // 1
      { Field: "HoVaTen", Title: "Họ và tên", Width: 120 },//2
      { Field: "NamSinhDisplay", Title: "Năm sinh", Width: 120 },//3
      { Field: "LoaiGioiTinhDisplay", Title: "Giới tính", Width: 200 },//4

      { Field: "NoiChiDinh", Title: "Nơi chỉ định", MinWidth: 100 },//6
      { Field: "BHYTDisplay", Title: "BHYT", Width: 120 },//7

      { Field: "KhamSucKhoeDisplay", Title: "KSK", Width: 120 },//7
      { Field: "HoTenBacSi", Title: "Bác sĩ", Width: 120 },//8
      { Field: "ChanDoan", Title: "Chẩn đoán", Width: 120 },//9
      { Field: "KetQua", Title: "Kết quả", Width: 120 },//10
    ];
    
    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.search.TuNgay == null) {
      this.search.TuNgay = this.minDateTuNgay;
    }
    if (this.search.DenNgay == null) {
      this.search.DenNgay = new Date();
    }
  }
  chonNoiChiDinhChange(event) {
    if (event != undefined && event != null && event != "") {
      this.search.NoiChiDinhId = event;
    }
    else {
      this.search.NoiChiDinhId = null;
    }
  }
  changeTrangThaiBHYT(event) {
    if (event != undefined && event != null && event != "") {
      if (event == 0) {
        this.search.BHYT = null;
      }
      if (event == 1) {
        this.search.BHYT = true;
      }
      if (event == 2) {
        this.search.BHYT = false;
      }
    }
    else {
      this.search.BHYT = null;
    }
  }
  changeTrangThaiKhamSucKhoe(event) {
    if (event != undefined && event != null && event != "") {
      if (event == 0) {
        this.search.KhamSucKhoe = null;
      }
      if (event == 1) {
        this.search.KhamSucKhoe = true;
      }
      if (event == 2) {
        this.search.KhamSucKhoe = false;
      }
    }
    else {
      this.search.KhamSucKhoe = null;
    }
  }
  changeValueStart(event) {
    if (event != undefined && event != null && event != "") {
      this.search.TuNgay = event;
    }
    else {
      let tuNgay = new Date();
      tuNgay.setHours(0, 0, 0, 0);
      this.search.TuNgay = tuNgay;
    }
  }
  changeValueEnd(event) {
    if (event != undefined && event != null && event != "") {
      this.search.DenNgay = event;
    }
    else {
      let tuNgay = new Date();
      this.search.DenNgay = tuNgay;
    }
  }
  setDataGridView() {
    if (this.grid !== undefined) {
      this.grid.setDataSource();
    }
    this.showGrid = true;
    this.ishowView = true;
  }
  XemBaoCao() {
    if(this.search.TuNgay==null || this.search.DenNgay==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }
    //BaoCao/GetDataBaoCaoLuuKetQuaXetNghiemHangNgayTotalPageForGridAsync
    this.showGrid = true;
    if (this.search.TuNgay == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.TuNgay = this.minDateTuNgay;
    }
    if (this.search.DenNgay == null) {
      this.minDateTuNgay = new Date();
      this.search.DenNgay = this.minDateTuNgay;

    }
    if (this.search.NoiChiDinhId == 0) {
      this.search.NoiChiDinhId == null;
    }
    this.search.DenNgayUTC = CommonService.formatDateTime(this.search.DenNgay, "mm/dd/yyyy");
    this.search.TuNgayUTC = CommonService.formatDateTime(this.search.TuNgay, "mm/dd/yyyy");
    let queryStringSearch = JSON.stringify(this.search);
    this.urlGetDataGridChild = "BaoCao/GetDataForGridAsync?Json=" + queryStringSearch;
    this.urlGetPageDataGridChild = "BaoCao/GetDataBaoCaoLuuKetQuaXetNghiemHangNgayTotalPageForGridAsync?Json=" + queryStringSearch;
    this.grid._additionalSearchString = queryStringSearch;
    this.grid.search();
  }
  extOnDataBound(event) {
    if (event != undefined && event != null && event != "") {
      if (event.Data.length != 0) {
        this.ishowView = true;
      }
      else {
        this.ishowView = false;
      }
    }
  }
  returnDetail() {
    this.search.DenNgayUTC = CommonService.formatDateTime(this.search.DenNgay, "mm/dd/yyyy");
    this.search.TuNgayUTC = CommonService.formatDateTime(this.search.TuNgay, "mm/dd/yyyy");
    let queryStringSearch = JSON.stringify(this.search);
    return queryStringSearch;
  }
  XuatBaoCao() {
    if(this.search.TuNgay==null || this.search.DenNgay==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }
    this.search.Hosting = "http://" + window.location.host;
    this.search.DenNgayUTC = CommonService.formatDateTime(this.search.DenNgay, "mm/dd/yyyy");
    this.search.TuNgayUTC = CommonService.formatDateTime(this.search.TuNgay, "mm/dd/yyyy");
    let queryStringSearch = JSON.stringify(this.search);
    window.location.href = environment.api_url + "/BaoCao/ExportBaoCaoLuuKetQuaXetNghiemHangNgay?Json=" + queryStringSearch;
  }
  XuatPDF() {
    if(this.search.TuNgay==null || this.search.DenNgay==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }
    this.search.DenNgayUTC = CommonService.formatDateTime(this.search.DenNgay, "mm/dd/yyyy");
    this.search.TuNgayUTC = CommonService.formatDateTime(this.search.TuNgay, "mm/dd/yyyy");
    let queryStringSearch = JSON.stringify(this.search);
    if (this.authService.hasPermission(this.doucument, SecurityOperation.View)) {
      this.apiService.post<string>("BaoCao/XuLyInBaoCaoLuuKetQuaXetNghiemHangNgayAsync?Json=" + queryStringSearch).subscribe(res => {
        var arrHtml = [{
          Html: res,
          TenFile: "BaoCaoLuuKetQuaXetNghiemHangNgay",
          PageSize: "A4",
          PageOrientation: "Landscape",
        }];
        this.dialog.open(BcLuuKetQuaXetNghiemHangNgayPopupComponent, {
          disableClose: true,
          width: '1000px',
          data: { Model: arrHtml }
        }).afterClosed().subscribe(() => { });
      }, err => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });

    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
