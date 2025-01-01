import { Component, OnInit } from '@angular/core';
import { DuocPhamBenhVienPhanNhom } from '../duoc-pham-benh-vien-phan-nhom.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { DuocPhamBenhVienPhanNhomMessage } from 'src/app/shared/configdata/system-message';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duoc-pham-benh-vien-phan-nhom-shared',
    templateUrl: './duoc-pham-benh-vien-phan-nhom-shared.component.html',
    styleUrls: ['./duoc-pham-benh-vien-phan-nhom-shared.component.scss']
})
export class DuocPhamBenhVienPhanNhomSharedComponent implements OnInit {
    duocPhamBenhVienPhanNhom = {} as DuocPhamBenhVienPhanNhom;
    validationErrors: any;
    isCreateChildren: string;
    id: number = this.route.snapshot.params.id;
    url: string;
    controllerName = 'DuocPhamBenhVienPhanNhom';
    constructor(private route: ActivatedRoute, private baseService: BaseService, private apiService: ApiService) { }

    ngOnInit() {
        this.url = 'DuocPhamBenhVienPhanNhom/GetListDuocPhamBenhVienPhanNhomCha';
        this.isCreateChildren = this.route.snapshot.params.isCreateChildren;
        if (this.id) {
            this.url = `DuocPhamBenhVienPhanNhom/GetListDuocPhamBenhVienPhanNhomCha?id=${this.id}`;
            this.getById(this.id);
        }
    }

    getById(id: number) {
        let createChild = false;
        if (this.isCreateChildren === 'true') {
            createChild = true;
            this.apiService.get<DuocPhamBenhVienPhanNhom>(`${this.controllerName}/Get?id=${id}&createChild=${createChild}`).subscribe((result: any) => {
                this.duocPhamBenhVienPhanNhom = result;
                this.duocPhamBenhVienPhanNhom.NhomChaId = this.duocPhamBenhVienPhanNhom.Id;
                this.duocPhamBenhVienPhanNhom.Id = 0;
                this.duocPhamBenhVienPhanNhom.Ten = null;
            });
        } else {
            this.apiService.get<DuocPhamBenhVienPhanNhom>(`${this.controllerName}/Get?id=${id}&createChild=${createChild}`).subscribe(resultData => {
                if (resultData != null) {
                    this.duocPhamBenhVienPhanNhom = resultData;
                }
            });
        }
    }

    getSharedData() {
        return this.duocPhamBenhVienPhanNhom;
    }

    CheckValidate() {
        this.validationErrors = [];
        if (this.duocPhamBenhVienPhanNhom.Ten == null || this.duocPhamBenhVienPhanNhom.Ten === '') {
            const validate = {
                Field: 'Ten',
                Message: DuocPhamBenhVienPhanNhomMessage.MessageTenNotEmpty
            };
            this.validationErrors.push(validate);
        }
        if (this.duocPhamBenhVienPhanNhom.Id === this.duocPhamBenhVienPhanNhom.NhomChaId && this.duocPhamBenhVienPhanNhom.Id != null) {
            const validate = {
                Field: 'NhomChaId',
                Message: DuocPhamBenhVienPhanNhomMessage.MessageChiDinhSelf
            };
            this.validationErrors.push(validate);
        }
    }
}
