import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoHieuQuaCongViecSearch, InBaoCaoHieuQuaCongViec } from '../bao-cao-hieu-qua-cong-viec.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-bao-cao-hieu-qua-cong-viec-list',
  templateUrl: './bao-cao-hieu-qua-cong-viec-list.component.html',
  styleUrls: ['./bao-cao-hieu-qua-cong-viec-list.component.scss']
})
export class BaoCaoHieuQuaCongViecListComponent implements OnInit {
  icFilterList = icFilterList;
  baoCaoSearch: BaoCaoHieuQuaCongViecSearch = new BaoCaoHieuQuaCongViecSearch();
  documentType: DocumentType;
  inBaoCaoHoatDongKhoaKhamBenh: InBaoCaoHieuQuaCongViec = new InBaoCaoHieuQuaCongViec();
  gridColumns:any = []
  gridDataSource: any = {
    data:[],
    total: 0
  };

  public pageSize = 2;
  public skip = 0;

  showGrid: boolean = false;
  showPrintExport: boolean = false;

  sumYeuCau:number;
  sumDaHoanThanh:number;
  sumDangThucHien:number;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('tongCongTemplateFooter', { static: true }) tongCongTemplateFooter: TemplateRef<any>;
  @ViewChild('yeuCauTemplateFooter', { static: true }) yeuCauTemplateFooter: TemplateRef<any>;
  @ViewChild('daHoanThanhTemplateFooter', { static: true }) daHoanThanhTemplateFooter: TemplateRef<any>;
  @ViewChild('dangThucHienTemplateFooter', { static: true }) dangThucHienTemplateFooter: TemplateRef<any>;
  constructor(private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoHieuQuaCongViec;
    this.gridColumns = [
      {Field:"Khoa", Title:"Khoa", Width:100, TemplateFooter: this.tongCongTemplateFooter },
      {Field:"YeuCau", Title:"Yêu Cầu", Width:100, TemplateFooter: this.yeuCauTemplateFooter},
      {Field:"DaHoanThanh", Title:"Đã hoàn thành", Width:100, TemplateFooter: this.daHoanThanhTemplateFooter},
      {Field:"DangThucHien", Title:"Đang thực hiện", Width:100, TemplateFooter: this.dangThucHienTemplateFooter},
    ]
  }
  totalYeuCau() {
    if (this.gridDataSource.data != undefined) {
      this.sumYeuCau = this.gridDataSource.data.reduce((sum, item) => sum + item.YeuCau, 0);
      return this.sumYeuCau;
    }
  }

  totalDaHoanThanh() {
    if (this.gridDataSource.data != undefined) {
      this.sumDaHoanThanh = this.gridDataSource.data.reduce((sum, item) => sum + item.DaHoanThanh, 0);
      return this.sumDaHoanThanh;
    }
  }

  totalDangThucHien() {
    if (this.gridDataSource.data != undefined) {
      this.sumDangThucHien = this.gridDataSource.data.reduce((sum, item) => sum + item.DangThucHien, 0);
      return this.sumDangThucHien;
    }
  }

  percentDaHoanThanh() {
    if (this.gridDataSource.data != undefined) {
      return this.sumDaHoanThanh / this.sumYeuCau *100;
    }
  }

  percentDangThucHien() {
    if (this.gridDataSource.data != undefined) {
      return this.sumDangThucHien / this.sumYeuCau *100;
    }
  }

  // getFieldColumn(index: number) {
  //   return this.gridColumns[index].Field;
  // }
  // getTitleColumn(index: number) {
  //   // console.log(this.gridColumns[index])
  //   return this.gridColumns[index].Title;
  // }
  // getWidthColumn(index: number) {
  //   return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
  // }
  // getMinWidthColumn(minWidth: number) {
  //   var widthParent = jQuery("#baoCaoCongNoCongTyBhtn").parent().width();
  //   var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
  //   var totalWidth = this.gridColumns.filter((item) => {
  //     return item.Width != null;
  //   }).reduce((sum, item) => sum + item.Width, 0);
  //   if ((widthScreen < totalWidth + minWidth + 100)) {
  //     return minWidth;
  //   }
  //   else {
  //     return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
  //   }
  // }

  pageChange(event){
    this.skip = event;
    this.XemBaoCao();
    // var takeTo = +this.skip + +this.pageSize;
    // this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
    // this.gridView.total = this.gridDataSource.total;
  }

  seachChange(event){
    this.skip = 0;
    this.XemBaoCao();
  }

  XemBaoCao() {
    this.gridChild._isLoadingTotalPage = true;
    this.gridChild._isLoading = true;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoHieuQuaCongViec", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
        {
         this.showPrintExport = true;
        }
        this.showGrid = true;

        this.gridDataSource.data = [...resultData.Data];
        this.gridDataSource.total = this.gridDataSource.data.length;

        // this.gridChild.setDataSource();
        var takeTo = +this.skip + +this.pageSize;
        this.gridDataSource.data = this.gridDataSource.data.slice(this.skip, takeTo);

        this.gridChild._isLoadingTotalPage = false;
        this.gridChild._isLoading = false;
      }
    });

  }


  exportExcel() {
    // if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
    //   this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
    //   return;
    // }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      // let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      // let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
      // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoHoatDongKhoaKhamBenh.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoHieuQuaCongViec", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHieuQuaCongViec" + dateTimeNow.getFullYear() + ".xlsx");
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
}
