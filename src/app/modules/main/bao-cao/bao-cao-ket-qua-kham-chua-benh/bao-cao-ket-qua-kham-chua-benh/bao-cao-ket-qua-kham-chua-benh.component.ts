import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialog } from "@angular/material";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { TimKiemBaoCaoKhamChuaBenh ,ColumnsTitleTable,BaoCaoKetQuaKhamChuaBenhAnVo} from '../bao-cao-ket-qua-kham-chua-benh.model';
import { BaoCaoKetQuaKhamChuaBenhPopupComponent } from '../bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-bao-cao-ket-qua-kham-chua-benh',
  templateUrl: './bao-cao-ket-qua-kham-chua-benh.component.html',
  styleUrls: ['./bao-cao-ket-qua-kham-chua-benh.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BaoCaoKetQuaKhamChuaBenhComponent implements OnInit {
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridDataSource: any = {
    data:[],
    total: 0
  };
  columnsTitleTable : ColumnsTitleTable[];
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  validationErrors : any;
  timKiemNangCaoObj: TimKiemBaoCaoKhamChuaBenh = new TimKiemBaoCaoKhamChuaBenh();
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }
  ngOnInit() {
    this.documentType = DocumentType.BaoCaoKetQuaKhamChuaBenh;
    if (this.timKiemNangCaoObj.TuNgayDenNgay.startDate == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.timKiemNangCaoObj.TuNgayDenNgay.startDate = this.minDateTuNgay;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgay.endDate == null) {
      this.minDateDenNgay = new Date();
      this.timKiemNangCaoObj.TuNgayDenNgay.endDate = this.minDateDenNgay;
    }
    // tạm thời đóng lại
    //this.XemBaoCao();
  }
  XemBaoCao() {
    this.columnsTitleTable = new Array<ColumnsTitleTable>();
    let baoCaoInfo = new BaoCaoKetQuaKhamChuaBenhAnVo();
    baoCaoInfo.DenNgay = this.timKiemNangCaoObj.TuNgayDenNgay.endDate;
    baoCaoInfo.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.startDate;
    this.apiService.post<any>("BaoCao/GetDataTemplateBaoCaoKetQuaKhamChuaBenhAsync", baoCaoInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.showPrintExport = true;
        let data = {
          Html: resultData
        };
        this.columnsTitleTable.push(data);
      }
    });
  }

  InbaoCao() {
    if (this.showPrintExport == true) {
      let baoCaoInfo = new BaoCaoKetQuaKhamChuaBenhAnVo();
      baoCaoInfo.DenNgay = this.timKiemNangCaoObj.TuNgayDenNgay.endDate;
      baoCaoInfo.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.startDate;
      if (window.location.protocol == "http:") {
        baoCaoInfo.hosting = "http://" + window.location.host;
      } else {
        baoCaoInfo.hosting = "https://" + window.location.host;
      }
      this.apiService.post<any>("BaoCao/InBaoCaoKetQuaKhamChuaBenh", baoCaoInfo).subscribe(
        (result) => {
          this.dialog.open(BaoCaoKetQuaKhamChuaBenhPopupComponent, {
            disableClose: true,
            width: '1000px',
            data: { Model: result }
          }).afterClosed().subscribe(() => {
          });
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
  }

  XuatBaoCao() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.showPopupLoadingData();
      let baoCaoInfo = new BaoCaoKetQuaKhamChuaBenhAnVo();
      baoCaoInfo.DenNgay = this.timKiemNangCaoObj.TuNgayDenNgay.endDate;
      baoCaoInfo.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.startDate;
      //tạm thời đóng lại
      //this.XemBaoCao();
      self.apiService.postExportExcel<string>('BaoCao/ExportBaoCaoKetQuaKhamChuaBenh',
        baoCaoInfo).subscribe(
          resultData => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoKetQuaKhamChuaBenh' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.validationErrors = err.ValidationErrors;
            self.notificationService.showError(err.Message);
            self.closePopupLoadingData();
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }
}
