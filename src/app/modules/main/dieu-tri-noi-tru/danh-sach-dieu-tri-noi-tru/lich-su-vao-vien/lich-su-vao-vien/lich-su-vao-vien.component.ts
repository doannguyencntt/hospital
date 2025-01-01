import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiTietDieuTriPopupComponent } from '../chi-tiet-dieu-tri-popup/chi-tiet-dieu-tri-popup.component';
import { ChiTietKhamChuaBenhComponent } from '../chi-tiet-kham-chua-benh/chi-tiet-kham-chua-benh.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';

@Component({
  selector: 'app-lich-su-vao-vien',
  templateUrl: './lich-su-vao-vien.component.html',
  styleUrls: ['./lich-su-vao-vien.component.scss']
})
export class LichSuVaoVienComponent implements OnInit {
  documentType: DocumentType;
  gridColumns: any[] = [];
  public yeuCauTiepNhanId: number = 0;
  urlGetDataGridAsync = "DieuTriNoiTru/GetDanhSachLichSuVaoVienForGrid";
  urlGetTotalPageGridAsync = "DieuTriNoiTru/GetTotalPagesDanhSachLichSuVaoVienForGrid";

  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  constructor(private route: ActivatedRoute,  private router: Router,
             private dialog: MatDialog) { }
  ngOnInit() {
    this.documentType = DocumentType.DanhSachDieuTriNoiTru;
    this.yeuCauTiepNhanId = this.route.snapshot.params.id;
    this.gridColumns = [
      { Field: "MaTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
      { Field: "SoBenhAnh", Title: "Số BA", Width: 150, Sortable: true },
      { Field: "ThoiGianTiepNhanDisplay", Title: "Thời gian TN", Width: 150, Sortable: true },
      { Field: "ChuanDoan", Title: "Chẩn đoán", Width: 120 },
      { Field: "BacSi", Title: "Bác sĩ", Width: 150, Sortable: true },
      { Field: "PhongKham", Title: "Phòng", Width: 150, Sortable: true }
    ];
  }

  BackToList() {
    this.router.navigateByUrl("/dieu-tri-noi-tru?holdQuery=true");
  }
  
  xemChiTiet(yeuCauTiepNhanId: any, maTiepNhan: any, KiemTraNoiTru: any, benhNhanId: any) {
    var self = this;
    if (KiemTraNoiTru) {
      self.dialog.open(ChiTietDieuTriPopupComponent, {
        disableClose: true,
        width: '1340px',
        data: { yeuCauTiepNhanId, maTiepNhan, benhNhanId }
      }).afterClosed().subscribe(r => {
        if (r == "Yes") {
        }
      });
    }
    else {
      self.dialog.open(ChiTietKhamChuaBenhComponent, {
        disableClose: true,
        width: '1200px',
        data: { yeuCauTiepNhanId, maTiepNhan, benhNhanId }
      }).afterClosed().subscribe(r => {
        if (r == "Yes") {

        }
      });
    }
  }
}
