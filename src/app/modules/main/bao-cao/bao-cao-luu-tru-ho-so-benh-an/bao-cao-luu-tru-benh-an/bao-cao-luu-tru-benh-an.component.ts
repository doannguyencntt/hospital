import { ChangeDetectorRef, Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BaoCaoLuuTruBenhAnPopupComponent } from '../bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component';
import { SearchBaoCao, BaoCaoLuuHoSoBenhAnVo, BaoCaoLuuTruHoSoBenhAnSearch, InBaoCaoLuuTruHoSoBenhAn } from '../bao-cao-luu-tru-ho-so-benh-an.model';
import { MatDialog } from "@angular/material";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
@Component({
  selector: 'app-bao-cao-luu-tru-benh-an',
  templateUrl: './bao-cao-luu-tru-benh-an.component.html',
  styleUrls: ['./bao-cao-luu-tru-benh-an.component.scss']
})
export class BaoCaoLuuTruBenhAnComponent implements OnInit {
  documentType: DocumentType;
  icFilterList = icFilterList;
  gridColumns: any[] = [];
  gridDataSource: any = {
    data:[],
    total: 0
  };
  search = {} as SearchBaoCao;
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  validationErrors : any;
  popupLoadingData: any;
  baoCaoSearch : BaoCaoLuuTruHoSoBenhAnSearch = new BaoCaoLuuTruHoSoBenhAnSearch();
  inBaoCaoLuuTruHoSoBenhAn : InBaoCaoLuuTruHoSoBenhAn = new InBaoCaoLuuTruHoSoBenhAn();
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoLuuTruHoSoBenhAn;

    if (window.location.protocol == "http:") {
      this.inBaoCaoLuuTruHoSoBenhAn.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoLuuTruHoSoBenhAn.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      // { Field: "STT", Title: "STT", Width: 60 , Template: this.sttTemplate },
      { Field: "ThuTuSapXep", Title: "Thứ tự sắp sếp", Width: 80 },
      { Field: "SoLuuTru", Title: "Số lưu trữ", Width: 80 },
      { Field: "HoTen", Title: "Họ tên", Width: 120 },
      { Field: "GioiTinh", Title: "Giới tính", Width: 80, },
      // { Field: "Tuoi", Title: "Tuổi", Width: 100 },
      { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 80 },
      { Field: "ThoiGianVaoVienString", Title: "Thời gian vào viện", Width: 80 },
      { Field: "ThoiGianRaVienString", Title: "Thời gian ra viện", Width: 80 },
      { Field: "ChanDoan", Title: "Chẩn đoán điều trị", Width: 140 },
      { Field: "ICD", Title: "ICD", Width: 80 }
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
      this.baoCaoSearch.DenNgayFormat.setHours(23,59,59);
    }
  }
  XemBaoCao() {
    this.gridChild._isLoadingTotalPage = true;
    this.gridChild._isLoading = true;
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        this.gridChild._isLoadingTotalPage = false;
        this.gridChild._isLoading = false;
        return;
    }
    // if(!this.baoCaoSearch.KhoaId)
    // {
    //     this.notificationService.showError("Khoa yêu cầu nhập");
    //     this.gridChild._isLoadingTotalPage = false;
    //     this.gridChild._isLoading = false;
    //     return;
    // }

    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.showPopupLoadingData();
    this.gridDataSource = {
      data: [],
      total: 0
    };
    this.gridChild.ngOnInit();
    this.apiService.post<any>("BaoCao/GetDataLuuTruHoSoBenhAnForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
        {
         this.showPrintExport = true;
        }
        else
        {
          this.showPrintExport = false;
        }

        // this.gridDataSource.data = [...resultData.Data];
        // this.gridDataSource.total = this.gridDataSource.data.length;

        this.gridDataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };


        this.gridChild._isLoadingTotalPage = false;
        this.gridChild._isLoading = false;
      }
      this.closePopupLoadingData();
    },
    (err: ApiError) => {
        if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
    });

  }
  InbaoCao(){
    if(this.showPrintExport == true)
    {
      let baoCaoLuuHoSoBenhAnVo = new BaoCaoLuuHoSoBenhAnVo();
      baoCaoLuuHoSoBenhAnVo.KhoaId = this.search.KhoaId;
      baoCaoLuuHoSoBenhAnVo.NgayRaVien = this.search.DateEnd;
      baoCaoLuuHoSoBenhAnVo.NgayVaoVien = this.search.DateStart;
      baoCaoLuuHoSoBenhAnVo.hosting = window.location.protocol + "//" + window.location.host;
      this.apiService.post<any>("BaoCao/InBaoCaoLuuTruHoSoBenhAn", baoCaoLuuHoSoBenhAnVo).subscribe(
        (result) => {
                this.dialog.open(BaoCaoLuuTruBenhAnPopupComponent, {
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
 
  exportExcel() {
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }

    // if(!this.baoCaoSearch.KhoaId)
    // {
    //     this.notificationService.showError("Khoa yêu cầu nhập");
    //     return;
    // }

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoLuuTruHoSoBenhAn", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoLuuTruHoSoBenhAn" + dateTimeNow.getFullYear() + ".xlsx");
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

  showPopupLoadingData() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
  }
  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
}
