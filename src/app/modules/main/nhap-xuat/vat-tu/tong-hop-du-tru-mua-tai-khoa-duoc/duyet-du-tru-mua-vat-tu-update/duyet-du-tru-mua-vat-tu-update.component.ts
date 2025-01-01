import { Component, OnInit ,ViewChild} from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
// import { TongHopDuTruMuaTaiKhoaDuoc ,TrangThaiDuyet,DuTruMuaVatTuKhoDuocChiTietList} from '../tong-hop-du-tru-mua-tai-khoa-duoc.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { element } from 'protractor';
import { TongHopDuTruMuaTaiKhoaDuoc ,TrangThaiDuyet,DuTruMuaVatTuKhoDuocChiTietList} from '../tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc.model';
import { DuyetDuTruMuaVatTuSharedComponent } from '../duyet-du-tru-mua-vat-tu-shared/duyet-du-tru-mua-vat-tu-shared.component';
import { TuChoiDuyetVatTuPopupComponent } from '../tu-choi-duyet-vat-tu-popup/tu-choi-duyet-vat-tu-popup.component';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duyet-du-tru-mua-vat-tu-update',
    templateUrl: './duyet-du-tru-mua-vat-tu-update.component.html',
    styleUrls: ['./duyet-du-tru-mua-vat-tu-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class DuyetDuTruMuaVatTuUpdateComponent implements OnInit {
    @ViewChild(DuyetDuTruMuaVatTuSharedComponent, {static: true}) shared;
    thongTinDuTruMuaVatTuTaiKhoaDuoc :TongHopDuTruMuaTaiKhoaDuoc;
    trangThai: TrangThaiDuyet;
    isShow: boolean = false;
    validationErrors: any;
    loading: boolean = false;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    constructor(
      private authService: AuthService,
      private dialog: MatDialog,
      private notificationService: NotificationService,
      private apiService: ApiService,
      private router: Router,
      private route: ActivatedRoute
  ) { }
  
    ngOnInit() {
      this.trangThai = new  TrangThaiDuyet();
      this.thongTinDuTruMuaVatTuTaiKhoaDuoc = new TongHopDuTruMuaTaiKhoaDuoc();
    }
    huy(){
      this.router.navigateByUrl('/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa-duoc?holdQuery=true');
    }
    tuChoi(){
      var self = this;
      self.validationErrors = [];
      self.thongTinDuTruMuaVatTuTaiKhoaDuoc = this.shared.thongTinDuTruMuaVatTuTaiKhoaDuoc;
      if(self.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId != 0){
        this.dialog.open(TuChoiDuyetVatTuPopupComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
        }).afterClosed().subscribe(result => {
          if (result !== null) {
            self.thongTinDuTruMuaVatTuTaiKhoaDuoc.LyDoTruongKhoaTuChoi = result;
            self.apiService.post("YeuCauMuaVatTu/TuChoiDanhSach",{id:self.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id,loaiKho:0,LyDoTuChoi:result})
                .subscribe((resultData) => {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Từ chối"]));
                  self.back();
                },
                  (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                      this.notificationService.showError(err.Message);
                    }
                  });
          }
        });
      }
      if(self.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoaId != 0)
      {
        this.dialog.open(TuChoiDuyetVatTuPopupComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
        }).afterClosed().subscribe(result => {
          if (result !== null) {
            self.thongTinDuTruMuaVatTuTaiKhoaDuoc.LyDoTruongKhoaTuChoi = result;
            self.apiService.post("YeuCauMuaVatTu/TuChoiDanhSach",{id:self.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id,loaiKho:5,LyDoTuChoi:result})
                .subscribe((resultData) => {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Từ chối"]));
                  self.back();
                },
                  (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                      this.notificationService.showError(err.Message);
                    }
                  });
          }
        });
      }
     
  
    }
    Duyet(){
      var self = this;
      self.validationErrors = [];
      self.thongTinDuTruMuaVatTuTaiKhoaDuoc = this.shared.thongTinDuTruMuaVatTuTaiKhoaDuoc;
      self.thongTinDuTruMuaVatTuTaiKhoaDuoc.ListDuTruMuaVatTuKhoDuocChiTiet = [];
      if(self.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.length != 0)
      {
        self.thongTinDuTruMuaVatTuTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.forEach(element => {
          let duTru = new DuTruMuaVatTuKhoDuocChiTietList();
          duTru.VatTuId = element.VatTuId;
          duTru.DuTruMuaVatTuId = self.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id;
          duTru.DuTruMuaVatTuKhoDuocChiTietId = null;
          duTru.DuTruMuaVatTuTheoKhoaChiTietId = null;
          duTru.Id = element.Id;
          duTru.LaVatTuBHYT = element.Loai;
          duTru.NhomDieuTriDuPhong = element.NhomDieuTriDuPhong;
          duTru.SoLuongDuKienSuDung = element.SLDuKienSuDungTrongKho;
          duTru.SoLuongDuTru = element.SLDuTru,
          duTru.SoLuongDuTruTruongKhoaDuyet = element.SLDuTruTKhoDuyet;
          duTru.SoLuongDuTruKhoDuocDuyet = element.SLDuTruKhoDuocDuyet;
          duTru.DuTruMuaVatTuTheoKhoaId = element.DuTruMuaVatTuTheoKhoaId;
          self.thongTinDuTruMuaVatTuTaiKhoaDuoc.ListDuTruMuaVatTuKhoDuocChiTiet.push(duTru);
        });
      }
      if(this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoaId != 0)
      {
        this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuyet = true;
      }
      if(this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId != 0)
      {
        this.thongTinDuTruMuaVatTuTaiKhoaDuoc.LoaiDuyet = false;
      }
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt phiếu dự trù này không?" }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          self.apiService.post("YeuCauMuaVatTu/DuyetDanhSach",this.thongTinDuTruMuaVatTuTaiKhoaDuoc)
          .subscribe((resultData) => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt"]));
            self.back();
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        }});
     
                
    }
    huyDuyet(){
      if(this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId != 0)
      {
        var self = this;
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: "Bạn có chắc chắn hủy duyệt phiếu dự trù này không?" }
        }).afterClosed().subscribe(result => {
          if (result === 'Yes') {
            self.apiService.post("YeuCauMuaVatTu/HuyDuyet",{id:this.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id,loaiKho:this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoId})
            .subscribe((resultData) => {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy duyệt"]));
              
              this.router.navigateByUrl('/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa-duoc?holdQuery=true');
            },
              (err: ApiError) => {
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
              });
    
          }});  
      }
      if(this.thongTinDuTruMuaVatTuTaiKhoaDuoc.KhoaId != 0)
      {
        var self = this;
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: "Bạn có chắc chắn hủy duyệt phiếu dự trù này không?" }
        }).afterClosed().subscribe(result => {
          if (result === 'Yes') {
            self.apiService.post("YeuCauMuaVatTu/HuyDuyet",{id:this.thongTinDuTruMuaVatTuTaiKhoaDuoc.Id,loaiKho:5})  // 5 la khoa le
            .subscribe((resultData) => {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy duyệt"]));
              
              this.router.navigateByUrl('/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa-duoc?holdQuery=true');
            },
              (err: ApiError) => {
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
              });
    
          }});  
      }
    }
    back(){
      this.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa-duoc']);
    }
    getTrangThaiYeuCau(event) {
      if (event != undefined && event != null) {
        this.trangThai = event;
        if (this.trangThai.DuocDuyet == true) {
          this.isShow = false;
        }
        else if (this.trangThai.DuocDuyet == false) {
          this.isShow = false;
        }
        else {
          this.isShow = true;
        }
      }
    }
    getDataItem(event){
      this.thongTinDuTruMuaVatTuTaiKhoaDuoc=event;
    }
}
