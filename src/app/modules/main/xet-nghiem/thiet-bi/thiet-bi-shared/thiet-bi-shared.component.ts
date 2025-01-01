import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ThietBiXetNghiemMessage } from 'src/app/shared/configdata/system-message';
import { ThietBiXetNghiem } from '../thiet-bi.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-thiet-bi-shared',
    templateUrl: './thiet-bi-shared.component.html',
    styleUrls: ['./thiet-bi-shared.component.scss']
})
export class ThietBiXetNghiemSharedComponent implements OnInit {
    thietBiXn = new ThietBiXetNghiem();
    validationErrors: any;
    isUpdate = false;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id) {
            this.isUpdate = true;
            this.getById(id);
        }
    }

    getById(id: number) {
        this.baseService.getById<ThietBiXetNghiem>(id).subscribe(resultData => {
            this.thietBiXn = { ...resultData };
            if (this.route.snapshot.routeConfig.path.includes('them')) {
                this.thietBiXn.IsCopy = true;
            }
        });
    }

    getSharedData() {
        this.thietBiXn.Id = this.isUpdate ? this.thietBiXn.Id : 0;
        return this.thietBiXn;
    }

    OnValidate() {
        this.validationErrors = [];
        if (!this.thietBiXn.Ma) {
            const validate = {
                Field: 'Ma',
                Message: ThietBiXetNghiemMessage.MessageMaNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.thietBiXn.Ten) {
            const validate = {
                Field: 'Ten',
                Message: ThietBiXetNghiemMessage.MessageTenNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.thietBiXn.NhomXetNghiemId) {
            const validate = {
                Field: 'NhomXetNghiemId',
                Message: ThietBiXetNghiemMessage.MessageNhomXetNghiemNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.thietBiXn.NhomThietBiId) {
            const validate = {
                Field: 'NhomThietBiId',
                Message: ThietBiXetNghiemMessage.MessageNhomThietBiNotNull
            };
            this.validationErrors.push(validate);
        }
    }
}
