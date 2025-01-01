import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YeuCauTraThuocSharedComponent } from '../yeu-cau-tra-thuoc-shared/yeu-cau-tra-thuoc-shared.component';
import { Location } from '@angular/common';
import { YeuCauHoanTraDuocPham, YeuCauHoanTraDuocPhamViewModel } from '../yeu-cau-tra-thuoc.model';
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
import { TrangThaiTaoPhieuLinh } from '../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-yeu-cau-tra-thuoc-update',
    templateUrl: './yeu-cau-tra-thuoc-update.component.html',
    styleUrls: ['./yeu-cau-tra-thuoc-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class YeuCauTraThuocUpdateComponent implements OnInit {
    documentType: DocumentType = DocumentType.YeuCauHoanTraDuocPham;
    yeuCauHoanTraDuocPham: YeuCauHoanTraDuocPham = new YeuCauHoanTraDuocPham();
    popupAddingData: any;
    isHideDuyet: boolean = false;
    validationErrors: any;
    popupSavingData: any = null;
    popupLoadingData: any = null;
    isCreate: boolean = false;
    trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
    // yeuCauDieuChuyenDuocPhamPhieuIn: YeuCauDieuChuyenDuocPhamPhieuIn = new YeuCauDieuChuyenDuocPhamPhieuIn();
    @ViewChild('temp', { read: YeuCauTraThuocSharedComponent, static: false }) shared: YeuCauTraThuocSharedComponent;

    constructor(
        private apiService: ApiService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private ref: ChangeDetectorRef, private location: Location
    ) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getTrangThaiYeuCauHoanTraDuocPham(id);
            // this.yeuCauDieuChuyenDuocPhamPhieuIn.YeuCauDieuChuyenDuocPhamId = id;
        }
    }

    getTrangThaiYeuCauHoanTraDuocPham(id: number) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.get<any>("YeuCauTraThuoc/GetTrangThaiYeuCauHoanTraDuocPham?yeuCauTraDuocPhamId=" + id).subscribe(
                (result) => {
                    this.trangThaiVo = result;
                })
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    loadingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

    savingPage() {
        this.popupSavingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }

    closepopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }
    guiLai() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.yeuCauHoanTraDuocPham = self.shared.getSharedData();
        self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn lưu dữ liệu này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
                    self.savingPage();
                    self.apiService.post<any>("YeuCauTraThuoc/CapNhatYeuCauHoanTraDuocPhamTuTruc", self.yeuCauHoanTraDuocPham).subscribe(
                        (resultData) => {
                            if (resultData != undefined && resultData != null) {
                                self.yeuCauHoanTraDuocPham.LastModified = resultData.LastModified;
                                self.closepopupSavingData();
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                                let yeuCauHoanTraDuocPhamId = resultData.Id;
                                self.dialog.open(InPhieuHoanTraCompoment, {
                                    disableClose: true,
                                    width: "1200px",
                                    // data: { yeuCauHoanTraDuocPhamId },
                                    data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: yeuCauHoanTraDuocPhamId, LaDuocPham: true, LaTuTruc: true, DuocDuyet: false },
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
                            self.closepopupSavingData();
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

    // OnValidate(isValidate: boolean) {
    //     if (isValidate) {
    //         this.shared.OnValidateClient();
    //     }
    // }
}
