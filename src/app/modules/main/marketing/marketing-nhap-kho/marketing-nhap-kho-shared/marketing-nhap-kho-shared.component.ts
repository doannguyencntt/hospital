import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Location } from '@angular/common';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import {  MarketingNhapKhoChiTiet, DanhSachCanThemMarketing,ThongTinNhanVienLogin } from '../../marketing.model';
@Component({
  selector: 'app-marketing-nhap-kho-shared',
  templateUrl: './marketing-nhap-kho-shared.component.html',
  styleUrls: ['./marketing-nhap-kho-shared.component.scss']
})
export class MarketingNhapKhoSharedComponent implements OnInit {
  icDelete = icDelete;
  documentType: DocumentType;
  //nhapKhoChiTietMarketing = {} as MarketingNhapKhoChiTiet;
  nhapKhoChiTietMarketing: MarketingNhapKhoChiTiet;
  danhSachCanThemMarketing: DanhSachCanThemMarketing;
  danhSachMarketing: DanhSachCanThemMarketing[] = [];

  validationErrors: any;
  validationErrorsChiTiet: any[]=[];
  validationErrorsListChiTiet : any;
  gridColumns: any[] = [];
  gridDataSource: any = {};
  additionString: any = null;
  popupLoadingData: any;
  TongCong: number = 0;
  IdNhapKho: number = 0;
  getNhanVienId : any;
  isSelectingItem: boolean = false;
  @ViewChild('gridCreate', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('actionemplate', { static: true }) actionemplate: TemplateRef<any>;
  @ViewChild('TongCongThanhTienFooter', { static: true }) TongCongThanhTienFooter: TemplateRef<any>;
  @ViewChild('TongCongFooter', { static: true }) TongCongFooter: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('giaNhapTemplate', { static: true }) giaNhapTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('marketingCombobox', { static: false }) marketingCombobox: ComboboxComponent;
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private location: Location,
    private cdRef: ChangeDetectorRef
  ) { }
  ngOnInit() {
    this.nhapKhoChiTietMarketing = new MarketingNhapKhoChiTiet();
    this.documentType = DocumentType.NhapKhoMarketing;
    const id: number = this.route.snapshot.params.id;
    this.validationErrorsChiTiet = [];
    if (id !== undefined && id !== null) {
      this.additionString = id;
      this.IdNhapKho = id;
      this.getById(id);
    }
    else{
      this.getNhanVienId = this.authService.getAccessUser();
      this.nhapKhoChiTietMarketing.NguoiNhapId =this.getNhanVienId.AccessToken.Id;
      this.nhapKhoChiTietMarketing.LoaiNguoiGiao = 1 ;
      this.nhapKhoChiTietMarketing.NgayNhap = new Date();
      this.apiService.get<ThongTinNhanVienLogin>("Marketing/GetThongTinNhanVien?nhanVienId=" +  this.getNhanVienId.AccessToken.Id).subscribe(
        resultData => {
          this.nhapKhoChiTietMarketing.NguoiNhapId = resultData.KeyId;
          this.nhapKhoChiTietMarketing.TenNguoiNhap = resultData.DisplayName;
          this.nhapKhoChiTietMarketing.NgayNhap = new Date();
        });
      
    }
    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 20, Template: this.STTTemplate },
      { Field: "NhaCungCap", Title: "Nhà cung cấp", Width: 250 },
      { Field: "QuaTang", Title: "Quà tặng", Width: 250 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
      { Field: "SoLuongNhap", Title: "SL", Width: 120, Template: this.soLuongTemplate },
      { Field: "DonGiaNhap", Title: "Giá nhập", Width: 120, TemplateFooter: this.TongCongFooter, Template: this.giaNhapTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 120, TemplateFooter: this.TongCongThanhTienFooter, Template: this.thanhTienTemplate },
      { Field: "Action", Title: "", Width: 80, Template: this.actionemplate }
    ];
  }
  ChangLoaiNguoiGiao(event)
  {
    if(event == 2)
    {
      this.nhapKhoChiTietMarketing.TenNguoiGiao = "";
    }
  }
  getById(Id) {
    var self = this;
    this.nhapKhoChiTietMarketing.Id = Id;
    this.IdNhapKho = Id;
    self.apiService.get<MarketingNhapKhoChiTiet>("Marketing/GetThongTinNhapKho?id=" + this.nhapKhoChiTietMarketing.Id).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          console.log("data:", resultData)
          this.nhapKhoChiTietMarketing = resultData;
          let index = 1;
          resultData.DanhSachQuaTangDuocThemList.forEach(element => {
              element.STT = index ++;
            });
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
    
    this.marketingCombobox.focusManual();
    var self = this;
    self.validationErrorsChiTiet =[];
    this.cdRef.detectChanges();
    let kiemTraThem : boolean = true;
    if (self.nhapKhoChiTietMarketing.NhaCungCap == null || self.nhapKhoChiTietMarketing.NhaCungCap == "") {
      kiemTraThem = false;
      self.validationErrorsChiTiet.push({ Message: 'Nhà cung cấp yêu cầu nhập.', Field: 'NhaCungCap' });
    }
    if (self.nhapKhoChiTietMarketing.QuaTangId == undefined|| self.nhapKhoChiTietMarketing.QuaTangId == null || self.nhapKhoChiTietMarketing.QuaTangId === 0) {
      kiemTraThem = false;
      self.validationErrorsChiTiet.push({ Message: 'Quà tặng yêu cầu nhập', Field: 'QuaTangId' });
    }
    if (self.nhapKhoChiTietMarketing.SoLuongNhap == null || self.nhapKhoChiTietMarketing.SoLuongNhap === 0) {
      kiemTraThem = false;
      self.validationErrorsChiTiet.push({ Message: 'Số lượng yêu cầu nhập', Field: 'SoLuongNhap' });
    }
    if (self.nhapKhoChiTietMarketing.DonGiaNhap == null || self.nhapKhoChiTietMarketing.DonGiaNhap === 0) {
      kiemTraThem = false;
      self.validationErrorsChiTiet.push({ Message: 'Đơn giá nhập yêu cầu nhập', Field: 'DonGiaNhap' });
    }
    if(self.gridDataSource.data != null){
     if(self.nhapKhoChiTietMarketing.NhaCungCap != null && self.nhapKhoChiTietMarketing.QuaTangId != null)
     {
       console.log("["+self.nhapKhoChiTietMarketing.NhaCungCap.trim()+"]");
       console.log("["+self.nhapKhoChiTietMarketing.QuaTangId+"]");
      let indexNhaCungCap = self.gridDataSource.data.findIndex(x=>x.NhaCungCap == self.nhapKhoChiTietMarketing.NhaCungCap.trim());
      let indexQuaTang = self.gridDataSource.data.findIndex(x=>x.QuaTangId == self.nhapKhoChiTietMarketing.QuaTangId);
      if(indexNhaCungCap !== -1 && indexQuaTang !== -1)
      {
        kiemTraThem = false;
        self.validationErrorsChiTiet.push({ Message: 'Nhà cung cấp đã nhập quà tặng này.', Field: 'NhaCungCap' });
      }
     }
    }
    if(self.nhapKhoChiTietMarketing.NhaCungCap !=null && self.nhapKhoChiTietMarketing.QuaTangId !=null && self.gridDataSource.data == null)
    {
      self.apiService.post<any>("Marketing/ValidateNhaCungCap?nhaCungCap=" + self.nhapKhoChiTietMarketing.NhaCungCap + "&quaTangId=" + self.nhapKhoChiTietMarketing.QuaTangId).subscribe(
        resultData => {
          
              if(resultData == true)
              {
               kiemTraThem = false
                self.validationErrorsChiTiet.push({ Message: 'Nhà cung cấp đã nhập quà tặng này.', Field: 'NhaCungCap' });
              }
        });
     
    }
      if( kiemTraThem == true)
      {
        let tenQuaTang = "";
        self.apiService.post<any>("Marketing/GetTenQuaTang?idQuaTang=" + self.nhapKhoChiTietMarketing.QuaTangId).subscribe(
          resultData => {
            tenQuaTang = resultData;
            let data: DanhSachCanThemMarketing= {
              SoLuongDaXuat: 0,
              NhapKhoQuaTangId: self.IdNhapKho,
              QuaTangId: self.nhapKhoChiTietMarketing.QuaTangId,
              QuaTang: tenQuaTang,
              NhaCungCap: self.nhapKhoChiTietMarketing.NhaCungCap,
              DonViTinh: self.nhapKhoChiTietMarketing.DonViTinh,
              SoLuongNhap: self.nhapKhoChiTietMarketing.SoLuongNhap,
              DonGiaNhap: self.nhapKhoChiTietMarketing.DonGiaNhap,
              ThanhTien: self.nhapKhoChiTietMarketing.ThanhTien, 
              Id: 0,
              STT:0
            };
            self.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList.push(data);
           
            let index = 1;
            self.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList.forEach(element => {
              element.STT = index ++;
            });
            self.gridDataSource = {
              data: self.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList,
              total: self.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList.length
            };
            this.TongCong = self.nhapKhoChiTietMarketing.DanhSachQuaTangDuocThemList.reduce((sum, item) => sum + item.ThanhTien, 0);
            self.setDataGridView();
            self.Huy();
          });
      }
  }
  Huy() {
    this.validationErrorsChiTiet =[];
    this.validationErrors =[];
    this.nhapKhoChiTietMarketing.NhaCungCap = null;
    this.nhapKhoChiTietMarketing.QuaTangId = null;
    this.nhapKhoChiTietMarketing.QuaTang = null;
    this.nhapKhoChiTietMarketing.DonViTinh = null;
    this.nhapKhoChiTietMarketing.SoLuongNhap = null;
    this.nhapKhoChiTietMarketing.DonGiaNhap = null;
    this.nhapKhoChiTietMarketing.ThanhTien = null;
  }
  Luu() {

  }
  modelChangeSoLuongMua(event, dataItem) {
    if(event === 0 || event === null)
    {
      for (let index = 0; index < this.gridDataSource.data.length; index++) {
        if (this.gridDataSource.data[index].STT === dataItem.STT) {
          this.gridDataSource.data[index].ThanhTien = 0;
        }
        this.TongCong = 0;
      }
    }
    else{
      for (let index = 0; index < this.gridDataSource.data.length; index++) {
          if (this.gridDataSource.data[index].STT === dataItem.STT) {
            this.gridDataSource.data[index].ThanhTien = event * this.gridDataSource.data[index].DonGiaNhap;
          }
          this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
      }
    }
  }
  modelChangeGiaNhapMua(event, dataItem) {
    if(event == 0 || event === null)
    {
      for (let index = 0; index < this.gridDataSource.data.length; index++) {
        if (this.gridDataSource.data[index].STT === dataItem.STT) {
          this.gridDataSource.data[index].ThanhTien = 0;
        }
        this.TongCong = 0;
      }
    }
   else{
    for (let index = 0; index < this.gridDataSource.data.length; index++) {
      if (this.gridDataSource.data[index].STT === dataItem.STT) {
        this.gridDataSource.data[index].ThanhTien = event * this.gridDataSource.data[index].SoLuongNhap;
      }
      this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
    }
  }
  }
  ChangeQuaTang(event) {
    if (event != null) {
      var self = this;
      self.apiService.post<any>("Marketing/GetDonViTinhQuaTang?idQuaTang=" + event.KeyId).subscribe(
        resultData => {
          this.nhapKhoChiTietMarketing.DonViTinh = resultData;
        });
    }
    else{
      this.nhapKhoChiTietMarketing.DonViTinh = "";
    }
  }
  modelChangeGiaNhap(event) {
    if(event == 0)
    {
      this.validationErrors =[];
      this.validationErrors.push({ Message: 'Đơn giá không hợp lệ', Field: 'DonGiaNhap' });
    }
    else{
      this.nhapKhoChiTietMarketing.DonGiaNhap = event;
      if (this.nhapKhoChiTietMarketing.SoLuongNhap != 0) {
        this.nhapKhoChiTietMarketing.ThanhTien = this.nhapKhoChiTietMarketing.SoLuongNhap * this.nhapKhoChiTietMarketing.DonGiaNhap;
      }
    }
   
  }
  modelChangeSoLuong(event) {
    if(event == 0)
    {
      this.validationErrors =[];
      this.validationErrors.push({ Message: 'Số lượng không hợp lệ', Field: 'SoLuongNhap' });
    }
    else{
      this.nhapKhoChiTietMarketing.SoLuongNhap = event;
      if (this.nhapKhoChiTietMarketing.DonGiaNhap != 0) {
        this.nhapKhoChiTietMarketing.ThanhTien = this.nhapKhoChiTietMarketing.SoLuongNhap * this.nhapKhoChiTietMarketing.DonGiaNhap;
      }
    }
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
          if(event.SoLuongDaXuat != 0)
          {
            this.notificationService.showError(
              "Số lượng quà tặng đã được xuất"
            );
          }
          else{
            this.gridDataSource.data.splice(this.gridDataSource.data.findIndex((x: any) => x == event), 1);
            this.TongCong = this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            this.setDataGridView();
            this.notificationService.showSuccess(
              "Xóa thành công"
            );
          }
        }
      })
    };
  }
  NhanVienTaiBenhVien(event)
  {
    if(event != undefined || event != null)
    {
      this.nhapKhoChiTietMarketing.TenNguoiGiao = event.DisplayName;
      this.nhapKhoChiTietMarketing.NguoiGiaoId = event.KeyId;
    }
    else{
      this.nhapKhoChiTietMarketing.TenNguoiGiao = null;
      this.nhapKhoChiTietMarketing.NguoiGiaoId = null;
    }
  }
  getSharedData() {
    let kiemtraSave : boolean = true;
    this.validationErrorsChiTiet =[];
    if(this.IdNhapKho == null)
    {
      this.nhapKhoChiTietMarketing.Id = 0;
    }
    else{
      this.nhapKhoChiTietMarketing.Id = this.IdNhapKho;
    }
    this.nhapKhoChiTietMarketing.ThanhTien = 0;
    if(kiemtraSave == true)
    {
      return this.nhapKhoChiTietMarketing;
    }
  }
  onKeyEnterAddItem(event: any) {
    if (event.key == "Enter" && !this.isSelectingItem) {
        if (this.isSelectingItem != true) {

            this.Them();
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

            this.Them();
        }
        else {
            this.isSelectingItem = false;
        }
    }
}
}
