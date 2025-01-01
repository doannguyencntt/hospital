import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LichSuKhamChuaBenhTimKiemNangCao, PhieuInLichSuKhamQueryInfo } from '../lich-su-kham-chua-benh.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LichSuKhamChuaBenhNguoiBenhPopupComponent } from '../lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component';
import { LoaiLichSuKhamChuaBenh } from 'src/app/shared/enum/lich-su-kham-chua-benh.enum';

@Component({
  selector: 'app-lich-su-kham-chua-benh-list',
  templateUrl: './lich-su-kham-chua-benh-list.component.html',
  styleUrls: ['./lich-su-kham-chua-benh-list.component.scss'],
  animations: [stagger60ms, fadeInUp400ms]
})
export class LichSuKhamChuaBenhListComponent implements OnInit {

  icSearch = icSearch;

  documentType: DocumentType = DocumentType.LichSuKhamChuaBenh;
  gridColumns: any[] = [];
  modelQRCode: any;
  isScanF1: boolean = false;
  strAdditionalSearchString: string = "";
  searchCtrl = new FormControl();
  baseRoute: string = "/lich-su-kham-chua-benh";
  popupLoadingData: any;
  timKiemNangCaoObj: LichSuKhamChuaBenhTimKiemNangCao = new LichSuKhamChuaBenhTimKiemNangCao();

  nguoiBenhId: number = null;
  lichSuKhamChuaBenh: any = null;
  coQuyenXemYLenh: boolean = false;
  loaiLichSuKhamChuaBenhYLenh: LoaiLichSuKhamChuaBenh = LoaiLichSuKhamChuaBenh.YLenh;
  filePdf: any = null;
  fileUrl: any = null;
  hosting: string = "";

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.coQuyenXemYLenh = this.authService.hasPermission(DocumentType.LichSuKhamChuaBenhKhamBenh, SecurityOperation.View) 
                          || this.authService.hasPermission(DocumentType.LichSuKhamChuaBenhYLenh, SecurityOperation.View);

    this.hosting = window.location.protocol + "//" + window.location.host;
  }

  timeoutSearchChange: any;
  searchChanges(event){
    var self = this;
        if (event != null && typeof event == "string" && event.endsWith("@")) {
            self.timeoutSearchChange = setTimeout(function () {
                self.modelQRCode = event;
                self.changeQR(self.modelQRCode);
            }, 10);
        }
        else if ((event == null || event == "") && this.strAdditionalSearchString != "") {
            this.modelQRCode = null;
            this.timKiemNangCao();
        }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.timKiemNangCaoObj.SearchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
    }

    var queryString = JSON.stringify(this.timKiemNangCaoObj);
    LocalStorageHelper.setItem("additionalSearchStringLichSuKhamChuaBenh",queryString);

    // this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
    // this.gridChild.search();


    // xử lý chỗ này
    this.timKiemNangCaoObj.CoQuyenXemKhamBenh = this.authService.hasPermission(DocumentType.LichSuKhamChuaBenhKhamBenh, SecurityOperation.View);
    this.timKiemNangCaoObj.CoQuyenXemCanLamSang = this.authService.hasPermission(DocumentType.LichSuKhamChuaBenhCanLamSang, SecurityOperation.View);
    this.timKiemNangCaoObj.CoQuyenXemYLenh = this.authService.hasPermission(DocumentType.LichSuKhamChuaBenhYLenh, SecurityOperation.View);

    this.showPopupLoadingData();
    this.apiService.post<any>("LichSuKhamChuaBenh/TimKiemNguoiBenhDaTiepNhan", this.timKiemNangCaoObj).subscribe(
      (res) => {
        this.closePopupLoadingData();
          if(res && res.Data != null)
          {
            if(res.Data.length == 1)
            {
              this.nguoiBenhId = res.Data[0].Id;
              this.getLichSuKhamChuaBenhTheoNguoiBenh();
            }
            else if(res.Data.length > 1)
            {
              this.showPopupTimKiemNguoiBenh();
            }
          }
      },
      (err: ApiError) => {
          if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
      });
  }

  showPopupTimKiemNguoiBenh() {
    let dialogRef = this.dialog.open(LichSuKhamChuaBenhNguoiBenhPopupComponent, {
      disableClose: false,
      width: '1400px',
      height: '600px',
      data: this.timKiemNangCaoObj,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null && result != undefined) {
        this.nguoiBenhId = result;
        this.getLichSuKhamChuaBenhTheoNguoiBenh();
      }
    });
  }

  getLichSuKhamChuaBenhTheoNguoiBenh() {
    if (this.nguoiBenhId != null && this.nguoiBenhId != 0) {
      this.showPopupLoadingData();
      this.apiService.get<any>("LichSuKhamChuaBenh/GetLichSuKhamChuaBenhTheoNguoiBenh?nguoiBenhId=" + this.nguoiBenhId).subscribe(
        (res) => {
          this.closePopupLoadingData();
          if (res) {
            this.lichSuKhamChuaBenh = res;
            this.fileUrl = null;
            this.filePdf = null;
          }
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
    }
  }

  QuetMaQRCodeClick() {
    let elementBarcode: HTMLElement = document.getElementById(
      "barcodeActive"
    ) as HTMLElement;
    if (elementBarcode != undefined) {
      elementBarcode.click();
    }
  }

  changeQR(event) {
    if (event != null && typeof event == "string" && event.endsWith("@")) {
        var dataTimKiem = event.split("|");
        if (dataTimKiem.length > 1) {
            this.timKiemNangCaoObj.SearchString = dataTimKiem[0];
        } else {
            this.timKiemNangCaoObj.SearchString = event.slice(0, -1);
        }
        this.timKiemNangCao();
    } else {
      this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
    }
    this.isScanF1 = false;
  }

  showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
    let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
    switch (typeLoading) {
      case EnumTypeLoadingData.View:
        mess = "Đang tải dữ liệu..."; break;
      case EnumTypeLoadingData.Update:
        mess = "Đang lưu dữ liệu..."; break;
      case EnumTypeLoadingData.Delete:
        mess = "Đang xóa dữ liệu..."; break;
      case EnumTypeLoadingData.Cancel:
        mess = "Đang hủy dữ liệu..."; break;
      default: mess = "Đang tải dữ liệu...";
    }
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: mess }
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }


  chonYeuCauTiepNhan(dataItem)
  {
    dataItem.HienLichSuChiTiet = !dataItem.HienLichSuChiTiet;
    // if(dataItem.HienLichSuChiTiet)
    // {
    //   this.getTatCaPhieuIn(dataItem);
    // }
    if (!dataItem.HienLichSuChiTiet) {
      dataItem.HienLichSuNoiTru = false;
    }
  }

  xemBenhAn(dataItem, hienBenhAn: boolean = true) {
    dataItem.HienLichSuChiTiet = true;
    dataItem.HienLichSuNoiTru = hienBenhAn;

    //this.getTatCaPhieuIn(dataItem);
  }

  getTatCaPhieuIn(dataItem){
    var objQueryInfo = new PhieuInLichSuKhamQueryInfo();
    objQueryInfo.YeuCauTiepNhanId = dataItem.YeuCauTiepNhanId;
    objQueryInfo.Hosting = this.hosting;
    objQueryInfo.HienLichSuNoiTru = dataItem.HienLichSuNoiTru;
    this.getThongTinPhieuInLichSuKham(objQueryInfo);
  }

  chonChiTietCanIn(dataItem, parent)
  {
    var objQueryInfo = new PhieuInLichSuKhamQueryInfo();
    objQueryInfo.YeuCauTiepNhanId = parent.YeuCauTiepNhanId;
    objQueryInfo.LoaiLichSuKhamChuaBenh = dataItem.LoaiLichSuKhamChuaBenh;
    objQueryInfo.LoaiLichSuKhamChuaBenhChiTiet = dataItem.LoaiLichSuKhamChuaBenhChiTiet;
    objQueryInfo.YeuCauDichVuId = dataItem.YeuCauDichVuId;
    objQueryInfo.NoiTruBenhAnId = dataItem.NoiTruBenhAnId;
    objQueryInfo.LoaiHoSoDieuTriNoiTru = dataItem.LoaiHoSoDieuTriNoiTru;
    objQueryInfo.HienLichSuNoiTru = parent.HienLichSuNoiTru;
    objQueryInfo.Hosting = this.hosting;
    objQueryInfo.NoiTruHoSoKhacId = dataItem.NoiTruHoSoKhacId;

    this.getThongTinPhieuInLichSuKham(objQueryInfo);
  }

  getThongTinPhieuInLichSuKham(objQueryInfo: any) {
    this.showPopupLoadingData();
    this.apiService.postExportPdf<any>('LichSuKhamChuaBenh/GetFilePDFLichSuKhamChuaBenhFromHtml', objQueryInfo).subscribe(
      file => {
        let newBlob = new Blob([file], { type: "application/pdf" });
        let datalocalURL = window.URL.createObjectURL(newBlob);
        this.fileUrl = datalocalURL;
        this.filePdf = file;
        this.closePopupLoadingData();
      },
      (err: ApiError) => {
        if (err.Message !== 'Validation Failed') {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }
}
