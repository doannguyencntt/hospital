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
import { BaoCaoDuTruSoLuongThucHienDVLSCLS } from '../bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.model';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list',
  templateUrl: './bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.html',
  styleUrls: ['./bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.scss']
})
export class BaoCaoDuTruSoLuongThucHienDvLsClsListComponent implements OnInit {
  documentType: DocumentType;
  baoCaoSearch: BaoCaoDuTruSoLuongThucHienDVLSCLS = new BaoCaoDuTruSoLuongThucHienDVLSCLS ();

  // inBaoCaoXuatNhapTon: InBaoCaoXuatNhapTonVT  = new InBaoCaoXuatNhapTonVT ();
  disableXemXuatExcel : boolean = false;
  
  public pageSize = 50;
  public skip = 0;
  
  html:string = null ;
  gridDataSource: any = {
    data:[],
    total: 0
  };
  groups: GroupDescriptor[] = [{ field: 'NhomDichVu' }];
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  gridColumns: any[];
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamDoanThongKeSoNguoiKhamSucKhoeLSCLS;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 20 , Template: this.sttTemplate },     
      { Field: "NhomDichVu", Title: "NhomDichVu", Width: 180, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate},
      { Field: "TenDV", Title: "Tên DV", Width: 120 },
      { Field: "SLNam", Title: "Nam", Width: 120 },
      { Field: "SLNu", Title: "Nữ", Width: 120 },
      {
        Field: "Tong", Title: "Tổng", Width: 120
      }
    ];
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
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoDuTruSoLuongNguoiThucHienDvLSCLS", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDuTruSoLuongNguoiThucHienDvLSCLS" + dateTimeNow.getFullYear() + ".xlsx");
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
  lastValueFormat(str : string){
    let strGroup = str.split(':');
    if(strGroup.length != 0)
    {
        return strGroup[strGroup.length];
    }
}
  xem(event:any){
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
      if(event != null  && event != true){
        this.baoCaoSearch.Skip =event;
      }
      this.apiService.post<any>("BaoCao/GetHTMLDuTruSoLuongNguoiThucHienDvLSCLS",this.baoCaoSearch).subscribe(resultData => {
        if (resultData !== undefined && resultData != null && resultData != "") {
          this.gridDataSource={
            data:[],
            total:0
          };
          this.gridDataSource={
            data:resultData.Data,
            total:resultData.TotalRowCount
          };
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
    this.baoCaoSearch.Skip= 0;
    this.setSkip();
  }
  changeCongTy(event){
    this.baoCaoSearch.CongTyId = event;
    this.baoCaoSearch.HopDongId = null;
    this.baoCaoSearch.Skip= 0;
    this.setSkip();
    
  }
  setSkip() {
    this.gridChild._skip = 0;
  }
   pageChange(event): void {
    this.xem(event);
  }
}
