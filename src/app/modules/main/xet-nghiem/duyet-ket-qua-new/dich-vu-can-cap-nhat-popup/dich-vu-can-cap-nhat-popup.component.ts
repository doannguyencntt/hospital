import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DuyetKetQuaNew } from '../duyet-ket-qua-new.model';
@Component({
  selector: 'app-dich-vu-can-cap-nhat-popup',
  templateUrl: './dich-vu-can-cap-nhat-popup.component.html',
  styleUrls: ['./dich-vu-can-cap-nhat-popup.component.scss']
})
export class DichVuCanCapNhatPopupComponent implements OnInit {
  duyetKqXetNghiemDetail = new DuyetKetQuaNew();

  icClose = icClose;
  title: string = null;
  dataUpdate: any = null;
  gridColumns: any[] = [];
  @ViewChild('nhomTemplate', { static: true }) nhomTemplate: TemplateRef<any>;
  @ViewChild('kqDuyetTemplate', { static: true }) kqDuyetTemplate: TemplateRef<any>;
  @ViewChild('damKQTemplate', { static: true }) damKQTemplate: TemplateRef<any>;
  @ViewChild('gridDichVu', { static: true }) gridDichVu: GridComponent;
  @ViewChild('tenTemplate', { static: true }) tenTemplate: TemplateRef<any>;

  validationErrors: any;
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  popupSavingData: any = null;

  documentType: DocumentType = DocumentType.DuyetKetQuaXetNghiem;

  gridDataSource: any = {
    data: [],
    total: 0
  }
  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DichVuCanCapNhatPopupComponent>
  ) { }

  ngOnInit() {
    this.duyetKqXetNghiemDetail = this.data.Model;
    this.dataUpdate = this.data.DataChiTiet;
    this.title = this.data.Title;
    this.gridColumns = [
      { Field: 'Nhom', Title: '', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
      { Field: 'Ten', Title: 'Tên', Width: 200, Sortable: false, Template: this.tenTemplate, ShowTooltip: true },
      { Field: 'GiaTriCu', Title: 'KQ Cũ', Width: 100, Sortable: false },
      { Field: 'GiaTriTuMay', Title: 'KQ Từ Máy', Width: 100, Sortable: false },
      { Field: 'GiaTriNhapTay', Title: 'KQ Nhập Tay', Width: 70, Sortable: false },
      { Field: 'GiaTriDuyet', Title: 'KQ Duyệt', Width: 100, Sortable: false, Template: this.kqDuyetTemplate },
      { Field: 'ToDamGiaTri', Title: 'Đậm KQ', Width: 60, Sortable: false, Template: this.damKQTemplate },
      { Field: 'Csbt', Title: 'CSBT', Width: 90, Sortable: false },
      { Field: 'DonVi', Title: 'ĐVT', Width: 50, Sortable: false },
    ];
    this.setDataSourceForGrid();
  }

  setDataSourceForGrid() {
    this.gridDataSource = {
      data: this.dataUpdate,
      total: this.dataUpdate.length
    };
    this.gridDichVu.gridDataSource = this.gridDataSource;
  }

  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closepopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }
  close(answer: any) {
    this.dialogRef.close(answer);
  }
  luu() {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.savingPage();
      self.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems = self.dataUpdate;
      self.apiService.post<any>("DuyetKetQuaXetNghiem/CapNhatDichVuXetNghiem", self.duyetKqXetNghiemDetail).subscribe(
        () => {
          self.closepopupSavingData();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]);
          self.notificationService.showSuccess(mess);
          self.close("OK");
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closepopupSavingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);

    }
  }
}
