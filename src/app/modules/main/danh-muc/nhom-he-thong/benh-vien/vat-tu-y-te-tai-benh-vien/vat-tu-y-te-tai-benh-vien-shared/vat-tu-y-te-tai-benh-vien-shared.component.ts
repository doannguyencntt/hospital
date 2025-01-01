import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { BaseService } from 'src/app/core/services/base.service';
import { VatTuYTeTaiBenhVien } from '../vat-tu-y-te-tai-benh-vien.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAdd from '@iconify/icons-ic/twotone-add';
import icRemove from '@iconify/icons-ic/delete';
import { ApiError } from 'src/app/shared/models/api-error.model';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-vat-tu-y-te-tai-benh-vien-shared',
    templateUrl: './vat-tu-y-te-tai-benh-vien-shared.component.html',
    styleUrls: ['./vat-tu-y-te-tai-benh-vien-shared.component.scss']
})
export class VatTuYTeTaiBenhVienSharedComponent implements OnInit {
    id: number;
    isDisplay = true;
    documentType: DocumentType;
    validationErrors: any;
    vattuBenhVien: VatTuYTeTaiBenhVien = new VatTuYTeTaiBenhVien();
    nhaSanXuatDataSource: any;
    nuocSanXuatDataSource: any;
    isCreate = true;
    constructor(private route: ActivatedRoute, private baseService: BaseService, private apiService: ApiService,
        private notificationService: NotificationService) { }


    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.documentType = DocumentType.DanhMucVatTuYTeTaiBenhVien;

        if (this.id != null) {
            this.isCreate = false;
            this.geyById(this.id);
        }
        this.getListTenNhaSanXuat();
        this.getListTenNuocSanXuat();
    }

    getListTenNhaSanXuat() {
        this.apiService.get<Array<string>>("DuocPham/GetListTenNhaSanXuatAsync").subscribe(
            resultData => {
                this.nhaSanXuatDataSource = resultData;
            }
        )
    }

    getListTenNuocSanXuat() {
        this.apiService.get<Array<string>>("DuocPham/GetListTenNuocSanXuatAsync").subscribe(
            resultData => {
                this.nuocSanXuatDataSource = resultData;
            }
        )
    }

    geyById(id: number) {
        this.baseService.getById<any>(id).subscribe(
            resultData => {
                if (resultData !== null && resultData !== undefined) {
                    this.vattuBenhVien = resultData;
                }
            });
    }

    getSharedData() {
        this.vattuBenhVien.HieuLuc = this.vattuBenhVien.HieuLuc != null ? this.vattuBenhVien.HieuLuc : false;
        return this.vattuBenhVien;
    }

    //===================================================================================================================
  ///BVHD-3472
  timeout = null;
  changeTenVatTu(event) {
    if (event) {
      var self = this;
      clearTimeout(self.timeout);
      self.timeout = setTimeout(function () {
        self.getMaTaoMoiVatTu(event);
      }, 500);
    }
  }

  getMaTaoMoiVatTu(tenVatTu: string = null) {
    if (this.vattuBenhVien.Id == null || this.vattuBenhVien.Id == 0) {
      let tenVatTuTemp = tenVatTu == null ? this.vattuBenhVien.Ten : tenVatTu;
      if (tenVatTuTemp != null) {
        var obj = {
          TenVatTu: tenVatTuTemp
        }
        this.apiService.post<any>("VatTuBenhVien/GetMaTaoMoiVatTu", obj).subscribe(
          resultData => {
            if (resultData) {
              this.vattuBenhVien.MaVatTuBenhVien = resultData;
            }
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          });
      }
    }
  }
  //===================================================================================================================
}
