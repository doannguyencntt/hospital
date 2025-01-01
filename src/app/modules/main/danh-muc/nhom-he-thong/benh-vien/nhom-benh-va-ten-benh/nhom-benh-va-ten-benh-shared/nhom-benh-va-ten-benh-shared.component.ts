import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
import { LookupQueryInfo, MultiselectQueryInfo } from 'src/app/shared/models/common.model';
import { NhomBenhVaTenBenh, NhomICDLienKetICDTheoBenhVien } from '../nhom-benh-va-ten-benh.model';
@Component({
    selector: 'app-nhom-benh-va-ten-benh-shared',
    templateUrl: './nhom-benh-va-ten-benh-shared.component.html',
    styleUrls: ['./nhom-benh-va-ten-benh-shared.component.scss']
})
export class NhomBenhVaTenBenhSharedComponent implements OnInit {
    nhomBenhVaTenBenh = {} as NhomBenhVaTenBenh;
    isCreate = true;
    validationErrors: any;
    queryMaICD: MultiselectQueryInfo = new MultiselectQueryInfo();

    @ViewChild('maICDMultiselect', { static: true }) maICDMultiselect: MultiselectComponent;

    constructor(private route: ActivatedRoute, private baseService: BaseService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.nhomBenhVaTenBenh.HieuLuc = true;
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
            this.isCreate = false;
        }
    }

    getById(id: number) {
        this.baseService.getById<NhomBenhVaTenBenh>(id).subscribe(res => {
            this.nhomBenhVaTenBenh = res;
            this.queryMaICD.ParameterDependencies = '{MaICD:\'' + this.nhomBenhVaTenBenh.MoTa + '\'}';
            this.queryMaICD.Take = 50;
            this.maICDMultiselect.queryInfo = this.queryMaICD;
            this.maICDMultiselect.getDataForLookup();
        })
    }

    getSharedData() {
        return this.nhomBenhVaTenBenh;
    }

    // changeNhomICDLienKetICDTheoBenhVien(event) {
    //     var self = this;
    //     self.nhomBenhVaTenBenh.NhomICDLienKetICDTheoBenhViens = [];
    //     if (event && self.nhomBenhVaTenBenh.MaICDs != null && self.nhomBenhVaTenBenh.MaICDs.length > 0) {
    //         self.nhomBenhVaTenBenh.MaICDs.forEach(maIcd => {
    //             let nhomICDLienKetICDTheoBenhVien = new NhomICDLienKetICDTheoBenhVien();
    //              nhomICDLienKetICDTheoBenhVien.NhomICDTheoBenhVienId = self.nhomBenhVaTenBenh.Id;
    //              nhomICDLienKetICDTheoBenhVien.ICDId = maIcd;
    //              self.nhomBenhVaTenBenh.NhomICDLienKetICDTheoBenhViens.push(nhomICDLienKetICDTheoBenhVien);
    //         });
    //     }
    // }
}