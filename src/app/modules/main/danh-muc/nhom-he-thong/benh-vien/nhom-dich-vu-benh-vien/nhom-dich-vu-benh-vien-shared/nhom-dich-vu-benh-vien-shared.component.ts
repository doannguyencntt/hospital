import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { NhomDichVuBenhVien } from '../nhom-dich-vu-benh-vien.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
@Component({
    selector: 'app-nhom-dich-vu-benh-vien-shared',
    templateUrl: './nhom-dich-vu-benh-vien-shared.component.html',
    styleUrls: ['./nhom-dich-vu-benh-vien-shared.component.scss']
})
export class NhomDichVuBenhVienSharedComponent implements OnInit {
    nhomDichVuBenhVien: NhomDichVuBenhVien = new NhomDichVuBenhVien();
    queryInfo: LookupQueryInfo = new LookupQueryInfo();
    isShowView: string;
    idCha: number = null;
    validationErrors: any;
    isDisabled:boolean = null;
    isCreate = true;
    disabledAll: boolean = false;
    constructor(private route: ActivatedRoute, private baseService: BaseService, private router: Router) { }

    ngOnInit() {
        this.nhomDichVuBenhVien = new NhomDichVuBenhVien();
        const id: number = this.route.snapshot.params.id;
        // if (id) {
        //     this.getById(id);
        //     this.isCreate = false;
        // }
        this.idCha = id;
        if (id != undefined) {
            this.queryInfo.ParameterDependencies = id.toString();
        } else {
            this.queryInfo.ParameterDependencies = "0";
        }
        this.isShowView = this.route.snapshot.params.isShowView;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }

    getById(id: number) {
        if (this.isShowView == "true") {
            this.isCreate = true;
            this.baseService.getById(id).subscribe((result: any) => {
                this.nhomDichVuBenhVien = result;
                this.nhomDichVuBenhVien.NhomDichVuBenhVienChaId = result.Id;
                this.nhomDichVuBenhVien.NhomDichVuBenhVienCha = result.Ten;
                this.nhomDichVuBenhVien.Id = 0;
                this.nhomDichVuBenhVien.Ten = null;
                this.nhomDichVuBenhVien.Ma = null;
                this.nhomDichVuBenhVien.MoTa = null;
                this.isDisabled = true;
                // console.log("data: ", this.nhomDichVuBenhVien)

            });
        }
        else {
            this.isCreate = false;
            this.baseService.getById<NhomDichVuBenhVien>(id).subscribe(resultData => {
                if (resultData !== null && resultData !== undefined) {
                    this.nhomDichVuBenhVien = resultData;
                    this.isDisabled = true;
                    // console.log("data: ", this.nhomDichVuBenhVien)

                }
            });
        }

    }

    getSharedData() {
        return this.nhomDichVuBenhVien;
    }

    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-benh-vien']);
    }
}
