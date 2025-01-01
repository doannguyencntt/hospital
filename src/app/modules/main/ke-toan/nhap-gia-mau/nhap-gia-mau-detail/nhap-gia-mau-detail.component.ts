import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { TrangThaiDuyetNhapKhoMau } from '../../../nhap-xuat/mau/mau.model';
import { DuyetPhieuNhapKhoMau, DuyetNhapKhoMauChiTiet } from '../nhap-gia-mau.model';

@Component({
  selector: 'app-nhap-gia-mau-detail',
  templateUrl: './nhap-gia-mau-detail.component.html',
  styleUrls: ['./nhap-gia-mau-detail.component.scss']
})
export class NhapGiaMauDetailComponent implements OnInit {

  documentype: DocumentType;
  loading: boolean = false;
  validationErrors: any;
  baseRoute: string = "/ke-toan/nhap-gia-mau";
  popupLoadingData: any;
  format: string = 'n2';
  IsDaDuyet: boolean = null;

  gridDataSource: any = {
    data: [],
    total: 0
  };
  gridColumns: any[] = [];

  validationErrorsChiTiet: any;
  trangThai : TrangThaiDuyetNhapKhoMau;
  phieuNhapKhoMau: DuyetPhieuNhapKhoMau = new DuyetPhieuNhapKhoMau();
  phieuNhapKhoMauChiTiet: DuyetNhapKhoMauChiTiet = new DuyetNhapKhoMauChiTiet();

  @ViewChild('ngaySanXuatTemplate', { static: true }) ngaySanXuatTemplate: TemplateRef<any>;
  @ViewChild('hanSuDungTemplate', { static: true }) hanSuDungTemplate: TemplateRef<any>;
  @ViewChild('donGiaNhapTemplate', { static: true }) donGiaNhapTemplate: TemplateRef<any>;
  @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
  
  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private authService: AuthService,
    private dialog: MatDialog,
    private location:Location) { }

  ngOnInit() {
    this.documentype = DocumentType.NhapKhoMau;
    this.phieuNhapKhoMau.DuyetNhapKhoMauChiTiets = new Array<DuyetNhapKhoMauChiTiet>();

    let id = this.route.snapshot.params.id;
    id = (id === undefined || id === null) ? 0 : id;
    this.getById(id);

    this.gridColumns = [
      { Field: "MaTuiMau", Title: "Mã túi máu", Width: 80 },
      { Field: "TenMauVaChePham", Title: "Chế phẩm máu", Width: 220},
      { Field: "NgaySanXuat", Title: "Ngày sản xuất", Width: 90, Template: this.ngaySanXuatTemplate },
      { Field: "HanSuDung", Title: "HSD", Width: 90, Template: this.hanSuDungTemplate },
      { Field: "DonGiaNhap", Title: "Đơn giá DV", Width: 120, Template: this.donGiaNhapTemplate},
      { Field: "DonGiaBaoHiem", Title: "Đơn giá BH", Width: 120, Template: this.donGiaBaoHiemTemplate}
    ]
  }

  getById(id: number) {
    this.showPopupLoadingData();
    this.apiService.get<DuyetPhieuNhapKhoMau>("NhapKhoMau/GetDuyetPhieuNhapKhoMau?id=" + id)
      .subscribe((resultData) => {
        if (resultData !== undefined && resultData != null) {
          this.phieuNhapKhoMau = resultData;
          this.trangThai = new TrangThaiDuyetNhapKhoMau(this.phieuNhapKhoMau.TenTrangThai, this.phieuNhapKhoMau.DuocKeToanDuyet);
          this.IsDaDuyet = this.phieuNhapKhoMau.DuocKeToanDuyet;
          if(this.IsDaDuyet == true)
          {
            this.IsDaDuyet = this.phieuNhapKhoMau.DuyetNhapKhoMauChiTiets != undefined 
                            && this.phieuNhapKhoMau.DuyetNhapKhoMauChiTiets != null 
                            && (this.phieuNhapKhoMau.DuyetNhapKhoMauChiTiets.filter(x => x.IsThanhToan).length) > 0;
          }
          this.gridDataSource.data = this.phieuNhapKhoMau.DuyetNhapKhoMauChiTiets;
          this.closePopupLoadingData();
        }
      },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
  }

  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == undefined
      || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: "200px",
        height: "90px",
        data: { Title: "Đang tải dữ liệu..." },
      });
    }

  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  clearValidateErrorOtherCallback(event: any) {
    CommonService.clearValidateErrorOtherCallback(this, event);
  }

  xuLyDuyet(isDuyet: boolean = false) {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Update)) {
      this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn chắc chắn đã nhập đúng giá cho các chế phẩm máu này không?",
          },
        })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.showPopupLoadingData();
            this.validationErrors = [];

            let mess = "Lưu";
            if (isDuyet) {
              this.phieuNhapKhoMau.DuocKeToanDuyet = true;
              mess = "Duyệt";
            }
            this.apiService.put<string>("NhapKhoMau/XuLyNhapGiaMau", this.phieuNhapKhoMau).subscribe(res => {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
              this.closePopupLoadingData();
              this.huy();
            }, err => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            })
          }
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  changeDonGia(giaNhap, dataItem)
  {
    dataItem.DonGiaBan = giaNhap;
  }

  huy(){
    this.location.back();
  }
}
