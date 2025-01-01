import { Component, OnInit,Input,ViewChild, TemplateRef, ChangeDetectorRef,Output,EventEmitter } from '@angular/core';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { GiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT,NoiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT } from '../../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-ck-tu-nguyen-sd-thuoc/giay-ck-tu-nguyen-sd-thuoc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';
import { GroupDescriptor, State,process } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GiayCkTuNguyenSdThuocPopupComponent } from './giay-ck-tu-nguyen-sd-thuoc-popup/giay-ck-tu-nguyen-sd-thuoc-popup.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GiayCamKetTuNguyenSuDungThuocMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
@Component({
  selector: 'app-giay-ck-tu-nguyen-sd-thuoc',
  templateUrl: './giay-ck-tu-nguyen-sd-thuoc.component.html',
  styleUrls: ['./giay-ck-tu-nguyen-sd-thuoc.component.scss']
})
export class GiayCkTuNguyenSdThuocComponent implements OnInit {
  giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT ={} as GiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT;
  noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT: NoiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT;
  documentType: DocumentType;
  gridColumns: any[] = [];
  dataSourceDanhSach: any = {
    data: [],
    total: 0
  };
  dataSourceDanhSachPrint: any = {
    data: [],
    total: 0
  };
  icClear= icClear;
  yeuCauTiepNhanId: number = 0;
  getNhanVienId :any ;
  validationErrors : any;
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();  
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('nhomDichVuTemplate', { static: true }) nhomDichVuTemplate: TemplateRef<any>;
  @ViewChild('tongTienGroupFooterTemplate', { static: true }) tongTienGroupFooterTemplate: TemplateRef<any>//
  @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>//
  @ViewChild('grid', { read: GridComponent, static: false }) gridChild: GridComponent;
  groups: GroupDescriptor[]=[{
    field: 'Nhom', aggregates: [{ field: 'TongTien', aggregate: 'sum' }]
  }]
 
  // groups: GroupDescriptor[] = [{ field: 'Nhom' }];
   public total(field: any) {
    switch (field) {
      case 'TongTien':
        return this.dataSourceDanhSach.reduce((sum, item) => sum + item.TongTien, 0);
    }
  };
  
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachDieuTriNoiTru;
    this.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT = new GiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT();
    this.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT = new NoiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT();
    const id: number = this.route.snapshot.params.id;
    this.yeuCauTiepNhanId = id;
    this.getNhanVienId = this.authService.getAccessUser();
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 30, Template: this.sttTemplate },
      { Field: "Nhom", Title: "Nhóm", Width: 30, Hidden: true, TemplateGroupHeader: this.nhomDichVuTemplate},
      { Field: "TenDichVu", Title: "Tên dịch vụ kỹ thuật, thuốc , vật tư y tế", Width: 120}, // ,Template:this.tenDichVuTemplate
      { Field: "SoLuong", Title: "Số lượng", Width: 50,Template: this.soLuongTemplate},
      { Field: "DonGiaDisplay", Title: "Đơn giá", Width: 80},
      { Field: "TongTienDisplay", Title: "Tổng tiền", Width: 80,TemplateGroupFooter: this.tongTienGroupFooterTemplate},
    ];
    this.getData();
  }
  // tenDichVu(event:any){
  //   if(event != null)
  //   {
  //     let data : string ="";
  //    data = this.replaceAll(event, "<span style='text-transform: uppercase;font-weight: bold;'>",'');
  //    data = this.replaceAll(event, "</span>",'');
  //    return data;
  //   }
  // }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
  
  changeSelect(event)
  {
    if(event == true)
    {
      this.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.HoTen = null;
    }
  }
  getData(){
    var self = this;
    this.validationErrors =[];
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinGiayCamKetTuNguyenSuDungThuocDVNgoaiBHYT?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT = thongTinHoSo;
          self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.SelectBenhNhanHoacNguoiNha = thongTinHoSo.SelectBenhNhanHoacNguoiNha;
          self.dataSourceDanhSach.data = thongTinHoSo.DanhSachArr;
          self.dataSourceDanhSach.toltal = thongTinHoSo.DanhSachArr.length;
          self.dataSourceDanhSachPrint.data = thongTinHoSo.DanhSachArrPrint;
          self.gridChild.setDataSource();
          self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.Id);
          self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.FileChuKy = [...result.ListFile];
         
        }
        else {
          self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT = new GiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT();

          let nhanVienThucHienId = self.getNhanVienId.Id;
          self.apiService.post<any>("DieuTriNoiTru/GriDaTaSourceAllDichVuDaKhamNoiTru?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {

              self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.TaiKhoanDangNhap = result.TenNhanVien;
              self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.NgayThucHien = result.NgayThucHien;
              self.dataSourceDanhSach.data = result.DanhSachDichVuKyThuatThuocVatTuList;
              self.dataSourceDanhSach.total = result.DanhSachDichVuKyThuatThuocVatTuList.length;
              result.DanhSachDichVuKyThuatThuocVatTuList.forEach(val => self.dataSourceDanhSachPrint.data.push(Object.assign({}, val)));
              self.gridChild.setDataSource();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  Huy(){
    var self = this;
    this.validationErrors =[];
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinGiayCamKetTuNguyenSuDungThuocDVNgoaiBHYT?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT = thongTinHoSo;
          self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.SelectBenhNhanHoacNguoiNha = thongTinHoSo.SelectBenhNhanHoacNguoiNha;
          self.dataSourceDanhSach.data = thongTinHoSo.DanhSachArr;
          self.dataSourceDanhSach.toltal = thongTinHoSo.DanhSachArr.length;
          self.dataSourceDanhSachPrint.data = thongTinHoSo.DanhSachArrPrint;
          self.gridChild.setDataSource();
          self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.Id);
          self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.FileChuKy = [...result.ListFile];
         
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  InPhieu(){
    var self = this;
    this.validationErrors =[];
    let dataIn = {
        Hosting: window.location.protocol + "//" + window.location.host,
        NoiTruHoSoKhacId: this.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.Id,
        YeuCauTiepNhanId: this.yeuCauTiepNhanId,
        LoaiHoSoDieuTriNoiTru: 32,
    }
    if (self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.Id == 0 || dataIn.NoiTruHoSoKhacId == 0) {
        self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có in phiếu khai thác tiền sử bệnh này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
              self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.DanhSachArr = self.dataSourceDanhSach.data;
              self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.DanhSachArrPrint = self.dataSourceDanhSachPrint.data;
              const thongTinHoSo = JSON.stringify(this.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT);
              self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
              self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.FileChuKy = self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.FileChuKy;
              self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.LoaiHoSoDieuTriNoiTru = 32;
              self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.ThongTinHoSo = thongTinHoSo;
                self.apiService.post<any>("DieuTriNoiTru/LuuPhieuGiayCamKetTuNguyenSuDungThuoc", self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT).subscribe(
                    (result) => {
                        if(result != undefined && result != null && result != "")
                        {
                        dataIn.NoiTruHoSoKhacId =result.Id;
                       
                        if(result.Id != undefined)
                        {
                          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                          self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.Id = result.Id;
                        }
                        self.Huy();
                        self.apiService.post<any>("DieuTriNoiTru/InPhieuGiayCamKetTuNguyenSuDungThuoc", dataIn).subscribe(
                            (result) => {
                                self.dialog.open(GiayCkTuNguyenSdThuocPopupComponent, {
                                    disableClose: true,
                                    width: '1000px',
                                    data: { Model: result }
                                }).afterClosed().subscribe(() => {
                                });
                            },
                            (err: ApiError) => {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                }
                            });
                        }
                    },
                    (err: ApiError) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
            }
        },
            (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
    }
    else{
    self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu khai thác tiền sử bệnh này không ?",
        },
    }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.DanhSachArr = self.dataSourceDanhSach.data;
          self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.DanhSachArrPrint = self.dataSourceDanhSachPrint.data;
          const thongTinHoSo = JSON.stringify(self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT);
          self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
          self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.FileChuKy = self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.FileChuKy;
          self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.LoaiHoSoDieuTriNoiTru = 32;
          self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.ThongTinHoSo = thongTinHoSo;
            self.apiService.post<any>("DieuTriNoiTru/LuuPhieuGiayCamKetTuNguyenSuDungThuoc", self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT).subscribe(
                (result) => {
                    if(result)
                    {
                    if(result.Id == undefined)
                        {
                          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                          self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.Id = result;
                        }
                    self.Huy();
                    self.apiService.post<any>("DieuTriNoiTru/InPhieuGiayCamKetTuNguyenSuDungThuoc", dataIn).subscribe(
                        (result) => {
                            self.dialog.open(GiayCkTuNguyenSdThuocPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: { Model: result }
                            }).afterClosed().subscribe(() => {
                            });
                        },
                        (err: ApiError) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                    }
                },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
        } 
    },
        (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }
  }
  validation(){
    const validationResult = [];
        if (!this.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.SelectBenhNhanHoacNguoiNha == true) {
          if (!this.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.HoTen) {
            const validationItem = {
              Field: 'HoTen',
              Message: GiayCamKetTuNguyenSuDungThuocMessage.MessageHoTenNotEmpty
          };
          validationResult.push(validationItem);
          }
           
        }
        return validationResult;
  }
  Luu(){
    var self = this;
    self.validationErrors =[];
    self.validationErrors = this.validation();
    if (this.validationErrors && this.validationErrors.some(x => x)) {
      return;
    }
    self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.DanhSachArr = self.dataSourceDanhSach.data;
    self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.DanhSachArrPrint = self.dataSourceDanhSachPrint.data;
    const thongTinHoSo = JSON.stringify(self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT);
    self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.FileChuKy = self.giayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.FileChuKy;
    self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.LoaiHoSoDieuTriNoiTru = 32;
    self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.ThongTinHoSo = thongTinHoSo;

    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu lại giấy cam kết tự nguyện sử dụng thuốc này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {

        self.apiService.post<any>("DieuTriNoiTru/LuuPhieuGiayCamKetTuNguyenSuDungThuoc", self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT).subscribe(
          (result) => {
            if(result.Id == undefined)
            {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
              self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.Id = result;
            }
            if(result.Id != undefined)
            {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              self.noiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT.Id = result.Id;
            }
           
            self.Huy();
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
      } 
    },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
}
