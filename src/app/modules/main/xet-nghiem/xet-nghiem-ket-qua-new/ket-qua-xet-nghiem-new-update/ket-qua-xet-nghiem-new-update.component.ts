import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/core/error/error.service';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { TrangThaiKetQuaXetNghiemConst } from 'src/app/shared/constants/xet-nghiem-constant';
import { PhieuDuyetKetQua } from '../../duyet-ket-qua/duyet-ket-qua.model';
import { KetQuaXetNghiemNewSharedComponent } from '../ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from '../../duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';
import { KetQuaPhieuNewPopupComponent } from '../ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SearchNew } from '../../duyet-ket-qua-new/duyet-ket-qua-new.model';
import { FormControl } from '@angular/forms';
import icSearch from '@iconify/icons-ic/twotone-search';
import { KetQuaXetNghiemViewKetQuaNewViewModel } from '../xet-nghiem-ket-qua-new.model';



@Component({
  selector: 'app-ket-qua-xet-nghiem-new-update',
  templateUrl: './ket-qua-xet-nghiem-new-update.component.html',
  styleUrls: ['./ket-qua-xet-nghiem-new-update.component.scss']
})
export class KetQuaXetNghiemNewUpdateComponent implements OnInit {
  ketQuaXetNghiem: KetQuaXetNghiemViewKetQuaNewViewModel = new KetQuaXetNghiemViewKetQuaNewViewModel();
  documentType: DocumentType = DocumentType.KetQuaXetNghiem;
  loading: boolean = false;
  showToastNotifyError: boolean = false;
  id: number;
  yeuCauTiepNhanId: number;
  modelQRCode: any;
  baseRoute = 'xet-nghiem/ket-qua-new';

  //1: Chờ kết quả, 2: Chờ kết quả chạy lại, 3: Chờ duyệt kết quả, 4: Đã có kết quả
  type: number;
  trangThaiIn: boolean = false;
  ChoKQChayLai: string = TrangThaiKetQuaXetNghiemConst.ChoKQChayLai;
  ChoKQ: string = TrangThaiKetQuaXetNghiemConst.ChoKQ;
  ChoDuyetKQ: string = TrangThaiKetQuaXetNghiemConst.ChoDuyetKQ;
  DaCoKQ: string = TrangThaiKetQuaXetNghiemConst.DaCoKQ;
  search: SearchNew = new SearchNew();
  searchCtrl = new FormControl();
  icSearch = icSearch;

  titleString: string = null;

  validationErrors: any;

  inPhieuDuyetKetQua: PhieuDuyetKetQua = new PhieuDuyetKetQua();

  @ViewChild(KetQuaXetNghiemNewSharedComponent, { static: true }) shared: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: BaseService,
    private apiService: ApiService,
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private errorService: ErrorService
  ) {

    this.id = this.route.snapshot.params.id;
    this.type = this.route.snapshot.params.type;
    this.yeuCauTiepNhanId = this.route.snapshot.params.yctn;
    if (this.type == 1) {
      this.titleString = this.ChoKQ;
    }
    else if (this.type == 2) {
      this.titleString = this.ChoKQChayLai;
    }
    else if (this.type == 3) {
      this.titleString = this.ChoDuyetKQ;
    }
    else if (this.type == 4) {
      this.titleString = this.DaCoKQ;
    }
  }

  ngOnInit() {
  }

  xuatFileKetQua() {

  }
  getTrangThaiIn(event) {
    this.trangThaiIn = event;
  }

  inKetQua() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.showPopupDownloadData();
      this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
      this.inPhieuDuyetKetQua.Header = true;
      this.inPhieuDuyetKetQua.PhienXetNghiemId = this.id;
      this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.yeuCauTiepNhanId;

      let dialogRef: any;
      let dataChiTietXetNghiem: any[] = [];
      this.apiService.post<any>("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId + "&phienXetNghiemId=" + this.inPhieuDuyetKetQua.PhienXetNghiemId).subscribe(
        (result) => {
          if (result != null) {
            result.forEach(element => {
              if (element.ChiTietKetQuaXetNghiems != null) {
                element.ChiTietKetQuaXetNghiems.forEach(elements => {
                  dataChiTietXetNghiem.push(elements);
                });
              }

            });
            dialogRef = this.dialog.open(ChonLoaiKetQuaXetNghiemPopupComponent, {
              disableClose: true,
              width: '1000px',
              // height: '300px',
              data: dataChiTietXetNghiem,
            }).afterClosed().subscribe((result) => {
              if (result != undefined && result != null && result != "") {
                if (result == 'No') {
                  this.closePopupLoadingData();
                }
                else {
                  this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                  this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                  this.apiService.post<Array<string>>('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                    arrHtml => {

                      this.dialog.open(KetQuaPhieuNewPopupComponent, {
                        disableClose: false,
                        width: '1000px',
                        data: arrHtml
                      }).afterClosed().subscribe(result => {
                      });
                      this.closePopupLoadingData();
                    },
                    (err: ApiError) => {
                      if (err.Message !== 'Validation Failed') {
                        this.notificationService.showError(err.Message);
                      }
                      this.closePopupLoadingData();
                    });
                }
              }
            });
          };
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });



    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  popupLoadingData: any;
  showPopupDownloadData() {
    if (this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == null
      || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải dữ liệu...' },
      });
    }
  }
  closePopupLoadingData() {
    if (this.popupLoadingData) {
      this.popupLoadingData.close();
    }
  }

  searchChangesNangCao($event) {

  }

  changeQR($event) {

  }
  onKey(event: any) {
    if (event.key == "Enter") {
      this.TimkiemNangCao();
    }
  }
  
  QuetMaQRCodeClick() {
    let elementBarcode: HTMLElement = document.getElementById(
        "barcodeActive"
    ) as HTMLElement;
    if (elementBarcode != undefined) {
        elementBarcode.click();
    }
}

  TimkiemNangCao() {
    if (this.search.ThoiDiemGoiDuyetTuFormat != null) {
      this.search.FromDate = CommonService.formatDateTime(
        this.search.ThoiDiemGoiDuyetTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.search.FromDate = null;
    }

    if (this.search.ThoiDiemGoiDuyetDenFormat != null) {
      this.search.ToDate = CommonService.formatDateTime(
        this.search.ThoiDiemGoiDuyetDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.search.ToDate = null;
    }
    let data = this.shared.getSharedDataLuu();
    this.apiService.post<any>("DuyetKetQuaXetNghiem/TimKiemPhienXetNghiemGanNhat", this.search).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.apiService.post<any>("KetQuaXetNghiem/TrangThaiPhienXetNghiemGanNhat?phienXetNghiemId=" + resultData).subscribe(
            type => {
              if (type == 1) {
                this.titleString = this.ChoKQ;
              }
              else if (type == 2) {
                this.titleString = this.ChoKQChayLai;
              }
              else if (type == 3) {
                this.titleString = this.ChoDuyetKQ;
              }
              else if (type == 4) {
                this.titleString = this.DaCoKQ;
              }
              this.router.navigate([this.baseRoute + "/cap-nhat/" + resultData + "/" + type + "/" + data.YeuCauTiepNhanId]);
              this.shared.getById(resultData);
            });

        }
      }, (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      }
    )
  }

  quayLai() {
    this.router.navigateByUrl('xet-nghiem/ket-qua-new?holdQuery=true');
  }

  luu() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.shared.validationErrors = null;
      self.loading = true;
      self.ketQuaXetNghiem = self.shared.getSharedDataLuu();
      self.baseService.update(self.ketQuaXetNghiem).subscribe(
        (resData) => {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          self.loading = false;
          self.shared.updateDataSauKhiLuu(resData);
        },
        (err: ApiError) => {
          self.shared.validationErrors = err.ValidationErrors;
          if (self.showToastNotifyError == true) {
            var mess = self.errorService.getValidationErrors(err);
            if (mess != null) {
              self.notificationService.showError(mess);
            }
          }
          self.loading = false;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    }
  }

}
