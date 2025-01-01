import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { PhieuLinhVatTuTrucTiepSharedComponent } from '../phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { LinhTrucTiepVatTu } from '../yeu-cau-linh-vat-tu.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhVatTuTrucTiep, XemTruocPhieuLinhVatTuTrucTiep } from '../yeu-cau-linh-vat-tu.model';
import { InPhieuLinhTrucTiepVatTuPopupComponent } from '../in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { UrlService } from 'src/@vex/services/url.service';
import { GroupDescriptor, process, State } from '@progress/kendo-data-query';
import { PopupThongBaoVtKhongTheTaoComponent } from '../popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component';
@Component({
  selector: 'app-tao-phieu-linh-vat-tu-truc-tiep',
  templateUrl: './tao-phieu-linh-vat-tu-truc-tiep.component.html',
  styleUrls: ['./tao-phieu-linh-vat-tu-truc-tiep.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TaoPhieuLinhVatTuTrucTiepComponent implements OnInit {

  yeuCauLinhDuocPham: LinhTrucTiepVatTu = new LinhTrucTiepVatTu();
  @ViewChild(PhieuLinhVatTuTrucTiepSharedComponent, { static: true }) shared: any;
  loading: boolean = false;
  validationErrors: any;
  popupLoadingData: any = null;
  documentType: DocumentType;
  icFilterList = icFilterList;
  inPhieuLinhTrucTiep: PhieuLinhVatTuTrucTiep = new PhieuLinhVatTuTrucTiep();
  previousUrl: string = "";
  trangThai: any;

  public groups: GroupDescriptor[] = [
    {
      field: "VatTuId",
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
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef, private location: Location, private urlService: UrlService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhTrucTiepVatTu;//LinhTrucTiepDuocPham;
    if (window.location.protocol == "http:") {
      this.inPhieuLinhTrucTiep.Hosting = "http://" + window.location.host;
    } else {
      this.inPhieuLinhTrucTiep.Hosting = "https://" + window.location.host;
    }
    this.urlService.previousUrl$
      .subscribe((previousUrl: string) => {
        this.previousUrl = previousUrl;
      });
    this.route
      .queryParams
      .subscribe(v => {
        this.trangThai = v;
      });
  }

  create(goi:any) {
    var self = this;
    let messageLuu ="Bạn có muốn lưu phiếu lĩnh vật tư này không ?";
    let messageGoi ="Bạn có muốn tạo phiếu lĩnh vật tư này không ?";
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.yeuCauLinhDuocPham = self.shared.getSharedData();
      self.yeuCauLinhDuocPham.Goi = goi;
      self.validationErrors = [];
      self.ref.detectChanges();
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: goi== true? messageGoi :messageLuu ,
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          let kiemTraCoDuocPhamKhongDuTon = this.getItemKhongDuTon(self.yeuCauLinhDuocPham.DanhSachVatTuTonKhongDus);
          self.closePopupLoadingData();
         
          self.validationErrors = [];
          self.ref.detectChanges();
          if(kiemTraCoDuocPhamKhongDuTon.length == 0)
          {
            this.newCreate();
          }else{
            self.dialog.open(PopupThongBaoVtKhongTheTaoComponent, {
              disableClose: false,
              width: '500px',
              data: kiemTraCoDuocPhamKhongDuTon,
            }).afterClosed().subscribe((res) => {
              if (res == "Yes") {
                this.newCreate();
              }
            });
          } 
        }
        // else{
        //   self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
        // }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  cancel() {
    if (this.previousUrl.indexOf("vat-tu-can-linh-truc-tiep") >= 0) {
      this.location.back();
    }
    else {
      this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
  xemPhieuLinh() {
    var self = this;
    self.yeuCauLinhDuocPham = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if (self.yeuCauLinhDuocPham.YeuCauVatTuBenhVienIds.length == 0) {
        self.notificationService.showError("Chưa chọn vật tư cần in.");
      }
      else {
        self.loadingPage();
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có muốn xem trước in phiếu lĩnh vật tư này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            self.loadingPage();
            let objInVatTuXemTruoc = new XemTruocPhieuLinhVatTuTrucTiep();
            
            if (window.location.protocol == "http:") {
              objInVatTuXemTruoc.Hosting = "http://" + window.location.host;
            } else {
              objInVatTuXemTruoc.Hosting = "https://" + window.location.host;
            }
            objInVatTuXemTruoc.YeuCauVatTuBenhVienIds = self.yeuCauLinhDuocPham.YeuCauVatTuBenhVienIds;

            objInVatTuXemTruoc.ThoiDiemLinhTongHopTuNgay = self.yeuCauLinhDuocPham.ThoiDiemLinhTongHopTuNgay;
            objInVatTuXemTruoc.ThoiDiemLinhTongHopDenNgay = self.yeuCauLinhDuocPham.ThoiDiemLinhTongHopDenNgay;
            self.apiService.post<any>("YeuCauLinhVatTu/InXemTruocPhieuLinhTrucTiepVatTu", objInVatTuXemTruoc).subscribe(
              resData => {
                if (resData != undefined && resData != null) {
                  self.inPhieuLinhTrucTiep.Header = false;

                  self.dialog.open(InPhieuLinhTrucTiepVatTuPopupComponent, {
                    disableClose: false,
                    width: '1200px',
                    data: { Model: resData },
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
            self.closePopupLoadingData();
          }
        });
      }

    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  getItemKhongDuTon(danhSachYeuCauVatTuBenhVien){
    let data:any[]=[];
    let dataKhongChoTao:any[]=[];
    let dataList = process(danhSachYeuCauVatTuBenhVien,this.state);
    console.log("::::::::::::::::::::::",dataList);
    dataList.data.forEach(element => {
      let tongSlYeuCau = 0;
      let tenVatTu ="";
      let slTon = 0;
      if(element.items.length != 0)
      {
        element.items.forEach(element => {
          tongSlYeuCau+= element.SoLuongYeuCau;
          tenVatTu = element.TenVatTu;
          slTon = element.SoLuongTon;
        });
      }
      let objGroup ={
        VatTuId :element.value,
        TenVatTu : tenVatTu,
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
  newCreate(){
    var self = this;
    self.loadingPage();
    self.apiService.post<any>("YeuCauLinhVatTu/GuiPhieuLinhTrucTiep", self.yeuCauLinhDuocPham).subscribe(
      (result) => {
        if (result != undefined && result != null) {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          self.closePopupLoadingData();
          self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn in phiếu lĩnh vật tư này không ?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
              self.loadingPage();
              self.inPhieuLinhTrucTiep.Header = true;
              self.inPhieuLinhTrucTiep.YeuCauLinhVatTuId = result;
              self.inPhieuLinhTrucTiep.TrangThaiIn = true;
              self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhTrucTiepVatTu", self.inPhieuLinhTrucTiep).subscribe(
                resData => {
                  if (resData != undefined && resData != null) {
                    self.inPhieuLinhTrucTiep.Header = false;

                    self.dialog.open(InPhieuLinhTrucTiepVatTuPopupComponent, {
                      disableClose: false,
                      width: '1200px',
                      data: { Model: resData },
                    }).afterClosed().subscribe(() => {
                      self.closePopupLoadingData();
                      self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
              //self.closePopupLoadingData();
              self.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu']);
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
