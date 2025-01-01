import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icicdone from '@iconify/icons-ic/twotone-done';
import icicclose from '@iconify/icons-ic/twotone-close';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { FormControl } from '@angular/forms';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import icSearch from "@iconify/icons-ic/twotone-search";
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { VatTuYTeChonFilePopupComponent } from '../vat-tu-y-te-chon-file-popup/vat-tu-y-te-chon-file-popup.component';
import { ThongTinVatTuYTePopupComponent } from '../thong-tin-vat-tu-y-te-popup/thong-tin-vat-tu-y-te-popup.component';
@Component({
  selector: 'app-vat-tu-y-te-list',
  templateUrl: './vat-tu-y-te-list.component.html',
  styleUrls: ['./vat-tu-y-te-list.component.scss']
})
export class VatTuYTeListComponent implements OnInit {
  documentType: DocumentType;
  expression: boolean = false;
  icicdone = icicdone;
  icicclose = icicclose;
  icSearch = icSearch;
  icFilterList = icFilterList;
  icFileExcel = icFileExcel;
  icAdd = icAdd;
  icDelete = icDelete;
	public mySelection: number[] = [];

  searchString:any;
  gridColumns: any[] = [];
  searchCtrl = new FormControl();

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;

  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucVatTuYTe;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 120, Sortable: true, LinkDetail: true },
      { Field: "Ten", Title: "Tên Đầy Đủ", MinWidth: 200, Sortable: true },
      { Field: "TenNhomVatTu", Title: "Tên Nhóm Vật Tư", MinWidth: 200, Sortable: true },
      { Field: "TyLeBaoHiemThanhToan", Title: "Tỷ Lệ Bảo Hiểm Thanh Toán", Width: 250, Sortable: true },
      { Field: "QuyCach", Title: "Đơn vị sơ cấp", Width: 200, Sortable: true },
      { Field: "TenDonViTinh", Title: "Đơn vị thứ cấp", Width: 200, Sortable: true },
      { Field: "HeSoDinhMucDonViTinh", Title: "Hệ số định mức", Width: 200, Sortable: true },
      { Field: "NhaSanXuat", Title: "Nhà Sản Xuất", Width: 200, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước Sản Xuất", Width: 200, Sortable: true },
      { Field: "MoTa", Title: "Mô Tả", Width: 200, Sortable: true },
      { Field: "IsDisabled", Title: "Trạng thái", Width: 200, Template: this.trangThaiTemplate }
    ];
  }
  updateVatTuYTe(id: number, isDisabled: boolean) {
    let comfrim = "ngừng sử dụng";
    if (!isDisabled) comfrim = "ngừng sử dụng";
    if (isDisabled) comfrim = "sử dụng";
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfrim, "vật tư"]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          self.apiService.post("VatTu/KichHoatVatTuYTe?id=" + id).subscribe(
            () => {
              self.gridChild.search();
              if (!isDisabled)
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Ngừng sử dụng"]));
              else
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng"]));
            },
            (err: any) => {
              self.notificationService.showError(err.Message);
            });
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("VatTu/ExportVatTu", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "VatTu" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  NhapTuFileExcel(){
    this.dialog.open(VatTuYTeChonFilePopupComponent, {
      disableClose: false,
      width: '800px',
    }).afterClosed().subscribe(result => {
      if (result != undefined && result != null && result.length > 0) {
        this.dialog.open(ThongTinVatTuYTePopupComponent, {
          disableClose: false,
          width: '800px',
          data: { thongTin: result }
        }).afterClosed().subscribe(result => {
        });
      }
    });
  }
}