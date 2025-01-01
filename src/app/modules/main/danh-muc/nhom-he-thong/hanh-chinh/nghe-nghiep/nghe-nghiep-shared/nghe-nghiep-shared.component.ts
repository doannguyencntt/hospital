import { Component, OnInit } from '@angular/core';
import { NgheNghiep } from '../nghe-nghiep.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-nghe-nghiep-shared',
    templateUrl: './nghe-nghiep-shared.component.html',
    styleUrls: ['./nghe-nghiep-shared.component.scss']
})
export class NgheNghiepSharedComponent implements OnInit {
    ngheNghiep = {} as NgheNghiep;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }

        this.ngheNghiep.IsDisabled = false;
    }

    getSharedData() {
        return this.ngheNghiep;
    }

    getById(id: number) {
        this.baseService.getById<NgheNghiep>(id).subscribe(resultData => {
            this.ngheNghiep = resultData;
        });
    }
}
