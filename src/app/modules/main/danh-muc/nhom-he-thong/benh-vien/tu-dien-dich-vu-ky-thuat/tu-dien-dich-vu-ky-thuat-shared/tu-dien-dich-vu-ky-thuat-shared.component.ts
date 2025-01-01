import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import icDelete from '@iconify/icons-ic/delete';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAdd from '@iconify/icons-ic/twotone-add';
import { DichVuKyThuatChiTiet } from '../tu-dien-dich-vu-ky-thuat.model';
@Component({
  selector: 'app-tu-dien-dich-vu-ky-thuat-shared',
  templateUrl: './tu-dien-dich-vu-ky-thuat-shared.component.html',
  styleUrls: ['./tu-dien-dich-vu-ky-thuat-shared.component.scss']
})
export class TuDienDichVuKyThuatSharedComponent implements OnInit, OnChanges {
  dichVuKyThuatChiTiet: DichVuKyThuatChiTiet;
  documentType: DocumentType;
  icDelete = icDelete;
  icAdd = icAdd;
  @Input() validationErrors: any;
  @Input() data: any;
  @Input() capDichVu: any;
  @Input() isCreate: any;
  @Input() isCreateChild: any;
  constructor() { }
  ngOnInit() {
    this.documentType = DocumentType.TuDienDichVuKyThuat;
    this.dichVuKyThuatChiTiet = new DichVuKyThuatChiTiet();
    this.dichVuKyThuatChiTiet = this.data;
  }
  ngOnChanges(value: SimpleChanges) {    
    if (value.data != null) {
      this.dichVuKyThuatChiTiet = value.data.currentValue;
    }
  }

  huyDichVuKyThuat() {
    this.dichVuKyThuatChiTiet.Ten = this.data.Ten;
    this.dichVuKyThuatChiTiet.Ma = this.data.Ma;
    this.dichVuKyThuatChiTiet.NhomDichVuBenhVienId = this.data.NhomDichVuBenhVienId;
    this.dichVuKyThuatChiTiet.TenKetQuaMau = null;
    this.dichVuKyThuatChiTiet.MaSo = null;
    this.dichVuKyThuatChiTiet.KetQua = null;
    this.dichVuKyThuatChiTiet.KetLuan = null;
  }

  getSharedData() { 
    return this.dichVuKyThuatChiTiet;
  }
}
