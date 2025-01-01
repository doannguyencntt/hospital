import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { LinhTrucTiepDuocPham, TrangThaiDuyetYeuCauLinh } from '../yeu-cau-linh-thuoc.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhThuocTrucTiep } from '../yeu-cau-linh-thuoc.model';
import { PhieuLinhThuocTrucTiepPopupComponent } from '../phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component';
import { GroupDescriptor, process,State  } from "@progress/kendo-data-query";
import { PopupThongBaoDpKhongTheTaoComponent } from '../popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component';
import { PhieuLinhTrucTiepChoGoiSharedComponent } from '../phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component';
import { PhieuLinhThuocTrucTiepSharedComponent } from '../phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component';

@Component({
  selector: 'app-phieu-linh-thuoc-truc-tiep-gui-lai',
  templateUrl: './phieu-linh-thuoc-truc-tiep-gui-lai.component.html',
  styleUrls: ['./phieu-linh-thuoc-truc-tiep-gui-lai.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PhieuLinhThuocTrucTiepGuiLaiComponent implements OnInit {

  yeuCauLinhDuocPham: LinhTrucTiepDuocPham = new LinhTrucTiepDuocPham();
  @ViewChild('temp', { read: PhieuLinhTrucTiepChoGoiSharedComponent, static: false }) shared: any;
  @ViewChild('temp1', { read: PhieuLinhThuocTrucTiepSharedComponent, static: false }) shared1: any;
  //@ViewChild(PhieuLinhTrucTiepChoGoiSharedComponent, { static: true }) shared1: any;
  loading: boolean = false;
  validationErrors: any;
  popupLoadingData: any = null;
  documentType: DocumentType;
  inPhieuLinhTrucTiep: PhieuLinhThuocTrucTiep = new PhieuLinhThuocTrucTiep();
  trangThai: TrangThaiDuyetYeuCauLinh;
  isShow: boolean = false;
  isShowLuuDuyetLai: boolean = false;
  quyenUpdate : boolean  = false;
  trangThaiDanhSach : any;
  shareChoGoi :boolean = false;
  public groups: GroupDescriptor[] = [
    {
      field: "DuocPhamId",
      aggregates: [
        { field: 'SoLuongYeuCau', aggregate: 'sum' },
      ],
    },
  ];

  public state: State = {
    group: this.groups,
  };
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(v => {
        this.trangThaiDanhSach = v;
        if (this.trangThaiDanhSach.holdQuery == 'true') {
          this.shareChoGoi = true
        }
      });
    
    this.documentType = DocumentType.TaoYeuCauLinhTrucTiepDuocPham;
    this.trangThai = new TrangThaiDuyetYeuCauLinh();
    if (window.location.protocol == "http:") {
      this.inPhieuLinhTrucTiep.Hosting = "http://" + window.location.host;
    } else {
      this.inPhieuLinhTrucTiep.Hosting = "https://" + window.location.host;
    }
  }

  cancel() {
    this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc'],{ queryParams: { holdQuery: true}});
  }

  inPhieu() {
    if(this.shareChoGoi)
    {
      this.yeuCauLinhDuocPham = this.shared.getSharedData();
    }
    else{
      this.yeuCauLinhDuocPham = this.shared1.getSharedData();
    }
    
    this.validationErrors = [];
    this.ref.detectChanges();
    if (this.trangThai.DuocDuyet == false) {
      this.inPhieuLinhTrucTiep.Header = true;
      this.inPhieuLinhTrucTiep.TrangThaiIn = false;
      this.inPhieuLinhTrucTiep.YeuCauLinhDuocPhamId = this.yeuCauLinhDuocPham.Id;
      this.inPhieuLinhTrucTiep.LoaiPhieuLinh = 0;
      this.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhTrucTiepDuocPham", this.inPhieuLinhTrucTiep).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            this.inPhieuLinhTrucTiep.Header = false;
            this.dialog.open(PhieuLinhThuocTrucTiepPopupComponent, {
              disableClose: false,
              width: '1200px',
              height: 'auto',
              //height: '600',
              data: { Model: resData },
            }).afterClosed().subscribe(() => {
              // this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
            });
          }
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        }
      );
    }
    else {
      this.inPhieuLinhTrucTiep.Header = true;
      this.inPhieuLinhTrucTiep.TrangThaiIn = true;
      this.inPhieuLinhTrucTiep.YeuCauLinhDuocPhamId = this.yeuCauLinhDuocPham.Id;
      this.inPhieuLinhTrucTiep.LoaiPhieuLinh = 0;
      this.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhTrucTiepDuocPham", this.inPhieuLinhTrucTiep).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            this.inPhieuLinhTrucTiep.Header = false;
            this.dialog.open(PhieuLinhThuocTrucTiepPopupComponent, {
              disableClose: false,
              width: '1200px',
              height: 'auto',
              //height: '600',
              data: { Model: resData },
            }).afterClosed().subscribe(() => {
              // this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
            });
          }
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        }
      );
    }

  }
  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
  getTrangThaiYeuCau(event) {
    if (event != undefined && event != null) {
      this.trangThai = event;
      if (this.trangThai.DuocDuyet == true) {
        this.isShow = false;
      }
      else if (this.trangThai.DuocDuyet == false) {
        this.isShow = false;
         this.isShowLuuDuyetLai = true;
      }
      else {
        this.isShow = true;
        
      }
    }
  }
  luuVaGuiDuyetLai() {
  }
  quyenUpdatePhieuLinh(event){
    this.quyenUpdate = event;
  }
  guiLaiPhieu() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.closePopupLoadingData();
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn gởi lại phiếu lĩnh dược phẩm này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
         
          this.yeuCauLinhDuocPham = this.shared.getSharedData();
          let kiemTraCoDuocPhamKhongDuTon = this.getItemKhongDuTon(this.yeuCauLinhDuocPham.DanhSachDuocPhamTonKhongDus);
          this.closePopupLoadingData();
         
          this.validationErrors = [];
          this.ref.detectChanges();
          if(kiemTraCoDuocPhamKhongDuTon.length == 0)
          {
            this.newcreate();
          }else{
            this.dialog.open(PopupThongBaoDpKhongTheTaoComponent, {
              disableClose: false,
              width: '500px',
              data: kiemTraCoDuocPhamKhongDuTon,
            }).afterClosed().subscribe((res) => {
              if (res == "Yes") {
                this.newcreate();
              }
            });
          }
        }
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
   
  }
  getItemKhongDuTon(danhSachYeuCauDuocPhamBenhVien){
    let data:any[]=[];
      let dataKhongChoTao:any[]=[];
      let dataList = process(danhSachYeuCauDuocPhamBenhVien,this.state);
      dataList.data.forEach(element => {
        let tongSlYeuCau = 0;
        let tenDuocPham ="";
        let slTon = 0;
        if(element.items.length != 0)
        {
          element.items.forEach(element => {
            tongSlYeuCau+= element.SoLuongYeuCau;
            tenDuocPham = element.TenDuocPham;
            slTon = element.SoLuongTon;
          });
        }
        let objGroup ={
          DuocPhamId :element.value,
          TenDuocPham : tenDuocPham,
          SoLuongYeuCau:tongSlYeuCau,
          SoLuongTon :slTon
        };
        data.push(objGroup);
        let dataSLKhongChoTao = data.filter(d=>d.SoLuongTon < d.SoLuongYeuCau);
        if(dataSLKhongChoTao.length != 0)
        {
          dataSLKhongChoTao.forEach(element => {
            dataKhongChoTao.push(element);
          });
          
        }
      });
      return dataKhongChoTao;
  }
  newcreate(){
    this.loadingPage();
    this.apiService.post<any>("YeuCauLinhDuocPham/GuiLaiPhieuLinhTrucTiep", this.yeuCauLinhDuocPham).subscribe(
      (result) => {
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
        if (result != undefined && result != null) {
          
          this.closePopupLoadingData();
          this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn in phiếu phiếu lĩnh dược phẩm này không ?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
              this.loadingPage();
              this.inPhieuLinhTrucTiep.Header = true;
              this.inPhieuLinhTrucTiep.TrangThaiIn = true;
              this.inPhieuLinhTrucTiep.YeuCauLinhDuocPhamId = result;
              this.inPhieuLinhTrucTiep.LoaiPhieuLinh = 0;
              this.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhTrucTiepDuocPham", this.inPhieuLinhTrucTiep).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    this.inPhieuLinhTrucTiep.Header = false;
                    
                    this.dialog.open(PhieuLinhThuocTrucTiepPopupComponent, {
                      disableClose: false,
                      width: '1200px',
                      data: {Model:resData},
                    }).afterClosed().subscribe(() => {
                      this.closePopupLoadingData();
                      this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                    });
                  }
                },
                (err: ApiError) => {
                  this.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                  }
                  this.closePopupLoadingData();
                }
              );
            } else {
              this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
            }
          });
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }
}
