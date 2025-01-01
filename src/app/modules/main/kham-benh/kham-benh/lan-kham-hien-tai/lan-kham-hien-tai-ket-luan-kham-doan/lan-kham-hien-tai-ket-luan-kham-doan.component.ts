import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DuocPhamTonKhos } from '../../../kham-benh.model';
import { KeToaItem } from '../../../kham-benh.model';

@Component({
  selector: 'app-lan-kham-hien-tai-ket-luan-kham-doan',
  templateUrl: './lan-kham-hien-tai-ket-luan-kham-doan.component.html',
  styleUrls: ['./lan-kham-hien-tai-ket-luan-kham-doan.component.scss']
})
export class LanKhamHienTaiKetLuanKhamDoanComponent implements OnInit {

  //data temp, chỉ dùng tạm ko dùng thật, lúc dev cần thiết kế lại class
  arrDichVuKham: any = [
    {
      'Title': 'Nội khoa',
      'TemplateObj': [
        {
          'Title': 'Tuần hoàn',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        },
        {
          'Title': 'Phân loại',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        },
        {
          'Title': 'Hô hấp',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        },
        {
          'Title': 'Phân loại',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        },
        {
          'Title': 'Tiêu hóa',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        },
        {
          'Title': 'Phân loại',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        }
      ]
    },
    {
      'Title': 'Da liễu',
      'TemplateObj': [
        {
          'Title': 'Tuần hoàn',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        },
        {
          'Title': 'Phân loại',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        },
        {
          'Title': 'Hô hấp',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        },
        {
          'Title': 'Phân loại',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        },
        {
          'Title': 'Tiêu hóa',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        },
        {
          'Title': 'Phân loại',
          'Value': 'Bình thường',
          'fxFlex': '50%'
        }
      ]
    }
  ]

  keToaNew: KeToaItem = new KeToaItem();
  thongTinDuocPham: DuocPhamTonKhos = new DuocPhamTonKhos();
  gridToaThuocColumns: any[] = [];
  groupsChild: GroupDescriptor[] = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];

  @Input() documentType: DocumentType = DocumentType.KhamBenh;
  @Input() validationErrors: any[];
  @Input() data: any = null;

  @ViewChild('sangTemplateEdit', { static: true }) sangTemplateEdit: TemplateRef<any>;
  @ViewChild('truaTemplateEdit', { static: true }) truaTemplateEdit: TemplateRef<any>;
  @ViewChild('chieuTemplateEdit', { static: true }) chieuTemplateEdit: TemplateRef<any>;
  @ViewChild('toiTemplateEdit', { static: true }) toiTemplateEdit: TemplateRef<any>;
  @ViewChild('ghiChuTemplateEdit', { static: true }) ghiChuTemplateEdit: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('toiTemplate', { static: true }) toiTemplate: TemplateRef<any>;
  @ViewChild('soNgayTemplateEdit', { static: true }) soNgayTemplateEdit: TemplateRef<any>;
  @ViewChild('soLuongTemplateEdit', { static: true }) soLuongTemplateEdit: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('actionToaThuocTemplate', { static: true }) actionToaThuocTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thuocBHYTTemplate', { static: true }) thuocBHYTTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {

    this.gridToaThuocColumns = [
      { Field: "Action", Title: "", Width: 70, Template: this.actionToaThuocTemplate, },
      { Field: "STT", Title: "#", Width: 45, Sortable: true },
      { Field: "Ma", Title: "Mã", Width: 45, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "TÊN", Width: 95, Sortable: true, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 60, Sortable: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "SangDisplay", Title: "Sáng", Width: 55, Sortable: true, TemplateEdit: this.sangTemplateEdit, Template: this.sangTemplate },
      { Field: "TruaDisplay", Title: "Trưa", Width: 55, Sortable: true, TemplateEdit: this.truaTemplateEdit, Template: this.truaTemplate },
      { Field: "ChieuDisplay", Title: "Chiều", Width: 55, Sortable: true, TemplateEdit: this.chieuTemplateEdit, Template: this.chieuTemplate },
      { Field: "ToiDisplay", Title: "Tối", Width: 55, Sortable: true, TemplateEdit: this.toiTemplateEdit, Template: this.toiTemplate },
      { Field: "SoNgayDung", Title: "Số ngày", Width: 80, Sortable: true, TemplateEdit: this.soNgayTemplateEdit },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: true, TemplateEdit: this.soLuongTemplateEdit, Template: this.soLuongTemplate },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 70, Sortable: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 90, Sortable: true, TemplateFooter: this.donGiaFooterTemplate, Template: this.donGiaTemplate, TemplateGroupFooter: this.donGiaGroupFooterTemplate },
      { Field: "ThanhTien", Title: "T.Tiền", Width: 80, Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate },
      // { Field: "TuongTacThuoc", Title: "Tương tác thuốc", Width: 65, Sortable: true },
      // { Field: "DiUngThuocDisplay", Title: "Dị ứng", Width: 65, Sortable: true },
      { Field: "GhiChu", Title: "Cách dùng", Width: 90, Sortable: true, TemplateEdit: this.ghiChuTemplateEdit, ShowTooltip: true },
    ];
  }

}
