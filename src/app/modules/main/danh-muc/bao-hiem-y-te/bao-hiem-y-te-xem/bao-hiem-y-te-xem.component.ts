import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { XMLThongTinBenhNhan, HoSoChiTietThuoc, HoSoChiTietDVKT, HoSoCanLamSang, HoSoChiTietDienBienBenh, TenFile } from '../bao-hiem-y-te.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { BaoHiemYTePopupComponent } from '../bao-hiem-y-te-popup/bao-hiem-y-te-popup.component';
import { BaoHiemYTeDownloadPopupComponent } from '../bao-hiem-y-te-download-popup/bao-hiem-y-te-download-popup.component';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-bao-hiem-y-te-xem',
  templateUrl: './bao-hiem-y-te-xem.component.html',
  styleUrls: ['./bao-hiem-y-te-xem.component.scss']
})
export class BaoHiemYTeXemComponent implements OnInit {
  listtenFile : Array<TenFile>;
  thongtinbenhnhan:XMLThongTinBenhNhan
  validationErrors: any;
  year:number = new Date().getFullYear();
  loading:boolean = false;
  constructor(private route: ActivatedRoute ,private dialog: MatDialog,private router: Router, private apiService: ApiService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.thongtinbenhnhan=new XMLThongTinBenhNhan();
    this.listtenFile = new Array<TenFile>();
  }
 public DataFileReturn(){
   return this.listtenFile;
 }
 DeleteVitriDVKT(position: any){
  this.dialog.open(ConfirmComponent, {
    disableClose: false,
    width: '400px',
    data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa dòng"]) }
  }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
    if (result == "Yes") {
      this.thongtinbenhnhan.HoSoChiTietDVKT.splice(position, 1);
    }
  });
  
 
}
DeleteVitrilamsang(position: any){
  this.dialog.open(ConfirmComponent, {
    disableClose: false,
    width: '400px',
    data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa dòng"]) }
  }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
    if (result == "Yes") {
      this.thongtinbenhnhan.HoSoCanLamSang.splice(position, 1);
    }
  });
  
 
}
DeleteVitriDienBien(position: any){
  this.dialog.open(ConfirmComponent, {
    disableClose: false,
    width: '400px',
    data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa dòng"]) }
  }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
    if (result == "Yes") {
      this.thongtinbenhnhan.HoSoChiTietDienBienBenh.splice(position, 1);
    }
  }); 
  
 
}
DownloadFile(){
  this.loading=true;
  if(this.thongtinbenhnhan!=undefined){
    this.thongtinbenhnhan.DataJson = JSON.stringify(this.thongtinbenhnhan);
  }
  this.thongtinbenhnhan.IsDownLoad=true;
  this.apiService.post<any>("BHYT/GuiHoSoGiamDinh", this.thongtinbenhnhan).subscribe(
    resultData => {
      this.loading=false;
      console.log("Data",resultData)
      if(resultData.XMLError!=undefined){
        this.notificationService.showSuccess("Đã xảy ra lỗi vui lòng liên hệ admin");
        this.loading = false;
      }else
      if(resultData.APIError!=undefined){
        this.notificationService.showSuccess("Đã xảy ra lỗi API trả về vui lòng liên hệ admin");
        this.loading = false;
      }else{
        var a = document.createElement("a");
        for(let i = 0; i< resultData.TenFileVOs.length; i++) {
            a.href = `${environment.api_url}/BHYT/DownloadXML?NameFileDown=${resultData.NameFileDown}&nameFile=${resultData.TenFileVOs[i].TenFile}`;
            a.target = "_blank";
            //console.log(a)
            a.click();
            // if(i==resultData.TenFileVOs.length-1){
            //   console.log("Có vô")
            //   this.apiService.post<any>("BHYT/DeleteXML?NameFileDown="+resultData.NameFileDown).subscribe(
            //     resultData1 => {
            //       this.notificationService.showSuccess("Download hoàn tất");
            //   },
            //     (err: ApiError) => {
            //       this.loading=false;
            //     });
            // }
        }
      }
  },
    (err: ApiError) => {
      this.loading = false;
      this.validationErrors = err.ValidationErrors;
    });
    // let dialogRef =  this.dialog.open(BaoHiemYTePopupComponent, {
    //   //disableClose: true,
    //   width: '500px',
    //   height: '300px'
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Ketqua',result)
    //   if(result==true){
    //     if(this.thongtinbenhnhan!=undefined){
    //       this.thongtinbenhnhan.DataJson = JSON.stringify(this.thongtinbenhnhan);
    //     }
    //     this.thongtinbenhnhan.IsDownLoad=true;
    //     this.apiService.post<any>("BHYT/GuiHoSoGiamDinh", this.thongtinbenhnhan).subscribe(
    //       resultData => {
    //         this.loading=false;
    //         console.log("Data",resultData)
    //         if(resultData.XMLError!=undefined){
    //           this.notificationService.showSuccess("Đã xảy ra lỗi vui lòng liên hệ admin");
    //           this.loading = false;
    //         }else
    //         if(resultData.APIError!=undefined){
    //           this.notificationService.showSuccess("Đã xảy ra lỗi API trả về vui lòng liên hệ admin");
    //           this.loading = false;
    //         }else{
    //           var a = document.createElement("a");
    //           for(let i = 0; i< resultData.TenFileVOs.length; i++) {
    //               a.href = `${environment.api_url}/BHYT/DownloadXML?NameFileDown=${resultData.NameFileDown}&nameFile=${resultData.TenFileVOs[i].TenFile}`;
    //               a.target = "_blank";
    //               //console.log(a)
    //               a.click();
    //               if(i==resultData.TenFileVOs.length-1){
    //                 console.log("Có vô")
    //                 this.apiService.post<any>("BHYT/DeleteXML?NameFileDown="+resultData.NameFileDown).subscribe(
    //                   resultData1 => {
    //                     this.notificationService.showSuccess("Download hoàn tất");
    //                 },
    //                   (err: ApiError) => {
    //                     this.loading=false;
    //                   });
    //               }
    //           }
    //         }
    //     },
    //       (err: ApiError) => {
    //         this.loading = false;
    //         this.validationErrors = err.ValidationErrors;
    //       });
    //   }else{
    //     this.loading=false;
    //   }
      
    // });  
}
  Gui(){
    this.loading=true;
    this.thongtinbenhnhan.IsDownLoad=false;
    let dialogRef =  this.dialog.open(BaoHiemYTePopupComponent, {
      //disableClose: true,
      width: '500px',
      height: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Ketqua',result)
      if(result==true){
        if(this.thongtinbenhnhan!=undefined){
          this.thongtinbenhnhan.DataJson = JSON.stringify(this.thongtinbenhnhan);
        }
        
        this.apiService.post<any>("BHYT/GuiHoSoGiamDinh", this.thongtinbenhnhan).subscribe(
          resultData => {
            this.loading=false;
            console.log("Data",resultData)
            if(resultData.XMLError!=undefined){
              this.notificationService.showSuccess("Đã xảy ra lỗi vui lòng liên hệ admin");
              this.loading = false;
            }else
            if(resultData.NoiDungKetQua!=undefined){
              this.notificationService.showSuccess(resultData.NoiDungKetQua);
              this.loading = false;
            }else{
              this.notificationService.showSuccess("Thêm thành công");
              // this.router.navigate(['danh-muc/bao-hiem-y-te/gui-ho-so-giam-dinh']);
              // this.ngOnInit();
            }
        },
          (err: ApiError) => {
            this.loading = false;
            this.validationErrors = err.ValidationErrors;
          });
      }else{
        this.loading=false;
      }
      
    });  
  }
  ClearData(){

    this.ngOnInit();
  }
  AddNewThuoc(){
    let viTriNew = new HoSoChiTietThuoc();
    this.thongtinbenhnhan.HoSoChiTietThuoc.push(viTriNew);
  }
  AddDichVuKyThuat(){
    let viTriNew = new HoSoChiTietDVKT();
    this.thongtinbenhnhan.HoSoChiTietDVKT.push(viTriNew);
  }
  AddDichVuKyThuatCanLamSang(){
    let viTriNew = new HoSoCanLamSang();
    this.thongtinbenhnhan.HoSoCanLamSang.push(viTriNew);
  }
  AddDienBienBenh(){
    let viTriNew = new HoSoChiTietDienBienBenh();
    this.thongtinbenhnhan.HoSoChiTietDienBienBenh.push(viTriNew);
  }
 
DeleteVitri(position: any){
  this.dialog.open(ConfirmComponent, {
    disableClose: false,
    width: '400px',
    data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa dòng"]) }
  }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
    if (result == "Yes") {
      this.thongtinbenhnhan.HoSoChiTietThuoc.splice(position, 1);
    }
  });
   
}
}
