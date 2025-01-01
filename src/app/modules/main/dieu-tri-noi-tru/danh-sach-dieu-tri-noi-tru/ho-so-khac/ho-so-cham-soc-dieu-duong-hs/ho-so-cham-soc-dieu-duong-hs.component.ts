import { ChangeDetectorRef, Component, Input, OnInit ,TemplateRef,ViewChild, ViewRef,EventEmitter,Output} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from 'src/@vex/services/url.service';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { from } from "rxjs";
import { delay, switchMap, map, tap } from "rxjs/operators";
import { ExportQueryInfoQueryInfo } from 'src/app/modules/main/marketing/marketing.model';
import icDelete from '@iconify/icons-ic/delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { HoSoChamSocDieuDuongHoSinh,NoiTruHoSoKhacHoSoChamSocDieuDuongHoSinh } from './ho-so-cham-soc-dieu-duong-hs.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { HoSoChamSocDieuDuongHsPopupComponent } from './ho-so-cham-soc-dieu-duong-hs-popup/ho-so-cham-soc-dieu-duong-hs-popup.component';
declare var $: any;

@Component({
  selector: 'app-ho-so-cham-soc-dieu-duong-hs',
  templateUrl: './ho-so-cham-soc-dieu-duong-hs.component.html',
  styleUrls: ['./ho-so-cham-soc-dieu-duong-hs.component.scss']
})
export class HoSoChamSocDieuDuongHsComponent implements OnInit {
  hoSoChamSocDieuDuongHoSinh = {} as HoSoChamSocDieuDuongHoSinh;
  noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh : NoiTruHoSoKhacHoSoChamSocDieuDuongHoSinh;
  popupLoadingData: any = null;
  validationErrors: any;
  documentType: DocumentType;
  getNhanVienId: any;
  queryinfo: LookupQueryInfo = new LookupQueryInfo();
  data: any;
  label: string="Thành viên tham gia";
  dataSourceFilter: any = [];
  dataSourceServer: any = [];
  newBarcode: string = "";
  value: any = [];
  checkDieuKienThemPhieuSoKet: boolean = false;
  icDelete = icDelete;
  icClear= icClear;
  gridDataSourceSoKet: any = [];
  gridDataSource: any = {
    data:[],
    total: 0
  };
  tienSuDiUng :boolean = true;
  tinhTrangBN :number = 1;
  tinhTrangBNRaVien :number = 1;
  yeuCauTiepNhanId : number = 0;
  showGrid :boolean = false;
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  checkDieuKienHienGrid: boolean = false;
  gridColumns: any[] = [];
  tenTaiKhoanDangNhap : string= "";
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
 
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }
  ngOnInit() {
     this.documentType = DocumentType.DanhSachDieuTriNoiTru;
     this.hoSoChamSocDieuDuongHoSinh = new HoSoChamSocDieuDuongHoSinh();
     this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh = new  NoiTruHoSoKhacHoSoChamSocDieuDuongHoSinh();
    this.getNhanVienId = this.authService.getAccessUser();
    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;
    this.getNhanVien();
    this.getById();
    // if(this.tienSuDiUng == true)
    // {
    //   this.changeTienSuDiUng(true);
    // }
    // if(this.tinhTrangBNRaVien == 1)
    // {
    //   this.changeTinhTrangRaVien(this.tinhTrangBNRaVien);
    // }
  
  }
  getNhanVien(){
    this.apiService.post<any>("DieuTriNoiTru/GetChuToa",this.queryinfo).subscribe(
      (result) => {
        this.data = result;
      });
  }
  getById(){
    this.apiService.post<any>("DieuTriNoiTru/GetThongTinHoSoChamSocDieuDuongHoSinh?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe(
      (result) => {
          if(result != null)
          {
           this.hoSoChamSocDieuDuongHoSinh = result;
           if(result.Id != 0)
           {
            this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id = result.Id;
            this.returnId.emit(this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id);
           }
           // tien sử bệnh
           if(this.hoSoChamSocDieuDuongHoSinh.TienSuDiUngCo == true)
           {
             this.tienSuDiUng = true;
           }
           else{
            this.tienSuDiUng = false;
           }
           // tinh trạng bn
           if(this.hoSoChamSocDieuDuongHoSinh.TinhTrangTinhTao == true)
           {
             this.tinhTrangBN = 1;
           }
           if(this.hoSoChamSocDieuDuongHoSinh.TinhTrangMe == true)
           {
            this.tinhTrangBN = 2;
           }
           if(this.hoSoChamSocDieuDuongHoSinh.TinhTrangLoMo == true)
           {
            this.tinhTrangBN = 3;
           }
           // tính trạng bn ra vien
           if(this.hoSoChamSocDieuDuongHoSinh.BSChoVe == true)
           {
             this.tinhTrangBNRaVien = 1;
           }
           if(this.hoSoChamSocDieuDuongHoSinh.ChuyenVien == true)
           {
            this.tinhTrangBNRaVien = 2;
           }
           if(this.hoSoChamSocDieuDuongHoSinh.NangXinVe == true)
           {
            this.tinhTrangBNRaVien = 3;
           }
           if(this.hoSoChamSocDieuDuongHoSinh.TinhTrangTinhTao == false &&
              this.hoSoChamSocDieuDuongHoSinh.TinhTrangMe == false &&
              this.hoSoChamSocDieuDuongHoSinh.TinhTrangLoMo == false)
           {
             this.tinhTrangBN = 1;
             this.changeTinhTrang(this.tinhTrangBN);
           }
           if(this.hoSoChamSocDieuDuongHoSinh.BSChoVe == false &&
            this.hoSoChamSocDieuDuongHoSinh.ChuyenVien == false &&
            this.hoSoChamSocDieuDuongHoSinh.NangXinVe == false)
         {
           this.tinhTrangBNRaVien = 1;
           this.changeTinhTrangRaVien(this.tinhTrangBN);
         }
          }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
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
  In() {
    let dataIn = {
      NoiTruHoSoKhacId: this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id,
      YeuCauTiepNhanId: this.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 39,
    }
      if(this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id == 0)
      {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu điều dưỡng chăm sóc hộ sinh này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            const thongTinHoSo = JSON.stringify(this.hoSoChamSocDieuDuongHoSinh);
            this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
            this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.LoaiHoSoDieuTriNoiTru = 39;
            this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.ThongTinHoSo = thongTinHoSo;
            this.apiService.post<any>("DieuTriNoiTru/LuuHoSoDieuDtriChamSocHoSinh", this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh).subscribe(
              (result) => {
                dataIn.NoiTruHoSoKhacId =result.Id;
                this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id =result.Id;
                this.returnId.emit(this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id);
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                // this.Huy();
                this.apiService.post<any>("DieuTriNoiTru/InHoSoDieuDtriChamSocHoSinh", dataIn).subscribe(
                  (result) => {
                          this.dialog.open(HoSoChamSocDieuDuongHsPopupComponent, {
                              disableClose: true,
                              width: '1000px',
                              data: { Model: result }
                          }).afterClosed().subscribe(() => {
                          });
                    this.closePopupLoadingData();
                  },
                  (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                  });
              },
              (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
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
      else{
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu điều dưỡng chăm sóc hộ sinh này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            const thongTinHoSo = JSON.stringify(this.hoSoChamSocDieuDuongHoSinh);
            this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
            this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.LoaiHoSoDieuTriNoiTru = 39;
            this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.ThongTinHoSo = thongTinHoSo;
            this.apiService.post<any>("DieuTriNoiTru/LuuHoSoDieuDtriChamSocHoSinh", this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh).subscribe(
              (result) => {
                dataIn.NoiTruHoSoKhacId =result;
                this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id =result;
                this.returnId.emit(this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id);
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                this.Huy();
                this.apiService.post<any>("DieuTriNoiTru/InHoSoDieuDtriChamSocHoSinh", dataIn).subscribe(
                  (result) => {
                          this.dialog.open(HoSoChamSocDieuDuongHsPopupComponent, {
                              disableClose: true,
                              width: '1000px',
                              data: { Model: result }
                          }).afterClosed().subscribe(() => {
                          });
                    this.closePopupLoadingData();
                  },
                  (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                  });
              },
              (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
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
  Huy(){
    this.getById();
  }
  Luu(){
    const thongTinHoSo = JSON.stringify(this.hoSoChamSocDieuDuongHoSinh);
    this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.LoaiHoSoDieuTriNoiTru = 39;
    this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.ThongTinHoSo = thongTinHoSo;
   
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu phiếu hồ sơ chăm sóc điều dưỡng hộ sinh này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          this.apiService.post<any>("DieuTriNoiTru/LuuHoSoDieuDtriChamSocHoSinh", this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh).subscribe(
            (result) => {
             
              if(result.Id != undefined)
              {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id = result.Id;
                this.returnId.emit(this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id);
              }
              if(result.Id === undefined)
              {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id = result;
                this.returnId.emit(this.noiTruHoSoKhacHoSoChamSocDieuDuongHoSinh.Id);
              }
              this.checkDieuKienThemPhieuSoKet = true;
              this.Huy();
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });

        }
      },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
  }
  changeTienSuDiUng(event){
    this.tienSuDiUng = event;
    if(this.tienSuDiUng == true)
    {
      this.hoSoChamSocDieuDuongHoSinh.TienSuDiUngCo =this.tienSuDiUng;
      this.hoSoChamSocDieuDuongHoSinh.TienSuDiUngKhong = null;
    }
    else{
      this.hoSoChamSocDieuDuongHoSinh.TienSuDiUngKhong =this.tienSuDiUng;
      this.hoSoChamSocDieuDuongHoSinh.TienSuDiUngCo =false;
      this.hoSoChamSocDieuDuongHoSinh.TienSuDiUngneuCo = null;
    }
  }
  changeTinhTrang(event){
    this.tinhTrangBN = event;
    if(this.tinhTrangBN == 1)
    {
      this.hoSoChamSocDieuDuongHoSinh.TinhTrangTinhTao = true;
      this.hoSoChamSocDieuDuongHoSinh.TinhTrangLoMo = false;
      this.hoSoChamSocDieuDuongHoSinh.TinhTrangMe = false;
    }
    if(this.tinhTrangBN == 2)
    {
      this.hoSoChamSocDieuDuongHoSinh.TinhTrangMe = true;
      this.hoSoChamSocDieuDuongHoSinh.TinhTrangTinhTao = false;
      this.hoSoChamSocDieuDuongHoSinh.TinhTrangLoMo = false;
    }
    if(this.tinhTrangBN == 3){
      this.hoSoChamSocDieuDuongHoSinh.TinhTrangLoMo = true;
      this.hoSoChamSocDieuDuongHoSinh.TinhTrangTinhTao = false;
      this.hoSoChamSocDieuDuongHoSinh.TinhTrangMe =false;
    }
  }
  changeTinhTrangRaVien(event){
    this.tinhTrangBNRaVien = event;
    if(this.tinhTrangBNRaVien == 1)
    {
      this.hoSoChamSocDieuDuongHoSinh.BSChoVe = true;
      this.hoSoChamSocDieuDuongHoSinh.ChuyenVien = false;
      this.hoSoChamSocDieuDuongHoSinh.NangXinVe = false;
    }
    if(this.tinhTrangBNRaVien == 2)
    {
      this.hoSoChamSocDieuDuongHoSinh.NangXinVe = false;
      this.hoSoChamSocDieuDuongHoSinh.BSChoVe = false;
      this.hoSoChamSocDieuDuongHoSinh.ChuyenVien = true;
    }
    if(this.tinhTrangBNRaVien == 3){
      this.hoSoChamSocDieuDuongHoSinh.ChuyenVien = false;
      this.hoSoChamSocDieuDuongHoSinh.BSChoVe = false;
      this.hoSoChamSocDieuDuongHoSinh.NangXinVe =true;
    }
  }
}
