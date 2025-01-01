import icAddCircle from '@iconify/icons-ic/add-circle';
import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { RaVienNoiTruKhoaNoiKhoaNhi, ThongTinChuanDoanKemTheo } from '../thong-tin-ra-vien.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ThongTinPhieuInComponent } from '../thong-tin-phieu-in/thong-tin-phieu-in.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ThongTinDieuTriTreSoSinhComponent } from '../thong-tin-dieu-tri-tre-so-sinh-popup/thong-tin-dieu-tri-tre-so-sinh-popup.component';

@Component({
  selector: 'app-thong-tin-ra-vien-noi-khoa-nhi',
  templateUrl: './thong-tin-ra-vien-noi-khoa-nhi.component.html',
  styleUrls: ['./thong-tin-ra-vien-noi-khoa-nhi.component.scss']
})
export class ThongTinRaVienNoiKhoaNhiComponent implements OnInit {
  @Input() yeuCauTiepNhanId: any = null;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  documentTypeMoLaiBenhAn: DocumentType = DocumentType.MoLaiBenhAn;

  icDelete = icDelete;
  icAddCircle = icAddCircle;
  raVienNoiTru = new RaVienNoiTruKhoaNoiKhoaNhi();
  dataSourceICDsPhuKhac: any = { data: [], total: 0 }
  validationErrors: any[];
  format = "n2";

  isTuVong: boolean = false;
  isChuyenVien: boolean = false;
  public isChanDoanTuVong: boolean = false;
  queryInfoBenhVienChuyenVien: LookupQueryInfo = new LookupQueryInfo();

  gridChanDoanKemTheoColumns: any[] = [];
  public sampleData: any[] = [];
  @ViewChild('thoiGianTemplate', { static: true }) thoiGianTemplate: TemplateRef<any>;
  @ViewChild('teniCDsPhuKhacTemplate', { static: true }) teniCDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('ghiChuICDsPhuKhacTemplate', { static: true }) ghiChuICDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('actionICDsPhuKhacTemplate', { static: true }) actionICDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('ghiChuTemplateEdit', { static: true }) ghiChuTemplateEdit: TemplateRef<any>;

  constructor(private authService: AuthService, private apiService: ApiService, private dialog: MatDialog,
    private notificationService: NotificationService, private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.gridChanDoanKemTheoColumns = [
      { Field: "TenICD", Title: "Chẩn đoán ICD kèm theo", Width: 120, Template: this.teniCDsPhuKhacTemplate },
      { Field: "ChuanDoan", Title: "Chẩn đoán", Width: 100, Template: this.ghiChuICDsPhuKhacTemplate, TemplateEdit: this.ghiChuTemplateEdit },
      { Field: "Action", Title: "", Width: 50, Template: this.actionICDsPhuKhacTemplate }
    ];
    if (this.yeuCauTiepNhanId != null) {
      this.getThongTinRaVien(this.yeuCauTiepNhanId);
    }
  }

  iCDSelectionChangeNoiChuyenDen(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenChuanDoanNoiChuyenDen = dataItem.DisplayName;
      this.raVienNoiTru.GhiChuChuanDoanNoiChuyenDen = dataItem.Ten;
    }
    else {
      this.raVienNoiTru.ChuanDoanNoiChuyenDenId = null;
      this.raVienNoiTru.GhiChuChuanDoanNoiChuyenDen = null;
      this.raVienNoiTru.TenChuanDoanNoiChuyenDen = null;
    }
  }

  iCDSelectionChangeCapCuu(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenChuanDoanKKBCapCuu = dataItem.DisplayName;
      this.raVienNoiTru.GhiChuChuanDoanKKBCapCuu = dataItem.Ten;
    }
    else {
      this.raVienNoiTru.ChuanDoanKKBCapCuuId = null;
      this.raVienNoiTru.TenChuanDoanKKBCapCuu = null;
      this.raVienNoiTru.GhiChuChuanDoanKKBCapCuu = null;
    }
  }

  iCDSelectionChangeVaoKhoaDT(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenNoiChuanDoanKhiVaoKhoaDieuTri = dataItem.DisplayName;
      this.raVienNoiTru.GhiChuNoiChuanDoanKhiVaoKhoaDieuTri = dataItem.Ten;
    }
    else {
      this.raVienNoiTru.NoiChuanDoanKhiVaoKhoaDieuTriId = null;
      this.raVienNoiTru.TenNoiChuanDoanKhiVaoKhoaDieuTri = null;
      this.raVienNoiTru.GhiChuNoiChuanDoanKhiVaoKhoaDieuTri = null;
    }
  }

  iCDSelectionChangeRaVien(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenChuanDoanRaVien = dataItem.DisplayName;
      this.raVienNoiTru.GhiChuChuanDoanRaVien = dataItem.Ten;
    }
    else {
      this.raVienNoiTru.ChuanDoanRaVienId = null;
      this.raVienNoiTru.TenChuanDoanRaVien = null;
      this.raVienNoiTru.GhiChuChuanDoanRaVien = null;
    }
  }

  themChanDoanKemTheo() {
    this.dataSourceICDsPhuKhac.data.push(new ThongTinChuanDoanKemTheo());
  }

  BackToList() {
    this.router.navigateByUrl("/dieu-tri-noi-tru?holdQuery=true");
  }
  onChangeTuyenChuyen(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenTuyenChuyen = dataItem.DisplayName;
    }
    else {
      this.raVienNoiTru.TuyenChuyenId = null;
      this.raVienNoiTru.TenTuyenChuyen = null;
    }
  }

  onChangeBenhVien(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenBenhVien = dataItem.DisplayName;
    }
    else {
      this.raVienNoiTru.BenhVienId = null;
      this.raVienNoiTru.TenBenhVien = null;
    }
  }

  onChangeLyDoChuyenTuyen(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenLyDoChuyenTuyen = dataItem.DisplayName;
    }
    else {
      this.raVienNoiTru.LyDoChuyenTuyenId = null;
      this.raVienNoiTru.TenLyDoChuyenTuyen = null;
    }
  }

  getThongTinRaVien(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.get<any>("DieuTriNoiTru/GetThongTinRaVienNoiKhoaNhiKhoa/" + id)
        .subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            this.raVienNoiTru = resultData;
            this.dataSourceICDsPhuKhac.data = this.raVienNoiTru.ChuanDoanKemTheos != null ? this.raVienNoiTru.ChuanDoanKemTheos : [];
            this.kiemTraTuVong(this.raVienNoiTru.HinhThucRaVienId);
            this.kiemTraChuyenVien(this.raVienNoiTru.HinhThucRaVienId);
            this.isChanDoanTuVong = this.raVienNoiTru.KhamNghiemTuThi === true ? true : false;
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  getSoNgayDieuTriBenhAnSoSinh(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.get<any>("DieuTriNoiTru/GetThongTinRaVienNoiKhoaNhiKhoa/" + id)
        .subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            this.raVienNoiTru.SoNgayDieuTriBenhAnSoSinh = resultData.SoNgayDieuTriBenhAnSoSinh;
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  henTaiKhamChange(ev: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    
    this.raVienNoiTru.NgayHienTaiKham = null;
    this.raVienNoiTru.GhiChuTaiKham = null;
  }


  LuuThongTinBenhRaVien(inVaLuu: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    if (this.raVienNoiTru.HenTaiKham) {
      this.ktNgayTaiKham(this.raVienNoiTru.NgayHienTaiKham);
      if (this.validationErrors != undefined && this.validationErrors.length > 0) {
        return true;
      }
    }

    this.raVienNoiTru.ChuanDoanKemTheos = this.dataSourceICDsPhuKhac.data;
    this.raVienNoiTru.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    this.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatThongTinRaVienNoiKhoaNhiKhoa", this.raVienNoiTru)
      .subscribe((resultData) => {
        if (inVaLuu) {
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
        }
      }, (err: ApiError) => {
        err.ValidationErrors === null || err.ValidationErrors.length == 0
          ? this.notificationService.showError(err.Message)
          : (this.validationErrors = err.ValidationErrors);
      });
  }

  ktNgayTaiKham(selectDate: any) {
    this.ktThongTin(selectDate);
  }

  ktThongTin(selectDateTime: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    var date = new Date();
    if (selectDateTime != undefined && selectDateTime != null) {
      var selectDate = new Date(selectDateTime);
      if (selectDate.getDay() === date.getDay() || selectDate.getDate() < date.getDate()) {
        this.validationErrors.push({
          Message: "Ngày tái khám lớn hơn ngày hiện tại",
          Field: "NgayHienTaiKham",
        });
      }
    }
  }

  inBenhAn(yeuCauTiepNhanId: any) {
    this.dialog.open(ThongTinPhieuInComponent, {
      disableClose: true,
      width: '1200px',
      data: { yeuCauTiepNhanId }
    }).afterClosed().subscribe(() => {
    });
  }

  ketThucThongTinBenhAnNoiKhoaVaKhoaNhi() {
    this.validationErrors = [];
    this.cdRef.detectChanges();

    this.LuuThongTinBenhRaVien(false);
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["kết thúc bệnh án"]) }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.raVienNoiTru.ChuanDoanKemTheos = this.dataSourceICDsPhuKhac.data;
          this.raVienNoiTru.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
          this.apiService.post<any>("DieuTriNoiTru/KetThucThongTinBenhAnNoiKhoa", this.raVienNoiTru)
            .subscribe((resultData) => {
              this.validationErrors = [];
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["kết thúc bệnh án"]));
              this.onRefresh();
            }, (err: ApiError) => {
              err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  moThongTinBenhAnNoiKhoaVaKhoaNhi() {
    if (this.authService.hasPermission(this.documentTypeMoLaiBenhAn, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["mở lại bệnh án"]) }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.raVienNoiTru.ChuanDoanKemTheos = this.dataSourceICDsPhuKhac.data;
          this.raVienNoiTru.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
          this.apiService.post<any>("DieuTriNoiTru/MoThongTinBenhAnNoiKhoa", this.raVienNoiTru)
            .subscribe((resultData) => {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["mở lại bệnh án"]));
              this.onRefresh();
            });
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


  onRefresh() {
    window.location.href = "/dieu-tri-noi-tru/chi-tiet-dieu-tri/" + this.raVienNoiTru.YeuCauTiepNhanId + "?tab=ra-vien";
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

  xoaICDsPhu(item: any) {
    this.dataSourceICDsPhuKhac.data.splice(this.dataSourceICDsPhuKhac.data.findIndex((x: any) => x == item), 1);
  }

  onChangeKetQuaDieuTri(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenKetQuaDieuTri = dataItem.DisplayName;
    }
    else {
      this.raVienNoiTru.KetQuaDieuTriId = null;
      this.raVienNoiTru.TenKetQuaDieuTri = null;
    }
  }

  onChangeGiauPTBenh(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenGiaPhauThuat = dataItem.DisplayName;
    }
    else {
      this.raVienNoiTru.GiaPhauThuatId = null;
      this.raVienNoiTru.TenGiaPhauThuat = null;
    }
  }

  onChangeHTRaVien(dataItem: any) {
    this.clearData();
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenHinhThucRaVien = dataItem.DisplayName;
      this.kiemTraTuVong(dataItem.KeyId);
      this.kiemTraChuyenVien(dataItem.KeyId);
    }
    else {
      this.raVienNoiTru.HinhThucRaVienId = null;
      this.raVienNoiTru.TenHinhThucRaVien = null;
      this.isTuVong = false;
      this.isChuyenVien = false;
    }
  }

  clearData() {
    this.raVienNoiTru.HinhThucRaVienId = null;
    this.raVienNoiTru.ThoiGianTuVong = null;
    this.raVienNoiTru.LyDoTuVongId = null;
    this.raVienNoiTru.TenLyDoTuVong = null;
    this.raVienNoiTru.NguyenNhanChinhTuVongId = null;
    this.raVienNoiTru.TenNguyenNhanChinhTuVong = null;
    this.raVienNoiTru.ChiTietChuanDoanTuVong = null;
    this.raVienNoiTru.KhamNghiemTuThi = null;
    this.raVienNoiTru.ChuanDoanTuThiId = null;
    this.raVienNoiTru.TenChuanDoanTuThi = null;
    this.raVienNoiTru.ChiTietChuanDoanTuThi = null;
    this.raVienNoiTru.HenTaiKham = null;
    this.raVienNoiTru.NgayHienTaiKham = null;
    this.raVienNoiTru.GhiChuTaiKham = null;

    this.raVienNoiTru.TuyenChuyenId = null;
    this.raVienNoiTru.TenTuyenChuyen = null;
    this.raVienNoiTru.BenhVienId = null;
    this.raVienNoiTru.TenBenhVien = null;
    this.raVienNoiTru.TinhTrangBenhNhanLucChuyenVien = null;
    this.raVienNoiTru.LyDoChuyenTuyenId = null;
    this.raVienNoiTru.TenLyDoChuyenTuyen = null;
    this.raVienNoiTru.ThoiGianChuyenVien = null;
    this.raVienNoiTru.NguoiHoTongId = null;
    this.raVienNoiTru.TenNguoiHoTong = null;
    this.raVienNoiTru.ChucVuNguoiHoTongId = null;
    this.raVienNoiTru.TenChucVuNguoiHoTong = null;
    this.raVienNoiTru.TrinhDoNguoiHoTongId = null;
    this.raVienNoiTru.TenTrinhDoNguoiHoTong = null;
    this.raVienNoiTru.PhuongTienNguoiHoTong = null;
  }

  iCDSelectionNguyenNhanChinhTuVong(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenNguyenNhanChinhTuVong = dataItem.DisplayName;
      this.raVienNoiTru.ChiTietChuanDoanTuVong = dataItem.Ten;
    }
    else {
      this.raVienNoiTru.TenNguyenNhanChinhTuVong = null;
      this.raVienNoiTru.ChiTietChuanDoanTuVong = null;
    }
  }

  iCDSelectionKhamNghiemTuThi(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenChuanDoanTuThi = dataItem.DisplayName;
      this.raVienNoiTru.ChiTietChuanDoanTuThi = dataItem.Ten;
    }
    else {
      this.raVienNoiTru.TenChuanDoanTuThi = null;
      this.raVienNoiTru.ChiTietChuanDoanTuThi = null;
    }
  }

  iCDSelectionLyDoTuVong(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenLyDoTuVong = dataItem.DisplayName;
    }
    else {
      this.raVienNoiTru.LyDoTuVongId = null;
      this.raVienNoiTru.TenLyDoTuVong = null;
    }
  }

  modelChange(ev: any) {
    this.isChanDoanTuVong = ev;
    this.raVienNoiTru.ChuanDoanTuThiId = null;
    this.raVienNoiTru.TenChuanDoanTuThi = null;
    this.raVienNoiTru.ChiTietChuanDoanTuThi = null;
  }


  thongTinNgayDieuTriBenhAnSoSinh() {
    let self = this;
    let noiTruBenhAnId = this.dieuTriNoiTruModel.Id;
    self.dialog.open(ThongTinDieuTriTreSoSinhComponent, {
      disableClose: true,
      width: '700px',
      data: noiTruBenhAnId,
    }
    ).afterClosed().subscribe((res) => {
      if(res=="Yes"){
        this.getSoNgayDieuTriBenhAnSoSinh(this.yeuCauTiepNhanId);
      }
    });
  }

  kiemTraTuVong(KeyId: any) {
    // 5:Tử vong
    // 8:Tử vong trước 24h    
    if (KeyId == 5 || KeyId == 8) {
      this.isTuVong = true;
    }
    else {
      this.isTuVong = false;
    }
  }

  kiemTraChuyenVien(KeyId: any) {
    // 4 : chuyển viện   
    if (KeyId == 4) {
      this.isChuyenVien = true;
    }
    else {
      this.isChuyenVien = false;
    }
  }
}
