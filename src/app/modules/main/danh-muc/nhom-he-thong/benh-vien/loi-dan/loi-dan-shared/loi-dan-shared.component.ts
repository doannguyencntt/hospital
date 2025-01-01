import { Component, OnInit } from '@angular/core';
import { LoiDan } from '../loi-dan.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-loi-dan-shared',
    templateUrl: './loi-dan-shared.component.html',
    styleUrls: ['./loi-dan-shared.component.scss']
})
export class LoiDanSharedComponent implements OnInit {
    loiDan = {} as LoiDan;
    validationErrors: any;
    isCreate = true;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
            this.isCreate = false;
        }
    }

    getSharedData() {
        return this.loiDan;
    }

    getById(id: number) {
        this.baseService.getById<LoiDan>(id).subscribe(resultData => {
            this.loiDan = resultData;
        });
    }
}
