import { Component, OnInit, Optional, Inject, ViewChild, TemplateRef, Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-in-bang-kham-benh-chi-dinh',
  templateUrl: './in-bang-kham-benh-chi-dinh.component.html',
  styleUrls: ['./in-bang-kham-benh-chi-dinh.component.scss']
})
export class InBangKhamBenhChiDinhComponent implements OnInit {

  hostingName: string;
  src: string = "";
  icClose = icClose;
  ChonKieuInChung: boolean = true;
  showLoaiPhieuIn: boolean = false; // kieu in
  loaiPhieu: any;
  phieuInDichVuKham : any[]=[];
  phieuInDichVuKyThuat : any[]=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private apiService: ApiService, private dialog: MatDialog,
  private dialogRef: MatDialogRef<InBangKhamBenhChiDinhComponent>) {
    // this.src= "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Model);
  }
  modelPrint: any;
  ngOnInit() {
    var self = this;
    var dialogRef = self.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });

    if (this.data.Model.InChungChiDinh == 0) {
      this.showLoaiPhieuIn = true;
    }
    else {
      this.showLoaiPhieuIn = false;
    }
    this.apiService.post<any>("KhamBenh/InPhieuChiDinhh", this.data.Model).subscribe(
      resultData => {
        this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
        this.modelPrint = resultData;
        dialogRef.close();
      });
  }
  InPhieu(loaiPhieu) {
    this.loaiPhieu = loaiPhieu;
    this.getSharedPrintForm();
  }
  getSharedPrintForm() {
    let tmpPhieuChiDinh = "<table id='showHeader' style='width: 100%; height: 40px; background: #005dab;color:#fff;'> <tr><th rowspan = '3' style = 'font-size: 20px;'>PHIẾU CHỈ ĐỊNH CẬN LÂM SÀNG</th></tr></table>";
    let data: string = "";
    data = this.modelPrint.split(tmpPhieuChiDinh).join("");
    // // cat page break o cuoi chuoi
    // data.lastIndexOf("<div class=\"pagebreak\"> </div>")
    // in tung phieu 
    let dataphieu = data.split('<div class=\"pagebreak\"> </div>');
    let pageBreak = '<div class=\"pagebreak\"> </div>';
    dataphieu.forEach(element => {
      if(element.indexOf('DỊCH VỤ KHÁM BỆNH') > -1)
      {
        let PhieuInPageBreak = element + pageBreak;
        this.phieuInDichVuKham.push(PhieuInPageBreak); 
       
      }
      else{
        let PhieuInPageBreak = element + pageBreak;
        this.phieuInDichVuKyThuat.push(PhieuInPageBreak); 
        
      }
    });
   
    if(this.loaiPhieu == 1) // dvkt
    {
      let chuoiIn = "";
      this.phieuInDichVuKyThuat.forEach(element => {
        chuoiIn = chuoiIn + element;
      });
      let viTricutPageBreak = chuoiIn.lastIndexOf(pageBreak);
      chuoiIn = chuoiIn.substr(0,viTricutPageBreak);
      return new Promise(resolve => {
        resolve(chuoiIn);
        chuoiIn="";
        this.phieuInDichVuKyThuat = [];
      });
      
    }
    if(this.loaiPhieu == 2) // dv kb
    {
      let chuoiIn = "";
      this.phieuInDichVuKham.forEach(element => {
        chuoiIn = chuoiIn + element;
      });
      let viTricutPageBreak = chuoiIn.lastIndexOf(pageBreak);
      chuoiIn = chuoiIn.substr(0,viTricutPageBreak);
      return new Promise(resolve => {
        resolve(chuoiIn);
        chuoiIn="";
        this.phieuInDichVuKham = [];
      });
    }
    if(this.loaiPhieu == 3) // dv in chung
    {
      return new Promise(resolve => {
        resolve(data);
      });
    }
  }
  changeKieuIn(event: any) {
    this.ChonKieuInChung = event;
    if (this.ChonKieuInChung == true) {
      this.data.Model.KieuInChung = this.ChonKieuInChung;
      console.log("data.Model:", this.data.Model);
      this.apiService.post<any>("KhamBenh/InPhieuChiDinhh", this.data.Model).subscribe(
        resultData => {
          this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
          this.modelPrint = resultData;
        });
    }
    else {
      this.data.Model.KieuInChung = this.ChonKieuInChung;
      console.log("data.Model:", this.data.Model);
      this.apiService.post<any>("KhamBenh/InPhieuChiDinhh", this.data.Model).subscribe(
        resultData => {
          this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
          this.modelPrint = resultData;
        });
    }
  }
  close() {
    // this.dialog.closeAll();
    this.dialogRef.close();
  }

}
