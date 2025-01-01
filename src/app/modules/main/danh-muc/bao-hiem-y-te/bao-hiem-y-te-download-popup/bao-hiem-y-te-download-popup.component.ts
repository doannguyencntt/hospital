import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Login } from '../bao-hiem-y-te.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BaoHiemYTeXemComponent } from '../bao-hiem-y-te-xem/bao-hiem-y-te-xem.component';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-bao-hiem-y-te-download-popup',
  templateUrl: './bao-hiem-y-te-download-popup.component.html',
  styleUrls: ['./bao-hiem-y-te-download-popup.component.scss']
})
export class BaoHiemYTeDownloadPopupComponent implements OnInit {

 
loginInfor: Login;
loading:boolean =true;
validationErrors: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private apiService: ApiService,private notificationService: NotificationService,private dialogRef:MatDialogRef<BaoHiemYTeDownloadPopupComponent>) { }

  ngOnInit() {
    this.loginInfor=new Login();
    if(this.data!=undefined){
      this.DownLoadFile(this.data)
    }
    
  }
  onKey(event: any) {

    if (event.keyCode === 13) {
      this.Gui();
    }
  }
  DownLoadFile(data:any){
    data.forEach(c => {
      window.location.href = environment.api_url+"/BHYT/DownloadXML?nameFile="+c.TenFile+"&duLieu="+ c.DuLieu;
      console.log(c)
  });
  this.dialogRef.close(false);
}
Gui(){
  this.loading=true;
  this.apiService.post<any>("BHYT/XacNhanUser", this.loginInfor).subscribe(
      resultData => {
        this.loading=false;
        if(resultData==false){
          this.notificationService.showSuccess("Sai tài khoản hoặc mật khẩu");
        }else{
          console.log("Du lieu Download tra ve",this.data)
          // this.dialogRef.close(resultData);
        }
    },
      (err: ApiError) => {
        this.loading=false;
        this.validationErrors = err.ValidationErrors;
      });
}

}
