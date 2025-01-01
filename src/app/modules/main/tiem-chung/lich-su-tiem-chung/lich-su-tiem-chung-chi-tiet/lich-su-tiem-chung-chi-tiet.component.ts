import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-lich-su-tiem-chung-chi-tiet',
    templateUrl: './lich-su-tiem-chung-chi-tiet.component.html',
    styleUrls: ['./lich-su-tiem-chung-chi-tiet.component.scss']
})

export class LichSuTiemChungChiTietComponent implements OnInit {
    yeuCauKhamTiemChungId: number = null;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        let yeuCauDichVuKyThuatId = this.route.snapshot.paramMap.get('id');

        if(yeuCauDichVuKyThuatId && !isNaN(Number(yeuCauDichVuKyThuatId))) {
            this.yeuCauKhamTiemChungId = Number(yeuCauDichVuKyThuatId);
        }
    }
}