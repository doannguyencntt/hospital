import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { YeuCauKhamBenh } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { ThongTinLichSuKhamBenhNoiTru } from '../../lich-su-vao-vien.model';

import { LichSuKhamBenhChiSoSinhTonNoiTruComponent } from '../lich-su-kham-benh-chi-so-sinh-ton/lich-su-kham-benh-chi-so-sinh-ton.component';
@Component({
  selector: 'app-lich-su-kham-benh-noi-tru',
  templateUrl: './lich-su-kham-benh-noi-tru.component.html',
  styleUrls: ['./lich-su-kham-benh-noi-tru.component.scss']
})
export class LichSuKhamBenhNoiTruComponent implements OnInit, OnChanges {
  @Input() KhamBenhId: any = null;
  @Input() BenhNhanId: any = null;
  @Input() YeuCauTiepNhanId: any = null;

  yeuCauTiepNhanId: any;
  gridColumnTienSuBenhs: any[] = [];
  gridColumnDiUngs: any[] = [];
  gridColumnChuanDoanPhanBiets: any[] = [];
  gridKhamKhacColumns: any[] = [];
  icClose = icClose;
  thongTinKhamToanThan: string = "";
  thongTinKhamTheoDichVuData: string = null;
  yeuCauKhamBenhs: YeuCauKhamBenh[] = [];
  public trieuChungBenh: string = "";
  public yeuCauKhamBenhTemplate = new YeuCauKhamBenh();
  dataSourceChanDoanPhanBiet: any = { data: [], total: 0 }
  dataSourceKhamKhac: any = { data: [], total: 0 }

  @ViewChild(LichSuKhamBenhChiSoSinhTonNoiTruComponent, { static: false })
  LichSuKhamBenhChiSoSinhTonNoiTruComponent: LichSuKhamBenhChiSoSinhTonNoiTruComponent;
  @ViewChild('boPhanTemplate', { static: true }) boPhanTemplate: TemplateRef<any>;
  @ViewChild('moTaTemplate', { static: true }) moTaTemplate: TemplateRef<any>;
  @ViewChild('loaiDiUngTemplate', { static: true }) loaiDiUngTemplate: TemplateRef<any>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  ngOnChanges(value: SimpleChanges) {
    if (this.KhamBenhId != null) {
      this.getThongTinLichSuKhamBenh();
      this.getThongTinLienQuan();
    }
  }

  ngOnInit() {
    this.gridColumnTienSuBenhs = [
      { Field: "LoaiTienSuBenh", Title: "LOẠI TIỀN SỬ BỆNH", Width: 100, Sortable: false },
      { Field: "TenBenh", Title: "TÊN BỆNH", Width: 150, Sortable: false }
    ];
    this.gridColumnDiUngs = [
      { Field: "TenLoaiDiUng", Title: "LOẠI DỊ ỨNG", Width: 100, Sortable: false ,Template: this.loaiDiUngTemplate},
      { Field: "TenDiUng", Title: "TÊN DỊ ỨNG", Width: 150, Sortable: false },
      { Field: "BieuHienDiUng", Title: "BIỂU HIỆN DỊ ỨNG", Width: 100, Sortable: false },
      { Field: "TenMucDo", Title: "MỨC ĐỘ", Width: 150, Sortable: false }
    ];
    this.gridColumnChuanDoanPhanBiets = [
      { Field: "MaICd", Title: "ICD", Width: 100, Sortable: false },
      { Field: "GhiChu", Title: "CHẨN ĐOÁN", Width: 150, Sortable: false }
    ];
    this.gridKhamKhacColumns = [
      { Field: "BoPhan", Title: "Bộ phận", Width: 100, Sortable: false, Template: this.boPhanTemplate },
      { Field: "MoTa", Title: "Mô tả", Width: 220, Sortable: false, Template: this.moTaTemplate },
      { Field: "Action", Title: "", Width: 20, Sortable: false }
    ];
  }

  getThongTinLienQuan() {    
    this.apiService.post<any>("KhamBenh/GetDataGridChanDoanPhanBiet?idYCKB=" + this.KhamBenhId).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSourceChanDoanPhanBiet.data = resultData.Value.Data;
        this.dataSourceChanDoanPhanBiet.total = resultData.Value.TotalRowCount;
      }
    });
    this.apiService.post<any>("KhamBenh/GetDataGridBoPhanKhac?idYCKB=" + this.KhamBenhId).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSourceKhamKhac.data = resultData.Value.Data;
      }
    });
  }

  getThongTinLichSuKhamBenh() {
    this.apiService.post<any>("KhamBenh/GetDataForGridAsyncTrieuChungBenhSu?ycKhamBenhId=" + this.KhamBenhId)
      .subscribe((resultData) => {
        if (resultData !== undefined && resultData != null && resultData.length > 0) {
          this.yeuCauKhamBenhs = resultData;

          this.trieuChungBenh = resultData[0].TrieuChungTiepNhan;
          this.thongTinKhamToanThan = resultData[0].KhamToanThan;

          this.yeuCauKhamBenhTemplate.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(resultData[0].ThongTinKhamTheoDichVuTemplate);
          this.thongTinKhamTheoDichVuData = resultData[0].ThongTinKhamTheoDichVuData;
          if (this.thongTinKhamTheoDichVuData == null) {
            this.yeuCauKhamBenhTemplate.ThongTinKhamTheoDichVuTemplateObj = undefined;
          }
          this.bindDataDynamicComponent();
        }
      });
  }

  bindDataDynamicComponent() {
    let strData = this.thongTinKhamTheoDichVuData;
    if (strData != undefined && strData != null) {
      let dataObj = JSON.parse(strData);
      let itemTemp = null;
      if (this.yeuCauKhamBenhTemplate.ThongTinKhamTheoDichVuTemplateObj !== null) {
        this.yeuCauKhamBenhTemplate.ThongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(item => {
          if (item.groupItems != undefined && item.groupItems != null && item.groupItems.length > 0) {
            item.groupItems.forEach(element => {
              itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == element.Id);
              if (itemTemp != null) {
                element.Value = itemTemp.Value;
              }
            });
          }
          else {
            itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == item.Id);
            if (itemTemp != null) {
              item.Value = itemTemp.Value;
            }
          }
        });
      }
    }
  }
}
