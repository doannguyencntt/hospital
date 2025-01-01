import { Component, OnInit, Optional, Inject, ViewChild, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import icDone from '@iconify/icons-ic/done';
import { ThongTinBenhNhan } from '../quay-thuoc.model';
import icPrint from "@iconify/icons-ic/twotone-print";
import { InBangThuTienPopUpComponent } from '../in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component';
import { ApiService } from 'src/app/core/services/api.service';
import { InDonThuocPopUpComponent } from '../in-don-thuoc-pop-up/in-don-thuoc-pop-up.component';
@Component({
  selector: 'app-quay-thuoc-tim-benh-nhan-pop-up',
  templateUrl: './quay-thuoc-tim-benh-nhan-pop-up.component.html',
  styleUrls: ['./quay-thuoc-tim-benh-nhan-pop-up.component.scss']
})
export class QuayThuocTimBenhNhanPopUpComponent implements OnInit {
  icClose = icClose;
  icDone = icDone;
  icPrint = icPrint;
  Title: any = null;
  data: any[] = [];
  gridChild: any[] = [];
  benhNhan: ThongTinBenhNhan;
  constructor(private dialogRef: MatDialogRef<QuayThuocTimBenhNhanPopUpComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public dataItem: any, private apiService: ApiService, private dialog: MatDialog) {
    this.data = dataItem.Model
    this.Title = dataItem.Title
  }
  gridChildColumns2: any[] = [];
  documentType: DocumentType;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('TongGiaTriDonThuocTemplate', { static: true }) TongGiaTriDonThuocTemplate: TemplateRef<any>;
  @ViewChild('SoTienChoThanhToanTemplate', { static: true }) SoTienChoThanhToanTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild('templatePrint', { static: true }) templatePrint: TemplateRef<any>;
  @ViewChild('SoTienThuoctemplate', { static: true }) SoTienThuoctemplate: TemplateRef<any>;
  @ViewChild('TinhTrangThuoctemplate', { static: true }) TinhTrangThuoctemplate: TemplateRef<any>;
  urlGetDataChild: string = "QuayThuoc/GetDataForGridChildDTTNAsync";
  ngOnInit() {
    this.documentType = DocumentType.QuayThuoc;
    this.benhNhan = new ThongTinBenhNhan();
    this.gridChildColumns2 = [
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: false },
      { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: false },
      { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: false },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: false },
      { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: false },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 300, Sortable: false },
      { Field: "SoDienThoaiDisPlay", Title: "Điện thoại", Width: 120, Sortable: false },
      { Field: "Action", Title: "", Width: 80, Template: this.actionTemplate },
    ];

    this.gridChild = [
      { Field: "STT", Title: "#", Width: 100, Sortable: true },
      { Field: "LoaiDonThuoc", Title: "", Width: 200, Sortable: true, Hidden: true },
      { Field: "MaDon", Title: "Mã Đơn", Width: 100, Sortable: true },
      { Field: "NgayKeDon", Title: "Ngày kê đơn", Width: 200, Sortable: true },
      { Field: "DVKham", Title: "Dịch vụ khám", minWidth: 200, Sortable: true },
      { Field: "BSKham", Title: "Bác sĩ khám", Width: 200, Sortable: true },
      { Field: "SoTienDisPlay", Title: "Số tiền ", Width: 80, Sortable: true, Template: this.SoTienThuoctemplate },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 120, Sortable: true, Template: this.TinhTrangThuoctemplate },
      { Field: "", Title: "", Width: 120, Sortable: true, Template: this.templatePrint },
    ];
  }
  close(answer: any, type: any) {
    if (type == 1) {
      this.dialogRef.close(answer);
    } else {
      // this.benhNhan.MaBenhNhan = answer.BenhNhanId;
      // this.benhNhan.MaTiepNhan=answer.MaTN;
      // this.benhNhan.TrangThaiThanhToan = answer.TrangThai;
      // this.benhNhan.YeuCauTiepNhanId=answer.Id;
      this.dialogRef.close(answer);
    }

  }
  PrinAllDonThuocBenhNhan(YeuCauTiepNhanId: number) {
    var data = {
      Hosting: null,
      TiepNhanId: YeuCauTiepNhanId
    }
    if (window.location.protocol == "http:") {
      data.Hosting = "http://" + window.location.host;
    } else {
      data.Hosting = "https://" + window.location.host;
    }

    this.apiService.post<any>("QuayThuoc/InThuocBenhNhan", data).subscribe(
      resultData => {
        let dialogRef = this.dialog.open(InDonThuocPopUpComponent, {
          width: '1000px',
          data: { Model: resultData, InDonThuocDanhSachList: false, InBangKe: true, InPhieuThu: false }
        }).afterClosed().subscribe(() => { });
      }, () => { });
  }
}
