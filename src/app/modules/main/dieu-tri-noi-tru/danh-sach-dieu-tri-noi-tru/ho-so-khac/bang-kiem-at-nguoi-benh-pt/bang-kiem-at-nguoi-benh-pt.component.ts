import { ChangeDetectorRef, Component, OnInit,SimpleChanges,TemplateRef,ViewChild, ViewRef,Input,Output,EventEmitter } from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ActivatedRoute, Router } from '@angular/router';
import { NoiTruHoSoKhacBangAnToanNguoiBenhPT,ChiSoSinhTon,BangKiemAnToanNguoiBenhPT,ExportQueryInfoQueryInfo,FileChuKyModel,LookupQueryInfo} from './bang-kiem-an-toan-nb-pt.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { UploadComponent } from 'src/app/shared/component/uploads/upload/upload.component';
import { BangKiemAtNguoiBenhPtPopupComponent } from './bang-kiem-at-nguoi-benh-pt-popup/bang-kiem-at-nguoi-benh-pt-popup.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
@Component({
  selector: 'app-bang-kiem-at-nguoi-benh-pt',
  templateUrl: './bang-kiem-at-nguoi-benh-pt.component.html',
  styleUrls: ['./bang-kiem-at-nguoi-benh-pt.component.scss']
})
export class BangKiemAtNguoiBenhPtComponent implements OnInit {
  noiTruHoSoKhacBangAnToanNguoiBenhPT: NoiTruHoSoKhacBangAnToanNguoiBenhPT;
  bangKiemAnToanNguoiBenhPT = {} as BangKiemAnToanNguoiBenhPT;
  icAdd = icAdd;
  icDelete = icDelete;
  icAddCircle = icAddCircle;
  icEdit = icEdit;
  icSave = icSave;
  icClear = icClear;
  documentType: DocumentType;
  format: string = 'n1';
    isAllowAdd: boolean = true;
    dataSourceSinhHieu: any = {
        data: [],
        total: 0
    };
    gridDataSource: any = {
      data:[],
      total: 0
    };
    huyetApTamTruong: number = 60;
    huyetApTamThu: number = 90;
    phongKhamHienTai: number = 0;
    nhipTho: number = 10;
    currentUserId: number = 0;
    current: Date = new Date();
    validationErrors : any;
    gridSinhHieuColumns: any[] = [];
    gridColumns: any[] = [];
    getNhanVienId: any;
    yeuCauTiepNhanId:number= 0;
    tenTaiKhoanDangNhap : string= "";
    
    multiselectQueryInfo = new LookupQueryInfo();

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();  
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
    checkDieuKienThemPhieu : boolean = false;
    dataThuocTienMe : any;
    dataNhanVien : any;
    editChiSoSinhTon :boolean = false;
    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('ngayGioDuaBNDiPTTemplate', { static: true }) ngayGioDuaBNDiPTTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('actionSinhHieuTemplate', { static: true }) actionSinhHieuTemplate: TemplateRef<any>;
    @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
    @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
    @ViewChild('nhipTimTemplate', { static: true }) nhipTimTemplate: TemplateRef<any>;
    @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
    @ViewChild('BMITemplate', { static: true }) BMITemplate: TemplateRef<any>;
    @ViewChild('glassgowTemplate', { static: true }) glassgowTemplate: TemplateRef<any>;
    @ViewChild('spO2Template', { static: true }) spO2Template: TemplateRef<any>;
    @ViewChild('gridChild', { read: GridComponent, static: false }) gridChild: GridComponent;
    @ViewChild('uploadBangKiemATNBPT', { read: UploadComponent, static: false }) uploadBangKiemATNBPT: UploadComponent;
    urlGetDataGrid ="DieuTriNoiTru/GetDanhSachBangKiemAnToanNBPT";
    urlGetTotalPageGrid="";
  constructor(private apiService: ApiService,
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private router: Router,private route: ActivatedRoute,
    private ref: ChangeDetectorRef) { 
     
    }

  ngOnInit() {
    this.noiTruHoSoKhacBangAnToanNguoiBenhPT = new  NoiTruHoSoKhacBangAnToanNguoiBenhPT();
    this.getNhanVienId = this.authService.getAccessUser();
    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;

    this.multiselectQueryInfo.ParameterDependencies = "",
    this.multiselectQueryInfo.Id = id;
    this.multiselectQueryInfo.Take = 50;

    this.gridSinhHieuColumns = [
      { Field: "NhipTim", Title: "Mạch (nhịp/phút)", Width: 137, Template: this.nhipTimTemplate },
      { Field: "ThanNhiet", Title: "Nhiệt độ (°C)", Width: 100, Template: this.thanNhietTemplate },
      { Field: "HuyetAp", Title: "Huyết áp (mmHg)", Width: 135, Template: this.huyetApTemplate },
      { Field: "NhipTho", Title: "Nhịp thở (lần/phút)", Width: 150, Template: this.nhipThoTemplate },
      { Field: "CanNang", Title: "Cân nặng (kg)", Width: 113, Template: this.canNangTemplate },
      { Field: "ChieuCao", Title: "Chiều cao (cm)", Width: 117, Template: this.chieuCaoTemplate },
      { Field: "BMI", Title: "BMI (kg/m²)", Width: 91, Template: this.BMITemplate },
      { Field: "Glassgow", Title: "Glassgow", Width: 120, Template: this.glassgowTemplate },
      { Field: "SpO2", Title: "SpO2 (%)", Width: 120, Template: this.spO2Template },
      { Field: "NhanVienThucHien", Title: "Nhân viên thực hiện", Width: 156 , Hidden: true},
      { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 145 },
      { Field: "Action", Title: "", Width: 70, Template: this.actionSinhHieuTemplate }
  ];
  this.gridColumns = [
    { Field: "", Title: "#", Width: 35, Template: this.sttTemplate },
    { Field: "NgayGioDuaBNDiPTString", Title: "Ngày giờ đưa NB đi PT ", Width: 100, Template: this.ngayGioDuaBNDiPTTemplate },
    { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
  ];
  this.currentUserId = this.authService.getAccessUser().Id;
  this.getThuocTienMeVaNhanVien();
  this.getDataView();
  
  }

ngOnChanges(changes: SimpleChanges) {
    // if (changes['dataChiSoSinhTon'] && changes['dataChiSoSinhTon'].previousValue != null && changes['dataChiSoSinhTon'].previousValue != changes['dataChiSoSinhTon'].currentValue) {
    //     this.dataSourceSinhHieu.data = changes['dataChiSoSinhTon'].currentValue;
    // }
    // this.phongKhamHienTai = this.phongKhamId;
}
NgayGioDuaBNDiPTChange(event){
this.bangKiemAnToanNguoiBenhPT.NgayGioDuaBNDiPT= event;
if(event != undefined && event != null  && event != "")
{
  this.bangKiemAnToanNguoiBenhPT.NgayGioDuaBNDiPTUTC = CommonService.formatDateTime(event, "MM/dd/yyyy");
}
else{
  this.bangKiemAnToanNguoiBenhPT.NgayGioDuaBNDiPTUTC = null;
}
}
NgayGioDuDinhGayMeChange(event)
{
  this.bangKiemAnToanNguoiBenhPT.NgayGioDuDinhGayMe= event;
if(event != undefined && event != null  && event != "")
{
  this.bangKiemAnToanNguoiBenhPT.NgayGioDuDinhGayMeUTC = CommonService.formatDateTime(event, "MM/dd/yyyy");
}
else{
  this.bangKiemAnToanNguoiBenhPT.NgayGioDuaBNDiPTUTC = null;
}
}
themChiSoSinhTon() {
    let newItem = new ChiSoSinhTon();
    newItem.NgayThucHien = CommonService.formatDateTimeSACH(this.current, "dd/mm/yyyy");
    this.dataSourceSinhHieu.data.push(newItem);
}

luuChiSoSinhHieu(data: any) {
    data.HuyetApTamThu = this.huyetApTamThu;
    data.HuyetApTamTruong = this.huyetApTamTruong;
    data.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    if (data.HuyetApTamThu === null && data.HuyetApTamTruong === null) {
        data.HuyetAp = null;
    } else {
        data.HuyetAp = data.HuyetApTamThu + "/" + data.HuyetApTamTruong;
    }
    data.NhipTho = this.nhipTho;
    data.Edit = false;
}

xoaChiSoSinhHieu(item: any) {
    this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
            this.dataSourceSinhHieu.data.splice(this.dataSourceSinhHieu.data.findIndex(x => x == item), 1);
        }
    });

}

onChangeCanNang(data: any) {
    var chieuCao = data.ChieuCao / 100;

    if (chieuCao === 0) {
        data.BMI = null;
        return;
    }

    data.BMI = data.CanNang / (chieuCao * chieuCao);
}

onChangeChieuCao(data: any) {
    var chieuCao = data.ChieuCao / 100;

    if (chieuCao === 0) {
        data.BMI = null;
        return;
    }

    data.BMI = data.CanNang / (chieuCao * chieuCao);
}

onChangeNhipTho(input: any, dataItem) {
    if (input % 1 != 0) {
        dataItem.NhipTho = input.toFixed();

        if (typeof dataItem.NhipTho === "string") {
            dataItem.NhipTho = Number(dataItem.NhipTho);
        }
    }
}

onChangeHuyetApTamThu(input: any, dataItem) {
    if (input % 1 != 0) {
        dataItem.HuyetApTamThu = input.toFixed();

        if (typeof dataItem.HuyetApTamThu === "string") {
            dataItem.HuyetApTamThu = Number(dataItem.HuyetApTamThu);
        }
    }

    if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
        dataItem.HuyetAp = null;
    } else {
        dataItem.HuyetAp = dataItem.HuyetApTamThu + "/" + dataItem.HuyetApTamTruong;
    }
}

onChangeHuyetApTamTruong(input: any, dataItem) {
    if (input % 1 != 0) {
        dataItem.HuyetApTamTruong = input.toFixed();

        if (typeof dataItem.HuyetApTamTruong === "string") {
            dataItem.HuyetApTamTruong = Number(dataItem.HuyetApTamTruong);
        }
    }

    if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
        dataItem.HuyetAp = null;
    } else {
        dataItem.HuyetAp = dataItem.HuyetApTamThu + "/" + dataItem.HuyetApTamTruong;
    }
}

onChangeNhipTim(data: any, input: any) {
    if (input % 1 != 0) {
        data.NhipTim = input.toFixed();

        if (typeof data.NhipTim === "string") {
            data.NhipTim = Number(data.NhipTim);
        }
    }
}

suaChiSoSinhHieu(dataItem: any)
{
    if(dataItem != undefined && dataItem != null)
    {
        dataItem.IsUpdate = true;
        dataItem.Edit = true;
        dataItem.NoiThucHienId = this.phongKhamHienTai;
        dataItem.NhanVienThucHienId = this.currentUserId;
        dataItem.NgayThucHien = CommonService.formatDateTimeSACH(new Date(), "dd/mm/yyyy").toString();
    }
}
// get dataThuocTienMe , dataNhanVien, getChiSoSinhTon
getThuocTienMeVaNhanVien(){
  var self = this;
  self.exportQueryInfoQueryInfo.AdditionalSearchString = self.yeuCauTiepNhanId.toString();
  self.apiService.post<any>("DieuTriNoiTru/GetThuocTienMeVaNhanVienVaChiSoSinhTon",self.exportQueryInfoQueryInfo).subscribe(
    (result) => {
      this.dataNhanVien = result.ListNhanVien;
      this.dataThuocTienMe = result.ListThuocTienMe;
      this.dataSourceSinhHieu = {
        data:result.ListChiSoSinhTonBangKiemAnToan,
        total: result.ListChiSoSinhTonBangKiemAnToan.length
      };

    },
    (err: ApiError) => {
      self.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        self.notificationService.showError(err.Message);
      }
    });
}
// in 
In(){
  var self = this;
        let dataIn = {
            Hosting: window.location.protocol + "//" + window.location.host,
            NoiTruHoSoKhacId: this.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id,
            YeuCauTiepNhanId: this.yeuCauTiepNhanId,
            LoaiHoSoDieuTriNoiTru: 11,
        }
        if (this.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id == 0) {
          self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có in bảng kiểm an toàn người bệnh phẩu thuật này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
              
              if (this.bangKiemAnToanNguoiBenhPT.ThoiDiemKham != null) {
                let tn =new Date(this.bangKiemAnToanNguoiBenhPT.ThoiDiemKham);
                this.bangKiemAnToanNguoiBenhPT.ThoiDiemKhamString = CommonService.formatDateTime(tn, "mm/dd/yyyy");
              }

              self.bangKiemAnToanNguoiBenhPT.ListChiSoSinhTon = self.dataSourceSinhHieu.data;
              const thongTinHoSo = JSON.stringify(self.bangKiemAnToanNguoiBenhPT);
              self.noiTruHoSoKhacBangAnToanNguoiBenhPT.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
              self.noiTruHoSoKhacBangAnToanNguoiBenhPT.FileChuKy = self.bangKiemAnToanNguoiBenhPT.FileChuKy;
              self.noiTruHoSoKhacBangAnToanNguoiBenhPT.LoaiHoSoDieuTriNoiTru = 11;
              self.noiTruHoSoKhacBangAnToanNguoiBenhPT.ThongTinHoSo = thongTinHoSo;
              self.noiTruHoSoKhacBangAnToanNguoiBenhPT.ListChiSoSinhTon = self.dataSourceSinhHieu.data;
              self.noiTruHoSoKhacBangAnToanNguoiBenhPT.NgayGioDuDinhGayMe = self.bangKiemAnToanNguoiBenhPT.NgayGioDuDinhGayMe;
              self.noiTruHoSoKhacBangAnToanNguoiBenhPT.NgayGioDuaBNDiPT = self.bangKiemAnToanNguoiBenhPT.NgayGioDuaBNDiPT;
              self.noiTruHoSoKhacBangAnToanNguoiBenhPT.ThoiDiemKham = self.bangKiemAnToanNguoiBenhPT.ThoiDiemKham;
              self.apiService.post<any>("DieuTriNoiTru/LuuBangKiemAnToanNBPT", self.noiTruHoSoKhacBangAnToanNguoiBenhPT).subscribe(
                (result) => {
                  if(result != null)
                  {
                  dataIn.NoiTruHoSoKhacId = result;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.checkDieuKienThemPhieu = true;
                  self.getDanhSachBangKiemATNBPT();
                  self.Huy();
                  self.getDataView();
                  self.refeshGridBangKiemAnToanNguoiBenhPT();
                  self.apiService.post<any>("DieuTriNoiTru/InBangKiemAnToanNBPT", dataIn).subscribe(
                    (result) => {
                        self.dialog.open(BangKiemAtNguoiBenhPtPopupComponent, {
                            disableClose: true,
                            width: '1000px',
                            data: { Model: result }
                        }).afterClosed().subscribe(() => {
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
        else{
          self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có in bảng kiểm an toàn người bệnh phẩu thuật này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
              if (res == "Yes") {

                if (this.bangKiemAnToanNguoiBenhPT.ThoiDiemKham != null) {
                  let tn =new Date(this.bangKiemAnToanNguoiBenhPT.ThoiDiemKham);
                  this.bangKiemAnToanNguoiBenhPT.ThoiDiemKhamString = CommonService.formatDateTime(tn, "mm/dd/yyyy");
                }

                self.bangKiemAnToanNguoiBenhPT.ListChiSoSinhTon = self.dataSourceSinhHieu.data;
                const thongTinHoSo = JSON.stringify(self.bangKiemAnToanNguoiBenhPT);
                self.noiTruHoSoKhacBangAnToanNguoiBenhPT.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
                self.noiTruHoSoKhacBangAnToanNguoiBenhPT.FileChuKy = self.bangKiemAnToanNguoiBenhPT.FileChuKy;
                self.noiTruHoSoKhacBangAnToanNguoiBenhPT.LoaiHoSoDieuTriNoiTru = 11;
                self.noiTruHoSoKhacBangAnToanNguoiBenhPT.ThongTinHoSo = thongTinHoSo;
                self.noiTruHoSoKhacBangAnToanNguoiBenhPT.ListChiSoSinhTon = self.dataSourceSinhHieu.data;
                self.noiTruHoSoKhacBangAnToanNguoiBenhPT.NgayGioDuDinhGayMe = self.bangKiemAnToanNguoiBenhPT.NgayGioDuDinhGayMe;
                self.noiTruHoSoKhacBangAnToanNguoiBenhPT.NgayGioDuaBNDiPT = self.bangKiemAnToanNguoiBenhPT.NgayGioDuaBNDiPT;
                self.noiTruHoSoKhacBangAnToanNguoiBenhPT.ThoiDiemKham = self.bangKiemAnToanNguoiBenhPT.ThoiDiemKham;
                self.apiService.post<any>("DieuTriNoiTru/LuuBangKiemAnToanNBPT", self.noiTruHoSoKhacBangAnToanNguoiBenhPT).subscribe(
                  (result) => {
                    if(result != null)
                    {
                    dataIn.NoiTruHoSoKhacId = result;
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                    self.checkDieuKienThemPhieu = true;
                    self.getDanhSachBangKiemATNBPT();
                    self.Huy();
                    self.getDataView();
                    self.refeshGridBangKiemAnToanNguoiBenhPT();
                    self.apiService.post<any>("DieuTriNoiTru/InBangKiemAnToanNBPT", dataIn).subscribe(
                      (result) => {
                          self.dialog.open(BangKiemAtNguoiBenhPtPopupComponent, {
                              disableClose: true,
                              width: '1000px',
                              data: { Model: result }
                          }).afterClosed().subscribe(() => {
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
                  });
                  
              } 
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
xoa(dataItem){
  var self = this;
  self.dialog.open(ConfirmComponent, {
    disableClose: false,
    width: "500px",
    data: {
      Title: "Xác nhận",
      Message: "Bạn có muốn xóa bảng kiểm an toàn người bệnh này không này không?",
    },
  }).afterClosed().subscribe((res) => {
    if (res == "Yes") {
      self.apiService.post<any>("DieuTriNoiTru/xoaBangKiemAnToanNguoiBenh?Id="+ dataItem.Id).subscribe(
        (result) => {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
          self.getDanhSachBangKiemATNBPT();
          self.getDataView();
          self.refeshGridBangKiemAnToanNguoiBenhPT();
          if(self.gridDataSource.total == 0)
          {
            self.checkDieuKienThemPhieu = false;
            self.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id = 0 ;
          }
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
Huy(){
  var self = this; 
  self.getDanhSachBangKiemATNBPT();
  // show cái cuối cùng
    // self.getThongTinBangKiemAnToanNBPTViewDS(self.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id);
    self.getDataView();
}
Luu(){
  var self = this; 
  this.validationErrors=[];
  self.ref.detectChanges();

  if (this.bangKiemAnToanNguoiBenhPT.ThoiDiemKham != null) {
    let tn =new Date(this.bangKiemAnToanNguoiBenhPT.ThoiDiemKham);
    this.bangKiemAnToanNguoiBenhPT.ThoiDiemKhamString = CommonService.formatDateTime(tn, "mm/dd/yyyy");
  }

  self.bangKiemAnToanNguoiBenhPT.ListChiSoSinhTon = self.dataSourceSinhHieu.data;
  const thongTinHoSo = JSON.stringify(self.bangKiemAnToanNguoiBenhPT);
  self.noiTruHoSoKhacBangAnToanNguoiBenhPT.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
  self.noiTruHoSoKhacBangAnToanNguoiBenhPT.FileChuKy = self.bangKiemAnToanNguoiBenhPT.FileChuKy;
  self.noiTruHoSoKhacBangAnToanNguoiBenhPT.LoaiHoSoDieuTriNoiTru = 11;
  self.noiTruHoSoKhacBangAnToanNguoiBenhPT.ThongTinHoSo = thongTinHoSo;
  self.noiTruHoSoKhacBangAnToanNguoiBenhPT.ListChiSoSinhTon = self.dataSourceSinhHieu.data;
  self.noiTruHoSoKhacBangAnToanNguoiBenhPT.NgayGioDuDinhGayMe = self.bangKiemAnToanNguoiBenhPT.NgayGioDuDinhGayMe;
  self.noiTruHoSoKhacBangAnToanNguoiBenhPT.NgayGioDuaBNDiPT = self.bangKiemAnToanNguoiBenhPT.NgayGioDuaBNDiPT;
  self.noiTruHoSoKhacBangAnToanNguoiBenhPT.ThoiDiemKham = self.bangKiemAnToanNguoiBenhPT.ThoiDiemKham;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu lại bảng kiểm an toàn người bệnh phẩu thuật này không?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        
        self.apiService.post<any>("DieuTriNoiTru/LuuBangKiemAnToanNBPT", self.noiTruHoSoKhacBangAnToanNguoiBenhPT).subscribe(
          (result) => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            self.checkDieuKienThemPhieu = true;
            self.getDanhSachBangKiemATNBPT();
            self.Huy();
            self.refeshGridBangKiemAnToanNguoiBenhPT();
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
ThemPhieu(){
  var self = this;
  self.dialog.open(ConfirmComponent, {
    disableClose: false,
    width: "500px",
    data: {
      Title: "Xác nhận",
      Message: "Bạn có muốn thêm mới bảng kiểm an toàn người bệnh phẩu thuật không?",
    },
  }).afterClosed().subscribe((res) => {
    if (res == "Yes") {
      this.checkDieuKienThemPhieu = false;
      this.bangKiemAnToanNguoiBenhPT = new BangKiemAnToanNguoiBenhPT();
      this.bangKiemAnToanNguoiBenhPT.ThoiDiemKham = new Date();
      this.bangKiemAnToanNguoiBenhPT.ThoiDiemKham.setHours(0, 0, 0, 0);
      console.log("----------------------------------",this.bangKiemAnToanNguoiBenhPT)
      self.bangKiemAnToanNguoiBenhPT.ListChiSoSinhTon = this.dataSourceSinhHieu.data;
      this.bangKiemAnToanNguoiBenhPT.FileChuKy = new Array<FileChuKyModel>();
      const thongTinHoSo = JSON.stringify(self.bangKiemAnToanNguoiBenhPT);
      self.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id = 0;
      self.noiTruHoSoKhacBangAnToanNguoiBenhPT.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
      self.noiTruHoSoKhacBangAnToanNguoiBenhPT.LoaiHoSoDieuTriNoiTru = 11;
      self.noiTruHoSoKhacBangAnToanNguoiBenhPT.ThongTinHoSo = thongTinHoSo;
      this.noiTruHoSoKhacBangAnToanNguoiBenhPT.ListChiSoSinhTon = this.dataSourceSinhHieu.data;
      this.getTaiKhoanDangNhap();
      this.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id = 0;
      let dateNow = new Date();
      this.bangKiemAnToanNguoiBenhPT.NgayThucHien = CommonService.formatDateTimeSACH(dateNow, "dd/mm/yyyy")
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
getTaiKhoanDangNhap(){
  var self = this;
     self.apiService.post<any>("DieuTriNoiTru/GetTenDangNhap").subscribe(
          (result) => {
              this.tenTaiKhoanDangNhap = result;
              this.bangKiemAnToanNguoiBenhPT.TaiKhoanDangNhap = this.tenTaiKhoanDangNhap;
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
}
getThongTinBangKiemAnToanNBPTViewDS(Id: number){
  var self = this;
   this.bangKiemAnToanNguoiBenhPT = new BangKiemAnToanNguoiBenhPT();
   self.bangKiemAnToanNguoiBenhPT.FileChuKy = [];
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinBangKiemAnToanNBPTViewDS?noiTruHoSoKhacId=" + Id).subscribe(
      (result) => {
        if (result != null) {
          this.checkDieuKienThemPhieu = true;
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.bangKiemAnToanNguoiBenhPT = thongTinHoSo;
          self.bangKiemAnToanNguoiBenhPT.FileChuKy = [...result.ListFile];
          this.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id);
        }
        else{
          self.bangKiemAnToanNguoiBenhPT = new BangKiemAnToanNguoiBenhPT();

            let nhanVienThucHienId =self.getNhanVienId.Id;
            self.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
              (result) => {

                self.bangKiemAnToanNguoiBenhPT.TaiKhoanDangNhap = result.TenNhanVien;
                self.bangKiemAnToanNguoiBenhPT.NgayThucHien = result.NgayThucHien;
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
public tmp : number=0;
viewDataBangKiem(data:any){
  var self = this;
  if(self.tmp != data.Id)
  {
    self.tmp = data.Id;
    self.getThongTinBangKiemAnToanNBPTViewDS(data.Id);
  }
}
// get data new create or create
setDataGridViewBangKiem() {
    //this.gridChild.gridDataSource = this.gridDataSource;

    if (this.gridChild !== undefined)
      this.gridChild.setDataSource();
  }
getDanhSachBangKiemATNBPT(){
    var self = this;
    self.exportQueryInfoQueryInfo.AdditionalSearchString = self.yeuCauTiepNhanId.toString();
    self.apiService.post<any>("DieuTriNoiTru/GetDanhSachBangKiemAnToanNBPT", self.exportQueryInfoQueryInfo).subscribe(
      (result) => {
        self.gridDataSource = {
          data: result.Data,
          total: result.Data.length
        };
        // if(self.gridDataSource.total != 0)
        // {
        //   self.setDataGridViewBangKiem();
        // }
        if(self.gridDataSource.total == 0)
        {
          self.checkDieuKienThemPhieu = false;
          self.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id = 0 ;
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
getDataView()
{
    var self = this; 
    
    this.getDanhSachBangKiemATNBPT();
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetDanhSachBangKiemAnToanNBPTSave?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
          if(result != null)
          {
            this.checkDieuKienThemPhieu = true;
            let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
            self.bangKiemAnToanNguoiBenhPT =  thongTinHoSo;
            self.bangKiemAnToanNguoiBenhPT.FileChuKy = [...result.ListFile];
            self.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id = result.Id;
            this.returnId.emit(this.noiTruHoSoKhacBangAnToanNguoiBenhPT.Id);
            this.tmp = result.Id;
          }
          else{
            self.bangKiemAnToanNguoiBenhPT = new BangKiemAnToanNguoiBenhPT();
           
            let nhanVienThucHienId =self.getNhanVienId.Id;
            self.apiService.post<any>("DieuTriNoiTru/GetThongTinCreate?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
              (result) => {
              
                self.bangKiemAnToanNguoiBenhPT.TaiKhoanDangNhap = result.TenNhanVien;
                self.bangKiemAnToanNguoiBenhPT.NgayThucHien = result.NgayThucHien;
                self.bangKiemAnToanNguoiBenhPT.ChanDoanICDPhu =result.ChanDoanICDPhu;
                self.bangKiemAnToanNguoiBenhPT.ChanDoanICDChinh =result.ChanDoanICDChinh;
                self.bangKiemAnToanNguoiBenhPT.ThoiDiemKham = result.ThoiDiemKham;
                self.bangKiemAnToanNguoiBenhPT.TienSuDiUng = result.TienSuDiUng;
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
refeshGridBangKiemAnToanNguoiBenhPT(){
  this.gridChild.search();
}
changeThoiDiemKham(event:any)
{
  if (event != null) {
    let tn =new Date(event);
    this.bangKiemAnToanNguoiBenhPT.ThoiDiemKhamString = CommonService.formatDateTime(tn, "mm/dd/yyyy");
  }else{
    this.bangKiemAnToanNguoiBenhPT.ThoiDiemKhamString  = null;
  }
}
}
