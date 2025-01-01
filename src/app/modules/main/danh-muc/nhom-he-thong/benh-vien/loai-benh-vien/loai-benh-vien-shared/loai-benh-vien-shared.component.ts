import { Component, OnInit } from '@angular/core';
import { LoaiBenhVien } from '../loai-benh-vien.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-loai-benh-vien-shared',
    templateUrl: './loai-benh-vien-shared.component.html',
    styleUrls: ['./loai-benh-vien-shared.component.scss']
})

export class LoaiBenhVienSharedComponent implements OnInit {
    loaiBenhVien = {} as LoaiBenhVien;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }

    getSharedData() {
        return this.loaiBenhVien;
    }

    getById(id: number) {
        this.baseService.getById<LoaiBenhVien>(id).subscribe(resultData => {
            this.loaiBenhVien = resultData;
        });
    }
}
