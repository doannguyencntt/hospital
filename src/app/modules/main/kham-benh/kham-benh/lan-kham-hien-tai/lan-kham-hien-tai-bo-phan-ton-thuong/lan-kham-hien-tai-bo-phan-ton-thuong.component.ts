import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import icClose from '@iconify/icons-ic/close';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BenhVienHangDoi, YeuCauKhamBenhBoPhanTonThuong } from '../../../kham-benh.model';
import { MatDialog } from '@angular/material';
import { LanKhamHienTaiBoPhanTonThuongPopupComponent } from '../lan-kham-hien-tai-bo-phan-ton-thuong-popup/lan-kham-hien-tai-bo-phan-ton-thuong-popup.component';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
declare var $: any;

@Component({
  selector: 'app-lan-kham-hien-tai-bo-phan-ton-thuong',
  templateUrl: './lan-kham-hien-tai-bo-phan-ton-thuong.component.html',
  styleUrls: ['./lan-kham-hien-tai-bo-phan-ton-thuong.component.scss']
})
export class LanKhamHienTaiBoPhanTonThuongComponent implements OnInit {

  icAddCircle= icAddCircle;
  icDelete = icDelete;
  icEdit = icEdit;
  icSave = icSave;
  icClose = icClose;

  documentType: DocumentType;
  isShowView: boolean = false;

  benhNhanHienTai = new BenhVienHangDoi();
  @Input() data: any = null;
  @Input() dataBoPhanTonThuong: any = null;
  constructor(private dialog: MatDialog) { 
    }

  ngOnInit() {
    this.documentType = DocumentType.KhamBenh;
    this.benhNhanHienTai = this.data;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataBoPhanTonThuong'] && changes['dataBoPhanTonThuong'].previousValue != null && changes['dataBoPhanTonThuong'].previousValue != changes['dataBoPhanTonThuong'].currentValue) {
      this.dataBoPhanTonThuong = changes['dataBoPhanTonThuong'].currentValue;
    }
  }

  changeData() {
    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = true;
  }

  themBoPhanTonThuong() {
    this.dialog
      .open(LanKhamHienTaiBoPhanTonThuongPopupComponent, {
        disableClose: true,
        width: "1000px",
      })
      .afterClosed()
      .subscribe(result => {

        // trường hợp nhấn hủy
        if (result == undefined || result == null) {
          return;
        }

        // trường hợp nhấn thêm
        let boPhanTonThuong = new YeuCauKhamBenhBoPhanTonThuong();
        boPhanTonThuong = {
          Id: 0,
          YeuCauKhamBenhId: this.benhNhanHienTai.YeuCauKhamBenhId,
          HinhAnh: result.HinhAnh,
          MoTa: result.MoTa
        };

        if (this.dataBoPhanTonThuong == undefined) {
          this.dataBoPhanTonThuong = [];
        }
        this.dataBoPhanTonThuong.push(boPhanTonThuong);
        this.changeData();
      });
  }

  xoaBoPhanTonThuong(dataItem){
    var index = this.dataBoPhanTonThuong.findIndex(x => x == dataItem);
    if(index != -1)
    {
      this.dataBoPhanTonThuong.splice(index, 1);
      this.changeData();
    }
  }

  xemHinhAnhBoPhanTonThuong(dataItem){
    this.dialog.open(ViewImagePdfComponent, {
        disableClose: false,
        width: '1000px',
        height:'600px',        
        data: { Type:"Image",Title: "Xem ảnh", Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""),Src: dataItem.HinhAnh}
    });
  }
}
