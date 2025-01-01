import { ChangeDetectorRef, Component, OnInit,ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GoiGiamDocDuTruMuaKSNKSharedComponent } from '../goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component';
import { DuTruMuaTaiKhoaDuocGoi, DuTruMuaVatTuKhoDuocChiTiets, DuTruMuaVatTuTaiKhoaDuoc } from '../tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model';
// import { GuiTongHopDuTruMuaKSNKTaiKhoaDuocConfirmComponent } from '../gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-confirm.component';
import { PhieuMuaTruKSNKTaiKhoaDuocComponent } from '../phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-goi-giam-doc-du-tru-mua-ksnk-update',
    templateUrl: './goi-giam-doc-du-tru-mua-ksnk-update.component.html',
    styleUrls: ['./goi-giam-doc-du-tru-mua-ksnk-update.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class GoiGiamDocDuTruMuaKSNKUpdateComponent implements OnInit {
    @ViewChild(GoiGiamDocDuTruMuaKSNKSharedComponent, {static: true}) shared;
    thongTinDuTruMuaVatTuTaiKhoaDuocGoi :DuTruMuaTaiKhoaDuocGoi;
    duTruMuaVatTuTaiKhoaDuoc : DuTruMuaVatTuTaiKhoaDuoc;
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
      this.documentType = DocumentType.THDTMuaTaiHanhChinh;
      this.duTruMuaVatTuTaiKhoaDuoc = new DuTruMuaVatTuTaiKhoaDuoc();
      this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi=new DuTruMuaTaiKhoaDuocGoi();
    }
    huy(){
      this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh?holdQuery=true');
    }
    tinhTrangVieww(event){
      if(event != null)
      {
        this.tinhTrangView = false;
      }
    }
    goi(){
      var self = this;
      self.thongTinDuTruMuaVatTuTaiKhoaDuocGoi = this.shared.thongTinDuTruMuaVatTuTaiKhoaDuocGoi;
      this.duTruMuaVatTuTaiKhoaDuoc.ListDuTruVatTuId = [];
      this.duTruMuaVatTuTaiKhoaDuoc.ListDuTruVatTuTheoKhoaId = [];
      if(this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi != undefined && this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi != null)
      {
        this.duTruMuaVatTuTaiKhoaDuoc.NhanVienYeuCauId = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.NguoiYeuCauId;
        this.duTruMuaVatTuTaiKhoaDuoc.KyDuTruMuaVatTuVatTuId = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.KyDuTruId;
        this.duTruMuaVatTuTaiKhoaDuoc.TuNgay = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.TuNgay;
        this.duTruMuaVatTuTaiKhoaDuoc.DenNgay = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.DenNgay;
        this.duTruMuaVatTuTaiKhoaDuoc.NgayYeuCau = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.NgayYeuCau;
        this.duTruMuaVatTuTaiKhoaDuoc.ListDuTruVatTuId = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.ListDuTruVatTuId;
        this.duTruMuaVatTuTaiKhoaDuoc.ListDuTruVatTuTheoKhoaId = this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.ListDuTruVatTuTheoKhoaId;
        this.duTruMuaVatTuTaiKhoaDuoc.DuTruMuaVatTuKhoDuocChiTiet = [];
        if(this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList != undefined && this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList != null)
        {
          this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList.forEach(item => {
            let data = new DuTruMuaVatTuKhoDuocChiTiets();
            data.VatTuId =  item.VatTuId;
            data.LaVatTuBHYT = item.Loai,
            data.SoLuongDuTru = item.SLDuTru,
            data.SoLuongDuKienSuDung = item.SLDuKienSuDungTrongKho;
            data.SoLuongDuTruKhoDuocDuyet = item.SLDuTruKhoDuocDuyet;
            data.SoLuongDuTruTruongKhoaDuyet = item.SLDuTruTKhoDuyet;
            // if(data.DuTruMuaVatTuKhoDu)
            this.duTruMuaVatTuTaiKhoaDuoc.DuTruMuaVatTuKhoDuocChiTiet.push(data);
          });
        }
      }
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
        self.dialog.open(null, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có chắc chắn muốn gởi duyệt phiếu dự trù này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            self.apiService.post<any>("YeuCauMuaKSNK/GuiDuTruMuaKSNKTaiKhoaDuoc", self.thongTinDuTruMuaVatTuTaiKhoaDuocGoi)
              .subscribe(
                (resultData) => {
                  if (resultData != undefined && resultData != null) {
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                    this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh?holdQuery=true');
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
              self.apiService.post<any>("YeuCauMuaKSNK/GuiDuTruMuaKSNKTaiKhoaDuoc", self.thongTinDuTruMuaVatTuTaiKhoaDuocGoi).subscribe(
                (resultData) => {
                  if (resultData != undefined && resultData != null) {
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                    self.closePopupSavingData();
                    self.dialog.open(PhieuMuaTruKSNKTaiKhoaDuocComponent, {
                      disableClose: false,
                      width: '1200px',
                      data: { Id: resultData},
                    }).afterClosed().subscribe(() => {
                      self.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh']);
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
      this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi=event;
    }
}
