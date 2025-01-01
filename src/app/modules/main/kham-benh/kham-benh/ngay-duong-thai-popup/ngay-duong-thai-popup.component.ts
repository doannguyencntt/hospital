import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { CapNhatPhieuDuongThai } from '../../kham-benh.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { NotificationService } from "src/app/core/services/notification.service";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-ngay-duong-thai-popup',
  templateUrl: './ngay-duong-thai-popup.component.html',
  styleUrls: ['./ngay-duong-thai-popup.component.scss']
})
export class NgayDuongThaiPopupComponent implements OnInit {
  hostingName: string;
  modelPrint: any;
  src = '';
  icClose = icClose;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
  ) { }
  

  ngOnInit() {
    let vo ={
      YeuCauKhamBenhId:this.data
    };
    this.apiService.post<any>('KhamBenh/PhieuNghiDuongThai', vo)
    .subscribe((res) => {
      if (res != null) {
        this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(res);
        this.modelPrint = res;
      }
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      }
    );
  }
  getSharedPrintForm() {
    return new Promise(resolve => {
      resolve(this.modelPrint);
    });
  }

  close() {
    this.dialog.closeAll();
  }
}
