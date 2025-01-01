import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { BenhNhanThongTin } from '../quay-thuoc.model';

@Component({
    selector: 'app-quay-thuoc-thong-tin-hanh-chinh',
    templateUrl: './quay-thuoc-thong-tin-hanh-chinh.component.html',
    styleUrls: ['./quay-thuoc-thong-tin-hanh-chinh.component.scss']
})
export class QuayThuocThongTinHanhChinhComponent implements OnInit {

    @Input() benhnhanThongTin: BenhNhanThongTin;
    @Input() MaBN: number;
    data = {} as BenhNhanThongTin;

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }
    ngOnInit() {
        const id: number = this.route.snapshot.params.idsub;
        if (this.benhnhanThongTin == null) {
            this.benhnhanThongTin = new BenhNhanThongTin();
        }
        if (this.MaBN != null) {
            this.GetThongTinBenhNhan(this.MaBN);
        }
    }
    GetThongTinBenhNhan(id: number) {
        this.apiService.post<any>("QuayThuoc/GetThongTinBenhNhan1?maBN=" + id).subscribe(
            resultData => {
                this.data = resultData;
            },
            () => { });
    }

}
