import { Component, OnInit } from '@angular/core';
import { CongTyBhtn } from '../cong-ty-bhtn.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { CongTyBhtnMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-cong-ty-bhtn-shared',
    templateUrl: './cong-ty-bhtn-shared.component.html',
    styleUrls: ['./cong-ty-bhtn-shared.component.scss']
})
export class CongTyBhtnSharedComponent implements OnInit {
    congTyBhtn = {} as CongTyBhtn;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService, private dialog: MatDialog) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id) {
            this.OpenLoading();
            this.getById(id);
        }
    }

    OpenLoading() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });
    }

    getSharedData() {
        return this.congTyBhtn;
    }

    CloseLoading() {
        this.dialog.closeAll();
    }

    getById(id: number) {
        this.baseService.getById<CongTyBhtn>(id).subscribe(resultData => {
            this.congTyBhtn = resultData;
            this.CloseLoading();
        });
    }

    OnValidate() {
        this.validationErrors = [];
        if (!this.congTyBhtn.Ma) {
            const validate = {
                Field: 'Ma',
                Message: CongTyBhtnMessage.MessageMaNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.congTyBhtn.Ten) {
            const validate = {
                Field: 'Ten',
                Message: CongTyBhtnMessage.MessageTenNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.congTyBhtn.DiaChi) {
            const validate = {
                Field: 'DiaChi',
                Message: CongTyBhtnMessage.MessageDiaChiNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.congTyBhtn.SoDienThoai) {
            const validate = {
                Field: 'SoDienThoai',
                Message: CongTyBhtnMessage.MessageSdtNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.congTyBhtn.HinhThucBaoHiem) {
            const validate = {
                Field: 'HinhThucBaoHiem',
                Message: CongTyBhtnMessage.MessageHinhThucBaoHiemNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.congTyBhtn.PhamViBaoHiem) {
            const validate = {
                Field: 'PhamViBaoHiem',
                Message: CongTyBhtnMessage.MessagePhamViBaoHiemNotNull
            };
            this.validationErrors.push(validate);
        }
    }
}
