import { ChiSoXetNghiemChiTiet, KetNoiChiSoXetNghiem } from '../chi-so-xet-nghiem.model';
import { Component, OnInit, Input } from '@angular/core';
import icDelete from '@iconify/icons-ic/delete';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAdd from '@iconify/icons-ic/twotone-add';

@Component({
  selector: 'app-chi-so-xet-nghiem-shared',
  templateUrl: './chi-so-xet-nghiem-shared.component.html',
  styleUrls: ['./chi-so-xet-nghiem-shared.component.scss']
})
export class ChiSoXetNghiemSharedComponent implements OnInit {
  chiSoXNChiTiet: ChiSoXetNghiemChiTiet;
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
    this.documentType = DocumentType.ChiSoXetNghiem;
    this.chiSoXNChiTiet = new ChiSoXetNghiemChiTiet();
    this.chiSoXNChiTiet = this.data;
    if (this.chiSoXNChiTiet.CapDichVu == 2) {
      if (this.isCreate) {
        this.chiSoXNChiTiet.ChiSoCha = this.chiSoXNChiTiet.Ten;
      }
    }
    if (this.chiSoXNChiTiet.KetNoiChiSoXetNghiems == null || this.chiSoXNChiTiet.KetNoiChiSoXetNghiems.length == 0) {
      this.chiSoXNChiTiet.KetNoiChiSoXetNghiems = [];
      this.chiSoXNChiTiet.KetNoiChiSoXetNghiems.push(new KetNoiChiSoXetNghiem());
    }
    //console.log("capDichVu:", this.capDichVu)

    //console.log("isCreateChild:", this.isCreateChild)
  }

  getSharedData() {
    this.chiSoXNChiTiet.Ten = this.data.Ten;
    this.chiSoXNChiTiet.Ma = this.data.Ma;
    this.chiSoXNChiTiet.NhomDichVuBenhVienId = this.data.NhomDichVuBenhVienId;
    this.chiSoXNChiTiet.HieuLuc = true;
    if (this.isCreateChild) {
      if (this.capDichVu == 2) {
        this.chiSoXNChiTiet.DichVuXetNghiemChaId = this.data.DichVuXetNghiemChaId;

      } else {
        this.chiSoXNChiTiet.DichVuXetNghiemChaId = this.data.Id;
      }
      this.chiSoXNChiTiet.Ten = this.chiSoXNChiTiet.TenChiSo;
    }
    this.chiSoXNChiTiet.DichVuXetNghiemId = this.data.DichVuXetNghiemId;
    return this.chiSoXNChiTiet;
  }
  themChiSo() {
    this.chiSoXNChiTiet.KetNoiChiSoXetNghiems.push(new KetNoiChiSoXetNghiem());
    // console.log("this.chiSoXNChiTiet.KetNoiChiSoXetNghiems: ", this.chiSoXNChiTiet.KetNoiChiSoXetNghiems)

  }
  xoaChiSo(item: KetNoiChiSoXetNghiem) {
    var index = this.chiSoXNChiTiet.KetNoiChiSoXetNghiems.indexOf(item);
    if (index !== -1) {
      this.chiSoXNChiTiet.KetNoiChiSoXetNghiems.splice(index, 1);
    }
    if (this.chiSoXNChiTiet.KetNoiChiSoXetNghiems.length == 0) {
      this.chiSoXNChiTiet.KetNoiChiSoXetNghiems.push(new KetNoiChiSoXetNghiem());
    }
  }
  clearValidators() {
    this.validationErrors = [];
  }
  
}
