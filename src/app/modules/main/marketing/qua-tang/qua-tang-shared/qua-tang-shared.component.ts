import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { QuaTang } from '../qua-tang.model';

@Component({
    selector: 'app-qua-tang-shared',
    templateUrl: './qua-tang-shared.component.html',
    styleUrls: ['./qua-tang-shared.component.scss']
})
export class QuaTangSharedComponent implements OnInit {
    quaTang = {} as QuaTang;
    isCreate = true;
    validationErrors: any;

    constructor(private route: ActivatedRoute, private router: Router,
                private baseService: BaseService,  private notificationService: NotificationService) { }

    ngOnInit() {
        this.quaTang.HieuLuc = true;
    
        const id: number = this.route.snapshot.params.id;
        if(id) {
            this.getById(id);
            this.isCreate = false;
        }
    }

    getById(id: number) {
        this.baseService.getById<QuaTang>(id).subscribe(res => {
            this.quaTang = res;
        }, (err: ApiError) => {
            this.notificationService.showError(err.Message);
            this.router.navigate(['/marketing/qua-tang']);
        })
    }
    
    getSharedData() {
        return this.quaTang;
    }
}
