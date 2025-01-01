import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationComponent } from 'src/app/shared/component/dialogs/notification/notification.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { KyDuTru } from '../ky-du-tru.model';

@Component({
    selector: 'app-ky-du-tru-shared',
    templateUrl: './ky-du-tru-shared.component.html',
    styleUrls: ['./ky-du-tru-shared.component.scss']
})
export class KyDuTruSharedComponent implements OnInit {
    kyDuTru = {} as KyDuTru;
    isCreate = true;
    isDaDuocSuDung: boolean = false;
    isDaDuocSuDungChoDuTruMuaDuocPham: boolean = false;
    isDaDuocSuDungChoDuTruMuaVatTu: boolean = false;
    cloneId: number;
    validationErrors: any;

    radioHieuLucItems = [
		{ Value: true, Text: 'Có' }, { Value: false, Text: 'Không' }
	];

    @Output() outputIsDaDuocSuDung = new EventEmitter();

    constructor(private route: ActivatedRoute, private router: Router, private dialog: MatDialog, private apiService: ApiService,
                private baseService: BaseService,  private notificationService: NotificationService, private authService: AuthService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (this.route.snapshot.queryParams.clone) {
            this.cloneId = this.route.snapshot.queryParams.clone;
        }

        if(id) {
            this.getById(id);
            this.checkIsDaDuocSuDung(id);
            this.checkIsDaDuocSuDungChoDuTruMuaDuocPham(id);
            this.checkIsDaDuocSuDungChoDuTruMuaVatTu(id);
            this.isCreate = false;
        } else {
            this.kyDuTru.HieuLuc = true;
            let currentAccessUser = this.authService.getAccessUser();
            this.kyDuTru.NhanVienTaoId = currentAccessUser.Id;

            if(this.cloneId && this.cloneId !== 0) {
                this.cloneById(this.cloneId);
            }
        }
    }

    getById(id: number) {
        this.baseService.getById<KyDuTru>(id).subscribe(res => {
            this.kyDuTru = res;
        });
    }

    cloneById(id: number) {
        this.baseService.getById<KyDuTru>(id).subscribe(res => {
            this.kyDuTru = res;
            this.kyDuTru.Id = 0;
        });
    }
    
    checkIsDaDuocSuDung(id: number) {
        this.apiService.get<any>(`KyDuTru/IsDaDuocSuDung?kyDuTruId=${id}`).subscribe((res) => {
            this.isDaDuocSuDung = res;
            this.outputIsDaDuocSuDung.emit(res);
            // if(res) {
            //     this.dialog.open(NotificationComponent, {
            //     disableClose: false,
            //     width: "500px",
            //     data: {
            //         Title: "Thông báo",
            //         Message: "Kỳ dự trù đã được sử dụng",
            //     },
            //     }).afterClosed().subscribe((res) => { })
            // }
		}, (err: ApiError) => {
            this.notificationService.showError(err.Message);
        });
    }

    checkIsDaDuocSuDungChoDuTruMuaDuocPham(id: number) {
        this.apiService.get<any>(`KyDuTru/IsDaDuocSuDungChoDuTruMuaDuocPham?kyDuTruId=${id}`).subscribe((res) => {
            this.isDaDuocSuDungChoDuTruMuaDuocPham = res;
		}, (err: ApiError) => {
            this.notificationService.showError(err.Message);
        });
    }

    checkIsDaDuocSuDungChoDuTruMuaVatTu(id: number) {
        this.apiService.get<any>(`KyDuTru/IsDaDuocSuDungChoDuTruMuaVatTu?kyDuTruId=${id}`).subscribe((res) => {
            this.isDaDuocSuDungChoDuTruMuaVatTu = res;
		}, (err: ApiError) => {
            this.notificationService.showError(err.Message);
        });
    }
    
    getSharedData() {
        return this.kyDuTru;
    }

    apDungChange(evt) {
        if(this.validationErrors && this.validationErrors.filter(p => p.Field.includes('MuaDuocPham')).length !== 0) {
            this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(p => p.Field.includes('MuaDuocPham'))), 1);
        }
    }

    them() {
        this.validationErrors = [];

        this.apiService.post<any>(`KyDuTru`, this.kyDuTru).subscribe(res => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
            this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ky-du-tru']);
        }, (err: ApiError) => {
            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        })
    }

    luu() {
        this.validationErrors = [];

        this.apiService.put<any>(`KyDuTru`, this.kyDuTru).subscribe(res => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
            this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ky-du-tru']);
        }, (err: ApiError) => {
            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        })
    }
}
