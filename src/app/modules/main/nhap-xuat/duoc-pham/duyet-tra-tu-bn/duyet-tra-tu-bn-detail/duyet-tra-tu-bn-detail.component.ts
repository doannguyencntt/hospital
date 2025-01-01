import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { DuyetTraTuBnMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DuyetTraThuocTuBnSharedComponent } from '../duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component';
import { InPhieuHoanTraCompoment } from '../../duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duyet-tra-thuoc-tu-bn-detail',
    templateUrl: './duyet-tra-tu-bn-detail.component.html',
    styleUrls: ['./duyet-tra-tu-bn-detail.component.scss']
})
export class DuyetTraThuocTuBnDetailComponent implements OnInit {
    validationErrors: any;
    id: number;
    tinhTrangTxt = null;
    status = null;
    documentType: DocumentType;
    @ViewChild('shared', { static: false }) shared: DuyetTraThuocTuBnSharedComponent;
    constructor(
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private authService: AuthService,
        private apiService: ApiService,
        private notificationService: NotificationService,
        private router: Router
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DuyetTraThuocTuBenhNhan;
        this.id = this.route.snapshot.params.id;
    }

    Back() {
        this.router.navigate(['/nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra'], {
            queryParamsHandling: 'preserve',
        });
    }

    Approve() {
        const confirm = 'duyệt';
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'phiếu trả dược phẩm']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    const reqParam = {
                        Id: this.id,
                        GhiChu: this.shared.duyetTraThuocTuBn.GhiChu,
                        LaDichTruyen: this.shared.duyetTraThuocTuBn.LaDichTruyen,
                        HoanTraVeKhoId: this.shared.duyetTraThuocTuBn.HoanTraVeKhoId,
                    };
                    this.apiService.post('DuyetTraThuocTuBn/DuyetTraThuocTuBenhNhan', reqParam).subscribe(
                        () => {
                            this.notificationService.showSuccess(DuyetTraTuBnMessage.MessageApprove);
                            this.dialog.open(InPhieuHoanTraCompoment, {
                                disableClose: true,
                                width: "1200px",
                                data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: this.id, LaDuocPham: true, LaTuTruc: false , DuocDuyet: true },
                            }).afterClosed().subscribe((result) => {
                                this.Back();
                            });
                        },
                        (err: any) => {
                            this.notificationService.showError(err.Message);
                        });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    GetCurrentStatus(status: boolean) {
        this.status = status;
        this.tinhTrangTxt = status === true ? '<span class="green-txt">Đã duyệt</span>' :
            '<span class="orange-txt">Chờ duyệt</span>';
        setTimeout(() => {
            $('.orange-txt').css('color', 'orange');
            $('.red-txt').css('color', 'red');
            $('.green-txt').css('color', 'green');
        }, 50);
    }
}
