import { Injectable, Injector, ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { LoggingService } from "./logging.service";
import { NotificationService } from "../services/notification.service";
import { ApiError } from "src/app/shared/models/api-error.model";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {
    if (error.message!=undefined && error.message.indexOf("Loading chunk")>=0) {
      window.location.reload();
    }
    else
    {
      const errorService = this.injector.get(ErrorService);
      const logger = this.injector.get(LoggingService);
      const notifier = this.injector.get(NotificationService);
      let message;
      let stackTrace;
      if (error instanceof ApiError) {
        // Server error
        notifier.showError(error.Message);
        message = error.Message;
        stackTrace = error.Detail;
      } else {
        // Client Error
        console.log(error);
        message = errorService.getClientErrorMessage(error);
        notifier.showError(message);
      }
      // Always log errors
      logger.logError(message, stackTrace);
    }
  }
}
