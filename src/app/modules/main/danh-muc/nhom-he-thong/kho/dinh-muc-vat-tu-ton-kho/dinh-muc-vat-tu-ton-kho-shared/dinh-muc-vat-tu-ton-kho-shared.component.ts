import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { DinhMucVatTuTonKho } from '../dinh-muc-vat-tu-ton-kho.model';
import { DinhMucVatTuTonKhoMessage } from 'src/app/shared/configdata/system-message';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-dinh-muc-vat-tu-ton-kho-shared',
    templateUrl: './dinh-muc-vat-tu-ton-kho-shared.component.html',
    styleUrls: ['./dinh-muc-vat-tu-ton-kho-shared.component.scss']
})

export class DinhMucVatTuTonKhoSharedComponent implements OnInit {
    vatTuTonKho = {} as DinhMucVatTuTonKho;
    validationErrors: any;
    isCreate = true;
    @ViewChild('khoVatTuTpl', { static: false }) khoVatTuTpl: ComboboxComponent;
    constructor(
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private baseService: BaseService
    ) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
            this.isCreate = false;
        }
    }
    getById(id: number) {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });
        this.baseService.getById<DinhMucVatTuTonKho>(id).subscribe(resultData => {
            this.vatTuTonKho = resultData;
            this.dialog.closeAll();
        });
    }
    getSharedData() {
        return this.vatTuTonKho;
    }

    convertInt() {
        if (this.vatTuTonKho.TonToiThieu != null) {
            // tslint:disable-next-line: radix
            this.vatTuTonKho.TonToiThieu = parseInt(this.vatTuTonKho.TonToiThieu.toString());
        }

        if (this.vatTuTonKho.TonToiDa != null) {
            // tslint:disable-next-line: radix
            this.vatTuTonKho.TonToiDa = parseInt(this.vatTuTonKho.TonToiDa.toString());
        }

        if (this.vatTuTonKho.SoNgayTruocKhiHetHan != null) {
            // tslint:disable-next-line: radix
            this.vatTuTonKho.SoNgayTruocKhiHetHan = parseInt(this.vatTuTonKho.SoNgayTruocKhiHetHan.toString());
        }
    }

    onValidateClient() {
        this.validationErrors = [];
        if (this.vatTuTonKho.KhoId == null) {
            const validate = {
                Field: 'KhoId',
                Message: DinhMucVatTuTonKhoMessage.MessageKhoNotEmpty
            };
            this.validationErrors.push(validate);
        }
        if (this.vatTuTonKho.VatTuBenhVienId == null) {
            const validate = {
                Field: 'VatTuBenhVienId',
                Message: DinhMucVatTuTonKhoMessage.MessageVatTuNotEmpty
            };
            this.validationErrors.push(validate);
        }
    }

    LoadKhoVatTu(isOpen: boolean) {
        if (isOpen) {
            const url = 'DinhMucvatTuTonKho/GetListKhoAsync';
            this.khoVatTuTpl.url = url;
            this.khoVatTuTpl.data = null;
            this.khoVatTuTpl.queryInfo.Query = null;
            return;
        }
        this.khoVatTuTpl.url = '';
    }
}
