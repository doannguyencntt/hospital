import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icClose from '@iconify/icons-ic/twotone-close';
import { BoPhanTonThuong, ThongTinBenhAnNoiNgoaiKhoa, ThongTinChuanDoanKemTheo } from '../thong-tin-benh-an.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { Router } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuKhamBenhNoiTruPopupComponent } from '../phieu-kham-benh-noi-tru-popup/phieu-kham-benh-noi-tru-popup.component';
import { NoiDungMauLoiDanBacSiPopupComponent } from '../noi-dung-mau-loi-dan-bac-si-popup/noi-dung-mau-loi-dan-bac-si-popup.component';
import icAdd from '@iconify/icons-ic/twotone-add';
@Component({
  selector: 'app-thong-tin-benh-an-ngoai-khoa',
  templateUrl: './thong-tin-benh-an-ngoai-khoa.component.html',
  styleUrls: ['./thong-tin-benh-an-ngoai-khoa.component.scss']
})
export class ThongTinBenhAnNgoaiKhoaComponent implements OnInit {
  @Input() yeuCauTiepNhanId: any = null;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Input() LoaiBenhAn: any = null;

  validationErrors: any[] = [];
  icAdd = icAdd;
  thongTinBenhAnNoiNgoaiKhoa = new ThongTinBenhAnNoiNgoaiKhoa();

  icDelete = icDelete;

  urlGetDataGridTienSuBenhLienAsync = "DieuTriNoiTru/GetTienSuBenhLienQuanForGrid";
  urlGetTotalPageGridTienSuBenhLienAsync = "DieuTriNoiTru/GetTotalPagesTienSuBenhLienQuanForGrid";

  gridColumnChiSoSinhTons: any[] = [];
  gridColumnLienQuanBenhs: any[] = [];
  gridChanDoanPhanBietColumns: any[] = [];
  gridChanDoanKemTheoColumns: any[] = [];

  dataSourceChuanDoanPhanBiets: any = {
    data: [],
    total: 0
  }

  dataSourceChiSoSinhTons: any = {
    data: [],
    total: 0
  };

  dataSourceICDsPhuKhac: any = {
    data: [],
    total: 0
  }

  icClose = icClose;
  icAddCircle = icAddCircle;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  format: string = 'n2';

  @ViewChild('thoiGianTemplate', { static: true }) thoiGianTemplate: TemplateRef<any>;
  @ViewChild('teniCDsPhuKhacTemplate', { static: true }) teniCDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('ghiChuICDsPhuKhacTemplate', { static: true }) ghiChuICDsPhuKhacTemplate: TemplateRef<any>;

  @ViewChild('actionICDsPhuKhacTemplate', { static: true }) actionICDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('actionICDsPhanBietTemplate', { static: true }) actionICDsPhanBietTemplate: TemplateRef<any>;

  @ViewChild('ghiChuTemplateEdit', { static: true }) ghiChuTemplateEdit: TemplateRef<any>;
  @ViewChild('teniCDsPhanBietTemplate', { static: true }) teniCDsPhanBietTemplate: TemplateRef<any>;

  constructor(private authService: AuthService, private apiService: ApiService, private dialog: MatDialog,
    private notificationService: NotificationService, private router: Router) { }

  ngOnInit() {
    this.dieuTriNoiTruModel = this.dieuTriNoiTruModel != null ? this.dieuTriNoiTruModel : new ChiTietDieuTriNoiTruViewModel();
    this.gridChanDoanKemTheoColumns = [
      { Field: "TenICD", Title: "ICD", Width: 120, Template: this.teniCDsPhuKhacTemplate },
      { Field: "ChuanDoan", Title: "Chẩn đoán", Width: 100, Template: this.ghiChuICDsPhuKhacTemplate, TemplateEdit: this.ghiChuTemplateEdit },
      { Field: "Action", Title: "", Width: 50, Template: this.actionICDsPhuKhacTemplate }
    ];

    this.gridChanDoanPhanBietColumns = [
      { Field: "TenICD", Title: "ICD", Width: 120, Template: this.teniCDsPhanBietTemplate },
      { Field: "ChuanDoan", Title: "Chẩn đoán", Width: 100, Template: this.ghiChuICDsPhuKhacTemplate, TemplateEdit: this.ghiChuTemplateEdit },
      { Field: "Action", Title: "", Width: 50, Template: this.actionICDsPhanBietTemplate }
    ];

    this.gridColumnLienQuanBenhs = [
      { Field: "KyHieu", Title: "Ký hiệu", Width: 100, Sortable: true },
      { Field: "ThoiGian", Title: "Thời gian(tính theo tháng)", Width: 150, Sortable: true, Template: this.thoiGianTemplate }
    ];
    this.getThongTinBenhAnNgoaiKhoa(this.yeuCauTiepNhanId);
  }

  HuyBenhAn() {
    this.getThongTinBenhAnNgoaiKhoa(this.yeuCauTiepNhanId);
  }

  themChanDoanKemTheo() {
    this.dataSourceICDsPhuKhac.data.push(new ThongTinChuanDoanKemTheo());
  }

  themChanDoanPhanBiet() {
    this.dataSourceChuanDoanPhanBiets.data.push(new ThongTinChuanDoanKemTheo());
  }

  afterThemBoPhan(data: any) {
    this.thongTinBenhAnNoiNgoaiKhoa.BoPhanTonThuongs = data;
  }

  getThongTinBenhAnNgoaiKhoa(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.get<any>("DieuTriNoiTru/GetThongTinBenhAnNgoaiKhoa/" + id)
        .subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            this.thongTinBenhAnNoiNgoaiKhoa = resultData;
            this.dataSourceChiSoSinhTons.data = this.thongTinBenhAnNoiNgoaiKhoa.ChiSoSinhTons != null ? this.thongTinBenhAnNoiNgoaiKhoa.ChiSoSinhTons : [];
            this.dataSourceICDsPhuKhac.data = this.thongTinBenhAnNoiNgoaiKhoa.ChuanDoanKemTheos != null ? this.thongTinBenhAnNoiNgoaiKhoa.ChuanDoanKemTheos : [];
            this.dataSourceChuanDoanPhanBiets.data = this.thongTinBenhAnNoiNgoaiKhoa.ChuanDoanPhanBiets != null ? this.thongTinBenhAnNoiNgoaiKhoa.ChuanDoanPhanBiets : [];
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  luuBenhAn() {
    this.thongTinBenhAnNoiNgoaiKhoa.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    this.thongTinBenhAnNoiNgoaiKhoa.ChiSoSinhTons = this.dataSourceChiSoSinhTons.data;
    this.thongTinBenhAnNoiNgoaiKhoa.ChuanDoanKemTheos = this.dataSourceICDsPhuKhac.data;
    this.thongTinBenhAnNoiNgoaiKhoa.ChuanDoanPhanBiets = this.dataSourceChuanDoanPhanBiets.data;
    this.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBenhAnNgoaiKhoa", this.thongTinBenhAnNoiNgoaiKhoa)
      .subscribe((resultData) => {
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
      }, (err: ApiError) => {
        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
      });
  }

  luuBenhAnVaInPhieu() {
    var self = this;
    self.thongTinBenhAnNoiNgoaiKhoa.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.thongTinBenhAnNoiNgoaiKhoa.ChiSoSinhTons = self.dataSourceChiSoSinhTons.data;
    self.thongTinBenhAnNoiNgoaiKhoa.ChuanDoanKemTheos = self.dataSourceICDsPhuKhac.data;
    self.thongTinBenhAnNoiNgoaiKhoa.ChuanDoanPhanBiets = self.dataSourceChuanDoanPhanBiets.data;
    this.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBenhAnNgoaiKhoa", this.thongTinBenhAnNoiNgoaiKhoa)
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

  validationICDPhuErrors: any[] = [];
  validationICDPhanBietErrors: any[] = [];
  LuuThongTinBenhAnNgoaiKhoa(inPhieu: any) {  
    for (let i = 0; i < this.dataSourceICDsPhuKhac.data.length; i++) {
      if (this.dataSourceICDsPhuKhac.data[i].ICD === null) {
        this.validationICDPhuErrors = [];
        this.validationICDPhuErrors.push({ Message: "ICD yêu cầu nhập", Field: "thongTinBenhAnNoiNgoaiKhoa.ChuanDoanKemTheos[" + i + "].ICD" });
        return true;
      }
    }
   
    for (let i = 0; i < this.dataSourceChuanDoanPhanBiets.data.length; i++) {
      if (this.dataSourceChuanDoanPhanBiets.data[i].ICD === null) {
        this.validationICDPhanBietErrors = [];
        this.validationICDPhanBietErrors.push({ Message: "ICD yêu cầu nhập", Field: "thongTinBenhAnNoiNgoaiKhoa.ChuanDoanPhanBiets[" + i + "].ICD" });
        return true;
      }
    }

    if (inPhieu) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.luuBenhAn();
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
    else {
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

  onChangeSetTenICDPhu(dataItem: any, rowIndex: number) {
    if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
      this.dataSourceICDsPhuKhac.data[rowIndex].TenICD = dataItem.DisplayName;
      this.dataSourceICDsPhuKhac.data[rowIndex].ChuanDoan = dataItem.Ten;
    }
    else {
      this.dataSourceICDsPhuKhac.data[rowIndex].TenICD = null;
      this.dataSourceICDsPhuKhac.data[rowIndex].ChuanDoan = null;
    }
  }

  xoaICDPhanBiet(item: any) {  
    this.dataSourceChuanDoanPhanBiets.data.splice(this.dataSourceChuanDoanPhanBiets.data.findIndex((x: any) => x == item), 1);
  }

  xoaICDPhanKemTheo(item: any) {
    this.dataSourceICDsPhuKhac.data.splice(this.dataSourceICDsPhuKhac.data.findIndex((x: any) => x == item), 1);
  }

  iCDSelectionChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinBenhAnNoiNgoaiKhoa.TenICDChinh = dataItem.DisplayName;
      this.thongTinBenhAnNoiNgoaiKhoa.ChuanDoan = dataItem.Ten;
    }
    else {
      this.thongTinBenhAnNoiNgoaiKhoa.TenICDChinh = null;
      this.thongTinBenhAnNoiNgoaiKhoa.ChuanDoan = null;
      this.thongTinBenhAnNoiNgoaiKhoa.ICDChinh = null;
    }
  }

  onChangeChuanDoanPhanBiet(dataItem: any, rowIndex: number) {
    if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
      this.dataSourceChuanDoanPhanBiets.data[rowIndex].TenICD = dataItem.DisplayName;
      this.dataSourceChuanDoanPhanBiets.data[rowIndex].ChuanDoan = dataItem.Ten;
    }
    else {
      this.dataSourceChuanDoanPhanBiets.data[rowIndex].TenICD = null;
      this.dataSourceChuanDoanPhanBiets.data[rowIndex].ChuanDoan = null;
    }
  }
  InPhieuKhamBenh() {
    var self = this;

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
			this.thongTinBenhAnNoiNgoaiKhoa.HuongXuLyLoiDanBs = event.HuongXuLyLoiDanBacSi;
		}
		else {
			this.thongTinBenhAnNoiNgoaiKhoa.HuongXuLyLoiDanBs = null;
		}
	}
}
