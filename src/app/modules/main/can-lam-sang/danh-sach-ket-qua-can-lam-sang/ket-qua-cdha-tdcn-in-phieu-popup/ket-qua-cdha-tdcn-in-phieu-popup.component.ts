import { CommonService } from 'src/app/core/utilities/common.helper';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Cauhinh } from '../../../danh-muc/nhom-he-thong/cau-hinh-he-thong/cau-hinh-he-thong.model';
import { CauHinhIn, CauHinhInTheoNhom } from '../can-lam-sang';

@Component({
  selector: 'app-ket-qua-cdha-tdcn-in-phieu-popup',
  templateUrl: './ket-qua-cdha-tdcn-in-phieu-popup.component.html',
  styleUrls: ['./ket-qua-cdha-tdcn-in-phieu-popup.component.scss']
})
export class KetQuaCdhaTdcnInPhieuPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  cauHinhIn: CauHinhIn = new CauHinhIn();
  validationErrors: any;
  cauHinhInTheoNhom:CauHinhInTheoNhom[]=[];
  chonCauHinhIn : boolean = false;

  constructor(private apiService: ApiService, private notificationService: NotificationService,
    private dialogRef: MatDialogRef<KetQuaCdhaTdcnInPhieuPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.res);
    this.getCauHinhIn();
  }
  getCauHinhIn(){
    this.apiService.get<any>("CauHinh/GetByName?name=CauHinhCDHA.CauHinhIn").subscribe(
      resultData => {
          this.cauHinhInTheoNhom =JSON.parse(resultData.Value);
          if(this.cauHinhInTheoNhom.length>0)
          {
            var obj=CommonService.findObjectByKey(this.cauHinhInTheoNhom,"DichVuKyThuatBenhVienId",this.data.dichVuKyThuatBenhVienId); 
            if(obj!=null)
            {
              this.cauHinhIn=obj.CauHinhIn;
              this.thongTinPhieuIn(this.cauHinhIn);
            }
          }
      });
  }
  close() {
    this.dialogRef.close();
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

  modelChangeInPhieuLoGo(event: any) {
    this.cauHinhIn.InLogo = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuBarCode(event: any) {
    this.cauHinhIn.InBarcode = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuTieuDe(event: any) {
    this.cauHinhIn.InTieuDe = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuHoVaTen(event: any) {
    this.cauHinhIn.InHoVaTen = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuNamSinh(event: any) {
    this.cauHinhIn.InNamSinh = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuGioiTinh(event: any) {
    this.cauHinhIn.InGioiTinh = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuDiaChi(event: any) {
    this.cauHinhIn.InDiaChi = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuBSChiDinh(event: any) {
    this.cauHinhIn.InBSChiDinh = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuNgayChiDinh(event: any) {
    this.cauHinhIn.InNgayChiDinh = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuNoiChiDinh(event: any) {
    this.cauHinhIn.InNoiChiDinh = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuNoiThucHien(event: any) {
    this.cauHinhIn.InNoiThucHien = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuChuanDoan(event: any) {
    this.cauHinhIn.InChuanDoan = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuInChiDinh(event: any) {
    this.cauHinhIn.InChiDinh = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuInThanhNgang(event: any) {
    this.cauHinhIn.InThanhNgang = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelChangeInPhieuInKyThuat(event: any) {
    this.cauHinhIn.InKyThuat = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }
  
  modelChangeInPhieuBA(event: any) {
    this.cauHinhIn.InSoBenhAn = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  modelDienGiai(event: any) {
    this.cauHinhIn.InDienGiai = event;
    this.thongTinPhieuIn(this.cauHinhIn);
  }
  
  inSieuAmTim() {
    this.setUnCheckTrenPhieuIn();
    this.thongTinPhieuIn(this.cauHinhIn);
  }

  

  setUnCheckTrenPhieuIn() {
    this.cauHinhIn.InLogo = false;
    this.cauHinhIn.InBarcode = false;
    this.cauHinhIn.InTieuDe = false;
    this.cauHinhIn.InHoVaTen = false;
    this.cauHinhIn.InNamSinh = false;
    this.cauHinhIn.InGioiTinh = false;
    this.cauHinhIn.InDiaChi = false;
    this.cauHinhIn.InBSChiDinh = false;
    this.cauHinhIn.InNgayChiDinh = false;
    this.cauHinhIn.InNoiChiDinh = false;
    this.cauHinhIn.InNoiThucHien = false;
    this.cauHinhIn.InSoBenhAn = false;
    this.cauHinhIn.InChuanDoan = false;
    this.cauHinhIn.InDienGiai = false;
    this.cauHinhIn.InChiDinh = false;
    this.cauHinhIn.InThanhNgang = false;
    this.cauHinhIn.InKyThuat = false;
  }

  thongTinPhieuIn(cauHinhIn: any) {
    this.cauHinhIn.Id = this.data.yeuCauDVKyThuatId;
    this.cauHinhIn.HostingName = window.location.protocol + "//" + window.location.host;
    this.apiService.post<string>("CanLamSang/XuLyInPhieuKetQuaTheoYeuCau", cauHinhIn).subscribe(res => {
      this.src = "data:text/html;charset=utf-8," + encodeURIComponent(res);
      this.data.res = res;
    }, err => {
      this.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        this.notificationService.showError(err.Message);
      }
    });
  }

  getSharedPrintForm() {
    return new Promise(resolve => {
      let source = this.replaceAll(this.data.res, "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU KẾT QUẢ</th></p>", "");
      source = this.replaceAll(source, "zoom:100%;", "zoom:73%;");
      setTimeout(function () {
        resolve(source);
      }, 100);
      this.close();
    });
  }
}
