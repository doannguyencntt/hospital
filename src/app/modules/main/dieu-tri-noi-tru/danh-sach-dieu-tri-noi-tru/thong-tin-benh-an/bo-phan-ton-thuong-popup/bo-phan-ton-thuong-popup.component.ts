import { Component, OnInit, Inject, ViewChild, ViewEncapsulation, ChangeDetectorRef, TemplateRef, SimpleChanges, NgZone } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";
import { ImageDrawingComponent } from 'ngx-image-drawing';
import { HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/core/services/api.service';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { BoPhanTonThuong } from '../thong-tin-benh-an.model';

@Component({
  selector: 'app-bo-phan-ton-thuong-popup',
  templateUrl: './bo-phan-ton-thuong-popup.component.html',
  styleUrls: ['./bo-phan-ton-thuong-popup.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],
  encapsulation: ViewEncapsulation.None
})
export class BoPhanTonThuongPopupComponent implements OnInit {
  icClose = icClose;
  validationErrors: any;
  loading: boolean = false;
  boPhanTonThuong: BoPhanTonThuong = new BoPhanTonThuong();
  isDone: boolean = false;
  @ViewChild('loadingTemplate', { static: true }) loadingTemplate: TemplateRef<any>;
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
    private ref: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isDone'] && changes['isDone'].previousValue != null && changes['isDone'].previousValue != changes['isDone'].currentValue) {
      this.isDone = changes['isDone'].currentValue;
      if (this.isDone) {
        this.dialogRef.close(this.boPhanTonThuong);
      }
    }
  }

  close() {
    this.dialog.closeAll();
  }

  uploadFileDone(file: any) {
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
    if (this.imageDrawing != undefined) {
      this.imageDrawing.removeImage();
      this.imageDrawing.clearCanvas();
    }
    this.close();
  }

  showErrorIfNoImage(data: any) {
    if (this.imageDrawing != undefined && data.path !== undefined && data.path[0].innerHTML === 'Lưu') {
      var self = this;
      self.validationErrors = null;
      self.ref.detectChanges();

      // self.apiService.post("KhamBenh/KiemTraValidationBoPhanTonThuong", self.boPhanTonThuong)
      //   .subscribe(resultData => {
      //   },
      //     (err: ApiError) => {

      //       self.validationErrors = err.ValidationErrors;
      //       if (err.Message != "Validation Failed") {
      //         this.notificationService.showError(err.Message);
      //       }
      //     });
    }
  }

  save(blob: any) {
    if (this.imageDrawing != undefined && this.boPhanTonThuong.MoTa != null && this.boPhanTonThuong.MoTa != "") {
      var self = this;
      self.validationErrors = null;
      self.loading = true;
      self.ref.detectChanges();
      if (blob != undefined && blob != "") {
        let reader = new FileReader();
        reader.readAsDataURL(blob); // converts the blob to base64 and calls onload         
        reader.onload = (e: any) => {
          self.boPhanTonThuong.HinhAnh = e.target.result;
          const image = new Image();
          image.src = e.target.result;
          image.onload = () => {
            const imgBase64Path = e.target.result;
            self.boPhanTonThuong.HinhAnh = imgBase64Path;
          };
        }

        reader.onloadend = function () {
          if (self.boPhanTonThuong.HinhAnh != null) {
            //self.isDone = true;
            self.ngZone.run(() => {
              self.loading = false;
              self.dialogRef.close(self.boPhanTonThuong);
            });
          }
          else {
            self.loading = false;
          }
        }

      }
      else {
        self.loading = false;
      }
    }
  }
}
