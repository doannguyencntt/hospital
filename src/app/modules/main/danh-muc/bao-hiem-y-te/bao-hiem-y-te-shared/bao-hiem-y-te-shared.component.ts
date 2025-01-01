import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ThongTinBenhNhan, BaoHiemYTe } from '../bao-hiem-y-te.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-bao-hiem-y-te-shared',
  templateUrl: './bao-hiem-y-te-shared.component.html',
  styleUrls: ['./bao-hiem-y-te-shared.component.scss']
})
export class BaoHiemYTeSharedComponent implements OnInit {
thongTinBenhNhan:ThongTinBenhNhan;
thongTinBaoHiemYte:BaoHiemYTe;
check:boolean = false;
validationErrors: any;

modelQRCode: BaoHiemYTe;
  constructor(private route: ActivatedRoute , private apiService: ApiService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    // this.Test();
    //this.Test2();
    this.thongTinBenhNhan = new ThongTinBenhNhan();
    this.thongTinBaoHiemYte=new BaoHiemYTe();
  }
  Test()
{
  this.apiService.post<any>("BHYT/GetLichSuChiTietKhamChuaBenh").subscribe(
    resultData => {
      
  },
    (err: ApiError) => {
       
    });
}//
GuiHoSoGiamDinh()
{
  this.apiService.post<any>("BHYT/GuiHoSoGiamDinh").subscribe(
    resultData => {
      
  },
    (err: ApiError) => {
       
    });
}//
Test2()
{
  this.apiService.post<any>("BHYT/GetThongTinCSKCB").subscribe(
    resultData => {
      
  },
    (err: ApiError) => {
       
    });
}
Test3()
{
  this.apiService.post<any>("BHYT/GetLichSuKhamChuaBenh2").subscribe(
    resultData => {
      
  },
    (err: ApiError) => {
       
    });
}
Test4()
{
  window.location.href = environment.api_url+"/BHYT/DownloadXML";
  // this.apiService.get<any>("BHYT/DownloadXML").subscribe(
  //   resultData => {
      
  // },
  //   (err: ApiError) => {
       
  //   });
}
  Quaylai(){}
  DangKy(){
    this.apiService.post<BaoHiemYTe>("BHYT/GetLichSuKhamChuaBenh", this.thongTinBenhNhan).subscribe(
      resultData => {
        if(resultData!=undefined){
          this.check=true;
          this.thongTinBaoHiemYte=resultData;
        }
    },
      (err: ApiError) => {
         
      });
  }


  changeQR($event){
    this.modelQRCode = $event;
    console.log("changeQR = ", $event);
  }

}
