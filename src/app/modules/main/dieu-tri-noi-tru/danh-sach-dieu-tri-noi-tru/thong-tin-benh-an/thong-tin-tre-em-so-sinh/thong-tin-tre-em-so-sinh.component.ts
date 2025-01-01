import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ThongTinBenhAnTreSoSinh, ThongTinChuanDoanKemTheo } from '../thong-tin-benh-an.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import icAdd from '@iconify/icons-ic/twotone-add';
import { PhieuKhamBenhNoiTruPopupComponent } from '../phieu-kham-benh-noi-tru-popup/phieu-kham-benh-noi-tru-popup.component';
import { NoiDungMauLoiDanBacSiPopupComponent } from '../noi-dung-mau-loi-dan-bac-si-popup/noi-dung-mau-loi-dan-bac-si-popup.component';
@Component({
  selector: 'app-thong-tin-tre-em-so-sinh',
  templateUrl: './thong-tin-tre-em-so-sinh.component.html',
  styleUrls: ['./thong-tin-tre-em-so-sinh.component.scss']
})
export class ThongTinBenhAnTreEmSoSinhComponent implements OnInit {
  @Input() yeuCauTiepNhanId: any = null;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Input() LoaiBenhAn: any = null;

  thongTinBenhAnTreSoSinh = new ThongTinBenhAnTreSoSinh();
  icAdd = icAdd;
  gridChanDoanPhanBietColumns: any[] = [];
  CachDeSelectItems = [{ Value: true, Text: 'Đẻ thường' }, { Value: false, Text: 'Can thiệp' }];
  TinhTrangSoSinhSelectItems = [{ Value: 1, Text: 'Khóc ngay' }, { Value: 2, Text: 'Ngạt' }, { Value: 3, Text: 'Khác' }];
  MauSacDaSoSinhSelectItems = [{ Value: 1, Text: 'Hồng hào' }, { Value: 2, Text: 'Xanh tái' }, { Value: 3, Text: 'Vàng' }, { Value: 4, Text: 'Tím' }, { Value: 5, Text: 'Khác' }];
  tienThaiSelectItems = [{ Value: 1, Text: 'Sinh (đủ tháng)' }, { Value: 2, Text: 'Sớm (đẻ non)' }, { Value: 3, Text: 'Sẩy (nạo, hút)' }, { Value: 4, Text: 'Sống' }];
  dataSourceChiSoSinhTons: any = {
    data: [],
    total: 0
  };
  validationErrors: any[] = [];
  format: string = 'n1';
  dataSourceChuanDoanPhanBiets: any = {
    data: [],
    total: 0
  }

  dataSourceICDsPhuKhac: any = {
    data: [],
    total: 0
  }

  dataSourceChiSoSauSinhs: any = {
    data: [],
    total: 0
  };

  gridColumnChiSoSinhTons: any[] = [];
  gridChanDoanKemTheoColumns: any[] = [];
  public sampleData: any[] = [];
  icAddCircle = icAddCircle;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  icDelete = icDelete;


  @ViewChild('thoiGianTemplate', { static: true }) thoiGianTemplate: TemplateRef<any>;
  @ViewChild('icdTemplate', { static: true }) icdTemplate: TemplateRef<any>;
  @ViewChild('chanDoanTemplate', { static: true }) chanDoanTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  constructor(private authService: AuthService, private apiService: ApiService, private dialog: MatDialog,
    private notificationService: NotificationService, private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getThongTinBenhAnTreSoSinh(this.yeuCauTiepNhanId);
  }

  HuyBenhAn() {
    this.getThongTinBenhAnTreSoSinh(this.yeuCauTiepNhanId);
  }

  getThongTinBenhAnTreSoSinh(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.get<any>("DieuTriNoiTru/GetThongTinBenhAnTreSoSinh/" + id)
        .subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            this.thongTinBenhAnTreSoSinh = resultData;
            this.dataSourceChiSoSinhTons.data = this.thongTinBenhAnTreSoSinh.ChiSoSinhTons != null ? this.thongTinBenhAnTreSoSinh.ChiSoSinhTons : [];
            this.dataSourceChiSoSauSinhs.data = this.thongTinBenhAnTreSoSinh.DacDiemTreSoSinhSauSinhs != null ? this.thongTinBenhAnTreSoSinh.DacDiemTreSoSinhSauSinhs : [];
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  luuBenhAn() {
    this.thongTinBenhAnTreSoSinh.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    this.thongTinBenhAnTreSoSinh.ChiSoSinhTons = this.dataSourceChiSoSinhTons.data;
    this.thongTinBenhAnTreSoSinh.DacDiemTreSoSinhSauSinhs = this.dataSourceChiSoSauSinhs.data;
    
    this.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBenhAnTreSoSinh", this.thongTinBenhAnTreSoSinh)
      .subscribe((resultData) => {
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
      }, (err: ApiError) => {
        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
      });
  }

  luuBenhAnVaInPhieu() {
    var self = this;
    self.thongTinBenhAnTreSoSinh.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.thongTinBenhAnTreSoSinh.ChiSoSinhTons = self.dataSourceChiSoSinhTons.data;
    self.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBenhAnTreSoSinh", self.thongTinBenhAnTreSoSinh)
      .subscribe(() => {
        var showDialog = self.dialog.open(LoadingComponent, {
          disableClose: true,
          width: '200px',
          height: '90px',
          data: { Title: 'Đang tải dữ liệu...' }
        });
        self.apiService.post<any>("DieuTriNoiTru/InPhieuKhamBenhNoiTru?noiTruBenhAnId=" + self.dieuTriNoiTruModel.Id).subscribe(
          resData => {
            if (resData != undefined && resData != null) {
              showDialog.close();
              self.dialog.open(PhieuKhamBenhNoiTruPopupComponent, {
                disableClose: false,
                width: '1200px',
                data: { Title: 'PHIẾU KHÁM BỆNH', Data: resData },
              }
              ).afterClosed().subscribe(() => {
                showDialog.close();
              });
            }
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            showDialog.close();

          }
        );
      });
  }


  LuuThongTinBenhAnTreSoSinh(inPhieu) {
    //====kiểm tra lỗi tiền sử sản phụ khoa===
    if (this.validationErrors.length > 0) {
      return true;
    }

    if (inPhieu) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.luuBenhAn();
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    } else {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
        }).afterClosed().subscribe(result => {
          if (result === 'Yes') {
            this.luuBenhAn();
          }
        });
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }

  }

  onChangeSetNhanVienNguoiDe(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinBenhAnTreSoSinh.TenNhanVien = dataItem.DisplayName;
    }
    else {
      this.thongTinBenhAnTreSoSinh.NhanVienId = null;
      this.thongTinBenhAnTreSoSinh.TenNhanVien = null;
    }
  }

  onChangeSetNguoiChuyenSoSinh(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinBenhAnTreSoSinh.TenNhanVienChuyenSoSinh = dataItem.DisplayName;
    }
    else {
      this.thongTinBenhAnTreSoSinh.NhanVienChuyenSoSinhId = null;
      this.thongTinBenhAnTreSoSinh.TenNhanVienChuyenSoSinh = null;
    }
  }

  onChangeSetChucDanh(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinBenhAnTreSoSinh.TenNhanVienChucDan = dataItem.DisplayName;
    }
    else {
      this.thongTinBenhAnTreSoSinh.ChucDanhNhanVienId = null;
      this.thongTinBenhAnTreSoSinh.TenNhanVienChucDan = null;
    }
  }

  unCheckDiTat(event: any) {
    if (event == false || event == null || event == undefined) {
      this.thongTinBenhAnTreSoSinh.ChuThichDiTatBamSinh = null;
    }
  }

  ktLucDe(selectDateTime) {
    this.kiemTraThongTinVoOiVaLucDe();
  }

  ktVoOiLuc(selectDateTime) {
    this.kiemTraThongTinVoOiVaLucDe();
  }

  kiemTraThongTinVoOiVaLucDe() { 
    this.validationErrors = [];
    this.cdRef.detectChanges();
    var date = new Date();
    if (this.thongTinBenhAnTreSoSinh.NgayVoNuocOi != undefined && this.thongTinBenhAnTreSoSinh.NgayVoNuocOi != null) {
      var selectDate = new Date(this.thongTinBenhAnTreSoSinh.NgayVoNuocOi);
      if (selectDate > date) {
       
        this.validationErrors.push({
          Message: "Chọn ngày phải nhỏ hơn ngày hiện tại",
          Field: "NgayVoOi",
        });
      }
    }
    
    if (this.thongTinBenhAnTreSoSinh.DeLuc != undefined && this.thongTinBenhAnTreSoSinh.DeLuc != null) {
      var selectDate = new Date(this.thongTinBenhAnTreSoSinh.DeLuc);
      if (selectDate > date) {       
        
        this.validationErrors.push({
          Message: "Chọn ngày phải nhỏ hơn ngày hiện tại",
          Field: "DeLuc",
        });
      }
    }
  }
  
  showPopupDuLieuMacDinh() {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
			this.dialog.open(NoiDungMauLoiDanBacSiPopupComponent, {
				disableClose: false,
				width: '1400px',
				data: { "LoaiBenhAn": this.LoaiBenhAn }
			}).afterClosed().subscribe(result => {

			});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

  selectionChangeLoiDanBS(event: any) {
		if (event != undefined && event != null) {
			this.thongTinBenhAnTreSoSinh.HuongXuLyLoiDanBs = event.HuongXuLyLoiDanBacSi;
		}
		else {
			this.thongTinBenhAnTreSoSinh.HuongXuLyLoiDanBs = null;
		}
	}
}
