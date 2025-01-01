import { Component, Input, OnInit } from '@angular/core';
import { CongTyUuDai } from '../cong-ty-uu-dai.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { CongTyBhtnMessage, GoiDv } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-cong-ty-uu-dai-shared',
    templateUrl: './cong-ty-uu-dai-shared.component.html',
    styleUrls: ['./cong-ty-uu-dai-shared.component.scss']
})
export class CongTyUuDaiSharedComponent implements OnInit {
    congTyUuDai = new CongTyUuDai();
    validationErrors: any;
    @Input() isCreate = false;
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
        if (this.isCreate) {
            this.congTyUuDai.Id = 0;
        }
        return this.congTyUuDai;
    }

    CloseLoading() {
        this.dialog.closeAll();
    }

    getById(id: number) {
        this.baseService.getById<CongTyUuDai>(id).subscribe(resultData => {
            this.congTyUuDai = resultData;
            this.congTyUuDai.IsDisabled = this.congTyUuDai.IsDisabled ? this.congTyUuDai.IsDisabled : false;
            this.CloseLoading();
        });
    }

    OnValidate() {
        this.validationErrors = [];
        if (!this.congTyUuDai.Ten) {
            const validate = {
                Field: 'Ten',
                Message: CongTyBhtnMessage.MessageTenNotNull
            };
            this.validationErrors.push(validate);
        }

        if (this.congTyUuDai.IsDisabled == null) {
            const validate = {
                Field: 'IsDisabled',
                Message: GoiDv.SuDungNotNull
            };
            this.validationErrors.push(validate);
        }
    }
}
