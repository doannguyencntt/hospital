import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DanhSachTreSoSinh, RaVienNoiTruSanKhoaThuong } from '../thong-tin-ra-vien.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { ThongTinPhieuInComponent } from '../thong-tin-phieu-in/thong-tin-phieu-in.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-thong-tin-san-khoa-mo',
  templateUrl: './thong-tin-san-khoa-mo.component.html',
  styleUrls: ['./thong-tin-san-khoa-mo.component.scss']
})

export class ThongTinSanKhoaMoComponent implements OnInit {
  @Input() yeuCauTiepNhanId: any = null;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  documentTypeMoLaiBenhAn: DocumentType = DocumentType.MoLaiBenhAn;

  icDelete = icDelete;
  icAddCircle = icAddCircle;
  raVienNoiTru = new RaVienNoiTruSanKhoaThuong();
  queryInfoBenhVienChuyenVien: LookupQueryInfo = new LookupQueryInfo();
  dataSourceTreSoSinh: any = {
    data: [],
    total: 0
  }

  isTuVong: boolean = false;
  isChuyenVien: boolean = false;
  public isChanDoanTuVong: boolean = false;
  gridTreSoSinhColumns: any[] = [];
  cachThucDe: boolean = null;

  public sampleData: any[] = [];
  @ViewChild('thoiGianTemplate', { static: true }) thoiGianTemplate: TemplateRef<any>;
  @ViewChild('teniCDsPhuKhacTemplate', { static: true }) teniCDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('ghiChuICDsPhuKhacTemplate', { static: true }) ghiChuICDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('actionICDsPhuKhacTemplate', { static: true }) actionICDsPhuKhacTemplate: TemplateRef<any>;
  @ViewChild('ghiChuTemplateEdit', { static: true }) ghiChuTemplateEdit: TemplateRef<any>;

  @ViewChild('gioiTinhTemplate', { static: true }) gioiTinhTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('diTatTemplate', { static: true }) diTatTemplate: TemplateRef<any>;
  @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  constructor(private apiService: ApiService, private authService: AuthService, private dialog: MatDialog,
    private notificationService: NotificationService, private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.gridTreSoSinhColumns = [
      { Field: "ICD", Title: "GIỚI TÍNH", Width: 100, Sortable: true, Template: this.gioiTinhTemplate },
      { Field: "ChuanDoan", Title: "TÌNH TRẠNG", Width: 150, Sortable: true, Template: this.tinhTrangTemplate },
      { Field: "ICD", Title: "DỊ TẬT", Width: 100, Sortable: true, Template: this.diTatTemplate },
      { Field: "ChuanDoan", Title: "CÂN NẶNG(g)", Width: 150, Sortable: true, Template: this.canNangTemplate },
      { Field: "", Title: "", Width: 150, Sortable: true, Template: this.actionTemplate }
    ];

    if (this.yeuCauTiepNhanId != null) {
      this.getThongTinRaVien(this.yeuCauTiepNhanId);
    }
  }

  modelChangeCachDe(event: any) {
    if (event) {
      this.raVienNoiTru.CachThucDe = "Đẻ thường";
    } else {
      this.raVienNoiTru.CachThucDe = "Đẻ mổ";
    }
  }

  themTreSoSinh() {
    this.dataSourceTreSoSinh.data.push(new DanhSachTreSoSinh());
  }

  xoa(item: any) {
    this.dataSourceTreSoSinh.data.splice(this.dataSourceTreSoSinh.data.findIndex((x: any) => x == item), 1);
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

  iCDSelectionChangeVaoKhoaDT(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenNoiChuanDoanLucVaoDe = dataItem.DisplayName;
      this.raVienNoiTru.GhiChuNoiChuanDoanLucVaoDe = dataItem.Ten;
    }
    else {
      this.raVienNoiTru.NoiChuanDoanLucVaoDeId = null;
      this.raVienNoiTru.TenNoiChuanDoanLucVaoDe = null;
      this.raVienNoiTru.GhiChuNoiChuanDoanLucVaoDe = null;
    }
  }

  iCDSelectionChangeTruocPT(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenChuanDoanTruocPhauThuat = dataItem.DisplayName;
      this.raVienNoiTru.GhiChuChuanDoanTruocPhauThuat = dataItem.Ten;
    }
    else {
      this.raVienNoiTru.ChuanDoanTruocPhauThuatId = null;
      this.raVienNoiTru.TenChuanDoanTruocPhauThuat = null;
      this.raVienNoiTru.GhiChuChuanDoanTruocPhauThuat = null;
    }
  }

  iCDSelectionChangeSauPT(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.raVienNoiTru.TenChuanDoanSauPhauThuat = dataItem.DisplayName;
      this.raVienNoiTru.GhiChuChuanDoanSauPhauThuat = dataItem.Ten;
    }
    else {
      this.raVienNoiTru.ChuanDoanSauPhauThuatId = null;
      this.raVienNoiTru.TenChuanDoanSauPhauThuat = null;
      this.raVienNoiTru.GhiChuChuanDoanSauPhauThuat = null;
    }
  }

  BackToList() {
    this.router.navigateByUrl("/dieu-tri-noi-tru?holdQuery=true");
  }

  getThongTinRaVien(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.get<any>("DieuTriNoiTru/GetRaVienNoiTruSanKhoaMo/" + id)
        .subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            this.raVienNoiTru = resultData;            
            this.cachThucDe = this.raVienNoiTru.CachThucDe === "Đẻ thường" ? true : this.raVienNoiTru.CachThucDe === "Đẻ mổ" ? false : null;
            this.dataSourceTreSoSinh.data = resultData.DanhSachTreSoSinhs != null ? resultData.DanhSachTreSoSinhs : [];
            this.kiemTraTuVong(this.raVienNoiTru.HinhThucRaVienId);
            this.kiemTraChuyenVien(this.raVienNoiTru.HinhThucRaVienId);
            this.isChanDoanTuVong = this.raVienNoiTru.KhamNghiemTuThi === true ? true : false;
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  henTaiKhamChange(ev: any) {
    this.raVienNoiTru.NgayHienTaiKham = null;
    this.raVienNoiTru.GhiChuTaiKham = null;
  }

  validationErrors: any[];
  LuuThongTinBenhRaVien(inVaLuu: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();    
    if (this.raVienNoiTru.HenTaiKham) {
      this.ktNgayTaiKham(this.raVienNoiTru.NgayHienTaiKham);
      if (this.validationErrors != undefined && this.validationErrors.length > 0) {
        return true;
      }
    }
    
    this.raVienNoiTru.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    this.raVienNoiTru.DanhSachTreSoSinhs = this.dataSourceTreSoSinh.data;
    this.apiService.post<any>("DieuTriNoiTru/LuuHoacCapNhatRaVienNoiTruSanKhoaMo", this.raVienNoiTru)
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

  ketThucThongTinBenhAnSanKhoaMo() {
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
          this.raVienNoiTru.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
          this.apiService.post<any>("DieuTriNoiTru/KetThucThongTinBenhAnSanKhoaMo", this.raVienNoiTru)
            .subscribe((resultData) => {
              this.validationErrors = [];
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["kết thúc bệnh án"]));
              this.refreshPage();
            }, (err: ApiError) => {
              err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  moThongTinBenhAnSanKhoaMo() {
    if (this.authService.hasPermission(this.documentTypeMoLaiBenhAn, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["mở lại bệnh án"]) }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.raVienNoiTru.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
          this.apiService.post<any>("DieuTriNoiTru/MoThongTinBenhAnSanKhoaMo", this.raVienNoiTru)
            .subscribe((resultData) => {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["mở lại bệnh án"]));
              this.refreshPage();
            });
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  refreshPage() {
    window.location.href = "/dieu-tri-noi-tru/chi-tiet-dieu-tri/" + this.raVienNoiTru.YeuCauTiepNhanId + "?tab=ra-vien";
  }

  inBenhAn(yeuCauTiepNhanId: any) {
    this.dialog.open(ThongTinPhieuInComponent, {
      disableClose: true,
      width: '1200px',
      data: { yeuCauTiepNhanId }
    }).afterClosed().subscribe(() => {
    });
  }

  onChangeGioiTinh(dataItem: any, rowIndex: number) {
    if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
      this.dataSourceTreSoSinh.data[rowIndex].GioiTinh = dataItem.DisplayName;
    }
    else {
      this.dataSourceTreSoSinh.data[rowIndex].GioiTinh = null;
    }
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

  onChangeTinhTrang(dataItem: any, rowIndex: number) {
    if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
      this.dataSourceTreSoSinh.data[rowIndex].TenTinhTrang = dataItem.DisplayName;
    }
    else {
      this.dataSourceTreSoSinh.data[rowIndex].TenTinhTrang = null;
    }
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
      this.raVienNoiTru.ChiTietChuanDoanTuVong = dataItem.DisplayName;
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
      this.raVienNoiTru.ChiTietChuanDoanTuVong = dataItem.Ten;
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
