import { ChangeDetectorRef, Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiService } from 'src/app/core/services/api.service';
import { CapNhatTonKhoItem } from '../duoc-pham.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';

@Component({
  selector: 'app-sua-duoc-pham-ton-kho-popup',
  templateUrl: './sua-duoc-pham-ton-kho-popup.component.html',
  styleUrls: ['./sua-duoc-pham-ton-kho-popup.component.scss']
})
export class SuaDuocPhamTonKhoPopupComponent implements OnInit {

  icClose = icClose;
  validationErrors: any;
  duocPham: any;
  capNhatTonKhoItem: CapNhatTonKhoItem = {} as CapNhatTonKhoItem;
  gridColumns: any[] = [];
  tongTon: number = 0;
  duocPhamPhanNhomDataSource:any[]=[];
  tongTonKho:number=null;
  queryInfo: LookupQueryInfo = new LookupQueryInfo();
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
  @ViewChild('duocPhamBenhVienPhanNhomTemplate', { static: true }) duocPhamBenhVienPhanNhomTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('maChungTuTemplate', { static: true }) maChungTuTemplate: TemplateRef<any>;
  @ViewChild('gridDuocPhamTonKho', { static: true }) gridDuocPhamTonKho: GridComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private cdRef: ChangeDetectorRef,
    private dialogRef: MatDialogRef<any>, private apiService: ApiService, private dialog: MatDialog,
    private notificationService: NotificationService) {
    this.duocPham = data;
    this.getDuocPhamPhanNhom();
  }

  ngOnInit() {
    let queryString = "{\"KhoId\":" + this.duocPham.data.kho.KhoId + ",\"DuocPhamId\":" + this.duocPham.data.dataItem.Id + "}";
    this.gridDuocPhamTonKho.additionalSearchString = queryString;
    this.capNhatTonKhoItem.DuocPhamId = this.duocPham.data.dataItem.Id;
    this.capNhatTonKhoItem.DuocPham = this.duocPham.data.dataItem.DuocPham;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50, Sortable: true, Template: this.sttTemplate },
      { Field: "NgayDisplay", Title: "Ngày", Width: 100, Sortable: true },
      { Field: "MaChungTu", Title: "Mã chứng từ", Width: 100, Sortable: true,Template:this.maChungTuTemplate },
      { Field: "DuocPhamBenhVienPhanNhomTen", Title: "Phân nhóm", Width: 150, Sortable: false, Template: this.duocPhamBenhVienPhanNhomTemplate },
      { Field: "SoLo", Title: "SỐ lô", Width: 80, Sortable: false, ShowTooltip: true, Template: this.soLoTemplate, },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 120, Template: this.hanSuSungTemplate },
      { Field: "MaRef", Title: "mã ref", Width: 80, Sortable: false, ShowTooltip: true, Template: this.maRefTemplate, },
      { Field: "MaVach", Title: "mã vạch", Width: 80, Sortable: false, ShowTooltip: true, Template: this.maVachTemplate, },
      { Field: "DonGiaNhap", Title: "giá nhập", Width: 100, Sortable: false, Template: this.donGiaTemplate, },
      { Field: "VAT", Title: "VAT", Width: 50, Sortable: false, ShowTooltip: true, Template: this.vATTemplate, },
      { Field: "TiLeBHYTThanhToan", Title: "tl bảo hiểm thanh toán", Width: 50, Sortable: false, ShowTooltip: true, Template: this.tiLeBHYTThanhToanTemplate, },
      { Field: "LoaiDisplay", Title: "Loại", Width: 40, Sortable: false, TemplateFooter: this.loaiFooterTemplate },
      { Field: "SoLuong", Title: "Số lượng", Width: 80, Sortable: false, Template: this.soLuongTemplate, TemplateFooter: this.tonFooterTemplate },
      { Field: "SoLuongDaXuat", Title: "SL đã xuất", Width: 80, Sortable: false }
    ];
  }
  close() {
    this.dialogRef.close(null);
  }
  getDuocPhamPhanNhom(){
    this.apiService.post<any>('NhapKhoDuocPham/GetListNhomThuoc',this.queryInfo).subscribe(resultData => {
      this.duocPhamPhanNhomDataSource=resultData;
    });
  }
  getTongTonKhoCuaDuocPham(){
    this.tongTonKho=null;
    this.apiService.post<any>('TonKho/GetTongTonKhoCuaDuocPham',this.gridDuocPhamTonKho._gridQueryInfo).subscribe(resultData => {
      this.tongTonKho=resultData;
    });
  }
  save() {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['Lưu']) }
    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
      if (result == 'Yes') {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        // this.capNhatTonKhoItem.DuocPhamId = this.duocPham.data.dataItem.Id;
        this.capNhatTonKhoItem.SoDangKy = this.duocPham.data.dataItem.SoDangKy;
        if (this.gridDuocPhamTonKho._gridDataSource.data != null && this.gridDuocPhamTonKho._gridDataSource.data != null && this.gridDuocPhamTonKho._gridDataSource.data.length > 0) {
          this.capNhatTonKhoItem.CapNhatTonKhoDuocPhamChiTiets = this.gridDuocPhamTonKho._gridDataSource.data;
        }
        this.apiService.post('TonKho/UpdateChiTietTonKhoCuaDuocPham', this.capNhatTonKhoItem).subscribe(
          resultData => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật tồn kho"]));
            //this.dialogRef.close();
            this.gridDuocPhamTonKho.search();
            //this.getTongTonKhoCuaDuocPham();
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          });
      }
    });
  }

  totalTon() {
    return this.gridDuocPhamTonKho._gridDataSource == undefined ? 0 : this.gridDuocPhamTonKho._gridDataSource.data.reduce((sum, item) => sum + (item.Loai == 1 ? item.SoLuong - item.SoLuongDaXuat : 0), 0);
  };
  extOnDataBound(dataItem: any) {
    this.getTongTonKhoCuaDuocPham();
  }
}
