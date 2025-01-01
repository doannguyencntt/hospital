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
import { TrichBienBanHoiChan,NoiTruHoSoKhacTrichBienBanHoiChan,LookupQueryInfo, FileChuKyModel, ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { PhieuInTrichBienBanHoiChanPopupComponent } from './phieu-in-trich-bien-ban-hoi-chan-popup/phieu-in-trich-bien-ban-hoi-chan-popup.component';
import { from } from "rxjs";
import { delay, switchMap, map, tap } from "rxjs/operators";
import { ExportQueryInfoQueryInfo } from 'src/app/modules/main/marketing/marketing.model';
import icDelete from '@iconify/icons-ic/delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
declare var $: any;

@Component({
  selector: 'app-trich-bien-ban-hoi-chan',
  templateUrl: './trich-bien-ban-hoi-chan.component.html',
  styleUrls: ['./trich-bien-ban-hoi-chan.component.scss']
})
export class TrichBienBanHoiChanComponent implements OnInit {
  trichBienBanHoiChan = {} as TrichBienBanHoiChan;
  noiTruHoSoKhacTrichBienBanHoiChan : NoiTruHoSoKhacTrichBienBanHoiChan;
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
  showGrid :boolean = false;
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  checkDieuKienHienGrid: boolean = false;
  gridColumns: any[] = [];
  tenTaiKhoanDangNhap : string= "";
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('tuNgayTemplate', { static: true }) tuNgayTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @Input()  yeuCauTiepNhanId:number= 0;
  @ViewChild("multiselect", { static: true }) public multiselect: any;
  @ViewChild('GridSoKet', { read: GridComponent, static: false }) gridChild: GridComponent;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }
  ngOnInit() {
    // this.documentType = DocumentType.TrichBienBanHoiChan;
    this.noiTruHoSoKhacTrichBienBanHoiChan = new  NoiTruHoSoKhacTrichBienBanHoiChan();
    this.trichBienBanHoiChan = new TrichBienBanHoiChan();
    this.getNhanVienId = this.authService.getAccessUser();
    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;
    this.getData();
    this.getNhanVien();
    this.getThanhVienThamGia();
    this.dataSourceFilter = this.dataSourceServer;
    this.gridColumns = [
      { Field: "", Title: "#", Width: 35, Template: this.sttTemplate },
      { Field: "NgayHoiChanString", Title: "Ngày hội chẩn", Width: 100, Template: this.tuNgayTemplate },
      { Field: "ChuToa", Title: "Chủ tọa", Width: 100 },
      { Field: "ThuKy", Title: "Thư ký", Width: 100 },
      { Field: "ThanhVienThamGia", Title: "Thành viên tham gia", Width: 100 },
      { Field: "ChanDoan", Title: "Chẩn đoán", Width: 100 },
      { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
    ];
  }
  getNhanVien(){
    this.apiService.post<any>("DieuTriNoiTru/GetChuToa",this.queryinfo).subscribe(
      (result) => {
        this.data = result;
      });
  }
  setDataGridView() {
    this.gridChild.gridDataSource = this.gridDataSource;

    if (this.gridChild !== undefined)
    {
      this.gridChild.setDataSource();
    }
      
  }
  getDanhSachTrichBienBan(){
    var self = this;
    self.exportQueryInfoQueryInfo.AdditionalSearchString = self.yeuCauTiepNhanId.toString();
    self.apiService.post<any>("DieuTriNoiTru/GetDanhSachTrichBienBanHoiChan", self.exportQueryInfoQueryInfo).subscribe(
      (result) => {
       
        this.gridDataSource = {
          data: result.Data,
          total: result.Data.length
        };
        if(this.gridDataSource.total == 0){
          this.checkDieuKienThemPhieuSoKet = false;
          this.showGrid = true;
        }
         this.setDataGridView();
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  getThanhVienThamGia(){
    this.apiService.post<any>("DieuTriNoiTru/GetChuToa",this.queryinfo).subscribe(
      (result) => {
        this.dataSourceServer = result;
        this.dataSourceFilter = this.dataSourceServer;
        setTimeout(() =>{
          $('kendo-textbox-container > kendo-multiselect .k-multiselect-wrap.k-floatwrap').css('margin-top','20px');
          $('kendo-textbox-container > kendo-multiselect').css('background-color', '#F2F2F2');
        },50);
      });
  }
  In() {
    var self = this;
    let dataIn = {
      Hosting: null,
      NoiTruHoSoKhacId: this.noiTruHoSoKhacTrichBienBanHoiChan.Id,
      YeuCauTiepNhanId: this.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 3,
    }
      if(this.noiTruHoSoKhacTrichBienBanHoiChan.Id == 0)
      {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu trích biên bản hội chẩn này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            let dateHoiChan = new Date(this.trichBienBanHoiChan.HoiChanLuc);
            this.trichBienBanHoiChan.HoiChanLucStringUTC =  CommonService.formatDateTime(dateHoiChan, "mm/dd/yyyy");
            const thongTinHoSo = JSON.stringify(self.trichBienBanHoiChan);
            self.noiTruHoSoKhacTrichBienBanHoiChan.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacTrichBienBanHoiChan.FileChuKy = self.trichBienBanHoiChan.FileChuKy;
            self.noiTruHoSoKhacTrichBienBanHoiChan.LoaiHoSoDieuTriNoiTru = 3;
            self.noiTruHoSoKhacTrichBienBanHoiChan.ThoiGianHoiChan = self.trichBienBanHoiChan.HoiChanLuc;
            self.noiTruHoSoKhacTrichBienBanHoiChan.ThongTinHoSo = thongTinHoSo;
            self.apiService.post<any>("DieuTriNoiTru/LuuTrichBienBanHoiChan", self.noiTruHoSoKhacTrichBienBanHoiChan).subscribe(
              (result) => {
                dataIn.NoiTruHoSoKhacId =result.Id;
                this.noiTruHoSoKhacTrichBienBanHoiChan.Id =result.Id;
                this.returnId.emit(this.noiTruHoSoKhacTrichBienBanHoiChan.Id);
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.checkDieuKienThemPhieuSoKet = true;
                self.getDanhSachTrichBienBan();
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InTrichBienBanHoiChan", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(PhieuInTrichBienBanHoiChanPopupComponent, {
                              disableClose: true,
                              width: '1000px',
                              data: { Model: result }
                          }).afterClosed().subscribe(() => {
                          });
                    self.closePopupLoadingData();
                  },
                  (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      self.notificationService.showError(err.Message);
                    }
                    self.closePopupLoadingData();
                  });
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
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
      else{
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu trích biên bản hội chẩn này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            let dateHoiChan = new Date(this.trichBienBanHoiChan.HoiChanLuc);
            this.trichBienBanHoiChan.HoiChanLucStringUTC =  CommonService.formatDateTime(dateHoiChan, "mm/dd/yyyy");
            const thongTinHoSo = JSON.stringify(self.trichBienBanHoiChan);
            self.noiTruHoSoKhacTrichBienBanHoiChan.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacTrichBienBanHoiChan.FileChuKy = self.trichBienBanHoiChan.FileChuKy;
            self.noiTruHoSoKhacTrichBienBanHoiChan.LoaiHoSoDieuTriNoiTru = 3;
            self.noiTruHoSoKhacTrichBienBanHoiChan.ThoiGianHoiChan = self.trichBienBanHoiChan.HoiChanLuc;
            self.noiTruHoSoKhacTrichBienBanHoiChan.ThongTinHoSo = thongTinHoSo;
            self.apiService.post<any>("DieuTriNoiTru/LuuTrichBienBanHoiChan", self.noiTruHoSoKhacTrichBienBanHoiChan).subscribe(
              (result) => {
                dataIn.NoiTruHoSoKhacId =result;
                this.noiTruHoSoKhacTrichBienBanHoiChan.Id =result;
                this.returnId.emit(this.noiTruHoSoKhacTrichBienBanHoiChan.Id);
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                self.checkDieuKienThemPhieuSoKet = true;
                self.getDanhSachTrichBienBan();
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InTrichBienBanHoiChan", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(PhieuInTrichBienBanHoiChanPopupComponent, {
                              disableClose: true,
                              width: '1000px',
                              data: { Model: result }
                          }).afterClosed().subscribe(() => {
                          });
                    self.closePopupLoadingData();
                  },
                  (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      self.notificationService.showError(err.Message);
                    }
                    self.closePopupLoadingData();
                  });
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
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
  Huy() {
    var self = this;
    // show cái cuối cùng
    if(this.noiTruHoSoKhacTrichBienBanHoiChan.Id != 0)
    {
      this.viewDataSoKet(this.noiTruHoSoKhacTrichBienBanHoiChan.Id);
    }
    else{
      if (this.trichBienBanHoiChan != null) {
        self.apiService.post<any>("DieuTriNoiTru/GetThongTinTrichBienBanHoiChan?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
          (result) => {
              if(result != null)
              {
                let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
                self.trichBienBanHoiChan = thongTinHoSo;
                self.noiTruHoSoKhacTrichBienBanHoiChan.Id = result.Id;
                this.returnId.emit(this.noiTruHoSoKhacTrichBienBanHoiChan.Id);
                self.trichBienBanHoiChan.FileChuKy = [...result.ListFile];
              }
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
        }
        else{
          self.trichBienBanHoiChan = new TrichBienBanHoiChan();
        }
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
  getData()
  {
    var self = this;
    
    // show cái cuối cùng
    if(this.noiTruHoSoKhacTrichBienBanHoiChan.Id != 0)
    {
      this.viewDataSoKet(this.noiTruHoSoKhacTrichBienBanHoiChan.Id);
    }
    else{
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinTrichBienBanHoiChan?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
          if(result != null)
          {
            this.checkDieuKienThemPhieuSoKet = true;
            let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
            self.trichBienBanHoiChan = thongTinHoSo;
            self.noiTruHoSoKhacTrichBienBanHoiChan.Id = result.Id;
            this.returnId.emit(this.noiTruHoSoKhacTrichBienBanHoiChan.Id);
            self.trichBienBanHoiChan.FileChuKy = [...result.ListFile];
            this.getDanhSachTrichBienBan();
          }
          else{
            self.trichBienBanHoiChan = new TrichBienBanHoiChan();

            let nhanVienThucHienId =self.getNhanVienId.Id;
            self.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
              (result) => {
                this.noiTruHoSoKhacTrichBienBanHoiChan.Id = 0;
                self.trichBienBanHoiChan.TaiKhoanDangNhap = result.TenNhanVien;
                self.trichBienBanHoiChan.NgayThucHien = result.NgayThucHien;
                self.trichBienBanHoiChan.DaDieuTriTuNgay = result.DaDieuTriTuNgay;

                self.trichBienBanHoiChan.TaiSoGiuong = result.TaiSoGiuong;
                self.trichBienBanHoiChan.Phong = result.Phong;
                self.trichBienBanHoiChan.Khoa = result.Khoa;
                self.trichBienBanHoiChan.ChanDoan = result.ChanDoan
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
              });
          }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
    }
  }
  Luu() {
    var self = this;
    let dateHoiChan = new Date(this.trichBienBanHoiChan.HoiChanLuc);
    this.trichBienBanHoiChan.HoiChanLucStringUTC =  CommonService.formatDateTime(dateHoiChan, "mm/dd/yyyy");
    const thongTinHoSo = JSON.stringify(this.trichBienBanHoiChan);
    self.noiTruHoSoKhacTrichBienBanHoiChan.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacTrichBienBanHoiChan.FileChuKy = self.trichBienBanHoiChan.FileChuKy;
    self.noiTruHoSoKhacTrichBienBanHoiChan.LoaiHoSoDieuTriNoiTru = 3;
    self.noiTruHoSoKhacTrichBienBanHoiChan.ThoiGianHoiChan = self.trichBienBanHoiChan.HoiChanLuc;
    self.noiTruHoSoKhacTrichBienBanHoiChan.ThongTinHoSo = thongTinHoSo;

      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu lại trích biên bản hội chẩn này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {

          self.apiService.post<any>("DieuTriNoiTru/LuuTrichBienBanHoiChan", self.noiTruHoSoKhacTrichBienBanHoiChan).subscribe(
            (result) => {
              
              if(result.Id != undefined)
              {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                this.noiTruHoSoKhacTrichBienBanHoiChan.Id  = result.Id;
                this.returnId.emit(this.noiTruHoSoKhacTrichBienBanHoiChan.Id);
              }
              else{
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                this.noiTruHoSoKhacTrichBienBanHoiChan.Id  = result;
                this.returnId.emit(this.noiTruHoSoKhacTrichBienBanHoiChan.Id);
              }
              
              self.checkDieuKienThemPhieuSoKet = true;
              self.getDanhSachTrichBienBan();
              self.Huy();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        }
    },
    (err: ApiError) => {
      self.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        self.notificationService.showError(err.Message);
      }
    });
}
getTaiKhoanDangNhap(){
  var self = this;
     self.apiService.post<any>("DieuTriNoiTru/GetTenDangNhap").subscribe(
          (result) => {
              this.tenTaiKhoanDangNhap = result;
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
}
hoiChanLucChange(){
  if(this.trichBienBanHoiChan.HoiChanLuc != null)
  {
    this.trichBienBanHoiChan.DaDieuTriDenNgay  = this.trichBienBanHoiChan.HoiChanLuc;
  }
}
viewDataSoKet(data: any) {
  var self = this;
  this.trichBienBanHoiChan = new TrichBienBanHoiChan();
  self.apiService.post<any>("DieuTriNoiTru/GetThongTinTrichBienBanHoiChanViewDS?noiTruHoSoKhacId=" + data).subscribe(
    (result) => {
      if (result != null) {
        this.checkDieuKienThemPhieuSoKet = true;
        let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
        self.trichBienBanHoiChan = thongTinHoSo;
        this.noiTruHoSoKhacTrichBienBanHoiChan.Id = result.Id;
        self.trichBienBanHoiChan.FileChuKy = [...result.ListFile];
      }
    },
    (err: ApiError) => {
      self.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        self.notificationService.showError(err.Message);
      }
    });
}
change(event){
  if (event != undefined && event != null && event != "") {
    this.trichBienBanHoiChan.HoiChanLucStringUTC = CommonService.formatDate(event, 'mm/dd/yyyy');
  }
  else {
    this.trichBienBanHoiChan.HoiChanLucStringUTC = null;
  }
}
xoaTrichBienBan(dataItem){
  var self = this;
  self.dialog.open(ConfirmComponent, {
    disableClose: false,
    width: "500px",
    data: {
      Title: "Xác nhận",
      Message: "Bạn có muốn xóa trích biên bản hội chẩn này không ?",
    },
  }).afterClosed().subscribe((res) => {
    if (res == "Yes") {
      self.apiService.post<any>("DieuTriNoiTru/xoaBienBan?Id="+ dataItem.Id).subscribe(
        (result) => {
          this.noiTruHoSoKhacTrichBienBanHoiChan.Id = 0;
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
          this.getDanhSachTrichBienBan();
          this.getData();
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    }
  },
    (err: ApiError) => {
      self.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        self.notificationService.showError(err.Message);
      }
    });
}
ThemPhieu() {

  var self = this;
  self.dialog.open(ConfirmComponent, {
    disableClose: false,
    width: "500px",
    data: {
      Title: "Xác nhận",
      Message: "Bạn có muốn thêm mới phiếu trích biên bản hội chẩn này không ?",
    },
  }).afterClosed().subscribe((res) => {
    if (res == "Yes") {
      this.checkDieuKienThemPhieuSoKet = false;
      this.trichBienBanHoiChan = new TrichBienBanHoiChan();
      this.trichBienBanHoiChan.FileChuKy = new Array<FileChuKyModel>();
      const thongTinHoSo = JSON.stringify(self.trichBienBanHoiChan);
      self.noiTruHoSoKhacTrichBienBanHoiChan.Id = 0;
      self.noiTruHoSoKhacTrichBienBanHoiChan.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
      self.noiTruHoSoKhacTrichBienBanHoiChan.LoaiHoSoDieuTriNoiTru = 5;
      self.noiTruHoSoKhacTrichBienBanHoiChan.ThongTinHoSo = thongTinHoSo;
      this.getTaiKhoanDangNhap();
      self.trichBienBanHoiChan.TaiKhoanDangNhap = self.tenTaiKhoanDangNhap;
        let nhanVienThucHienId = self.getNhanVienId.Id;
        self.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
          (result) => {
            this.getTaiKhoanDangNhap();
            this.checkDieuKienThemPhieuSoKet = false;
            this.noiTruHoSoKhacTrichBienBanHoiChan.Id = 0;
            self.trichBienBanHoiChan.TaiKhoanDangNhap = result.TenNhanVien;
            self.trichBienBanHoiChan.NgayThucHien = result.NgayThucHien;
            self.trichBienBanHoiChan.DaDieuTriTuNgay = result.DaDieuTriTuNgay;

            self.trichBienBanHoiChan.TaiSoGiuong = result.TaiSoGiuong;
            self.trichBienBanHoiChan.Phong = result.Phong;
            self.trichBienBanHoiChan.Khoa = result.Khoa;
            self.trichBienBanHoiChan.ChanDoan = result.ChanDoan
            self.getDanhSachTrichBienBan();
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
    }

    this.ref.detectChanges();
  },
    (err: ApiError) => {
      self.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        self.notificationService.showError(err.Message);
      }
    });
}
// node
  public open(): void {
    // this.getThanhVienThamGia();

    // this.multiselect.toggle(false);
  }
  blur() {
      if (this.newBarcode != null && this.newBarcode != "") {
        this.dataSourceServer.push(this.newBarcode);
        this.trichBienBanHoiChan.NguoiThamGia.push(this.newBarcode);
      }
      this.newBarcode = "";
  }
  onKey(event: any) {
    if (event.keyCode === 13) {
      this.multiselect.blur();
      this.multiselect.focus();
    }
  }
  public filterChange(filter: any): void {
    this.dataSourceFilter = this.dataSourceServer;
    if (filter.trim() != undefined && filter.trim() != "" && filter.trim() != null) {
      if (filter != null && filter != "") {
        this.newBarcode = filter;
        this.dataSourceFilter = this.dataSourceServer.filter(
          s => s.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        );
      }
    }
    // else{
    //   this.newBarcode = filter;
    // }
  }
}
