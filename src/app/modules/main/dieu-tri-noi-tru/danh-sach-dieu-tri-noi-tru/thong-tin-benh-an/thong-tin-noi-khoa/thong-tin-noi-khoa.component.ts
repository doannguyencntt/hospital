import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Common, ThongTinBenhAnNoiKhoaNhi, ThongTinChuanDoanKemTheo } from '../thong-tin-benh-an.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { MatDialog } from '@angular/material';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GridComponent } from '@progress/kendo-angular-grid';
import { Router } from '@angular/router';
import { ThongTinPhieuInComponent } from '../../ra-vien/thong-tin-phieu-in/thong-tin-phieu-in.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { PhieuKhamBenhNoiTruPopupComponent } from '../phieu-kham-benh-noi-tru-popup/phieu-kham-benh-noi-tru-popup.component';
import { NoiDungMauLoiDanBacSiPopupComponent } from '../noi-dung-mau-loi-dan-bac-si-popup/noi-dung-mau-loi-dan-bac-si-popup.component';
import icAdd from '@iconify/icons-ic/twotone-add';
@Component({
  selector: 'app-thong-tin-noi-khoa',
  templateUrl: './thong-tin-noi-khoa.component.html',
  styleUrls: ['./thong-tin-noi-khoa.component.scss']
})
export class ThongTinBenhAnNoiKhoaComponent implements OnInit {
  @Input() LoaiBenhAn: any = null;
  @Input() yeuCauTiepNhanId: any = null;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

  icAdd = icAdd;
  common = new Common()
  icDelete = icDelete;
  format: string = 'n2';
  current: Date = new Date();
  gridColumnLienQuanBenhs: any = [];
  gridChanDoanKemTheoColumns: any[] = [];
  gridChanDoanPhanBietColumns: any[] = [];
  gridColumnChiSoSinhTons: any[] = [];
  validationErrors: any[] = [];

  dataSourceICDsPhuKhac: any = {
    data: [],
    total: 0
  }

  dataSourceChuanDoanPhanBiets: any = {
    data: [],
    total: 0
  }

  dataSourceChiSoSinhTons: any = {
    data: [],
    total: 0
  };

  public sampleData: any[] = [];
  icAddCircle = icAddCircle;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  thongTinBenhAnNoiKhoaNhi = new ThongTinBenhAnNoiKhoaNhi();


  urlGetDataGridTienSuBenhLienAsync = "DieuTriNoiTru/GetTienSuBenhLienQuanForGrid";
  urlGetTotalPageGridTienSuBenhLienAsync = "DieuTriNoiTru/GetTotalPagesTienSuBenhLienQuanForGrid";

  urlGetDataGridChiSoSinhTonAsync = "DieuTriNoiTru/GetChiSoSinhTonForGrid";
  urlGetTotalPageGridChiSoSinhTonAsync = "DieuTriNoiTru/GetTotalPagesChiSoSinhTonForGrid";

  urlGetDataGridChuanDoanKemTheoAsync = "DieuTriNoiTru/GetChuanDoanKemTheoForGrid";
  urlGetTotalPageGridChuanDoanKemTheoAsync = "DieuTriNoiTru/GetTotalPagesChuanDoanKemTheoForGrid";

  urlGetDataGridChuanDoanPhanBietTheoAsync = "DieuTriNoiTru/GetChuanDoanPhanBietForGrid";
  urlGetTotalPageGridChuanDoanPhanBietTheoAsync = "DieuTriNoiTru/GetTotalPagesChuanDoanPhanBietForGrid";

  @ViewChild('thoiGianTemplate', { static: true }) thoiGianTemplate: TemplateRef<any>;
  @ViewChild('icdTemplate', { static: true }) icdTemplate: TemplateRef<any>;
  @ViewChild('chanDoanTemplate', { static: true }) chanDoanTemplate: TemplateRef<any>;
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
  @ViewChild('actionICDsPhanBietTemplate', { static: true }) actionICDsPhanBietTemplate: TemplateRef<any>;
  
  @ViewChild('teniCDsPhuKhacTemplate', { static: true }) teniCDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('ghiChuICDsPhuKhacTemplate', { static: true }) ghiChuICDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('actionICDsPhuKhacTemplate', { static: true }) actionICDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('iCDKhacs', { static: true }) gridICDsPhuKhac: GridComponent;
  @ViewChild('ghiChuTemplateEdit', { static: true }) ghiChuTemplateEdit: TemplateRef<any>;

  @ViewChild('teniCDsPhanBietTemplate', { static: true }) teniCDsPhanBietTemplate: TemplateRef<any>;

  constructor(private authService: AuthService, private apiService: ApiService,
    private notificationService: NotificationService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.dieuTriNoiTruModel = this.dieuTriNoiTruModel != null ? this.dieuTriNoiTruModel : new ChiTietDieuTriNoiTruViewModel();
    this.gridColumnLienQuanBenhs = [
      { Field: "KyHieu", Title: "Ký hiệu", Width: 100, Sortable: true },
      { Field: "ThoiGian", Title: "Thời gian(tính theo tháng)", Width: 150, Sortable: true, Template: this.thoiGianTemplate }
    ];

    this.gridChanDoanKemTheoColumns = [
      { Field: "TenICD", Title: "ICD", Width: 120, Template: this.teniCDsPhuKhacTemplate },
      { Field: "ChuanDoan", Title: "Chẩn đoán", Width: 100, Template: this.ghiChuICDsPhuKhacTemplate, TemplateEdit: this.ghiChuTemplateEdit },
      { Field: "Action", Title: "", Width: 50, Template: this.actionICDsPhuKhacTemplate }
    ];

    this.gridChanDoanPhanBietColumns = [
      { Field: "TenICD", Title: "ICD", Width: 120, Template: this.teniCDsPhanBietTemplate },
      { Field: "ChuanDoan", Title: "Chẩn đoán", Width: 100, Template: this.ghiChuICDsPhuKhacTemplate, TemplateEdit: this.ghiChuTemplateEdit },
      { Field: "Action", Title: "", Width: 50, Template: this.actionICDsPhanBietTemplate}
    ];    


    this.getThongTinBenhAnNoiKhoaNhi(this.yeuCauTiepNhanId);
  }

  themChanDoanKemTheo() {
    this.dataSourceICDsPhuKhac.data.push(new ThongTinChuanDoanKemTheo());
  }

  themChanDoanPhanBiet() {
    this.dataSourceChuanDoanPhanBiets.data.push(new ThongTinChuanDoanKemTheo());
  }

  HuyBenhAn() {
    this.getThongTinBenhAnNoiKhoaNhi(this.yeuCauTiepNhanId);
  }

  onDataBoundDacDiemLienQuan(dataTienSuLienQuan: any) {
    if (dataTienSuLienQuan && dataTienSuLienQuan.Data.length > 0) {
      this.thongTinBenhAnNoiKhoaNhi.TienSuBenhLienQuans = dataTienSuLienQuan.Data;
    }
  }

  onDataBoundChuanDoanKemTheo(dataChuanDoanKemTheo: any) {
    if (dataChuanDoanKemTheo && dataChuanDoanKemTheo.Data.length > 0) {
      this.thongTinBenhAnNoiKhoaNhi.ChuanDoanKemTheos = dataChuanDoanKemTheo.Data;
    }
  }

  luuBenhAn() {
    this.thongTinBenhAnNoiKhoaNhi.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    this.thongTinBenhAnNoiKhoaNhi.ChiSoSinhTons = this.dataSourceChiSoSinhTons.data;
    this.thongTinBenhAnNoiKhoaNhi.ChuanDoanKemTheos = this.dataSourceICDsPhuKhac.data;
    this.thongTinBenhAnNoiKhoaNhi.ChuanDoanPhanBiets = this.dataSourceChuanDoanPhanBiets.data;
    this.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBenhAnNoiKhoaNhi", this.thongTinBenhAnNoiKhoaNhi)
      .subscribe(() => {
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
      }, (err: ApiError) => {
        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
      });
  }

  luuBenhAnVaInPhieu() {
    var self = this;
    self.thongTinBenhAnNoiKhoaNhi.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.thongTinBenhAnNoiKhoaNhi.ChiSoSinhTons = self.dataSourceChiSoSinhTons.data;
    self.thongTinBenhAnNoiKhoaNhi.ChuanDoanKemTheos = self.dataSourceICDsPhuKhac.data;
    self.thongTinBenhAnNoiKhoaNhi.ChuanDoanPhanBiets = self.dataSourceChuanDoanPhanBiets.data;
    this.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinBenhAnNoiKhoaNhi", this.thongTinBenhAnNoiKhoaNhi)
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
  LuuThongTinBenhAnNoiKhoaKhoaNhi(inPhieu: any) { 
    for (let i = 0; i < this.dataSourceICDsPhuKhac.data.length; i++) {
      if (this.dataSourceICDsPhuKhac.data[i].ICD === null) {
        this.validationICDPhuErrors = [];
        this.validationICDPhuErrors.push({ Message: "ICD yêu cầu nhập", Field: "thongTinBenhAnNoiKhoaNhi.ChuanDoanKemTheos[" + i + "].ICD" });
        return true;
      }
    }
   
    for (let i = 0; i < this.dataSourceChuanDoanPhanBiets.data.length; i++) {
      if (this.dataSourceChuanDoanPhanBiets.data[i].ICD === null) {
        this.validationICDPhanBietErrors = [];
        this.validationICDPhanBietErrors.push({ Message: "ICD yêu cầu nhập", Field: "thongTinBenhAnNoiKhoaNhi.ChuanDoanPhanBiets[" + i + "].ICD" });
        return true;
      }
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

  getThongTinBenhAnNoiKhoaNhi(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.get<any>("DieuTriNoiTru/GetThongTinBenhAnNoiKhoaNhi/" + id)
        .subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            this.thongTinBenhAnNoiKhoaNhi = resultData;
            this.dataSourceChiSoSinhTons.data = this.thongTinBenhAnNoiKhoaNhi.ChiSoSinhTons != null ? this.thongTinBenhAnNoiKhoaNhi.ChiSoSinhTons : [];
            this.dataSourceICDsPhuKhac.data = this.thongTinBenhAnNoiKhoaNhi.ChuanDoanKemTheos != null ? this.thongTinBenhAnNoiKhoaNhi.ChuanDoanKemTheos : [];
            this.dataSourceChuanDoanPhanBiets.data = this.thongTinBenhAnNoiKhoaNhi.ChuanDoanPhanBiets != null ? this.thongTinBenhAnNoiKhoaNhi.ChuanDoanPhanBiets : [];
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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

  xoaICDPhanBiet(item: any) {  
    this.dataSourceChuanDoanPhanBiets.data.splice(this.dataSourceChuanDoanPhanBiets.data.findIndex((x: any) => x == item), 1);
  }

  xoaICDPhanKemTheo(item: any) {     
    this.dataSourceICDsPhuKhac.data.splice(this.dataSourceICDsPhuKhac.data.findIndex((x: any) => x == item), 1);
  }

  iCDSelectionChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinBenhAnNoiKhoaNhi.TenICDChinh = dataItem.DisplayName;
      this.thongTinBenhAnNoiKhoaNhi.ChuanDoan = dataItem.Ten;
    }
    else {
      this.thongTinBenhAnNoiKhoaNhi.TenICDChinh = null;
      this.thongTinBenhAnNoiKhoaNhi.ChuanDoan = null;
      this.thongTinBenhAnNoiKhoaNhi.ICDChinh = null;
    }
  }

  InPhieu(yeuCauTiepNhan: any) {
    let result = [this.common.NoiKhoa, this.common.NhiKhoa];
    this.dialog.open(ThongTinPhieuInComponent, {
      disableClose: true,
      width: '1200px',
      data: { yeuCauTiepNhan, result }
    }).afterClosed().subscribe(() => {
    });
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
			this.thongTinBenhAnNoiKhoaNhi.HuongXuLyLoiDanBs = event.HuongXuLyLoiDanBacSi;
		}
		else {
			this.thongTinBenhAnNoiKhoaNhi.HuongXuLyLoiDanBs = null;
		}
	}
}
