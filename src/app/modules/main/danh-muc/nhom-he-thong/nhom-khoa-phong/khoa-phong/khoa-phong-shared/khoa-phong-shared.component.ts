import { Component, OnInit } from '@angular/core';
import { KhoaPhong} from '../khoa-phong.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-khoa-phong-shared',
    templateUrl: './khoa-phong-shared.component.html',
    styleUrls: ['./khoa-phong-shared.component.scss']
})
export class KhoaPhongSharedComponent implements OnInit {
    khoaPhong = {} as KhoaPhong;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }

        this.khoaPhong.IsDisabled = false;
    }

    getById(id: number) {
        this.baseService.getById<KhoaPhong>(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.khoaPhong = resultData;

            }
        });
    }

    getSharedData() {
        return this.khoaPhong;

    }

    // onChangeChuyenKhoa(event: any) {
    //     console.log(event, this.khoaPhong.KhoaId);
    // }
}
