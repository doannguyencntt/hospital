import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { aggregateBy } from '@progress/kendo-data-query';
import { VatTuTieuHaoItem } from '../../../kham-benh.model';

@Component({
  selector: 'app-lan-kham-hien-tai-vat-tu-tieu-hao',
  templateUrl: './lan-kham-hien-tai-vat-tu-tieu-hao.component.html',
  styleUrls: ['./lan-kham-hien-tai-vat-tu-tieu-hao.component.scss']
})
export class LanKhamHienTaiVatTuTieuHaoComponent implements OnInit {

  documentType: DocumentType;
  gridColumns: any[] = [];
  urlGetDataGrid: string = "";
  urlGetTotalPageGrid: string = "";
  isProcessAdd: boolean = false;
  vatTuTieuHaoNew: VatTuTieuHaoItem = new VatTuTieuHaoItem();

  //data test
  dataSource: any = {
    data : [
      {
      "STT" : 1,
      "Id": 1,
      "Ma" : "01.0006.0215",
      "TenVatTu": "Kim tiêm",
      "SoLuong": 1,
      "TinhTien": true,
      "DonGia": 150000,
      "ThanhTien": 105000,
      "BHChiTra": 100000,
      "BNChiTra": 50000,
      "GhiChu": "Temp",
      },
      {
        "STT" : 2,
        "Id": 2,
        "Ma" : "01.0006.0215",
        "TenVatTu": "Que thử HIV",
        "SoLuong": 1,
        "TinhTien": true,
        "DonGia": 150000,
        "ThanhTien": 105000,
        "BHChiTra": 100000,
        "BNChiTra": 50000,
        "GhiChu": "Temp",
        },
        {
          "STT" : 3,
          "Id": 3,
          "Ma" : "01.0006.0215",
          "TenVatTu": "Que thử HIV",
          "SoLuong": 1,
          "TinhTien": false,
          "DonGia": null,
          "ThanhTien": null,
          "BHChiTra": null,
          "BNChiTra": null,
          "GhiChu": "Temp",
          }
    ],
    total: 0
  }
  public aggregates: any[] = [
    {field: 'ThanhTien', aggregate: 'sum'},
    {field: 'BHChiTra', aggregate: 'sum'},
    {field: 'BNChiTra', aggregate: 'sum'},
  ];
  public total: any = aggregateBy(this.dataSource.data, this.aggregates);
  //======================================

  icDelete =icDelete;

  @Input() data: any;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('tinhTienTemplate', { static: true }) tinhTienTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('bHChiTraTemplate', { static: true }) bHChiTraTemplate: TemplateRef<any>;
  @ViewChild('bNChiTraTemplate', { static: true }) bNChiTraTemplate: TemplateRef<any>;
  @ViewChild('tongCongFooterTemplate', { static: true }) tongCongFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('bHChiTraFooterTemplate', { static: true }) bHChiTraFooterTemplate: TemplateRef<any>;
  @ViewChild('bNChiTraFooterTemplate', { static: true }) bNChiTraFooterTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
    this.documentType = DocumentType.KhamBenh;
    this.dataSource.data = this.data;

    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 30, Sortable: true },
      { Field: "Ma", Title: "Mã", Width: 100, Sortable: true},
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 250, Sortable: true},
      { Field: "SoLuong", Title: "SL", Width: 50, Sortable: true},
      { Field: "TinhTien", Title: "Tính tiền", Width: 95, Sortable: true, Template: this.tinhTienTemplate},
      { Field: "DonGia", Title: "ĐG", Width: 80, Sortable: true, Template: this.donGiaTemplate, TemplateFooter: this.tongCongFooterTemplate},
      { Field: "ThanhTien", Title: "T.Tiền", Width: 80, Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate},
      { Field: "BHChiTra", Title: "BH trả", Width: 80, Sortable: true, Template: this.bHChiTraTemplate, TemplateFooter: this.bHChiTraFooterTemplate},
      { Field: "BNChiTra", Title: "BN trả", Width: 80, Sortable: true, Template: this.bNChiTraTemplate, TemplateFooter: this.bNChiTraFooterTemplate},
      { Field: "GhiChu", Title: "Ghi chú", Width: 80, Sortable: true},
      { Field: "Action", Title: "", Width: 80, Template: this.actionTemplate}
    ];
  }

  chonVatTu(event)
  {
    this.vatTuTieuHaoNew.TenVatTu = event.Ten;
    this.vatTuTieuHaoNew.Ma = event.Ma;
  }

  themVatTu(){
    if(this.vatTuTieuHaoNew.TinhTien)
    {
      this.vatTuTieuHaoNew.DonGia = 150000;
      this.vatTuTieuHaoNew.ThanhTien = this.vatTuTieuHaoNew.SoLuong * this.vatTuTieuHaoNew.DonGia;
      this.vatTuTieuHaoNew.BHChiTra = this.vatTuTieuHaoNew.ThanhTien;
      this.vatTuTieuHaoNew.BNChiTra = 0;
    }
    this.dataSource.data.push(this.vatTuTieuHaoNew);
    
    let index: number = 1;
    this.dataSource.data.forEach(element => {
      element.STT = index++;
    });
    this.vatTuTieuHaoNew = new VatTuTieuHaoItem();
    this.total = aggregateBy(this.dataSource.data, this.aggregates);
  }
  xoaVatTu(Id: number, STT: number)
  {
    if(Id != null && Id != undefined)
    {
      this.dataSource.data.splice(this.dataSource.data.findIndex(x => x.Id == Id), 1);
    }
    else if(STT != null)
    {
      this.dataSource.data.splice(this.dataSource.data.findIndex(x => x.STT == STT), 1);
    }
    let index: number = 1;
    this.dataSource.data.forEach(element => {
      element.STT = index++;
    });
    this.total = aggregateBy(this.dataSource.data, this.aggregates);
  }
}
