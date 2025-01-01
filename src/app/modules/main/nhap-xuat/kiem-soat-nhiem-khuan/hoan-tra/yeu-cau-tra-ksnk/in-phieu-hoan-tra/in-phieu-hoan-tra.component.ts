import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ApiService } from "src/app/core/services/api.service";
import icClose from "@iconify/icons-ic/twotone-close";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { PhieuHoanTraDuocPhamVatTu } from "../../../../duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.model";
import { LoaiDuocPhamVatTu } from "../yeu-cau-tra-ksnk.model";
import { isThisSecond } from "date-fns";


@Component({
  selector: "app-in-phieu-hoan-tra",
  templateUrl: "./in-phieu-hoan-tra.component.html",
  styleUrls: ["./in-phieu-hoan-tra.component.scss"],
})
export class InPhieuHoanTraKSNKComponent implements OnInit {
  hostingName: string;
  icClose = icClose;
  src: string = "";
  srcPhieuInHoanTra: string = "";
  srcPhieuInHoanTraHtml: string = "";
  xemSrcPhieuInHoanTraHtml: string = "";

  printLayout: string = 'Portrait';
  printSize: string = 'A4';
  phieuHoanTraDuocPhamVatTu: PhieuHoanTraDuocPhamVatTu = new PhieuHoanTraDuocPhamVatTu();

  hoanTraDuocPhamId: any = null;
  hoanTraVatTuId: any = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.hoanTraDuocPhamId = this.data.HoanTraDuocPhamId;
    this.hoanTraVatTuId = this.data.HoanTraVatTuId;

    if (window.location.protocol == "http:") {
      this.hostingName = "http://" + window.location.host;
    } else {
      this.hostingName = "https://" + window.location.host;
    }
    if (this.hoanTraVatTuId != undefined && this.hoanTraVatTuId != null && 
      this.hoanTraDuocPhamId != undefined && this.hoanTraDuocPhamId != null) {
      this.data.Title = "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ";
      this.phieuHoanTraDuocPhamVatTu.YeuCauHoanTraDuocPhamVatTuId = this.hoanTraVatTuId;
      this.phieuHoanTraDuocPhamVatTu.LaDuocPham = false;
      this.phieuHoanTraDuocPhamVatTu.LaTuTruc = this.data.LaTuTruc;
      this.phieuHoanTraDuocPhamVatTu.DuocDuyet = this.data.DuocDuyet;
      this.apiService.post<any>("HoanTra/InPhieuHoanTraDuocPhamVatTu", this.phieuHoanTraDuocPhamVatTu)
        .subscribe((resHoanTraVT) => {
          this.srcPhieuInHoanTraHtml = resHoanTraVT + "<div class=\"pagebreak\"> </div>";
          this.xemSrcPhieuInHoanTraHtml = "<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
            "<th>PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ</th>" + "</p>" + resHoanTraVT;

          this.phieuHoanTraDuocPhamVatTu.YeuCauHoanTraDuocPhamVatTuId = this.hoanTraDuocPhamId;
          this.phieuHoanTraDuocPhamVatTu.LaDuocPham = true;
          this.phieuHoanTraDuocPhamVatTu.LaTuTruc = this.data.LaTuTruc;
          this.phieuHoanTraDuocPhamVatTu.DuocDuyet = this.data.DuocDuyet;
          this.apiService.post<any>("HoanTra/InPhieuHoanTraDuocPhamVatTu", this.phieuHoanTraDuocPhamVatTu)
            .subscribe((resHoanTraDuocPham) => {
              this.srcPhieuInHoanTraHtml += resHoanTraDuocPham;
              this.xemSrcPhieuInHoanTraHtml += "<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
                "<th>PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ</th>" + "</p>" + resHoanTraDuocPham;
              this.srcPhieuInHoanTra = "data:text/html;charset=utf-8," + encodeURIComponent(this.xemSrcPhieuInHoanTraHtml);
            });
        });
    }
    else  {
      this.data.Title = "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ";
      this.phieuHoanTraDuocPhamVatTu.YeuCauHoanTraDuocPhamVatTuId = this.hoanTraDuocPhamId != null ? this.hoanTraDuocPhamId : this.hoanTraVatTuId;
      this.phieuHoanTraDuocPhamVatTu.LaDuocPham = this.hoanTraDuocPhamId != null ? true : false;
      this.phieuHoanTraDuocPhamVatTu.LaTuTruc = this.data.LaTuTruc;
      this.phieuHoanTraDuocPhamVatTu.DuocDuyet = this.data.DuocDuyet;
      this.apiService.post<any>("HoanTra/InPhieuHoanTraDuocPhamVatTu", this.phieuHoanTraDuocPhamVatTu)
        .subscribe((resHoanTra) => {
          this.srcPhieuInHoanTraHtml = resHoanTra;
          this.srcPhieuInHoanTra = "data:text/html;charset=utf-8," + encodeURIComponent(this.srcPhieuInHoanTraHtml);
        });
    }   
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
