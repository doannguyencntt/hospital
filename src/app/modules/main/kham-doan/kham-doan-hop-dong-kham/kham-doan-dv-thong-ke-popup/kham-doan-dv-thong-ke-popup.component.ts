import { Component, OnInit, Inject, ChangeDetectorRef, TemplateRef, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SortDescriptor } from '@progress/kendo-data-query';
import { KhamDoanDvGoiKhamPopupComponent } from '../kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { XuatFileExcelTrongGoiHoacNgoaiGoi } from '../kham-doan-hop-dong-kham.model';
@Component({
  selector: 'app-kham-doan-dv-thong-ke-popup',
  templateUrl: './kham-doan-dv-thong-ke-popup.component.html',
  styleUrls: ['./kham-doan-dv-thong-ke-popup.component.scss']
})
export class KhamDoanDvThongKePopupComponent implements OnInit {
  xuatFileExcelTrongGoiHoacNgoaiGoi: XuatFileExcelTrongGoiHoacNgoaiGoi = new XuatFileExcelTrongGoiHoacNgoaiGoi();
  popupLoadingData: any;
  icClose = icClose;
  disabled: boolean = null;
  documentType = DocumentType.KhamDoanHopDongKham;
  gridDichVuKhamDoanColumns: any[] = [];
  dataToSumChiPhi: any[] = [];
  hopDongKhamSucKhoeId: number;
  @ViewChild('tongChiFooterTemplate', { static: true }) tongChiFooterTemplate: TemplateRef<any>;
  @ViewChild('tongChiTrongGoiTemplate', { static: true }) tongChiTrongGoiTemplate: TemplateRef<any>;
  @ViewChild('tongChiNgoaiGoiTemplate', { static: true }) tongChiNgoaiGoiTemplate: TemplateRef<any>;
  @ViewChild('tongChiTrongGoiGroupFooterTemplate', { static: true }) tongChiTrongGoiGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('tongChiNgoaiGoiGroupFooterTemplate', { static: true }) tongChiNgoaiGoiGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('tongChiTrongGoiFooterTemplate', { static: true }) tongChiTrongGoiFooterTemplate: TemplateRef<any>;
  @ViewChild('tongChiNgoaiGoiFooterTemplate', { static: true }) tongChiNgoaiGoiFooterTemplate: TemplateRef<any>;

  public totalTongChiPhi(field: any) {
    switch (field) {
      case 'TongChiPhiTrongGoi':
        return this.dataToSumChiPhi.reduce((sum: any, item: { TongChiPhiTrongGoi: any; }) => sum + item.TongChiPhiTrongGoi, 0);
      case 'TongChiPhiNgoaiGoi':
        return this.dataToSumChiPhi.reduce((sum: any, item: { TongChiPhiNgoaiGoi: any; }) => sum + item.TongChiPhiNgoaiGoi, 0);
    }
  };
  sort: SortDescriptor[] =
    [
      {
        field: "Id",
        dir: "asc"
      }]


  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<KhamDoanDvThongKePopupComponent>
  ) { }

  ngOnInit() {
    this.loadingPage();
    this.hopDongKhamSucKhoeId = parseInt(this.data.HopDongKhamSucKhoeId);
    this.gridDichVuKhamDoanColumns = [
      { Field: "MaBN", Title: "Mã NB", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HoTen", Title: "Họ Tên", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "GioiTinh", Title: "Giới tính", Width: 50, Sortable: false },
      { Field: "NamSinh", Title: "Năm sinh", Width: 50, Sortable: false },
      { Field: "CMND", Title: "CMND", Width: 70, Sortable: false, TemplateFooter: this.tongChiFooterTemplate },
      { Field: "TongChiPhiTrongGoi", Title: "Tổng chi phí trong gói", Width: 80, Sortable: false, Template: this.tongChiTrongGoiTemplate, TemplateFooter: this.tongChiTrongGoiFooterTemplate, TemplateGroupFooter: this.tongChiTrongGoiGroupFooterTemplate },
      { Field: "TongChiPhiNgoaiGoi", Title: "Tổng chi phí ngoài gói", Width: 80, Sortable: false, Template: this.tongChiNgoaiGoiTemplate, TemplateFooter: this.tongChiNgoaiGoiFooterTemplate, TemplateGroupFooter: this.tongChiNgoaiGoiGroupFooterTemplate },
    ];
  }

  chiTietTrongGoi(goiKhamSucKhoeIds: any, yeuCauTiepNhanId: number, benhNhanId: number) {
    this.dialog.open(KhamDoanDvGoiKhamPopupComponent, {
      width: "1400px",
      disableClose: true,
      data: { GoiKhamSucKhoeIds: goiKhamSucKhoeIds, YeuCauTiepNhanId: yeuCauTiepNhanId, BenhNhanId: benhNhanId, Title: "TỔNG CHI PHÍ TRONG GÓI", LaDichVuTrongGoi: true }
    }).afterClosed().subscribe(() => {
    });
  }

  chiTietNgoaiGoi(yeuCauTiepNhanId: number, benhNhanId: number) {
    this.dialog.open(KhamDoanDvGoiKhamPopupComponent, {
      width: "1400px",
      disableClose: true,
      data: { YeuCauTiepNhanId: yeuCauTiepNhanId, BenhNhanId: benhNhanId, Title: "TỔNG CHI PHÍ NGOÀI GÓI", LaDichVuTrongGoi: false }
    }).afterClosed().subscribe(() => {
    });
  }

  onDataBoundChild(data: any) {
    this.closePopupLoadingData();
    this.dataToSumChiPhi = data.Data;
    if (data.Data.some((item: { TongChiPhiNgoaiGoi: number; }) => item.TongChiPhiNgoaiGoi != 0)) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  xuatExcel(laDichVuTrongGoi: boolean) {
    let dia = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      if (laDichVuTrongGoi) {
        this.xuatFileExcelTrongGoiHoacNgoaiGoi.HopDongKhamSucKhoeId = this.hopDongKhamSucKhoeId;
        this.xuatFileExcelTrongGoiHoacNgoaiGoi.LaDichVuTrongGoi = laDichVuTrongGoi;
      }
      else {
        this.xuatFileExcelTrongGoiHoacNgoaiGoi.HopDongKhamSucKhoeId = this.hopDongKhamSucKhoeId;
        this.xuatFileExcelTrongGoiHoacNgoaiGoi.LaDichVuTrongGoi = laDichVuTrongGoi;
      }

      this.apiService.postExportExcel<string>("KhamDoan/XuatFileExcelTrongGoi", this.xuatFileExcelTrongGoiHoacNgoaiGoi).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "TongHopChiPhiKetQuaKSKTheoHopDong" + dateTimeNow.getFullYear() + ".xlsx");
        dia.close();
        // this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        // this.dialog.closeAll();
        dia.close();

      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

}
