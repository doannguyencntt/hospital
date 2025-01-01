import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { KhoDuocPham } from '../kho-duoc-pham.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
import { DuocPhamBenhVienPhanNhom } from '../../../benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom.model';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { EnumLoaiKho } from 'src/app/shared/enum/loai-kho.enum';
import { KhoDuocPhamVtytMessage } from 'src/app/shared/configdata/system-message';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kho-duoc-pham-share',
    templateUrl: './kho-duoc-pham-share.component.html',
    styleUrls: ['./kho-duoc-pham-share.component.scss']
})
export class KhoDuocPhamShareComponent implements OnInit {
    validationErrors: any;
    modelFE = {} as KhoDuocPham;
    enableKhoaPhong = false;
    enablePhongBenhVien = false;
    controllerName = 'PhongBenhVien';
    data: any;
    url: null;
    isCreate;

    // @ViewChild('cmbPhongBenhVien', { static: true }) cmbPhongBenhVien: ComboboxComponent;
    constructor(private route: ActivatedRoute, private baseService: BaseService, private apiService: ApiService) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params.id;
        this.isCreate = true;
        if (id != null) {
            this.isCreate = false;
            this.getById(id);
        }
    }

    getById(id: number) {
        this.baseService.getById<KhoDuocPham>(id).subscribe(resultData => {
            if (resultData != null) {
                this.modelFE = { ...resultData };

                if (this.modelFE.LoaiKho === EnumLoaiKho.KhoLe) {
                    this.enableKhoaPhong = true;
                    this.enablePhongBenhVien = true;
                }
            }
        });
    }

    getSharedData() {
        return this.modelFE;
    }

    OnChangeLoaiKho(loaiKho: any) {
        this.modelFE.KhoaPhongId = null;
        this.modelFE.PhongBenhVienId = null;

        if (loaiKho != null && loaiKho.KeyId === 5) {
            this.enableKhoaPhong = true;
            return;
        }
        this.enableKhoaPhong = false;
        this.enablePhongBenhVien = false;
    }

    OnChangeKhoaPhong(khoaPhong: any) {
        this.modelFE.PhongBenhVienId = null;
        this.enablePhongBenhVien = false;
        if (khoaPhong != null) {
            this.enablePhongBenhVien = true;
        }
        this.modelFE.PhongBenhVienId = null;
        this.modelFE.PhongBenhVien = null;
    }

    OnLoadPhongBenhVien(isOpen: boolean) {
        if (isOpen) {
            const dropDownListModel = new LookupQueryInfo();
            dropDownListModel.Id = this.modelFE.KhoaPhongId;

            this.apiService.post<any>(`${this.controllerName}/GetListPhongBenhVienByKhoa`, dropDownListModel).subscribe(res => {
                this.data = [...res];
            });
        }
    }

    Validate() {
        this.validationErrors = [];
        if (this.modelFE.Ten == null || this.modelFE.Ten === '') {
            const validate = {
                Field: 'Ten',
                Message: KhoDuocPhamVtytMessage.MessageTenNotEmpty
            };
            this.validationErrors.push(validate);
        }
        if (this.modelFE.LoaiKho == null) {
            const validate = {
                Field: 'LoaiKho',
                Message: KhoDuocPhamVtytMessage.MessageLoaiNotEmpty
            };
            this.validationErrors.push(validate);
        }
        if (this.enableKhoaPhong && this.modelFE.KhoaPhongId == null) {
            const validate = {
                Field: 'KhoaPhongId',
                Message: KhoDuocPhamVtytMessage.MessageKhoaNotEmpty
            };
            this.validationErrors.push(validate);
        }
        if (this.isCreate && (this.modelFE.NhanVienIds == null || !this.modelFE.NhanVienIds.some(x => x))) {
            const validate = {
                Field: 'NhanVienIds',
                Message: KhoDuocPhamVtytMessage.MessageTenNvNotEmpty
            };
            this.validationErrors.push(validate);
        }
        // if (!this.isCreate && this.modelFE.NhanVienId == null) {
        //     const validate = {
        //         Field: 'NhanVienId',
        //         Message: KhoDuocPhamVtytMessage.MessageTenNvNotEmpty
        //     };
        //     this.validationErrors.push(validate);
        // }
    }
}
