import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GiayCamKetKyThuatMoiMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';

import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GiayCamKetKyThuatMoiPopupComponent } from '../giay-cam-ket-ky-thuat-moi-popup/giay-cam-ket-ky-thuat-moi-popup.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { GiayThoaThuanLuaChonDichVuKhamTheoYeuCau, GiayThoaThuanLuaChonDichVuKhamTheoYeuCauPopupModel } from './giay-thoa-thuan-lua-chon-dv-kham-theo-yc.model';
// import { GiayThoaThuanLuaChonDvKhamPopupComponent } from './giay-thoa-thuan-lua-chon-dv-kham-popup/giay-thoa-thuan-lua-chon-dv-kham-popup.component';



@Component({
  selector: 'app-giay-thoa-thuan-lua-chon-dv-kham-theo-yc',
  templateUrl: './giay-thoa-thuan-lua-chon-dv-kham-theo-yc.component.html',
  styleUrls: ['./giay-thoa-thuan-lua-chon-dv-kham-theo-yc.component.scss']
})
export class GiayThoaThuanLuaChonDvKhamTheoYcComponent implements OnInit {

  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  validationErrors: any[] = [];
  filterSourceServer = [];
  giayCamKetKyThuatMoiPopupModel = new GiayThoaThuanLuaChonDichVuKhamTheoYeuCauPopupModel();
  giayThoaThuanLuaChonDichVuKhamTheoYeuCau = new GiayThoaThuanLuaChonDichVuKhamTheoYeuCau();
  id: number;
  newEmployee = '';
  showAddNewBbhc = false;
  showGrid = false;
  icAddCircle = icAddCircle;
  queryinfo: LookupQueryInfo = new LookupQueryInfo();
  gridColumns = [];
  icDelete = icDelete;
  icClear = icClear;
  format2: string = 'n2';
  gridDataSource: any = {
      data: [],
      total: 0
  };
  format = 'n1';
  defaultNumbers = ' hai ba bốn năm sáu bảy tám chín';
  u = '2 nghìn triệu tỉ'.split(' ');
  tr;
  tram;
  units;
  ch;
  chuc;
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('gridCamKet', { static: false }) gridCamKet: GridComponent;
  @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
  @ViewChild('cmndTemplate', { static: true }) cmndTemplate: TemplateRef<any>;
  @ViewChild('namSinhTemplate', { static: true }) namSinhTemplate: TemplateRef<any>;
  @ViewChild('quanHeTemplate', { static: true }) quanHeTemplate: TemplateRef<any>;
  @ViewChild('diaChiTemplate', { static: true }) diaChiTemplate: TemplateRef<any>;
  @ViewChild('ngayCamKetTemplate', { static: true }) ngayCamKetTemplate: TemplateRef<any>;

  constructor(
      private apiService: ApiService,
      private route: ActivatedRoute,
      private dialog: MatDialog,
      private notificationService: NotificationService,
      private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
      this.id = this.dieuTriNoiTruModel.Id;
      this.units = ('1 một' + this.defaultNumbers).split(' ');
      this.tr = 'không một' + this.defaultNumbers;
      this.tram = this.tr.split(' ');
      this.ch = 'lẻ mười' + this.defaultNumbers;
      this.chuc = this.ch.split(' ');
      this.getById(this.id);
  }
  changeTaoLaAi(event){
      this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.GioiTinh = 1;
  }
  getById(id: number) {
      this.apiService.get<any>
          (`DieuTriNoiTru/GetGiayThoaThuanLuaChonDichVuKhamTheoYeuCau?yeuCauTiepNhanId=${id}`).subscribe(resultData => {
              this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau = { ...resultData };
              this.returnId.emit(this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.IdNoiTruHoSo);
              this.closePopupLoadingData();
          }, err => {
              this.notificationService.showError(err.Message);
              this.closePopupLoadingData();
          });
  }

  print() {
      this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có muốn in phiếu cam kết kỹ thuật này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
              this.uploadTaiLieuDone();
              this.validationErrors = this.validation();
              if (this.validationErrors && this.validationErrors.some(x => x)) {
                  return;
              }
              this.apiService.post<any>
              (`DieuTriNoiTru/UpdateGiayThoaThuanLuaChonDichVuKhamTheoYeuCau?yeuCauTiepNhanId=${this.id}`, this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau)
              .subscribe(res => {
                  this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau = { ...res };
                  if(res.CheckCreateOrCapNhat == true)
                  {
                      this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Cập nhật']));
                  }
                  if(res.CheckCreateOrCapNhat == false)
                  {
                      this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu']));
                  }
                  this.returnId.emit(this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.IdNoiTruHoSo);
                  this.giayCamKetKyThuatMoiPopupModel.HostingName = window.location.protocol + "//" + window.location.host;
                  const yeuCauTiepNhanId = this.id;
                  this.giayCamKetKyThuatMoiPopupModel.YeuCauTiepNhanId = yeuCauTiepNhanId;
                  this.apiService.post<any>('DieuTriNoiTru/PhieuInGiayThoaThuanLuaChonDichVuKhamTheoYeuCau', this.giayCamKetKyThuatMoiPopupModel)
                      .subscribe((res) => {
                        this.dialog.open(null, {
                            disableClose: false,
                            width: '1200px',
                            data: { Model: res }
                        }).afterClosed().subscribe(() => { });

                      });
                  
                
              },
                  (err: ApiError) => {
                      this.notificationService.showError(err.Message);
                      this.closePopupLoadingData();
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

  cancel() {
      this.validationErrors = [];
      this.showPopupHuyPhieu();
      this.getById(this.id);
  }

  validation() {
      const validationResult = [];
      if (!this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.HoTen && this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.TaoLaAi === 1) {
          const validationItem = {
              Field: 'HoTen',
              Message: GiayCamKetKyThuatMoiMessage.MessageHoTenNotEmpty
          };
          validationResult.push(validationItem);
      }
      let yearNow = new Date();
      if (this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.NamSinh != null){
          let year :number = yearNow.getFullYear();
          if (this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.NamSinh >  year && this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.TaoLaAi === 1) {
              const validationItem = {
                  Field: 'NamSinh',
                  Message: GiayCamKetKyThuatMoiMessage.MessageNamSinhNotValue
              };
              validationResult.push(validationItem);
          }
      }
      
      if (!this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.NgayThucHien) {
          const validationItem = {
              Field: 'NgayThucHien',
              Message: GiayCamKetKyThuatMoiMessage.MessageNgayThucHienNotEmpty
          };
          validationResult.push(validationItem);
      }

      return validationResult;
  }

  save() {
      
      this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có muốn lưu lại giấy thoả thuận lựa chọn dịch vụ khám chữa bệnh theo yêu cầu ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
              this.uploadTaiLieuDone();
              this.validationErrors = this.validation();
              if (this.validationErrors && this.validationErrors.some(x => x)) {
                  return;
              }
              this.showPopupLoadingData();
              this.apiService.post<any>
              (`DieuTriNoiTru/UpdateGiayThoaThuanLuaChonDichVuKhamTheoYeuCau?yeuCauTiepNhanId=${this.id}`, this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau)
              .subscribe(res => {
                  this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau = { ...res };
                  this.returnId.emit(this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.IdNoiTruHoSo);
                  if(res.CheckCreateOrCapNhat == true)
                  {
                      this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Cập nhật']));
                  }
                  if(res.CheckCreateOrCapNhat == false)
                  {
                      this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu']));
                  }
                  this.closePopupLoadingData();
              },
                  (err: ApiError) => {
                      this.notificationService.showError(err.Message);
                      this.closePopupLoadingData();
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

  showPopupLoadingData() {
      this.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang lưu biên bản...' },
      });
  }

  showPopupHuyPhieu() {
      this.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang hủy biên bản...' },
      });
  }

  showPopupDeleteThongTin() {
      this.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang xóa thông tin người bệnh...' },
      });
  }

  closePopupLoadingData() {
      this.dialog.closeAll();
  }

  uploadTaiLieuDone() {
      if (!(this.ref as ViewRef).destroyed) {
          this.ref.detectChanges();
      }
  }

  changeNumberToLiteral(number: number) {
      if (!number) {
          this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.SoTienChu = null;
          return;
      }
      const str = number.toString();
      let i = 0;
      const arr = [];
      let index = str.length;
      const result = [];
      if (index === 0 || str === 'NaN') {
          return '';
      }
      let string = '';

      while (index >= 0) {
          arr.push(str.substring(index, Math.max(index - 3, 0)));
          index -= 3;
      }

      for (i = arr.length - 1; i >= 0; i--) {
          if (arr[i] !== '' && arr[i] !== '000') {
              result.push(this.block_of_three(arr[i]));
              if (this.u[i]) {
                  result.push(this.u[i]);
              }
          }
      }
      string = result.join(' ');
      const letter = `(${string.replace(/[0-9]/g, '').replace(/  /g, ' ').replace(/ $/, '')} đồng)`;
      this.giayThoaThuanLuaChonDichVuKhamTheoYeuCau.SoTienChu = `(${letter[1].toUpperCase()}${letter.slice(2)}`;
  }

  block_of_three(d) {
      const _a = d + '';
      if (d === '000') { return ''; }
      switch (_a.length) {
          case 0:
              return '';

          case 1:
              return this.units[_a];

          case 2:
              return this.tenth(_a);

          case 3:
              let sl12 = '';
              if (_a.slice(1, 3) !== '00') {
                  sl12 = this.tenth(_a.slice(1, 3));
              }
              const sl3 = this.tram[_a[0]] + ' trăm';
              return sl3 + ' ' + sl12;
      }
  }

  tenth(a) {
      let sl1 = this.units[a[1]];
      const sl2 = this.chuc[a[0]];
      let append = '';
      // tslint:disable-next-line: triple-equals
      if (a[0] > 0 && a[1] == 5) {
          sl1 = 'lăm';
      }
      if (a[0] > 1) {
          append = ' mươi';
          if (a[1] === 1) {
              sl1 = ' mốt';
          }
      }
      const str = sl2 + '' + append + ' ' + sl1;
      return str;
  }

}
