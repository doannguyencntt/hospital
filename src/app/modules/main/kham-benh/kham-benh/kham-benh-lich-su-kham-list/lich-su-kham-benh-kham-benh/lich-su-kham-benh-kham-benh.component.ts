import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { KhamBenhs, ThongTinKham,ChuanDoanBanDau} from '../../../kham-benh.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-lich-su-kham-benh-kham-benh',
  templateUrl: './lich-su-kham-benh-kham-benh.component.html',
  styleUrls: ['./lich-su-kham-benh-kham-benh.component.scss']
})
export class LichSuKhamBenhKhamBenhComponent implements OnInit {
  documentType: DocumentType;
  templateKhoaPhong: string = null;
  TTtemplateKhoaPhong: ThongTinKham[];
  thongTinKhamTheoKhoas: string = null;
  originTemplateKhoaPhong: any = null;
  gridKhamBenhColumns: KhamBenhs[] = [];
  tenKhoaPhong: string = null;
  //
  templateKhoaPhongObj: any = null;
  thongTinKhamTheoKhoaObj: any = null;
  trieuChungLamSangObjs: any = null;
  chuanDoanBanDauObjs: any = null;
  trieuChungLamSangs: any[] =[];
  chuanDoanBanDaus: ChuanDoanBanDau[] =[];
  @Input() data: any = null;
  @Input() templateKp: string = null;
  @Input() tenKp: string = null;
  @Input() yeuCauKhamBenhId: number;
  @Input() BenhNhan: number;
  @Input() maTiepNhanBNId: number;
  urlGetData: string = "KhamBenh/GetDataForGridAsyncKhamBenh";


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.documentType = DocumentType.KhamBenh;
    this.tenKhoaPhong = this.tenKp;
    this.apiService.get("KhamBenh/GetDataForGridAsyncKhamBenh?yeuCauKhamBenhId=" + this.yeuCauKhamBenhId).subscribe(
      (resultData: any) => {
        this.gridKhamBenhColumns = resultData;
        resultData.forEach(element => {
          this.trieuChungLamSangObjs = element.TrieuChungLamSang;
          this.chuanDoanBanDauObjs = element.ChuanDoanBanDau;
          // trieu chung
          this.trieuChungLamSangObjs.forEach(element1 => {
            this.apiService.get("KhamBenh/GetTrieuChungLamSang?TrieuChungId=" + element1.TrieuChungId).subscribe(
              (resultData1: any) => {
                this.trieuChungLamSangs.push(resultData1);
              });
          });
           // Chuan doan ban dau
           this.chuanDoanBanDauObjs.forEach(element2 => {
            this.apiService.get("KhamBenh/GetChuanDoanBanDau?ChuanDoanId=" + element2.ChuanDoanId).subscribe(
              (resultData2: any) => {
                this.chuanDoanBanDaus.push(resultData2);
              });
          });
        });

        resultData.forEach(element => {
          this.thongTinKhamTheoKhoaObj = JSON.parse(element.ThongTinKhamTheoKhoa);
        });
      });
  }
}