import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { NhapKhoShareComponent } from '../nhap-kho-share/nhap-kho-share.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { TiepNhanBenhNhanMessage, NhapKhoMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NhapKhoDuocPham } from 'src/app/modules/main/ke-toan/duyet-nhap-kho/duyet-nhap-kho.model';

@Component({
    selector: 'app-nhap-kho-tu-choi-duyet',
    templateUrl: './nhap-kho-tu-choi-duyet.component.html',
    styleUrls: ['./nhap-kho-tu-choi-duyet.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class NhapKhoTuChoiDuyetComponent implements OnInit {
    nhapKho: NhapKhoDuocPham = new NhapKhoDuocPham();
    documentType: DocumentType;
    showToastNotifyError: boolean = false;
    loading: boolean = false;
    id: number;
    @ViewChild(NhapKhoShareComponent, { static: true }) shared: any;

    constructor(private router: Router, private route: ActivatedRoute, private baseService: BaseService
        , private apiService: ApiService, private authService: AuthService
        , private dialog: MatDialog, private notificationService: NotificationService
        , private errorService: ErrorService) { }

    ngOnInit() {
        this.documentType = DocumentType.NhapKhoDuocPham;

        this.id = this.route.snapshot.params.id;
        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
        }
    }

    getById(id: number) {

    }

    huy() {
        this.router.navigateByUrl('nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
    }

    luu() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            var self = this;
            self.shared.validationErrors = null;
            self.loading = true;
            self.nhapKho = self.shared.getSharedData();
            self.apiService.post<any>("NhapKhoDuocPham/CapNhatYeuCauNhapKhoDuocPham", self.nhapKho).subscribe(
                () => {
                    //self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
                    self.router.navigateByUrl('nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                    self.loading = false;
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
    luuVaDuyetLai() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            var self = this;
            self.shared.validationErrors = null;
            self.loading = true;
            self.nhapKho = self.shared.getSharedData();
            self.apiService.post<any>("NhapKhoDuocPham/CapNhatYeuCauNhapKhoDuocPham", self.nhapKho).subscribe(
                resultData => {
                    // self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
                    // self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                    // self.loading = false;
                    self.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: NhapKhoMessage.MessageLuuVaGoiDuyet }
                    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                        if (result == "Yes") {

                            self.apiService.post<any>("NhapKhoDuocPham/GoiDuyetLai?id=" + self.id).subscribe(result => {
                                //self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
                                self.router.navigateByUrl('nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu và gửi duyệt lại"]));
                            }, (err: ApiError) => {
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
                            //self.router.navigate(['tiep-nhan-trong-ngay/']);
                            //self.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
                        }
                        else {
                            //self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
                            //self.ngOnInit();
                        }
                    });
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
