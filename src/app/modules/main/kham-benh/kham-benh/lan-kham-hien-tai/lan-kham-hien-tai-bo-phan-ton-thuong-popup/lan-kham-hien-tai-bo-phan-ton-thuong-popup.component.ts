import { Component, OnInit, Inject, ViewChild, ViewEncapsulation, ChangeDetectorRef, TemplateRef, SimpleChanges, NgZone } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";
import { YeuCauKhamBenhBoPhanTonThuong } from '../../../kham-benh.model';
import { ImageDrawingComponent } from 'ngx-image-drawing';
import { HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-lan-kham-hien-tai-bo-phan-ton-thuong-popup',
  templateUrl: './lan-kham-hien-tai-bo-phan-ton-thuong-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-bo-phan-ton-thuong-popup.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],
  encapsulation: ViewEncapsulation.None
})
export class LanKhamHienTaiBoPhanTonThuongPopupComponent implements OnInit {

  icClose = icClose;
  documentType: DocumentType = DocumentType.KhamBenh;
  validationErrors: any;
  loading:boolean=false;
  boPhanTonThuong : YeuCauKhamBenhBoPhanTonThuong = new YeuCauKhamBenhBoPhanTonThuong();
  isDone: boolean = false;

  @ViewChild('loadingTemplate', { static: true }) loadingTemplate: TemplateRef<any>;
  // @ViewChild("imageDrawing", { static: true }) imageDrawing: ImageDrawingComponent;

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
    console.log('ngOnChanges - 1', this.boPhanTonThuong);
    if (changes['isDone'] && changes['isDone'].previousValue != null && changes['isDone'].previousValue != changes['isDone'].currentValue) {
      this.isDone = changes['isDone'].currentValue;
      if(this.isDone)
      {
        console.log('ngOnChanges', this.boPhanTonThuong);
        this.dialogRef.close(this.boPhanTonThuong);
      }
    }
  }

  close() {
    this.dialog.closeAll();
  }

  uploadFileDone(file: any) {
    console.log(file);
    if (file == null) {
      this.boPhanTonThuong.HinhAnh = null;
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
          this.boPhanTonThuong.HinhAnh = resp;
        }
      });
  }

  cancel() {
    this.boPhanTonThuong.HinhAnh = null;
    if(this.imageDrawing!=undefined)
        {
            this.imageDrawing.removeImage();
            this.imageDrawing.clearCanvas();
        }
    this.close();
  }

  showErrorIfNoImage(data: any) {
    // if (this.imageDrawing.hasImage === false && data.path !== undefined && data.path[0].innerHTML === 'Lưu') {
    //   this.notificationService.showError('Hình ảnh yêu cầu chọn');
    // }

    if (this.imageDrawing!=undefined && data.path !== undefined && data.path[0].innerHTML === 'Lưu') {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
        var self = this;
        self.validationErrors = null;
        self.ref.detectChanges();

        self.apiService.post("KhamBenh/KiemTraValidationBoPhanTonThuong", self.boPhanTonThuong)
          .subscribe(resultData => {
          },
            (err: ApiError) => {

              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
      }
      else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
  }

  save(blob: any) {
    if (this.imageDrawing != undefined && this.boPhanTonThuong.MoTa != null && this.boPhanTonThuong.MoTa != "") {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
        var self = this;
        self.validationErrors = null;
        self.loading=true;
        self.ref.detectChanges();

        // self.apiService.post("KhamBenh/KiemTraValidationBoPhanTonThuong", self.boPhanTonThuong)
        //   .subscribe(resultData => {
        //     if (blob != "" && blob != undefined) {
        //       console.log('blob has value', self.boPhanTonThuong);
        //       //self.boPhanTonThuong.HinhAnh = blob;
        //       let reader = new FileReader();
        //       reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

        //       //self.boPhanTonThuong.HinhAnh = reader.onloadend;
        //       reader.onload = (e: any) => {
        //         self.boPhanTonThuong.HinhAnh = e.target.result;
        //         const image = new Image();
        //         image.src = e.target.result;
        //         image.onload = (rs) => {
        //           const imgBase64Path = e.target.result;
        //           self.boPhanTonThuong.HinhAnh = imgBase64Path;
        //         };
        //       }

        //       reader.onloadend = function(e){
        //         if (self.boPhanTonThuong.HinhAnh != null) {
        //           self.loading = false;
        //           self.isDone = true;
        //           console.log('save', self.boPhanTonThuong);
        //           self.dialogRef.close(self.boPhanTonThuong);
        //         }
        //       }
              
        //     }
        //     else
        //     {
        //       self.loading=false;
        //     }
        //   },
        //     (err: ApiError) => {

        //       self.loading=false;
        //       self.validationErrors = err.ValidationErrors;
        //       if (err.Message != "Validation Failed") {
        //         self.notificationService.showError(err.Message);
        //       }
        //     });


        if (blob != undefined && blob != "") {
          //self.boPhanTonThuong.HinhAnh = blob;
          let reader = new FileReader();
          reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

          //self.boPhanTonThuong.HinhAnh = reader.onloadend;
          reader.onload = (e: any) => {
            self.boPhanTonThuong.HinhAnh = e.target.result;
            const image = new Image();
            image.src = e.target.result;
            image.onload = (rs) => {
              const imgBase64Path = e.target.result;
              self.boPhanTonThuong.HinhAnh = imgBase64Path;
            };
          }

          reader.onloadend = function(e){
            if (self.boPhanTonThuong.HinhAnh != null) {
              //self.isDone = true;
              self.ngZone.run(() => {
                self.loading = false;
                self.dialogRef.close(self.boPhanTonThuong);
              });
            }
            else
            {
              self.loading = false;
            }
          }
          
        }
        else
        {
          self.loading=false;
        }
      }
      else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
  }
}
