import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { NhomDichVuThuongDungCreatePopupComponent } from 'src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung-create-popup/nhom-dich-vu-thuong-dung-create-popup.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { BoPhan } from 'src/app/shared/enum/bo-phan.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiDinhGoiDichVuThuongDung, DeletesViewModel } from '../../../kham-benh.model';

@Component({
  selector: 'app-lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup',
  templateUrl: './lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component.scss']
})
export class LanKhamHienTaiNhomDichVuThuongDungPopupComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;
  searchCtrl = new FormControl();

  gridColumns: any[] = [];
  gridColumnsChild: any[] = [];
  groups: GroupDescriptor[] = [{ field: 'TenNhomDichVu' }];
  documentType: DocumentType;
  boPhan: BoPhan;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('nhomDichVuTemplate', { static: true }) nhomDichVuTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('gridNhomGoiDichVu', { static: true, read: GridComponent }) gridNhomGoiDichVu: GridComponent;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LanKhamHienTaiNhomDichVuThuongDungPopupComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.documentType = this.data.DocumentType;
    this.boPhan = this.data.boPhan;

    this.gridColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Width: 180, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", Width: 150, Sortable: true }
    ];

    this.gridColumnsChild = [
      { Field: "STT", Title: "#", Width: 45, Sortable: false, Template: this.sttTemplate },
      { Field: "TenNhomDichVu", Title: "", Width: 80, Sortable: true, TemplateGroupHeader: this.nhomDichVuTemplate, Hidden: true },
      { Field: "MaDichVu", Title: "Mã DV", Width: 80, Sortable: true },
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 180, Sortable: true },
      { Field: "LoaiGia", Title: "Loại giá", Width: 80, Sortable: true },
      { Field: "SoLan", Title: "Số lượng", Width: 80, Sortable: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 150, Sortable: true, Template: this.donGiaTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Sortable: true, Template: this.thanhTienTemplate }
    ]
  }

  onKey(event) {
    if (event.key == "Enter") {
      this.gridNhomGoiDichVu.search();
    }
  }

  searchChanges(event) {
    if (event != undefined && (event == null || event == "")) {
      this.clearSearch();
    }
  }

  clearSearch() {
    this.gridNhomGoiDichVu.searchString = null;
    this.gridNhomGoiDichVu.search();
  }

  close() {
    this.dialog.closeAll();
  }

  chonGoiDichVu() {
    // cần kiểm tra validation
    let yeuCauGoiThuongDung: ChiDinhGoiDichVuThuongDung = new ChiDinhGoiDichVuThuongDung();
    yeuCauGoiThuongDung.YeuCauKhamBenhId = 0;
    yeuCauGoiThuongDung.YeuCauTiepNhanId = 0;
    yeuCauGoiThuongDung.GoiDichVuIds = this.gridNhomGoiDichVu.mySelection;
    this.apiService.post<boolean>("KhamBenh/KiemTraValidationGoiDichVuThuongDung", yeuCauGoiThuongDung)
      .subscribe(resultData => {
        this.dialogRef.close(yeuCauGoiThuongDung);
      },
        (err: ApiError) => {
          this.notificationService.showError(err.ValidationErrors[0].Message);
        });
  }

  themGoiDichVu() {
    var self = this;
    self.dialog.open(NhomDichVuThuongDungCreatePopupComponent, {
      disableClose: false,
      width: '1500px',
      data: { BoPhan: this.boPhan }
    }).afterClosed().subscribe(res => {
      if (res === "Yes") {
        this.gridNhomGoiDichVu.search();
      }
    });
  }

  xoaGoiDichVu() {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: `Bạn chắc chắn muốn xóa dịch vụ này không?`
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        let deletesViewModel: DeletesViewModel = new DeletesViewModel();
        deletesViewModel.Ids = this.gridNhomGoiDichVu.mySelection;
        this.apiService.post("NhomDichVuThuongDung/Deletes", deletesViewModel)
          .subscribe(resultData => {
            this.gridNhomGoiDichVu.search();
          },
            (err: ApiError) => {
              this.notificationService.showError(err.ValidationErrors[0].Message);
            });
      }
    })

  }
}
