import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GayBenhAn } from '../gay-benh-an.model';
@Component({
  selector: 'app-gay-benh-an-shared',
  templateUrl: './gay-benh-an-shared.component.html',
  styleUrls: ['./gay-benh-an-shared.component.scss']
})
export class GayBenhAnSharedComponent implements OnInit {
  gayBenhAn: GayBenhAn = new GayBenhAn();
  documentType: DocumentType = DocumentType.DanhMucGayBenhAn;
  @Input() validationErrors: any;

  @Input() isCreate: any;
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<GayBenhAn>("BenhAnDienTu/GetGayBenhAn?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            self.gayBenhAn = resultData;
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  getSharedData() {
    return this.gayBenhAn;
  }

}
