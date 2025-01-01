import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';


import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import {
    TongHopDuTruMuaVatTuTaiKhoaSharedComponent
} from '../tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component';
import { TongHopDuTruMuaVatTuTaiKhoa } from '../tong-hop-du-tru-mua-vat-tu-tai-khoa.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet',
    templateUrl: './tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html',
    styleUrls: ['./tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class TongHopDuTruMuaVatTuTaiKhoaDuyetComponent implements OnInit {
    documentType: DocumentType;
    danhSachTongHopDuTruMuaVatTuTaiKhoa: TongHopDuTruMuaVatTuTaiKhoa;
    popupSavingData: any = null;
    popupLoadingData: any = null;
    validationErrors: any = null;
    tabDaXuLy = "";

    @ViewChild(TongHopDuTruMuaVatTuTaiKhoaSharedComponent, { static: true }) shared: any;

    constructor(
        private apiService: ApiService,
        private dialog: MatDialog,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new TongHopDuTruMuaVatTuTaiKhoa();
        let isSelected = this.route.snapshot.params.isSelected;

        if (isSelected === "true") {
            this.tabDaXuLy = "DaXuLy";
            const id = this.route.snapshot.params.id;
            if (id != undefined && id != null && isSelected === "true") {
                this.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id);
            }
        } else {
            this.tabDaXuLy = "ChoXuLy";
            const id = this.route.snapshot.params.id;
            if (id != undefined && id != null) {
                this.getThongTinTongHopDuTruMuaTaiKhoa(id);
            }
        }
    }

    getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id: any) {
        this.apiService.get<any>('YeuCauMuaVatTu/GetThongTinDuTruVatTuTaiKhoaDaXuLy/' + id)
            .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                }
            });
    }

    getThongTinTongHopDuTruMuaTaiKhoa(id: any) {
        this.apiService.get<any>('YeuCauMuaVatTu/GetThongTinDuTruVatTuTaiKhoa/' + id)
            .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                }
            });
    }


    loadingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang lưu dữ liệu...' },
        });
    }

    closepopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }

    savingPage() {
        this.popupSavingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang lưu dữ liệu...' },
        });
    }

    closepopupSavingData() {
        if (this.popupSavingData) {
            this.popupSavingData.close();
        }
    }
}
