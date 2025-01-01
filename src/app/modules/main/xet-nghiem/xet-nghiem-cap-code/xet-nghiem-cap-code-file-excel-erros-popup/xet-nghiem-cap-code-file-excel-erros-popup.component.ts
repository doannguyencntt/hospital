import { Component, OnInit, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-xet-nghiem-cap-code-file-excel-erros-popup',
  templateUrl: './xet-nghiem-cap-code-file-excel-erros-popup.component.html',
  styleUrls: ['./xet-nghiem-cap-code-file-excel-erros-popup.component.scss']
})
export class XetNghiemCapCodeFileExcelErrosPopupComponent implements OnInit {
  icClose = icClose;
  gridColumns: any[] = [];
  dataNguoiBenh = {
    data: [],
    total: 0
  }
  constructor(
    private dialogRef: MatDialogRef<XetNghiemCapCodeFileExcelErrosPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "TenCongTy", Title: "Tên công ty", Width: 70, ShowTooltip: true },
      { Field: "SoHopDong", Title: "Số hợp đồng", Width: 70, ShowTooltip: true },
      { Field: "MaBN", Title: "Mã NB", Width: 60, ShowTooltip: true },
      { Field: "MaTN", Title: "Mã TN", Width: 60, ShowTooltip: true },
      { Field: "BarcodeNumber", Title: "Mã barcode", Width: 70 },
      { Field: "HoTen", Title: "Tên người bệnh", Width: 120, ShowTooltip: true },
      { Field: "NhanVienLayMauIdDisplay", Title: "Nhân viên lấy mẫu", Width: 70 },
      { Field: "ThoiGianLayMauDisplay", Title: "Thời gian lấy mẫu", Width: 120, ShowTooltip: true },
      { Field: "GioiTinhDisplay", Title: "GT", Width: 30 },
      { Field: "NamSinhDisplay", Title: "NS", Width: 30 },//Ngày tháng năm sinh
      { Field: "Error", Title: "Ghi chú", Width: 180, ShowTooltip: true },

    ];
    this.dataNguoiBenh.data = [...this.data.Data.filter((z: any) => z.IsError)];
  }
  close() {
    this.dialogRef.close();
  }
}
