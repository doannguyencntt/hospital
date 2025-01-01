import { ChangeDetectorRef, Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialog } from "@angular/material";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { BaoCaoBsDsKhamNgoaiTruPopupComponent } from '../bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component';
import { BaoCaoBenhNhanKhamNgoaiTruAnVo,SearchBaoCao } from '../bao-cao-bs-ds-kham-ngoai-tru.model';
import { GroupDescriptor, State,process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-bao-cao-bs-ds-kham-ngoai-tru',
  templateUrl: './bao-cao-bs-ds-kham-ngoai-tru.component.html',
  styleUrls: ['./bao-cao-bs-ds-kham-ngoai-tru.component.scss']
})
export class BaoCaoBsDsKhamNgoaiTruComponent implements OnInit {
  documentType: DocumentType;
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
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('thoiGianTiepNhanGroupFooterTemplate', { static: true }) thoiGianTiepNhanGroupFooterTemplate:TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('phongKhamGroupFooterTemplate', { static: true }) phongKhamGroupFooterTemplate: TemplateRef<any>;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }
    state: State = {
      skip: 0, take: 15,
      group: [{
        field: 'PhongKham', aggregates: [{ field: 'PhongKham', aggregate: 'count' }]
      }]
    };
    //group: GroupDescriptor[] = [{ field: 'PhongKham', dir: null, aggregates: [{ field: 'PhongKham', aggregate: 'count' }] }];
  ngOnInit() {
    this.documentType = DocumentType.BaoCaoBSDanhSachKhamNgoaiTru;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 40 , Template: this.sttTemplate },
      { Field: "ThoiGianTiepNhanString", Title: "Thời gian tiếp nhận", Width: 100},
      { Field: "MaTN", Title: "Mã TN", Width: 100 },
      { Field: "HoTenBn", Title: "Họ tên NB", Width: 120 },
      { Field: "NgaySinh", Title: "Ngày sinh", Width: 100, },
      { Field: "GioiTinh", Title: "Giới tính", Width: 60 },
      { Field: "TheBHYT", Title: "Thẻ BHYT", Width: 100 },
      { Field: "PhieuKham", Title: "Phiếu khám", Width: 100 },
      { Field: "PhongKham", Title: "Phòng khám", Width: 100 ,TemplateGroupHeader: this.nhomGroupHeaderTemplate,TemplateGroupFooter:this.phongKhamGroupFooterTemplate },
      { Field: "ICD", Title: "ICD", MinWidth: 100 },
      { Field: "TrangThai", Title: "Trạng thái", Width: 100 },
      { Field: "BsKham", Title: "BS Khám", Width: 100 },
      { Field: "BsKetLuan", Title: "BS kết luận", Width: 100 },
      { Field: "ThoiGianThanhToan", Title: "Thời gian thanh toán", Width: 100 },
      { Field: "CachGiaiQuyet", Title: "Cách giải quyết", Width: 100 },
      { Field: "NgoaiGioHanhChinh", Title: "Ngoài giờ hành chính", Width: 100 }
    ];
  }
  theFirstValueFormat(str: string) {
    let strGroup = str.split('/');
    if (strGroup.length != 0) {
      return strGroup[0];
    }
  }
  theFirstValueFormatTotalGroup(str: string) {
    let strGroup = str.split('/');
    if (strGroup.length != 0) {
      return strGroup[1];
    }
  }
  XemBaoCao() {
    if (this.search.DateStart == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.DateStart = this.minDateTuNgay;
    }
    if (this.search.DateEnd == null) {
      this.minDateDenNgay = new Date();
      this.search.DateEnd = this.minDateDenNgay;
    }
    let baoCaoBenhNhanKhamNgoaiTruAnVo = new BaoCaoBenhNhanKhamNgoaiTruAnVo();
      baoCaoBenhNhanKhamNgoaiTruAnVo.PhongId = this.search.PhongId;
      baoCaoBenhNhanKhamNgoaiTruAnVo.KhoaId = this.search.KhoaId;
      baoCaoBenhNhanKhamNgoaiTruAnVo.DenNgay = this.search.DateEnd;
      baoCaoBenhNhanKhamNgoaiTruAnVo.TuNgay = this.search.DateStart;
   
    this.apiService.post<any>("BaoCao/GetBaoCaoBenhNhanKhamNgoaiTruForGridAsync", baoCaoBenhNhanKhamNgoaiTruAnVo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
        {
         this.showPrintExport = true;
        }
        this.showGrid = true;
        this.gridDataSource = process(resultData.Data,this.state);
        // this.gridDataSource.data = [...resultData.Data];
        // this.gridDataSource.total = this.gridDataSource.data.length;
      }
    });

  }
  InbaoCao(){
    if(this.showPrintExport == true)
    {
      let baoCaoBenhNhanKhamNgoaiTruAnVo = new BaoCaoBenhNhanKhamNgoaiTruAnVo();
      baoCaoBenhNhanKhamNgoaiTruAnVo.PhongId = this.search.PhongId;
      baoCaoBenhNhanKhamNgoaiTruAnVo.KhoaId = this.search.KhoaId;
      baoCaoBenhNhanKhamNgoaiTruAnVo.DenNgay = this.search.DateEnd;
      baoCaoBenhNhanKhamNgoaiTruAnVo.TuNgay = this.search.DateStart;
      baoCaoBenhNhanKhamNgoaiTruAnVo.hosting =  window.location.protocol + "//" + window.location.host;
      this.apiService.post<any>("BaoCao/InBaoCaoBenhNhanKhamNgoaiTru", baoCaoBenhNhanKhamNgoaiTruAnVo).subscribe(
        (result) => {
                this.dialog.open(BaoCaoBsDsKhamNgoaiTruPopupComponent, {
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
  XuatBaoCao(){
    const self = this;
    let baoCaoBenhNhanKhamNgoaiTruAnVo = new BaoCaoBenhNhanKhamNgoaiTruAnVo();
    baoCaoBenhNhanKhamNgoaiTruAnVo.PhongId = this.search.PhongId;
    baoCaoBenhNhanKhamNgoaiTruAnVo.KhoaId = this.search.KhoaId;
    baoCaoBenhNhanKhamNgoaiTruAnVo.DenNgay = this.search.DateEnd;
    baoCaoBenhNhanKhamNgoaiTruAnVo.TuNgay = this.search.DateStart;
    baoCaoBenhNhanKhamNgoaiTruAnVo.hosting =   window.location.protocol + "//" + window.location.host;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.postExportExcel<string>('BaoCao/ExportBaoCaoBenhNhanKhamNgoaiTru',
      baoCaoBenhNhanKhamNgoaiTruAnVo).subscribe(
          resultData => {
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'BaoCaoBenhNhanKhamNgoaiTru' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
