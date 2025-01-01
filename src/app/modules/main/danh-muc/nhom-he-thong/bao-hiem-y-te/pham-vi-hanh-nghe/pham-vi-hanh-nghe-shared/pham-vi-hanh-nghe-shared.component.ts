import { Component, OnInit } from '@angular/core';
import { PhamViHanhNghe } from '../pham-vi-hanh-nghe.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-pham-vi-hanh-nghe-shared',
    templateUrl: './pham-vi-hanh-nghe-shared.component.html',
    styleUrls: ['./pham-vi-hanh-nghe-shared.component.scss']
})
export class PhamViHanhNgheSharedComponent implements OnInit {
    phamViHanhNghe = {} as PhamViHanhNghe;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }

    getSharedData() {
        return this.phamViHanhNghe;
    }

    getById(id: number) {
        this.baseService.getById<PhamViHanhNghe>(id).subscribe(resultData => {
            this.phamViHanhNghe = resultData;
        });
    }
}
