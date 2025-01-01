import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { BenhVienHangDoi, YeuCauTiepNhan, YeuCauKhamBenh, NgheNghiep, DanToc } from '../../kham-benh.model';
import { ApiService } from 'src/app/core/services/api.service';
import { LoaiHangDoi, TrangThaiYeuCauDichVuKyThuat } from 'src/app/shared/enum/kham-benh.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import icPlay from '@iconify/icons-ic/play-circle-filled';
import icAssignment from '@iconify/icons-ic/assignment';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

@Component({
  selector: 'app-kham-benh-tim-benh-nhan-popup',
  templateUrl: './kham-benh-tim-benh-nhan-popup.component.html',
  styleUrls: ['./kham-benh-tim-benh-nhan-popup.component.scss']
})
export class KhamBenhTimBenhNhanPopupComponent implements OnInit {
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('chuanBiKhamActionTemplate', { static: true }) chuanBiKhamActionTemplate: TemplateRef<any>;


  urlGetData: string = "KhamBenh/GetBenhNhanTrongHangDoiDataForGridAsync";
  urlGetTotalPage: string = "KhamBenh/GetBenhNhanTrongHangDoiTotalPageForGridAsync";

  urlGetDataGridChild: string = ""; 
  urlGetTotalPageGridChild: string = "";
  documentType: DocumentType;

  icClose = icClose;
  icSearch = icSearch;
  icPlay = icPlay;
  icAssignment = icAssignment;
  searchCtrl = new FormControl;

  searchString: string = null;
  phongKhamId: number = null;
  benhNhanHienTai: BenhVienHangDoi;
  gridColumns: any[] = [];

  dataResult: any = null;
  hangDoiChuanBiKham: LoaiHangDoi = LoaiHangDoi.ChuanBiKham;
  hangDoiLamChiDinh: LoaiHangDoi = LoaiHangDoi.LamChiDinh;
  yeuCauDichVuKyThuatDaHoanThanh: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DaThucHien;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService
    , private dialog: MatDialog, private apiService: ApiService,
     public dialogRef: MatDialogRef<KhamBenhTimBenhNhanPopupComponent>) { }

  ngOnInit() {
    this.searchString = this.data.searchString;
    this.phongKhamId = this.data.phongKhamId;
    this.gridChild.urlGetData = this.urlGetData;
    this.gridChild.urlGetTotalPage = this.urlGetTotalPage;
    this.documentType = DocumentType.KhamBenh;

    this.gridColumns = [
      { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true },
      { Field: "MaBN", Title: "Mã NB", Width: 50, Sortable: true },
      { Field: "HoTen", Title: "Họ tên", Width: 150, Sortable: true },
      { Field: "GioiTinhDisplay", Title: "Giới tính", Width: 50, Sortable: true },
      { Field: "LoaiHangDoiDisplay", Title: "Tình trạng", Width: 150, Sortable: true },
      { Field: "MucHuongDisplay", Title: "Mức hưởng", Width: 100, Sortable: true },
      { Field: "Action", Title: "", Width: 65, Template: this.chuanBiKhamActionTemplate }
    ];
    
    if (this.searchString != undefined && this.searchString != null) {
      this.Timkiem();
    }
  }

  keyUp(event: any) {
    if (event.key == "Enter") {
      this.timKemBenhNhan();
    }
  }

  timKemBenhNhan() {
    this.apiService.get<BenhVienHangDoi>("KhamBenh/BenhNhanTrongHangDoi?searchString=" + this.searchString + "&phongKhamId=" + this.phongKhamId).subscribe(resultData => {
      if (resultData != null) {
        this.benhNhanHienTai = resultData;
      }
      else {
        this.benhNhanHienTai = null;
      }
    });
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.Timkiem();
    }
  }

  Timkiem() {
    this.gridChild.urlGetData = this.urlGetData;
    this.gridChild.urlGetTotalPage = this.urlGetTotalPage;
    let QueryString = null;
    this.gridChild._additionalSearchString = this.phongKhamId.toString();
    if (this.searchString != null) {
      QueryString = this.searchString;
    }
    this.gridChild.searchString = QueryString;
    this.gridChild.search();
  }

  searchChanges() {
    if (this.searchString == null || this.searchString == "") {
      this.gridChild.searchString = "";
      this.gridChild.search();
    }
  }

  batDauKham(dataItem: any) {
    let result = {
      LoaiHangDoi: dataItem.LoaiHangDoi,
      HangDoiId: dataItem.Id
    }
    this.close(result);
    
  }

  duaVaoHangDoi(dataItem: any) {
    let result = {
      LoaiHangDoi: dataItem.LoaiHangDoi,
      HangDoiId: dataItem.Id
    }
    this.close(result);
  }

  close(result: any) {
    this.dialogRef.close(result);
  }
  closes(){
    this.dialog.closeAll();
  }
}
