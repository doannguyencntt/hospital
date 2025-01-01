import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GoiKhongChietKhau, TrangThaiYeuCauDichVuKyThuatObjEnum } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icRedEye from '@iconify/icons-ic/twotone-remove-red-eye';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { Http, RequestOptions, ResponseContentType } from '@angular/http';
import { saveFile } from 'src/app/core/utilities/file-download.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LichSuHinhAnhClsPopupComponent } from '../lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { InPhieuKetQuaLayMau } from 'src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from 'src/app/modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';
import { LayMauXetNghiemKetQuaPopupComponent } from 'src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import { XemKetQuaCdhaTdcnPopupComponent } from 'src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component';

@Component({
  selector: 'app-lich-su-pttt-cls',
  templateUrl: './lich-su-pttt-cls.component.html',
  styleUrls: ['./lich-su-pttt-cls.component.scss']
})
export class LichSuPtttClsComponent implements OnInit {
  gridDataSource: any;
  gridColumns: any[] = [];
  icRedEye = icRedEye;
  groups: GroupDescriptor[] = [{
    field: 'Nhom', dir: null, aggregates: [
      { field: 'ThanhTien', aggregate: 'sum' },
      { field: 'BHYTThanhToan', aggregate: 'sum' },
      { field: 'SoTienMG', aggregate: 'sum' },
      { field: 'BNThanhToan', aggregate: 'sum' },
    ],
  }];

  groupCLSs: GroupDescriptor[] = [{ field: 'Nhom' }];
  goiKhongChietKhau: GoiKhongChietKhau[] = [];
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
  @ViewChild('congTienGroupFooterTemplate', { static: true }) congTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('nhomGiaTemplate', { static: true }) nhomGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
  @ViewChild('duocHuongBaoHiemTemplate', { static: true }) duocHuongBaoHiemTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
  @ViewChild('dichVuKyThuat', { static: true }) gridDichVuKyThuat: GridComponent;
  @ViewChild('xemKQTemplate', { static: true }) xemKQTemplate: TemplateRef<any>;
  @ViewChild('nhomXemKQTemplate', { static: true }) nhomXemKQTemplate: TemplateRef<any>;
  @ViewChild('sTTTemplate', { static: true }) sTTTemplate: TemplateRef<any>;

  dataPopup: any;
  documentType: DocumentType = DocumentType.LichSuPhauThuatThuThuat;
  validationErrors: any;
  @Input() yeuCauTiepNhanId: number;

  public totalThanhTien(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.goiKhongChietKhau.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
    }
  };
  trangThaiDichVuKyThuat: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private http: Http,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {

    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 35, Sortable: true, Template: this.sTTTemplate },
      { Field: "MaDichVu", Title: "Mã", Width: 60, ShowTooltip: true },
      { Field: "Nhom", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 150, ShowTooltip: true },
      { Field: "TenLoaiGia", Title: "Loại Giá", Width: 80, TemplateGroupFooter: this.congTienGroupFooterTemplate, TemplateFooter: this.tongTienFooterTemplate, Template: this.nhomGiaTemplate },
      { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "SoLan", Title: "SL", Width: 59, Template: this.soLuongTemplate },
      {
        Field: "ThanhTien", Title: "Thành Tiền", Width: 100,
        Template: this.thanhTienTemplate,
        TemplateFooter: this.thanhTienFooterTemplate,
        TemplateGroupFooter: this.thanhTienGroupFooterTemplate
      },
      { Field: "DonGiaBaoHiem", Title: "Đơn Giá BHYT", Width: 100, Template: this.donGiaBaoHiemTemplate },
      { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemTemplate },
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 150, Template: this.noiThucHienTemplate },
      { Field: "TrangThai", Title: "Tình trạng", Width: 100, Template: this.trangThaiTemplate },
      { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 100 },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 100 },
      { Field: "NhanVienThucHien", Title: "Người thực hiện", Width: 100 },
      { Field: "XemKetQua", Title: "Xem KQ", Width: 140, Sortable: true, Template: this.xemKQTemplate }
    ];

  }

  onDataBoundChild(event: any) {
    if (event != undefined && event != null) {
      this.goiKhongChietKhau = event.Data;

    }
  }

  xemKetQuaCLS(dataItem: any) {
    
    // if (dataItem.FileKetQuaCanLamSangs && dataItem.FileKetQuaCanLamSangs.length > 1) {
    this.dialog.open(XemKetQuaCdhaTdcnPopupComponent, {
      disableClose: false,
      width: '1000px',
      data: dataItem.Id
    }).afterClosed().subscribe(result => {
    });
    // } else {
    //   let type = null;
    //   let title = null;
    //   let description = null;
    //   if (dataItem.FileKetQuaCanLamSangs[0].LoaiFile == 2) {
    //     type = "PDF";
    //     title = "Xem tài liệu";
    //     description = dataItem.MoTa != undefined ? dataItem.MoTa : ""
    //   }
    //   else {
    //     type = "Image";
    //     title = "Xem ảnh";
    //     description = dataItem.MoTa != undefined ? dataItem.MoTa : ""
    //   }
    //   this.dialog.open(ViewImagePdfComponent, {
    //     disableClose: false,
    //     width: '1000px',
    //     height: 'auto',
    //     data: {
    //       Type: type, Title: title,
    //       Description: description,
    //       Src: dataItem.FileKetQuaCanLamSangs[0].Url
    //     }
    //   });
    // }

  }
  downloadFile(dataItem: any) {
    dataItem.FileKetQuaCanLamSangs.forEach(element => {
      if (element.LoaiFile == 10) {
        const params = new HttpParams({
          fromObject: {
            tenGuid: element.TenGuid,
            duongDan: element.DuongDan,
          },
        });
        this.apiService
          .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
          .subscribe((result) => {
            console.log(result);
            this.dataPopup = result;
            const options = new RequestOptions({ responseType: ResponseContentType.Blob });
            this.http.get(this.dataPopup, options).subscribe(res => {
              saveFile(res.blob(), element.TenGuid);
            }
            )
          });
      }
    });

  }

  OpenClickPopupXemKetQuaNhomXetNghiemCLS(dataItem: any) {
    let yeuCauKyThuat = dataItem.items.filter(w => w.TrangThai === "Đã thực hiện" && w.Nhom === dataItem.value);
    if (yeuCauKyThuat.length > 0) {
      this.xemKetQuaCLS(yeuCauKyThuat[0]);
    }
    else {
      this.notificationService.showError("Nhóm này chưa có kết quả");
    }
  }

  downloadFileNhomXetNghiem(dataItem: any) {
    let yeuCauKyThuat = dataItem.items.filter(w => w.TrangThai === "Đã thực hiện" && w.Nhom === dataItem.value);
    if (yeuCauKyThuat.length > 0) {
      this.downloadFile(yeuCauKyThuat[0]);
    }
    else {
      this.notificationService.showError("Nhóm này chưa có kết quả");
    }
  }

  kiemTraCoKetQuaCLSXetNghiem(lstYeuCauDichVuKyThuat) {
    let result = lstYeuCauDichVuKyThuat.filter(p => p.TrangThai !== 3 && p.LoaiDichVuKyThuat === 2)
    return result.length > 0;
  }

  inPhieuDuyetKetQua: InPhieuKetQuaLayMau = new InPhieuKetQuaLayMau();
  dataSource: any = { data: [], total: 0 }
  popupLoadingData: any;

  InPhieuXn() {
    let dialogRef: any;
    let dataChiTietXetNghiem: any[] = [];   
    this.apiService.post<any>("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          result.forEach(element => {
            if (element.ChiTietKetQuaXetNghiems != null) {
              element.ChiTietKetQuaXetNghiems.forEach(elements => {
                dataChiTietXetNghiem.push(elements);
              });
            }

          });
          dialogRef = this.dialog.open(ChonLoaiKetQuaXetNghiemPopupComponent, {
            disableClose: true,
            width: '1000px',
            // height: '300px',
            data: dataChiTietXetNghiem,
          }).afterClosed().subscribe((result) => {
            if (result != undefined && result != null && result != "") {
              if (result == 'No') {
                this.closePopupLoadingData();
              }
              else {
                this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                this.inPhieuDuyetKetQua.Header = true;
                this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                //this.apiService.postExportPdf<any>('XetNghiem/ExportPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                this.apiService.post<Array<string>>('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                  arrHtml => {
                    // const dateTimeNow = new Date();
                    // CommonService.downLoadFile(resData, 'application/pdf', 'KetQuaXetNghiem' + dateTimeNow.getDate() + dateTimeNow.getMonth() + dateTimeNow.getFullYear() + '.pdf');
                    //   this.closePopupLoadingData();
                    this.dialog.open(LayMauXetNghiemKetQuaPopupComponent, {
                      disableClose: false,
                      width: '1000px',
                      data: arrHtml
                    }).afterClosed().subscribe(result => {
                    });
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
          });
        };
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
}
