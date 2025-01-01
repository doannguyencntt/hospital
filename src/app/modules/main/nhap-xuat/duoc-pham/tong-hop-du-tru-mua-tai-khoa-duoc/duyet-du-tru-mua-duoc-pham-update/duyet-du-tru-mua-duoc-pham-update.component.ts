import { Component, OnInit ,ViewChild} from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { TongHopDuTruMuaTaiKhoaDuoc ,TrangThaiDuyet,DuTruMuaDuocPhamKhoDuocChiTietList} from '../tong-hop-du-tru-mua-tai-khoa-duoc.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { TuChoiDuyetPopupComponent } from '../tu-choi-duyet-popup/tu-choi-duyet-popup.component';
import { DuyetDuTruMuaDuocPhamSharedComponent } from '../duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { element } from 'protractor';

@Component({
  selector: 'app-duyet-du-tru-mua-duoc-pham-update',
  templateUrl: './duyet-du-tru-mua-duoc-pham-update.component.html',
  styleUrls: ['./duyet-du-tru-mua-duoc-pham-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DuyetDuTruMuaDuocPhamUpdateComponent implements OnInit {
  @ViewChild(DuyetDuTruMuaDuocPhamSharedComponent, {static: true}) shared;
  thongTinDuTruMuaDuocPhamTaiKhoaDuoc :TongHopDuTruMuaTaiKhoaDuoc;
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
    this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = new TongHopDuTruMuaTaiKhoaDuoc();
  }
  huy(){
    this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
  }
  tuChoi(){
    var self = this;
    self.validationErrors = [];
    self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = this.shared.thongTinDuTruMuaDuocPhamTaiKhoaDuoc;
    if(self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId != 0){
      this.dialog.open(TuChoiDuyetPopupComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
      }).afterClosed().subscribe(result => {
        if (result !== null) {
          self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LyDoTruongKhoaTuChoi = result;
          self.apiService.post("YeuCauMuaDuocPham/TuChoiDanhSach",{id:self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id,loaiKho:0,LyDoTuChoi:result})
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
    if(self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoaId != 0)
    {
      this.dialog.open(TuChoiDuyetPopupComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
      }).afterClosed().subscribe(result => {
        if (result !== null) {
          self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LyDoTruongKhoaTuChoi = result;
          self.apiService.post("YeuCauMuaDuocPham/TuChoiDanhSach",{id:self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id,loaiKho:5,LyDoTuChoi:result})
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
    self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = this.shared.thongTinDuTruMuaDuocPhamTaiKhoaDuoc;
    self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet = [];
    if(self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.length != 0)
    {
      self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.forEach(element => {
        let duTru = new DuTruMuaDuocPhamKhoDuocChiTietList();
        duTru.DuocPhamId = element.DuocPhamId;
        duTru.DuTruMuaDuocPhamId = self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id;
        duTru.DuTruMuaDuocPhamKhoDuocChiTietId = null;
        duTru.DuTruMuaDuocPhamTheoKhoaChiTietId = null;
        duTru.Id = element.Id;
        duTru.LaDuocPhamBHYT = element.Loai;
        duTru.NhomDieuTriDuPhong = element.NhomDieuTriDuPhong;
        duTru.SoLuongDuKienSuDung = element.SLDuKienSuDungTrongKho;
        duTru.SoLuongDuTru = element.SLDuTru,
        duTru.SoLuongDuTruTruongKhoaDuyet = element.SLDuTruTKhoDuyet;
        duTru.SoLuongDuTruKhoDuocDuyet = element.SLDuTruKhoDuocDuyet;
        duTru.DuTruMuaDuocPhamTheoKhoaId = element.DuTruMuaDuocPhamTheoKhoaId;
        self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet.push(duTru);
      });
    }
    if(this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoaId != 0)
    {
      this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuyet = true;
    }
    if(this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId != 0)
    {
      this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuyet = false;
    }
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt phiếu dự trù này không?" }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        self.apiService.post("YeuCauMuaDuocPham/DuyetDanhSach",this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc)
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
    if(this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId != 0)
    {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn hủy duyệt phiếu dự trù này không?" }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          self.apiService.post("YeuCauMuaDuocPham/HuyDuyet",{id:this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id,loaiKho:this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId})
          .subscribe((resultData) => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy duyệt"]));
            
            this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
  
        }});  
    }
    if(this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoaId != 0)
    {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn hủy duyệt phiếu dự trù này không?" }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          self.apiService.post("YeuCauMuaDuocPham/HuyDuyet",{id:this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id,loaiKho:5})
          .subscribe((resultData) => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy duyệt"]));
            
            this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
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
    this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
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
    this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc=event;
  }
}
