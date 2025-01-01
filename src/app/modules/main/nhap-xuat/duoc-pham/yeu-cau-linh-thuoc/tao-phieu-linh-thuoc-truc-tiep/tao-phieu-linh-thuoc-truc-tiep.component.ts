import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { PhieuLinhThuocTrucTiepSharedComponent } from '../phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { LinhTrucTiepDuocPham } from '../yeu-cau-linh-thuoc.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhThuocTrucTiep,XemTruocPhieuLinhThuocTrucTiep } from '../yeu-cau-linh-thuoc.model';
import { PhieuLinhThuocTrucTiepPopupComponent } from '../phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component';
import { UrlService } from 'src/@vex/services/url.service';
import { element } from 'protractor';
import { PopupThongBaoDpKhongTheTaoComponent } from '../popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component';
import { GroupDescriptor, process, State } from "@progress/kendo-data-query";
@Component({
  selector: 'app-tao-phieu-linh-thuoc-truc-tiep',
  templateUrl: './tao-phieu-linh-thuoc-truc-tiep.component.html',
  styleUrls: ['./tao-phieu-linh-thuoc-truc-tiep.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TaoPhieuLinhThuocTrucTiepComponent implements OnInit {
  yeuCauLinhDuocPham: LinhTrucTiepDuocPham = new LinhTrucTiepDuocPham();
  @ViewChild(PhieuLinhThuocTrucTiepSharedComponent, { static: true }) shared: any;
  loading: boolean = false;
  validationErrors: any;
  popupLoadingData: any = null;
  documentType: DocumentType;
  trangThai : any;
  inPhieuLinhTrucTiep: PhieuLinhThuocTrucTiep = new PhieuLinhThuocTrucTiep();
  previousUrl: string;
  IdKhoLinh:number =0;

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
    // private ref: ChangeDetectorRef, private location: Location,
    private route : ActivatedRoute,
    private ref: ChangeDetectorRef, private location: Location,private urlService: UrlService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhTrucTiepDuocPham;
    this.IdKhoLinh = this.route.snapshot.params.KhoLinhId;
    this.route
    .queryParams
    .subscribe(v => {
        this.trangThai = v;
    });
    
    if (window.location.protocol == "http:") {
      this.inPhieuLinhTrucTiep.Hosting = "http://" + window.location.host;
    } else {
      this.inPhieuLinhTrucTiep.Hosting = "https://" + window.location.host;
    }
    this.urlService.previousUrl$
        .subscribe((previousUrl: string) => {
            this.previousUrl = previousUrl;
        });
  }

  create(goi:any) {
    let messageGoi ="Bạn có muốn tạo phiếu phiếu lĩnh dược phẩm này không ?";
    let messageLuu ="Bạn có muốn tạo phiếu phiếu lĩnh dược phẩm này không ?"
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.closePopupLoadingData();
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: goi == true ? messageGoi : messageLuu,
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
         
          self.yeuCauLinhDuocPham = self.shared.getSharedData();
          self.yeuCauLinhDuocPham.Goi = goi;
          let kiemTraCoDuocPhamKhongDuTon = this.getItemKhongDuTon(self.yeuCauLinhDuocPham.DanhSachDuocPhamTonKhongDus);
          self.closePopupLoadingData();
         
          self.validationErrors = [];
          self.ref.detectChanges();
          if(kiemTraCoDuocPhamKhongDuTon.length == 0)
          {
            this.newcreate();
          }else{
            self.dialog.open(PopupThongBaoDpKhongTheTaoComponent, {
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
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
   
  }

  cancel() {
    this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc'],{ queryParams: { holdQuery: true}});
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
  xemPhieuLinh()
  {
    var self = this;
    self.closePopupLoadingData();
    self.yeuCauLinhDuocPham = self.shared.getSharedData();
    if(self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhIds.length == 0)
    {
      self.notificationService.showError("Chưa chọn thuốc để in.");
    }
    else{
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn xem trước phiếu lĩnh dược phẩm này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          
          self.closePopupLoadingData();
          
          self.validationErrors = [];
          self.ref.detectChanges();
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
            self.loadingPage();
            let objInDuocPhamXemTruoc = new XemTruocPhieuLinhThuocTrucTiep();
            // objInDuocPhamXemTruoc.Header = true;
            if (window.location.protocol == "http:") {
              objInDuocPhamXemTruoc.Hosting = "http://" + window.location.host;
            } else {
              objInDuocPhamXemTruoc.Hosting = "https://" + window.location.host;
            }
            objInDuocPhamXemTruoc.YeuCauDuocPhamBenhVienIds = self.yeuCauLinhDuocPham.YeuCauDuocPhamBenhIds;
            objInDuocPhamXemTruoc.KhoLinhId = parseInt(this.trangThai.KhoLinhId);
            objInDuocPhamXemTruoc.ThoiDiemLinhTongHopTuNgay = self.yeuCauLinhDuocPham.ThoiDiemLinhTongHopTuNgay;
            objInDuocPhamXemTruoc.ThoiDiemLinhTongHopDenNgay = self.yeuCauLinhDuocPham.ThoiDiemLinhTongHopDenNgay;
            self.apiService.post<any>("YeuCauLinhDuocPham/XemTruocInPhieuLinhTrucTiepDuocPham", objInDuocPhamXemTruoc).subscribe(
              resData => {
                if (resData != undefined && resData != null) {
                  self.inPhieuLinhTrucTiep.Header = false;
                  
                  self.dialog.open(PhieuLinhThuocTrucTiepPopupComponent, {
                    disableClose: false,
                    width: '1200px',
                    data: {Model:resData,showIn:false},
                  }).afterClosed().subscribe(() => {
                    self.closePopupLoadingData();
                  });
                }
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
              }
            );
          } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        }
        // else{
        //   this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
        // }
      })
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
    var self = this;
    self.loadingPage();
    self.apiService.post<any>("YeuCauLinhDuocPham/GuiPhieuLinhTrucTiep", self.yeuCauLinhDuocPham).subscribe(
      (result) => {
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
        if (result != undefined && result != null) {
          
          self.closePopupLoadingData();
          self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn in phiếu phiếu lĩnh dược phẩm này không ?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
              self.loadingPage();
              self.inPhieuLinhTrucTiep.Header = true;
              self.inPhieuLinhTrucTiep.TrangThaiIn = true;
              self.inPhieuLinhTrucTiep.YeuCauLinhDuocPhamId = result;
              self.inPhieuLinhTrucTiep.LoaiPhieuLinh = 0;
              self.apiService.post<any>("YeuCauLinhDuocPham/InPhieuLinhTrucTiepDuocPham", self.inPhieuLinhTrucTiep).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    self.inPhieuLinhTrucTiep.Header = false;
                    
                    self.dialog.open(PhieuLinhThuocTrucTiepPopupComponent, {
                      disableClose: false,
                      width: '1200px',
                      data: {Model:resData},
                    }).afterClosed().subscribe(() => {
                      self.closePopupLoadingData();
                      this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
                    });
                  }
                },
                (err: ApiError) => {
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                  self.closePopupLoadingData();
                }
              );
            } else {
              this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
            }
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingData();
      });
  }
}
