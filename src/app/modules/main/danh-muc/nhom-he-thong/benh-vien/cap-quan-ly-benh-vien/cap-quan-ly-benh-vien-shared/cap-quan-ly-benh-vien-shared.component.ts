import { Component, OnInit } from '@angular/core';
import { CapQuanLyBenhVien } from '../cap-quan-ly-benh-vien.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-cap-quan-ly-benh-vien-shared',
    templateUrl: './cap-quan-ly-benh-vien-shared.component.html',
    styleUrls: ['./cap-quan-ly-benh-vien-shared.component.scss']
})

export class CapQuanLyBenhVienSharedComponent implements OnInit {
    capQuanLyBenhVien = {} as CapQuanLyBenhVien;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }

    getSharedData() {
        return this.capQuanLyBenhVien;
    }

    getById(id: number) {
        this.baseService.getById<CapQuanLyBenhVien>(id).subscribe(resultData => {
            this.capQuanLyBenhVien = resultData;
        });
    }
}
