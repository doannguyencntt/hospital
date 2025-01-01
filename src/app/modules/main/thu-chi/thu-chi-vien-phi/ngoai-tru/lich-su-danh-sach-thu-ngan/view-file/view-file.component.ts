import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ApiService } from "src/app/core/services/api.service";
import icClose from "@iconify/icons-ic/twotone-close";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";

@Component({
  selector: "app-view-file",
  templateUrl: "./view-file.component.html",
  styleUrls: ["./view-file.component.scss"],
})
export class ViewFileCompoment implements OnInit {
  hostingName: string;
  public isInPhieuThu: boolean = false;
  public isInTamUng: boolean = false;
  public isInPhieuChi: boolean = false;
  public isInBenhNhanTraTien: boolean = false;

  icClose = icClose;
  src: string = "";
  srcPhieuThu: string = "";
    srcTamUng: string = "";
  srcPChi: string = "";
  srcPBNTraTien: string = "";

  srcPhieuThuHtml: string = "";
  srcPhieuTamUngHtml: string = "";
  srcPhieuChiHtml: string = "";
  srcBenhNhanTraTienHtml: string = "";
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

    this.data.result.forEach((element) => {
      if (element === "InPhieuThu") {
        this.isInPhieuThu = true;
        this.apiService
          .get<any>(
            "ThuNgan/GetHtmlPhieuThu?id=" +
              this.data.tk +
              "&hostingName=" +
              this.hostingName
          )
          .subscribe((resPhieuThu) => {
            this.srcPhieuThuHtml = resPhieuThu;
            this.srcPhieuThu =
              "data:text/html;charset=utf-8," + encodeURIComponent(resPhieuThu);
              loading.close();
          });
      } else if (element === "InPhieuThuTamUng") {
        this.isInTamUng = true;
        this.apiService
          .get<any>(
            "ThuNgan/GetHtmlPhieuThuTamUng?id=" +
              this.data.tk +
              "&hostingName=" +
              this.hostingName
          )
          .subscribe((resPhieuTamUng) => {
            this.srcPhieuTamUngHtml = resPhieuTamUng;
            this.srcTamUng =
              "data:text/html;charset=utf-8," +
              encodeURIComponent(resPhieuTamUng);
            loading.close();
          });
      } else if (element === "InPhieuChi") {
        this.isInPhieuChi = true;
        this.apiService
          .get<any>(
            "ThuNgan/GetHtmlPhieuChi?id=" +
              this.data.tk +
              "&hostingName=" +
              this.hostingName
          )
          .subscribe((resPhieuChi) => {
            this.srcPhieuChiHtml = resPhieuChi;
            this.srcPChi =
              "data:text/html;charset=utf-8," + encodeURIComponent(resPhieuChi);
            loading.close();
          });
      } else if (element === "InPhieuThuBenhNhanTraTien") {
        this.isInBenhNhanTraTien = true;
        this.apiService
          .get<any>(
            "ThuNgan/GetHtmlPhieuThuBenhNhanTraTien?id=" +
              this.data.tk +
              "&hostingName=" +
              this.hostingName
          )
          .subscribe((resPhieuBNTraTien) => {
            this.srcBenhNhanTraTienHtml = resPhieuBNTraTien;
            this.srcPBNTraTien =
              "data:text/html;charset=utf-8," +
              encodeURIComponent(resPhieuBNTraTien);
            loading.close();
          });
      }
    });
  }

  getSharedPrintForm(id: any) {
    return new Promise((resolve) => {
      if (this.data.result != null) {
        var loaiType = this.data.result.toString();
        this.apiService
          .get<any>(
            "ThuNgan/InPhieuThu?thuPhiId=" +
              this.data.tk +
              "&hostingName=" +
              this.hostingName +
              "&loaiTypes=" +
              loaiType
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
