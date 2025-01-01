import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { YeuCauTraThuocSharedComponent } from '../yeu-cau-tra-thuoc-shared/yeu-cau-tra-thuoc-shared.component';
import { YeuCauHoanTraDuocPham } from '../yeu-cau-tra-thuoc.model';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { InPhieuHoanTraCompoment } from '../../duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';

@Component({
    selector: 'app-yeu-cau-tra-thuoc-create',
    templateUrl: './yeu-cau-tra-thuoc-create.component.html',
    styleUrls: ['./yeu-cau-tra-thuoc-create.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class YeuCauTraThuocCreateComponent implements OnInit {
    documentType: DocumentType = DocumentType.YeuCauHoanTraDuocPham;
    yeuCauHoanTraDuocPham: YeuCauHoanTraDuocPham = new YeuCauHoanTraDuocPham();
    popupAddingData: any;
    popupLoadingData: any;
    validationErrors: any;
    isCreate: boolean = false;
    trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();

    @ViewChild(YeuCauTraThuocSharedComponent, { static: true }) shared: any;

    constructor(
        private router: Router,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private authService: AuthService,
        private apiService: ApiService,
        private ref: ChangeDetectorRef) { }

    ngOnInit() {
        this.trangThaiVo.TrangThai = null;
    }

    loadingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

    addingPage() {
        this.popupAddingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }


    closePopupAddingData() {
        if (this.popupAddingData != undefined && this.popupAddingData != null) {
            this.popupAddingData.close();
        }
    }

    gui() {
        var self = this;
        self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn thêm dữ liệu này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                self.yeuCauHoanTraDuocPham = self.shared.getSharedData();
                self.validationErrors = [];
                self.ref.detectChanges();
                if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
                    self.addingPage();
                    self.apiService.post<any>("YeuCauTraThuoc/ThemYeuCauHoanTraDuocPhamTuTruc", self.yeuCauHoanTraDuocPham).subscribe(
                        (resultData) => {
                            self.closePopupAddingData();
                            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
                            if (resultData != undefined && resultData != null) {
                                let yeuCauHoanTraDuocPhamId = resultData;
                                self.dialog.open(InPhieuHoanTraCompoment, {
                                    disableClose: true,
                                    width: "1200px",
                                    // data: { yeuCauHoanTraDuocPhamId },
                                    data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: yeuCauHoanTraDuocPhamId, LaDuocPham: true, LaTuTruc: true, DuocDuyet: false  },
                                }).afterClosed().subscribe(() => {
                                    self.cancel();
                                });
                            }
                        },
                        (err: ApiError) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupAddingData();
                        });
                } else {
                    self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                }
            }
        })
    }

    cancel() {
        // this.location.back();
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham?holdQuery=true');
    }

    @HostListener("document:keydown", ["$event"])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
}
