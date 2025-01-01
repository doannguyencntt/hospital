import { LoadingComponent } from './../../../../../../shared/component/dialogs/loading/loading.component';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/core/error/error.service';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { KetQuaXetNghiemMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { KetQuaXetNghiemSharedComponent } from '../ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { KetQuaXetNghiemViewKetQuaViewModel, PhieuDuyetKetQua } from '../ket-qua-xet-nghiem.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KetQuaXetNghiemPopupGoiDuyetComponent } from '../ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component';
import { TrangThaiKetQuaXetNghiemConst } from 'src/app/shared/constants/xet-nghiem-constant';

import { KetQuaPhieuPopupComponent } from '../ket-qua-phieu-popup/ket-qua-phieu-popup.component';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from '../../../duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';

@Component({
  selector: 'app-ket-qua-xet-nghiem-update',
  templateUrl: './ket-qua-xet-nghiem-update.component.html',
  styleUrls: ['./ket-qua-xet-nghiem-update.component.scss']
})
export class KetQuaXetNghiemUpdateComponent implements OnInit {

  documentType: DocumentType = DocumentType.KetQuaXetNghiem;
  loading: boolean = false;
  showToastNotifyError: boolean = false;
  id: number;
  yeuCauTiepNhanId: number;

  //1: Chờ kết quả, 2: Chờ kết quả chạy lại, 3: Chờ duyệt kết quả, 4: Đã có kết quả
  type: number;
  trangThaiIn : boolean = false;
  ChoKQChayLai: string = TrangThaiKetQuaXetNghiemConst.ChoKQChayLai;
  ChoKQ: string = TrangThaiKetQuaXetNghiemConst.ChoKQ;
  ChoDuyetKQ: string = TrangThaiKetQuaXetNghiemConst.ChoDuyetKQ;
  DaCoKQ: string = TrangThaiKetQuaXetNghiemConst.DaCoKQ;

  titleString: string = null;

  validationErrors: any;

  inPhieuDuyetKetQua: PhieuDuyetKetQua = new PhieuDuyetKetQua();

  @ViewChild(KetQuaXetNghiemSharedComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute, private baseService: BaseService
    , private apiService: ApiService, private authService: AuthService, private renderer: Renderer2
    , private dialog: MatDialog, private notificationService: NotificationService
    , private errorService: ErrorService) {
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
  getTrangThaiIn(event){
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
      this.apiService.post<any>("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId + "&phienXetNghiemId=" +this.inPhieuDuyetKetQua.PhienXetNghiemId).subscribe(
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

                      this.dialog.open(KetQuaPhieuPopupComponent, {
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
    // this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
    // this.inPhieuDuyetKetQua.Header = true;
    // this.inPhieuDuyetKetQua.PhienXetNghiemId = this.id;


    // this.apiService.post<any>('DuyetKetQuaXetNghiem/InPhieuDuyetKetQua', this.inPhieuDuyetKetQua).subscribe(
    //   resData => {
    //     if (resData) {
    //       resData.forEach(e => {
    //         const WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
    //         WindowPrt.focus();
    //         WindowPrt.close();
    //         WindowPrt.document.write(e.Html);
    //         WindowPrt.document.close();
    //         var typeSize = "A4";
    //         var typeLayout = "portrait";

    //         var contents = WindowPrt.document.documentElement.innerHTML;
    //         var frame1 = this.renderer.createElement('iframe');
    //         frame1.name = "frame1";
    //         frame1.style.position = "absolute";
    //         frame1.style.top = "-1000000px";
    //         document.body.appendChild(frame1);
    //         var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
    //         frameDoc.document.open();
    //         frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print {@page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet">');
    //         frameDoc.document.write('</head><body>');
    //         frameDoc.document.write(contents);
    //         frameDoc.document.write('</body></html>');
    //         frameDoc.document.close();
    //         setTimeout(function () {
    //           window.frames["frame1"].focus();
    //           window.frames["frame1"].print();
    //           document.body.removeChild(frame1);
    //         }, 500);
    //       });
    //     }
    //   },
    //   (err: ApiError) => {
    //     this.validationErrors = err.ValidationErrors;
    //     if (err.Message !== 'Validation Failed') {
    //       this.notificationService.showError(err.Message);
    //     }
    //   }
    // );
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
  quayLai() {
    this.router.navigateByUrl('xet-nghiem/ket-qua?holdQuery=true');
  }

  luu() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.shared.validationErrors = null;
      self.loading = true;
      self.baseService.update(self.shared.getSharedDataLuu()).subscribe(
        (resData) => {
          //self.router.navigateByUrl('xet-nghiem/ket-qua?holdQuery=true');
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          // const currentRoute = this.router.url;
          //               this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          //                   this.router.navigate([currentRoute]); // navigate to same route
          //               });
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
  GoiDuyet() {
    var self = this;
    let dataGoiDuyet = self.shared.getSharedDataGoiDuyet();
    let data: KetQuaXetNghiemViewKetQuaViewModel = dataGoiDuyet;
    let dataNeedFillValue = data.dataChild.filter(o => (o.GiaTriTuMay == null || o.GiaTriTuMay == "")
      && (o.GiaTriNhapTay == null || o.GiaTriNhapTay == "") && ((o.Level != 1 && o.IdChilds.length == 0) || o.Level != 1 || (o.Level == 1 && o.IdChilds.length == 0)));
    if (dataNeedFillValue.length > 0) {
      //
      let dialogRef = this.dialog.open(KetQuaXetNghiemPopupGoiDuyetComponent, {
        disableClose: true,
        width: '700px',
        height: '340px',
        data: dataNeedFillValue,
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == "Yes") {

          self.apiService.post<any>("KetQuaXetNghiem/DuyetPhienXetNghiem", dataGoiDuyet).subscribe(
            resData => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Gởi duyệt"]));
              self.loading = false;
              if (resData) {
                //self.router.navigate(["/xet-nghiem/ket-qua" + "/cap-nhat/" + dataGoiDuyet.Id + "/3/" + dataGoiDuyet.YeuCauTiepNhanId]);
                let toUrl="/xet-nghiem/ket-qua" + "/cap-nhat/" + dataGoiDuyet.Id + "/3/" + dataGoiDuyet.YeuCauTiepNhanId;
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>this.router.navigate([toUrl]));
              }
              else {
                location.reload();
              }

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
      });
      //
    }
    else {
      self.dialog.open(ConfirmComponent, {
        disableClose: false, width: '400px',
        data: { Title: "Xác nhận", Message: KetQuaXetNghiemMessage.MessageGoiDuyet }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.apiService.post<any>("KetQuaXetNghiem/DuyetPhienXetNghiem", dataGoiDuyet).subscribe(
            resData => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Gởi duyệt"]));
              self.loading = false;
              if (resData) {
                //self.router.navigate(["/xet-nghiem/ket-qua" + "/cap-nhat/" + dataGoiDuyet.Id + "/3/" + dataGoiDuyet.YeuCauTiepNhanId]);
                let toUrl="/xet-nghiem/ket-qua" + "/cap-nhat/" + dataGoiDuyet.Id + "/3/" + dataGoiDuyet.YeuCauTiepNhanId;
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>this.router.navigate([toUrl]));
              }
              else {
                location.reload();
              }
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
      });
    }
  }
}
