import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel, DieuTriNoiTruTongKetBenhAnViewModel, LanPhauThuat } from '../../dieu-tri-noi-tru.model';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icDelete from '@iconify/icons-ic/twotone-delete';
@Component({
  selector: 'app-tong-ket-benh-an-san-khoa',
  templateUrl: './tong-ket-benh-an-san-khoa.component.html',
  styleUrls: ['./tong-ket-benh-an-san-khoa.component.scss']
})
export class TongKetBenhAnSanKhoaComponent implements OnInit {
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  thongTinBenhAnSanKhoa: DieuTriNoiTruTongKetBenhAnViewModel = new DieuTriNoiTruTongKetBenhAnViewModel();
  gridPhauThuatColumns: any[] = [];

  validationErrors: any;
  icAddCircle = icAddCircle;
  icDelete = icDelete;

  dataSourceTreSoSinhs: any = {
    data: [],
    total: 0
  };

  dataSourceChiSoSinhTons: any = {
    data: [],
    total: 0
  };

  dataSourceLanPhauThuats: any = {
    data: [],
    total: 0
  };

  constXquang: string = "X QUANG";
  constScanner: string = "CT SCANNER";
  constSieuAm: string = "SIÊU ÂM";
  constXetNghiem: string = "XÉT NGHIỆM";
  constKhac: string = "KHÁC";
  gridDataTongKetBenhAn: any = {
    data: [],
    total: 0
  };

  gridColumns: any[] = [];
  tongCong: number = 0;
  id: number;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;

  @ViewChild('soToTemplate', { static: true }) soToTemplate: TemplateRef<any>;
  @ViewChild('loaiFooterTemplate', { static: true }) loaiFooterTemplate: TemplateRef<any>;
  @ViewChild('soToFooterTemplate', { static: true }) soToFooterTemplate: TemplateRef<any>;
  @ViewChild('ngayGioTemplate', { static: true }) ngayGioTemplate: TemplateRef<any>;
  @ViewChild('phuongPhapTemplate', { static: true }) phuongPhapTemplate: TemplateRef<any>;
  @ViewChild('voCamTemplate', { static: true }) voCamTemplate: TemplateRef<any>;
  @ViewChild('phauThuatVienTemplate', { static: true }) phauThuatVienTemplate: TemplateRef<any>;
  @ViewChild('bacSyTemplate', { static: true }) bacSyTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('grid', { static: true }) grid: GridComponent;

  constructor(private route: ActivatedRoute, private dialog: MatDialog
    , private baseService: BaseService, private cdRef: ChangeDetectorRef
    , private authService: AuthService
    , private apiService: ApiService, private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.id = this.dieuTriNoiTruModel.Id;
    this.gridColumns = [
      {
        Field: "Loai", Title: "Loại", Width: 300, Sortable: false, TemplateFooter: this.loaiFooterTemplate
      },
      {
        Field: "SoTo", Title: "Số Tờ", Width: 100, Sortable: false, Template: this.soToTemplate, TemplateFooter: this.soToFooterTemplate
      },
    ];
    this.gridPhauThuatColumns = [
      { Field: "PTTTNgayGio", Title: "Ngày giờ", Width: 200, Sortable: false, Template: this.ngayGioTemplate },
      { Field: "PTTT", Title: "Phương pháp phẫu thuật ", Width: 300, Sortable: false, Template: this.phuongPhapTemplate },
      { Field: "VoCam", Title: "Phương pháp vô cảm", Width: 300, Sortable: false, Template: this.voCamTemplate },
      { Field: "PTTTPhauThuatVien", Title: "Phẫu thuật viên", Width: 150, Sortable: false, Template: this.phauThuatVienTemplate },
      { Field: "PTTTBacSyGayMe", Title: "Bác sỹ gây mê", Width: 150, Sortable: false, Template: this.bacSyTemplate },
      { Field: "Action", Title: "", Width: 80, Sortable: false, Template: this.actionTemplate },
    ];
    this.setItemForGrid();
    this.getThongTinBenhAnNoiSanKhoa(this.id);
  }

  getThongTinBenhAnNoiSanKhoa(id: any) {
    this.apiService.post<any>("DieuTriNoiTru/GetTongKetBenhAn?yeuCauTiepNhanId=" + id).subscribe(
      resultData => {
        this.thongTinBenhAnSanKhoa = resultData;
        this.setItemForGrid();
        this.dataSourceChiSoSinhTons.data = this.thongTinBenhAnSanKhoa.ChiSoSinhTons != null ? this.thongTinBenhAnSanKhoa.ChiSoSinhTons : [];
        this.dataSourceTreSoSinhs.data = this.thongTinBenhAnSanKhoa.DacDiemTreSoSinhs != null ? this.thongTinBenhAnSanKhoa.DacDiemTreSoSinhs : [];
        this.dataSourceLanPhauThuats.data = this.thongTinBenhAnSanKhoa.LanPhauThuats != null ? this.thongTinBenhAnSanKhoa.LanPhauThuats : [];

      },
      (err: ApiError) => {

      });
  }


  them() {
    let newItem = new LanPhauThuat();
    this.dataSourceLanPhauThuats.data.push(newItem);
  }

  selectionPhauThatVien(ev: any, dataItem: any) {
    if (ev != undefined && ev != null) {
      dataItem.TenPhauThuatVien = ev.DisplayName;
    }
    else {
      dataItem.TenPhauThuatVien = null;
    }
  }

  selectionBS(ev: any, dataItem: any) {
    if (ev != undefined && ev != null) {
      dataItem.TenBacSiGayMe = ev.DisplayName;
    }
    else {
      dataItem.TenBacSiGayMe = null;
    }
  }

  xoa(item: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.dataSourceLanPhauThuats.data.splice(this.dataSourceLanPhauThuats.data.findIndex(x => x == item), 1);
      }
    });
  }

  setItemForGrid() {
    this.gridDataTongKetBenhAn = null;
    let item = [{
      "Loai": this.constXquang,
      "SoTo": this.thongTinBenhAnSanKhoa.SoToXQuang
    }, {
      "Loai": this.constScanner,
      "SoTo": this.thongTinBenhAnSanKhoa.SoToCTScanner
    }, {
      "Loai": this.constSieuAm,
      "SoTo": this.thongTinBenhAnSanKhoa.SoToSieuAm
    }, {
      "Loai": this.constXetNghiem,
      "SoTo": this.thongTinBenhAnSanKhoa.SoToXetNghiem
    }, {
      "Loai": this.constKhac,
      "SoTo": this.thongTinBenhAnSanKhoa.SoToKhac
    }];

    this.gridDataTongKetBenhAn = {
      data: item,
      total: item.length,
    }

    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.grid != undefined) {
      this.grid.setDataSource();
    }

    this.setTongSo();
  }

  soToChange($event, dataItem) {
    switch (dataItem.Loai) {
      case this.constXquang: {
        this.thongTinBenhAnSanKhoa.SoToXQuang = $event
        break;
      }
      case this.constScanner: {
        this.thongTinBenhAnSanKhoa.SoToCTScanner = $event
        break;
      }
      case this.constSieuAm: {
        this.thongTinBenhAnSanKhoa.SoToSieuAm = $event
        break;
      }
      case this.constXetNghiem: {
        this.thongTinBenhAnSanKhoa.SoToXetNghiem = $event
        break;
      }
      case this.constKhac: {
        this.thongTinBenhAnSanKhoa.SoToKhac = $event
        break;
      }
    }
    this.setTongSo();
  }

  setTongSo() {
    this.tongCong = this.thongTinBenhAnSanKhoa.SoToXQuang + this.thongTinBenhAnSanKhoa.SoToCTScanner
      + this.thongTinBenhAnSanKhoa.SoToSieuAm + this.thongTinBenhAnSanKhoa.SoToKhac + this.thongTinBenhAnSanKhoa.SoToXetNghiem;
  }


  
  LuuThongTinBenhAnSanKhoa() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.thongTinBenhAnSanKhoa.YeuCauTiepNhanId = this.id;
          this.thongTinBenhAnSanKhoa.ChiSoSinhTons = this.dataSourceChiSoSinhTons.data;
          this.thongTinBenhAnSanKhoa.DacDiemTreSoSinhs = this.dataSourceTreSoSinhs.data;
          this.thongTinBenhAnSanKhoa.LanPhauThuats = this.dataSourceLanPhauThuats.data;
          this.validationErrors = [];
          this.apiService.post<any>("DieuTriNoiTru/LuuTongKetBenhAn", this.thongTinBenhAnSanKhoa)
            .subscribe((resultData) => {
              this.setItemForGrid();
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
            },
              (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
              });
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  selectionChucVu(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinBenhAnSanKhoa.TenChucDanh = dataItem.DisplayName;
    }
    else {
      this.thongTinBenhAnSanKhoa.TenChucDanh = null;
    }
  }

  huyBenhAn() {
    this.getThongTinBenhAnNoiSanKhoa(this.id);
  }

  selectionNhanVienTheoDoi(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinBenhAnSanKhoa.TenNhanVienTheoDoi = dataItem.DisplayName;
    }
    else {
      this.thongTinBenhAnSanKhoa.TenNhanVienTheoDoi = null;
    }
  }

  selectionPhuongPhapDe(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinBenhAnSanKhoa.TenPhuongPhapDe = dataItem.DisplayName;
    }
    else {
      this.thongTinBenhAnSanKhoa.TenPhuongPhapDe = null;
    }
  }

  selectionTangSinhMon(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinBenhAnSanKhoa.TenTangSinhMon = dataItem.DisplayName;
    }
    else {
      this.thongTinBenhAnSanKhoa.TenTangSinhMon = null;
    }
  }

  selectionGetCoTuCung(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.thongTinBenhAnSanKhoa.TenCoTuCung = dataItem.DisplayName;
    }
    else {
      this.thongTinBenhAnSanKhoa.TenCoTuCung = null;
    }
  }

  InToDieuTriTheoNgay() {

  }

}
