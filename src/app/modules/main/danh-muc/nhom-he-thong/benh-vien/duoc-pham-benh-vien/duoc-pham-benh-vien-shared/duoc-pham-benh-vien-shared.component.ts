import { Component, OnInit, ViewChild } from '@angular/core';
import { DuocPhamBenhVien } from '../duoc-pham-benh-vien.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AutocompleteComponent } from 'src/app/shared/component/dropdowns/autocomplete/autocomplete.component';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-duoc-pham-benh-vien-shared',
  templateUrl: './duoc-pham-benh-vien-shared.component.html',
  styleUrls: ['./duoc-pham-benh-vien-shared.component.scss']
})
export class DuocPhamBenhVienSharedComponent implements OnInit {
  @ViewChild("maHoatChatAutoComplete", { static: true }) maHoatChatAutoComplete: AutocompleteComponent;
  @ViewChild("hoatChatAutoComplete", { static: true }) hoatChatAutoComplete: AutocompleteComponent;

  duocPhamBenhVien: DuocPhamBenhVien = new DuocPhamBenhVien();
  validationErrors: any;
  nhaSanXuatDataSource: any;
  nuocSanXuatDataSource: any;
  isCreate: boolean = true;

  isAllowInputInfor: boolean = false;

  constructor(private route: ActivatedRoute, private baseService: BaseService, private apiService: ApiService,
    private notificationService: NotificationService) { }


  ngOnInit() {
    this.duocPhamBenhVien = new DuocPhamBenhVien();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
    this.getListTenNhaSanXuat();
    this.getListTenNuocSanXuat();
  }

  nhomChaChange(duocPhamBenhVienPhanNhomChaId: number) {
    this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomConId = null;
    this.duocPhamBenhVien.TenDuocPhamBenhVienPhanNhomCon = null;
    if (duocPhamBenhVienPhanNhomChaId != undefined && duocPhamBenhVienPhanNhomChaId != null) {
      this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId = duocPhamBenhVienPhanNhomChaId;
    } else {
      this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId = null;
    }
    this.getMaTaoMoiDuocPham(null, this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId);
  }

  nhomConChange(duocPhamBenhVienPhanNhomConId: number) {
    if (duocPhamBenhVienPhanNhomConId != undefined && duocPhamBenhVienPhanNhomConId != null) {
      this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId = duocPhamBenhVienPhanNhomConId;
    } else {
      this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId = this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomChaId;
    }
    this.getMaTaoMoiDuocPham(null, this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId);
  }

  modelChangeLoaiDieuKienBaoQuanDuocPham(event: any) {
    this.duocPhamBenhVien.ThongTinDieuKienBaoQuanDuocPham = null;
    this.isAllowInputInfor = false;
    if (event === 4) { // chọn khác emun 4
      this.isAllowInputInfor = true;
    }
  }

  getSharedData() {
    return this.duocPhamBenhVien;
  }

  getById(id: number) {
    this.baseService.getById<DuocPhamBenhVien>(id).subscribe(resultData => {
      this.duocPhamBenhVien = resultData;
      this.isAllowInputInfor = this.duocPhamBenhVien.LoaiDieuKienBaoQuanDuocPham === 4 ? true : false;
    });
  }

  valueChangeMaHoatChat(event) {
    if (event != null && event != "") {
      var item = CommonService.findObjectByKey(this.maHoatChatAutoComplete._data, "MaHoatChat", event);
      if (item != null) {
        this.duocPhamBenhVien.HoatChat = item.HoatChat;
      }
    }
  }
  valueChangeHoatChat(event) {
    if (event != null && event != "") {
      var item = CommonService.findObjectByKey(this.hoatChatAutoComplete._data, "HoatChat", event);
      if (item != null) {
        this.duocPhamBenhVien.MaHoatChat = item.MaHoatChat;
      }
    }
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

  //===================================================================================================================
  ///BVHD-3454
  timeout = null;
  changeTenDuocPham(event) {
    if (event) {
      var self = this;
      clearTimeout(self.timeout);
      self.timeout = setTimeout(function () {
        self.getMaTaoMoiDuocPham(event);
      }, 500);
    }
  }

  getMaTaoMoiDuocPham(tenDuocPham: string = null, phanNhomId: number = null) {
    if (this.duocPhamBenhVien.Id == null || this.duocPhamBenhVien.Id == 0) {
      let tenDuocPhamTemp = tenDuocPham == null ? this.duocPhamBenhVien.Ten : tenDuocPham;
      let phanNhomIdTemp = phanNhomId == null ? this.duocPhamBenhVien.DuocPhamBenhVienPhanNhomId : phanNhomId;
      if (tenDuocPhamTemp != null && phanNhomIdTemp != null) {
        var obj = {
          TenDuocPham: tenDuocPhamTemp,
          PhanNhomId: phanNhomIdTemp
        }
        this.apiService.post<any>("DuocPhamBenhVien/GetMaTaoMoiDuocPham", obj).subscribe(
          resultData => {
            if (resultData) {
              this.duocPhamBenhVien.MaDuocPhamBenhVien = resultData;
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
