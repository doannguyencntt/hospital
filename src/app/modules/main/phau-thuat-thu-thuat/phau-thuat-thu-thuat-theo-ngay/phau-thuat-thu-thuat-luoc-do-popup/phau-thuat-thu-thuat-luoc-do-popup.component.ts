import {
    Component,
    OnInit,
    ViewChild,
    Inject,
    ChangeDetectorRef,
    ViewEncapsulation,
} from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import {
    ThongTinBoPhanCoThe,
    DanhSachThongTinAnh,
} from '../../phau-thuat-thu-thuat.model';
import { HttpParams } from '@angular/common/http';
import { ImageDrawingComponent } from 'ngx-image-drawing';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
declare var $: any;
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phau-thuat-thu-thuat-luoc-do-popup',
    templateUrl: './phau-thuat-thu-thuat-luoc-do-popup.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-luoc-do-popup.component.scss'],
    animations: [stagger60ms, fadeInUp400ms],
    encapsulation: ViewEncapsulation.None
})
export class PhauThuatThuThuatLuocDoPopupComponent implements OnInit {
    icClose = icClose;
    public url = '';
    public thongTinBoPhanCoThe = {} as ThongTinBoPhanCoThe;
    public thongTinAnh = {} as DanhSachThongTinAnh;
    previewUrl: any = null;

    ChonThongTin = 1;
    boPhanCoTheCurrent: any = null;
    loading = false;
    documentType: DocumentType;

    @ViewChild('imageDrawing', { static: true }) imageDrawing: ImageDrawingComponent;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialog: MatDialog,
        private dialogRef: MatDialogRef<any>,
        private ref: ChangeDetectorRef,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.thongTinBoPhanCoThe = new ThongTinBoPhanCoThe();
        this.documentType = DocumentType.PhauThuatThuThuatTheoNgay;
    }

    close() {
        this.dialog.closeAll();
    }

    uploadFileDone(file: any) {
        if (!file) {
            this.thongTinAnh.Url = '';
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

        this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).subscribe((res) => {
            if (res) {
                this.thongTinAnh.Url = res;
            }
        });
    }

    onSelectionChange(data: any) {
        if (!data) {
            this.thongTinAnh.Url = '';

            if (this.imageDrawing != null) {
                this.imageDrawing.removeImage();
            }
            return;
        }

        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.apiService.get<any>('KhamBenh/GetHinhPhauThuatDuaTrenBoPhan?boPhan=' + data.DisplayName).subscribe(resultData => {
                if (resultData !== undefined && resultData != null) {
                    this.thongTinAnh.Url = resultData;
                }
            });
        }
    }

    save(blob: any) {
        setTimeout(() => {
            $('.sidenav-content').trigger('click');
        }, 1000);
        if (blob !== '' && blob != null) {
            const self = this;
            self.loading = true;
            self.ref.detectChanges();
            this.thongTinAnh.Url = blob;
            const reader = new FileReader();
            reader.readAsDataURL(blob); // converts the blob to base64 and calls onload
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = () => {
                    const imgBase64Path = e.target.result;
                    this.thongTinAnh.Url = imgBase64Path;
                };
            };
            if (this.thongTinAnh.Url != null) {
                this.dialogRef.close(this.thongTinAnh);
                self.loading = false;
            }
        }
    }

    cancel() {
        this.thongTinAnh.Url = '';

        if (this.imageDrawing) {
            this.imageDrawing.removeImage();
            this.imageDrawing.clearCanvas();
        }

        this.boPhanCoTheCurrent = null;
    }

    showErrorIfNoImage(data: any) {
        if (this.imageDrawing != null && this.imageDrawing.hasImage === false
            && data.path != null && data.path[0].innerHTML === 'Lưu') {
            this.notificationService.showError('Không có ảnh để lưu');
        }
    }

    chonThongTinChange(evt) {
        this.ref.detectChanges();
    }
}
