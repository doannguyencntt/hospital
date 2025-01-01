import { YeuCauKhamBenh } from '../../../kham-benh.model';
import { ApiService } from 'src/app/core/services/api.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { MatDialog } from '@angular/material';
import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
@Component({
  selector: 'app-lich-su-kham-benh',
  templateUrl: './lich-su-kham-benh.component.html',
  styleUrls: ['./lich-su-kham-benh.component.scss']
})
export class LichSuKhamBenhComponent implements OnInit {


  benhNhanHienTai = new YeuCauKhamBenh();
  templateKhoaPhong: string = null;
  maTiepNhanBNId: number = 0;
  yeuCauKhamBenh: YeuCauKhamBenh;
  tenKhoaPhong: string = null;
  trieuChungTiepNhan: string = null;
  benhSu: string = null;
  thongTinKhamTheoDichVuData: string = null;
  thongTinKhamToanThan: string = "";
  isKhamDoan : boolean = null;
  templateDichVuKhamSucKhoes: any ;
  dataKhamDoanChuyenKhoa :any;
  @Input() data: any = null;
  @Input() templateKP: string = null;
  @Input() tenKP: string = null;
  @Input() yeuCauKhamBenhId: number;
  @Input() BenhNhan: number;
  @Input() YeuCauTiepNhanId: number;
  @Output() outputIsKhamDoan = new EventEmitter();
  constructor(
    private apiService: ApiService,
    public intl: IntlService, private dialog: MatDialog) { }

  ngOnInit() {
    var self = this;
    var dialogRef = self.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
      this.apiService.post<any>("KhamBenh/GetDataForGridAsyncTrieuChungBenhSu?ycKhamBenhId=" + this.yeuCauKhamBenhId).subscribe(resultData => {
        if (resultData !== undefined && resultData != null && resultData.length > 0) {
          this.yeuCauKhamBenh = resultData;
         
          this.isKhamDoan = resultData[0].IsKhamDoan;
          this.outputIsKhamDoan.emit(this.isKhamDoan)

          if(this.isKhamDoan == false)
          {
            this.thongTinKhamToanThan = resultData[0].KhamToanThan
            this.yeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(resultData[0].ThongTinKhamTheoDichVuTemplate);
            this.thongTinKhamTheoDichVuData = resultData[0].ThongTinKhamTheoDichVuData;
            if (this.thongTinKhamTheoDichVuData == null) {
              this.yeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = undefined;
            }
            this.bindDataDynamicComponent(); 
          }
          else{
            // khám đoàn => lấy 1 list  griddata enum tất cả chuyên khoa của người bệnh
            this.apiService.post<any>("KhamBenh/GetDataAllKhamChuyenKhoaTheoBenhNhan?yeuCauTiepNhanId=" + this.YeuCauTiepNhanId).subscribe(resultDataKhamDoan => {
              if (resultDataKhamDoan !== undefined && resultDataKhamDoan != null ) {
                this.dataKhamDoanChuyenKhoa = resultDataKhamDoan;
              }
            });
          }
        }
        dialogRef.close();
      });
  }
  bindDataDynamicComponent() {
    let strData = this.thongTinKhamTheoDichVuData;
    if (strData != undefined && strData != null) {
      let dataObj = JSON.parse(strData);
      let itemTemp = null;
      if (this.yeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj !== null) {
        this.yeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(item => {
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
  
  ngOnChanges() {
    this.tenKhoaPhong = this.tenKP;
    this.maTiepNhanBNId = this.YeuCauTiepNhanId;
  }
}
