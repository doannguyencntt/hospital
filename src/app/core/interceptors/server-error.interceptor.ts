import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpHandler,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ErrorService } from '../error/error.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private errorService: ErrorService,private router:Router, private notificationService: NotificationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        var err=null;
        switch(error.status)
        {
          case 403:
            err=new ApiError(SystemMessage.UnAuthorizedMessage);
          case 401:
            {
              this.authService.expiredSection();
              err=new ApiError("Thời gian làm việc của bạn đã hết. Bạn phải đăng nhập lại.");
            }
          case 500:
            {
              if(error.error.Message=="The wait operation timed out")
              {
                err=new ApiError("Lựa chọn tìm kiếm của bạn trả về dữ liệu quá lớn. Bạn hãy giới hạn tìm kiếm lại. Cảm ơn.");
              }
              else{
                err=new ApiError("Có lỗi xảy ra trong quá trình gửi yêu cầu lên server. Bạn hãy tải lại trang. Cảm ơn.");
              }
            }
            default:{
              if(error.statusText== "Unknown Error")
              {
                err=new ApiError("Có lỗi xảy ra trong quá trình gửi yêu cầu lên server. Bạn hãy thử làm lại lần nữa. Cảm ơn.");
              }
              else
              {
                err=this.errorService.getServerError(error);
              }
            }
        }
        return throwError(err);
        // if (error.status === 403) {
        //   return throwError(new ApiError(SystemMessage.UnAuthorizedMessage));
        // }
        // else{
        //   if (error.status === 401) {
        //     this.authService.expiredSection();
        //     var err=new ApiError("Thời gian làm việc của bạn đã hết. Bạn phải đăng nhập lại.");
        //     return throwError(err);
        //   } else {
        //     if(error.statusText== "Unknown Error")
        //     {
        //       //this.router.navigate(["loi-he-thong"]);
        //       var err=new ApiError("Có lỗi xảy ra trong quá trình gửi yêu cầu lên server. Bạn hãy thử làm lại lần nữa. Cảm ơn.");
        //       return throwError(err);
        //     }
        //     else
        //     {
        //       return throwError(this.errorService.getServerError(error));
        //     }
        //   }
        // }
      })
    );
  }
}
