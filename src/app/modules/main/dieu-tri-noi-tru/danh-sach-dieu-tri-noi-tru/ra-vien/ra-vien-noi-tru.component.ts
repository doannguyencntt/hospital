import { NotificationComponent } from './../../../../../shared/component/dialogs/notification/notification.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { ChiTietDieuTriNoiTruViewModel } from '../../dieu-tri-noi-tru.model';
import { Common } from '../thong-tin-benh-an/thong-tin-benh-an.model';
import { ThongTinNgoaiKhoaThamMyComponent } from './thong-tin-ngoai-khoa-tham-my/thong-tin-ngoai-khoa-tham-my.component';
import { ThongTinPhuKhoaComponent } from './thong-tin-phu-khoa/thong-tin-phu-khoa.component';
import { ThongTinRaVienNoiKhoaNhiComponent } from './thong-tin-ra-vien-noi-khoa-nhi/thong-tin-ra-vien-noi-khoa-nhi.component';
import { ThongTinSanKhoaMoComponent } from './thong-tin-san-khoa-mo/thong-tin-san-khoa-mo.component';
import { ThongTinSanKhoaComponent } from './thong-tin-san-khoa-thuong/thong-tin-san-khoa-thuong.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ErrorService } from 'src/app/core/error/error.service';

@Component({
  selector: 'app-ra-vien-noi-tru',
  templateUrl: './ra-vien-noi-tru.component.html',
  styleUrls: ['./ra-vien-noi-tru.component.scss']
})
export class RaVienNoiTruComponent implements OnInit {
  loaiBenhAn = new Common();
  yeuCauTiepNhanId: number = 0;
  loaiThongTinBenhAn: number = 0;

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @ViewChild(ThongTinRaVienNoiKhoaNhiComponent, { static: false }) thongTinRaVienNoiKhoaNhiComponent: ThongTinRaVienNoiKhoaNhiComponent;
  @ViewChild(ThongTinNgoaiKhoaThamMyComponent, { static: false }) thongTinNgoaiKhoaThamMyComponent: ThongTinNgoaiKhoaThamMyComponent;
  @ViewChild(ThongTinPhuKhoaComponent, { static: false }) thongTinPhuKhoaComponent: ThongTinPhuKhoaComponent;
  @ViewChild(ThongTinSanKhoaComponent, { static: false }) thongTinSanKhoaThuongComponent: ThongTinSanKhoaComponent;
  @ViewChild(ThongTinSanKhoaMoComponent, { static: false }) thongTinSanKhoaMoComponent: ThongTinSanKhoaMoComponent;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private notificationService: NotificationService,
    private dialog: MatDialog, private authService: AuthService, private errorService: ErrorService) { }

  ngOnInit() {
    this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id;
    this.getThongTinLoaiBenhAn(this.yeuCauTiepNhanId);
  }

  getThongTinLoaiBenhAn(id: any) {
    this.apiService.get<any>("DieuTriNoiTru/GetThongTinLoaiBenhAn/" + id)
      .subscribe((loaiBenhAn) => {
        this.loaiThongTinBenhAn = loaiBenhAn;
      });
  }

  ketThucThongTinBenhAn() {
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa
      || this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
      this.thongTinRaVienNoiKhoaNhiComponent.LuuThongTinBenhRaVien(false);
      this.KetThucBenhAnKhiRaVien();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.ThamMy) {
      this.thongTinNgoaiKhoaThamMyComponent.LuuThongTinBenhRaVien(false);
      this.KetThucBenhAnKhiRaVien();
    }

    if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
      this.thongTinPhuKhoaComponent.LuuThongTinBenhRaVien(false);
      this.KetThucBenhAnKhiRaVien();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo) {
      this.thongTinSanKhoaMoComponent.LuuThongTinBenhRaVien(false);
      this.KetThucBenhAnKhiRaVien();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
      this.thongTinSanKhoaThuongComponent.LuuThongTinBenhRaVien(false);
      this.KetThucBenhAnKhiRaVien();
    }
  }

  KetThucBenhAnKhiRaVien() {
    var raVienNoiTru = null;
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa
      || this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
      raVienNoiTru = this.thongTinRaVienNoiKhoaNhiComponent.raVienNoiTru;
    }

    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.ThamMy) {
      raVienNoiTru = this.thongTinNgoaiKhoaThamMyComponent.raVienNoiTru;
    }

    if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
      raVienNoiTru = this.thongTinPhuKhoaComponent.raVienNoiTru;
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo) {
      raVienNoiTru = this.thongTinSanKhoaMoComponent.raVienNoiTru;
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
      raVienNoiTru = this.thongTinSanKhoaThuongComponent.raVienNoiTru;
    }
    if (raVienNoiTru != null) {
      raVienNoiTru.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
      var loaded = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: "Đang kiểm tra dữ liệu..." }
      });
      this.apiService.post<any>("DieuTriNoiTru/KiemTraThongTinKetThucBenhAn", raVienNoiTru)
        .subscribe((resultData) => {
          if (resultData == null || resultData.length == 0) {
            if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa
              || this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
              this.thongTinRaVienNoiKhoaNhiComponent.ketThucThongTinBenhAnNoiKhoaVaKhoaNhi();
            }

            if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.ThamMy) {
              this.thongTinNgoaiKhoaThamMyComponent.ketThucThongTinBenhAnNgoaiKhoaVaThamMy();
            }

            if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
              this.thongTinPhuKhoaComponent.ketThucThongTinBenhAnPhuKhoa();
            }
            if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo) {
              this.thongTinSanKhoaMoComponent.ketThucThongTinBenhAnSanKhoaMo();
            }
            if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
              this.thongTinSanKhoaThuongComponent.ketThucThongTinBenhAnSanKhoaThuong();
            }
          }
          else {
            var mess = "<table class='table' width='100%'><tr><th>NGÀY ĐIỀU TRỊ</th><th>LOẠI</th><th>TÊN DỊCH VỤ</th><th>NỘI DUNG</th></tr>";
            resultData.forEach(item => {
              mess += "<tr>";
              mess += "<td>" + item.NgayDieuTri + "</td>";
              mess += "<td>" + item.Loai + "</td>";
              mess += "<td>" + item.TenDichVu + "</td>";
              mess += "<td>" + item.NoiDung + "</td>";
              mess += "</tr>"
            });
            mess += "</table>";
            this.dialog.open(NotificationComponent, {
              disableClose: false,
              width: '800px',
              data: { Title: "DANH SÁCH PHIẾU ĐIỀU TRỊ LỖI", Message: mess }
            });
          }
          loaded.close();
        }, (err: ApiError) => {
          if (err.ValidationErrors == null || err.ValidationErrors.length == 0) {
            this.notificationService.showError(err.Message);
          }
          else {
            if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa
              || this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
              this.thongTinRaVienNoiKhoaNhiComponent.validationErrors = err.ValidationErrors;
            }

            if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.ThamMy) {
              this.thongTinNgoaiKhoaThamMyComponent.validationErrors = err.ValidationErrors;
            }

            if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
              this.thongTinPhuKhoaComponent.validationErrors = err.ValidationErrors;
            }
            if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo) {
              this.thongTinSanKhoaMoComponent.validationErrors = err.ValidationErrors;
            }
            if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
              this.thongTinSanKhoaThuongComponent.validationErrors = err.ValidationErrors;
            }
            var mess = this.errorService.getValidationErrors(err);
            if (mess != null) {
              this.notificationService.showError(mess);
            }
          }
          loaded.close();
        });
    }
  }
  
  moThongTinBenhAn() {
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa
      || this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
      this.thongTinRaVienNoiKhoaNhiComponent.moThongTinBenhAnNoiKhoaVaKhoaNhi();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.ThamMy) {
      this.thongTinNgoaiKhoaThamMyComponent.moThongTinBenhAnNgoaiKhoaVaThamMy();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
      this.thongTinPhuKhoaComponent.moThongTinBenhAnPhuKhoa();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo) {
      this.thongTinSanKhoaMoComponent.moThongTinBenhAnSanKhoaMo();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
      this.thongTinSanKhoaThuongComponent.moThongTinBenhAnSanKhoaThuong();
    }
  }

  luuThongTinRaVien() {
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa
      || this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
        }).afterClosed().subscribe(result => {
          if (result === 'Yes') {
            this.thongTinRaVienNoiKhoaNhiComponent.LuuThongTinBenhRaVien(true);
          }
        });
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }

    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.ThamMy) {

      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
        }).afterClosed().subscribe(result => {
          if (result === 'Yes') {
            this.thongTinNgoaiKhoaThamMyComponent.LuuThongTinBenhRaVien(true);
          }
        });
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }

    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
        }).afterClosed().subscribe(result => {
          if (result === 'Yes') {
            this.thongTinPhuKhoaComponent.LuuThongTinBenhRaVien(true);
          }
        });
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }

    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
        }).afterClosed().subscribe(result => {
          if (result === 'Yes') {
            this.thongTinSanKhoaMoComponent.LuuThongTinBenhRaVien(true);
          }
        });
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }

    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
        }).afterClosed().subscribe(result => {
          if (result === 'Yes') {
            this.thongTinSanKhoaThuongComponent.LuuThongTinBenhRaVien(true);
          }
        });
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }

    }
  }

  huyThongTinRaVien() {
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa
      || this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
      this.thongTinRaVienNoiKhoaNhiComponent.getThongTinRaVien(this.yeuCauTiepNhanId);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa) {
      this.thongTinNgoaiKhoaThamMyComponent.getThongTinRaVien(this.yeuCauTiepNhanId);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
      this.thongTinPhuKhoaComponent.getThongTinRaVien(this.yeuCauTiepNhanId);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo) {
      this.thongTinSanKhoaMoComponent.getThongTinRaVien(this.yeuCauTiepNhanId);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
      this.thongTinSanKhoaThuongComponent.getThongTinRaVien(this.yeuCauTiepNhanId);
    }
  }

  inThongTinBenhAn() {
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa
      || this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
      this.thongTinRaVienNoiKhoaNhiComponent.LuuThongTinBenhRaVien(false);
      this.thongTinRaVienNoiKhoaNhiComponent.inBenhAn(this.yeuCauTiepNhanId);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.ThamMy) {
      this.thongTinNgoaiKhoaThamMyComponent.LuuThongTinBenhRaVien(false);
      this.thongTinNgoaiKhoaThamMyComponent.inBenhAn(this.yeuCauTiepNhanId);
    }

    if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
      this.thongTinPhuKhoaComponent.LuuThongTinBenhRaVien(false);
      this.thongTinPhuKhoaComponent.inBenhAn(this.yeuCauTiepNhanId);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo) {
      this.thongTinSanKhoaMoComponent.LuuThongTinBenhRaVien(false);
      this.thongTinSanKhoaMoComponent.inBenhAn(this.yeuCauTiepNhanId);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
      this.thongTinSanKhoaThuongComponent.LuuThongTinBenhRaVien(false);
      this.thongTinSanKhoaThuongComponent.inBenhAn(this.yeuCauTiepNhanId);
    }
  }
}
