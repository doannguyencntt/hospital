import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ToaThuocMau, ToaThuocMauChiTiet } from '../toa-thuoc-mau.model';
import icRemove from '@iconify/icons-ic/delete';
import icAdd from '@iconify/icons-ic/twotone-add';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-toa-thuoc-mau-shared',
  templateUrl: './toa-thuoc-mau-shared.component.html',
  styleUrls: ['./toa-thuoc-mau-shared.component.scss']
})
export class ToaThuocMauSharedComponent implements OnInit {
  toaMau: ToaThuocMau;
  toaMauChiTiet: ToaThuocMauChiTiet;
  queryInfoICD: LookupQueryInfo = new LookupQueryInfo();
  queryInfoDuocPham: LookupQueryInfo = new LookupQueryInfo();
  validationErrors: any;
  isCreate = true;
  icAdd = icAdd;
  icRemove = icRemove;
  format: string = 'n2';
  thoiGianDonThuocDataSource: any;
  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.toaMau = new ToaThuocMau();
    this.toaMauChiTiet = new ToaThuocMauChiTiet();
    this.getThoiGianDonThuoc();
    this.toaMau.ToaThuocMauChiTiets.push(this.toaMauChiTiet);
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
    this.toaMau.IsDisabled = false;
  }
  getById(id: number) {
    this.baseService.getById<ToaThuocMau>(id).subscribe(resultData => {
      this.toaMau = resultData;
      this.isDisableSoLuongChinhSua();
    });
  }
  getSharedData() {
    return this.toaMau;
  }

  themToaMauChiTiet() {
    this.toaMau.ToaThuocMauChiTiets.push(new ToaThuocMauChiTiet());
  }

  isDisableSoLuongChinhSua() {
    //console.log("this dataTOaMau: ", this.toaMau)
    if (this.toaMau.ToaThuocMauChiTiets != []) {
      for (let i = 0; i < this.toaMau.ToaThuocMauChiTiets.length; i++) {
        if (
          (this.toaMau.ToaThuocMauChiTiets[i].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[i].DungTruaDisplay == "" && this.toaMau.ToaThuocMauChiTiets[i].DungChieuDisplay == "" && this.toaMau.ToaThuocMauChiTiets[i].DungToiDisplay == "")
          || (this.toaMau.ToaThuocMauChiTiets[i].DungSangDisplay == null && this.toaMau.ToaThuocMauChiTiets[i].DungTruaDisplay == null && this.toaMau.ToaThuocMauChiTiets[i].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[i].DungToiDisplay == null)
          || (this.toaMau.ToaThuocMauChiTiets[i].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[i].DungTruaDisplay == null && this.toaMau.ToaThuocMauChiTiets[i].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[i].DungToiDisplay == null)
          || (this.toaMau.ToaThuocMauChiTiets[i].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[i].DungTruaDisplay == "" && this.toaMau.ToaThuocMauChiTiets[i].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[i].DungToiDisplay == null)
          || (this.toaMau.ToaThuocMauChiTiets[i].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[i].DungTruaDisplay == "" && this.toaMau.ToaThuocMauChiTiets[i].DungChieuDisplay == "" && this.toaMau.ToaThuocMauChiTiets[i].DungToiDisplay == null)
        ) {
          this.toaMau.ToaThuocMauChiTiets[i].IsDisabled = false;
        }
        else {
          this.toaMau.ToaThuocMauChiTiets[i].IsDisabled = true;
        }
      }
    }

  }

  getThoiGianDonThuoc() {
    this.apiService.get<Array<string>>("KhamBenh/ThoiGianDonThuoc").subscribe(
      resultData => {
        this.thoiGianDonThuocDataSource = resultData;
      }
    )
  }
  xoaToaMauChiTiet(viTri: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        if (this.toaMau.ToaThuocMauChiTiets.length > 1) {
          this.toaMau.ToaThuocMauChiTiets.splice(viTri, 1);
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        }
      }
    });
  }
  onValueChange(buoi: any, index: number) {
    if (buoi == "Sang" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field == "ToaThuocMauChiTiets[" + index.toString() + "].SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    }
    else if (buoi == "Trua" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field == "ToaThuocMauChiTiets[" + index.toString() + "].SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    }
    else if (buoi == "Chieu" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field == "ToaThuocMauChiTiets[" + index.toString() + "].SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    }
    else if (buoi == "Toi" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field == "ToaThuocMauChiTiets[" + index.toString() + "].SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    } else {
      return null;
    }
  }

  tinhTongSoLuong(soNgay: number, dungSang: string, dungTrua: string, dungChieu: string, dungToi: string) {
    let sang: number, trua: number, chieu: number, toi: number, sum: number, result: number;
    if (dungSang == "" || dungSang == null || dungSang == undefined) {
      sang = 0;
    }
    else {
      sang = CommonService.FormatStringFractionToFloat(dungSang);
    }

    if (dungTrua == "" || dungTrua == null || dungTrua == undefined) {
      trua = 0;
    }
    else {
      trua = CommonService.FormatStringFractionToFloat(dungTrua);
    }

    if (dungChieu == "" || dungChieu == null || dungChieu == undefined) {
      chieu = 0;
    }
    else {
      chieu = CommonService.FormatStringFractionToFloat(dungChieu);
    }

    if (dungToi == "" || dungToi == null || dungToi == undefined) {
      toi = 0;
    }
    else {
      toi = CommonService.FormatStringFractionToFloat(dungToi);
    }

    sum = sang + trua + chieu + toi;
    if (soNgay != null) {
      let cal = (soNgay * sum).toFixed(3);
      result = parseFloat(cal);
      return result;
    } else {
      return null;
    }
  }

  inputSoNgayDeTinhSoLuong(soNgayDung: any, index: number) {
    this.toaMau.ToaThuocMauChiTiets[index].SoLuong = this.tinhTongSoLuong(soNgayDung, this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay,
      this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay);
    if (soNgayDung != null && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field == "ToaThuocMauChiTiets[" + index.toString() + "].SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
    } else {
      return null;
    }
  }

  kiemTraNhapCacBuoiTrongNgay(input: any, buoi: any, index: number) {
    //console.log("input: ", input, ", buổi: ", buoi, ", index: ", index)
    switch (buoi) {
      case "Sang":
        if (
          (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == "")
          || (input == null && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == undefined)) {
          this.toaMau.ToaThuocMauChiTiets[index].SoLuong = this.tinhTongSoLuong(this.toaMau.ToaThuocMauChiTiets[index].SoNgayDung, input, this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay);
          return this.toaMau.ToaThuocMauChiTiets[index].IsDisabled = false;
        }
        else {
          this.toaMau.ToaThuocMauChiTiets[index].SoLuong = this.tinhTongSoLuong(this.toaMau.ToaThuocMauChiTiets[index].SoNgayDung, input, this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay);
          return this.toaMau.ToaThuocMauChiTiets[index].IsDisabled = true;
        }
      case "Trua":
        if (
          (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == "")
          || (input == null && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == undefined)
        ) {
          this.toaMau.ToaThuocMauChiTiets[index].SoLuong = this.tinhTongSoLuong(this.toaMau.ToaThuocMauChiTiets[index].SoNgayDung, this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay, input, this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay);
          return this.toaMau.ToaThuocMauChiTiets[index].IsDisabled = false;
        }
        else {
          this.toaMau.ToaThuocMauChiTiets[index].SoLuong = this.tinhTongSoLuong(this.toaMau.ToaThuocMauChiTiets[index].SoNgayDung, this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay, input, this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay);
          return this.toaMau.ToaThuocMauChiTiets[index].IsDisabled = true;
        }
      case "Chieu":
        if (
          (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == "")
          || (input == null && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == null)
          || (input == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay == undefined)
        ) {
          this.toaMau.ToaThuocMauChiTiets[index].SoLuong = this.tinhTongSoLuong(this.toaMau.ToaThuocMauChiTiets[index].SoNgayDung, this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay, input, this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay);
          return this.toaMau.ToaThuocMauChiTiets[index].IsDisabled = false;
        }
        else {
          this.toaMau.ToaThuocMauChiTiets[index].SoLuong = this.tinhTongSoLuong(this.toaMau.ToaThuocMauChiTiets[index].SoNgayDung, this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay, input, this.toaMau.ToaThuocMauChiTiets[index].DungToiDisplay);
          return this.toaMau.ToaThuocMauChiTiets[index].IsDisabled = true;
        }
      case "Toi":
        if (
          (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == "")
          || (input == null && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == null)
          || (input == "" && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == "" && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == null && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == null)
          || (input == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay == undefined && this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay == undefined)
        ) {
          this.toaMau.ToaThuocMauChiTiets[index].SoLuong = this.tinhTongSoLuong(this.toaMau.ToaThuocMauChiTiets[index].SoNgayDung, this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay, input);
          return this.toaMau.ToaThuocMauChiTiets[index].IsDisabled = false;
        }
        else {
          this.toaMau.ToaThuocMauChiTiets[index].SoLuong = this.tinhTongSoLuong(this.toaMau.ToaThuocMauChiTiets[index].SoNgayDung, this.toaMau.ToaThuocMauChiTiets[index].DungSangDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungTruaDisplay, this.toaMau.ToaThuocMauChiTiets[index].DungChieuDisplay, input);
          return this.toaMau.ToaThuocMauChiTiets[index].IsDisabled = true;
        }
    }
  }
}
