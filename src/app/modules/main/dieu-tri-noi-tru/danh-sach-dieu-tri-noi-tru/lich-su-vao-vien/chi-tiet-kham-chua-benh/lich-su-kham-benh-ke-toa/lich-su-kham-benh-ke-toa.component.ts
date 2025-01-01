import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { KeToaItem } from 'src/app/modules/main/kham-benh/kham-benh.model';

@Component({
  selector: 'app-lich-su-kham-benh-ke-toa',
  templateUrl: './lich-su-kham-benh-ke-toa.component.html',
  styleUrls: ['./lich-su-kham-benh-ke-toa.component.scss']
})
export class LichSuKhamBenhKeToaNoiTruComponent implements OnInit {
  @Input() yeuCauKhamBenhId: number;
  
  gridToaMauColumns: any[] = [];
  gridVatTuYTColumns: any[] = [];
  gridToaMauChildColumns: any[] = [];
  gridToaThuocChildColumns: any[] = [];
  dataToSumThanhTienVatTu: any[] = [];
  documentType: DocumentType;
  urlGetDataGridToaMau: string = "KhamBenh/GetDataForGridAsyncToaMau";
  urlGetDataGridChildToaMau: string = "KhamBenh/GetDataForGridAsyncChildToaMau";
  urlGetDataGridChildToaThuoc: string = "KhamBenh/GetDataForGridAsyncChildToaThuoc";

  ToaThuoc: KeToaItem[] = [];
  public total(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.ToaThuoc.reduce((sum, item) => sum + item.ThanhTien, 0);
      // case 'BHChiTra':
      //   return this.ToaThuoc.reduce((sum, item) => sum + item.BHChiTra, 0);
      case 'BNChiTra':
        return this.ToaThuoc.reduce((sum, item) => sum + item.BNChiTra, 0);
    }
  };
  @ViewChild('donGiaFooter', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooter', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('BHTraFooter', { static: true }) BHTraFooterTemplate: TemplateRef<any>;
  @ViewChild('BNTraFooter', { static: true }) BNTraFooterTemplate: TemplateRef<any>;
  // template
  @ViewChild('donGiatemplate', { static: true }) donGiatemplate: TemplateRef<any>;
  @ViewChild('thanhTientemplate', { static: true }) thanhTientemplate: TemplateRef<any>;
  @ViewChild('BNTratemplate', { static: true }) BNTratemplate: TemplateRef<any>;
  // group
  groups: GroupDescriptor[] = [{ field: 'TenLoaiThuoc' }];
  @ViewChild('loaiGroupHeaderTemplate', { static: true }) loaiGroupHeaderTemplate: TemplateRef<any>;
  //
  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('toiTemplate', { static: true }) toiTemplate: TemplateRef<any>;

  @ViewChild('donGiaVatTuTemplate', { static: true }) donGiaVatTuTemplate: TemplateRef<any>;
  @ViewChild('donGiaVatTuFooterTemplate', { static: true }) donGiaVatTuFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienVatTuTemplate', { static: true }) thanhTienVatTuTemplate: TemplateRef<any>;
  @ViewChild('thanhTienVatTuFooterTemplate', { static: true }) thanhTienVatTuFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienVatTuGroupFooterTemplate', { static: true }) thanhTienVatTuGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('actionVatTuTemplate', { static: true }) actionVatTuTemplate: TemplateRef<any>;
  
  @ViewChild('STTVatTuTemplate', { static: true }) STTVatTuTemplate: TemplateRef<any>;
  @ViewChild('gridVatTu', { read: GridComponent, static: false }) gridVatTu: GridComponent;
  constructor(private apiService: ApiService) { }
  groupsVatTu: GroupDescriptor[] = [{ field: '', aggregates: [{ field: 'ThanhTienVatTu', aggregate: 'sum' }] }];
  public totalThanhTienVatTu(field: any) {
    switch (field) {
      case 'ThanhTienVatTu':
        return this.dataToSumThanhTienVatTu.reduce((sum: any, item: { ThanhTienVatTu: any; }) => sum + item.ThanhTienVatTu, 0);
    }
  };
  ngOnInit() {
    // this.documentType = DocumentType.KhamBenh;
    console.log(this.dataToSumThanhTienVatTu)
    this.gridToaThuocChildColumns = [
      { Field: "TenLoaiThuoc", Title: "#", Width: 120, Sortable: true,  Hidden: true, TemplateGroupHeader: this.loaiGroupHeaderTemplate },
      { Field: "Duoc", Title: "Dược Phẩm", Width: 120, Sortable: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 100, Sortable: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 80, Sortable: true },
      { Field: "SangDisplay", Title: "Sáng", Width: 60, Sortable: true,Template:this.sangTemplate,ShowTooltip: true },
      { Field: "TruaDisplay", Title: "Trưa", Width: 60, Sortable: true,Template:this.truaTemplate,ShowTooltip: true},
      { Field: "ChieuDisplay", Title: "Chiều", Width: 60, Sortable: true ,Template:this.chieuTemplate,ShowTooltip: true},
      { Field: "ToiDisplay", Title: "Tối", Width: 60, Sortable: true ,Template:this.toiTemplate,ShowTooltip: true},
      { Field: "SoNgay", Title: "Số ngày", Width: 80, Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 50, Sortable: true },
      { Field: "DuongDung", Title: "Đường dùng", Width: 110, Sortable: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 110, Sortable: true, Template: this.donGiatemplate, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 110, Sortable: true, Template: this.thanhTientemplate, TemplateFooter: this.thanhTienFooterTemplate },
      { Field: "TuongTacThuoc", Title: "tương tác thuốc", Width: 110, Sortable: true },
      { Field: "DiUngThuocDisplay", Title: "Dị ứng thuốc", Width: 200, Sortable: true },
      { Field: "GhiChu", Title: "Cách dùng", Width: 200, Sortable: true }
    ];
    this.gridVatTuYTColumns = [
      { Field: "STT", Title: "#", Width: 60, Sortable: true, Template: this.STTVatTuTemplate },
      { Field: "Ten", Title: "Tên", Width: 170, Sortable: true, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 120, Sortable: true },
      { Field: "SoLuong", Title: "Số lượng", Width: 100, Sortable: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 80, Sortable: true, TemplateFooter: this.donGiaVatTuFooterTemplate, Template: this.donGiaVatTuTemplate, },
      { Field: "ThanhTienVatTu", Title: "Thành tiền", Width: 200, Sortable: true, Template: this.thanhTienVatTuTemplate, TemplateFooter: this.thanhTienVatTuFooterTemplate, TemplateGroupFooter: this.thanhTienVatTuGroupFooterTemplate },
      { Field: "GhiChu", Title: "Cách dùng", Width: 200, Sortable: true, ShowTooltip: true },
    ];
    this.getById(this.yeuCauKhamBenhId);
  }
  onDataBoundVatTuGrid(event){
    this.dataToSumThanhTienVatTu = event.Data;
  }
  getById(yeuCauKhamBenhId: number) {

    this.apiService.post<any>("KhamBenh/GetDataForGridAsyncChildToaThuocList?yeuCauKhamBenhId=" + this.yeuCauKhamBenhId).subscribe((resultData) => {
      if (resultData !== undefined && resultData != null) {
        for (var item = 0; item < resultData.length; item++) {
          this.ToaThuoc.push(resultData[item]);
          console.log("goiDichVuCoChietKhau", this.ToaThuoc)
        }
      }
    });
  }
}
