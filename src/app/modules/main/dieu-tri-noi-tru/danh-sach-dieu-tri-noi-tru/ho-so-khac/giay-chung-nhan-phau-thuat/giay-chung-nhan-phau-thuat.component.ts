import { ChangeDetectorRef, Component, Input, OnInit,Output ,EventEmitter,ViewChild} from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import icAdd from '@iconify/icons-ic/twotone-add';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { GiayChungNhanPhauThuat, InfoYeuCauDichVuKyThuat, NoiTruHoSoKhacGiayChungNhanPhauThuat, ThemTinhTrangRaVien } from './giay-chung-nhan-phau-thuat.model';
import { PopupAddTinhTrangRaVienComponent } from './popup-add-tinh-trang-ra-vien/popup-add-tinh-trang-ra-vien.component';
import { GiayChungNhanPhauThuatPopupComponent } from '../giay-chung-nhan-phau-thuat-popup/giay-chung-nhan-phau-thuat-popup.component';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
import { MultiselectQueryInfo } from 'src/app/shared/models/common.model';

@Component({
  selector: 'app-giay-chung-nhan-phau-thuat',
  templateUrl: './giay-chung-nhan-phau-thuat.component.html',
  styleUrls: ['./giay-chung-nhan-phau-thuat.component.scss']
})
export class GiayChungNhanPhauThuatComponent implements OnInit {
  giayChungNhanPhauThuat = new GiayChungNhanPhauThuat();
  noiTruHoSoKhacGiayChungNhanPhauThuat =  new NoiTruHoSoKhacGiayChungNhanPhauThuat();

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  validationErrors: any[] = [];
  popupSavingData: any = null;
  popupLoadingData: any = null;
  yeuCauTiepNhanId: number = 0;
  noiTruHoSoKhacId: number = 0;
  icAdd= icAdd;
  
  queryInfo: MultiselectQueryInfo = new MultiselectQueryInfo();
  @ViewChild('phuongPhapPttt', { static: true }) phuongPhapPtttMultiselect: MultiselectComponent;
  @Input() IsKetThucBenhAn: any;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    const id: number = this.dieuTriNoiTruModel.Id;
    if (id != undefined && id != null) {
      this.yeuCauTiepNhanId = id;
      this.getById(id);
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

  closePopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
  
  cancel(){
    if(this.yeuCauTiepNhanId != null)
    {
      this.getById(this.yeuCauTiepNhanId);
    }
  }
  save(){
    var self = this;
    

    if(this.giayChungNhanPhauThuat.NgayThangNam != null)
    {
      let dateNgayThangNam = new Date(this.giayChungNhanPhauThuat.NgayThangNam);
      this.giayChungNhanPhauThuat.NgayThangNamText =  CommonService.formatDateTime(dateNgayThangNam, "mm/dd/yyyy");
    }
    if(this.giayChungNhanPhauThuat.PhauThuatNgay != null)
    {
      let datePhauThuatNgay = new Date(this.giayChungNhanPhauThuat.PhauThuatNgay);
      this.giayChungNhanPhauThuat.PhauThuatNgayText =  CommonService.formatDateTime(datePhauThuatNgay, "mm/dd/yyyy");
    }
    
    
    const thongTinHoSo = JSON.stringify(this.giayChungNhanPhauThuat);
    self.noiTruHoSoKhacGiayChungNhanPhauThuat.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacGiayChungNhanPhauThuat.LoaiHoSoDieuTriNoiTru = 42;
    self.noiTruHoSoKhacGiayChungNhanPhauThuat.ThongTinHoSo = thongTinHoSo;
    self.noiTruHoSoKhacGiayChungNhanPhauThuat.DichVuPTTTId = this.giayChungNhanPhauThuat.DichVuPTTTId;

      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu lại phiếu này  không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          this.savingPage();
          if(this.noiTruHoSoKhacGiayChungNhanPhauThuat.DichVuPTTTId == 0){
            this.noiTruHoSoKhacGiayChungNhanPhauThuat.DichVuPTTTId = null;
          }
          self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungNhanPhauThuat", self.noiTruHoSoKhacGiayChungNhanPhauThuat).subscribe(
            (result) => {
              
              if(result.Id != undefined)
              {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id  = result.Id;
                this.returnId.emit(this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id);
              }
              else{
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id  = result;
                this.returnId.emit(this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id);
              }
              this.closePopupSavingData();
            },
            (err: ApiError) => {
              debugger
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              this.closePopupSavingData();
            });
        }
    },
    (err: ApiError) => {
      debugger
      self.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        self.notificationService.showError(err.Message);
        this.closePopupSavingData();
      }
    });
    
  }
  getById(id: number) {
    var self = this;
    self.loadingPage();
    self.apiService.get<GiayChungNhanPhauThuat>("DieuTriNoiTru/GetThongTinGiayChungNhanPhauThuat?yeuCauTiepNhanId=" + id).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          self.giayChungNhanPhauThuat = resultData;
          if(resultData.PhuongThucPhauThuats != null)
          {
            this.queryInfo.ParameterDependencies = '{PhuongThucPhauThuats:\'' + this.giayChungNhanPhauThuat.PhuongThucPhauThuats + '\'}';
            this.queryInfo.Take = 50;
            this.phuongPhapPtttMultiselect.queryInfo = this.queryInfo;
            this.phuongPhapPtttMultiselect.getDataForLookup();
          }
          if (resultData.NoiTruHoSoKhacId != undefined && resultData.NoiTruHoSoKhacId != 0) {
            self.noiTruHoSoKhacGiayChungNhanPhauThuat.Id = resultData.NoiTruHoSoKhacId;
            this.returnId.emit(resultData.NoiTruHoSoKhacId);
           
          
          }

        }
        self.closePopupLoadingData();

      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingData();
      });
  }
  addTinhTrangRaVien(){
    this.dialog
    .open(PopupAddTinhTrangRaVienComponent, {
      width: "600px",
    })
    .afterClosed()
    .subscribe((result) => {
      if(result != undefined)
      {
        let themTinhTrangRaVien = new ThemTinhTrangRaVien();
        this.giayChungNhanPhauThuat.TinhTrangRaVienId =result.Id;
        this.giayChungNhanPhauThuat.TinhTrangRaVienText =result.Text;
      }
     
    });
  }
  selectionPTTT(event:any){
 
    this.reset();
    if(event != null)
    {
      this.apiService.get<InfoYeuCauDichVuKyThuat>("DieuTriNoiTru/GetInfoDichVuKyThuatThuocPhauThuatThuThuatCuaBenhNhan?ycdvktId=" + event.KeyId).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
             this.giayChungNhanPhauThuat.PhauThuatNgay = resultData.PhauThuatNgay;
             this.giayChungNhanPhauThuat.PhuongThucVoCamId = resultData.PhuongThucVoCamId;
             this.giayChungNhanPhauThuat.PhauThuatNgay = resultData.PhauThuatNgay;
             this.giayChungNhanPhauThuat.PhuongThucVoCamText = resultData.PhuongThucVoCamText;
             this.giayChungNhanPhauThuat.PhauThuatVienId = resultData.PhauThuatVienId;
             this.giayChungNhanPhauThuat.PhauThuatVienText = resultData.PhauThuatVienText;
             this.giayChungNhanPhauThuat.PhuongThucPhauThuats = resultData.PhuongThucPhauThuats;

            this.queryInfo.ParameterDependencies = '{PhuongThucPhauThuats:\'' + this.giayChungNhanPhauThuat.PhuongThucPhauThuats + '\'}';
            this.queryInfo.Take = 50;
            this.phuongPhapPtttMultiselect.queryInfo = this.queryInfo;
            this.phuongPhapPtttMultiselect.getDataForLookup();
          }
  
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
  }
  reset(){
    this.giayChungNhanPhauThuat.PhauThuatNgay = null;
    this.giayChungNhanPhauThuat.PhuongThucVoCamId = null;
    this.giayChungNhanPhauThuat.PhauThuatNgay =null;
    this.giayChungNhanPhauThuat.PhuongThucVoCamText = null;
    this.giayChungNhanPhauThuat.PhauThuatVienId = null;
    this.giayChungNhanPhauThuat.PhauThuatVienText = null;
    this.giayChungNhanPhauThuat.PhuongThucPhauThuats =[];
  }
  print(){
    if(this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id == null || this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id == 0)
    {
      var self = this;
    if(this.giayChungNhanPhauThuat.NgayThangNam != null)
    {
      let dateNgayThangNam = new Date(this.giayChungNhanPhauThuat.NgayThangNam);
      this.giayChungNhanPhauThuat.NgayThangNamText =  CommonService.formatDateTime(dateNgayThangNam, "mm/dd/yyyy");
    }
    if(this.giayChungNhanPhauThuat.PhauThuatNgay != null)
    {
      let datePhauThuatNgay = new Date(this.giayChungNhanPhauThuat.PhauThuatNgay);
      this.giayChungNhanPhauThuat.PhauThuatNgayText =  CommonService.formatDateTime(datePhauThuatNgay, "mm/dd/yyyy");
    }
    
    
    const thongTinHoSo = JSON.stringify(this.giayChungNhanPhauThuat);
    self.noiTruHoSoKhacGiayChungNhanPhauThuat.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacGiayChungNhanPhauThuat.LoaiHoSoDieuTriNoiTru = 42;
    self.noiTruHoSoKhacGiayChungNhanPhauThuat.ThongTinHoSo = thongTinHoSo;
    self.noiTruHoSoKhacGiayChungNhanPhauThuat.DichVuPTTTId = this.giayChungNhanPhauThuat.DichVuPTTTId;

    this.savingPage();
    if(this.noiTruHoSoKhacGiayChungNhanPhauThuat.DichVuPTTTId == 0){
      this.noiTruHoSoKhacGiayChungNhanPhauThuat.DichVuPTTTId = null;
    }
    self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungNhanPhauThuat", self.noiTruHoSoKhacGiayChungNhanPhauThuat).subscribe(
      (result) => {
        
        if(result.Id != undefined)
        {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id  = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id);
        }
        else{
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
          this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id  = result;
          this.returnId.emit(this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id);
        }
        if(this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id != null  || this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id == 0)
        {
          this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có in phiếu giấy chứng nhận phẩu thuật ?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
              let modelInfo = {
                YeuCauTiepNhanId : this.yeuCauTiepNhanId
              };
              this.apiService.post<any>("DieuTriNoiTru/InGiayChungNhanPhauThuat", modelInfo).subscribe(
                (result) => {
                  this.dialog.open(GiayChungNhanPhauThuatPopupComponent, {
                            disableClose: true,
                            width: '1000px',
                            data: { Model: result }
                        }).afterClosed().subscribe(() => {
                        });
                        // this.closePopupLoadingData();
                },
                (err: ApiError) => {
                  this.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                  }
                  // this.closePopupLoadingData();
                });
            }
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.validationErrors = err.ValidationErrors;
            this.notificationService.showError(err.Message);
          }
          // this.closePopupLoadingData();
        });
        }
        this.closePopupSavingData();
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        this.closePopupSavingData();
      });
     
    }
    else{
      
      var self = this;
      if(this.giayChungNhanPhauThuat.NgayThangNam != null)
      {
        let dateNgayThangNam = new Date(this.giayChungNhanPhauThuat.NgayThangNam);
        this.giayChungNhanPhauThuat.NgayThangNamText =  CommonService.formatDateTime(dateNgayThangNam, "mm/dd/yyyy");
      }
      if(this.giayChungNhanPhauThuat.PhauThuatNgay != null)
      {
        let datePhauThuatNgay = new Date(this.giayChungNhanPhauThuat.PhauThuatNgay);
        this.giayChungNhanPhauThuat.PhauThuatNgayText =  CommonService.formatDateTime(datePhauThuatNgay, "mm/dd/yyyy");
      }
      
      
      const thongTinHoSo = JSON.stringify(this.giayChungNhanPhauThuat);
      self.noiTruHoSoKhacGiayChungNhanPhauThuat.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
      self.noiTruHoSoKhacGiayChungNhanPhauThuat.LoaiHoSoDieuTriNoiTru = 42;
      self.noiTruHoSoKhacGiayChungNhanPhauThuat.ThongTinHoSo = thongTinHoSo;
      self.noiTruHoSoKhacGiayChungNhanPhauThuat.DichVuPTTTId = this.giayChungNhanPhauThuat.DichVuPTTTId;
  
      this.savingPage();
      if(this.noiTruHoSoKhacGiayChungNhanPhauThuat.DichVuPTTTId == 0){
        this.noiTruHoSoKhacGiayChungNhanPhauThuat.DichVuPTTTId = null;
      }
      self.apiService.post<any>("DieuTriNoiTru/LuuGiayChungNhanPhauThuat", self.noiTruHoSoKhacGiayChungNhanPhauThuat).subscribe(
        (result) => {
          
          if(result.Id != undefined)
          {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id  = result.Id;
            this.returnId.emit(this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id);
          }
          else{
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
            this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id  = result;
            this.returnId.emit(this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id);
          }
          if( this.noiTruHoSoKhacGiayChungNhanPhauThuat.Id != 0)
          {
            this.dialog.open(ConfirmComponent, {
              disableClose: false,
              width: "500px",
              data: {
                Title: "Xác nhận",
                Message: "Bạn có in phiếu giấy chứng nhận phẩu thuật ?",
              },
            }).afterClosed().subscribe((res) => {
              if (res == "Yes") {
                let modelInfo = {
                  YeuCauTiepNhanId : this.yeuCauTiepNhanId
                };
                this.apiService.post<any>("DieuTriNoiTru/InGiayChungNhanPhauThuat", modelInfo).subscribe(
                  (result) => {
                    this.dialog.open(GiayChungNhanPhauThuatPopupComponent, {
                              disableClose: true,
                              width: '1000px',
                              data: { Model: result }
                          }).afterClosed().subscribe(() => {
                          });
                          // this.closePopupLoadingData();
                  },
                  (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      this.notificationService.showError(err.Message);
                    }
                    // this.closePopupLoadingData();
                  });
              }
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.validationErrors = err.ValidationErrors;
              this.notificationService.showError(err.Message);
            }
            // this.closePopupLoadingData();
          });
          }
          this.closePopupSavingData();
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          this.closePopupSavingData();
        });
    }
  }
  selectionPhuongThucVoCam(event:any){
   if(event != null && event != undefined)
   {
    this.giayChungNhanPhauThuat.PhuongThucVoCamId = event.KeyId;
    this.giayChungNhanPhauThuat.PhuongThucVoCamText = event.Ten;
   }
   else{
    this.giayChungNhanPhauThuat.PhuongThucVoCamId = null;
    this.giayChungNhanPhauThuat.PhuongThucVoCamText = null;
   }
  }
}
