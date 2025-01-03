import { NotificationComponent } from 'src/app/shared/component/dialogs/notification/notification.component';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable,EMPTY } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AccessUser } from 'src/app/shared/models/access-user.model';
import { SessionStorageHelper } from '../utilities/session-storage.helper';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  dialogWarning:any=null;
  constructor(private authService: AuthService,private dialog: MatDialog,private router: Router) { 
    this.dialogWarning=null;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(req.url)
    //console.log("req.url = ", req.url.indexOf("amazonaws.com"))
    //console.log("req.url = ", req.url)

    if (req.url.indexOf("weqweqwe.com") > -1) {
      //   //req.url: structure JSON [{name, url}];
      let urls = JSON.parse(req.url);
      let url: string = "";
      let data: any = null;
      let contentType = undefined;
      if (req.body) {
        req.body.forEach(file => {
          //console.log("------: ",file, req.url)
          data = file;
          contentType = file.type;
          url = urls.filter(o => o.name == file.name)[0].url;
        });
      }
      const headers = new HttpHeaders({
        'content-type': contentType,
      })
      const request = new HttpRequest('PUT', url, data, { headers: headers, reportProgress: true });
      return next.handle(request);
    }
    else {
      const userLocal = this.authService.getAccessUser();
      const phongLamViecIdLocal = this.authService.getPhongLamViecId();
      const userSession = SessionStorageHelper.getItem<AccessUser>("AccessUserKey");
      const phongLamViecIdSession = SessionStorageHelper.getItem<string>("PhongBenhVienId");
      if((req.url.indexOf("/Login")<0 && userLocal!=null && phongLamViecIdLocal!=null && (userSession==null || phongLamViecIdSession==null)) || 
      (userLocal!=null && userSession!=null && phongLamViecIdLocal!=null && phongLamViecIdSession!=null && (userLocal.UserName!=userSession.UserName  || phongLamViecIdLocal!=phongLamViecIdSession)))
      {
        if(this.dialogWarning!=null)
        {
          this.dialog.closeAll();
          this.dialogWarning=null;
        }
        this.dialogWarning=this.dialog.open(NotificationComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "THÔNG BÁO", Message: "Hiện tại thông tin đăng nhập hoặc phòng thực hiện đã thay đổi, bạn hãy tải lại trang để cập nhật mới." }
        }).afterClosed().subscribe(result => {       
          SessionStorageHelper.setItem("PhongBenhVienId",phongLamViecIdLocal);
          SessionStorageHelper.setItem("AccessUserKey",userLocal);
          window.location.reload();
          // var currentUrl=this.router.url;
          //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          //   this.router.navigate([currentUrl])); 
        });
        return EMPTY;
      }

      const headersConfig = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };      

      // var timezoneLocation = new Date().toString().replace(/^.*GMT.*\(/, "").replace(/\)$/, "");
      // var timezoneMoment = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // headersConfig['TimeZone']="{Location:"+timezoneLocation+",Moment:"+timezoneMoment+"}";
      const accessToken = this.authService.getToken();

      if (accessToken) {
        headersConfig['Authorization'] = `Bearer ${accessToken.Token}`;
      }

      //
      headersConfig['PhongBenhVienId'] = this.authService.getPhongLamViecId() + "";
      //
      const request = req.clone({ setHeaders: headersConfig });
      return next.handle(request);
    }



  }
}
