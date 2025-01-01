import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ApiService } from "src/app/core/services/api.service";
import icClose from "@iconify/icons-ic/twotone-close";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { PhieuHoanTraDuocPhamVatTu } from "../duyet-hoan-tra-duoc-pham.model";

@Component({
  selector: "app-in-phieu-hoan-tra",
  templateUrl: "./in-phieu-hoan-tra.component.html",
  styleUrls: ["./in-phieu-hoan-tra.component.scss"],
})
export class InPhieuHoanTraCompoment implements OnInit {
  hostingName: string;
  icClose = icClose;
  src: string = "";
  srcPhieuInHoanTra: string = "";
  srcPhieuInHoanTraHtml: string = "";
  printLayout: string = 'Portrait';
  printSize: string = 'A4';
  phieuHoanTraDuocPhamVatTu: PhieuHoanTraDuocPhamVatTu = new PhieuHoanTraDuocPhamVatTu();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.phieuHoanTraDuocPhamVatTu.YeuCauHoanTraDuocPhamVatTuId = this.data.YeuCauHoanTraDuocPhamVatTuId;
    this.phieuHoanTraDuocPhamVatTu.LaDuocPham = this.data.LaDuocPham;
    this.phieuHoanTraDuocPhamVatTu.LaTuTruc = this.data.LaTuTruc;
    this.phieuHoanTraDuocPhamVatTu.DuocDuyet = this.data.DuocDuyet;
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

    // if (this.data.yeuCauHoanTraDuocPhamId !== null && this.data.yeuCauHoanTraDuocPhamId !== undefined) {
    // this.apiService.get<any>("HoanTra/GetHtmlPhieuInHoanTraDuocPham?yeuCauHoanTraDuocPhamId=" + this.data.yeuCauHoanTraDuocPhamId + "&hostingName=" + this.hostingName)
    this.apiService.post<any>("HoanTra/InPhieuHoanTraDuocPhamVatTu", this.phieuHoanTraDuocPhamVatTu)
      .subscribe((resHoanTra) => {
        this.srcPhieuInHoanTraHtml = resHoanTra;
        this.srcPhieuInHoanTra = "data:text/html;charset=utf-8," + encodeURIComponent(resHoanTra);
        loading.close();
      });
    // }
  }

  getSharedPrintForm() {
    let dataReplaceemplateHeaderGayNghien = "";
    const templateHeaderGayNghien =
      '<div style=\'width: 100%; height: 40px; background: #005dab;color:#fff;text-align: center;font-size: 23px\'> PHIẾU HOÀN TRẢ THUỐC</div>';
    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.srcPhieuInHoanTraHtml, templateHeaderGayNghien, '');
    return new Promise(resolve => {
      resolve(dataReplaceemplateHeaderGayNghien);
    });
  }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

  close() {
    this.dialog.closeAll();
  }
}
