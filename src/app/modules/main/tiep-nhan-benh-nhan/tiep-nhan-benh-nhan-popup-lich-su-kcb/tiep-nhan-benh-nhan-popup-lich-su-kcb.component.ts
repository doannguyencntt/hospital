import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { GridLichSuKCB } from '../tiep-nhan-benh-nhan.model';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { TiepNhanBenhNhanPopupKhongKiemTraDuocComponent } from '../tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-tiep-nhan-benh-nhan-popup-lich-su-kcb',
  templateUrl: './tiep-nhan-benh-nhan-popup-lich-su-kcb.component.html',
  styleUrls: ['./tiep-nhan-benh-nhan-popup-lich-su-kcb.component.scss']
})
export class TiepNhanBenhNhanPopupLichSuKcbComponent implements OnInit {

  icClose = icClose;
  gridColumns: any[] = [];
  gridData: any;
  documentType: DocumentType;

  @ViewChild('grid', { static: false }) grid: GridComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<GridLichSuKCB>
    , private dialog: MatDialog, public dialogRef: MatDialogRef<TiepNhanBenhNhanPopupKhongKiemTraDuocComponent>
    , public dialogRef2: MatDialogRef<TiepNhanBenhNhanPopupLichSuKcbComponent>) { }

  ngOnInit() {
    //console.log("TiepNhanBenhNhanPopupLichSuKcbComponent = ", this.data);
    //documenttype
    this.documentType = DocumentType.YeuCauTiepNhan;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 45, Sortable: false },
      { Field: "MaTheBHYT", Title: "Mã thẻ BHYT", Width: 150, Sortable: false },
      { Field: "HoVaTen", Title: "Họ và tên", Width: 150, Sortable: false },
      { Field: "NgayVaoVien", Title: "Ngày vào viện", Width: 156, Sortable: false },
      { Field: "NgayRaVien", Title: "Ngày ra viện", Width: 156, Sortable: false },
      { Field: "", Title: "Khoa/Phòng", Width: 100, Sortable: false },
      { Field: "CoSoKCB", Title: "Cơ sở KCB", Width: 180, Sortable: false },
      { Field: "KetQuaDieuTri", Title: "Kết quả điều trị", Width: 100, Sortable: false },
      { Field: "LyDoVaoVien", Title: "Lý do vào viện", Width: 100, Sortable: false },
      { Field: "TinhTrangRaVien", Title: "Tình trạng ra viện", Width: 100, Sortable: false },
    ];

    this.setDataForGrid();
  }

  setDataForGrid() {
    this.gridData = {
      data: this.data,
      total: this.data.length
    };

    if (this.grid != undefined) {
      this.grid.setDataSource();
    }

  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }

}
