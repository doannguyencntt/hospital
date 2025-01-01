import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ApiService } from "src/app/core/services/api.service";
import icClose from "@iconify/icons-ic/twotone-close";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";

@Component({
  selector: "popup-in-bang-ke-chi-phi-kham-benh",
  templateUrl: "./popup-in-bang-ke-chi-phi-kham-benh.component.html",
  styleUrls: ["./popup-in-bang-ke-chi-phi-kham-benh.component.scss"],
})
export class InBangKeChiPhiKhamBenhComponent implements OnInit {
  hostingName: string;
  icClose = icClose;
  src: string = "";
  srcBangKeChiPhiKhamBenhCoBHYT: string = "";
  srcBangKeChiPhiKhamBenh: string = "";
  public isBHYT: boolean = false;
  public iskhongBHYT: boolean = false;

  srcBangKeChiPhiKhamBenhCoBHYTHtml: string = "";
  srcBangKeChiPhiKhamBenhHtml: string = "";
  public typeLayout = "landscape";

  @ViewChild("iframeAutoHeight", { static: false })
  iframeAutoHeight: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog
  ) {
    // this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  ngOnInit() {
    if (window.location.protocol == "http:") {
      this.hostingName = "http://" + window.location.host;
    } else {
      this.hostingName = "https://" + window.location.host;
    }
    var loading = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: {},
    });

    this.apiService
      .get<any>(
        "TiepNhanBenhNhan/GetHtmlPhieuChiPhiKhamBenhCoBHYT?yeuCauTiepNhanId=" +
          this.data.id +
          "&hostingName=" +
          this.hostingName
      )
      .subscribe((res) => {
        if (res != "") {
          this.isBHYT = true;
        }

        this.srcBangKeChiPhiKhamBenhCoBHYTHtml = res;
        this.srcBangKeChiPhiKhamBenhCoBHYT =
          "data:text/html;charset=utf-8," + encodeURIComponent(res);
        loading.close();
      });

    this.apiService
      .get<any>(
        "TiepNhanBenhNhan/GetHtmlPhieuChiPhiKhamBenh?yeuCauTiepNhanId=" +
          this.data.id +
          "&hostingName=" +
          this.hostingName
      )
      .subscribe((res) => {
        if (res != "") {
          this.iskhongBHYT = true;
        }
        this.srcBangKeChiPhiKhamBenhHtml = res;
        this.srcBangKeChiPhiKhamBenh =
          "data:text/html;charset=utf-8," + encodeURIComponent(res);
        loading.close();
      });
  }

  getSharedPrintForm(id: any) {
    return new Promise((resolve) => {
      if (this.data.id != null) {
        this.apiService
          .get<any>(
            "TiepNhanBenhNhan/InBangKeChiPhiKhamBenh?yeuCauTiepNhanId=" +
              this.data.id +
              "&hostingName=" +
              this.hostingName
          )
          .subscribe((inPhieu) => {
            resolve(inPhieu);
          });
      }
    });
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
  close() {
    this.dialog.closeAll();
  }
}
