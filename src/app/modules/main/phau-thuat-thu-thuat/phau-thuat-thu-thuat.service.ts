import { Injectable, OnDestroy } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()

export class PhauThuatThuThuatService extends BaseService implements OnDestroy {
    controllerName = 'PhauThuatThuThuat';

    tuongThuatIdSubj: Subject<any>;

    constructor(apiService: ApiService) {
        super(apiService);
        this.tuongThuatIdSubj = new Subject();
    }

    setTuongThuatId(value) {
        this.tuongThuatIdSubj.next(value);
    }

    getTuongThuatId() {
        return this.tuongThuatIdSubj;
    }

    ngOnDestroy() {
        if (this.tuongThuatIdSubj) {
            this.tuongThuatIdSubj.unsubscribe();
        }
    }
}
