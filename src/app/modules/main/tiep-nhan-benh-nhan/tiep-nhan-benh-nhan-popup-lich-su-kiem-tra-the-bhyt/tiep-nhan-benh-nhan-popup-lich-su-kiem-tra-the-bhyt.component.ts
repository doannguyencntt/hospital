import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { GridLichSuKiemTraTheBHYT } from '../tiep-nhan-benh-nhan.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt',
  templateUrl: './tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.html',
  styleUrls: ['./tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component.scss']
})
export class TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent implements OnInit {

  icClose = icClose;
  gridColumns: any[] = [];
  gridData: any;
  documentType: DocumentType;

  @ViewChild('grid', { static: false }) grid: GridComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<GridLichSuKiemTraTheBHYT>
  , private dialog: MatDialog, public dialogRef: MatDialogRef<TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent>) { }

  ngOnInit() {
    this.documentType = DocumentType.YeuCauTiepNhan;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 45, Sortable: false },
      { Field: "UserKiemTra", Title: "User kiểm tra", Width: 120, Sortable: false },
      { Field: "TenCSKCB", Title: "Tên CSKCB", Width: 260, Sortable: false },
      { Field: "ThoiGianKiemTra", Title: "Thời gian kiểm tra", Width: 155, Sortable: false },
      { Field: "NoiDungThongBao", Title: "Nội dung thông báo", MinWidth: 300, Sortable: false },
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
