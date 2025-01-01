import {
    Component,
    OnInit,
    ViewChild,
    Inject,
    ViewEncapsulation,
    TemplateRef,
    ChangeDetectorRef,
    NgZone,
} from "@angular/core";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import icClose from "@iconify/icons-ic/twotone-close";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { ApiService } from "src/app/core/services/api.service";
import {
    ThongTinBoPhanCoThe,
    DanhSachThongTinAnh,
} from '../../../kham-benh.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpParams } from '@angular/common/http';
import { ImageDrawingComponent } from 'ngx-image-drawing';

declare var jQuery: any;
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phau-thuat-thu-thuat-popup-chon-anh',
    templateUrl: './phau-thuat-thu-thuat-popup-chon-anh.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-popup-chon-anh.component.scss'],
    animations: [stagger60ms, fadeInUp400ms],
    encapsulation: ViewEncapsulation.None
})
export class PhauThuatThuThuatPopUpChonAnhComponent implements OnInit {
    icClose = icClose;
    public url = '';
    public thongTinBoPhanCoThe = {} as ThongTinBoPhanCoThe;
    public sanhSachThongTinAnhs = {} as DanhSachThongTinAnh;
    documentType: DocumentType = DocumentType.KhamBenh;
    previewUrl: any = null;
    ChonThongTin = 1;
    boPhanCoTheCurrent: any = null;
    loading:boolean=false;
    @ViewChild('loadingTemplate', { static: true }) loadingTemplate: TemplateRef<any>;
    //@ViewChild('imageDrawing', { static: true }) imageDrawing: ImageDrawingComponent;

    private imageDrawing: ImageDrawingComponent;
    @ViewChild('imageDrawing', { static: false }) set content(content: ImageDrawingComponent) {
      if (content) {
        this.imageDrawing = content;
      }
    }
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialog: MatDialog,
        private apiService: ApiService,
        private authService: AuthService,
        private notificationService: NotificationService,
        private dialogRef: MatDialogRef<PhauThuatThuThuatPopUpChonAnhComponent>,
        private ref: ChangeDetectorRef,
        private ngZone: NgZone
    ) { }

    ngOnInit() {
        this.thongTinBoPhanCoThe = new ThongTinBoPhanCoThe();
    }

    close() {
        this.dialog.closeAll();
    }

    uploadFileDone(file: any) {
        if (file == null) {
            this.sanhSachThongTinAnhs.Url = '';
            return;
        }

        let duongDan = file.DuongDan;
        if (file.IsExistingFile !== true) {
            duongDan = file.DuongDanTmp;
        }
        const params = new HttpParams({
            fromObject: {
                tenGuid: file.TenGuid,
                duongDan,
            },
        });
        this.apiService
            .get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params)
            .subscribe((resp) => {
                if (resp) {
                    this.sanhSachThongTinAnhs.Url = resp;
                }
            });
    }

    onSelectionChange(data: any) {
        if (data === undefined) {
            this.sanhSachThongTinAnhs.Url = '';
            if (this.imageDrawing !== undefined) {
                this.imageDrawing.removeImage();
            }
            return;
        }

        if (
            this.authService.hasPermission(this.documentType, SecurityOperation.View)
        ) {
            this.apiService
                .get<any>(
                    'KhamBenh/GetHinhPhauThuatDuaTrenBoPhan?boPhan=' + data.DisplayName
                )
                .subscribe(resultData => {
                    if (resultData !== undefined && resultData != null) {
                        this.sanhSachThongTinAnhs.Url = resultData;
                    }
                });
        }
    }

    save(blob: Blob) {
        if (this.imageDrawing != undefined) {
            var self = this;
            self.loading = true;
            self.ref.detectChanges();
            
            if (blob != undefined) {

                //this.sanhSachThongTinAnhs.Url = blob;
                let reader = new FileReader();
                reader.readAsDataURL(blob); // converts the blob to base64 and calls onload
                reader.onload = (e: any) => {
                    self.sanhSachThongTinAnhs.Url = e.target.result;
                    const image = new Image();
                    image.src = e.target.result;
                    image.onload = (rs) => {
                        const imgBase64Path = e.target.result;
                        self.sanhSachThongTinAnhs.Url = imgBase64Path;
                    };
                };
                reader.onloadend = function (e) {
                    if (self.sanhSachThongTinAnhs.Url != null) {
                        
                        self.loading = false;
                        // self.dialogRef.close(self.sanhSachThongTinAnhs);
                        self.ngZone.run(() => {
                            self.dialogRef.close(self.sanhSachThongTinAnhs);
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

    cancel() {
        this.sanhSachThongTinAnhs.Url = '';
        if (this.imageDrawing !== undefined) {
            this.imageDrawing.removeImage();
            this.imageDrawing.clearCanvas();
        }
        this.boPhanCoTheCurrent = null;
        this.close();
    }

    showErrorIfNoImage(data: any) {
        if (this.imageDrawing !== undefined && this.imageDrawing.hasImage === false
            && data.path !== undefined && data.path[0].innerHTML === 'Lưu') {
            this.notificationService.showError('Không có ảnh để lưu');
        }
    }
}
