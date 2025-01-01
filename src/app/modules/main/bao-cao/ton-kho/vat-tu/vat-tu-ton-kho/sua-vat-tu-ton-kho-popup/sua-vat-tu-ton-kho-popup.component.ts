import { ChangeDetectorRef, Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icClose from "@iconify/icons-ic/twotone-close";
import { CapNhatTonKhoVatTuItem, NhapKhoVatTuTonKhoViewModel } from '../vat-tu-ton-kho.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-sua-vat-tu-ton-kho-popup',
  templateUrl: './sua-vat-tu-ton-kho-popup.component.html',
  styleUrls: ['./sua-vat-tu-ton-kho-popup.component.scss']
})
export class SuaVatTuTonKhoPopupComponent implements OnInit {

  icClose = icClose;
  // validationErrors: any;
  validationErrors: any[] = [];
  documentType = DocumentType.CapNhatVatTuTonKho;
  tongTon: number = 0;
  tongTonKho:number=null;
  vatTu: any;
  @ViewChild('gridVatTuTonKho', { static: true }) gridVatTuTonKho: GridComponent;

  capNhatTonKhoItem: CapNhatTonKhoVatTuItem = {} as CapNhatTonKhoVatTuItem;
  nhapKhoVatTuTonKhoViewModel: NhapKhoVatTuTonKhoViewModel = new NhapKhoVatTuTonKhoViewModel();
  gridColumns: any[] = [];
  @ViewChild('gridPopup', { static: true }) gridPopup: GridComponent;
  @ViewChild('hanSuSungTemplate', { static: true }) hanSuSungTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('loaiFooterTemplate', { static: true }) loaiFooterTemplate: TemplateRef<any>;
  @ViewChild('tonFooterTemplate', { static: true }) tonFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;

  @ViewChild('vATTemplate', { static: true }) vATTemplate: TemplateRef<any>;
  @ViewChild('tiLeBHYTThanhToanTemplate', { static: true }) tiLeBHYTThanhToanTemplate: TemplateRef<any>;

  @ViewChild('maRefTemplate', { static: true }) maRefTemplate: TemplateRef<any>;
  @ViewChild('maVachTemplate', { static: true }) maVachTemplate: TemplateRef<any>;
  @ViewChild('soLoTemplate', { static: true }) soLoTemplate: TemplateRef<any>;

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('maChungTuTemplate', { static: true }) maChungTuTemplate: TemplateRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private cdRef: ChangeDetectorRef,
    public dialogRef: MatDialogRef<SuaVatTuTonKhoPopupComponent>,

    private authService: AuthService, private apiService: ApiService, private dialog: MatDialog,
    private notificationService: NotificationService) {
    this.vatTu = data;
    console.log(this.vatTu);

  }

  ngOnInit() {
    let queryString = "{\"KhoId\":" + this.vatTu.data.kho.KhoId + ",\"VatTuId\":" + this.vatTu.data.dataItem.Id + "}";
    this.gridPopup.additionalSearchString = queryString;
    this.nhapKhoVatTuTonKhoViewModel.VatTuId = this.vatTu.data.dataItem.Id;
    this.nhapKhoVatTuTonKhoViewModel.VatTu = this.vatTu.data.dataItem.TenVatTu;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50, Sortable: false, Template: this.sttTemplate },
      { Field: "NgayDisplay", Title: "Ngày", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "MaChungTu", Title: "Mã chứng từ", Width: 60, Sortable: false, ShowTooltip: true,Template:this.maChungTuTemplate },
      { Field: "LoaiSuDung", Title: "loại sử dụng", Width: 60, Sortable: false },
      { Field: "SoLo", Title: "SỐ lô", Width: 50, Sortable: false, ShowTooltip: true, Template: this.soLoTemplate, },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 120, Template: this.hanSuSungTemplate },
      { Field: "MaRef", Title: "mã ref", Width: 80, Sortable: false, ShowTooltip: true, Template: this.maRefTemplate, },
      { Field: "MaVach", Title: "mã vạch", Width: 80, Sortable: false, ShowTooltip: true, Template: this.maVachTemplate, },
      { Field: "DonGiaNhap", Title: "giá nhập", Width: 100, Sortable: false, Template: this.donGiaTemplate, },
      { Field: "VAT", Title: "VAT", Width: 50, Sortable: false, ShowTooltip: true, Template: this.vATTemplate, },
      { Field: "TiLeBHYTThanhToan", Title: "tl bảo hiểm thanh toán", Width: 50, Sortable: false, ShowTooltip: true, Template: this.tiLeBHYTThanhToanTemplate, },
      { Field: "LoaiDisplay", Title: "Loại", Width: 40, Sortable: false, TemplateFooter: this.loaiFooterTemplate },
      { Field: "SoLuong", Title: "Số lượng", Width: 100, Sortable: false, Template: this.soLuongTemplate, TemplateFooter: this.tonFooterTemplate },
      { Field: "SoLuongDaXuat", Title: "SL đã xuất", Width: 80, Sortable: false },
    ];
  }
  close() {
    this.dialogRef.close(null);
  }

  luu() {
    let lstDataVatTuChiTietCurrent = this.gridVatTuTonKho.getAllDataFromDatasource();
    this.nhapKhoVatTuTonKhoViewModel.NhapKhoVatTuChiTiets = lstDataVatTuChiTietCurrent;
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['Lưu']) }
    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
      if (result == 'Yes') {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        // this.nhapKhoVatTuTonKhoViewModel.Id = this.vatTu.data.dataItem.Id;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
          this.apiService.post<any>("TonKho/CapNhatChiTietVatTuTonKho", this.nhapKhoVatTuTonKhoViewModel).subscribe(
            () => {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật tồn kho"]));
              //this.dialogRef.close();
              this.gridVatTuTonKho.search();
              //this.getTongTonKhoCuaVatTu();
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            }
          );
        }
        else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    });
  }
  totalTon() {
    return this.gridPopup._gridDataSource == undefined ? 0 : this.gridPopup._gridDataSource.data.reduce((sum, item) => sum + (item.Loai == 1 ? item.SoLuong - item.SoLuongDaXuat : 0), 0);
  };

  extOnDataBound(dataItem: any) {
    // dataItem.Data.forEach(element => {
    //   if (element.Loai == 1) {
    //     this.tongTon += element.SoLuong - element.SoLuongDaXuat;
    //   }
    // });
    this.getTongTonKhoCuaVatTu();
  }

  getTongTonKhoCuaVatTu(){
    this.tongTonKho=null;
    this.apiService.post<any>('TonKho/GetTongTonKhoCuaVatTu',this.gridVatTuTonKho._gridQueryInfo).subscribe(resultData => {
      this.tongTonKho=resultData;
    });
  }
  soLuongChange() {
    // let lstDataVatTuChiTietCurrent = this.gridVatTuTonKho.getAllDataFromDatasource();
    // this.tongTon = 0;
    // lstDataVatTuChiTietCurrent.forEach(element => {
    //   if (element.Loai == 1) {
    //     this.tongTon += element.SoLuong - element.SoLuongDaXuat;
    //   }
    // });
  }

}
