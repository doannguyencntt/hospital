import { Component, OnInit } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { TrangThaiDuyet } from '../tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc.model';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-update',
    templateUrl: './tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-update.component.html',
    styleUrls: ['./tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class TongHopDuTruMuaTaiKhoaDuocUpdateComponent implements OnInit {
    trangThai: TrangThaiDuyet;
    isShow = false;

    constructor() { }

    ngOnInit() { }

    back() { }

    getTrangThai($event) { }

    getTrangThaiYeuCau(event) {
        if (event) {
            this.trangThai = event;
            if (this.trangThai.DuocDuyet === true) {
                this.isShow = false;
            } else if (this.trangThai.DuocDuyet === false) {
                this.isShow = false;
            } else {
                this.isShow = true;
            }
        }
    }
}
