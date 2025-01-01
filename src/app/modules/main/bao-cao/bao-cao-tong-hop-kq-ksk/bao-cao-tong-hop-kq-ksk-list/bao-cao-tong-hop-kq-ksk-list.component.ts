import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input,ViewEncapsulation } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { process } from '@progress/kendo-data-query';
import { BaoCaoTongHopKetQuaKSK } from '../bao-cao-tong-hop-kq-ksk.model';


@Component({
  selector: 'app-bao-cao-tong-hop-kq-ksk-list',
  templateUrl: './bao-cao-tong-hop-kq-ksk-list.component.html',
  styleUrls: ['./bao-cao-tong-hop-kq-ksk-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BaoCaoTongHopKqKskListComponent implements OnInit {
  documentType: DocumentType;
  baoCaoSearch: BaoCaoTongHopKetQuaKSK = new BaoCaoTongHopKetQuaKSK ();

  // inBaoCaoXuatNhapTon: InBaoCaoXuatNhapTonVT  = new InBaoCaoXuatNhapTonVT ();
  disableXemXuatExcel : boolean = false;
  
  public pageSize = 50;
  public skip = 0;
  
  html:string = null ;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTongHopKetQuaKSK;
    jQuery("#content").css({"height":jQuery(window).height()-187});
  }
  exportExcel() {
    
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      if(this.baoCaoSearch.CongTyId == null || this.baoCaoSearch.HopDongId == null)
      {
        this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng"); 
        return;
      }
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTongHopKetQuaKSK", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTongHopKetQuaKSK" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          , err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  xem(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      if(this.baoCaoSearch.CongTyId == null || this.baoCaoSearch.HopDongId == null)
      {
        this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng"); 
        return;
      }
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang loading ...' }
      });
      this.apiService.post<string>("BaoCao/GetHTMLBaoCaoTongHopKetQuaKSK",this.baoCaoSearch).subscribe(resultData => {
        if (resultData !== undefined && resultData != null && resultData != "") {
          this.html = resultData;
          this.dialog.closeAll();
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  changeLookupHopDong(event){
    if(event && event.length > 0 && this.baoCaoSearch.CongTyId && !this.baoCaoSearch.HopDongId )
    {
      this.baoCaoSearch.HopDongId = event[0].KeyId;
    }
  }
  changeCongTy(event){
    this.baoCaoSearch.CongTyId = event;
    this.baoCaoSearch.HopDongId = null;
  }
}
