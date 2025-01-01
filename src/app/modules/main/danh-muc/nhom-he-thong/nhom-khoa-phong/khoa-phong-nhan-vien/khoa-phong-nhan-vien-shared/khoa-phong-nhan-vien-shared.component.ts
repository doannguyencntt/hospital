import { Component, OnInit } from '@angular/core';
import { KhoaPhongNhanVien } from '../khoa-phong-nhan-vien.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-khoa-phong-nhan-vien-shared',
    templateUrl: './khoa-phong-nhan-vien-shared.component.html',
    styleUrls: ['./khoa-phong-nhan-vien-shared.component.scss']
})
export class KhoaPhongNhanVienSharedComponent implements OnInit {
    khoaPhongNhanVien = {} as KhoaPhongNhanVien;
    validationErrors: any;
    isCreate = true;
    constructor(
        private route: ActivatedRoute,
        private baseService: BaseService
    ) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
            this.isCreate = false;
        }
    }

    getById(id: number) {
        this.baseService.getById<KhoaPhongNhanVien>(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.khoaPhongNhanVien = resultData;
            }
        });
    }

    getSharedData() {
        return this.khoaPhongNhanVien;
    }
}
