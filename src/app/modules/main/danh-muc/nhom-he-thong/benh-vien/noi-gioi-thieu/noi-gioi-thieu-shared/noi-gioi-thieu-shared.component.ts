import { Component, OnInit } from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';

import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { NoiGioiThieu } from '../noi-gioi-thieu.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NoiGioiThieuPopupComponent } from '../noi-gioi-thieu-popup/noi-gioi-thieu-popup.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
@Component({
  selector: 'app-noi-gioi-thieu-shared',
  templateUrl: './noi-gioi-thieu-shared.component.html',
  styleUrls: ['./noi-gioi-thieu-shared.component.scss']
})
export class NoiGioiThieuSharedComponent implements OnInit {
  noiGioiThieu = {} as NoiGioiThieu;
  validationErrors: any;
  isCreate = true;
  icAdd = icAdd;
  documentType: DocumentType = DocumentType.DanhMucNoiGioiThieu;
  constructor(private route: ActivatedRoute, private baseService: BaseService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.noiGioiThieu = new NoiGioiThieu();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
    this.noiGioiThieu.IsDisabled = false;
  }

  getById(id: number) {
    this.baseService.getById<NoiGioiThieu>(id).subscribe(resultData => {
      this.noiGioiThieu = resultData;
    });
  }
  themDonVi() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.dialog.open(NoiGioiThieuPopupComponent, {
        disableClose: false,
        width: '1400px',
        data: {
        }
      }).afterClosed().subscribe(result => {

      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  chonDonVi(event: any) {
    if (event != undefined && event != null) {
      this.noiGioiThieu.DonVi = event.DisplayName;
    }
    else {
      this.noiGioiThieu.DonVi = null;;
    }
  }
  getSharedData() {
    return this.noiGioiThieu;
  }
}
