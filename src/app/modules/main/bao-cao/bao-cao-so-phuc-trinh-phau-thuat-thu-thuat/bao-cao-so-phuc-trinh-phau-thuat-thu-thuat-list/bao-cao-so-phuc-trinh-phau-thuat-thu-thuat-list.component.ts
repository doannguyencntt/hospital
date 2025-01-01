import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { BaoCaoSoPhucTrinhPhauThuatThuThuatSearch, InBaoCaoSoPhucTrinhPhauThuatThuThuat } from '../bc-so-phuc-trinh-phau-thuat-thu-thuat.model';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
declare var jQuery: any;

@Component({
  selector: 'app-bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list',
  templateUrl: './bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.html',
  styleUrls: ['./bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.scss']
})
export class BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent implements OnInit {
  baoCaoSearch: BaoCaoSoPhucTrinhPhauThuatThuThuatSearch = new BaoCaoSoPhucTrinhPhauThuatThuThuatSearch();
  inBaoCaoSoPhucTrinhPhauThuatThuThuat: InBaoCaoSoPhucTrinhPhauThuatThuThuat = new InBaoCaoSoPhucTrinhPhauThuatThuThuat();
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridDataSource: any = {
    data: [],
    total: 0
  };
  showPrintExport: boolean = false;
  showGrid: boolean = false;
  validationErrors: any;
  minDateTuNgay: Date = null;
  heightToolbar: number = 140;
  height: number;
  public pageSize = 50;
  public skip = 0;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean = true;
  icFilterList = icFilterList;
  queryInfo :GridQueryInfo;
  queryNoiThucHien: LookupQueryInfo = new LookupQueryInfo();

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  constructor(private apiService: ApiService, private notificationService: NotificationService,
    private dialog: MatDialog, private authService: AuthService,
    private cd:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoSoPhucTrinhPhauThuatThuThuat;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 60 },
      { Field: "MaTN", Title: "Mã TN", Width: 140 },
      { Field: "TenBenhNhan", Title: "Họ tên NB", Width: 200 },
      { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 120 },
      { Field: "GioiTinh", Title: "Giới tính", Width: 80 },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 190 },
      { Field: "BHYT", Title: "BHYT", Width: 160 },
      { Field: "ChuanDoanTruocPt", Title: "Trước PT", Width: 160 },
      { Field: "ChuanDoanSauPt", Title: "Sau PT", Width: 160 },
      { Field: "PhuongPhapPhauThuat", Title: "Phương pháp phẫu thuật", Width: 200 },
      { Field: "ThuThuatChuyenKhoa", Title: "Thủ thuật chuyên khoa", Width: 200 },
      { Field: "SoThuTuThongTu50", Title: "STT theo thông tư 50", Width: 200 },
      { Field: "PhuongPhapVoCam", Title: "Phương pháp vô cảm", Width: 200 },
      { Field: "NhomDichVu", Title: "Nhóm dịch vụ", Width: 120 },
      { Field: "SoLuong", Title: "Số lượng", Width: 120 }, 
      { Field: "DonGia", Title: "Đơn giá", Width: 120 },
      { Field: "ThoiGianPhauThuatStart", Title: "Bắt đầu", Width: 150 },
      { Field: "ThoiGianPhauThuatEnd", Title: "Kết thúc", Width: 150 },
      { Field: "ThoiGianKhoiMe", Title: "Thời gian khởi mê", Width: 150 },
      { Field: "LoaiPTTT", Title: "Loại PTTT", Width: 120 },
      { Field: "NoiChiDinh", Title: "Nơi chỉ định", Width: 160 }, 
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 160 }, 
      { Field: "PTVChinh", Title: "PTV chính", Width: 160 },
      { Field: "NguoiGayMeChinh", Title: "Người gây mê chính", Width: 160 },
      { Field: "NguoiGayMeGayTePhu", Title: "Người gây mê/gây tê phụ", Width: 160 }, 
      { Field: "PTVPhu", Title: "PTV phụ", Width: 160 }, 
      { Field: "DungCuVongTrong", Title: "Dụng cụ vòng trong", Width: 160 }, 
      { Field: "DungCuVongNgoai", Title: "Dụng cụ vòng ngoài", Width: 160 }, 
      { Field: "NguoiGayMePhu", Title: "Người gây mê phụ", Width: 160 }, 
      { Field: "ChayNgoai", Title: "Chạy ngoài", Width: 160 }, 
      { Field: "Phu1", Title: "Phụ 1", Width: 160 }, 
      { Field: "Phu2", Title: "Phụ 2", Width: 160 }, 
      { Field: "Phu3", Title: "Phụ 3", Width: 160 }   
    ]

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
    }
  }

  XemBaoCao(isChagePage: boolean = false) {
    // this.gridChild._isLoading = true;
    // this.gridChild._isLoadingTotalPage = true;
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if(!isChagePage)
    {
      this.skip = 0;
    }
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      // this.gridChild._isLoading = false;
      // this.gridChild._isLoadingTotalPage = false;
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }
    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
    }
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
    let khoaId = 0;
    if (this.baoCaoSearch.KhoaId != undefined && this.baoCaoSearch.KhoaId != null) {
      khoaId = this.baoCaoSearch.KhoaId;
    }
    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    let searchText = this.getSearchText();
    this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
    // this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
    // this.gridChild.search();
    //this.baoCaoSearch.AdditionalSearchString = khoaId.toString() + ";" + tuNgay + ";" + denNgay;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoSoPhucTrinhPhauThuatThuThuatForGridAsync", this.queryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        // if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
        //   this.showPrintExport = true; //show button InBaoCao
        // }
        // this.showGrid = true;
        this.gridDataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        this._isLoading = false;

        this.apiService.post<any>("BaoCao/GetTotalPageBaoCaoSoPhucTrinhPhauThuatThuThuatForGridAsync", this.queryInfo).subscribe(resultDataTotal => {
          if (resultDataTotal !== undefined && resultDataTotal != null) {
            this.gridDataSource.total = resultDataTotal.TotalRowCount;
            this._isLoadingTotalPage = false;
          }
        },
          () => {
            this._isLoadingTotalPage = false;
          });
      }
    });
  }

  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
      let khoaId = 0;
      if (this.baoCaoSearch.KhoaId != undefined && this.baoCaoSearch.KhoaId != null) {
        khoaId = this.baoCaoSearch.KhoaId;
      }
      // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      // this.baoCaoSearch.AdditionalSearchString = khoaId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoSoPhucTrinhPhauThuatThuThuat.HostingName;
      // console.log(this.baoCaoSearch)
      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      //this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
      let searchText = this.getSearchText();
      this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoSoPhucTrinhPhauThuatThuThuat", this.queryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoSoPhucTrinhPhauThuatThuThuat" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          , err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  getSearchText() {
    let searchText = this.baoCaoSearch.SearchString != undefined ? this.baoCaoSearch.SearchString : '';
    searchText = CommonService.convertSpecialXML(searchText);
    searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
    return searchText;
  }


  ngAfterContentInit() {
    const self = this;
    self.height = jQuery(window).height() - self.heightToolbar;
    if (self.height < 400) {
      self.height = 400;
    }
    jQuery(window).resize(function () {
        self.height = jQuery(window).height() - self.heightToolbar;
        if (self.height < 400) {
            self.height = 400;
        }
    });
    this.cd.detectChanges();
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
    var widthParent = jQuery("#baoCaoGrid").parent().width();
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

  public pageChange(event: PageChangeEvent): void {
    this.baoCaoSearch.Skip = event.skip;
    this.skip = event.skip;
    this.XemBaoCao(true);
  }

  reFresh(){ this.skip = 0; this.XemBaoCao() }

  getValueByName(name: string, dataItem)
  {
    switch (name) {
      case 'MaTN':
        return dataItem.MaTN;
      case 'TenBenhNhan':
        return dataItem.TenBenhNhan;
      case 'NgaySinhDisplay':
        return dataItem.NgaySinhDisplay;
      case 'GioiTinh':
        return dataItem.GioiTinh;
      case 'DiaChi':
        return dataItem.DiaChi;
      case 'BHYT':
        return dataItem.BHYT;
      case 'ChuanDoanTruocPt':
        return dataItem.ChuanDoanTruocPt;
      case 'ChuanDoanSauPt':
        return dataItem.ChuanDoanSauPt;
      case 'PhuongPhapPhauThuat':
        return dataItem.PhuongPhapPhauThuat;
      case 'PhuongPhapVoCam':
        return dataItem.PhuongPhapVoCam;
      case 'NhomDichVu':
        return dataItem.NhomDichVu;
      case 'SoLuong':
        return dataItem.SoLuong;
      case 'DonGia':
        return dataItem.DonGia;
      case 'ThoiGianPhauThuatStart':
        return dataItem.ThoiGianPhauThuatStart;
      case 'ThoiGianPhauThuatEnd':
        return dataItem.ThoiGianPhauThuatEnd;
      case 'ThoiGianKhoiMe':
        return dataItem.ThoiGianKhoiMe;
      case 'LoaiPTTT':
        return dataItem.LoaiPTTT;
      case 'NoiChiDinh':
        return dataItem.NoiChiDinh;
      case 'NoiThucHien':
        return dataItem.NoiThucHien;
      case 'PTVChinh':
        return dataItem.PTVChinh;
      case 'NguoiGayMeChinh':
        return dataItem.NguoiGayMeChinh;
      case 'NguoiGayMeGayTePhu':
        return dataItem.NguoiGayMeGayTePhu;
      case 'PTVPhu':
        return dataItem.PTVPhu;
      case 'DungCuVongTrong':
        return dataItem.DungCuVongTrong;
      case 'DungCuVongNgoai':
        return dataItem.DungCuVongNgoai;
      case 'NguoiGayMePhu':
        return dataItem.NguoiGayMePhu;
      case 'ChayNgoai':
        return dataItem.ChayNgoai;
      case 'Phu1':
        return dataItem.Phu1;
      case 'Phu2':
        return dataItem.Phu2;
      case 'Phu3':
        return dataItem.Phu3;
      case 'ThuThuatChuyenKhoa':
        return dataItem.ThuThuatChuyenKhoa;
      case 'SoThuTuThongTu50':
        return dataItem.SoThuTuThongTu50;
    }
  }

  //BVHD-3636
  changeKhoa(event) {
    if (event == undefined || event == null || event.length == 0) {
      this.baoCaoSearch.NoiThucHienIds = [];
    }
    else {
      if (this.baoCaoSearch.NoiThucHienIds == undefined || this.baoCaoSearch.NoiThucHienIds == null || this.baoCaoSearch.NoiThucHienIds.length == 0) {
        this.baoCaoSearch.NoiThucHienIds = [];
      }
      let arrNoiThucHienHienTai = this.baoCaoSearch.NoiThucHienIds.slice();
      let arrNoiThucHienNew = this.baoCaoSearch.NoiThucHienIds.slice();
      arrNoiThucHienHienTai.forEach((element, index) => {
        let elementObj = JSON.parse(element);
        let indexKhoa = event.findIndex(x => x == elementObj.KhoaId);
        if (indexKhoa == -1) {
          let indexNoiThucHien = arrNoiThucHienNew.findIndex(x => x == element);
          arrNoiThucHienNew.splice(indexNoiThucHien, 1);
        }
      });
      this.baoCaoSearch.NoiThucHienIds = arrNoiThucHienNew.slice();
    }
    this.getObjKhoaId(event);
  }

  getObjKhoaId(arr: any) {
    if (arr != undefined && arr != null && arr.length != 0) {
      let objParam = "[";
      arr.forEach(element => {
        objParam += "{'KhoaId':" + element + "},"
      });

      objParam += "]";
      this.queryNoiThucHien.ParameterDependencies = objParam;
    }
    else {
      this.queryNoiThucHien.ParameterDependencies = "";
    }
  }

  isItemSelected(dataItem: any): boolean {
    if (this.baoCaoSearch.NoiThucHienIds != undefined && this.baoCaoSearch.NoiThucHienIds.length > 0) {

      let currentItemValue = JSON.parse(dataItem.KeyId);
      // if parent
      if (dataItem.KhoaId === null || dataItem.KhoaId === '') {
        let index = this.baoCaoSearch.NoiThucHienIds.findIndex(x => x == dataItem.KeyId);
        if (index != -1) // đang chọn khoa
        {
          if (index == this.baoCaoSearch.NoiThucHienIds.length - 1) { // nếu vừa chọn khoa

            if (this.baoCaoSearch.NoiThucHienIds.length > 1) {
              var arrNoiThucHienTemp = this.baoCaoSearch.NoiThucHienIds.slice();

              arrNoiThucHienTemp.forEach(element => {
                let elementObj = JSON.parse(element);
                if (elementObj.KhoaId === currentItemValue.KhoaId && elementObj.PhongId != null && elementObj.PhongId != "") {
                  let indexNoiThucHienXoa = this.baoCaoSearch.NoiThucHienIds.findIndex(x => x == element);
                  if (indexNoiThucHienXoa != -1) {
                    this.baoCaoSearch.NoiThucHienIds.splice(indexNoiThucHienXoa, 1);
                    this.cd.detectChanges();
                  }
                }
              });
            }
            return true;
          }
          else // nếu vừa chọn phòng
          {
            let itemCuoiCung = this.baoCaoSearch.NoiThucHienIds[this.baoCaoSearch.NoiThucHienIds.length - 1];
            let itemCuoiCungObj = JSON.parse(itemCuoiCung);
            if (itemCuoiCungObj.PhongId != null && itemCuoiCungObj.PhongId != '' && itemCuoiCungObj.KhoaId == currentItemValue.KhoaId) {
              let indexParentItemCuoiCung = -1;
              this.baoCaoSearch.NoiThucHienIds.forEach((element, index) => {
                let itemObj = JSON.parse(element);
                if ((itemObj.PhongId == null || itemObj.PhongId == '') && itemObj.KhoaId == itemCuoiCungObj.KhoaId && indexParentItemCuoiCung == -1) {
                  indexParentItemCuoiCung = index;
                }
              });
              if (indexParentItemCuoiCung != -1) // nếu đã chọn khoa trước đó
              {
                // gán lại arr
                var arrItems = dataItem.Items.slice();
                var arrNoiThucHienDangChon = this.baoCaoSearch.NoiThucHienIds.slice();
                arrItems.forEach(element => {
                  let indexElement = arrNoiThucHienDangChon.findIndex(x => x == element.KeyId);
                  if (element.KeyId == itemCuoiCung) {
                    arrNoiThucHienDangChon.splice(indexElement, 1);
                  }
                  if (indexElement == -1) {
                    arrNoiThucHienDangChon.push(element.KeyId);
                  }
                });
                arrNoiThucHienDangChon.splice(indexParentItemCuoiCung, 1);

                this.baoCaoSearch.NoiThucHienIds = arrNoiThucHienDangChon.slice();
                this.cd.detectChanges();
                return false;
              }
              else // nếu chưa chọn khoa trước đó
              {
                return this.baoCaoSearch.NoiThucHienIds.some(item => item == dataItem.KeyId);
              }

            }
            else {
              return this.baoCaoSearch.NoiThucHienIds.some(item => item == dataItem.KeyId);
            }
          }
        }
        else {
          return this.baoCaoSearch.NoiThucHienIds.some(item => item == dataItem.KeyId);
        }
      }
      // if child
      else {

        let indexParent = this.baoCaoSearch.NoiThucHienIds.findIndex(item => item == dataItem.KhoaKeyId)
        if (indexParent != -1) {
          return this.baoCaoSearch.NoiThucHienIds.some(item => this.checkedValue(item, dataItem.KeyId));
        }
        else {
          // kiểm tra số lượng phòng thuộc khoa đang chọn, nếu bằng tổng số phòng thì thêm khoa vào model, xóa tất cả phòng thuộc khoa trong model
          let count = 0;

          let arrNoiThucHien = this.baoCaoSearch.NoiThucHienIds.slice();
          arrNoiThucHien.forEach(element => {
            let elementObj = JSON.parse(element);
            if (elementObj.PhongId != null && elementObj.PhongId != '' && elementObj.KhoaId === dataItem.KhoaId) {
              count++;
            }
          });

          // nếu số lượng phòng select = tổng phòng trong khoa -> xóa tất cả phòng, thêm khoa vào model
          if (count == dataItem.CountItems) {
            let arr = this.baoCaoSearch.NoiThucHienIds.slice();
            let isPush: boolean = false;
            arr.forEach((element, indexPhong) => {
              let elementObj = JSON.parse(element);
              if (elementObj.PhongId != null && elementObj.PhongId != "" && elementObj.KhoaId === currentItemValue.KhoaId) {
                arr.splice(indexPhong, 1);
                if (!isPush) {
                  isPush = true;
                  arr.push(dataItem.KhoaKeyId);
                }
              }
            });
            this.baoCaoSearch.NoiThucHienIds = arr.slice();
            this.cd.detectChanges();

            // this.dichVuKyThuatBenhVien.NoiThucHienIds.push(dataItem.KhoaKeyId);
            return true;
          }
          else {
            return this.baoCaoSearch.NoiThucHienIds.some(item => item == dataItem.KeyId);
          }
        }
      }
    }
  }

  checkedValue(itemInList, currentItem) {
    let itemInListValue = JSON.parse(itemInList);
    let currentItemValue = JSON.parse(currentItem);
    return itemInListValue.KhoaId === currentItemValue.KhoaId;
  }

  //=================================================================================
}