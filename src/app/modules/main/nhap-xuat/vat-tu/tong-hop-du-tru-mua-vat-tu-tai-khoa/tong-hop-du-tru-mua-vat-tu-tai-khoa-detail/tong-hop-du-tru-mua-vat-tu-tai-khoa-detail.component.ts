import { Component, OnInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { TongHopDuTruMuaVatTuTaiKhoa } from '../tong-hop-du-tru-mua-vat-tu-tai-khoa.model';
import {
    TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent
} from '../tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component';
import { PhieuMuaVatTuComponent } from '../../yeu-cau-mua-vat-tu/phieu-mua-vat-tu/phieu-mua-vat-tu.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-tong-hop-du-tru-mua-vat-tu-tai-khoa-detail',
    templateUrl: './tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.html',
    styleUrls: ['./tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class TongHopDuTruMuaVatTuTaiKhoaDetailComponent implements OnInit {
    documentType: DocumentType;
    danhSachTongHopDuTruMuaVatTuTaiKhoa: TongHopDuTruMuaVatTuTaiKhoa;
    popupLoadingData: any = null;
    validationErrors: any = null;
    trangThaiVo: any = null;
    phieuMuaVatTuTaiKhoaId: number = null;
    phieuMuaVatTuId: number = null;
    @ViewChild(TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent, { static: true }) shared: any;

    constructor(
        private dialog: MatDialog,
        private authService: AuthService,
        private notificationService: NotificationService,
        private location: Location,
        private ref: ChangeDetectorRef,
        private route: ActivatedRoute,
        private apiService: ApiService,

    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoa;
        this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new TongHopDuTruMuaVatTuTaiKhoa();
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.GetTrangThaiPhieuMuaDuTru(id);
            this.phieuMuaVatTuTaiKhoaId = id;
            this.phieuMuaVatTuId = id;

        }
    }

    GetTrangThaiPhieuMuaDuTru(id: number) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.get<any>("YeuCauMuaVatTu/GetTrangThaiPhieuMuaVatTu?phieuMuaVatTuId=" + id).subscribe(
                (result) => {
                    if (result !== undefined && result !== null) {
                        this.trangThaiVo = result;
                    }
                })
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    loadingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang lưu dữ liệu...' },
        });
    }

    closepopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }

    duyet() {
        const self = this;
        self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '500px',
            data: {
                Title: 'Xác nhận',
                Message: 'Bạn có muốn duyệt phiếu dự trù này không ?',
            },
        }).afterClosed().subscribe((res) => {
            if (res === 'Yes') {
                self.danhSachTongHopDuTruMuaVatTuTaiKhoa = self.shared.getSharedData();
                self.validationErrors = [];
                self.ref.detectChanges();
                if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) { } else {
                    self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                }
            }
        });
    }

    inPhieu() {
        var self = this;
        self.danhSachTongHopDuTruMuaVatTuTaiKhoa = self.shared.getSharedData();
        self.loadingPage();
        self.dialog.open(PhieuMuaVatTuComponent, {
            disableClose: false,
            width: '1200px',
            data: { Id: self.phieuMuaVatTuTaiKhoaId },
        }).afterClosed().subscribe(() => {
            self.closepopupLoadingData();
        });
    }

    cancel() {
        this.location.back();
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 27 && !event.ctrlKey) {
            // esc
            this.cancel();
            event.preventDefault();
        }
    }
}
