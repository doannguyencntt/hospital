import { Component, OnInit } from '@angular/core';
import { LoaiPhongBenhNoiTru } from '../loai-phong-benh-noi-tru.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-loai-phong-benh-noi-tru-shared',
    templateUrl: './loai-phong-benh-noi-tru-shared.component.html',
    styleUrls: ['./loai-phong-benh-noi-tru-shared.component.scss']
})
export class LoaiPhongBenhNoiTruSharedComponent implements OnInit {
    loaiPhongBenhNoiTru = {} as LoaiPhongBenhNoiTru;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }

    getSharedData() {
        return this.loaiPhongBenhNoiTru;
    }

    getById(id: number) {
        this.baseService.getById<LoaiPhongBenhNoiTru>(id).subscribe(resultData => {
            this.loaiPhongBenhNoiTru = resultData;
        });
    }
}
