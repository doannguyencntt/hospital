import { BaoCaoDichVuHopDongKhamDoanTheoHopDong } from '../bao-cao-dich-vu-hop-dong-kham-doan.model';
import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  SimpleChanges,
} from "@angular/core";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { SortDescriptor } from "@progress/kendo-data-query";
import { ApiService } from "src/app/core/services/api.service";
import { CommonService } from "src/app/core/utilities/common.helper";
import { AuthService } from "src/app/core/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationService } from "src/app/core/services/notification.service";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { MatDialog } from "@angular/material";
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';

@Component({
  selector: 'app-bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list',
  templateUrl: './bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.html',
  styleUrls: ['./bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.scss']
})
export class BaoCaoDichVuHopDongKhamDoanHopDongListComponent implements OnInit {
  documentType: DocumentType = DocumentType.BaoCaoDichVuTrongGoiKhamDoan;
  addtionStringDefault: string = null;
  gridColumnsHopDongChuaKham: any[] = [];
  gridColumnsHopDongDaKham: any[] = [];
  gridColumnsNhanVienChuaKham: any[] = [];
  gridColumnsNhanVienDangKham: any[] = [];
  gridColumnsNhanVienDaKham: any[] = [];
  urlGetDataNhanVien = "";
  urlGetTotalPageNhanVien = "";

  dataToSumSoLuong: any[] = [];
  baseRoute: string = "/bao-cao/bao-cao-benh-nhan-kham-suc-khoe-doan";
  baoCaoDichVuHopDongKhamDoanTheoHopDong: BaoCaoDichVuHopDongKhamDoanTheoHopDong = new BaoCaoDichVuHopDongKhamDoanTheoHopDong();
  sort: SortDescriptor[] = [
    {
      field: "NgayHopDong",
      dir: "desc",
    },
  ];
  @ViewChild("tenCongTyKhamSucKhoeTemplate", { static: true }) tenCongTyKhamSucKhoeTemplate: TemplateRef<any>;
  @ViewChild("tenHopDongKhamSucKhoeTemplate", { static: true }) tenHopDongKhamSucKhoeTemplate: TemplateRef<any>;
  @ViewChild('tongFooterTemplate', { static: true }) tongFooterTemplate: TemplateRef<any>;
  @ViewChild('tongSoFooterTemplate', { static: true }) tongSoFooterTemplate: TemplateRef<any>;
  @ViewChild('tongSoThucTeFooterTemplate', { static: true }) tongSoThucTeFooterTemplate: TemplateRef<any>;
  @ViewChild('tongSoThucTeChuaKhamFooterTemplate', { static: true }) tongSoThucTeChuaKhamFooterTemplate: TemplateRef<any>;



  // @ViewChild(GridComponent, { static: true }) gridChildNhanVien: GridComponent;
  // @ViewChild(GridComponent, { static: true }) gridChildHopDong: GridComponent;

  @ViewChild('gridChildNhanVien', { read: GridComponent, static: false }) gridChildNhanVien: GridComponent;

  @ViewChild('gridChildHopDongChuaKham', { read: GridComponent, static: false }) gridChildHopDongChuaKham: GridComponent;
  @ViewChild('gridChildHopDongDaKham', { read: GridComponent, static: false }) gridChildHopDongDaKham: GridComponent;



  public totalSoLuong(field: any) {
    switch (field) {
      case 'SoLuongNhanVienTheoHopDong':
        return this.dataToSumSoLuong.reduce((sum: any, item: { SoLuongNhanVienTheoHopDong: any; }) => sum + item.SoLuongNhanVienTheoHopDong, 0);
      case 'SoLuongNhanVienKhamThucTe':
        return this.dataToSumSoLuong.reduce((sum: any, item: { SoLuongNhanVienKhamThucTe: any; }) => sum + item.SoLuongNhanVienKhamThucTe, 0);
      case 'SoLuongNhanVienThucTe':
        return this.dataToSumSoLuong.reduce((sum: any, item: { SoLuongNhanVienThucTe: any; }) => sum + item.SoLuongNhanVienThucTe, 0);
    }
  };

  icFileExcel = icFileExcel;
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit() {
    let dateNow = new Date();
    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 != null) {
      this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate1 = CommonService.formatDateTime(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1, "dd/mm/yyyy");
    } else {
      this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate1 = null;
    }

    if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 != null) {
      this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate1 = CommonService.formatDateTime(
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate1 = null;
    }
    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat != null) {
      this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate = CommonService.formatDateTime(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
    } else {
      this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate = null;
    }

    if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat != null) {
      this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate = CommonService.formatDateTime(
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate = null;
    }
    if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1) {
      this.addtionStringDefault = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
    } else {
      this.addtionStringDefault = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
    }
    this.backWithSearch();
    this.gridColumnsHopDongChuaKham = [
      { Field: 'NgayHopDong', Title: 'Ngày hợp đồng', Width: 116, Sortable: true, Hidden: true },
      { Field: 'TenCongTyKhamSucKhoe', Title: 'Tên công ty', Width: 116, Sortable: true, TemplateFooter: this.tongFooterTemplate },
      { Field: 'TenHopDongKhamSucKhoe', Title: 'Số hợp đồng', Width: 120, Sortable: true, Template: this.tenHopDongKhamSucKhoeTemplate },
      { Field: 'SoLuongNhanVienTheoHopDong', Title: 'Số lượng theo hợp đồng', Width: 195, Sortable: false, TemplateFooter: this.tongSoFooterTemplate },
      { Field: 'SoLuongNhanVienThucTe', Title: 'số lượng thực tế', Width: 254, Sortable: false, TemplateFooter: this.tongSoThucTeFooterTemplate },
    ];

    this.gridColumnsHopDongDaKham = [
      { Field: 'NgayHopDong', Title: 'Ngày hợp đồng', Width: 116, Sortable: true, Hidden: true },
      { Field: 'TenCongTyKhamSucKhoe', Title: 'Tên công ty', Width: 116, Sortable: true, TemplateFooter: this.tongFooterTemplate },
      { Field: 'TenHopDongKhamSucKhoe', Title: 'Số hợp đồng', Width: 120, Sortable: true, Template: this.tenHopDongKhamSucKhoeTemplate },
      { Field: 'SoLuongNhanVienTheoHopDong', Title: 'Số lượng theo hợp đồng', Width: 195, Sortable: false, TemplateFooter: this.tongSoFooterTemplate },
      { Field: 'SoLuongNhanVienThucTe', Title: 'số lượng thực tế', Width: 254, Sortable: false, TemplateFooter: this.tongSoThucTeFooterTemplate },
    ];

    this.gridColumnsNhanVienChuaKham = [
      { Field: 'MaBN', Title: 'mã người bệnh', Width: 120, Sortable: true },
      { Field: 'MaTN', Title: 'mã tiếp nhận', Width: 120, Sortable: true },
      { Field: 'HoTen', Title: 'Họ tên', Width: 195, Sortable: false },
      { Field: 'NamSinh', Title: 'năm sinh', Width: 100, Sortable: false },
      { Field: 'GioiTinhDisplay', Title: 'giới tính', Width: 100, Sortable: false },
      { Field: 'DichVuChuaKham', Title: 'chuyên khoa không khám', Width: 254, Sortable: false, ShowTooltip: true },
      { Field: 'TenCongTyKhamSucKhoe', Title: 'tên công ty', Width: 254, Sortable: false },
    ];

    this.gridColumnsNhanVienDangKham = [
      { Field: 'MaBN', Title: 'mã người bệnh', Width: 120, Sortable: true },
      { Field: 'MaTN', Title: 'mã tiếp nhận', Width: 120, Sortable: true },
      { Field: 'HoTen', Title: 'Họ tên', Width: 195, Sortable: false },
      { Field: 'NamSinh', Title: 'năm sinh', Width: 100, Sortable: false },
      { Field: 'GioiTinhDisplay', Title: 'giới tính', Width: 100, Sortable: false },
      { Field: 'DichVuChuaKham', Title: 'chuyên khoa chưa khám', Width: 254, Sortable: false, ShowTooltip: true },
      { Field: 'TenCongTyKhamSucKhoe', Title: 'tên công ty', Width: 254, Sortable: false },
    ];

    this.gridColumnsNhanVienDaKham = [
      { Field: 'MaBN', Title: 'mã người bệnh', Width: 120, Sortable: true },
      { Field: 'MaTN', Title: 'mã tiếp nhận', Width: 120, Sortable: true },
      { Field: 'HoTen', Title: 'Họ tên', Width: 195, Sortable: false },
      { Field: 'NamSinh', Title: 'năm sinh', Width: 100, Sortable: false },
      { Field: 'GioiTinhDisplay', Title: 'giới tính', Width: 100, Sortable: false },
      { Field: 'DichVuDaKham', Title: 'chuyên khoa đã khám', Width: 254, Sortable: false, ShowTooltip: true },
      { Field: 'TenCongTyKhamSucKhoe', Title: 'tên công ty', Width: 254, Sortable: false },
    ];

  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringBaoCaoDVTrongGoi");
        if (additionalSearchString != null) {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong = JSON.parse(additionalSearchString);
          if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1) {
            if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 != null && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 != "") {
              this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 = new Date(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1);
            }
            else {
              this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 = null;
            }
            if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 != null && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 != "") {
              this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 = new Date(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1);
            }
            else {
              this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 = null;
            }
          }
          else {
            if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat != null && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat != "") {
              this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat = new Date(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat);
            }
            else {
              this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat = null;
            }
            if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat != null && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat != "") {
              this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat = new Date(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat);
            }
            else {
              this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat = null;
            }
          }


          this.addtionStringDefault = additionalSearchString;

          if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == null || this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1) {
            if (this.gridChildHopDongChuaKham != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham == true) {
              this.gridChildHopDongChuaKham.additionalSearchString = additionalSearchString;
            }
            if (this.gridChildHopDongDaKham != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham == true) {
              this.gridChildHopDongDaKham.additionalSearchString = additionalSearchString;
            }
          }
          hasLocalSearchString = true;

        }
      }
    } else {
      this.addtionStringDefault = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringBaoCaoDVTrongGoi");
    }
  }

  daKhamChange(event, text, loai) {
    if (loai == 1) {
      if (text == 'Co') {
        if (event == true) {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham = false;
        } else {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham = true;
        }
      } else {
        if (event == true) {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham = false;
        }
        else {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham = true;
        }
      }
    }
    else {
      if (text == 'ChuaKham') {
        if (event == true) {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien = false;
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien = false;
        } else {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = true;
        }
      } else if (text == 'DangKham') {
        if (event == true) {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = false;
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien = false;
        }
        else {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = true;
        }
      } else {
        if (event == true) {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = false;
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien = false;
        }
        else {
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = true;
        }
      }
    }

    this.addtionStringDefault = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
    LocalStorageHelper.setItem("additionalSearchStringBaoCaoDVTrongGoi", this.addtionStringDefault);
    // this.timKiem();
  }

  onDataBoundGridHopDong(data: any) {
    this.dataToSumSoLuong = data.Data;
  }

  timKiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == null || this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1) {
      if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 != null) {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate1 = CommonService.formatDateTime(
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1,
          "dd/mm/yyyy"
        );
      } else {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate1 = null;
      }

      if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 != null) {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate1 = CommonService.formatDateTime(
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1,
          "dd/mm/yyyy"
        );
      } else {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate1 = null;
      }
      if (this.gridChildHopDongChuaKham != undefined) {
        var queryString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
        this.gridChildHopDongChuaKham._additionalSearchString = queryString;
        this.gridChildHopDongChuaKham.search();
      }
      if (this.gridChildHopDongDaKham != undefined) {
        var queryString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
        this.gridChildHopDongDaKham._additionalSearchString = queryString;
        this.gridChildHopDongDaKham.search();
      }

    }
    else {
      if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat != null) {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate = CommonService.formatDateTime(
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat,
          "dd/mm/yyyy"
        );
      } else {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate = null;
      }

      if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat != null) {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate = CommonService.formatDateTime(
          this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat,
          "dd/mm/yyyy"
        );
      } else {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate = null;
      }
      if (this.gridChildNhanVien != undefined) {
        var queryString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
        this.gridChildNhanVien._additionalSearchString = queryString;
        this.gridChildNhanVien.search();
      }
    }
    LocalStorageHelper.setItem("additionalSearchStringBaoCaoDVTrongGoi", queryString);
  }

  xemChiTiet(id: number) {
    if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham == true) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
        let url = '/xem-chi-tiet';
        this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, F: 0 } });
      }
      else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    } else if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham == true) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
        let url = '/xem-chi-tiet';
        this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, F: 1 } });
      }
      else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }

  }

  xuatExcel() {

    if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == null || this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1) {
      if ((this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham == null || this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham == false)
        && (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham == null || this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham == false)
      ) {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham = true;
      }

    } else {
      this.gridChildNhanVien._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
      if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien == true) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
          this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
          });
          this.apiService.postExportExcel<string>("BaoCaoKhamDoanHopDong/ExportBaoCaoDichVuTrongGoiKhamDoanChuaKham", this.gridChildNhanVien._gridQueryInfo).subscribe(res => {
            let dateTimeNow = new Date();
            CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDichVuTrongGoiKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
            this.dialog.closeAll();
          }, err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          })
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
      else if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien == true) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
          this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
          });
          this.apiService.postExportExcel<string>("BaoCaoKhamDoanHopDong/ExportBaoCaoDichVuTrongGoiKhamDoanDaKham", this.gridChildNhanVien._gridQueryInfo).subscribe(res => {
            let dateTimeNow = new Date();
            CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDichVuTrongGoiKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
            this.dialog.closeAll();
          }, err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          })
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
      else if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien == true) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
          this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
          });
          this.apiService.postExportExcel<string>("BaoCaoKhamDoanHopDong/ExportBaoCaoDichVuTrongGoiKhamDoanDangKham", this.gridChildNhanVien._gridQueryInfo).subscribe(res => {
            let dateTimeNow = new Date();
            CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDichVuTrongGoiKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
            this.dialog.closeAll();
          }, err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          })
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    }
  }
}
