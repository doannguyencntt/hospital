import { Component, OnInit, ViewChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import icDone from '@iconify/icons-ic/done';
import icInfo from '@iconify/icons-ic/info';
import { ActivatedRoute, Router } from '@angular/router';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor } from '@progress/kendo-data-query';
import icPrint from "@iconify/icons-ic/twotone-print";
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { InBangThuTienPopUpComponent } from '../in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import icCheck from "@iconify/icons-ic/twotone-check";
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { InDonThuocPopUpComponent } from '../in-don-thuoc-pop-up/in-don-thuoc-pop-up.component';
import { NguoiDungKhongMuaDonThuoc } from '../quay-thuoc.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
@Component({
  selector: 'app-quay-thuoc-list',
  templateUrl: './quay-thuoc-list.component.html',
  styleUrls: ['./quay-thuoc-list.component.scss']
})
export class QuayThuocListComponent implements OnInit {
  documentType: DocumentType;
  icDone = icDone;
  icInfo = icInfo;
  icPrint = icPrint
  icCheck = icCheck;
  gridChildColumnsChoThanhToan: any[] = [];
  gridChildColumnsDaThanhToan: any[] = [];
  gridChildColumnsAll: any[] = [];
  gridChild: any[] = [];
  DieuKienLoadVaoChiTiet: boolean = false;
  typeDanhSachThanhToan: number = 0;
  @Input() xacNhanIn: boolean = false;
  data: number = 0;
  tongGiaTriDonThuoc: number;
  @Input() id: number = null;
  @Input() url1: string = null;
  @Input() url2: string = null;
  @Input() queryStringSearchUuTien: string = null;
  @Output() OnHandleDataQuayThuocSearchList = new EventEmitter<any>();
  @Output() OnHandleDieuKienLoadXemChiTiet = new EventEmitter<any>();
  @ViewChild('gridD', { static: true }) gridD: GridComponent;
  urlGetDataGridChild: string = "QuayThuoc/GetDataForGridTimBenhNhanAsync";
  urlGetTotalPageGridChild: string = "QuayThuoc/GetTotalPageForGridTimBenhNhanAsync";
  urlGetDataChild: string = "QuayThuoc/GetDanhSachThuocBenhNhanChild";
  validationErrors: any[] = [];

  constructor(private router: Router, private apiService: ApiService, private dialog: MatDialog, private route: ActivatedRoute,
    private authService: AuthService, private notificationService: NotificationService,) { }
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('TongGiaTriDonThuocTemplate', { static: true }) TongGiaTriDonThuocTemplate: TemplateRef<any>;
  @ViewChild('SoTienChoThanhToanTemplate', { static: true }) SoTienChoThanhToanTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('nguoiDungKhongMuaThuocTemplate', { static: true }) nguoiDungKhongMuaThuocTemplate: TemplateRef<any>;
  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild('templatePrint', { static: true }) templatePrint: TemplateRef<any>;
  @ViewChild('TongCongDonThuocFooter', { static: true }) TongCongDonThuocFooter: TemplateRef<any>;
  @ViewChild('TonggiaTriThuocFooter', { static: true }) TonggiaTriThuocFooter: TemplateRef<any>;
  //
  @ViewChild('gridDonThuocTrongNgay', { static: false }) gridDonThuocTrongNgay: GridComponent;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  //
  @ViewChild('SoTienThuoctemplate', { static: true }) SoTienThuoctemplate: TemplateRef<any>;
  @ViewChild('TinhTrangThuoctemplate', { static: true }) TinhTrangThuoctemplate: TemplateRef<any>;
  groups: GroupDescriptor[] = [{ field: 'LoaiDonThuoc' }];
  ngOnInit() {
    this.gridChildColumnsChoThanhToan = [
      { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
      { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 120, Sortable: true },
      { Field: "SoDienThoai", Title: "Điện thoại", Width: 120, Sortable: true },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 120, Sortable: true },
      { Field: "TongGiaTriDonThuoc", Title: "Tổng giá trị đơn thuốc", Width: 200, Sortable: true, Template: this.TongGiaTriDonThuocTemplate },
      { Field: "TrangThaiHienThiString", Title: "Trạng thái", Width: 120, Sortable: false, Template: this.trangThaiTemplate },
      { Field: "", Title: "", Width: 200, Sortable: false, Template: this.nguoiDungKhongMuaThuocTemplate },
    ];
    this.gridChildColumnsDaThanhToan = [
      { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
      { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 120, Sortable: true },
      { Field: "SoDienThoai", Title: "Điện thoại", Width: 120, Sortable: true },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 120, Sortable: true },
      { Field: "TongGiaTriDonThuoc", Title: "Tổng giá trị đơn thuốc", Width: 200, Sortable: true, Template: this.TongGiaTriDonThuocTemplate },
      { Field: "TrangThaiHienThiString", Title: "Trạng thái", Width: 120, Sortable: false, Template: this.trangThaiTemplate },
    ];
    this.gridChildColumnsAll = [
      { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
      { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 120, Sortable: true },
      { Field: "SoDienThoai", Title: "Điện thoại", Width: 120, Sortable: true },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 120, Sortable: true },
      { Field: "SoTienChoThanhToan", Title: "Số tiền chờ thanh toán", Width: 220, Sortable: true, Template: this.SoTienChoThanhToanTemplate },
      { Field: "TongGiaTriDonThuoc", Title: "Tổng giá trị đơn thuốc", Width: 200, Sortable: true, Template: this.TongGiaTriDonThuocTemplate },
      { Field: "TrangThaiHienThiString", Title: "Trạng thái", Width: 120, Sortable: false, Template: this.trangThaiTemplate },

    ];
    this.gridChild = [
      { Field: "STT", Title: "#", Width: 100, Sortable: true },
      { Field: "LoaiDonThuoc", Title: "", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "MaDon", Title: "Mã Đơn", Width: 100, Sortable: true },
      { Field: "NgayKeDon", Title: "Ngày kê đơn", Width: 200, Sortable: true },
      { Field: "DVKham", Title: "Dịch vụ khám", minWidth: 200, Sortable: true },
      { Field: "BSKham", Title: "Bác sĩ khám", Width: 200, Sortable: true },//,TemplateFooter: this.TonggiaTriThuocFooter},
      { Field: "SoTienDisPlay", Title: "Số tiền ", Width: 80, Sortable: true, TemplateFooter: this.TongCongDonThuocFooter, Template: this.SoTienThuoctemplate }, //TemplateFooter: this.TongCongDonThuocFooter
      { Field: "TinhTrang", Title: "Tình trạng", Width: 120, Sortable: true, Template: this.TinhTrangThuoctemplate },
      { Field: "", Title: "", Width: 120, Sortable: true, Template: this.templatePrint },
    ];

  }
  Xem(event: any) {

    this.router.navigate(['nha-thuoc/mua-thuoc/' + event.YeuCauTiepNhanId + '/' + event.BenhNhanId + '/' + event.TrangThai + '/' + this.typeDanhSachThanhToan]);
  }
  ngOnChanges(event: any) {
    if (event.queryStringSearchUuTien != null || event.queryStringSearchUuTien != undefined) {
      if (event.queryStringSearchUuTien.currentValue != null || event.queryStringSearchUuTien.currentValue != undefined) {
        if (event.queryStringSearchUuTien.currentValue != null) {
          this.gridD._additionalSearchString = event.queryStringSearchUuTien.currentValue;
          let kiemTraDieuKienLoad = JSON.parse(event.queryStringSearchUuTien.currentValue);
          this.typeDanhSachThanhToan = kiemTraDieuKienLoad.KiemTraThanhToan
          if (kiemTraDieuKienLoad.DieuKienLoadVaoChiTiet != null) {
            this.DieuKienLoadVaoChiTiet = kiemTraDieuKienLoad.DieuKienLoadVaoChiTiet;
          }
          this.gridD.search();
        }
      }
    }
  }
  sortConfig = [
    {
      field: "TrangThai",
      dir: "asc",
    },
    {
      field: "Id",
      dir: "asc",
    },
  ];

  PrinAllDonThuocBenhNhan(donThuocThanhToanId: number, LoaiDonThuoc: any, YeuCauKhambenhId: any) {
    var data = {
      LoaiDonThuoc: LoaiDonThuoc,
      YeuCauKhambenhId: YeuCauKhambenhId,
      Hosting: null,
      TiepNhanId: donThuocThanhToanId
    }
    if (window.location.protocol == "http:") {
      data.Hosting = "http://" + window.location.host;
    } else {
      data.Hosting = "https://" + window.location.host;
    }

    this.apiService.post<any>("QuayThuoc/InThuocBenhNhan", data).subscribe(
      resultData => {
        let dialogRef = this.dialog.open(InDonThuocPopUpComponent, {
          width: '1000px',
          data: { Model: resultData, InDonThuocDanhSachList: false, InBangKe: true, InPhieuThu: false }
        }).afterClosed().subscribe(() => { });
      }, () => { });
  }
  onDataBound(data: any) {
    this.OnHandleDieuKienLoadXemChiTiet.emit(true);
    this.OnHandleDataQuayThuocSearchList.emit(data);
  }

  nguoiBenhKhongMuaThuoc(dataItem: any) {   
    var self = this;
    const yeuCauTiepNhanId: number = dataItem.Id;
    var nguoiDungKhongMuaDonThuoc = new NguoiDungKhongMuaDonThuoc();
    nguoiDungKhongMuaDonThuoc.YeuCauTiepNhanId = yeuCauTiepNhanId;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Người bệnh không muốn mua thuốc này?" }
    }).afterClosed().subscribe(result => {
      if (result == "Yes") {
        self.apiService.post("QuayThuoc/NguoiBenhKhongMuaDonThuoc", nguoiDungKhongMuaDonThuoc).subscribe(
          () => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
            this.gridD.search();
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
      }
    });
  }
}

