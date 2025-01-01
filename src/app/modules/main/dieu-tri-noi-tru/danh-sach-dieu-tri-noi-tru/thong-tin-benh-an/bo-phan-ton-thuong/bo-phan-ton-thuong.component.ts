import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import icClose from '@iconify/icons-ic/close';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { BoPhanTonThuong } from '../thong-tin-benh-an.model';
import { BoPhanTonThuongPopupComponent } from '../bo-phan-ton-thuong-popup/bo-phan-ton-thuong-popup.component';
declare var $: any;

@Component({
  selector: 'app-bo-phan-ton-thuong',
  templateUrl: './bo-phan-ton-thuong.component.html',
  styleUrls: ['./bo-phan-ton-thuong.component.scss']
})
export class BoPhanTonThuongComponent implements OnInit {
  icAddCircle = icAddCircle;
  icDelete = icDelete;
  icEdit = icEdit;
  icSave = icSave;
  icClose = icClose;
  documentType: DocumentType;
  isShowView: boolean = false;
  @Input() data: any = null;
  @Input() dataBoPhanTonThuong: any[] = [];
  @Output() afterThongTinBoPhan = new EventEmitter<any>();
  
  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataBoPhanTonThuong'] && changes['dataBoPhanTonThuong'].previousValue != null && changes['dataBoPhanTonThuong'].previousValue != changes['dataBoPhanTonThuong'].currentValue) {
      this.dataBoPhanTonThuong = changes['dataBoPhanTonThuong'].currentValue;
    }
  }

  themBoPhanTonThuong() {
    this.dialog
      .open(BoPhanTonThuongPopupComponent, {
        disableClose: true,
        width: "1000px",
      })
      .afterClosed()
      .subscribe(result => {
        if (result == undefined || result == null) {
          return;
        }
        let boPhanTonThuong = new BoPhanTonThuong();
        boPhanTonThuong = {
          Id: 0,
          HinhAnh: result.HinhAnh,
          MoTa: result.MoTa
        };
        if (this.dataBoPhanTonThuong == undefined) {
          this.dataBoPhanTonThuong = [];
        }
        this.dataBoPhanTonThuong.push(boPhanTonThuong);
        this.afterThongTinBoPhan.emit(this.dataBoPhanTonThuong);
      });
  }

  xoaBoPhanTonThuong(dataItem) {
    var index = this.dataBoPhanTonThuong.findIndex(x => x == dataItem);
    if (index != -1) {
      this.dataBoPhanTonThuong.splice(index, 1);
    }
  }

  xemHinhAnhBoPhanTonThuong(dataItem) {
    this.dialog.open(ViewImagePdfComponent, {
      disableClose: false,
      width: '1000px',
      height: '600px',
      data: { Type: "Image", Title: "Xem ảnh", Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""), Src: dataItem.HinhAnh }
    });
  }
}
