import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component'
import { ApiService } from 'src/app/core/services/api.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/utilities/common.helper';
// import { NhapKhoDuocPhamSearch, LookupItemViTriVo, rangeDate } from '../nhap-kho.model';
import { FormControl } from '@angular/forms';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nhap-kho-list',
  templateUrl: './nhap-kho-list.component.html',
  styleUrls: ['./nhap-kho-list.component.scss']
})
export class NhapKhoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
