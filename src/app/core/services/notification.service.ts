import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ToasterService, Toast, BodyOutputType } from 'angular2-toaster';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FeedbackViewModel } from 'src/app/shared/models/feedback.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'underscore';

declare var jQuery: any;

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    snackBarOpen:any;
  constructor(private http: Http,private snackBar: MatSnackBar) { }

  getErrorFeedback(feedback: FeedbackViewModel) {
    return this.http.get('/assets/template/errorHandlerTemplate.html').pipe(
        map((res: Response) => {
            var html = res.text();
            var resultMessage = _.template(html)({ data: feedback });
            this.showError(resultMessage);
            return "";
        }),
        catchError((err: Response) => {
            console.log(err);
            return throwError(err || 'Server error');
        }),);
}

  showError(message: string) {
    this.showIt(message, "snackbar-error");
  }

  showSuccess(message: string) {
      this.showIt(message, "snackbar-success");
  }

  showWarning(message: string) {
      this.showIt(message, "snackbar-warning");
  }

  showInfo(message: string) {
      this.showIt(message, "snackbar-info");
  }

  private showIt(message: string, toastType: string) {
    if(this.snackBarOpen!=null)
    {
      this.snackBarOpen.dismiss();
    }
    if(jQuery(".mat-snack-bar-container").length>0)
    {
      jQuery(".mat-snack-bar-container").parent().remove();
    }
    if(message!=null && message!="")
    {
      this.snackBarOpen=this.snackBar.open(message, 'Đóng', {
          duration: 7000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          panelClass:[toastType]
        });
    }
  }
}
