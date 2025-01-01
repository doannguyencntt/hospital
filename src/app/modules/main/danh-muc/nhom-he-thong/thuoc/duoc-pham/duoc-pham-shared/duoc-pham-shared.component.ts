import { CommonService } from './../../../../../../../core/utilities/common.helper';
import { AutocompleteComponent } from './../../../../../../../shared/component/dropdowns/autocomplete/autocomplete.component';
import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DuocPham ,DuocPhamBenhVienModel} from '../duoc-pham.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
import { LookupQueryInfo,  } from 'src/app/shared/models/common.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-duoc-pham-shared',
  templateUrl: './duoc-pham-shared.component.html',
  styleUrls: ['./duoc-pham-shared.component.scss']
})
export class DuocPhamSharedComponent implements OnInit {
  thuocBenhVien = {} as DuocPham; 
  lookupQueryInfo:LookupQueryInfo;
  validationErrors: any;
  nhaSanXuatDataSource: any;
  nuocSanXuatDataSource: any;
  listMaHoatChat : any;
  listHoatChatDuongDung : any;
  @ViewChild("MaHoatChat",{static:true}) maHoatChat:AutocompleteComponent;
  @ViewChild("HoatChat",{static:true}) hoatChat:AutocompleteComponent;
  constructor(private route: ActivatedRoute, private baseService: BaseService, private apiService: ApiService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.thuocBenhVien = new DuocPham();
    this.thuocBenhVien.DuocPhamBenhVienModel = new DuocPhamBenhVienModel();
    const id: number = this.route.snapshot.params.id;
      if (id !== undefined && id !== null) {
          this.getById(id);
      }
    this.getListTenNhaSanXuat();
    this.getListTenNuocSanXuat();
  }

  getSharedData() {
    let duocPhamBenhVienIdTemp = 0;
    if(this.thuocBenhVien.DuocPhamBenhVienModel != null && this.thuocBenhVien.DuocPhamBenhVienModel.Id != null){
      duocPhamBenhVienIdTemp = this.thuocBenhVien.DuocPhamBenhVienModel.Id;
    }

    this.thuocBenhVien.DuocPhamBenhVienModel = new DuocPhamBenhVienModel();
    this.thuocBenhVien.DuocPhamBenhVienModel.DuocPhamBenhVienPhanNhomId = this.thuocBenhVien.DuocPhamBenhVienPhanNhomId;
    this.thuocBenhVien.DuocPhamBenhVienModel.MaDuocPhamBenhVien = this.thuocBenhVien.MaDuocPhamBenhVien;

    this.thuocBenhVien.DuocPhamBenhVienModel.Id = duocPhamBenhVienIdTemp;
    
    return this.thuocBenhVien;
  }

  getById(id: number) {
    this.baseService.getById<DuocPham>(id).subscribe(resultData => {
        this.thuocBenhVien = resultData;
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
  valueChangeMaHoatChat(event){
    if(event!=null && event!="")
    {
      var item=CommonService.findObjectByKey(this.maHoatChat._data,"MaHoatChat",event);
      if(item!=null){
        this.thuocBenhVien.HoatChat = item.HoatChat;
      }
    }      
  }
  valueChangeHoatChat(event){
    if(event!=null && event!="")
    {
      var item=CommonService.findObjectByKey(this.hoatChat._data,"HoatChat",event);
      if(item!=null){
        this.thuocBenhVien.MaHoatChat = item.MaHoatChat;
      }
    }
  }


  changePhaNhomBenhVien(event){
    if(event && this.thuocBenhVien.Ten != null && this.thuocBenhVien.Ten != "")
    {
      this.getMaTaoMoiDuocPham(this.thuocBenhVien.Ten, event);
    }
  }

  getMaTaoMoiDuocPham(tenDuocPham: string = null, phanNhomId: number = null) {
    if (this.thuocBenhVien.ChuaTaoDuocPhamBenhVien != false) {
      let tenDuocPhamTemp = tenDuocPham == null ? this.thuocBenhVien.Ten : tenDuocPham;
      let phanNhomIdTemp = phanNhomId == null ? this.thuocBenhVien.DuocPhamBenhVienPhanNhomId : phanNhomId;
      if (tenDuocPhamTemp != null && phanNhomIdTemp != null) {
        var obj = {
          TenDuocPham: tenDuocPhamTemp,
          PhanNhomId: phanNhomIdTemp
        }
        this.apiService.post<any>("DuocPhamBenhVien/GetMaTaoMoiDuocPham", obj).subscribe(
          resultData => {
            if (resultData) {
              this.thuocBenhVien.MaDuocPhamBenhVien = resultData;
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
}
