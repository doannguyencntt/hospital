import { CommonService } from 'src/app/core/utilities/common.helper';
import { Component, OnInit, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { DichVuKyThuatBenhVien } from '../../dich-vu-ky-thuat-benh-vien/dich-vu-ky-thuat-benh-vien.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DichVuKhamBenhBenhVien, DichVuKhamBenhBenhVienGiaBaoHiems, DichVuKhamBenhBenhVienGiaBenhViens } from '../dich-vu-kham-benh-benh-vien.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icRemove from '@iconify/icons-ic/delete';
import { isBuffer } from 'util';
import { DichVuKhamBenh } from '../../../bao-hiem-y-te/dich-vu-kham-benh/dich-vu-kham-benh.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
@Component({
  selector: 'app-dich-vu-kham-benh-benh-vien-shared',
  templateUrl: './dich-vu-kham-benh-benh-vien-shared.component.html',
  styleUrls: ['./dich-vu-kham-benh-benh-vien-shared.component.scss']
})
export class DichVuKhamBenhBenhVienSharedComponent implements OnInit {
  dichvuKhamBenhId: number = 0;
  dichVuKhamBenhBenhVien: DichVuKhamBenhBenhVien;
  id: number;
  icAdd = icAdd;
  icRemove = icRemove;
  documentType: DocumentType;
  validationErrors: any;
  giaBaoHiem: DichVuKhamBenhBenhVienGiaBaoHiems;
  giaBenhVien: DichVuKhamBenhBenhVienGiaBenhViens;
  isCreate = true;

  queryNoiThucHien: LookupQueryInfo = new LookupQueryInfo();
  @ViewChild('noiThucHien', { static: true }) noiThucHien: MultiselectComponent;
  constructor(private apiService: ApiService, private dialog: MatDialog
    , private authService: AuthService, private router: Router
    , private notificationService: NotificationService
    , private route: ActivatedRoute, private cd: ChangeDetectorRef
    , private baseService: BaseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.documentType = DocumentType.DanhMucDichVuKyThuatTaiBenhVien;
    this.dichVuKhamBenhBenhVien = new DichVuKhamBenhBenhVien();
    this.dichVuKhamBenhBenhVien.DichVuKhamBenh = new DichVuKhamBenh();

    if (this.id != undefined) {
      this.getDichVuKyThuatBenhVien(this.id);
      this.isCreate = false;
    } else {
      this.giaBaoHiem = new DichVuKhamBenhBenhVienGiaBaoHiems();
      this.giaBenhVien = new DichVuKhamBenhBenhVienGiaBenhViens();
      // this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.push(this.giaBaoHiem);
      this.giaBenhVien.DenNgayRequired = false;
      this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.push(this.giaBenhVien);
    }
  }
  XoaBaoHiem(position: any) {
    //if( this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.length >1){
    this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.splice(position, 1);
    if (this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.length > 1) {
      this.removeRequiredGiaBaoHiem();
    }
    else if (this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.length == 1) {
      this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems[0].DenNgayRequired = false;
    }
    this.removeRequiredGiaBaoHiem();
    //}

  }
  ThemBaoHiem() {

    let viTriNew = new DichVuKhamBenhBenhVienGiaBaoHiems();
    this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.forEach(element => {
      element.DenNgayRequired = true;
    });
    this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.push(viTriNew);
  }
  XoaBenhVien(position: any) {
    if (this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.length > 1) {
      this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.splice(position, 1);
      if (this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.length > 1) {
        let viTriCuoiCung = this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens[this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.length - 1]; //vị trí cuối cùng trong list
        this.removeRequired(this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens[this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.length - 1].NhomGiaDichVuKhamBenhBenhVienId, this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.length - 1);
      }
      else if (this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.length == 1) {
        this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens[0].DenNgayRequired = false;
      }
    }
  }



  ThemBenhVien() {
    let viTriNew = new DichVuKhamBenhBenhVienGiaBenhViens();
    // if (this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.length >= 1) {
    //   this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.forEach(element => {
    //     element.DenNgayRequired = true
    //   });
    // }
    this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.push(viTriNew);
  }
  getDichVuKyThuatBenhVien(id: number) {

    this.baseService.getById<any>(id).subscribe(
      resultData => {
        if (resultData !== null && resultData !== undefined) {
          this.dichVuKhamBenhBenhVien = resultData;
          this.dichVuKhamBenhBenhVien.DichVuKhamBenhId = resultData.DichVuKhamBenhId;
          this.dichvuKhamBenhId = resultData.DichVuKhamBenhId;

          if (this.dichVuKhamBenhBenhVien.DichVuKhamBenh == null) {
            this.dichVuKhamBenhBenhVien.DichVuKhamBenh = new DichVuKhamBenh();
          }

          this.getObjKhoaId(this.dichVuKhamBenhBenhVien.KhoaPhongIds);
          if (this.queryNoiThucHien.ParameterDependencies != "") {
            this.noiThucHien.getDataForLookup();
          }
        }
      },
      () => {
        //console.log("error")
      });

  }

  getSharedData() {
    return this.dichVuKhamBenhBenhVien;
  }

  XuLyAnhXa(event) {
    if (!event) {
      this.dichVuKhamBenhBenhVien.DichVuKhamBenhId = null;
      this.dichVuKhamBenhBenhVien.DichVuKhamBenh = new DichVuKhamBenh();
      this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems = [];
    }
    else {
      this.dichVuKhamBenhBenhVien.HieuLuc = true;
      // if(this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems == undefined || this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems == null
      //   || this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.length == 0)
      //   {
      //     this.ThemBaoHiem();
      //   }
    }
  }

  ChonDichVu(event) {
    if (event != undefined && event != null) {
      if (this.id == undefined) {
        this.dichVuKhamBenhBenhVien.Ten = event.DichVu;
        this.dichVuKhamBenhBenhVien.Ma = event.Ma;
      }

      this.apiService.get<DichVuKhamBenh>("DichVuKhamBenhBenhVien/GetThongTinDichVuKhamBenh?dichVuKhamBenhId=" + event.KeyId).subscribe(
        resultData => {
          if (resultData !== null && resultData !== undefined) {
            this.dichVuKhamBenhBenhVien.DichVuKhamBenh = resultData;
          }
        },
        () => {
        });

    }
    else {
      this.dichVuKhamBenhBenhVien.DichVuKhamBenh = new DichVuKhamBenh();
    }
  }

  //////=============== xử lý nơi thực hiện ====================////////
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
    if (this.dichVuKhamBenhBenhVien.NoiThucHienIds != undefined && this.dichVuKhamBenhBenhVien.NoiThucHienIds.length > 0) {

      let currentItemValue = JSON.parse(dataItem.KeyId);
      // if parent
      if (dataItem.KhoaId === null || dataItem.KhoaId === '') {
        let index = this.dichVuKhamBenhBenhVien.NoiThucHienIds.findIndex(x => x == dataItem.KeyId);
        if (index != -1) // đang chọn khoa
        {
          if (index == this.dichVuKhamBenhBenhVien.NoiThucHienIds.length - 1) { // nếu vừa chọn khoa
            // return this.dichVuKhamBenhBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId || this.checkedValue(item, dataItem.KeyId));

            // this.dichVuKhamBenhBenhVien.NoiThucHienIds.forEach((element, index) => {
            //   let elementObj = JSON.parse(element);
            //   if (elementObj.PhongId != null && elementObj.PhongId != "" && elementObj.KhoaId === currentItemValue.KhoaId) {
            //   console.log('============================> parent exists element', elementObj);
            //     this.dichVuKhamBenhBenhVien.NoiThucHienIds.splice(index, 1);
            //   }
            // });

            if (this.dichVuKhamBenhBenhVien.NoiThucHienIds.length > 1) {
              var arrNoiThucHienTemp = this.dichVuKhamBenhBenhVien.NoiThucHienIds.slice();

              arrNoiThucHienTemp.forEach(element => {
                let elementObj = JSON.parse(element);
                if (elementObj.KhoaId === currentItemValue.KhoaId && elementObj.PhongId != null && elementObj.PhongId != "") {
                  let indexNoiThucHienXoa = this.dichVuKhamBenhBenhVien.NoiThucHienIds.findIndex(x => x == element);
                  if (indexNoiThucHienXoa != -1) {
                    this.dichVuKhamBenhBenhVien.NoiThucHienIds.splice(indexNoiThucHienXoa, 1);
                    this.cd.detectChanges();
                  }
                }
              });
            }
            return true;
          }
          else // nếu vừa chọn phòng
          {
            let itemCuoiCung = this.dichVuKhamBenhBenhVien.NoiThucHienIds[this.dichVuKhamBenhBenhVien.NoiThucHienIds.length - 1];
            let itemCuoiCungObj = JSON.parse(itemCuoiCung);
            if (itemCuoiCungObj.PhongId != null && itemCuoiCungObj.PhongId != '' && itemCuoiCungObj.KhoaId == currentItemValue.KhoaId) {
              let indexParentItemCuoiCung = -1;
              this.dichVuKhamBenhBenhVien.NoiThucHienIds.forEach((element, index) => {
                let itemObj = JSON.parse(element);
                if ((itemObj.PhongId == null || itemObj.PhongId == '') && itemObj.KhoaId == itemCuoiCungObj.KhoaId && indexParentItemCuoiCung == -1) {
                  indexParentItemCuoiCung = index;
                }
              });
              if (indexParentItemCuoiCung != -1) // nếu đã chọn khoa trước đó
              {
                // gán lại arr
                var arrItems = dataItem.Items.slice();
                var arrNoiThucHienDangChon = this.dichVuKhamBenhBenhVien.NoiThucHienIds.slice();
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

                this.dichVuKhamBenhBenhVien.NoiThucHienIds = arrNoiThucHienDangChon.slice();
                this.cd.detectChanges();
                return false;
              }
              else // nếu chưa chọn khoa trước đó
              {
                return this.dichVuKhamBenhBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
              }

            }
            else {
              return this.dichVuKhamBenhBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
            }
          }
        }
        else {
          return this.dichVuKhamBenhBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
        }
      }
      // if child
      else {
        let indexParent = this.dichVuKhamBenhBenhVien.NoiThucHienIds.findIndex(item => item == dataItem.KhoaKeyId)
        if (indexParent != -1) {
          return this.dichVuKhamBenhBenhVien.NoiThucHienIds.some(item => this.checkedValue(item, dataItem.KeyId));
        }
        else {
          // kiểm tra số lượng phòng thuộc khoa đang chọn, nếu bằng tổng số phòng thì thêm khoa vào model, xóa tất cả phòng thuộc khoa trong model
          let count = 0;

          let arrNoiThucHien = this.dichVuKhamBenhBenhVien.NoiThucHienIds.slice();
          arrNoiThucHien.forEach(element => {
            let elementObj = JSON.parse(element);
            if (elementObj.PhongId != null && elementObj.PhongId != '' && elementObj.KhoaId === dataItem.KhoaId) {
              count++;
            }
          });

          // nếu số lượng phòng select = tổng phòng trong khoa -> xóa tất cả phòng, thêm khoa vào model
          if (count == dataItem.CountItems) {
            let arr = this.dichVuKhamBenhBenhVien.NoiThucHienIds.slice();
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
            this.dichVuKhamBenhBenhVien.NoiThucHienIds = arr.slice();
            this.cd.detectChanges();

            // this.dichVuKhamBenhBenhVien.NoiThucHienIds.push(dataItem.KhoaKeyId);
            return true;
          }
          else {
            return this.dichVuKhamBenhBenhVien.NoiThucHienIds.some(item => item == dataItem.KeyId);
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
      this.dichVuKhamBenhBenhVien.NoiThucHienIds = [];
    }
    else {
      let arrNoiThucHienHienTai = this.dichVuKhamBenhBenhVien.NoiThucHienIds.slice();
      let arrNoiThucHienNew = this.dichVuKhamBenhBenhVien.NoiThucHienIds.slice();
      arrNoiThucHienHienTai.forEach((element, index) => {
        let elementObj = JSON.parse(element);
        let indexKhoa = event.findIndex(x => x == elementObj.KhoaId);
        if (indexKhoa == -1) {
          let indexNoiThucHien = arrNoiThucHienNew.findIndex(x => x == element);
          arrNoiThucHienNew.splice(indexNoiThucHien, 1);
        }
      });
      this.dichVuKhamBenhBenhVien.NoiThucHienIds = arrNoiThucHienNew.slice();
    }
    this.getObjKhoaId(event);
  }
  ChangeTuNgay(gia: DichVuKhamBenhBenhVienGiaBenhViens) {
    //Hiện tại mình đã có field đến ngày nhưng field này chỉ hiển thị khi có 2 dòng cùng loại giá.
    //Giờ mình cho nó hiển thị ra luôn và ko disable để cho nó có thể sửa 
    //nhưng mình vẫn phải DenNgayRequired là từ ngày của dòng sau > đến ngày của dòng trước +1(cùng loại giá)
    // bổ sung 13102021
    // nếu giá bệnh viện  chỉ có 1 dòng  thì đến ngày dc null => hsd đến ngày là vô thời hạn 
    // nếu giá bệnh viện  có 2 dòng trở lên thì DenNgayRequired đến ngày dòng 1
    // + lấy từ ngày dòng 2 đem lên đến ngày dòng 1 đối với trường hợp  đến ngày dòng 1 null , còn nếu  trường hợp đến ngày dòng 1 có kiểm tra từ ngày dòng 2 lớn hơn <= đến ngày dòng 1
    // + dòng 2 đến ngày k DenNgayRequired
    // dòng 3 thì tương tự
    if (gia != undefined && gia != null) {
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
  capNhatDenNgayTruocCungLoaiGia(gia: DichVuKhamBenhBenhVienGiaBenhViens) {
    var giaCungLoais = this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens.filter(o => o.NhomGiaDichVuKhamBenhBenhVienId == gia.NhomGiaDichVuKhamBenhBenhVienId);
    if (giaCungLoais != null && giaCungLoais.length > 1) {
      for (var i = 0; i < giaCungLoais.length; i++) {
        if (i < giaCungLoais.length - 1) {
          if (giaCungLoais[i].DenNgay == null && giaCungLoais[i + 1].TuNgay != null) {
            giaCungLoais[i].DenNgay = CommonService.addDate(CommonService.formatDate(giaCungLoais[i + 1].TuNgay, "mm/dd/yyyy"), -1);
          }
          giaCungLoais[i].DenNgayRequired = true;
        }
        else {
          giaCungLoais[i].DenNgayRequired = false;
        }
      }
    }
  }
  // loại giá
  ChangeLoaiGia(gia: DichVuKhamBenhBenhVienGiaBenhViens) {
    if (gia != undefined && gia != null) {
      this.capNhatDenNgayTruocCungLoaiGia(gia);
    }
  }
  ChangeTuNgayGiaBH(event: any, viTri: any) {
    if (this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.length > 1) {
      if (this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems[viTri - 1].DenNgay == null) {
        this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems[viTri - 1].DenNgay = CommonService.addDate(CommonService.formatDate(event, "mm/dd/yyyy"), -1);
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
      let group = this.groupBy(this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBenhViens, pet => pet.NhomGiaDichVuKhamBenhBenhVienId);

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
    this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems[this.dichVuKhamBenhBenhVien.DichVuKhamBenhBenhVienGiaBaoHiems.length -1].DenNgayRequired = false;
  }
}
