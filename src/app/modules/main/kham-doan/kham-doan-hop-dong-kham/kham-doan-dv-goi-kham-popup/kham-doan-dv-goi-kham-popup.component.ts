import { Component, OnInit, Inject, ChangeDetectorRef, TemplateRef, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DichVuKhamDoanChiTiet } from '../kham-doan-hop-dong-kham.model';
@Component({
  selector: 'app-kham-doan-dv-goi-kham-popup',
  templateUrl: './kham-doan-dv-goi-kham-popup.component.html',
  styleUrls: ['./kham-doan-dv-goi-kham-popup.component.scss']
})
export class KhamDoanDvGoiKhamPopupComponent implements OnInit {
  documentType = DocumentType.KhamDoanHopDongKham;
  dichVuKhamDoanChiTiet: DichVuKhamDoanChiTiet = new DichVuKhamDoanChiTiet();
  gridDichVuKhamDoanColumns: any[] = [];
  dataToSumThanhTien: any[] = [];
  icClose = icClose;
  title: string = null;
  public laDichVuTrongGoi: boolean = false;
  goiKhamSucKhoeId: number = null;
  yeuCauTiepNhanId: number = null;
  benhNhanId: number = 0;
  additionalSearchString: string = null;
  sort: SortDescriptor[] =
    [
      {
        field: "Nhom",
        dir: "desc"
      }];
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  groups: GroupDescriptor[] = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];

  public totalThanhTien(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.dataToSumThanhTien.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
    }
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<KhamDoanDvGoiKhamPopupComponent>
  ) { }

  ngOnInit() {
    this.title = this.data.Title;
    // if (this.data.LaDichVuTrongGoi) {
    //   this.dichVuKhamDoanChiTiet.LaDichVuTrongGoi = this.data.LaDichVuTrongGoi;
    //   this.dichVuKhamDoanChiTiet.GoiKhamSucKhoeIds = this.data.GoiKhamSucKhoeIds;
    //   this.dichVuKhamDoanChiTiet.YeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
    //   this.dichVuKhamDoanChiTiet.BenhNhanId = this.data.BenhNhanId;
    //   // this.laDichVuTrongGoi = this.data.LaDichVuTrongGoi;
    //   // this.goiKhamSucKhoeId = this.data.GoiKhamSucKhoeId;
    //   // this.yeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
    //   // this.benhNhanId = this.data.BenhNhanId;
    //   // this.additionalSearchString = this.goiKhamSucKhoeId + ";" + this.laDichVuTrongGoi + ";" + this.yeuCauTiepNhanId + ";" + this.benhNhanId + ";";
    // } else {
    //   this.laDichVuTrongGoi = this.data.LaDichVuTrongGoi;
    //   this.yeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
    //   this.benhNhanId = this.data.BenhNhanId;
    // }
    // this.additionalSearchString = this.goiKhamSucKhoeId + ";" + this.laDichVuTrongGoi + ";" + this.yeuCauTiepNhanId + ";" + this.benhNhanId + ";";

    this.dichVuKhamDoanChiTiet.LaDichVuTrongGoi = this.data.LaDichVuTrongGoi;
    if (this.data.LaDichVuTrongGoi) {
      this.dichVuKhamDoanChiTiet.GoiKhamSucKhoeIds = this.data.GoiKhamSucKhoeIds;
    }
    this.dichVuKhamDoanChiTiet.YeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
    this.dichVuKhamDoanChiTiet.BenhNhanId = this.data.BenhNhanId;
    this.additionalSearchString = JSON.stringify(this.dichVuKhamDoanChiTiet);
    this.gridDichVuKhamDoanColumns = [
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "MaDichVu", Title: "Mã DV", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TenDichVu", Title: "Tên DV", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "LoaiGia", Title: "Loại giá", Width: 50, Sortable: false },
      { Field: "SoLuong", Title: "SL", Width: 50, Sortable: false },
      { Field: "DonGiaUuDai", Title: "Đơn giá", Width: 70, Sortable: false, TemplateFooter: this.donGiaFooterTemplate, Template: this.donGiaTemplate, },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 80, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate },
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 80, Sortable: false, ShowTooltip: true },
      { Field: "TrangThaiYeuCauKhamBenh", Title: "Tình trạng", Width: 80, Sortable: false, Template: this.trangThaiTemplate },
    ];
  }

  onDataBoundChild(data: any) {
    this.dataToSumThanhTien = data.Data;
  }

}
