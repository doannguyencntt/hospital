import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { DichVuGiuongThongTinGia } from '../dich-vu-giuong.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dich-vu-giuong-list',
  templateUrl: './dich-vu-giuong-list.component.html',
  styleUrls: ['./dich-vu-giuong-list.component.scss']
})
export class DichVuGiuongListComponent implements OnInit {
  documentType: DocumentType;
  thongTinGiaGiuong: DichVuGiuongThongTinGia;
  expression: boolean = false;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  urlGetDataGridChild: string = "DichVuGiuong/GetDataForGridChildAsync"; 
  urlGetTotalPageGridChild: string = "DichVuGiuong/GetTotalPageForGridChildAsync";
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  @ViewChild('hieuLucTemplate', { static: true }) hieuLucTemplate: TemplateRef<any>;
  
  constructor(private route: ActivatedRoute, private apiService: ApiService, private dialog: MatDialog, private notificationService: NotificationService) { }

  ngOnInit() {
    this.thongTinGiaGiuong = new DichVuGiuongThongTinGia();
    this.documentType = DocumentType.DanhMucDichVuGiuong;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 150, Sortable: true },
      { Field: "MaTT37", Title: "Mã TT37", Width: 150, Sortable: true },
      { Field: "Ten", Title: "Tên", MinWidth: 250, Sortable: true },
      { Field: "Khoa", Title: "Khoa", Width: 180, Sortable: true },
      { Field: "HangBenhVienDisplay", Title: "Hạng Bệnh Viện", Width: 180, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", Width: 300 },
    ];
    this.gridChildColumns = [
      { Field: "GiaDisplay", Title: "Giá", Width: 150, Sortable: true },
      { Field: "TuNgayDisplay", Title: "Từ ngày", Width: 130, Sortable: true},
      { Field: "DenNgayDisplay", Title: "Đến ngày", Width: 130, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", MinWidth: 200, Sortable: true },
      { Field: "HieuLucDisplay", Title: "Hiệu lực", Width: 150, Sortable: true }
    ];
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  
    this.apiService.postExportExcel<string>("DichVuGiuong/ExportDichVuGiuong", this.gridChild._gridQueryInfo).subscribe(res => {
      let dateTimeNow = new Date();
      CommonService.downLoadFile(res, "application/vnd.ms-excel", "DichVuGiuong" + dateTimeNow.getFullYear() + ".xlsx");
      this.dialog.closeAll();
    }, err => {
      this.notificationService.showError(err.Message);
      this.dialog.closeAll();
    })
  }
}