import { HttpParams } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, NgZone, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";
import icFullscreen from "@iconify/icons-ic/twotone-fullscreen";
import icFullscreenExit from "@iconify/icons-ic/twotone-fullscreen-exit";
import { ImageDrawingComponent } from 'ngx-image-drawing';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { UploadComponent } from 'src/app/shared/component/uploads/upload/upload.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { HinhAnhDinhKemKetQua } from '../can-lam-sang';
declare var jQuery: any;


@Component({
  selector: 'app-ket-qua-cdha-tdcn-them-hinh-anh-popup',
  templateUrl: './ket-qua-cdha-tdcn-them-hinh-anh-popup.component.html',
  styleUrls: ['./ket-qua-cdha-tdcn-them-hinh-anh-popup.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],
  encapsulation: ViewEncapsulation.None
})
export class KetQuaCdhaTdcnThemHinhAnhPopupComponent implements OnInit {

  icClose = icClose;
  icFullscreen = icFullscreen;
  icFullscreenExit = icFullscreenExit;
  isFullscreen: boolean = false;
  documentType: DocumentType = DocumentType.CanLamSang;
  validationErrors: any;
  loading: boolean = false;
  //hinhAnh: string = null;
  isDone: boolean = false;
  hinhAnhDinhKemKetQuas: HinhAnhDinhKemKetQua[] = [];
  showEdit: boolean = false;
  hinhAnhDinhKemKetQuaEdit: HinhAnhDinhKemKetQua = {} as HinhAnhDinhKemKetQua;
  hinhAnhDoaDinhKemKetQuas: any[] = [];

  @ViewChild('loadingTemplate', { static: true }) loadingTemplate: TemplateRef<any>;
  @ViewChild('uploadFile', { read: UploadComponent, static: true }) uploadFile: UploadComponent;

  private imageDrawing: ImageDrawingComponent;
  @ViewChild('imageDrawing', { static: false }) set content(content: ImageDrawingComponent) {
    if (content) {
      this.imageDrawing = content;
    }
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<any>,
    private apiService: ApiService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isDone'] && changes['isDone'].previousValue != null && changes['isDone'].previousValue != changes['isDone'].currentValue) {
      this.isDone = changes['isDone'].currentValue;
      if (this.isDone) {
        this.dialogRef.close(this.hinhAnhDinhKemKetQuas);
      }
    }
  }

  close() {
    this.dialog.closeAll();
  }

  modelChangeHinhAnh(event: any) {
  }

  getSrc(tenGuid: string) {
    if (this.hinhAnhDinhKemKetQuas != null && this.hinhAnhDinhKemKetQuas.length > 0) {
      var item = CommonService.findObjectByKey(this.hinhAnhDinhKemKetQuas, "TenGuid", tenGuid);
      if (item != null) {
        return item.HinhAnh;
      }
      return "";
    }
    return "";
  }

  moTaChange(event: any) {
    if (this.hinhAnhDinhKemKetQuas != null && this.hinhAnhDinhKemKetQuas.length > 0) {
      var item = CommonService.findObjectByKey(this.hinhAnhDinhKemKetQuas, "TenGuid", event.TenGuid);
      if (item != null) {
        item.MoTa = event.MoTa;
      }
    }
  }

  uploadMultiFileDone(event: any) {
    this.hinhAnhDinhKemKetQuas = [];
    if (event != null && event.length > 0) {
      event.forEach(element => {
        if (CommonService.findObjectByKey(this.hinhAnhDinhKemKetQuas, "TenGuid", element.TenGuid) == null) {
          this.getTaiLieuUrl(element);
        }
      });
    }
  }

  xoaImages(tenGuid: string, uid: any) {
    var item = CommonService.findObjectByKey(this.hinhAnhDinhKemKetQuas, "TenGuid", tenGuid);
    if (item != null) {
      this.uploadFile.remove(uid);
      this.hinhAnhDinhKemKetQuas.splice(this.hinhAnhDinhKemKetQuas.findIndex((x: any) => x == item), 1);
      this.hinhAnhDoaDinhKemKetQuas.push(item);
    } else {
      this.uploadFile.remove(uid);
    }
  }

  getTaiLieuUrl(file: any) {
    if (file == null) {
      //this.hinhAnhDinhKemKetQua.HinhAnh = null;
      return;
    }

    let duongDan = file.DuongDan;
    if (file.IsExistingFile !== true) {
      duongDan = file.DuongDanTmp;
    }
    const params = new HttpParams({
      fromObject: {
        tenGuid: file.TenGuid,
        duongDan: duongDan,
      },
    });
    this.apiService
      .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
      .subscribe((resp) => {
        if (resp) {
          CommonService.getBase64ImageFromUrl(resp)
            .then((result: string) => {
              this.hinhAnhDinhKemKetQuas.push({
                TenGuid: file.TenGuid,
                HinhAnh: result,
                MoTa: file.MoTa,
                InKemKetQua: true
              });
            })
            .catch(err => console.error(err));

          //this.hinhAnhDinhKemKetQua.HinhAnh = resp;
        }
      });
  }

  cancel() {
    if (this.imageDrawing != undefined) {
      this.imageDrawing.removeImage();
      this.imageDrawing.clearCanvas();
    }
    this.showEdit = false;
  }

  showErrorIfNoImage(data: any) {
    if (this.imageDrawing != undefined && data.path !== undefined && data.path[0].innerHTML === 'Lưu') {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        // if (this.hinhAnhDinhKemKetQua.HinhAnh == undefined || this.hinhAnhDinhKemKetQua.HinhAnh == null || this.hinhAnhDinhKemKetQua.HinhAnh == "") {
        //   this.validationErrors.push({
        //     Message: CommonService.format(SystemMessage.ObjectRequirement, [
        //       "Hình ảnh",
        //     ]),
        //     Field: "HinhAnh",
        //   });
        //   return;
        // }
      }
      else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
  }

  save(blob: any) {
    if (this.imageDrawing != undefined) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
        var self = this;
        self.validationErrors = null;
        self.loading = true;
        self.ref.detectChanges();

        if (blob != undefined && blob != "") {
          let reader = new FileReader();
          reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

          if (self.hinhAnhDinhKemKetQuas != null && self.hinhAnhDinhKemKetQuas.length > 0) {
            var item = CommonService.findObjectByKey(self.hinhAnhDinhKemKetQuas, "TenGuid", self.hinhAnhDinhKemKetQuaEdit.TenGuid);
            if (item != null) {

              reader.onload = (e: any) => {
                item.HinhAnh = e.target.result;
                const image = new Image();
                image.src = e.target.result;
                image.onload = (rs) => {
                  const imgBase64Path = e.target.result;
                  item.HinhAnh = imgBase64Path;
                };
              }

              reader.onloadend = function (e) {
                if (item.HinhAnh != null) {
                  self.ngZone.run(() => {
                    self.loading = false;
                    self.showEdit = false;
                  });
                }
                else {
                  self.loading = false;
                }
              }
            }
          }
        }
        else {
          self.loading = false;
        }
      }
      else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
  }
  showEditImage(tenGuid: string) {
    if (this.hinhAnhDinhKemKetQuas != null && this.hinhAnhDinhKemKetQuas.length > 0) {
      var item = CommonService.findObjectByKey(this.hinhAnhDinhKemKetQuas, "TenGuid", tenGuid);
      if (item != null) {
        this.hinhAnhDinhKemKetQuaEdit = item;
        this.showEdit = true;
      }
      else {
        this.notificationService.showError("Xem ảnh bị lỗi, bạn hãy thử lại hoặc tải lại ảnh mới.");
      }
    }
    else {
      this.notificationService.showError("Xem ảnh bị lỗi, bạn hãy thử lại hoặc tải lại ảnh mới.");
    }
  }


  luu() {
    if (this.hinhAnhDoaDinhKemKetQuas != null && this.hinhAnhDoaDinhKemKetQuas.length > 0) {
      this.hinhAnhDoaDinhKemKetQuas.forEach((e) => {
        var item = CommonService.findObjectByKey(this.hinhAnhDinhKemKetQuas, "TenGuid", e.TenGuid);
        if (item != null) {
          this.hinhAnhDinhKemKetQuas.splice(item, 1);
        }
      });
    }
    this.dialogRef.close(this.hinhAnhDinhKemKetQuas);
  }

  huy() {
    this.dialogRef.close();
  }
  fullscreen() {
    if (this.showEdit) {
      CommonService.fullScreenDialog(this.isFullscreen, 650, 800, 110);
    }
    else {
      CommonService.fullScreenDialog(this.isFullscreen, 650, 800, 150);
    }


    this.isFullscreen = !this.isFullscreen;
  }
}
