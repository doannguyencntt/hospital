import { Component, OnInit, ViewChild, Input, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
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
import { BaoCaoKetQuaKhamChuaBenh } from '../bao-cao-ket-qua-kham-chua-benh-kt';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ColumnsTitleTable } from '../../bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.model';

declare var jQuery: any;

@Component({
  selector: 'app-danh-sach-bao-cao-ket-qua-kham-chua-benh-kt',
  templateUrl: './danh-sach-bao-cao-ket-qua-kham-chua-benh-kt.component.html',
  styleUrls: ['./danh-sach-bao-cao-ket-qua-kham-chua-benh-kt.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class DanhSachBaoCaoKetQuaKhamChuaBenhKTComponent implements OnInit {
  baoCaoSearch: BaoCaoKetQuaKhamChuaBenh = new BaoCaoKetQuaKhamChuaBenh();

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
  htmlKetQuaKhamChuaBenh: any = null;

  _isLoading: boolean = false;
  _isMessage: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  @Input() heightToolbar: number = 140;

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
    this.documentType = DocumentType.BaoCaoKetQuaKhamChuaBenhKT;

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDay = this.getMonday(new Date());

    if (this.baoCaoSearch.TuNgay == null) {
      this.baoCaoSearch.TuNgay = firstDay;
    }
    if (this.baoCaoSearch.DenNgay == null) {
      this.baoCaoSearch.DenNgay = new Date();
      this.baoCaoSearch.DenNgay.setHours(23, 59, 59);
    }

  }

  getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }


  columnsTitleTable : ColumnsTitleTable[];
  xemBaoCao() {
    this.columnsTitleTable = new Array<ColumnsTitleTable>();
    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    this.showLoadingPopup();
    this.apiService.post<any>("BaoCao/GetDataBaoCaoKetQuaKhamChuaBenhKTForGrid", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {     
        let data = {
          Html: resultData
        };
        this.columnsTitleTable.push(data);
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
        ('BaoCao/ExportBaoCaoKetQuaKhamChuaBenhKT', this.baoCaoSearch)
        .subscribe(
          resultData => {
            self.dialog.closeAll();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'BaoCaoKetQuaKhamChuaBenhKT' + dateTimeNow.getFullYear() + '.xlsx');
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
