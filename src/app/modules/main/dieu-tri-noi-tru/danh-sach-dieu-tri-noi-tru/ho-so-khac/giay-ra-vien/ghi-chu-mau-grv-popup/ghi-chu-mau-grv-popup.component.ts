import { Component, OnInit, Inject ,ViewChild, TemplateRef} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { LookupItemVoGhiChuGiayRaVien } from '../../../../dieu-tri-noi-tru.model';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';

@Component({
  selector: 'app-ghi-chu-mau-grv-popup',
  templateUrl: './ghi-chu-mau-grv-popup.component.html',
  styleUrls: ['./ghi-chu-mau-grv-popup.component.scss']
})
export class GhiChuMauGrvPopupComponent implements OnInit {

  hostingName: string;
  icClose = icClose;
  lookupItemVoGhiChuGiayRaVien :LookupItemVoGhiChuGiayRaVien;
  gridColumns: any[];
  gridDataSource: any = {
    data:[],
    total: 0
  };
  @ViewChild('comBoBoxTemplate', { static: true }) comBoBoxTemplate: TemplateRef<any>;
  @ViewChild('textAreaTemplate', { static: true }) textAreaTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  constructor(public sanitizer: DomSanitizer, private dialogRef: MatDialogRef<any>, 
    private apiService: ApiService,
    private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.gridColumns = [
      { Field: "GhiChu", Title: "Ghi Chú", Width: 150 , Template: this.comBoBoxTemplate},
      { Field: "GhiChuText", Title: "Ghi chú mẫu", Width: 150, Template: this.textAreaTemplate },
      { Field: "Action", Title: "", Width: 50 , Template: this.actionTemplate}
    ];
    let lookupItemVoGhiChuGiayRaVien = new Array<LookupItemVoGhiChuGiayRaVien>();
    this.lookupItemVoGhiChuGiayRaVien = new LookupItemVoGhiChuGiayRaVien();
    lookupItemVoGhiChuGiayRaVien.push(this.lookupItemVoGhiChuGiayRaVien);
    this.gridDataSource={
      data:lookupItemVoGhiChuGiayRaVien,
      total:lookupItemVoGhiChuGiayRaVien.length
    };
  }
  changeGhiChu(event){
      if(event != undefined)
      {
        this.lookupItemVoGhiChuGiayRaVien.KeyId =event.KeyId;
        this.apiService.post<any>("DieuTriNoiTru/GetGhiChu?id=" + this.lookupItemVoGhiChuGiayRaVien.KeyId).subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              this.lookupItemVoGhiChuGiayRaVien.DisplayName = resultData;
            }
    
          },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          });
        
      }
  }
  close() {
      this.dialogRef.close();
  }
  Ok(){
    this.dialogRef.close(this.lookupItemVoGhiChuGiayRaVien);
  }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
}
