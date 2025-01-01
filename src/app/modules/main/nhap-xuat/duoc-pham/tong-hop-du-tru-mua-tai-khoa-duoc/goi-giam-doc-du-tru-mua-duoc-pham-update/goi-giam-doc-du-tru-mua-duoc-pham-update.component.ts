import { ChangeDetectorRef, Component, OnInit,ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GoiGiamDocDuTruMuaDuocPhamSharedComponent } from '../goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component';
import { DuTruMuaTaiKhoaDuocGoi , DuTruMuaDuocPhamTaiKhoaDuoc,DuTruMuaDuocPhamKhoDuocChiTiets} from '../tong-hop-du-tru-mua-tai-khoa-duoc.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent } from '../gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component'; 
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { PhieuMuaTruTaiKhoaDuocComponent } from '../phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component';
@Component({
  selector: 'app-goi-giam-doc-du-tru-mua-duoc-pham-update',
  templateUrl: './goi-giam-doc-du-tru-mua-duoc-pham-update.component.html',
  styleUrls: ['./goi-giam-doc-du-tru-mua-duoc-pham-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class GoiGiamDocDuTruMuaDuocPhamUpdateComponent implements OnInit {
  @ViewChild(GoiGiamDocDuTruMuaDuocPhamSharedComponent, {static: true}) shared;
  thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi :DuTruMuaTaiKhoaDuocGoi;
  duTruMuaDuocPhamTaiKhoaDuoc : DuTruMuaDuocPhamTaiKhoaDuoc;
  isShow: boolean = false;
  documentType: DocumentType;
  validationErrors: any;
  popupSavingData: any;
  popupLoadingData: any
  tinhTrangView : boolean = true;
  constructor(    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc;
    this.duTruMuaDuocPhamTaiKhoaDuoc = new DuTruMuaDuocPhamTaiKhoaDuoc();
    this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi=new DuTruMuaTaiKhoaDuocGoi();
  }
  huy(){
    this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
  }
  tinhTrangVieww(event){
    if(event != null)
    {
      this.tinhTrangView = false;
    }
  }
  goi(){
    var self = this;
    self.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi = this.shared.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi;
    this.duTruMuaDuocPhamTaiKhoaDuoc.ListDuTruDuocPhamId = [];
    this.duTruMuaDuocPhamTaiKhoaDuoc.ListDuTruDuocPhamTheoKhoaId = [];
    if(this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi != undefined && this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi != null)
    {
      this.duTruMuaDuocPhamTaiKhoaDuoc.NhanVienYeuCauId = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.NguoiYeuCauId;
      this.duTruMuaDuocPhamTaiKhoaDuoc.KyDuTruMuaDuocPhamVatTuId = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.KyDuTruId;
      this.duTruMuaDuocPhamTaiKhoaDuoc.TuNgay = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TuNgay;
      this.duTruMuaDuocPhamTaiKhoaDuoc.DenNgay = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.DenNgay;
      this.duTruMuaDuocPhamTaiKhoaDuoc.NgayYeuCau = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.NgayYeuCau;
      this.duTruMuaDuocPhamTaiKhoaDuoc.ListDuTruDuocPhamId = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.ListDuTruDuocPhamId;
      this.duTruMuaDuocPhamTaiKhoaDuoc.ListDuTruDuocPhamTheoKhoaId = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.ListDuTruDuocPhamTheoKhoaId;
      this.duTruMuaDuocPhamTaiKhoaDuoc.DuTruMuaDuocPhamKhoDuocChiTiet = [];
      if(this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList != undefined && this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList != null)
      {
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList.forEach(item => {
          let data = new DuTruMuaDuocPhamKhoDuocChiTiets();
          data.DuocPhamId =  item.DuocPhamId;
          data.LaDuocPhamBHYT = item.Loai,
          data.SoLuongDuTru = item.SLDuTru,
          data.SoLuongDuKienSuDung = item.SLDuKienSuDungTrongKho;
          data.SoLuongDuTruKhoDuocDuyet = item.SLDuTruKhoDuocDuyet;
          data.SoLuongDuTruTruongKhoaDuyet = item.SLDuTruTKhoDuyet;
          // if(data.DuTruMuaDuocPhamKhoDu)
          this.duTruMuaDuocPhamTaiKhoaDuoc.DuTruMuaDuocPhamKhoDuocChiTiet.push(data);
        });
      }
    }
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có chắc chắn muốn gởi duyệt phiếu dự trù này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          self.apiService.post<any>("YeuCauMuaDuocPham/GuiDuTruMuaDuocPhamTaiKhoaDuoc", self.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi)
            .subscribe(
              (resultData) => {
                if (resultData != undefined && resultData != null) {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
                  self.closePopupSavingData();
                }
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupSavingData();
              }
            );
        } else if (res == "YesAndPrint") {
          self.validationErrors = [];
          self.ref.detectChanges();
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.savingPage();
            self.apiService.post<any>("YeuCauMuaDuocPham/GuiDuTruMuaDuocPhamTaiKhoaDuoc", self.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi).subscribe(
              (resultData) => {
                if (resultData != undefined && resultData != null) {
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.closePopupSavingData();
                  self.dialog.open(PhieuMuaTruTaiKhoaDuocComponent, {
                    disableClose: false,
                    width: '1200px',
                    data: { Id: resultData},
                  }).afterClosed().subscribe(() => {
                    self.router.navigate(['/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc']);
                  });
                }
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupSavingData();
              });
          } else {
          }
        }
      });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  closePopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }
  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }
  getDataItem(event){
    this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi=event;
  }
}
