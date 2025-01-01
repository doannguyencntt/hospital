import { Component, OnInit } from '@angular/core';
import { PhongBenhVien } from '../phong-benh-vien.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-phong-benh-vien-shared',
    templateUrl: './phong-benh-vien-shared.component.html',
    styleUrls: ['./phong-benh-vien-shared.component.scss']
})
export class PhongBenhVienSharedComponent implements OnInit {
    phongBenhVien = {} as PhongBenhVien;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }

        this.phongBenhVien.IsDisabled = false;
    }
    getById(id: number) {
        this.baseService.getById<PhongBenhVien>(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.phongBenhVien = resultData;

            }
        });
    }

    getSharedData() {
        return this.phongBenhVien;
    }
}
