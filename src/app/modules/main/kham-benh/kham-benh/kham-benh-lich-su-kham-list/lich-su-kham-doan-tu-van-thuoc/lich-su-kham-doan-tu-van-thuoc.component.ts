import { Component, OnInit, ViewChild, TemplateRef, Input, ChangeDetectorRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { InThuocTuVanKhamDoanPopupComponent } from '../../lan-kham-hien-tai/in-thuoc-tu-van-kham-doan-popup/in-thuoc-tu-van-kham-doan-popup.component';

@Component({
  selector: 'app-lich-su-kham-doan-tu-van-thuoc',
  templateUrl: './lich-su-kham-doan-tu-van-thuoc.component.html',
  styleUrls: ['./lich-su-kham-doan-tu-van-thuoc.component.scss']
})
export class LichSuKhamDoanTuVanThuocComponent implements OnInit {
  gridToaThuocColumns: any[] = [];
  validationErrors :any;
  popupLoadingData: any = null;
  popupAddingData: any = null;
  popupDeletingData: any = null;
  isDisabled :boolean;
  documentType: DocumentType = DocumentType.KhamBenh;
  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) toiTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('actionToaThuocTemplate', { static: true }) actionToaThuocTemplate: TemplateRef<any>;
  
  @ViewChild('gridThuoc', { static: false }) gridThuoc: GridComponent;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;


  @Input() YeuCauTiepNhanId: number;
  @Input() YeuCauKhamBenhId: number;

  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
  ) { }

  ngOnInit() {

    this.gridToaThuocColumns = [
      { Field: "Action", Title: "", Width: 70, Template: this.actionToaThuocTemplate, },
      { Field: "STT", Title: "#", Width: 45, Sortable: true, Template: this.sttTemplate },
      { Field: "Ma", Title: "Mã", Width: 45, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "TÊN", Width: 95, Sortable: true, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 60, Sortable: true },
      { Field: "SangDisplay", Title: "Sáng", Width: 55, Sortable: true, Template: this.sangTemplate },
      { Field: "TruaDisplay", Title: "Trưa", Width: 55, Sortable: true, Template: this.truaTemplate },
      { Field: "ChieuDisplay", Title: "Chiều", Width: 55, Sortable: true, Template: this.chieuTemplate },
      { Field: "ToiDisplay", Title: "Tối", Width: 55, Sortable: true, Template: this.toiTemplate },
      { Field: "SoNgayDung", Title: "Số ngày", Width: 80, Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: true, Template: this.soLuongTemplate },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 70, Sortable: true },
      { Field: "TuongTacThuoc", Title: "Tương tác thuốc", Width: 65, Sortable: true },
      { Field: "DiUngThuocDisplay", Title: "Dị ứng", Width: 65, Sortable: true },
      { Field: "GhiChu", Title: "Cách dùng", Width: 90, Sortable: true, ShowTooltip: true },
    ];
    
  }
  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
  
  inPhieuTuVanThuoc() {
    var self = this;
    self.loadingPage();
    var inTuVan =  {
      YeuCauKhamBenhId : self.YeuCauKhamBenhId,
      YeuCauTiepNhanId : self.YeuCauTiepNhanId,
      HostingName : window.location.protocol + "//" + window.location.host
    };
    
    self.apiService.post<any>("KhamBenh/InTuVanThuoc", inTuVan).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(InThuocTuVanKhamDoanPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: resData,
          }
          ).afterClosed().subscribe(() => {
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingData();
      }
    );
  }
  onDataBound(event: any) {
    if (event != undefined && event != null) {
      if (event.Data.length > 0) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    }
  }

}
