import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { Location } from '@angular/common';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoaiDuocPhamVatTu, TrangThaiTaoPhieuLinh, YeuCauHoanTraVT } from '../yeu-cau-tra-ksnk.model';
import { YeuCauTraKSNKSharedComponent } from '../yeu-cau-tra-ksnk-shared/yeu-cau-tra-ksnk-shared.component';
import { InPhieuHoanTraKSNKComponent } from '../in-phieu-hoan-tra/in-phieu-hoan-tra.component';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';

@Component({
    selector: 'app-yeu-cau-tra-ksnk-update',
    templateUrl: './yeu-cau-tra-ksnk-update.component.html',
    styleUrls: ['./yeu-cau-tra-ksnk-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})

export class YeuCauTraKSNKUpdateComponent implements OnInit {
    documentType: DocumentType = DocumentType.YeuCauHoanTraKSNK;
    loaiDuocPhamVatTu: any;
    yeuCauHoanTraVT: YeuCauHoanTraVT = new YeuCauHoanTraVT();
    popupAddingData: any;
    isHideDuyet: boolean = false;
    validationErrors: any;
    popupSavingData: any = null;
    popupLoadingData: any = null;
    isCreate: boolean = false;
    trangThaiVo: TrangThaiTaoPhieuLinh = new TrangThaiTaoPhieuLinh();
    @ViewChild('temp', { read: YeuCauTraKSNKSharedComponent, static: false }) shared: YeuCauTraKSNKSharedComponent;

    constructor(
        private apiService: ApiService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private ref: ChangeDetectorRef,
        private location: Location
    ) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        this.loaiDuocPhamVatTu = Number(this.route.snapshot.params.loaiduocphamvattu);

        if (id !== undefined && id !== null) {
            this.getTrangThaiYeuCauHoanTraDuocPham(id);
        }
    }

    getTrangThaiYeuCauHoanTraDuocPham(id: number) {
        var self = this;
        if (self.loaiDuocPhamVatTu === LoaiDuocPhamVatTu.LoaiVatTu) {
            if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
                self.apiService.get<any>("YeuCauTraKSNK/GetTrangThaiYeuCauHoanTraKSNK?yeuCauTraVTId=" + id).subscribe(
                    (result) => {
                        self.trangThaiVo = result;
                    })
            } else {
                self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
        else if (self.loaiDuocPhamVatTu === LoaiDuocPhamVatTu.LoaiDuocPham) {
            if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
                self.apiService.get<any>("YeuCauTraThuoc/GetTrangThaiYeuCauHoanTraDuocPham?yeuCauTraDuocPhamId=" + id).subscribe(
                    (result) => {
                        this.trangThaiVo = result;
                    })
            } else {
                self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
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
        self.yeuCauHoanTraVT = self.shared.getSharedData();
        self.yeuCauHoanTraVT.LoaiDuocPhamVatTu = this.loaiDuocPhamVatTu;

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
                    self.apiService.post<any>("YeuCauTraKSNK/CapNhatYeuCauHoanTraKSNKTuTruc", self.yeuCauHoanTraVT).subscribe(
                        (resultData) => {
                            if (resultData != undefined && resultData != null) {
                                self.yeuCauHoanTraVT.LastModified = resultData.LastModified;
                                self.closepopupSavingData();
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                                let yeuCauHoanTraDuocPhamVatTuId = resultData.Id;
                                let hoanTraDuocPhamId = this.loaiDuocPhamVatTu === LoaiDuocPhamVatTu.LoaiDuocPham ? yeuCauHoanTraDuocPhamVatTuId : null;
                                let hoanTraVatTuId = this.loaiDuocPhamVatTu === LoaiDuocPhamVatTu.LoaiVatTu ? yeuCauHoanTraDuocPhamVatTuId : null;
                                this.dialog.open(InPhieuHoanTraKSNKComponent, {
                                    disableClose: true,
                                    width: "1200px",
                                    data: { HoanTraDuocPhamId: hoanTraDuocPhamId, HoanTraVatTuId: hoanTraVatTuId, LaTuTruc: true, DuocDuyet: false },
                                }).afterClosed().subscribe(() => {
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
        this.router.navigateByUrl('/nhap-xuat/ksnk/yeu-cau-tra-ksnk?holdQuery=true');
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
