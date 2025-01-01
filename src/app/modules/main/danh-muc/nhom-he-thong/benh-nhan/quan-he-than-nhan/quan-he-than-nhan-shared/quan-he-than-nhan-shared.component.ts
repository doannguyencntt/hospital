import { Component, OnInit } from '@angular/core';
import { QuanHeThanNhan } from '../quan-he-than-nhan.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-quan-he-than-nhan-shared',
    templateUrl: './quan-he-than-nhan-shared.component.html',
    styleUrls: ['./quan-he-than-nhan-shared.component.scss']
})
export class QuanHeThanNhanSharedComponent implements OnInit {
    quanHeThanNhan = {} as QuanHeThanNhan;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }

        this.quanHeThanNhan.IsDisabled = false;
    }

    getSharedData() {
        return this.quanHeThanNhan;
    }

    getById(id: number) {
        this.baseService.getById<QuanHeThanNhan>(id).subscribe(resultData => {
            this.quanHeThanNhan = resultData;
        });
    }
}
