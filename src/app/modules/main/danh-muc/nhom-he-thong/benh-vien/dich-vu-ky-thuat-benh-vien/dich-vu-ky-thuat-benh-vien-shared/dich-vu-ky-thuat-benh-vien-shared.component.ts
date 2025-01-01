import { Component, OnInit, ChangeDetectorRef, Input, ViewChild,TemplateRef } from '@angular/core';
import { DichVuKyThuatBenhVien, DichVuKyThuatBenhVienGiaBaoHiems, DichVuKyThuatBenhVienTiemChung, DichVuKyThuatVuBenhVienGiaBenhViens ,DinhMucDuocPhamVTYTTrongDichVu,DuocPhamVTYT} from '../dich-vu-ky-thuat-benh-vien.model';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaseService } from 'src/app/core/services/base.service';
import icAdd from '@iconify/icons-ic/twotone-add';
import icRemove from '@iconify/icons-ic/delete';

import { DichVuKyThuat } from '../../../bao-hiem-y-te/dich-vu-ky-thuat/dich-vu-ky-thuat.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
import { CommonService } from 'src/app/core/utilities/common.helper';

import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icEdit from '@iconify/icons-ic/twotone-edit'
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ComboboxTreeComponent } from 'src/app/shared/component/dropdowns/combobox-tree/combobox-tree.component';
@Component({
  selector: 'app-dich-vu-ky-thuat-benh-vien-shared',
  templateUrl: './dich-vu-ky-thuat-benh-vien-shared.component.html',
  styleUrls: ['./dich-vu-ky-thuat-benh-vien-shared.component.scss']
})
export class DichVuKyThuatBenhVienSharedComponent implements OnInit {
  dichvuKyThuatId: number = 0;
  dichVuKyThuatBenhVien: DichVuKyThuatBenhVien;
  id: number;
  isDisplay: boolean = true;
  icAdd = icAdd;
  icRemove = icRemove;
  documentType: DocumentType;
  validationErrors: any;
  giaBaoHiem: DichVuKyThuatBenhVienGiaBaoHiems;
  giaBenhVien: DichVuKyThuatVuBenhVienGiaBenhViens;
  duocPhamVTYT = new DuocPhamVTYT();
  isCreate = true;
  firstLoadData: boolean = true;
  
  nhomDichVuVacxinId: number = null;

  queryNoiThucHien: LookupQueryInfo = new LookupQueryInfo();

  isSelectingItem: boolean = false;
  dinhMucDuocPhamVTYTTrongDichVus = new Array<DinhMucDuocPhamVTYTTrongDichVu>();
  gridDataSource: any = {
    data:[],
    total: 0
  };
  gridColumns: any[] = [];
  icEdit= icEdit;
  showEdit :boolean = true;
  @ViewChild('noiThucHien', { static: true }) noiThucHien: MultiselectComponent;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('duocPhamVTYTTemplate', { static: true }) duocPhamVTYTTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('tinhPhiTemplate', { static: true }) tinhPhiTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @ViewChild('dinhmucDuocPhamVTYT', { read: GridComponent, static: false }) dinhmucDuocPhamVTYT: GridComponent;
  
  @ViewChild('duocPhamCombobox', { read: ComboboxTreeComponent, static: false }) duocPhamCombobox: GridComponent;
  constructor(private apiService: ApiService, private dialog: MatDialog
    , private authService: AuthService, private router: Router
    , private notificationService: NotificationService
    , private route: ActivatedRoute, private cd: ChangeDetectorRef
    , private baseService: BaseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.documentType = DocumentType.DanhMucDichVuKyThuatTaiBenhVien;
    this.dichVuKyThuatBenhVien = new DichVuKyThuatBenhVien();
    this.dichVuKyThuatBenhVien.DichVuKyThuat = new DichVuKyThuat();
    this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung = new DichVuKyThuatBenhVienTiemChung();
    this.giaBaoHiem = new DichVuKyThuatBenhVienGiaBaoHiems();
    this.giaBenhVien = new DichVuKyThuatVuBenhVienGiaBenhViens();
    //this.giaBenhVien.TuNgay = new Date();
    // this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems.push(this.giaBaoHiem);
    this.giaBenhVien.DenNgayRequired = false;
    this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.push(this.giaBenhVien);
   

    if (this.id != undefined) {
      this.getDichVuKyThuatBenhVien(this.id);
      this.isCreate = false;
    }

    // this.dichVuKyThuatBenhVien.DichVuKyThuatModelText = "N01.01.000 - 1.1 Bông";
    // this.dichVuKyThuatBenhVien.DichVuKyThuatId = 2;
    this.gridColumns = [
      { Field: "", Title: "#", Width: 10, Template: this.sttTemplate },
      { Field: "DuocPhamVTYTId", Title: "Dược Phẩm/VTYT", MinWidth: 300, Template: this.duocPhamVTYTTemplate },
      { Field: "SoLuong", Title: "Số lượng", Width: 100 , Template: this.soLuongTemplate},
      { Field: "TinhPhi", Title: "Tính phí", Width: 100 , Template: this.tinhPhiTemplate},
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate }
    ];
  }

  getDichVuKyThuatBenhVien(id: number) {

    this.baseService.getById<DichVuKyThuatBenhVien>(id).subscribe(
      resultData => {
        if (resultData !== null && resultData !== undefined) {
          this.dichVuKyThuatBenhVien = resultData;
          this.dichvuKyThuatId = resultData.DichVuKyThuatId;

          if (this.dichVuKyThuatBenhVien.DichVuKyThuat == null) {
            this.dichVuKyThuatBenhVien.DichVuKyThuat = new DichVuKyThuat();
          }

          this.getObjKhoaId(this.dichVuKyThuatBenhVien.KhoaPhongIds);
          if (this.queryNoiThucHien.ParameterDependencies != "") {
            this.noiThucHien.getDataForLookup();
          }

          this.changeVacxin(this.dichVuKyThuatBenhVien.NhomDichVuBenhVienId);
          // định mức 
          if(resultData.DinhMucDuocPhamVTYTTrongDichVus != null)
          {
            resultData.DinhMucDuocPhamVTYTTrongDichVus.forEach(element => {
              if(element.DuocPhamBenhVienId != 0 && element.DuocPhamBenhVienId !=null)
              {
                element.DuocPhamVTYTId = element.DuocPhamBenhVienId;
              }
              else{
                element.DuocPhamVTYTId = element.VatTuBenhVienId;
              }
             
            });
            this.dinhMucDuocPhamVTYTTrongDichVus =resultData.DinhMucDuocPhamVTYTTrongDichVus;
            this.gridDataSource={
              data:resultData.DinhMucDuocPhamVTYTTrongDichVus,
              total:resultData.DinhMucDuocPhamVTYTTrongDichVus.length
            };
          }
        }
      },
      () => {
        //console.log("error")
      });

  }

  getSharedData() {
    this.dichVuKyThuatBenhVien.DinhMucDuocPhamVTYTTrongDichVus = this.gridDataSource.data;
    return this.dichVuKyThuatBenhVien;
  }
  XoaBaoHiem(position: any) {
    //if (this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems.length > 1) {
    this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems.splice(position, 1);
    if(this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems.length > 1)
    {
      this.removeRequiredGiaBaoHiem();
    }
    else if (this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.length == 1) {
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems[0].DenNgayRequired = false;
    }
    
    //}

  }
  ThemBaoHiem() {

    let viTriNew = new DichVuKyThuatBenhVienGiaBaoHiems();
    this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems.forEach(element => {
      element.DenNgayRequired = true;
    });
    this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems.push(viTriNew);
  }
  XoaBenhVien(position: any) {
    if (this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.length > 1) {
      this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.splice(position, 1);
      if (this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.length > 1) {
        let viTriCuoiCung = this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens[this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.length - 1]; //vị trí cuối cùng trong list
        this.removeRequired(this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens[this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.length - 1].NhomGiaDichVuKyThuatBenhVienId, this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.length - 1);
      }
      else if (this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.length == 1) {
        this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens[0].DenNgayRequired = false;
      }
    }


  }



  ThemBenhVien() {
    let viTriNew = new DichVuKyThuatVuBenhVienGiaBenhViens();
    //viTriNew.TuNgay = new Date();
    this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.push(viTriNew);
  }

  XuLyAnhXa(event) {
    if (!event) {
      this.dichVuKyThuatBenhVien.DichVuKyThuatId = null;
      this.dichVuKyThuatBenhVien.DichVuKyThuat = new DichVuKyThuat();
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems = [];
    }
    else {
      this.dichVuKyThuatBenhVien.HieuLuc = true;
      // if(this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems == undefined || this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems == null
      //   || this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems.length == 0)
      //   {
      //     this.ThemBaoHiem();
      //   }
    }
  }

  ChonDichVu(event) {
    if (event != undefined && event != null) {
      if (this.id == undefined) {
        this.dichVuKyThuatBenhVien.Ten = event.DichVu;
        this.dichVuKyThuatBenhVien.Ma = event.Ma;
      }

      this.apiService.get<DichVuKyThuat>("DichVuKyThuatBenhVien/GetThongTinDichVuKyThuat?dichVuKyThuatId=" + event.KeyId).subscribe(
        resultData => {
          if (resultData !== null && resultData !== undefined) {
            this.dichVuKyThuatBenhVien.DichVuKyThuat = resultData;
          }
        },
        () => {
        });

    }
    else {
      this.dichVuKyThuatBenhVien.DichVuKyThuat = new DichVuKyThuat();
    }
  }

  // xử lý nơi thực hiện
  getObjKhoaId(arr: any) {
    if (arr != undefined && arr != null && arr.length != 0) {
      let objParam = "[";
      arr.forEach(element => {
        objParam += "{'KhoaId':" + element + "},"
      });

      objParam += "]";
      this.queryNoiThucHien.ParameterDependencies = objParam;
    }
    else {
      this.queryNoiThucHien.ParameterDependencies = "";
    }
  }

  isItemSelected(dataItem: any): boolean {
    //this.cd.detectChanges();
    if (this.dichVuKyThuatBenhVien.NoiThucHienIds != undefined && this.dichVuKyThuatBenhVien.NoiThucHienIds.length > 0) {

      let currentItemValue = JSON.parse(dataItem.KeyId);
      // if parent
      if (dataItem.KhoaId === null || dataItem.KhoaId === '') {
        let index = this.dichVuKyThuatBenhVien.NoiThucHienIds.findIndex(x => x == dataItem.KeyId);
        if (index != -1) // đang chọn khoa
        {
          if (index == this.dichVuKyThuatBenhVien.NoiThucHienIds.length - 1) { // nếu vừa chọn khoa

            if (this.dichVuKyThuatBenhVien.NoiThucHienIds.length > 1) {
              var arrNoiThucHienTemp = this.dichVuKyThuatBenhVien.NoiThucHienIds.slice();

              arrNoiThucHienTemp.forEach(element => {
                let elementObj = JSON.parse(element);
                if (elementObj.KhoaId === currentItemValue.KhoaId && elementObj.PhongId != null && elementObj.PhongId != "") {
                  let indexNoiThucHienXoa = this.dichVuKyThuatBenhVien.NoiThucHienIds.findIndex(x => x == element);
                  if (indexNoiThucHienXoa != -1) {
                    this.dichVuKyThuatBenhVien.NoiThucHienIds.splice(indexNoiThucHienXoa, 1);
                    this.cd.detectChanges();
                  }
                }
              });
            }
            return true;
          }
          else // nếu vừa chọn phòng
          {
            let itemCuoiCung = this.dichVuKyThuatBenhVien.NoiThucHienIds[this.dichVuKyThuatBenhVien.NoiThucHienIds.length - 1];
            let itemCuoiCungObj = JSON.parse(itemCuoiCung);
            if (itemCuoiCungObj.PhongId != null && itemCuoiCungObj.PhongId != '' && itemCuoiCungObj.KhoaId == currentItemValue.KhoaId) {
              let indexParentItemCuoiCung = -1;
              this.dichVuKyThuatBenhVien.NoiThucHienIds.forEach((element, index) => {
                let itemObj = JSON.parse(element);
                if ((itemObj.PhongId == null || itemObj.PhongId == '') && itemObj.KhoaId == itemCuoiCungObj.KhoaId && indexParentItemCuoiCung == -1) {
                  indexParentItemCuoiCung = index;
                }
              });
              if (indexParentItemCuoiCung != -1) // nếu đã chọn khoa trước đó
              {
                // gán lại arr
                var arrItems = dataItem.Items.slice();
                var arrNoiThucHienDangChon = this.dichVuKyThuatBenhVien.NoiThucHienIds.slice();
                arrItems.forEach(element => {
                  let indexElement = arrNoiThucHienDangChon.findIndex(x => x == element.KeyId);
                  if (element.KeyId == itemCuoiCung) {
                    arrNoiThucHienDangChon.splice(indexElement, 1);
                  }
                  if (indexElement == -1) {
                    arrNoiThucHienDangChon.push(element.KeyId);
                  }
                });
                arrNoiThucHienDangChon.splice(indexParentItemCuoiCung, 1);

                this.dichVuKyThuatBenhVien.NoiThucHienIds = arrNoiThucHienDangChon.slice();
                this.cd.detectChanges();
                return false;
              }
              else // nếu chưa chọn khoa trước đó
              {
                return this.dichVuKyThuatBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
              }

            }
            else {
              return this.dichVuKyThuatBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
            }
          }
        }
        else {
          return this.dichVuKyThuatBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
        }
      }
      // if child
      else {

        let indexParent = this.dichVuKyThuatBenhVien.NoiThucHienIds.findIndex(item => item == dataItem.KhoaKeyId)
        if (indexParent != -1) {
          return this.dichVuKyThuatBenhVien.NoiThucHienIds.some(item => this.checkedValue(item, dataItem.KeyId));
        }
        else {
          // kiểm tra số lượng phòng thuộc khoa đang chọn, nếu bằng tổng số phòng thì thêm khoa vào model, xóa tất cả phòng thuộc khoa trong model
          let count = 0;

          let arrNoiThucHien = this.dichVuKyThuatBenhVien.NoiThucHienIds.slice();
          arrNoiThucHien.forEach(element => {
            let elementObj = JSON.parse(element);
            if (elementObj.PhongId != null && elementObj.PhongId != '' && elementObj.KhoaId === dataItem.KhoaId) {
              count++;
            }
          });

          // nếu số lượng phòng select = tổng phòng trong khoa -> xóa tất cả phòng, thêm khoa vào model
          if (count == dataItem.CountItems) {
            let arr = this.dichVuKyThuatBenhVien.NoiThucHienIds.slice();
            let isPush: boolean = false;
            arr.forEach((element, indexPhong) => {
              let elementObj = JSON.parse(element);
              if (elementObj.PhongId != null && elementObj.PhongId != "" && elementObj.KhoaId === currentItemValue.KhoaId) {
                arr.splice(indexPhong, 1);
                if (!isPush) {
                  isPush = true;
                  arr.push(dataItem.KhoaKeyId);
                }
              }
            });
            this.dichVuKyThuatBenhVien.NoiThucHienIds = arr.slice();
            this.cd.detectChanges();

            // this.dichVuKyThuatBenhVien.NoiThucHienIds.push(dataItem.KhoaKeyId);
            return true;
          }
          else {
            return this.dichVuKyThuatBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
          }
        }
      }
    }
  }

  checkedValue(itemInList, currentItem) {
    let itemInListValue = JSON.parse(itemInList);
    let currentItemValue = JSON.parse(currentItem);
    return itemInListValue.KhoaId === currentItemValue.KhoaId;
  }

  changeKhoa(event) {
    if (event == undefined || event == null || event.length == 0) {
      this.dichVuKyThuatBenhVien.NoiThucHienIds = [];
    }
    else {
      if (this.dichVuKyThuatBenhVien.NoiThucHienIds == undefined || this.dichVuKyThuatBenhVien.NoiThucHienIds == null || this.dichVuKyThuatBenhVien.NoiThucHienIds.length == 0) {
        this.dichVuKyThuatBenhVien.NoiThucHienIds = [];
      }
      let arrNoiThucHienHienTai = this.dichVuKyThuatBenhVien.NoiThucHienIds.slice();
      let arrNoiThucHienNew = this.dichVuKyThuatBenhVien.NoiThucHienIds.slice();
      arrNoiThucHienHienTai.forEach((element, index) => {
        let elementObj = JSON.parse(element);
        let indexKhoa = event.findIndex(x => x == elementObj.KhoaId);
        if (indexKhoa == -1) {
          let indexNoiThucHien = arrNoiThucHienNew.findIndex(x => x == element);
          arrNoiThucHienNew.splice(indexNoiThucHien, 1);
        }
      });
      this.dichVuKyThuatBenhVien.NoiThucHienIds = arrNoiThucHienNew.slice();
    }
    this.getObjKhoaId(event);
  }

  changeNoiThucHien(event) {
    if (event == undefined || event == null) {
      this.dichVuKyThuatBenhVien.TenNoiThucHienUuTien = null;
    }
    this.firstLoadData = false;
  }

  nhomDichVuSelectionChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.dichVuKyThuatBenhVien.MaNhomDichVuBenhVien = dataItem.Ma;
    } else {
      this.dichVuKyThuatBenhVien.MaNhomDichVuBenhVien = null;
    }
  }

  evtLoaiPhauThuatThuThuatChanged(evt) {
    this.dichVuKyThuatBenhVien.LoaiPhauThuatThuThuat = evt ? evt.DisplayName : '';
  }

  changeNhomBenhVien(event) {
    if (!event) {
      this.dichVuKyThuatBenhVien.LaVacxin = false;
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung = new DichVuKyThuatBenhVienTiemChung();
    }
    else {
      if (this.dichVuKyThuatBenhVien.NhomDichVuVacxinId == null || this.dichVuKyThuatBenhVien.NhomDichVuVacxinId == 0) {
        this.apiService.get<number>("DichVuKyThuatBenhVien/GetNhomBenhVienTiemChung").subscribe(
          resultData => {
            if (resultData !== null && resultData !== undefined) {
              this.dichVuKyThuatBenhVien.NhomDichVuVacxinId = resultData;
              this.dichVuKyThuatBenhVien.LaVacxin = resultData == event;
            }
          },
          () => {
          });
      }
      else
      {
        this.dichVuKyThuatBenhVien.LaVacxin = this.dichVuKyThuatBenhVien.NhomDichVuVacxinId == event;
      }
    }
  }

  changeVacxin(event)
  {
    if(!event)
    {
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung = new DichVuKyThuatBenhVienTiemChung();
    }
  }

  chonDuocPhamVacxin(event) {
    if (event) {
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung.SoDangKy = event.SoDangKy;
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung.MaDuocPhamBenhVien = event.MaDuocPhamBenhVien;
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung.Ten = event.Ten;
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung.MaHoatChat = event.MaHoatChat;
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung.HoatChat = event.HoatChat;
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung.NhaSanXuat = event.NhaSanXuat;
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung.NuocSanXuat = event.NuocSanXuat;
      this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienTiemChung.QuyCach = event.QuyCach;
    }
  }
  ChangeTuNgay(gia:DichVuKyThuatVuBenhVienGiaBenhViens) {
    //Hiện tại mình đã có field đến ngày nhưng field này chỉ hiển thị khi có 2 dòng cùng loại giá.
    //Giờ mình cho nó hiển thị ra luôn và ko disable để cho nó có thể sửa 
    //nhưng mình vẫn phải DenNgayRequired là từ ngày của dòng sau > đến ngày của dòng trước +1(cùng loại giá)
    // bổ sung 13102021
    // nếu giá bệnh viện  chỉ có 1 dòng  thì đến ngày dc null => hsd đến ngày là vô thời hạn 
    // nếu giá bệnh viện  có 2 dòng trở lên thì DenNgayRequired đến ngày dòng 1
    // + lấy từ ngày dòng 2 đem lên đến ngày dòng 1 đối với trường hợp  đến ngày dòng 1 null , còn nếu  trường hợp đến ngày dòng 1 có kiểm tra từ ngày dòng 2 lớn hơn <= đến ngày dòng 1
    // + dòng 2 đến ngày k DenNgayRequired
    // dòng 3 thì tương tự
    if (gia != undefined  && gia != null) {
      this.capNhatDenNgayTruocCungLoaiGia(gia);
    }
  }
  tinhViTriTrongList(list: any[], item: any) {
    let viTri = 0;
    for (let itx = 0; itx <= list.length; itx++) {

      if (list[itx] == item) {
        break;
      }
      viTri++;
    }
    return viTri;
  }
  capNhatDenNgayTruocCungLoaiGia(gia:DichVuKyThuatVuBenhVienGiaBenhViens){
    var giaCungLoais=this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens.filter(o=>o.NhomGiaDichVuKyThuatBenhVienId==gia.NhomGiaDichVuKyThuatBenhVienId);
    if(giaCungLoais!=null && giaCungLoais.length>1)
    {
      for(var i=0;i<giaCungLoais.length;i++)
      {
        if(i<giaCungLoais.length-1)
        {
          if( giaCungLoais[i].DenNgay==null && giaCungLoais[i+1].TuNgay!=null)
          {
            giaCungLoais[i].DenNgay=CommonService.addDate(CommonService.formatDate(giaCungLoais[i+1].TuNgay,"mm/dd/yyyy"),-1);
          }
          giaCungLoais[i].DenNgayRequired=true;
        }
        else
        {          
          giaCungLoais[i].DenNgayRequired=false;
        }
      }
    }
  }
  // loại giá
  ChangeLoaiGia(gia:DichVuKyThuatVuBenhVienGiaBenhViens) {
    if (gia != undefined  && gia != null) {
      this.capNhatDenNgayTruocCungLoaiGia(gia);
    }
  }
  ChangeTuNgayGiaBH(event: any, viTri: any){
    if(this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems.length > 1)
    {
      if(this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems[viTri-1].DenNgay == null){
        this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems[viTri-1].DenNgay =CommonService.addDate(CommonService.formatDate(event,"mm/dd/yyyy"),-1);
      }
    }
  }
  groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
  removeRequired(event: any, viTri: any) {
    if (event != null) {
      let group = this.groupBy(this.dichVuKyThuatBenhVien.DichVuKyThuatVuBenhVienGiaBenhViens, pet => pet.NhomGiaDichVuKyThuatBenhVienId);

      group.forEach(element => {
        if (element.length > 1) {
          let elements: any[] = [];
          element.forEach(po => {
            elements.push(po);
          });
          elements[element.length - 1].Validate = false;
        }
        else {
          element.forEach(vo => {
            vo.Validate = false;
          });
        }
      });
    }

  }
  removeRequiredGiaBaoHiem() {
    // if (this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.length > 1) {
    //   // bỏ vị trí cuối cùng
    //   for (var i = 0; i < this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.length - 1; i++) {
    //     this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems[i].DenNgayRequired = true;
    //   }
    //   this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems[this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.length - 1].DenNgayRequired = true;
    // }
    // else {
    //   this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems[0].DenNgayRequired = false;
    // }
    this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems[this.dichVuKyThuatBenhVien.DichVuKyThuatBenhVienGiaBaoHiems.length -1].DenNgayRequired = false;
  }
  onKeyEnterAddItem(event: any) {
    if (event.key == "Enter" && !this.isSelectingItem) {
        if (this.isSelectingItem != true) {

            this.themDinhMucDPVTYT();
        }
        else {
            this.isSelectingItem = false;
        }
    }
}

openCombobox(event: any) {
    if (event) {
        this.isSelectingItem = true;
    }
    else {
        this.isSelectingItem = false;
    }
}
onKey(event: any) {
    if (event.key == "Enter" && !this.isSelectingItem) {
        if (this.isSelectingItem != true) {

            this.themDinhMucDPVTYT();
        }
        else {
            this.isSelectingItem = false;
        }
    }
}
themDinhMucDPVTYT(){
  this.validationErrors=[];
  this.validationErrors = this.returnValidateDinhMucDPVTYTs();
  if (this.validationErrors && this.validationErrors.some(x => x)) {
    return;
  }else{
    let dinhMucDuocPhamVTYTTrongDichVu= new DinhMucDuocPhamVTYTTrongDichVu();
    if(this.duocPhamVTYT.LaDuocPham == 1)
    {
      dinhMucDuocPhamVTYTTrongDichVu.DuocPhamBenhVienId = this.duocPhamVTYT.Id;
    }
    else{
      dinhMucDuocPhamVTYTTrongDichVu.VatTuBenhVienId = this.duocPhamVTYT.Id;
    }
    dinhMucDuocPhamVTYTTrongDichVu.SoLuong = this.duocPhamVTYT.SoLuong;
    dinhMucDuocPhamVTYTTrongDichVu.KhongTinhPhi = this.duocPhamVTYT.KhongTinhPhi;
    // dinhMucDuocPhamVTYTTrongDichVu.DichVuKyThuatBenhVienId = this.dichVuKyThuatBenhVien.DichVuKyThuatId;
    dinhMucDuocPhamVTYTTrongDichVu.DuocPhamVTYTId =this.duocPhamVTYT.Id;
    this.dinhMucDuocPhamVTYTTrongDichVus.push(dinhMucDuocPhamVTYTTrongDichVu);
    this.gridDataSource={
      data:this.dinhMucDuocPhamVTYTTrongDichVus,
      total:this.dinhMucDuocPhamVTYTTrongDichVus.length
    };
    this.duocPhamVTYT = new DuocPhamVTYT();
  }
 
}
  returnValidateDinhMucDPVTYTs() {
    const validationResult = [];
    if (!this.duocPhamVTYT.Id) {
      const validationItem = {
        Field: 'DuocPhamVTYTId',
        Message: "Yêu cầu nhập Dược phẩm/VTYT"
      };
      validationResult.push(validationItem);
    }
    if (!this.duocPhamVTYT.SoLuong) {
      const validationItem = {
        Field: 'SoLuong',
        Message: "Yêu cầu nhập số lượng"
      };
      validationResult.push(validationItem);
    }
    if(this.duocPhamVTYT.SoLuongTon < this.duocPhamVTYT.SoLuong)
    {
      const validationItem = {
        Field: 'SoLuong',
        Message: "Số lượng tồn không đủ"
      };
      validationResult.push(validationItem);
     
    }
    return validationResult;
  }
changeDinhMucDuocPhamVTYT(dataItem:any){
  if(dataItem !=null ){
    this.duocPhamVTYT.Id = dataItem.Id;
    this.duocPhamVTYT.LaDuocPham =dataItem.LoaiDuocPhamHoacVatTu;
    this.duocPhamVTYT.SoLuongTon = dataItem.SoLuongTon;
  }
}
changeDinhMucDuocPhamVTYTGrid(dataItem:any,index:any){
  if(dataItem !=null ){
    if(index != null)
    {
      this.dinhMucDuocPhamVTYTTrongDichVus[index].DuocPhamVTYTId = dataItem.KeyId == undefined ? null :dataItem.KeyId;
      this.dinhMucDuocPhamVTYTTrongDichVus[index].DuocPhamBenhVienId = dataItem.LoaiDuocPhamHoacVatTu == 1 ?dataItem.KeyId:null; 
      this.dinhMucDuocPhamVTYTTrongDichVus[index].VatTuBenhVienId = dataItem.LoaiDuocPhamHoacVatTu == 2 ?dataItem.KeyId:null; 
    }
    
  }
}
changeDinhMuc(item:any,index:any,dataItem:any){
  if(index != null)
  {
    this.dinhMucDuocPhamVTYTTrongDichVus[index].DuocPhamVTYTId = item == undefined ? null :item;
    if(item == null || item == undefined)
    {
      this.dinhMucDuocPhamVTYTTrongDichVus[index].VatTuBenhVienId =null;
      this.dinhMucDuocPhamVTYTTrongDichVus[index].DuocPhamBenhVienId =null;
    }
  }
}
xoaDinhMuc(item: any) {
  this.validationErrors = [];
  this.dialog.open(ConfirmComponent, {
    disableClose: false,
    width: '400px',
    data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
  }).afterClosed().subscribe(result => {
    if (result === 'Yes') {
      this.gridDataSource.data.splice(this.gridDataSource.data.findIndex(x => x == item), 1);
      this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
    }
  });

}
EditDinhMuc(item: any) {
  if(item != null)
  {
    item.EditValue = true;
  }
}
changeSL(item:any,index:any){
  if(index != null)
  {
    this.dinhMucDuocPhamVTYTTrongDichVus[index].SoLuong = item == undefined ? null :item;
  }
}
changeTinhPhi(data:any,event:any,index:any){
  this.dinhMucDuocPhamVTYTTrongDichVus[index].KhongTinhPhi =event
}
setDataGridView() {
  this.dinhmucDuocPhamVTYT.gridDataSource = this.gridDataSource;

  if (this.dinhmucDuocPhamVTYT !== undefined)
  {
    this.dinhmucDuocPhamVTYT.setDataSource();
  }
    
}
}
