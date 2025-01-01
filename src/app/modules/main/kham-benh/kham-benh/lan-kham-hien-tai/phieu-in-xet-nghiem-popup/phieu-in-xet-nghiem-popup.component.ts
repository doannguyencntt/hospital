import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ApiService } from "src/app/core/services/api.service";
import icClose from "@iconify/icons-ic/twotone-close";
import { PhieuInXetNghiemVo } from "../../../kham-benh.model";

@Component({
  selector: "app-phieu-in-xet-nghiem-popup",
  templateUrl: "./phieu-in-xet-nghiem-popup.component.html",
  styleUrls: ["./phieu-in-xet-nghiem-popup.component.scss"],
})
export class PhieuInXetNghiemComponent implements OnInit {
  icClose = icClose;
  phieuInXetNghiemVo = new PhieuInXetNghiemVo;
  srcDatahtml: string[] = [];
  srcData: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    if (window.location.protocol == "http:") {
      this.phieuInXetNghiemVo.HostingName = "http://" + window.location.host;
    } else {
      this.phieuInXetNghiemVo.HostingName = "http://" + window.location.host;
    }
    this.phieuInXetNghiemVo.PhienXetNghiemId = this.data.phienXetNghiemId;
    this.phieuInXetNghiemVo.NhomDichVuBenhVienId = this.data.nhomDichVuBenhVienId;
    this.apiService.post<any>("KhamBenh/PhieuInNhomXetNghiem", this.phieuInXetNghiemVo)
      .subscribe((res) => {
        res.forEach(element => {
          this.srcDatahtml.push(element.Html);
          this.srcData.push("data:text/html;charset=utf-8," + encodeURIComponent(element.Html));
        });
      });
  }

  loaiPhieuIn: any;
  InPhieu(loaiPhieu: any) {
    this.loaiPhieuIn = loaiPhieu;
  }

  getSharedPrintForm(id: any) {
    return new Promise((resolve) => {
      this.srcDatahtml.forEach(e => {
        resolve(e);
      });     
    });
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
  close() {
    this.dialog.closeAll();
  }
}
