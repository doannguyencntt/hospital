import { Component, OnInit, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridComponent } from '@progress/kendo-angular-grid';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { BaoCaoTinhHinhBenhTatTuVong } from '../bao-cao-tinh-hinh-benh-tat-tu-vong';

declare var jQuery: any;

@Component({
  selector: 'app-ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component',
  templateUrl: './ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.html',
  styleUrls: ['./ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.scss']
})

export class DanhSachBaoCaoTinhHinhBenhTatTuVongComponent implements OnInit {
  baoCaoSearch: BaoCaoTinhHinhBenhTatTuVong = new BaoCaoTinhHinhBenhTatTuVong();

  //================================Begin icon==========================
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icClose = icClose;
  //================================End icon==========================

  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  height: number;
  documentType: DocumentType;
  ishowView: boolean = false;
  ishowViewData: boolean = false;
  take: number;
  loadingPopup: any;

  _isLoading: boolean = false;
  _isMessage: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;

  public pageSize = 50;
  public skip = 0;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  @Input() heightToolbar: number = 140;

  dataSource: any = {
    data: [],
    total: 0
  };
  gridDataSource: any = {
    data: [],
    total: 0
  };

  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  gridColumnsMaster: any[];
  gridColumns: any[];
  gridColumnsDetail: any[];
  public groupNhom = new Map();

  public aggregates: any[] = [
    { field: 'KhamBenh', aggregate: 'sum' }
  ];

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTinhHinhBenhTatTuVong;

    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    this.gridColumns = [
      { Field: "TT", Title: "TT", Width: 70 }, //0
      { Field: "STT", Title: "Số TT", Width: 70 }, //0
      { Field: "TenNhomBenh", Title: "Tên bệnh/ nhóm bệnh", Width: 300 }, //1
      { Field: "MaICD", Title: "Mã ICD 10", Width: 100 }, //2

      { Field: "_", Title: "Hoạt động khám bệnh", Width: 600 }, //3
      { Field: "HDKBSoLanKhamChung", Title: "Số lần khám chung", Width: 200 }, //4
      { Field: "HDKBSoLanKhamTreEm", Title: "Số lần khám trẻ em", Width: 200 }, //5
      { Field: "HDKBSoTuVong", Title: "Số tử vong", Width: 200 }, //6

      { Field: "_", Title: "Hoạt động điều trị", Width: 70 }, //7
      { Field: "_", Title: "Tổng số bệnh nhân", Width: 70 }, //8
      { Field: "TSBNSoMacBenh", Title: "Số mắc bệnh", Width: 70 }, //9
      { Field: "TSBNSoTuVong", Title: "Số tử vong", Width: 70 }, //10
      { Field: "TSBNNgayDieuTri", Title: "Ngày điều trị", Width: 70 }, //11

      { Field: "_", Title: "Trong đó TE <= 15 tuổi", Width: 70 }, //12
      { Field: "_", Title: "Mắc", Width: 70 }, //13
      { Field: "TEMacTS", Title: "TS", Width: 70 }, //16
      { Field: "TEMacDuoi6T", Title: "<6 tuổi", Width: 70 }, //17

      { Field: "_", Title: "Số tử vong", Width: 70 }, //14
      { Field: "TESoTuVongTS", Title: "TS", Width: 70 }, //18
      { Field: "TESoTuVongDuoi6T", Title: "<6 tuổi", Width: 70 }, //19

      { Field: "_", Title: "TS ngày điều trị", Width: 70 }, //15
      { Field: "TENgayDieuTriTS", Title: "TS", Width: 70 }, //20
      { Field: "TENgayDieuTriDuoi6T", Title: "<6 tuổi", Width: 70 }, //21

      { Field: "_", Title: "Trong đó > 60 tuổi", Width: 70 }, //22
      { Field: "_", Title: "Số mắc bệnh", Width: 70 }, //23
      { Field: "Tren60TMacBenhTS", Title: "T.Số", Width: 70 }, //25
      { Field: "Tren60TMacBenhLaNu", Title: "Nữ", Width: 70 }, //26

      { Field: "_", Title: "Số tử vong", Width: 70 }, //24      
      { Field: "Tren60TTuVongTS", Title: "T.Số", Width: 70 }, //27
      { Field: "Tren60TTuVongLaNu", Title: "Nữ", Width: 70 }, //28
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoSearch.TuNgay == null) {
      this.baoCaoSearch.TuNgay = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgay == null) {
      this.baoCaoSearch.DenNgay = new Date();
      this.baoCaoSearch.DenNgay.setHours(23, 59, 59);
    }

  }

  public pageChange(event): void {
    this.skip = event.skip;
    if (this.dataSource.data.length == 0) {
      this.xemBaoCao();
    } else {
      var takeTo = this.skip + this.pageSize;
      console.log(this.dataSource.data)
      let gridData = this.dataSource.data.slice(this.skip, takeTo);
      this.gridDataSource = {
        data: gridData,
        total: this.dataSource.total
      };
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
    var widthParent = jQuery("#baoCaoGrid").parent().width();
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

  sumHDKBSoLanKhamChung: number = 0;
  sumHDKBSoLanKhamTreEm: number = 0;
  sumHDKBSoTuVong: number = 0;

  sumTSBNSoMacBenh: number = 0;
  sumTSBNSoTuVong: number = 0;
  sumTSBNNgayDieuTri: number = 0;

  sumTEMacTS: number = 0;
  sumTEMacDuoi6T: number = 0;
  sumTESoTuVongTS: number = 0;
  sumTESoTuVongDuoi6T: number = 0;
  sumTENgayDieuTriTS: number = 0;
  sumTENgayDieuTriDuoi6T: number = 0;

  sumTren60TMacBenhTS: number = 0;
  sumTren60TMacBenhLaNu: number = 0;
  sumTren60TTuVongTS: number = 0;
  sumTren60TTuVongLaNu: number = 0;

  xemBaoCao() {
    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    this.showLoadingPopup();
    this.apiService.post<any>("BaoCao/GetDataTinhHinhBenhTatTuVongForGrid", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.gridDataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        this.pageSize = resultData.TotalRowCount;

        this.sumHDKBSoLanKhamChung = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { HDKBSoLanKhamChung: number; }) => sum + item.HDKBSoLanKhamChung, 0);
        this.sumHDKBSoLanKhamTreEm = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { HDKBSoLanKhamTreEm: number; }) => sum + item.HDKBSoLanKhamTreEm, 0);
        this.sumHDKBSoTuVong = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { HDKBSoTuVong: number; }) => sum + item.HDKBSoTuVong, 0);

        this.sumTSBNSoMacBenh = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { TSBNSoMacBenh: number; }) => sum + item.TSBNSoMacBenh, 0);
        this.sumTSBNSoTuVong = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { TSBNSoTuVong: number; }) => sum + item.TSBNSoTuVong, 0);
        this.sumTSBNNgayDieuTri = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { TSBNNgayDieuTri: number; }) => sum + item.TSBNNgayDieuTri, 0);

        this.sumTEMacTS = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { TEMacTS: number; }) => sum + item.TEMacTS, 0);
        this.sumTEMacDuoi6T = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { TEMacDuoi6T: number; }) => sum + item.TEMacDuoi6T, 0);

        this.sumTESoTuVongTS = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { TESoTuVongTS: number; }) => sum + item.TESoTuVongTS, 0);
        this.sumTESoTuVongDuoi6T = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { TESoTuVongDuoi6T: number; }) => sum + item.TESoTuVongDuoi6T, 0);

        this.sumTENgayDieuTriTS = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { TENgayDieuTriTS: number; }) => sum + item.TENgayDieuTriTS, 0);
        this.sumTENgayDieuTriDuoi6T = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { TENgayDieuTriDuoi6T: number; }) => sum + item.TENgayDieuTriDuoi6T, 0);

        this.sumTren60TMacBenhTS = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { Tren60TMacBenhTS: number; }) => sum + item.Tren60TMacBenhTS, 0);
        this.sumTren60TMacBenhLaNu = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { Tren60TMacBenhLaNu: number; }) => sum + item.Tren60TMacBenhLaNu, 0);

        this.sumTren60TTuVongTS = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { Tren60TTuVongTS: number; }) => sum + item.Tren60TTuVongTS, 0);
        this.sumTren60TTuVongLaNu = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum: number, item: { Tren60TTuVongLaNu: number; }) => sum + item.Tren60TTuVongLaNu, 0);



        this.closeAllDialogs();
      }
    });
  }

  xuatBaoCao() {
    const self = this;
    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      self.apiService.postExportExcel<string>
        ('BaoCao/ExportBaoCaoTinhHinhBenhTatTuVong', this.baoCaoSearch)
        .subscribe(
          resultData => {
            self.dialog.closeAll();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'TinhHinhBenhTatTuVong' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
            self.dialog.closeAll();

          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showLoadingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải...' }
      });
    }
  }

  showSavingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang lưu...' }
      });
    }
  }

  closeAllDialogs() {
    if (this.loadingPopup) {
      this.loadingPopup.close();
      this.loadingPopup = null;
    }
  }
}
