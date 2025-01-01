import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MarketingNhapKhoChiTiet, DanhSachCanThemMarketing } from '../../marketing.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Location } from '@angular/common';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
@Component({
  selector: 'app-marketing-nhap-kho-chi-tiet',
  templateUrl: './marketing-nhap-kho-chi-tiet.component.html',
  styleUrls: ['./marketing-nhap-kho-chi-tiet.component.scss']
})
export class MarketingNhapKhoChiTietComponent implements OnInit {

  documentType: DocumentType;
  nhapKhoChiTietMarketing: MarketingNhapKhoChiTiet;
  danhSachCanThemMarketing: DanhSachCanThemMarketing;
  validationErrors: any;
  gridColumns: any[] = [];
  gridDataSource: any = {};
  additionString: any = null;
  popupLoadingData: any;
  TongCong: number = 0;
  @ViewChild('gridCreate', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('actionemplate', { static: true }) actionemplate: TemplateRef<any>;
  @ViewChild('TongCongThanhTienFooter', { static: true }) TongCongThanhTienFooter: TemplateRef<any>;
  @ViewChild('TongCongFooter', { static: true }) TongCongFooter: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('giaNhapTemplate', { static: true }) giaNhapTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit() {
    this.nhapKhoChiTietMarketing = new MarketingNhapKhoChiTiet();
    this.danhSachCanThemMarketing = new DanhSachCanThemMarketing();
    this.documentType = DocumentType.NhapKhoMarketing;
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.additionString = id;
      this.getById(id);
    }
    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 20, Template: this.STTTemplate },
      { Field: "NhaCungCap", Title: "Nhà cung cấp", Width: 250 },
      { Field: "QuaTang", Title: "Nhà cung cấp", Width: 250 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
      { Field: "SoLuong", Title: "SL", Width: 120, Template: this.soLuongTemplate },
      { Field: "GiaNhap", Title: "Giá nhập", Width: 120, TemplateFooter: this.TongCongFooter, Template: this.giaNhapTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 120, TemplateFooter: this.TongCongThanhTienFooter, Template: this.thanhTienTemplate },
      { Field: "", Title: "", Width: 80, Template: this.actionemplate }
    ];
  }
  getById(Id) {
    var self = this;
    this.nhapKhoChiTietMarketing.Id = Id;
    self.apiService.get<MarketingNhapKhoChiTiet>("Marketing/GetThongTinNhapKho?id=" + this.nhapKhoChiTietMarketing.Id).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          console.log("data:", resultData)
          this.nhapKhoChiTietMarketing = resultData;
          this.gridDataSource = {
            data: resultData.DanhSachQuaTangDuocThemList,
            total: resultData.DanhSachQuaTangDuocThemList.length
          };
          this.TongCong = resultData.DanhSachQuaTangDuocThemList.reduce((sum, item) => sum + item.ThanhTien, 0);
          this.setDataGridView();
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  setDataGridView() {
    this.gridChild.gridDataSource = this.gridDataSource;

    if (this.gridChild !== undefined)
      this.gridChild.setDataSource();
  }

  Them() {
    // if (this.nhapKhoChiTietMarketing.NhaCungCap != null &&
    //   this.nhapKhoChiTietMarketing.QuaTang != null &&
    //   this.nhapKhoChiTietMarketing.DonViTinh != null &&
    //   this.nhapKhoChiTietMarketing.SoLuong != null &&
    //   this.nhapKhoChiTietMarketing.GiaNhap != null &&
    //   this.nhapKhoChiTietMarketing.ThanhTien != null) {
    //   this.danhSachCanThemMarketing.NhaCungCap = this.nhapKhoChiTietMarketing.NhaCungCap;
    //   this.danhSachCanThemMarketing.QuaTang = this.nhapKhoChiTietMarketing.QuaTang;
    //   this.danhSachCanThemMarketing.DonViTinh = this.nhapKhoChiTietMarketing.DonViTinh;
    //   this.danhSachCanThemMarketing.SoLuong = this.nhapKhoChiTietMarketing.SoLuong;
    //   this.danhSachCanThemMarketing.GiaNhap = this.nhapKhoChiTietMarketing.GiaNhap;
    //   this.danhSachCanThemMarketing.ThanhTien = this.nhapKhoChiTietMarketing.ThanhTien;
    //   this.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList.push(this.danhSachCanThemMarketing);
    //   this.Huy();
    //   this.setDataGridView();
    // }
    // else {
    //   // validated
    // }
  }
  Huy() {
    // this.nhapKhoChiTietMarketing.NhaCungCap = null;
    // this.nhapKhoChiTietMarketing.QuaTang = null;
    // this.nhapKhoChiTietMarketing.DonViTinh = null;
    // this.nhapKhoChiTietMarketing.SoLuong = null;
    // this.nhapKhoChiTietMarketing.GiaNhap = null;
    // this.nhapKhoChiTietMarketing.ThanhTien = null;
  }
  Luu() {

  }
  modelChangeSoLuongMua(event, dataItem) {
    for (let index = 0; index < this.gridDataSource.data.length; index++) {
      if (this.gridDataSource.data[index].Id === dataItem.Id) {
        this.gridDataSource.data[index].ThanhTien = event * this.gridDataSource.data[index].GiaNhap;
      }
      this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
    }
  }
  modelChangeGiaNhapMua(event, dataItem) {
    for (let index = 0; index < this.gridDataSource.data.length; index++) {
      if (this.gridDataSource.data[index].Id === dataItem.Id) {
        this.gridDataSource.data[index].ThanhTien = event * this.gridDataSource.data[index].SoLuong;
      }
      this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
    }
  }
  ChangeQuaTang(event) {
    if (event != null) {
      var self = this;
      self.apiService.post<any>("Marketing/GetDonViTinhQuaTang?idQuaTang=" + event.KeyId).subscribe(
        resultData => {
          console.log("resultData", resultData)
          this.nhapKhoChiTietMarketing.DonViTinh = resultData;
        });
    }
  }
  modelChangeGiaNhap(event) {
    // this.nhapKhoChiTietMarketing.GiaNhap = event;
    // if (this.nhapKhoChiTietMarketing.SoLuong != 0) {
    //   this.nhapKhoChiTietMarketing.ThanhTien = this.nhapKhoChiTietMarketing.SoLuong * this.nhapKhoChiTietMarketing.GiaNhap;
    // }
  }
  modelChangeSoLuong(event) {
    // this.nhapKhoChiTietMarketing.SoLuong = event;
    // if (this.nhapKhoChiTietMarketing.GiaNhap != 0) {
    //   this.nhapKhoChiTietMarketing.ThanhTien = this.nhapKhoChiTietMarketing.SoLuong * this.nhapKhoChiTietMarketing.GiaNhap;
    // }
  }
  Xoa(event) {
    console.log(event)
    if (event != undefined && event != null) {
      this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn xóa quà tặng này không ?",
          },
      }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            this.gridDataSource.data.splice( this.gridDataSource.data.findIndex((x: any) => x == event), 1);
            this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            this.setDataGridView();
              this.notificationService.showSuccess(
                  "Xóa thành công"
              );
          }
      })};
  }
}
