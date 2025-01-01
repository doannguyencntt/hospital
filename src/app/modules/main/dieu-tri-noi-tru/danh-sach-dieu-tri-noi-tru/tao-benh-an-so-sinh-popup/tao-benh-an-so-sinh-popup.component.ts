import { ChangeDetectorRef, Component, Inject, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LookupItemVo } from 'src/app/shared/models/common.model';
import { DacDiemTreSoSinh, ThongTinTheoDoiSoSinhDuocChon } from '../../dieu-tri-noi-tru.model';
import { TiepNhanNoiTruChiDinhPopupComponent } from '../../tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component';
import { ThongTinDoiTuongSoSinhTiepNhan } from '../../tiep-nhan-noi-tru/tiep-nhan-noi-tru.model';
declare var $: any;

@Component({
  selector: 'app-tao-benh-an-so-sinh-popup',
  templateUrl: './tao-benh-an-so-sinh-popup.component.html',
  styleUrls: ['./tao-benh-an-so-sinh-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaoBenhAnSoSinhPopupComponent implements OnInit {

  icClose = icClose;
  validationErrors: any;
  popupLoadingData: any;
  dataKhoaPhongChuyenVe: any;

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;

  tiepNhanBenhNhan: ThongTinDoiTuongSoSinhTiepNhan = new ThongTinDoiTuongSoSinhTiepNhan();
  thongTinTheoDoiSoSinhDuocChon: ThongTinTheoDoiSoSinhDuocChon = new ThongTinTheoDoiSoSinhDuocChon();

  gridColumns: any;
  dacDiemTreSoSinh = {} as DacDiemTreSoSinh;

  dataSourceTheoDoiSoSinhs: any = {
    data: this.dacDiemTreSoSinh,
    total: 0
  };

  dataSourceTheoDoiSoSinhTams: any = {
    data: [],
    total: 0
  };

  currentKhoaPhongChuyenVe = {} as LookupItemVo;

  @ViewChild('comboboxQuanHuyen', { static: true }) comboboxQuanHuyen: ComboboxComponent;
  @ViewChild('cboQuanHuyenNguoiLienHe', { static: true }) cboQuanHuyenNguoiLienHe: ComboboxComponent;
  @ViewChild('chonTreSoSinhTemplate', { static: true }) chonTreSoSinhTemplate: TemplateRef<any>;
  @ViewChild('diTatTemplate', { static: true }) diTatTemplate: TemplateRef<any>;
  @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
  @ViewChild('caoTemplate', { static: true }) caoTemplate: TemplateRef<any>;
  @ViewChild('vongDauTemplate', { static: true }) vongDauTemplate: TemplateRef<any>;
  @ViewChild('coHauMonTemplate', { static: true }) coHauMonTemplate: TemplateRef<any>;
  @ViewChild('aPGARTemplate', { static: true }) aPGARTemplate: TemplateRef<any>;

  public apGarSelectItems: any = [
    { KeyId: 1, DisplayName: "1 phút" },
    { KeyId: 2, DisplayName: "5 phút" },
    { KeyId: 3, DisplayName: "10 phút" },
  ];
  sosinh: string = "sosinh";

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ThongTinDoiTuongSoSinhTiepNhan>
  ) { }

  ngOnInit() {
    this.getThongTinTheoDoiSoSinh(this.data);
    this.getThongTinBenhAnMe(this.data);
    this.getKhoaPhongChuyenVe();
    this.gridColumns = [
      { Field: "", Title: "", Width: 50, Sortable: true, Template: this.chonTreSoSinhTemplate },
      { Field: "DeLucDisplayName", Title: "ĐẾN LÚC", Width: 150, Sortable: true },
      { Field: "GioiTinh", Title: "GIỚI TÍNH", Width: 150, Sortable: true },
      { Field: "TenTinhTrang", Title: "TÌNH TRẠNG", Width: 100, Sortable: true },

      { Field: "DiTat", Title: "DỊ TẬT", Width: 150, Sortable: true, Template: this.diTatTemplate },
      { Field: "CanNang", Title: "Cân Nặng", Width: 150, Sortable: true, Template: this.canNangTemplate },
      { Field: "Cao", Title: "Cao(cm)", Width: 150, Sortable: true, Template: this.caoTemplate },
      { Field: "VongDau", Title: "Vòng đầu(cm)", Width: 150, Sortable: true, Template: this.vongDauTemplate },
      { Field: "CoHauMon", Title: "Có Hậu Môn", Width: 100, Sortable: true, Template: this.coHauMonTemplate },
      { Field: "APGAR", Title: "APGAR", Width: 700, Sortable: true, Template: this.aPGARTemplate },
      { Field: "TinhTrang", Title: "Tình Trạng", Width: 200, Sortable: true },
      { Field: "KetQuaXuLy", Title: "KQ Xử Lý", Width: 200, Sortable: true },
    ];
  }
  getKhoaPhongChuyenVe() {
    this.apiService.post<any>("DieuTriNoiTru/KhoaChuyenBenhAnSoSinhVe").subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.dataKhoaPhongChuyenVe = resultData;

        this.tiepNhanBenhNhan.KhoaChuyenBenhAnSoSinhVeId = resultData[0].KeyId;

        this.currentKhoaPhongChuyenVe.KeyId = resultData[0].KeyId;
        this.currentKhoaPhongChuyenVe.DisplayName = resultData[0].DisplayName;
      }
    });
  }

  getThongTinTheoDoiSoSinh(yeuCauTiepNhanId: number) {
    this.apiService
      .get<any>("DieuTriNoiTru/GetThongTinTheoDoiSoSinh?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
      .subscribe(
        (resultData) => {
          this.dataSourceTheoDoiSoSinhs.data = resultData;
          if (this.dataSourceTheoDoiSoSinhs.data.length > 0) {         
            this.dataSourceTheoDoiSoSinhs.data[0].ChonTheoDoiSoSinh = true;
            this.dataSourceTheoDoiSoSinhTams.data = [...this.dataSourceTheoDoiSoSinhs.data];         
          }
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );
  }

  luuThongTinSoSinhDuocChon(yeuCauTiepNhanMeId: number, yeuCauTiepNhanConId: number) {
    this.thongTinTheoDoiSoSinhDuocChon.YeuCauTiepNhanMeId = yeuCauTiepNhanMeId;
    this.thongTinTheoDoiSoSinhDuocChon.YeuCauTiepNhanConId = yeuCauTiepNhanConId;
    this.thongTinTheoDoiSoSinhDuocChon.DacDiemTreSoSinhs = this.dataSourceTheoDoiSoSinhTams.data.filter(c => c.ChonTheoDoiSoSinh == true);

    this.apiService
      .post<any>("DieuTriNoiTru/LuuThongTinSoSinhDuocChon", this.thongTinTheoDoiSoSinhDuocChon)
      .subscribe(
        (resultData) => {

        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );
  }

  chonTheoDoiSoSinhChange(event: any) {
    if (this.dataSourceTheoDoiSoSinhs != undefined && this.dataSourceTheoDoiSoSinhs != undefined
      && this.dataSourceTheoDoiSoSinhs.data.length > 0) {
      this.dataSourceTheoDoiSoSinhs.data.forEach(element => {
        return (element.ChonTheoDoiSoSinh = false);
      });   
      this.dataSourceTheoDoiSoSinhTams.data = [...this.dataSourceTheoDoiSoSinhs.data.filter(c => c.Id == event.Id)];
    }
  }

  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == undefined
      || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: "200px",
        height: "90px",
        data: { Title: "Đang tải dữ liệu..." },
      });
    }

  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  getThongTinBenhAnMe(yeuCauTiepNhanId: number) {
    this.showPopupLoadingData();
    this.apiService
      .get<any>("DieuTriNoiTru/GetThongTinTiepNhanBenhAnMe?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
      .subscribe(
        (resultData) => {
          this.tiepNhanBenhNhan = resultData;
          this.closePopupLoadingData();
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        }
      );
  }

  TinhThanhPhoChange(event) {
    if (event == undefined || event == null) {
      this.tiepNhanBenhNhan.QuanHuyenId = null;
      this.tiepNhanBenhNhan.PhuongXaId = null;
    }
    else {
      this.comboboxQuanHuyen.getDataForLookup();
    }
  }

  QuanHuyenChange(event) {
    if (event == undefined || event == null) {
      // this.tiepNhanBenhNhan.QuanHuyenId = event;
      this.tiepNhanBenhNhan.PhuongXaId = null;
    }
  }

  PhuongXaChange($event) {
    this.tiepNhanBenhNhan.PhuongXaId = $event;
    if ($event != null && $event != undefined) {
      this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(
        resultData => {
          this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
          this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
          this.comboboxQuanHuyen.getDataForLookup();
        },
        (err: any) => {
        });
    }
    else {
      this.tiepNhanBenhNhan.TinhThanhId = null;
      this.tiepNhanBenhNhan.QuanHuyenId = null;
    }
  }

  TinhThanhPhoNguoiLienHeChange(event) {
    if (event == undefined || event == null) {
      this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
      this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
    }
    else {
      this.cboQuanHuyenNguoiLienHe.getDataForLookup();
    }
  }

  QuanHuyenNguoiLienHeChange(event) {
    if (event == undefined || event == null) {
      this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
    }
  }

  PhuongXaNguoiLienHeChange(event) {
    if (event != null && event != undefined) {
      this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(
        resultData => {
          this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = resultData.TinhThanhId;
          this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = resultData.QuanHuyenId;
          this.cboQuanHuyenNguoiLienHe.getDataForLookup();
        },
        (err: any) => {
        });
    }
  }

  xuLyTaoBenhAnSoSinh() {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    if (this.tiepNhanBenhNhan.TenBanDau == undefined && this.tiepNhanBenhNhan.TenBanDau == null) {
      this.taoBenhAnSoSinh("Bạn có chắc chắn muốn tạo bệnh án sơ sinh không?");
    } else {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
        if (this.tiepNhanBenhNhan.YeuCauTiepNhanId != undefined && this.tiepNhanBenhNhan.YeuCauTiepNhanId != null && this.tiepNhanBenhNhan.TenBanDau != undefined && this.tiepNhanBenhNhan.TenBanDau != null) {
          this.apiService.get<any>("DieuTriNoiTru/BenhAnMeCoConTrungTen?yeuCauTiepNhanBenhAnMeId=" + this.tiepNhanBenhNhan.YeuCauTiepNhanId + "&hoTen=" + this.tiepNhanBenhNhan.TenBanDau).subscribe((resultData) => {
            if (resultData) {
            this.taoBenhAnSoSinh(`<span class="red-text">Đã tạo BA con có tên ${this.tiepNhanBenhNhan.TenBanDau.toUpperCase().bold()} .Bạn có chắc muốn tạo tiếp BA này không?</span>`);
            }else{
              this.taoBenhAnSoSinh("Bạn có chắc chắn muốn tạo bệnh án sơ sinh không?");
            }
          });
        }
      }
      else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
  }

  taoBenhAnSoSinh(message: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "400px",
      data: {
        Title: "Xác nhận",
        Message: message
      },
    })
      .afterClosed()
      .subscribe((result) => {
        if (result == "Yes") {
          this.showPopupLoadingData();
          this.validationErrors = [];

          if (this.dataSourceTheoDoiSoSinhs != undefined && this.dataSourceTheoDoiSoSinhs != undefined
            && this.dataSourceTheoDoiSoSinhs.data.length > 0) {
            let theoDoiSoSinh = this.dataSourceTheoDoiSoSinhs.data.filter(c => c.ChonTheoDoiSoSinh == true);
          
            if (theoDoiSoSinh.length === 0) {
              this.notificationService.showError("Vui lòng chọn bé theo dõi sơ sinh.");
              this.closePopupLoadingData();
              return;
            }                   
            this.tiepNhanBenhNhan.LucDeSoSinh = theoDoiSoSinh[0].DeLuc;
          }

          this.apiService.post<any>("DieuTriNoiTru/XuLyTaoBenhAnSoSinh", this.tiepNhanBenhNhan)
            .subscribe(
              (result) => {
                this.closePopupLoadingData();
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tạo bệnh án"]));
                this.xuLyChiDinhEkipVaDichVuGiuong(result);
                if (result.ResultYeuCauTiepNhanId != undefined && result.ResultYeuCauTiepNhanId != null) {
                  this.luuThongTinSoSinhDuocChon(this.data, result.ResultYeuCauTiepNhanId);
                }
              },
              (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
              }
            );
        }
      });
  }

  selectionChangeKhoaPhongChuyenVe(dataItem: any) {   
    if (dataItem != undefined && dataItem != null) {
      this.currentKhoaPhongChuyenVe.KeyId = dataItem.KeyId;
      this.tiepNhanBenhNhan.KhoaChuyenBenhAnSoSinhVeId = dataItem.KeyId;
      this.currentKhoaPhongChuyenVe.DisplayName = dataItem.DisplayName;
    }
  }

  xuLyChiDinhEkipVaDichVuGiuong(yeuCauTiepNhan: any) {
    this.dialog.open(TiepNhanNoiTruChiDinhPopupComponent, {
      disableClose: false,
      width: '1300px',
      data: {
        KhoaId: this.currentKhoaPhongChuyenVe.KeyId,
        TenKhoa: this.currentKhoaPhongChuyenVe.DisplayName,

        // KhoaId: yeuCauTiepNhan.ResultKhoaNhapVienId,
        // TenKhoa: yeuCauTiepNhan.ResultTenKhoaNhapVien,

        YeuCauTiepNhanId: yeuCauTiepNhan.ResultYeuCauTiepNhanId,
        ThoiDiemNhapVien: yeuCauTiepNhan.NgayThangNamSinh,
        KhongCanChiDinhGiuong: yeuCauTiepNhan.ResultKhongCanChiDinhGiuong,
        BenhNhanId: yeuCauTiepNhan.ResultBenhNhanId
      }
    }).afterClosed().subscribe(result => {
      this.close(true);
    });
  }

  close(result = null) {
    this.dialogRef.close(result);
  }
}
