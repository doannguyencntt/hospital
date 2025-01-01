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
import { LinhTrucTiepVatTu, TrangThaiDuyetYeuCauLinh } from '../yeu-cau-linh-vat-tu.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { PhieuLinhVatTuTrucTiep } from '../yeu-cau-linh-vat-tu.model';
import { InPhieuLinhTrucTiepVatTuPopupComponent } from '../in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component';
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuLinhVtTrucTiepChoGoiSharedComponent } from '../phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component';
import { GroupDescriptor, process, State } from '@progress/kendo-data-query';
import { PopupThongBaoVtKhongTheTaoComponent } from '../popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component';
@Component({
  selector: 'app-phieu-linh-vat-tu-truc-tiep-gui-lai',
  templateUrl: './phieu-linh-vat-tu-truc-tiep-gui-lai.component.html',
  styleUrls: ['./phieu-linh-vat-tu-truc-tiep-gui-lai.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PhieuLinhVatTuTrucTiepGuiLaiComponent implements OnInit {

  yeuCauLinhVatTu: LinhTrucTiepVatTu = new LinhTrucTiepVatTu();
  @ViewChild('temp', { read: PhieuLinhVtTrucTiepChoGoiSharedComponent, static: false }) shared: any;
  @ViewChild('temp1', { read: PhieuLinhVatTuTrucTiepSharedComponent, static: false }) shared1: any;
  loading: boolean = false;
  validationErrors: any;
  popupLoadingData: any = null;
  documentType: DocumentType;
  inPhieuLinhTrucTiep: PhieuLinhVatTuTrucTiep = new PhieuLinhVatTuTrucTiep();
  trangThai: TrangThaiDuyetYeuCauLinh;
  isShow: boolean = false;
  isShowLuuDuyetLai: boolean = false;
  quyenUpdate: boolean = false;
  trangThaiDanhSach : any;
  shareChoGoi :boolean = false;
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
    private ref: ChangeDetectorRef,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhTrucTiepVatTu;
    this.route
      .queryParams
      .subscribe(v => {
        this.trangThaiDanhSach = v;
        if (this.trangThaiDanhSach.holdQuery == 'true') {
          this.shareChoGoi = true
        }
      });
    
    this.trangThai = new TrangThaiDuyetYeuCauLinh();
    if (window.location.protocol == "http:") {
      this.inPhieuLinhTrucTiep.Hosting = "http://" + window.location.host;
    } else {
      this.inPhieuLinhTrucTiep.Hosting = "https://" + window.location.host;
    }
    console.log("asdsssss:", this.trangThai)
  }
  cancel() {
    this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu'],{ queryParams: { holdQuery:true}});
  }

  inPhieu() {
    var self = this;
    if(self.shareChoGoi)
    {
      self.yeuCauLinhVatTu = this.shared.getSharedData();
    }
    else{
      self.yeuCauLinhVatTu = this.shared1.getSharedData();
    }

    // self.yeuCauLinhVatTu = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    self.inPhieuLinhTrucTiep.Header = true;
    if (this.trangThai.DuocDuyet == false) {
      self.inPhieuLinhTrucTiep.TrangThaiIn = false;
    }
    else {
      self.inPhieuLinhTrucTiep.TrangThaiIn = true;
    }
    self.inPhieuLinhTrucTiep.YeuCauLinhVatTuId = self.yeuCauLinhVatTu.Id;
    self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhTrucTiepVatTu", self.inPhieuLinhTrucTiep).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.inPhieuLinhTrucTiep.Header = false;
          self.dialog.open(InPhieuLinhTrucTiepVatTuPopupComponent, {
            disableClose: false,
            width: '1200px',
            height: 'auto',
            //height: '600',
            data: { Model: resData },
          }).afterClosed().subscribe(() => {
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
      this.trangThai = event;
      if (this.trangThai.DuocDuyet == true) {
        this.isShow = false;
        this.isShowLuuDuyetLai = true;
      }
      else if (this.trangThai.DuocDuyet == false) {
        this.isShow = false;
        this.isShowLuuDuyetLai = true;
      }
      else {
        this.isShow = true;
        this.isShowLuuDuyetLai = true;
      }
    }
  }
  // luuVaGuiDuyetLai() {
  //   this.save();
  // }
  quyenUpdatePhieuLinh(event) {
    this.quyenUpdate = event;
  }
  guiLaiPhieu() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.yeuCauLinhVatTu = self.shared.getSharedData();
      self.validationErrors = [];
      self.ref.detectChanges();
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn gửi lại phiếu lĩnh vật tư này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          let kiemTraCoDuocPhamKhongDuTon = this.getItemKhongDuTon(self.yeuCauLinhVatTu.DanhSachVatTuTonKhongDus);
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
    self.apiService.post<any>("YeuCauLinhVatTu/GuiLaiPhieuLinhTrucTiep", self.yeuCauLinhVatTu).subscribe(
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
