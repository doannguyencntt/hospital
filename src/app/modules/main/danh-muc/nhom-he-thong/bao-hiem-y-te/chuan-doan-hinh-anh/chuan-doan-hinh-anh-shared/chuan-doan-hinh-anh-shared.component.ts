import { Component, OnInit } from '@angular/core';
import { ChuanDoanHinhAnh } from '../chuan-doan-hinh-anh.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-chuan-doan-hinh-anh-shared',
    templateUrl: './chuan-doan-hinh-anh-shared.component.html',
    styleUrls: ['./chuan-doan-hinh-anh-shared.component.scss']
})
export class ChuanDoanHinhAnhSharedComponent implements OnInit {

    chuanDoanHinhAnh = {} as ChuanDoanHinhAnh;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }

    getSharedData() {
        return this.chuanDoanHinhAnh;
    }

    getById(id: number) {
        this.baseService.getById<ChuanDoanHinhAnh>(id).subscribe(resultData => {
            this.chuanDoanHinhAnh = resultData;
        });
    }
}
