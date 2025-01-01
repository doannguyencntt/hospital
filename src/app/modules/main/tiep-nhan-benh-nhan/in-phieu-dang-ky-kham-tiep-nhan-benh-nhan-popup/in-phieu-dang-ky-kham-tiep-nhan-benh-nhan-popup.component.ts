import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup',
  templateUrl: './in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.html',
  styleUrls: ['./in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component.scss']
})
export class InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent implements OnInit {

  phieuDangKyKham : any[] =[];
  phieuDichVuKyThuatCLS : any[] = [];
  phieuDichVuKhamCLS : any[] =[];
  phieuDichVuKhacCLS : any[]=[];
  phieuDichVuGiuongCLS : any[]=[];
  phieuDichVuChiDinhXetNghiemTestCovid : any[]=[];
  src: string = "";
  icClose = icClose;
  modelPrint : any;
  loaiPhieu : number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private apiService: ApiService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Model);
    console.log("data:",this.data.Model)
    this.modelPrint = this.data.Model;
  }
  close() {
    this.dialog.closeAll();
  }
  InPhieu(loaiPhieu) {
    this.loaiPhieu = loaiPhieu;
    this.getSharedPrintForm();
  }
  getSharedPrintForm() {
    const tmpPhieuKham =
      '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU ĐĂNG KÝ KHÁM</th></tr></table>';
    const tmpPhieuCLS =
      '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH CẬN LÂM SÀNG</th></tr></table>';
    const tmpPhieuXNCoVId =
      '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH XÉT NGHIỆM TEST NHANH KHÁNG NGUYÊN SARS-CoV-2 </th></tr></table>';
  
    let data = this.modelPrint.replaceAll(tmpPhieuKham,'').replaceAll(tmpPhieuCLS,'').replaceAll(tmpPhieuXNCoVId,'');
    // in 
    let dataphieukeThuTienThuoc = data.split('<div class=\"pagebreak\"> </div>');
    let dataphieu = data.split('<div class=\"pagebreak\"> </div>');
    let pageBreak = '<div class=\"pagebreak\"> </div>';
    dataphieu.forEach(element => {
      if(element.indexOf('PHIẾU ĐĂNG KÝ KHÁM') > -1)
      {
        let PhieuInPageBreak = element + pageBreak;
        this.phieuDangKyKham.push(PhieuInPageBreak); 
       
      }
      else if(element.indexOf('DỊCH VỤ GIƯỜNG') > -1){
        let PhieuInPageBreak = element + pageBreak;
        this.phieuDichVuGiuongCLS.push(PhieuInPageBreak); 
        
      }else if(element.indexOf('PHIẾU CHỈ ĐỊNH XÉT NGHIỆM') > -1){
        let PhieuInPageBreak = element + pageBreak;
        this.phieuDichVuChiDinhXetNghiemTestCovid.push(PhieuInPageBreak); 
        
      }
      else{
        let PhieuInPageBreak = element + pageBreak;
        this.phieuDichVuKyThuatCLS.push(PhieuInPageBreak); 
      }
    });
   
    if(this.loaiPhieu == 1) // dvkt
    {
      if(this.phieuDichVuKyThuatCLS.length == 0)
      {
        let chuoiIn = "Không có dịch vụ chỉ định cận lâm sàng.";
        return new Promise(resolve => {
          resolve(chuoiIn);
          chuoiIn="";
          this.phieuDichVuKyThuatCLS = [];
        });
      }
      else
      {
        let chuoiIn = "";
      this.phieuDichVuKyThuatCLS.forEach(element => {
        if(element != pageBreak)
        {
          chuoiIn = chuoiIn + element;
        }
        
      });
      let viTricutPageBreak = chuoiIn.lastIndexOf(pageBreak);
      chuoiIn = chuoiIn.substr(0,viTricutPageBreak);
      return new Promise(resolve => {
        resolve(chuoiIn);
        chuoiIn="";
        this.phieuDichVuKyThuatCLS = [];
      });
      }
      
      
    }
    if(this.loaiPhieu == 2) // dv kb
    {
      if(this.phieuDangKyKham.length == 0)
      {
        let chuoiIn = "Không có dịch vụ khám bệnh.";
        return new Promise(resolve => {
          resolve(chuoiIn);
          chuoiIn="";
          this.phieuDichVuKyThuatCLS = [];
        });
      }
      else{
        let chuoiIn = "";
        this.phieuDangKyKham.forEach(element => {
          chuoiIn = chuoiIn + element;
        });
        let viTricutPageBreak = chuoiIn.lastIndexOf(pageBreak);
        chuoiIn = chuoiIn.substr(0,viTricutPageBreak);
        return new Promise(resolve => {
          resolve(chuoiIn);
          chuoiIn="";
          this.phieuDangKyKham = [];
        });
      }
      
    }
    if(this.loaiPhieu == 4) // dv giuong
    {
      if(this.phieuDangKyKham.length == 0)
      {
        let chuoiIn = "Không có dịch vụ khám bệnh.";
        return new Promise(resolve => {
          resolve(chuoiIn);
          chuoiIn="";
          this.phieuDichVuKyThuatCLS = [];
        });
      }
      else{
        let chuoiIn = "";
        this.phieuDichVuGiuongCLS.forEach(element => {
          chuoiIn = chuoiIn + element;
        });
        let viTricutPageBreak = chuoiIn.lastIndexOf(pageBreak);
        chuoiIn = chuoiIn.substr(0,viTricutPageBreak);
        return new Promise(resolve => {
          resolve(chuoiIn);
          chuoiIn="";
          this.phieuDichVuGiuongCLS = [];
        });
      }
    }
    if(this.loaiPhieu == 3) // dv xn covid
    {
      if(this.phieuDichVuChiDinhXetNghiemTestCovid.length == 0)
      {
        let chuoiIn = "Không có phiếu chỉ định xét nghiệm.";
        return new Promise(resolve => {
          resolve(chuoiIn);
          chuoiIn="";
          this.phieuDichVuKyThuatCLS = [];
        });
      }
      else{
        let chuoiIn = "";
        this.phieuDichVuChiDinhXetNghiemTestCovid.forEach(element => {
          chuoiIn = chuoiIn + element;
        });
        let viTricutPageBreak = chuoiIn.lastIndexOf(pageBreak);
        chuoiIn = chuoiIn.substr(0,viTricutPageBreak);
        return new Promise(resolve => {
          resolve(chuoiIn);
          chuoiIn="";
          this.phieuDichVuChiDinhXetNghiemTestCovid = [];
        });
      }
      
    }
}

}
