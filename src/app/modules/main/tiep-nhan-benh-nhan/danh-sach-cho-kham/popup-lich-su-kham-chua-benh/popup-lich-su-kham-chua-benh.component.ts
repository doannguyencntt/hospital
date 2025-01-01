import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { GridLichSuKCB } from '../../tiep-nhan-benh-nhan.model';

@Component({
  selector: 'app-popup-lich-su-kham-chua-benh',
  templateUrl: './popup-lich-su-kham-chua-benh.component.html',
  styleUrls: ['./popup-lich-su-kham-chua-benh.component.scss']
})
export class PopupLichSuKhamChuaBenhComponent implements OnInit {

  icClose = icClose;
  gridColumns: any[] = [];
  gridData: any;
  documentType: DocumentType;
  
  @ViewChild('grid', { static: false }) grid: GridComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<GridLichSuKCB>
  , private dialog: MatDialog, public dialogRef: MatDialogRef<PopupLichSuKhamChuaBenhComponent>) { }

  ngOnInit() {
    this.documentType = DocumentType.YeuCauTiepNhan;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 45, Sortable: true },
      { Field: "MaTheBHYT", Title: "Mã thẻ BHYT", Width: 150, Sortable: false },
      { Field: "HoVaTen", Title: "Họ và tên", MinWidth: 150, Sortable: false },
      { Field: "NgayVaoVien", Title: "Ngày vào viện", Width: 156, Sortable: false },
      { Field: "NgayRaVien", Title: "Ngày ra viện", Width: 156, Sortable: false },
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
