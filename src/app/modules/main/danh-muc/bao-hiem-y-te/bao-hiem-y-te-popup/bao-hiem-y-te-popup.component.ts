import { Component, OnInit } from '@angular/core';
import { Login } from '../bao-hiem-y-te.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-bao-hiem-y-te-popup',
  templateUrl: './bao-hiem-y-te-popup.component.html',
  styleUrls: ['./bao-hiem-y-te-popup.component.scss']
})
export class BaoHiemYTePopupComponent implements OnInit {
loginInfor: Login;
loading:boolean =false;
validationErrors: any;
  constructor(private apiService: ApiService,private notificationService: NotificationService,private dialogRef:MatDialogRef<BaoHiemYTePopupComponent>) { }

  ngOnInit() {
    this.loginInfor=new Login();
  }
  onKey(event: any) {

    if (event.keyCode === 13) {
      this.Gui();
    }
  }
Gui(){
  this.loading=true;
  this.apiService.post<any>("BHYT/XacNhanUser", this.loginInfor).subscribe(
      resultData => {
        this.loading=false;
        if(resultData==false){
          this.notificationService.showSuccess("Sai tài khoản hoặc mật khẩu");
        }else{
          this.dialogRef.close(resultData);
        }
    },
      (err: ApiError) => {
        this.loading=false;
        this.validationErrors = err.ValidationErrors;
      });
}
}
