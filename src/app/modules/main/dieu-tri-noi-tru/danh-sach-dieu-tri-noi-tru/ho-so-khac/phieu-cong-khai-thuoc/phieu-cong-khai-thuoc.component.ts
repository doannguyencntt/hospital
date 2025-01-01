import { ChangeDetectorRef, Component, OnInit,ViewEncapsulation,Input,Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuCongKhaiThuoc, Table,NoiTruHoSoKhacPhieuCongKhaiThuoc } from './phieu-cong-khai-thuoc.model';
import icDelete from '@iconify/icons-ic/delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { PhieuCongKhaiThuocPopupComponent } from './phieu-cong-khai-thuoc-popup/phieu-cong-khai-thuoc-popup.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { PhieuCongKhaiThuocLoaiInPopupComponent } from './phieu-cong-khai-thuoc-loai-in-popup/phieu-cong-khai-thuoc-loai-in-popup.component';
declare var $: any;
@Component({
  selector: 'app-phieu-cong-khai-thuoc',
  templateUrl: './phieu-cong-khai-thuoc.component.html',
  styleUrls: ['./phieu-cong-khai-thuoc.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PhieuCongKhaiThuocComponent implements OnInit {
  phieuCongKhaiThuoc = {} as PhieuCongKhaiThuoc;
  noiTruHoSoKhacPhieuCongKhaiThuoc :NoiTruHoSoKhacPhieuCongKhaiThuoc;
  table: Table[];
  maxColumns = 7;
  icDelete = icDelete;
  icClear = icClear;
  columnTableNgayThang: number = 0;
  addTable: boolean = false;
  slTable: number = 1;
  htmlTable: string = "";
  yeuCauTiepNhanId : number = 0;
  validationErrors : any;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();  
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  getNhanVienId:any;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;
    this.noiTruHoSoKhacPhieuCongKhaiThuoc = new NoiTruHoSoKhacPhieuCongKhaiThuoc();
    this.getNhanVienId = this.authService.getAccessUser();
    this.showColumnsViewTable();
    this.getData();
  }
  blurNgayVao(event){
    this.showColumnsViewTable();
  }
  blurNgayRa(event){
    this.showColumnsViewTable();
  }
  showColumnsViewTable() {
    var self = this;
    this.validationErrors = [];
    if (self.phieuCongKhaiThuoc.NgayVaoVien != null && self.phieuCongKhaiThuoc.NgayRaVien != null) {
       let startDate = new Date(self.phieuCongKhaiThuoc.NgayVaoVien);
      let endDate = new Date(self.phieuCongKhaiThuoc.NgayRaVien);
      let seconds1Ngay = 24*60*60;
      let secondstuNgayDenNgay = (endDate.getTime() - startDate.getTime()) / 1000;
      self.columnTableNgayThang = secondstuNgayDenNgay/seconds1Ngay;
      if (self.columnTableNgayThang > self.maxColumns) {
        let phanNguyen = self.columnTableNgayThang / self.maxColumns;
        let phanDu = self.columnTableNgayThang % self.maxColumns;
        self.slTable = phanNguyen;
        if (phanDu > 0) {
          self.slTable = phanNguyen + 1;
        }
        self.addTable = true;
        self.addColumnsTable(true);
      }
      else {
        self.slTable = 1;
        self.addTable = true;
        self.addColumnsTable(true);
      }
    }

  }
  addColumnsTable(check: boolean) {
    
    var self = this;
    this.validationErrors = [];
    if(typeof(self.phieuCongKhaiThuoc.NgayVaoVien) =="string")
    {
      self.phieuCongKhaiThuoc.NgayVaoVien = new Date(self.phieuCongKhaiThuoc.NgayVaoVien);
    }
    if(typeof(self.phieuCongKhaiThuoc.NgayRaVien) =="string")
    {
      self.phieuCongKhaiThuoc.NgayRaVien = new Date(self.phieuCongKhaiThuoc.NgayRaVien);
    }
    let modelGetData={
        YeuCauTiepNhanId:self.yeuCauTiepNhanId,
        NgayVaoVien: CommonService.formatDateTime(self.phieuCongKhaiThuoc.NgayVaoVien, "mm/dd/yyyy"),
        NgayRaVien: CommonService.formatDateTime(self.phieuCongKhaiThuoc.NgayRaVien, "mm/dd/yyyy")
    };
    self.apiService.post<any>("DieuTriNoiTru/GetDataPhieuCongKhaiThuoc", modelGetData).subscribe(
      (result) => {
        if(result != null)
        {
          if (check == true) {
          self.table = new Array<Table>()
          let tmp ="data"
          let titleHtmlTable = '';
          //let templateBottom ='<tr><td colspan="2" style="border: 1px solid black; width: 22 %; padding: 0px; margin: 0px; ">Người bệnh/<br>Người nhà kí tên</td><td style ="border: 1px solid black;width: 8%;text-align:center;"></td><td style=" border: 1px solid black;width:4%;text-align:center;"></td><td style=" border: 1px solid black;width:4%;text-align:center;"></td><td style=" border: 1px solid black;width:4%;text-align:center;"></td><td style=" border: 1px solid black;width:4%;text-align:center;"></td><td style=" border: 1px solid black;width:4%;text-align:center;"></td><td style=" border: 1px solid black;width:4%;text-align:center;"></td><td style=" border: 1px solid black;width:4%;text-align:center;"></td><td style="border: 1px solid black; width: 10 %; text-align:right;"></td><td style="border: 1px solid black; width: 10 %; text-align:right;"></td><td style="border: 1px solid black; width: 10%;text-align:right;"></td><td style="border: 1px solid black; width: 12 %; text-align:right;"></td></tr></table><div style="break-after:page"></div>'
          // titleHtmlTable += result;
          let stt = 1 ;
          result.forEach(elementPhieu => {
            if(elementPhieu != "")
            {
              // titleHtmlTable += '<table style="width:100%;border-collapse: collapse;"><tr ><th  style="border: 1px solid black;width: 5%;padding: 0px;margin: 0px;"><b>SỐ <br>TT</b> </th><th   style="border: 1px solid black;width: 15%;"><b>Tên thuốc, hàm lượng</th><th   style="border: 1px solid black;width: 8%;text-align:center;"><b>Đơn <br>vị</b></th><th colspan="7" style="border: 1px solid black;width: 30%;text-align:center;"><b>Ngày,tháng</b></th><th style="border: 1px solid black;width: 10%;text-align:center;"><b>Tổng số</b></th><th style="border: 1px solid black;width: 10%;text-align:center;"><b>Đơn giá</b></th><th style="border: 1px solid black;width: 10%;text-align:center;"> <b>Thành tiền</b></th><th style="border: 1px solid black;width: 10%;text-align:center;"><b>Ghi chú</b></th></tr>';
              titleHtmlTable += elementPhieu;
              //titleHtmlTable += templateBottom + '<br>';
            }
          });
          self.htmlTable = titleHtmlTable;
          let data = {
            Html: self.htmlTable
          };
          self.table.push(data);
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
  getData()
  {
    var self = this;
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuCongKhaiThuoc?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
          if(result != null)
          {
            let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
            self.phieuCongKhaiThuoc = thongTinHoSo;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.Id = result.Id;
            this.returnId.emit(this.noiTruHoSoKhacPhieuCongKhaiThuoc.Id);
            self.table = thongTinHoSo.TableString;
            self.phieuCongKhaiThuoc.FileChuKy = [...result.ListFile];
          }
          else{
            self.phieuCongKhaiThuoc = new PhieuCongKhaiThuoc();

            let nhanVienThucHienId =self.getNhanVienId.Id;
            self.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
              (result) => {

                self.phieuCongKhaiThuoc.TaiKhoanDangNhap = result.TenNhanVien;
                self.phieuCongKhaiThuoc.NgayThucHien = result.NgayThucHien;
                self.phieuCongKhaiThuoc.ChanDoan = result.ChanDoan;
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
  Luu() {
    var self = this; 
    self.phieuCongKhaiThuoc.TableString = self.table
    const thongTinHoSo = JSON.stringify(self.phieuCongKhaiThuoc);
    self.noiTruHoSoKhacPhieuCongKhaiThuoc.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacPhieuCongKhaiThuoc.FileChuKy = self.phieuCongKhaiThuoc.FileChuKy;
    self.noiTruHoSoKhacPhieuCongKhaiThuoc.LoaiHoSoDieuTriNoiTru = 20;
    self.noiTruHoSoKhacPhieuCongKhaiThuoc.ThongTinHoSo = thongTinHoSo;
    self.noiTruHoSoKhacPhieuCongKhaiThuoc.NgayRaVien = self.phieuCongKhaiThuoc.NgayRaVien;
    self.noiTruHoSoKhacPhieuCongKhaiThuoc.NgayVaoVien = self.phieuCongKhaiThuoc.NgayVaoVien;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu lại phiếu công khai thuốc này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {

          self.apiService.post<any>("DieuTriNoiTru/LuuPhieuCongKhaiThuoc", self.noiTruHoSoKhacPhieuCongKhaiThuoc).subscribe(
            (result) => {
              if(result.Id != undefined)
              {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              }
              if(result.Id == undefined)
              {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
              }
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
Huy(){
  var self = this; 
  self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuCongKhaiThuoc?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
    (result) => {
        if(result != null)
        {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.phieuCongKhaiThuoc = thongTinHoSo;
          self.noiTruHoSoKhacPhieuCongKhaiThuoc.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacPhieuCongKhaiThuoc.Id);
          self.table = thongTinHoSo.TableString;
          self.phieuCongKhaiThuoc.FileChuKy = [...result.ListFile];
        }
    },
    (err: ApiError) => {
      self.validationErrors = err.ValidationErrors;
      if (err.Message != "Validation Failed") {
        self.notificationService.showError(err.Message);
      }
    });
}
In(){
  var self = this;
    let dataIn = {
      Hosting: null,
      NoiTruHoSoKhacId: self.noiTruHoSoKhacPhieuCongKhaiThuoc.Id,
      YeuCauTiepNhanId: self.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 20,

      //BVHD-3876
      LoaiPhieuIn: 1 // mặc định là in tất cả
    }
      if(self.noiTruHoSoKhacPhieuCongKhaiThuoc.Id == 0)
      {
        // self.dialog.open(ConfirmComponent, {
        //   disableClose: false,
        //   width: "500px",
        //   data: {
        //     Title: "Xác nhận",
        //     Message: "Bạn có in phiếu công khai thuốc này không ?",
        //   },
        self.dialog.open(PhieuCongKhaiThuocLoaiInPopupComponent, {
          disableClose: false,
          width: "500px",
        }).afterClosed().subscribe((res) => {
          //if (res == "Yes") {
          if (res != undefined && res != null) {
            self.phieuCongKhaiThuoc.TableString = self.table
            const thongTinHoSo = JSON.stringify(self.phieuCongKhaiThuoc);
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.FileChuKy = self.phieuCongKhaiThuoc.FileChuKy;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.LoaiHoSoDieuTriNoiTru = 20;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.ThongTinHoSo = thongTinHoSo;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.NgayRaVien = self.phieuCongKhaiThuoc.NgayRaVien;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.NgayVaoVien = self.phieuCongKhaiThuoc.NgayVaoVien;
            self.apiService.post<any>("DieuTriNoiTru/LuuPhieuCongKhaiThuoc", self.noiTruHoSoKhacPhieuCongKhaiThuoc).subscribe(
              (result) => {
                if(result != null)
                {
                dataIn.NoiTruHoSoKhacId = result.Id;
                
                // BVHD-3876
                dataIn.LoaiPhieuIn = res;

                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InPhieuCongKhaiThuoc", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(PhieuCongKhaiThuocPopupComponent, {
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
        // self.dialog.open(ConfirmComponent, {
        //   disableClose: false,
        //   width: "500px",
        //   data: {
        //     Title: "Xác nhận",
        //     Message: "Bạn có in phiếu công khai thuốc này không ?",
        //   },
        self.dialog.open(PhieuCongKhaiThuocLoaiInPopupComponent, {
          disableClose: false,
          width: "500px",
        }).afterClosed().subscribe((res) => {
          //if (res == "Yes") {
          if (res != undefined && res != null) {
            self.phieuCongKhaiThuoc.TableString = self.table
            const thongTinHoSo = JSON.stringify(self.phieuCongKhaiThuoc);
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.FileChuKy = self.phieuCongKhaiThuoc.FileChuKy;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.LoaiHoSoDieuTriNoiTru = 20;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.ThongTinHoSo = thongTinHoSo;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.NgayRaVien = self.phieuCongKhaiThuoc.NgayRaVien;
            self.noiTruHoSoKhacPhieuCongKhaiThuoc.NgayVaoVien = self.phieuCongKhaiThuoc.NgayVaoVien;
            self.apiService.post<any>("DieuTriNoiTru/LuuPhieuCongKhaiThuoc", self.noiTruHoSoKhacPhieuCongKhaiThuoc).subscribe(
              (result) => {
                if(result != null)
                {
                dataIn.NoiTruHoSoKhacId = result;

                // BVHD-3876
                dataIn.LoaiPhieuIn = res;

                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InPhieuCongKhaiThuoc", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(PhieuCongKhaiThuocPopupComponent, {
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
     
  // }
}
}
