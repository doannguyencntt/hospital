import { Component, OnInit } from '@angular/core';
import { PhuongPhapVoCam } from '../phuong-phap-vo-cam.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-phuong-phap-vo-cam-shared',
    templateUrl: './phuong-phap-vo-cam-shared.component.html',
    styleUrls: ['./phuong-phap-vo-cam-shared.component.scss']
})
export class PhuongPhapVoCamSharedComponent implements OnInit {
    phuongPhapVoCam = {} as PhuongPhapVoCam;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }

    getSharedData() {
        return this.phuongPhapVoCam;
    }

    getById(id: number) {
        this.baseService.getById<PhuongPhapVoCam>(id).subscribe(resultData => {
            this.phuongPhapVoCam = resultData;
        });
    }
}
