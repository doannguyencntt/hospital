import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { MatDialog } from '@angular/material';
import { HoatDongKhamDoanQueryInfoQueryInfo } from '../../bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan.model';
import { BaoCaoHoatDongKhamDoanChuyenKhoa, BaoCaoKSKChuyenKhoa } from '../bao-cao-ksk-chuyen-khoa.model';
@Component({
  selector: 'app-bao-cao-ksk-chuyen-khoa-list',
  templateUrl: './bao-cao-ksk-chuyen-khoa-list.component.html',
  styleUrls: ['./bao-cao-ksk-chuyen-khoa-list.component.scss']
})
export class BaoCaoKskChuyenKhoaListComponent implements OnInit {
  documentType: DocumentType = DocumentType.BaoCaoKSKChuyenKhoa;
  hoatDongKhamDoanSearch: HoatDongKhamDoanQueryInfoQueryInfo = new HoatDongKhamDoanQueryInfoQueryInfo();
  gridColumns: any[] = [];

  isSelectDuocPham: boolean = false;
  validationErrors: any = [];

  disabled: boolean = false;
  public totalSoLuong(field: any) {
    switch (field) {
      case 'TongSo':
        return this.data.reduce((sum: any, item: { TongSo: any; }) => sum + item.TongSo, 0);

    }
  };

  data: BaoCaoKSKChuyenKhoa[] = [];
  dataHeader: BaoCaoHoatDongKhamDoanChuyenKhoa[] = [];
  dataSumSoLuongHeader: BaoCaoHoatDongKhamDoanChuyenKhoa[] = [];


  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.GetDatasource();
  }

  GetDatasource() {
    let dateNow = new Date();
    this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    if (this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat != null) {
      this.hoatDongKhamDoanSearch.FromDateString = CommonService.formatDateTime(this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
    } else {
      this.hoatDongKhamDoanSearch.FromDateString = null;
    }

    if (this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat != null) {
      this.hoatDongKhamDoanSearch.ToDateString = CommonService.formatDateTime(
        this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.hoatDongKhamDoanSearch.ToDateString = null;
    }

    this.apiService.post<any>
      ('BaoCaoKSKChuyenKhoa/GetDataForGridAsyncKSKChuyenKhoa',
        this.hoatDongKhamDoanSearch).subscribe(resultData => {
          if (resultData != null && resultData != []) {
            this.data = resultData;
            if (this.data.length > 0) {
              this.disabled = true;
            } else {
              this.disabled = false;
            }
            this.data.forEach(item => {
              item.NoiThucHienCuaNguoiBenhs.forEach(phongKham => {
                if (this.dataHeader.every(z => z.TenChuyenKhoaKhamSucKhoe != phongKham.TenChuyenKhoaKhamSucKhoe)) {
                  this.dataHeader.push(phongKham);
                }
                this.dataSumSoLuongHeader.push(phongKham);
              });
            });
          }
        });
  }

  timKiem() {
    this.data = [];
    this.dataHeader = [];
    this.dataSumSoLuongHeader = [];
    if (this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat != null) {
      this.hoatDongKhamDoanSearch.FromDateString = CommonService.formatDateTime(
        this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.hoatDongKhamDoanSearch.FromDateString = null;
    }

    if (this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat != null) {
      this.hoatDongKhamDoanSearch.ToDateString = CommonService.formatDateTime(
        this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.hoatDongKhamDoanSearch.ToDateString = null;
    }

    this.apiService.post<any>
      ('BaoCaoKSKChuyenKhoa/GetDataForGridAsyncKSKChuyenKhoa',
        this.hoatDongKhamDoanSearch).subscribe(resultData => {
          if (resultData != null && resultData != []) {
            this.data = resultData;
            if (this.data.length > 0) {
              this.disabled = true;
            } else {
              this.disabled = false;
            }
            this.data.forEach(item => {
              item.NoiThucHienCuaNguoiBenhs.forEach(phongKham => {
                if (this.dataHeader.every(z => z.TenChuyenKhoaKhamSucKhoe != phongKham.TenChuyenKhoaKhamSucKhoe)) {
                  this.dataHeader.push(phongKham);
                }
                this.dataSumSoLuongHeader.push(phongKham);
              });
            });
          }
          else {
            this.data = [];
            this.disabled = false;
          }
        });
  }

  getSum(chuyenKhoaKhamSucKhoe: number): number {
    let sum = 0;
    for (let i = 0; i < this.dataSumSoLuongHeader.length; i++) {
      if (this.dataSumSoLuongHeader[i].ChuyenKhoaKhamSucKhoe == chuyenKhoaKhamSucKhoe) {
        sum += this.dataSumSoLuongHeader[i].SoLan;
      }
    }
    return sum;
  }


  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }
  xuatExcel() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.apiService.postExportExcel<any>("BaoCaoKSKChuyenKhoa/ExportBaoCaoKSKChuyenKhoa", this.hoatDongKhamDoanSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHoatDongKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          ,
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.dialog.closeAll();
          }
        );
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

}
