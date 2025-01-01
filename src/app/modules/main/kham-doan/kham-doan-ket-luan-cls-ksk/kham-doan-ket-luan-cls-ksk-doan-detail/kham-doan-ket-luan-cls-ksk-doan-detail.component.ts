import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { KetQuaMauPopupComponent } from '../ket-qua-mau-popup/ket-qua-mau-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { XemKetQuaCdhaTdcnPopupComponent } from '../../../can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component';
import { Http, RequestOptions, ResponseContentType } from '@angular/http';
import { saveFile } from 'src/app/core/utilities/file-download.helper';
import { PhieuInXetNghiemComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/phieu-in-xet-nghiem-popup/phieu-in-xet-nghiem-popup.component';
import { HttpParams } from '@angular/common/http';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { ViewImagePdfListComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/view-image-pdf-list/view-image-pdf-list.component';
import { LayMauXetNghiemKetQuaPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import {PhieuInXetNghiemVo,KhamDoanKetLuanCLS} from '../kham-doan-ket-luan-cls-ksk.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { BaseService } from 'src/app/core/services/base.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
@Component({
  selector: 'app-kham-doan-ket-luan-cls-ksk-doan-detail',
  templateUrl: './kham-doan-ket-luan-cls-ksk-doan-detail.component.html',
  styleUrls: ['./kham-doan-ket-luan-cls-ksk-doan-detail.component.scss']
})
export class KhamDoanKetLuanClsKskDoanDetailComponent implements OnInit {
  khamDoanKetLuanCLS = {} as KhamDoanKetLuanCLS;
  documentType: DocumentType;
  phieuInXetNghiemVo = new PhieuInXetNghiemVo;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  data: any;
  ddd: string = "";
  popupLoadingData: any;
  urlGetDataGrid: string = "KhamDoan/GetDataThongTinCLSForGridAsync";
  urlGetTotalPageGrid: string = "KhamDoan/GetTotalPageForGridAsyncKetQuaCLS";
  yeuCauTiepNhanId: any;
  validationErrors :any;
  dataPopup: any;
  hopDongId :number = 0;
  congTyId :number = 0;
  additonString ="";
  trangThaiHopDong : boolean = false;
  from:string="";
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('xemKetQuaActionTemplate', { static: true }) xemKetQuaActionTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('ngayThucHienTemplate', { static: true }) ngayThucHienTemplate: TemplateRef<any>;
  @ViewChild('ngayKetLuanTemplate', { static: true }) ngayKetLuanTemplate: TemplateRef<any>;
  @ViewChild('grid', { read: GridComponent, static: false }) grid: GridComponent;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router,
    private http: Http,
    private baseService : BaseService
  ) { }

  groups: GroupDescriptor[] = [{ field: 'LoaiKetQuaCLS' }];
  ngOnInit() {
    this.documentType = DocumentType.KhamDoanKetLuanCanLamSangKhamSucKhoeDoan;
    let id = this.route.snapshot.params.id;
    this.hopDongId = this.route.snapshot.params.hopDongNhanVienId;
    this.congTyId = this.route.snapshot.params.congTyId;
    this.from = this.route.snapshot.params.f;
    this.additonString =id +"-"+this.hopDongId+"-"+this.congTyId;

    this.checkHopDongKetThuc(this.hopDongId,this.congTyId);

    id = (id === undefined || id === null) ? 0 : id;
    const x = new Number(id);
    this.yeuCauTiepNhanId = x;
    this.khamDoanKetLuanCLS.Id = this.yeuCauTiepNhanId;
    this.getById(this.yeuCauTiepNhanId);
    // this.gridColumns = [
    //   { Field: "NoiDung", Title: "Nội dung", Width: 90, Sortable: true},
    //   { Field: "NguoiThucHien", Title: "Người thực hiện", Width: 90, Sortable: true},
    //   { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 90, Sortable: true,Template: this.ngayThucHienTemplate},
    //   { Field: "NguoiKetLuan", Title: "Người kết luận", Width: 90, Sortable: true},
    //   { Field: "NgayKetLuan", Title: "Ngày kết luận", Width: 100, Sortable: true,Template: this.ngayKetLuanTemplate},
    //   { Field: "ChanDoan", Title: "Chẩn đoán", Width: 90, Sortable: true},
    //   { Field: "XemKQ", Title: "Xem KQ", Width: 80, Sortable: true}
    // ];
    this.gridColumns = [
      { Field: "LoaiKetQuaCLS", Title: "", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "NoiDung", Title: "Nội dung", Width: 150, Sortable: true },
      { Field: "NguoiThucHien", Title: "Người Thực hiện", Width: 150, Sortable: true },
      { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 150, Sortable: true },
      { Field: "BacSiKetLuan", Title: "Người kết luận", Width: 100, Sortable: true },
      { Field: "NgayKetLuan", Title: "Ngày kết luận", Width: 150, Sortable: true },
      { Field: "ChuanDoan", Title: "Chẩn đoán", Width: 100, Sortable: true },
      { Field: "XemKetQua", Title: "Xem KQ", Width: 200, Template: this.xemKetQuaActionTemplate },
      { Field: "", Title: "", Width: 150, Template: this.trangThaiTemplate }
    ];
    this.gridChildColumns = [
      { Field: "TenDichVu", Title: "Tên", Width: 150, Sortable: true },
      { Field: "KetQua", Title: "Kết quả", Width: 250, Sortable: true },
      { Field: "CSBT", Title: "CSBT", Width: 150, Sortable: true },
      { Field: "DonVi", Title: "Đơn vị", Width: 150, Sortable: true },
      { Field: "MayXN", Title: "Máy XN", Width: 150, Sortable: true },
      { Field: "NguoiDuyet", Title: "Người duyệt", Width: 150, Sortable: true },
      { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 150, Sortable: true },
    ];
  }
  checkHopDongKetThuc(hopDongId:number, congTyId :number){
    let model ={
      HopDongId :hopDongId,
      congTyId :congTyId
    };
    this.apiService.post<any>("KhamDoan/CheckHopDongKetThuc",model)
    .subscribe((resultData) => {
                this.trangThaiHopDong = resultData;
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });

  }
  onDataBound(event) {
   
    this.data = event;
  }
  ketQuaMau() {
    this.apiService.post<any>("KhamDoan/GetListKetQuaTheoYeuCauTiepNhan?yeuCauTiepNhanId="+ this.yeuCauTiepNhanId,)
      .subscribe((resultData) => {
          this.dialog
          .open(KetQuaMauPopupComponent, {
            width: "400px",
            data: { Model: resultData }
          })
          .afterClosed()
          .subscribe((result) => {
            if(result != undefined)
            {
              this.khamDoanKetLuanCLS.KSKKetQuaCanLamSang ="";
              let number = 1;
              let resultLenght = result.length;
                result.forEach(element => {
                  if(element.IsCheck == true)
                  {
                    this.khamDoanKetLuanCLS.KSKKetQuaCanLamSang += element.KetQuaCLS;
                    if(resultLenght > number)
                    {
                      this.khamDoanKetLuanCLS.KSKKetQuaCanLamSang +="; ";
                    }
                    number++;
                  }
                });
            }
           
          });
       
      },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
  
   
   
  }
 
  // cls
  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == undefined
      || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: "200px",
        height: "90px",
        data: { Title: "Đang tải dữ liệu..." },
      });
    }
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  OpenClickPopupXemKetQuaCLS(dataItem) {
    if (dataItem.TenGuidList.length == 1) {
      const params = new HttpParams({
        fromObject: {
          tenGuid: dataItem.TenGuid,
          duongDan: dataItem.XemKetQua,
        },
      });
      this.apiService
        .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
        .subscribe((result) => {
          if (result) {
            if (
              dataItem.TenGuid.indexOf(".pdf") != -1 ||
              dataItem.TenGuid.indexOf(".PDF") != -1
            ) {
              this.dialog.open(ViewImagePdfComponent, {
                disableClose: false,
                width: "1000px",
                height: "600px",
                data: {
                  Type: "PDF",
                  Title: "Xem tài liệu",
                  Description: result.MoTa !== null ? result.MoTa : "",
                  Src: result,
                },
              });
            }
            else {
              this.dialog.open(ViewImagePdfComponent, {
                disableClose: false,
                width: '1000px',
                height: '600px',
                data: { Type: "Image", Title: "Xem ảnh", Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""), Src: result }
              });
            }
          }
        });
    }
    else {
      this.dialog.open(ViewImagePdfListComponent, {
        disableClose: true,
        width: '1000px',
        height: 'auto',
        // data: { Type:"Image",Title: "Xem ảnh", Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""),Src: result}
        data: { Model: dataItem }
      }).afterClosed()
        .subscribe((result) => {
        });
    }

  }

  downloadFile(dataItem) {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang tải file...' }
    });

    dataItem.TenGuidList.forEach(element => {
      const params = new HttpParams({
        fromObject: {
          tenGuid: element.TenGuid,
          duongDan: dataItem.XemKetQua,
        },
      });
      this.apiService
        .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
        .subscribe((result) => {
          console.log(result);
          this.dataPopup = result;
          const options = new RequestOptions({ responseType: ResponseContentType.Blob });
          this.http.get(this.dataPopup, options).subscribe(res => {
            saveFile(res.blob(), element.TenFile);
            this.dialog.closeAll();
          }
          )
        });
    });
  }

  xemKetQua(dataItem) {
    // if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.dialog.open(XemKetQuaCdhaTdcnPopupComponent, {
        disableClose: false,
        width: '1000px',
        data: dataItem.Id
      }).afterClosed().subscribe(result => {
      });
    // } else {
    //   this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    // }
  }

  async taiKetQua(dataItem) {
    // if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
    this.showPopupLoadingData();
    var obj = {
      "Id": dataItem.Id,
      "HostingName": window.location.protocol + "//" + window.location.host
    };
    let html = await this.apiService.post<string>("CanLamSang/XuLyInPhieuKetQua", obj).toPromise()
      .catch(err => {
        if (err.Message !== 'Validation Failed') {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });

    if (html != undefined) {
      var objHtml = {
        "Html": html,
        "TenFile": "KetQuaCDHATDCN"
      }
      let file = await this.apiService.postExportPdf<any>('CanLamSang/GetFilePDFFromHtml', objHtml).toPromise()
        .catch(err => {
          if (err.Message !== 'Validation Failed') {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
      if (file != undefined) {
        let newBlob = new Blob([file], { type: "application/pdf" });
        let datalocalURL = window.URL.createObjectURL(newBlob);

        const options = new RequestOptions({ responseType: ResponseContentType.Blob });
        this.http.get(datalocalURL, options).subscribe(result => {
          saveFile(result.blob(), "KetQuaCDHATDCN.pdf");
          this.closePopupLoadingData();
        });
      }
    }
  }


  //================================= Yêu cầu chạy lại xét nghiệm =======================================
  OpenClickPopupXemKetQuaXNCLS(dataItem) {
    let phienXetNghiemId = dataItem.PhienXetNghiemId;
    let nhomDichVuBenhVienId = dataItem.NhomDichVuBenhVienId;
    this.dialog.open(PhieuInXetNghiemComponent, {
      disableClose: false,
      width: '1000px',
      data: { phienXetNghiemId, nhomDichVuBenhVienId }
    }).afterClosed().subscribe(res => {
      if (res == "Yes") {

      }
    });
  }

  downloadXNCLS(dataItem) {
    this.phieuInXetNghiemVo.PhienXetNghiemId = dataItem.PhienXetNghiemId;
    this.phieuInXetNghiemVo.NhomDichVuBenhVienId = dataItem.NhomDichVuBenhVienId;
    if (window.location.protocol == "http:") {
      this.phieuInXetNghiemVo.HostingName = "http://" + window.location.host;
    } else {
      this.phieuInXetNghiemVo.HostingName = "http://" + window.location.host;
    }
    this.apiService.post<Array<string>>('KhamBenh/ExportPdfKetQuaXetNghiem', this.phieuInXetNghiemVo).subscribe(
      arrHtml => {
        this.dialog.open(LayMauXetNghiemKetQuaPopupComponent, {
          disableClose: false,
          width: '1000px',
          data: arrHtml
        }).afterClosed().subscribe(result => {
        });
        this.closePopupLoadingData();
      },
      (err: ApiError) => {
        if (err.Message !== 'Validation Failed') {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }
  getSharedData() {
    return this.khamDoanKetLuanCLS;
  }
  getById(id: number) {
    this.apiService.get<KhamDoanKetLuanCLS>("KhamDoan/GetDataCLS?id=" + id).subscribe(resultData => {
      this.khamDoanKetLuanCLS = resultData;
    })
  }
  save(){
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu kết luận cận lâm sàng này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
       
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.apiService.post<any>("KhamDoan/LuuKetLuanCLS", self.khamDoanKetLuanCLS).subscribe(
            (result) => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              self.closePopupLoadingData();
              this.router.navigateByUrl('/kham-doan/kham-doan-ket-luan-cls-ksk?holdQuery=true');
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
      // else {
      //   this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
      // }
    })
  }
  cancel(){
    this.ngOnInit();
    this.router.navigateByUrl('/kham-doan/kham-doan-ket-luan-cls-ksk?holdQuery=true');
  }
  redirectKetLuan(){
    var self = this;
    if(!this.trangThaiHopDong)
    {      
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu kết luận cận lâm sàng và chuyển sang kết luận này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
        
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.apiService.post<any>("KhamDoan/LuuKetLuanCLS", self.khamDoanKetLuanCLS).subscribe(
              (result) => {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupLoadingData();
                self.router.navigate(['/kham-doan/ket-luan-kham-suc-khoe-doan/chi-tiet'],{queryParams:{"Id":this.khamDoanKetLuanCLS.HopDongKhamSucKhoeNhanVienId,"YeuCauTiepNhanId":this.yeuCauTiepNhanId,"f":"ketluancls"}});    
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupLoadingData();
              });
          } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        }
        // else {
        //   this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc']);
        // }
      })
    }
    else
    {
      self.router.navigate(['/kham-doan/ket-luan-kham-suc-khoe-doan/chi-tiet'],{queryParams:{"Id":this.khamDoanKetLuanCLS.HopDongKhamSucKhoeNhanVienId,"YeuCauTiepNhanId":this.yeuCauTiepNhanId,"f":"ketluancls"}});    
    }
    
  }
}
