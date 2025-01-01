import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { ICDPhuId } from 'src/app/modules/main/kham-benh/kham-benh.model';

@Component({
  selector: 'app-lich-su-chuan-doan',
  templateUrl: './lich-su-chuan-doan.component.html',
  styleUrls: ['./lich-su-chuan-doan.component.scss']
})
export class LichSuChuanDoanComponent implements OnInit {
  @Input() KhamBenhId: any = null;
  @Input() BenhNhanId: any = null;
  @Input() YeuCauTiepNhanId: any = null;

  gridColumnChuanDoanKemTheo: any[] = [];

  gridColumnToaThuocs: any[] = [];
  gridColumnVatTuYTes: any[] = [];
  dataSourceChanDoanKemTheo: any = { data: [], total: 0 }

  iCDPhuObjs: any = null;
  iCDPhuString: string = "";
  iCDPhuIdS: ICDPhuId = new ICDPhuId();
  gridKetLuanColumns: any[] = [];

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.gridColumnChuanDoanKemTheo = [
      { Field: "MaICd", Title: "ICD", Width: 100, Sortable: false },
      { Field: "GhiChu", Title: "CHẨN ĐOÁN", Width: 150, Sortable: false }
    ];
    this.gridColumnToaThuocs = [
      { Field: "Ma", Title: "Mã", Width: 100, Sortable: true },
      { Field: "Ten", Title: "Tên", Width: 150, Sortable: true },
      { Field: "HoatChat", Title: "Hoạt Chất", Width: 150, Sortable: true },
      { Field: "DVT", Title: "Đơn Vi Tính", Width: 150, Sortable: true },
      { Field: "Sang", Title: "Sáng", Width: 150, Sortable: true },
      { Field: "Trua", Title: "Trưa", Width: 150, Sortable: true },
      { Field: "Chieu", Title: "Chiều", Width: 150, Sortable: true },
      { Field: "Toi", Title: "Tối", Width: 150, Sortable: true },
      { Field: "SoNgay", Title: "Số Ngày", Width: 150, Sortable: true },
      { Field: "DuongDung", Title: "ĐD", Width: 150, Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 150, Sortable: true },
      { Field: "DonGia", Title: "ĐơnGia", Width: 150, Sortable: true },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 150, Sortable: true },
      { Field: "TuongTac", Title: "Tương Tác", Width: 150, Sortable: true },
      { Field: "DiUng", Title: "Dị Ứng", Width: 150, Sortable: true },
      { Field: "CachDung", Title: "Cách Dùng", Width: 150, Sortable: true }
    ];

    this.gridColumnVatTuYTes = [
      { Field: "Ten", Title: "Tên", Width: 100, Sortable: true },
      { Field: "DVT", Title: "Đơn Vi Tính", Width: 150, Sortable: true },
      { Field: "DonGia", Title: "Đơn Giá", Width: 150, Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 150, Sortable: true },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 150, Sortable: true },
      { Field: "CachDung", Title: "Cách Dùng", Width: 150, Sortable: true }
    ];
    this.getChuanDoanKemTheo();
    this.apiService.get("KhamBenh/GetDataForGridAsyncKetLuan?yeuCauKhamBenhId=" + this.KhamBenhId).subscribe(
      (resultData: any) => {
        this.gridKetLuanColumns = resultData;

        resultData.forEach(element => {
          this.iCDPhuObjs = element.ChuanDoanICDPhu;
        });
        this.iCDPhuObjs.forEach(element1 => {
          this.iCDPhuIdS.Ids.push(element1.ICDId);
        });
      });
  }

  getChuanDoanKemTheo() {
    this.apiService.post<any>("KhamBenh/GetDataGridChanDoanKemTheo?idYCKB=" + this.KhamBenhId).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSourceChanDoanKemTheo.data = resultData.Value.Data;
        this.dataSourceChanDoanKemTheo.total =  resultData.Value.TotalRowCount;
      }
    });
  }
}
