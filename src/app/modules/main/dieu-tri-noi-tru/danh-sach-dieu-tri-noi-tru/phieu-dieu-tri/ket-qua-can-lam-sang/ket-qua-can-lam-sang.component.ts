import { Component, OnInit, ViewChild, TemplateRef, Input, ChangeDetectorRef, ViewRef, SimpleChanges } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAttachFile from '@iconify/icons-ic/attach-file';
import icVisibility from '@iconify/icons-ic/visibility';
import { MatDialog } from '@angular/material';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/core/services/api.service';
import { saveFile } from 'src/app/core/utilities/file-download.helper';
import { RequestOptions, ResponseContentType, Http } from '@angular/http';
import download from '@iconify/icons-ic/twotone-cloud-download';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { XemKetQuaCdhaTdcnPopupComponent } from 'src/app/modules/main/can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from 'src/app/modules/main/xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';
import { InPhieuKetQuaLayMau } from 'src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model';
import { DanhSachGoiXetNghiemLai, GoiLaiYeuCauXetNghiem, LichSuYeuCauChayLai, PhieuInXetNghiemVo, ThongTinXetNghiemChiTiet } from 'src/app/modules/main/kham-benh/kham-benh.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import { PhieuInXetNghiemComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/phieu-in-xet-nghiem-popup/phieu-in-xet-nghiem-popup.component';
import { YeuCauXetNghiemLaiComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/yeu-cau-xet-nghiem-lai-popup/yeu-cau-xet-nghiem-lai-popup.component';
import { LayMauXetNghiemKetQuaPopupComponent } from '../lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import { FormControl } from '@angular/forms';
import { InPhieuXetNghiem, ListKetQuaXetNghiem } from '../../../dieu-tri-noi-tru.model';
import icRedEye from '@iconify/icons-ic/twotone-remove-red-eye';
import { LayMauXetNghiemKetQuaMotFilePopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lay-mau-xet-nghiem-ket-qua-mot-file-popup/lay-mau-xet-nghiem-ket-qua-mot-file-popup.component';
import { LichSuKhamBenhPopupDetailComponent } from 'src/app/modules/main/kham-benh/kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-popup-detail/lich-su-kham-benh-popup-detail.component';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-ket-qua-can-lam-sang',
  templateUrl: './ket-qua-can-lam-sang.component.html',
  styleUrls: ['./ket-qua-can-lam-sang.component.scss']
})
export class KetQuaCanLamSanComponent implements OnInit {
  @Input() YeuCauTiepNhanId: number;
  @Input() phieuDieuTriHienTaiId: any;

  dataPopup: any;
  icAttachFile = icAttachFile;
  icVisibility = icVisibility;
  icSearch = icSearch;
  icRedEye = icRedEye;
  searchCtrl = new FormControl;


  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  //documentType: DocumentType;
  gridColumns: any[] = [];
  gridXetNghiemColumns: any[] = [];

  dataSourceXetNghiem: any = { data: [], total: 0 }

  gridChildColumns: any[] = [];
  danhSachGoiXetNghiemLai: DanhSachGoiXetNghiemLai[] = [];
  thongTinXetNghiemChiTiet: ThongTinXetNghiemChiTiet[] = [];
  validationErrors: any = null;
  phieuInXetNghiemVo = new PhieuInXetNghiemVo;
  lichSuYeuCauChayLais: LichSuYeuCauChayLai[] = [];

  srcDatahtml: string[] = [];
  popupLoadingData: any;
  arrFilePdf: Array<any> = [];
  arrFileUrl: Array<any> = [];

  urlGetDataGrid: string = "DieuTriNoiTru/GetDataForGridKetQuaCLS";
  urlGetTotalPageGrid: string = "DieuTriNoiTru/GetTotalPageForGridKetQuaCLS";

  download = download;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('xemKetQuaActionTemplate', { static: true }) xemKetQuaActionTemplate: TemplateRef<any>;

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('gridCLS', { read: GridComponent, static: false }) gridCLS: GridComponent;
  @ViewChild('gridCDHAVaTDCNCLS', { read: GridComponent, static: false }) gridCDHAVaTDCNCLS: GridComponent;

  @ViewChild('tenTemplate', { static: true }) tenTemplate: TemplateRef<any>;
  @ViewChild('kqCuTemplate', { static: true }) kqCuTemplate: TemplateRef<any>;
  @ViewChild('kqTuMayTemplate', { static: true }) kqTuMayTemplate: TemplateRef<any>;
  @ViewChild('kqNhapTayTemplate', { static: true }) kqNhapTayTemplate: TemplateRef<any>;
  @ViewChild('kqDuyetTemplate', { static: true }) kqDuyetTemplate: TemplateRef<any>;
  @ViewChild('damKQTemplate', { static: true }) damKQTemplate: TemplateRef<any>;
  @ViewChild('chiSoBinhThuongTemplate', { static: true }) chiSoBinhThuongTemplate: TemplateRef<any>;
  @ViewChild('donViTinhTemplate', { static: true }) donViTinhTemplate: TemplateRef<any>;
  @ViewChild('gioTiepNhanTemplate', { static: true }) gioTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('gioNhanMauTemplate', { static: true }) gioNhanMauTemplate: TemplateRef<any>;
  @ViewChild('mayXNTemplate', { static: true }) mayXNTemplate: TemplateRef<any>;
  @ViewChild('nguoiDuyetTemplate', { static: true }) nguoiDuyetTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild('gridDuyetYeuCauChayLaiXN', { static: false }) gridDuyetYeuCauChayLaiXN: GridComponent;

  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomTemplate', { static: true }) nhomTemplate: TemplateRef<any>;
  @ViewChild('kqMoiTemplate', { static: true }) kqMoiTemplate: TemplateRef<any>;

  searchString: any;
  additionString: any;
  dataChildDisplay: ListKetQuaXetNghiem[] = new Array<ListKetQuaXetNghiem>();
  dataChildTamDisplay: ListKetQuaXetNghiem[] = new Array<ListKetQuaXetNghiem>();

  gridNhomXetNghiemColumns: any[] = [];
  constructor(private ref: ChangeDetectorRef, private notificationService: NotificationService, private authService: AuthService, private dialog: MatDialog, private apiService: ApiService, private http: Http) { }

  @Input() documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  public trangThaiXetNghiemLaiDaGoi: boolean;

  sort: SortDescriptor[] = [{ field: "Id", dir: "asc" }];
  groups: GroupDescriptor[] = [{ field: 'LoaiKetQuaCLS' }];
  groupXNs: GroupDescriptor[] = [{ field: 'Nhom' }];
  checkAll: boolean = null;

  //BVHD-3575
  gridLichSuKhamColumns: any[] = [];
  urlGetDataGridLichSuKham: string = "DieuTriNoiTru/GetDataForGridLichSuKham";
  urlGetTotalPageGridLichSuKham: string = "DieuTriNoiTru/GetTotalPageForGridLichSuKham";
  @ViewChild('gridKhamBenh', { read: GridComponent, static: false }) gridKhamBenh: GridComponent;
  @ViewChild('tenDichVuKhamTemplate', { static: true }) tenDichVuKhamTemplate: TemplateRef<any>;

  ngOnInit() {
    this.additionString = this.YeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;
    //=============================================================Chuẩn đoán hình ảnh và thăm dò chức năng============================
    this.gridColumns = [
      { Field: "LoaiKetQuaCLS", Title: "", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "NoiDung", Title: "Nội dung", MinWidth: 250, Sortable: true },
      { Field: "NguoiThucHien", Title: "Người Thực hiện", Width: 120, Sortable: true },
      { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 120, Sortable: true },
      { Field: "BacSiKetLuan", Title: "Người kết luận", Width: 120, Sortable: true },
      { Field: "NgayKetLuan", Title: "Ngày kết luận", Width: 120, Sortable: true },
      { Field: "ChuanDoan", Title: "Ghi chú", Width: 120, Sortable: true },
      { Field: "XemKetQua", Title: "Xem KQ", Width: 100, Template: this.xemKetQuaActionTemplate },
      // { Field: "", Title: "", Width: 150, Template: this.trangThaiTemplate }
    ];

    //=============================================================Chuẩn đoán hình ảnh và thăm dò chức năng============================    
    this.gridXetNghiemColumns = [
      { Field: "Nhom", Title: "", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
      // { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },//, Hidden: this.type == 4 
      { Field: "Ten", Title: "Tên", Width: 150, Sortable: false, Template: this.tenTemplate, ShowTooltip: true },
      { Field: "KetQuaCu", Title: "KQ Cũ", Width: 80, Sortable: false, Template: this.kqCuTemplate },
      { Field: "KetQuaMoi", Title: "KQ Mới", Width: 80, Sortable: false, Template: this.kqMoiTemplate },
      { Field: "Csbt", Title: "CSBT", Width: 80, Sortable: false, Template: this.kqNhapTayTemplate },
      { Field: "DonVi", Title: "Đơn vị", Width: 80, Sortable: true },
      // { Field: "TenMayXetNghiem", Title: "Máy XN", Width: 90, Sortable: true },
      { Field: "NguoiDuyet", Title: "Người duyệt", Width: 100, Sortable: true },
      { Field: "ThoiDiemDuyetKetQuaDisplay", Title: "Ngày duyệt", Width: 100, Sortable: true },
    ];
    this.getThongTinXetNghiem();

    //========================================================Lịch sử khám============================    
    this.gridLichSuKhamColumns = [
      { Field: "TenDichVuKham", Title: "Tên dịch vụ khám", Width: 150, Sortable: false, Template: this.tenDichVuKhamTemplate },
      //{ Field: "ThoiDiemDangKyDisplay", Title: "Ngày khám", Width: 150, Sortable: false },
      { Field: "BaSiKham", Title: "Bác sĩ khám", Width: 150, Sortable: false },
      { Field: "BacSiKetLuan", Title: "Bác sĩ kết luận", Width: 150, Sortable: false },
      { Field: "Phong", Title: "Phòng khám", Width: 150, Sortable: false },
      { Field: "LyDoKham", Title: "Lý do khám", Width: 150, Sortable: false },
      { Field: "TrieuChungLamSang", Title: "Triệu chứng LS", Width: 200, Sortable: false },
      { Field: "ChuanDoanICD", Title: "Chẩn đoán ICD", Width: 250, Sortable: false },
      { Field: "CachGiaiQuyet", Title: "Cách giải quyết", Width: 250, Sortable: false }
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['phieuDieuTriHienTaiId'] && changes['phieuDieuTriHienTaiId'].previousValue != null && changes['phieuDieuTriHienTaiId'].previousValue != changes['phieuDieuTriHienTaiId'].currentValue) {
      this.additionString = this.YeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;
      this.gridCDHAVaTDCNCLS._additionalSearchString = this.additionString;
      this.gridCDHAVaTDCNCLS.search();
      this.getThongTinXetNghiem();

      //BVHD-3575
      this.gridKhamBenh._additionalSearchString = this.additionString;
      this.gridKhamBenh.search();
    }
  }

  getThongTinXetNghiem() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.get(`DieuTriNoiTru/GetDataForGridXetNghiemKetQuaCLS?yeuCauTiepNhanId=` + this.YeuCauTiepNhanId + `&phieuDieuTriHienTaiId=` + this.phieuDieuTriHienTaiId).subscribe((response: any) => {
        if (response != undefined && response != null) {
          this.dataSourceXetNghiem.data = response.Data;
          this.dataSourceXetNghiem.total = response.Data.length;
          this.dataChildTamDisplay = response.Data;
          this.setDataSourceForGrid();
        }
      }, (err: ApiError) => {
        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) :
          this.validationErrors = err.ValidationErrors;
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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

  checkBoxChange(event: any, dataItem: any) { }
  checkBoxAllChange(event: any) { }

  OpenClickPopupXemKetQuaCLS(dataItem) {
    this.dialog.open(XemKetQuaCdhaTdcnPopupComponent, {
      disableClose: false,
      width: '1000px',
      data: dataItem.Id
    }).afterClosed().subscribe(result => {
    });
  }

  downloadFile(dataItem) {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang tải file...' }
    });

    dataItem.TenGuidList.forEach(element => {
      const params = new HttpParams({
        fromObject: {
          tenGuid: element.TenGuid,
          duongDan: dataItem.XemKetQua,
        },
      });
      this.apiService
        .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
        .subscribe((result) => {
          console.log(result);
          this.dataPopup = result;
          const options = new RequestOptions({ responseType: ResponseContentType.Blob });
          this.http.get(this.dataPopup, options).subscribe(res => {
            saveFile(res.blob(), element.TenFile);
            this.dialog.closeAll();
          }
          )
        });
    });
  }

  xemXetNghiemTheoNhom(value: any) {
    this.showPopupLoadingData();
    this.apiService.post<any>("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + this.YeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let inPhieuXetNghiem = new InPhieuXetNghiem();
          let dataNhom = this.dataSourceXetNghiem.data.filter(p => p.Nhom == value);

          inPhieuXetNghiem.HostingName = window.location.protocol + '//' + window.location.host;
          inPhieuXetNghiem.Header = true;
          inPhieuXetNghiem.YeuCauTiepNhanId = this.YeuCauTiepNhanId;
          inPhieuXetNghiem.YeuCauDichVuKyThuatId = dataNhom[0].YeuCauDichVuKyThuatId;
          inPhieuXetNghiem.NhomDichVuBenhVienId = dataNhom[0].NhomDichVuBenhVienId;
          inPhieuXetNghiem.phieuDieuTriHienTaiId = this.phieuDieuTriHienTaiId;

          let arrFileUrl: Array<any> = [];
          let arrFilePdf: Array<any> = [];

          const promiseKetQuaXetNghiem = this.apiService.postExportPdf<any>('XetNghiem/LayPhieuXNTheoYeuCauKyThuatVaNhomAsync', inPhieuXetNghiem).toPromise();
          promiseKetQuaXetNghiem.then((file) => {
            let newBlob = new Blob([file], { type: "application/pdf" });
            let datalocalURL = window.URL.createObjectURL(newBlob);
            arrFileUrl.push(datalocalURL);
            arrFilePdf.push(file);
            if (arrFilePdf.length > 0) {
              this.dialog
                .open(LayMauXetNghiemKetQuaMotFilePopupComponent, {
                  disableClose: false,
                  width: "1000px",
                  data: { arrFileUrl, arrFilePdf },
                })
                .afterClosed()
                .subscribe(() => {
                });
            }
            else {
              this.notificationService.showError("Chưa có thông tin dịch vụ.");
            };
            // this.dialog.open(LayMauXetNghiemKetQuaPopupComponent, {
            //   disableClose: false,
            //   width: '1000px',
            //   data: arrHtml
            // }).afterClosed().subscribe(result => {
            // });
            this.closePopupLoadingData();
          }).catch((error) => {
            if (error.Message !== 'Validation Failed') {
              this.notificationService.showError(error.Message);
            }
            this.closePopupLoadingData();
          });
        };
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }

  xemKetQua(dataItem) {
    // if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
    this.dialog.open(XemKetQuaCdhaTdcnPopupComponent, {
      disableClose: false,
      width: '1000px',
      data: dataItem.Id
    }).afterClosed().subscribe(result => {
    });
  }

  //================================= Yêu cầu chạy lại xét nghiệm =======================================
  OpenClickPopupXemKetQuaXNCLS(dataItem) {
    let phienXetNghiemId = dataItem.PhienXetNghiemId;
    let nhomDichVuBenhVienId = dataItem.NhomDichVuBenhVienId;
    this.dialog.open(PhieuInXetNghiemComponent, {
      disableClose: false,
      width: '1000px',
      data: { phienXetNghiemId, nhomDichVuBenhVienId }
    }).afterClosed().subscribe(res => {
      if (res == "Yes") {

      }
    });
  }

  yeuCauChayLaiXN() {
    let self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    let goiLaiYeuCauXetNghiem = new GoiLaiYeuCauXetNghiem();
    goiLaiYeuCauXetNghiem.DanhSachGoiXetNghiemLais = self.danhSachGoiXetNghiemLai;
    goiLaiYeuCauXetNghiem.ThongTinXetNghiemChiTiets = self.thongTinXetNghiemChiTiet;
    self.dialog.open(YeuCauXetNghiemLaiComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn yêu cầu chạy lại xét nghiệm này không ?",
        danhSachGoiXetNghiemLai: goiLaiYeuCauXetNghiem
      },
    }).afterClosed().subscribe((res) => {
      if (res !== undefined && res !== null && res !== "") {
        res.DanhSachGoiXetNghiemLais = res.DanhSachGoiXetNghiemLais.filter(c => c.GoiLai == true);
        self.apiService.post<any>("KhamBenh/GoiYeuCauChayLaiXetNghiem", res)
          .subscribe(
            (resultData) => {
              if (resultData) {
                self.notificationService.showSuccess("Yêu cầu chạy lại xét nghiệm thành công.");
              } else {
                self.notificationService.showError("Yêu cầu chạy lại xét nghiệm không thành công.");
              }
              self.gridCLS.search();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            }
          );
      }
    });
  }

  huyCauChayLaiXN(phienXetNghiem: any) {
    let self = this
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn hủy yêu cầu chạy lại xét nghiệm này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (res !== undefined && res !== null) {
          self.apiService.post<any>("KhamBenh/HuyYeuCauChayLaiXetNghiem/" + phienXetNghiem)
            .subscribe(
              (resultData) => {
                if (resultData) {
                  self.notificationService.showSuccess("Yêu cầu hủy chạy lại xét nghiệm thành công.");
                } else {
                  self.notificationService.showError("Yêu cầu hủy chạy lại xét nghiệmkhông thành công.");
                }
                self.gridCLS.search();
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
              }
            );
        }
      }
    });
  }

  downloadXNCLS(dataItem) {
    this.phieuInXetNghiemVo.PhienXetNghiemId = dataItem.PhienXetNghiemId;
    this.phieuInXetNghiemVo.NhomDichVuBenhVienId = dataItem.NhomDichVuBenhVienId;
    if (window.location.protocol == "http:") {
      this.phieuInXetNghiemVo.HostingName = "http://" + window.location.host;
    } else {
      this.phieuInXetNghiemVo.HostingName = "http://" + window.location.host;
    }
    this.apiService.post<Array<string>>('KhamBenh/ExportPdfKetQuaXetNghiem', this.phieuInXetNghiemVo).subscribe(
      arrHtml => {
        this.dialog.open(LayMauXetNghiemKetQuaPopupComponent, {
          disableClose: false,
          width: '1000px',
          data: arrHtml
        }).afterClosed().subscribe(result => {
        });
        this.closePopupLoadingData();
      },
      (err: ApiError) => {
        if (err.Message !== 'Validation Failed') {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  lichSuYeuCauChayLai(YeuCauTiepNhanId: any) {
    this.apiService.get<any>("KhamBenh/LichSuYeuCauChayLai/" + YeuCauTiepNhanId)
      .subscribe((resData) => {
        if (resData != null) {
          this.lichSuYeuCauChayLais = resData;
        }
      });
  }

  searchChanges($event) {
    this.searchString = $event;
    if ($event == "" || $event == undefined) {
      this.setDataSourceForGrid();
    }
  }

  onKeySearchChanges($event) {
    if ($event.keyCode == 13) {
      this.setDataSourceForGrid();
    }
  }

  setDataSourceForGrid() {
    if (this.searchString == undefined || this.searchString == null || this.searchString == "") {
      this.dataChildDisplay = [...this.dataChildTamDisplay];
    }
    else {
      let search = CommonService.removeVietnamese(this.searchString).toLowerCase().trim().replace(/đ/g, 'd');
      this.dataChildDisplay = [...this.dataChildTamDisplay].filter(o =>
        (o.Ten != null && CommonService.removeVietnamese(o.Ten).toLocaleLowerCase().trim().indexOf(search) != -1)
        || (o.DonVi != null && CommonService.removeVietnamese(o.DonVi).toLocaleLowerCase().trim().indexOf(search) != -1)
        || (o.NguoiDuyet != null && CommonService.removeVietnamese(o.NguoiDuyet).toLocaleLowerCase().trim().indexOf(search) != -1)
        || (o.NgayDuyetDisplay != null && CommonService.removeVietnamese(o.NgayDuyetDisplay).toLocaleLowerCase().trim().indexOf(search) != -1)
      );
    }
    this.dataSourceXetNghiem = [];
    this.dataSourceXetNghiem = { data: this.dataChildDisplay, total: this.dataChildDisplay.length };

    if (!(this.ref as ViewRef).destroyed) {
      this.ref.detectChanges();
    }

    if (this.gridDuyetYeuCauChayLaiXN != undefined) {
      this.gridDuyetYeuCauChayLaiXN._gridDataSource = { ...this.dataSourceXetNghiem }
      this.gridDuyetYeuCauChayLaiXN.setDataSource();
    }
  }

  //BVHD-3575
  xemLichSuKham(dataItem) {
    let dialogRef = this.dialog.open(LichSuKhamBenhPopupDetailComponent, {
      disableClose: false,
      width: '1500px',
      height: 'auto',
      data: dataItem,
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  //============================================================================
}
