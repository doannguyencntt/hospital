import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icVisibility from '@iconify/icons-ic/visibility';
import icBlock from '@iconify/icons-ic/block';
import { aggregateBy } from '@progress/kendo-data-query';
import { PhauThuatThuThuat } from '../../../kham-benh.model';

@Component({
  selector: 'app-lan-kham-hien-tai-phau-thuat-thu-thuat',
  templateUrl: './lan-kham-hien-tai-phau-thuat-thu-thuat.component.html',
  styleUrls: ['./lan-kham-hien-tai-phau-thuat-thu-thuat.component.scss']
})
export class LanKhamHienTaiPhauThuatThuThuatComponent implements OnInit {

  documentType: DocumentType;
  gridColumns: any[] = [];
  urlGetDataGrid: string = "";
  urlGetTotalPageGrid: string = "";
  isProcessAdd: boolean = false;
  loaiDataSource: any = [
    {
      "KeyId": 1,
      "DisplayName": "Thường"
    },
    {
      "KeyId": 2,
      "DisplayName": "Xã hội hóa"
    }
  ];

  noiThucHienDataSource: any = [
    {
      "KeyId": 1,
      "DisplayName": "Khoa nội"
    },
    {
      "KeyId": 2,
      "DisplayName": "Khoa sản"
    },
    {
      "KeyId": 3,
      "DisplayName": "Khoa Hồi Sức Cấp Cứu"
    },
    {
      "KeyId": 4,
      "DisplayName": "Tai mũi họng"
    }
  ];

  //data test
  dataSource: any = {
    data : [
      {
      "STT" : 1,
      "Id": 1,
      "Ma" : "01.0006.0215",
      "TenDichVu": "Đặt catheter tĩnh mạch ngoại biên",
      "SoLuong": 1,
      "DonGia": "150.000",
      "ThanhTienFormat": "150.000",
      "ThanhTien": 150000,
      "BHChiTraFormat": "100.000",
      "BHChiTra": 100000,
      "BNChiTraFormat": "50.000",
      "BNChiTra": 50000,
      "LoaiId": 1,
      "TenLoai": "Thường",
      "NoiThucHienId": 1,
      "NoiThucHien": "Khoa nội",
      "GhiChu": "Temp",
      "TinhTrang": "Chưa thực hiện",
      },
      {
        "STT" : 2,
        "Id": 2,
        "Ma" : "01.0006.0215",
        "TenDichVu": "Đặt catheter tĩnh mạch ngoại biên",
        "SoLuong": 1,
        "DonGia": "150.000",
        "ThanhTienFormat": "150.000",
        "ThanhTien": 150000,
        "BHChiTraFormat": "100.000",
        "BHChiTra": 100000,
        "BNChiTraFormat": "50.000",
        "BNChiTra": 50000,
        "LoaiId": 1,
        "TenLoai": "Thường",
        "NoiThucHienId": 1,
        "NoiThucHien": "Khoa nội",
        "GhiChu": "Temp",
        "TinhTrang": "Đang thực hiện",
        },
        {
          "STT" : 3,
          "Id": 3,
          "Ma" : "01.0006.0215",
          "TenDichVu": "Đặt catheter tĩnh mạch ngoại biên",
          "SoLuong": 1,
          "DonGia": "150.000",
          "ThanhTienFormat": "150.000",
          "ThanhTien": 150000,
          "BHChiTraFormat": "100.000",
          "BHChiTra": 100000,
          "BNChiTraFormat": "50.000",
          "BNChiTra": 50000,
          "LoaiId": 2,
          "TenLoai": "Xã hội hóa",  
          "NoiThucHienId": 1,
          "NoiThucHien": "Khoa nội",
          "GhiChu": "Temp",
          "TinhTrang": "Đã thực hiện",
          },
          {
            "STT" : 4,
            "Id": 4,
            "Ma" : "01.0006.0215",
            "TenDichVu": "Đặt catheter tĩnh mạch ngoại biên",
            "SoLuong": 1,
            "DonGia": "150.000",
            "ThanhTienFormat": "150.000",
            "ThanhTien": 150000,
            "BHChiTraFormat": "100.000",
            "BHChiTra": 100000,
            "BNChiTraFormat": "50.000",
            "BNChiTra": 50000,
            "LoaiId": 1,
            "TenLoai": "Thường",
            "NoiThucHienId": 1,
            "NoiThucHien": "Khoa nội",
            "GhiChu": "Temp",
            "TinhTrang": "Chưa đóng tiền",
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
  //==================

  icDelete =icDelete;
  icVisibility = icVisibility;
  icBlock = icBlock;
  newPhauThuatThuThuat: PhauThuatThuThuat = new PhauThuatThuThuat();

  @Input() data: any = null;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

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
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 220, Sortable: true},
      { Field: "TenLoai", Title: "Loại", Width: 80, Sortable: true},
      { Field: "SoLuong", Title: "SL", Width: 50, Sortable: true},
      { Field: "DonGia", Title: "ĐG", Width: 76, Sortable: true, TemplateFooter: this.tongCongFooterTemplate, Template: this.donGiaTemplate},
      { Field: "ThanhTien", Title: "T.Tiền", Width: 76, Sortable: true, TemplateFooter: this.thanhTienFooterTemplate, Template: this.thanhTienTemplate},
      { Field: "BHChiTra", Title: "BH trả", Width: 76, Sortable: true, TemplateFooter: this.bHChiTraFooterTemplate, Template: this.bHChiTraTemplate},
      { Field: "BNChiTra", Title: "BN trả", Width: 76, Sortable: true, TemplateFooter: this.bNChiTraFooterTemplate, Template: this.bNChiTraTemplate},
      { Field: "TenNoiThucHien", Title: "Nơi thực hiện", Width: 110, Sortable: true},
      { Field: "GhiChu", Title: "Ghi chú", Width: 70, Sortable: true},
      { Field: "TenTinhTrang", Title: "Tình trạng", Width: 110, Sortable: true},
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate}
    ];
  }

  chonNoiThucHien(event)
  {
    this.newPhauThuatThuThuat.TenNoiThucHien = event.Ten;
  }

  chonLoaiDichVu(event)
  {
    this.newPhauThuatThuThuat.TenLoai = event.Ten;
  }

  themPhauThuatThuThuat(){
    this.newPhauThuatThuThuat.DonGia = 145000;
    this.newPhauThuatThuThuat.ThanhTien = this.newPhauThuatThuThuat.DonGia * this.newPhauThuatThuThuat.SoLuong;
    this.newPhauThuatThuThuat.BHChiTra = this.newPhauThuatThuThuat.ThanhTien; // gán tạm
    this.newPhauThuatThuThuat.BNChiTra = 0;
    this.dataSource.data.push(this.newPhauThuatThuThuat);
    this.newPhauThuatThuThuat = new PhauThuatThuThuat();
  }

  huy(){
    this.isProcessAdd = false;
    this.newPhauThuatThuThuat = new PhauThuatThuThuat();
  }
}
