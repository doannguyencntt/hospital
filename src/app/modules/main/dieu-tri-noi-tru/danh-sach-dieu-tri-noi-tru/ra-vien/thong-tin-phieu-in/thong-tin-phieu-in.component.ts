import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ApiService } from "src/app/core/services/api.service";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { Common } from "../../thong-tin-benh-an/thong-tin-benh-an.model";
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: "app-thong-tin-phieu-in",
  templateUrl: "./thong-tin-phieu-in.component.html",
  styleUrls: ["./thong-tin-phieu-in.component.scss"],
})
export class ThongTinPhieuInComponent implements OnInit {
  icClose = icClose;
  common = new Common();
  hostingName: string = "";
  isInPhieuNoiKhoa: boolean = false;
  srcPhieuInBA: string = "";
  srcPhieuHtml: string = "";
  validationErrors: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    if (window.location.protocol == this.common.Http) {
      this.hostingName = this.common.Http + "//" + window.location.host;
    } else {
      this.hostingName = this.common.Http + "//" + window.location.host;
    }
    var loading = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: {},
    });

    this.apiService.post<any>("DieuTriNoiTru/InPhieuRaVien?yeuCauTiepNhanId=" + this.data.yeuCauTiepNhanId + "&hostingName=" + this.hostingName)
      .subscribe((res) => {
        this.srcPhieuHtml = res;
        this.srcPhieuInBA = this.common.DataTextUTF8 + encodeURIComponent(res);
        loading.close();
      }, (err: ApiError) => {
        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        loading.close();
    });
  }

  loaiPhieuIn: any;
  InPhieu(loaiPhieu: any) {
    this.loaiPhieuIn = loaiPhieu;
  }

  getSharedPrintForm() {
    return new Promise((resolve) => {
      resolve(this.srcPhieuHtml);
    });
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
  close() {
    this.dialog.closeAll();
  }
}
