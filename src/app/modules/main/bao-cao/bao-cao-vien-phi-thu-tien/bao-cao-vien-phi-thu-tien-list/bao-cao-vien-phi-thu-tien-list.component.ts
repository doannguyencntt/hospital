import { ChangeDetectorRef, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SearchBaoCao, BaoCaoVienPhiThuTienVo, BaoCaoVienPhiThuTien } from '../bao-cao-vien-phi-thu-tien.model';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { GroupDescriptor, process, State } from '@progress/kendo-data-query';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BaoCaoVienPhiThuTienPopupComponent } from '../bao-cao-vien-phi-thu-tien-popup/bao-cao-vien-phi-thu-tien-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
declare var jQuery: any;
@Component({
  selector: 'app-bao-cao-vien-phi-thu-tien-list',
  templateUrl: './bao-cao-vien-phi-thu-tien-list.component.html',
  styleUrls: ['./bao-cao-vien-phi-thu-tien-list.component.scss']
})
export class BaoCaoVienPhiThuTienListComponent implements OnInit {
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridDataSource: any = {
    data: [],
    total: 0
  };
  search = {} as SearchBaoCao;
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  validationErrors: any;
  skip = 0;
  take: number;
  pageSize = 100;
  height: number;
  gridView: GridDataResult;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  ishowView: boolean = false;
  gridData: BaoCaoVienPhiThuTien[] = [];
  urlGetDataGridChild: string = "";
  urlGetPageDataGridChild: string = "";
  @ViewChild('baoCaoVienPhiThuTienGrid', { static: true }) baoCaoVienPhiThuTienGrid: any;
  @Input() heightToolbar: number = 140;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {

    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50 }, //0 
      { Field: "NgayString", Title: "Ngày", Width: 150 },//1
      { Field: "SoBLHD", Title: "Số BL/HD", Width: 100 },//2
      { Field: "MaYTe", Title: "Mã y tế", Width: 100 },//3
      { Field: "TenBenhNhan", Title: "Tên người bệnh", MinWidth: 200 },//4
      { Field: "SoBenhAn", Title: "Số bệnh án", Width: 100 },//5
      { Field: "TamUng", Title: "Tạm ứng", Width: 100 },//6
      { Field: "HoanUng", Title: "Hoàn Ứng", Width: 100 },//7
      { Field: "ThuTien", Title: "Thu tiền", Width: 100 },//8
      { Field: "Hoan", Title: "Hoàn", Width: 100 },//9
      { Field: "GoiDichVu", Title: "Gói dịch vụ", Width: 100 },//10
      { Field: "CongNo", Title: "Công nợ", Width: 100 },//11
      { Field: "Pos", Title: "Pos", Width: 100 },//12
      { Field: "ChuyenKhoan", Title: "Chuyển khoản", Width: 120 },//13
      { Field: "Tienmat", Title: "Tiền mặt", Width: 100 },//14
      { Field: "TienmatCapNhat", Title: "Tiền mặt", Width: 100 },//15
      { Field: "ChuyenKhoanCapNhat", Title: "Chuyển khoản", Width: 100 },//16
      { Field: "PosCapNhat", Title: "Pos", Width: 120 },//17
      { Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 100 },//18
    ];
    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
  }
  public totalThanhTienTienmatCapNhat(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'TienmatCapNhat':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.TienmatCapNhat;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
  public totalThanhTienChuyenKhoanCapNhat(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'ChuyenKhoanCapNhat':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.ChuyenKhoanCapNhat;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
  public totalThanhTienPosCapNhat(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'PosCapNhat':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.PosCapNhat;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
  public totalThanhTienTienmat(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'Tienmat':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.Tienmat;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
   public totalThanhTienChuyenKhoan(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'ChuyenKhoan':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.ChuyenKhoan;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
  public totalThanhTienPos(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'Pos':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.Pos;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
   public totalThanhT
  public totalThanhTienCongNo(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'CongNo':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.CongNo;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
   public totalThanhTienGoiDichVu(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'GoiDichVu':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.GoiDichVu;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
  public totalThanhTienHoan(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'Hoan':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.Hoan;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
  public totalThanhTienThuTien(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'ThuTien':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.ThuTien;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
  public totalThanhTienHoanUng(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'HoanUng':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.HoanUng;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
  public totalThanhTienTamUng(field: any) {
    let thanhTien = null;
    switch (field) {
      case 'TamUng':
        if (this.gridView != undefined) {
          if (this.gridView.data != undefined) {
            this.gridView.data.forEach(element => {
              thanhTien += element.TamUng;
            });
          }
        }
        else {
          thanhTien = 0;
        };
      }
    return thanhTien;
  };
  XemBaoCao() {
    if(this.search.DateStart==null || this.search.DateEnd==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.search.DateStart == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.DateStart = this.minDateTuNgay;
    }
    if (this.search.DateEnd == null) {
      this.minDateDenNgay = new Date();
      this.search.DateEnd = this.minDateDenNgay;
    }
    if (this.search.NhanVienThuNganId == null) {
      this.search.NhanVienThuNganId = 0; // âll
    }
    let baoCaoVienPhiThuTienVo = new BaoCaoVienPhiThuTienVo();
    baoCaoVienPhiThuTienVo.TuNgay = this.search.DateStart;
    baoCaoVienPhiThuTienVo.DenNgay = this.search.DateEnd;
    baoCaoVienPhiThuTienVo.NhanVienThuNganId = this.search.NhanVienThuNganId;
    this.ishowView = true;
    this.apiService.post<any>("BaoCao/GetBaoCaoThuTienVienPhiForGridAsync", baoCaoVienPhiThuTienVo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if (resultData !== undefined && resultData != null) {
          this.showPrintExport = true;
          this.gridData = resultData;
          this.gridView = {
            data: resultData.Data,
            total: resultData.TotalRowCount
          };
          this._isLoadingTotalPage = false;
          this.gridView.data.forEach((item, idx) => {
            this.baoCaoVienPhiThuTienGrid.collapseRow(idx);
          })
          this._isLoading = false;

        }
      }
    });
  }
  detailExpand(event: any) {
    let baoCaoVienPhiThuTienVo = new BaoCaoVienPhiThuTienVo();
    baoCaoVienPhiThuTienVo.TuNgay = this.search.DateStart;
    baoCaoVienPhiThuTienVo.DenNgay = this.search.DateEnd;
    let denNgay = CommonService.formatDateTime(baoCaoVienPhiThuTienVo.TuNgay, "mm/dd/yyyy");
    let tuNgay = CommonService.formatDateTime(baoCaoVienPhiThuTienVo.DenNgay, "mm/dd/yyyy");
    baoCaoVienPhiThuTienVo.NhanVienThuNganId = this.search.NhanVienThuNganId;
    this.urlGetDataGridChild = "BaoCao/GetBaoCaoThuTienVienPhiChildForGridAsync?nhanVienId=" + baoCaoVienPhiThuTienVo.NhanVienThuNganId + "&tuNgay=" + tuNgay + "&denNgay=" + denNgay;
  }
  InbaoCao() {
    if(this.search.DateStart==null || this.search.DateEnd==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }
    if (this.showPrintExport == true) {
      let baoCaoVienPhiThuTienVo = new BaoCaoVienPhiThuTienVo();
      baoCaoVienPhiThuTienVo.TuNgay = this.search.DateStart;
      baoCaoVienPhiThuTienVo.DenNgay = this.search.DateEnd;
      let denNgay = CommonService.formatDateTime(baoCaoVienPhiThuTienVo.TuNgay, "mm/dd/yyyy");
      let tuNgay = CommonService.formatDateTime(baoCaoVienPhiThuTienVo.DenNgay, "mm/dd/yyyy");
      baoCaoVienPhiThuTienVo.NhanVienThuNganId = this.search.NhanVienThuNganId;
      if (window.location.protocol == "http:") {
        baoCaoVienPhiThuTienVo.hosting = "http://" + window.location.host;
      } else {
        baoCaoVienPhiThuTienVo.hosting = "https://" + window.location.host;
      }
      this.apiService.post<any>("BaoCao/InBaoCaoVienPhiThuTien", baoCaoVienPhiThuTienVo).subscribe(
        (result) => {
          this.dialog.open(BaoCaoVienPhiThuTienPopupComponent, {
            disableClose: true,
            width: '1000px',
            data: { Model: result }
          }).afterClosed().subscribe(() => {
          });
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
  }
  XuatBaoCao() { }
  columnResize(event: any): void {
    //khi resize column parent thì column child cũng resize theo
    if (event != null && event.length > 0) {
      event.forEach(element => {
        var columnIndex = this.gridColumns.findIndex(x => x.Field === element.column.field);
        if (columnIndex >= 0) {
          this.gridColumns[columnIndex].Width = element.newWidth;
          if (jQuery(".k-detail-cell .k-grid-table").find("col") != undefined && jQuery(".k-detail-cell .k-grid-table").find("col").length > 0) {
            jQuery(jQuery(".k-detail-cell .k-grid-table").find("col")[columnIndex]).css({ width: element.newWidth });
          }
        }
      });
    }
  }

  getFieldColumn(index: number) {
    return this.gridColumns[index].Field;
  }
  getTitleColumn(index: number) {
    return this.gridColumns[index].Title;
  }
  getWidthColumn(index: number) {
    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
  }
  getMinWidthColumn(minWidth: number) {
    var widthParent = jQuery("#baoCaoVienPhiThuTienGrid").parent().width();
    var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
    var totalWidth = this.gridColumns.filter((item) => {
      return item.Width != null;
    }).reduce((sum, item) => sum + item.Width, 0);
    if ((widthScreen < totalWidth + minWidth + 100)) {
      return minWidth;
    }
    else {
      return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
    }
  }
  ngAfterContentInit() {
    var self = this;
    self.height = jQuery(window).height() - 180;
    if (self.height < 400)
      self.height = 400;
    jQuery(window).resize(function () {
      self.height = jQuery(window).height() - 180;
      if (self.height < 400)
        self.height = 400;
    });

  }
  searchRefresh() {
    this.XemBaoCao();
  }
}
