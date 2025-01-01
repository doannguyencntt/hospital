import { Component, OnInit, TemplateRef, Input, ViewChild} from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { ICDPhuId,YeuCauKhamBenhId} from '../../../kham-benh.model';
import { ChanDoanCuaBacSiKhacPopupComponent } from '../../lan-kham-hien-tai/chan-doan-cua-bac-si-khac-popup/chan-doan-cua-bac-si-khac-popup.component';
import { MatDialog,  } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { DonThuocBacSiKhacKePopupComponent } from '../../lan-kham-hien-tai/don-thuoc-bac-si-khac-ke-popup/don-thuoc-bac-si-khac-ke-popup.component';
@Component({
  selector: 'app-lich-su-kham-benh-ket-luan',
  templateUrl: './lich-su-kham-benh-ket-luan.component.html',
  styleUrls: ['./lich-su-kham-benh-ket-luan.component.scss']
})
export class LichSuKhamBenhKetLuanComponent implements OnInit {
  documentType: DocumentType;
  format: string = 'n2';
  dataSourceKetLuan: any = {
      data: [],
      total: 0
  };
  nhaSanXuat = {} as YeuCauKhamBenhId;
  validationErrors: any;
  huyetApTamTruong: number;
  huyetApTamThu: number;
  iCDPhuObjs: any = null;
  iCDPhuString : string="";
  gridKetLuanICDPhus: any[] = [];
  iCDPhuIdS: ICDPhuId = new ICDPhuId();
@Input() yeuCauKhamBenhId : number;
@Input() yeuCauTiepNhanId : number;
@Input() BenhNhan : number;
  gridKetLuanColumns: any[] = [];
  constructor(private apiService: ApiService,private dialog: MatDialog,) { }

  ngOnInit() {
    var self = this;
    var dialogRef = self.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
    this.documentType = DocumentType.KhamBenh; // cần gán lại giá trị
      this.apiService.get("KhamBenh/GetDataForGridAsyncKetLuan?yeuCauKhamBenhId=" + this.yeuCauKhamBenhId).subscribe(
        (resultData: any) => {
            this.gridKetLuanColumns = resultData;
            this.dataSourceKetLuan.data = resultData;
            resultData.forEach(element => {
              this.iCDPhuObjs = element.ChuanDoanICDPhu;
            });
             // Lisst ICD phu
             this.iCDPhuObjs.forEach(element1 => {
              this.iCDPhuIdS.Ids.push(element1.ICDId);
            });
            this.apiService.post("KhamBenh/GetChuanDoanICDPhu?yeuCauKhamBenhId=" +this.yeuCauKhamBenhId).subscribe(
              (resultData1: any) => {
                this.gridKetLuanICDPhus = resultData1.Result;
              });
              dialogRef.close();
        });
      }
      xemChanDoan() {
        let yeuCauKhamBenh = new YeuCauKhamBenhId();
        yeuCauKhamBenh.Id = this.yeuCauKhamBenhId;;
        this.dialog.open(ChanDoanCuaBacSiKhacPopupComponent, {
            disableClose: false,
            width: '1000px',
            data: { Model: yeuCauKhamBenh, Title: "" }
        }).afterClosed().subscribe(() => {
        });
      }
      xemDonThuocBacSiKhac() {
        this.dialog.open(DonThuocBacSiKhacKePopupComponent, {
          disableClose: false,
          width: '1000px',
          data: { Model: this.yeuCauKhamBenhId, Title: "" }
        }).afterClosed().subscribe(() => {
        });
      }
}
