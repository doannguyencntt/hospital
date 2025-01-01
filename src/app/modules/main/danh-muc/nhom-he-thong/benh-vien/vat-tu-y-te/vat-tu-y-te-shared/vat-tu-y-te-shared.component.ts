import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AutocompleteComponent } from 'src/app/shared/component/dropdowns/autocomplete/autocomplete.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { VatTuYTe ,LookupQueryInfo,VatTuBenhViewModel} from '../vat-tu-y-te.model';

@Component({
  selector: 'app-vat-tu-y-te-shared',
  templateUrl: './vat-tu-y-te-shared.component.html',
  styleUrls: ['./vat-tu-y-te-shared.component.scss']
})
export class VatTuYTeSharedComponent implements OnInit {
  vatTuYTe = {} as VatTuYTe;
  lookupQueryInfo:LookupQueryInfo;
  validationErrors: any;
  nhaSanXuatDataSource: any;
  nuocSanXuatDataSource: any;
  listMaHoatChat : any;
  listHoatChatDuongDung : any;
  constructor(private route: ActivatedRoute, private baseService: BaseService, private apiService: ApiService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.vatTuYTe = new VatTuYTe();
    this.vatTuYTe.VatTuBenhViewModel = new VatTuBenhViewModel();
    const id: number = this.route.snapshot.params.id;
      if (id !== undefined && id !== null) {
          this.getById(id);
      }
    this.getListTenNhaSanXuat();
    this.getListTenNuocSanXuat();
  }

  getSharedData() {
    let vatTuBenhVienIdTemp = 0;
    if(this.vatTuYTe.VatTuBenhViewModel != null && this.vatTuYTe.VatTuBenhViewModel.Id != null){
      vatTuBenhVienIdTemp = this.vatTuYTe.VatTuBenhViewModel.Id;
    }

    this.vatTuYTe.VatTuBenhViewModel = new VatTuBenhViewModel();
    this.vatTuYTe.VatTuBenhViewModel.LoaiSuDung = this.vatTuYTe.LoaiSuDung;
    this.vatTuYTe.VatTuBenhViewModel.MaVatTuBenhVien = this.vatTuYTe.MaVatTuBenhVien;

    this.vatTuYTe.VatTuBenhViewModel.Id = vatTuBenhVienIdTemp;

    return this.vatTuYTe;
  }

  getById(id: number) {
    this.baseService.getById<VatTuYTe>(id).subscribe(resultData => {
        this.vatTuYTe = resultData;
    });
  }

  getListTenNhaSanXuat(){
    this.apiService.get<Array<string>>("DuocPham/GetListTenNhaSanXuatAsync").subscribe(
      resultData => {
        this.nhaSanXuatDataSource = resultData;
      }
    )
  }

  getListTenNuocSanXuat(){
    this.apiService.get<Array<string>>("DuocPham/GetListTenNuocSanXuatAsync").subscribe(
      resultData => {
        this.nuocSanXuatDataSource = resultData;
      }
    )
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

  changeSuDungTaiBenhVien(event) {
    if (event) {
      var self = this;
      clearTimeout(self.timeout);
      self.timeout = setTimeout(function () {
        self.getMaTaoMoiVatTu();
      }, 100);
    }
  }

  getMaTaoMoiVatTu(tenVatTu: string = null) {
    if (this.vatTuYTe.ChuaTaoVatTuBenhVien != false) {
      let tenVatTuTemp = tenVatTu == null ? this.vatTuYTe.Ten : tenVatTu;
      if (tenVatTuTemp != null) {
        var obj = {
          TenVatTu: tenVatTuTemp
        }
        this.apiService.post<any>("VatTuBenhVien/GetMaTaoMoiVatTu", obj).subscribe(
          resultData => {
            if (resultData) {
              this.vatTuYTe.MaVatTuBenhVien = resultData;
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
