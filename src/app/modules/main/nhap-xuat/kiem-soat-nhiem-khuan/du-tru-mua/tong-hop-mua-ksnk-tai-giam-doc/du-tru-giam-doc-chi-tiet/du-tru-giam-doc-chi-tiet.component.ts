import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { DuTruGiamDocMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DuTruGiamDocSharedComponent } from '../du-tru-giam-doc-shared/du-tru-giam-doc-shared.component';
import { DuTruGiamDocTuChoiPopupComponent } from '../du-tru-giam-doc-tu-choi-popup/du-tru-giam-doc-tu-choi-popup.component';

declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-du-tru-giam-doc-chi-tiet',
    templateUrl: './du-tru-giam-doc-chi-tiet.component.html',
    styleUrls: ['./du-tru-giam-doc-chi-tiet.component.scss']
})
export class DuTruGiamDocChiTietComponent implements OnInit {
    validationErrors: any;
    id: number;
    tinhTrangTxt = null;
    txtReturn = null;
    title = null;
    status = null;
    documentType: DocumentType;
    @ViewChild('shared', { static: false }) shared: DuTruGiamDocSharedComponent;
    constructor(
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private authService: AuthService,
        private apiService: ApiService,
        private notificationService: NotificationService,
        private router: Router
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.THDTMuaTaiGiamDoc;
        this.id = this.route.snapshot.params.id;
    }

    Back() {
        this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc'], {
            queryParamsHandling: 'preserve',
        });
    }

    Decline() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(DuTruGiamDocTuChoiPopupComponent, {
                disableClose: false,
                width: '450px',
                height: '250px',
                data: {}
            }).afterClosed().subscribe(result => {
                if (result && result.includes('Yes')) {
                    const resSplit = result.split(' - ');
                    const reqParam = this.shared.ReturnData(resSplit[1]);
                    this.apiService.post('YeuCauMuaKSNK/Decline', reqParam).subscribe(
                        () => {
                            this.notificationService.showSuccess(DuTruGiamDocMessage.MessageDecline);
                            this.Back();
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

    Approve() {
        const confirm = 'duyệt';
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'phiếu dự trù']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    const reqParam = this.shared.ReturnData();
                    if (reqParam === 0) {
                        return;
                    }
                    this.apiService.post('YeuCauMuaKSNK/ApproveForm', reqParam).subscribe(
                        () => {
                            this.notificationService.showSuccess(DuTruGiamDocMessage.MessageApprove);
                            this.Back();
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
        this.tinhTrangTxt = status === true ? '<span class="green-txt">Đã duyệt</span>' : (status === false ?
            '<span class="red - txt">Từ chối</span>' :
            '<span class="orange-txt">Chờ duyệt</span>');
        this.txtReturn = status == null ? 'Hủy' : 'Quay lại';
        this.title = status == null ? 'Duyệt Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn' : 'Chi Tiết Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn';
        setTimeout(() => {
            $('.orange-txt').css('color', 'orange');
            $('.red-txt').css('color', 'red');
            $('.green-txt').css('color', 'green');
        }, 50);
    }
}
