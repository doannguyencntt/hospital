import { Component, OnInit } from '@angular/core';
import { NhaThau } from '../nha-thau.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
    selector: 'app-nha-thau-shared',
    templateUrl: './nha-thau-shared.component.html',
    styleUrls: ['./nha-thau-shared.component.scss']
})
export class NhaThauSharedComponent implements OnInit {

    nhaThau = {} as NhaThau;
    validationErrors: any;
    constructor(private route: ActivatedRoute, private baseService: BaseService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }

    getSharedData() {
        return this.nhaThau;
    }

    getById(id: number) {
        this.baseService.getById<NhaThau>(id).subscribe(resultData => {
            this.nhaThau = resultData;
        });
    }
}
