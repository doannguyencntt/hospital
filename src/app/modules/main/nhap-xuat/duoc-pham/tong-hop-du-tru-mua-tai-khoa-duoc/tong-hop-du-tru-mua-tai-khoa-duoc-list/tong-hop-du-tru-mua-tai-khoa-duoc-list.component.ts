import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, SimpleChanges, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";

import { FormControl } from '@angular/forms';
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";

import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from "src/app/core/utilities/common.helper";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ListStatusSelectTabTHDTKhoa }  from '../tong-hop-du-tru-mua-tai-khoa-duoc.model';

@Component({
  selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-list',
  templateUrl: './tong-hop-du-tru-mua-tai-khoa-duoc-list.component.html',
  styleUrls: ['./tong-hop-du-tru-mua-tai-khoa-duoc-list.component.scss']
})
export class TongHopDuTruMuaTaiKhoaDuocListComponent implements OnInit {
  baseRoute: string = "/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa";
  lstStatusSelectTabTHDTKhoa: ListStatusSelectTabTHDTKhoa = new ListStatusSelectTabTHDTKhoa();
  indexTap:number = 0;
  data : string;
  holdQuery: any = null;
    constructor( private dialog: MatDialog,
      private router: Router,
      private apiService: ApiService,
      private authService: AuthService,
      private notificationService: NotificationService,
      private cd: ChangeDetectorRef,
      private route: ActivatedRoute,
      private location: Location,) { }

    ngOnInit() {
      if (this.route.snapshot.queryParams.holdQuery != null) {
        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }
      if (
        this.holdQuery != null &&
        LocalStorageHelper.getItem('testTapIndexString') != null
      ) {
        this.data = LocalStorageHelper.getItem(
          'testTapIndexString'
        );
        this.lstStatusSelectTabTHDTKhoa = JSON.parse(this.data);
      }
      // if(LocalStorageHelper.getItem('testTapIndexString') != null)
      // {
      //   this.data = LocalStorageHelper.getItem(
      //     'testTapIndexString'
      //   );
      //   this.lstStatusSelectTabTHDTKhoa = JSON.parse(this.data);
      // }
      else{
        LocalStorageHelper.setItem('testTapIndexString', null);
        this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
        this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
        this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
      }
    }
    chuyenDen(element: any, event: any) {
      if(event.index == 0)
      {
        this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
        this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
        this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
      }
      if(event.index == 1)
      {
        this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
        this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
        this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
      }
      if(event.index == 2)
      {
        this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
        this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
        this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
      }
      LocalStorageHelper.setItem(
        'testTapIndexString',
        JSON.stringify(this.lstStatusSelectTabTHDTKhoa)
    );
    }
}
