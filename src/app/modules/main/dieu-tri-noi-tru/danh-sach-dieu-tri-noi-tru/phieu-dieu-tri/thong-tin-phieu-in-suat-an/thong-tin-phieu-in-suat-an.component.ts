import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { ApiService } from "src/app/core/services/api.service";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { Common } from "../../thong-tin-benh-an/thong-tin-benh-an.model";
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { CommonService } from "src/app/core/utilities/common.helper";
import icSearch from "@iconify/icons-ic/twotone-search";
import { FormControl } from "@angular/forms";
import { XacNhanInPhieuAn } from "../../../dieu-tri-noi-tru.model";
import { parseNumber } from "@progress/kendo-angular-intl";
import { PhieuInSuatAnPopupComponent } from "../phieu-in-suat-an-popup/phieu-in-suat-an-popup.component";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
@Component({
  selector: "app-thong-tin-phieu-in-suat-an",
  templateUrl: "./thong-tin-phieu-in-suat-an.component.html",
  styleUrls: ["./thong-tin-phieu-in-suat-an.component.scss"],
})

export class ThongTinPhieuInSuatAnComponent implements OnInit {
  icSearch = icSearch;
  icClose = icClose;
  common = new Common();
  hostingName: string = "";
  inPhieuTheoYeuCau: boolean = true;
  gridColumns: any;
  additionString: any = null;
  yeuCauTiepNhanId: any = null;
  phieuDieuTriHienTaiId: any = null;
  searchString: string = null;
  public searchCtrl = new FormControl();
  inPhieuAn: XacNhanInPhieuAn = new XacNhanInPhieuAn();
  loadingPopup: any;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<any>) {
  }

  @ViewChild("gridList", { static: false }) gridList: GridComponent;
  ngOnInit() {
    this.yeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
    this.phieuDieuTriHienTaiId = this.data.PhieuDieuTriId;
    this.additionString = this.yeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;

    if (window.location.protocol == this.common.Http) {
      this.hostingName = this.common.Http + "//" + window.location.host;
    } else {
      this.hostingName = this.common.Http + "//" + window.location.host;
    }
    this.gridColumns = [
      { Field: "Ten", Title: "Tên", Width: 100, ShowTooltip: true, Sortable: false },
    ];
  }

  InPhieu() {
    var self = this;

     let loading = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang tải...' }
    });

    self.inPhieuAn.Hosting = window.location.protocol + "//" + window.location.host;
    self.inPhieuAn.PhieuDieuTriId = self.phieuDieuTriHienTaiId;
    self.inPhieuAn.YeuCauTiepNhanId = parseNumber(self.yeuCauTiepNhanId);
    self.inPhieuAn.DichVuDuocChon = self.inPhieuTheoYeuCau ? [] : self.inPhieuAn.DichVuDuocChon;

    if (!self.inPhieuTheoYeuCau && self.inPhieuAn.DichVuDuocChon.length <= 0) {
      this.notificationService.showError("Vui lòng chọn dịch vụ");
      loading.close();
      return true;
    }

    self.apiService.post<any>("DieuTriNoiTru/InPhieuSuatAn", self.inPhieuAn).subscribe(
      resData => {
        if (resData == undefined || resData == null) {
          self.notificationService.showError("Không có dịch vụ nào để in");
          loading.close();
        }
        else {
          self.dialog.open(PhieuInSuatAnPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: resData,
          }
          ).afterClosed().subscribe(() => {
            loading.close();
          });
        }
      },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      }
    );
  }

  modelChange(event: any) {
    this.inPhieuTheoYeuCau = event;
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.TimkiemNangCao();
    }
  }

  searchChanges(event: any) {
    if (event != undefined && (event == null || event == "")) {
      this.gridList.searchString = null;
    }
  }

  TimkiemNangCao() {
    var searchText = this.searchString != undefined ? this.searchString : "";
    if (this.gridList != undefined) {
      this.gridList.searchString = searchText;
      this.gridList._additionalSearchString = this.additionString;
      this.gridList.search();
    }
  }

  clearSearch() {
    this.searchString = "";
    if (this.gridList != undefined) {
      this.gridList.search();
    }
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

  close() {
    this.dialog.closeAll();
  }

  chonDichVu(event) {
    this.inPhieuAn.DichVuDuocChon = [];
    this.inPhieuAn.DichVuDuocChon = event;
  }

  showLoadingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải...' }
      });
    }
  }

  closeAllDialogs() {
    if (this.loadingPopup) {
      this.loadingPopup.close();
      this.loadingPopup = null;
    }
  }

}
