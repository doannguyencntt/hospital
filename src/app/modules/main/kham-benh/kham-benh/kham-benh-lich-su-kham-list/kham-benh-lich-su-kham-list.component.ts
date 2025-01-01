import { Component, OnInit, ViewChild, TemplateRef, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { LookupItemVo } from 'src/app/shared/models/common.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { BenhVienHangDoi, YeuCauKhamBenh, SoLuongYeuCauHienTai, KetQuaSinhHieu, KhamBenh, GridLichSuKCB } from '../../kham-benh.model';
import { ScrollToService } from 'ng2-scroll-to-el';
import { LichSuKhamBenhPopupDetailComponent } from './lich-su-kham-benh-popup-detail/lich-su-kham-benh-popup-detail.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

declare const Waypoint: any;
declare var jQuery: any;

@Component({
  selector: 'app-kham-benh-lich-su-kham-list',
  templateUrl: './kham-benh-lich-su-kham-list.component.html',
  styleUrls: ['./kham-benh-lich-su-kham-list.component.scss'],
 
})
export class KhamBenhLichSuKhamListComponent implements OnInit {

  //documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  @Input() BenhNhan: number = null; // giá trị dùng để lấy thông tin lịch sử khám bệnh theo người bệnh
  @Input() tenKP: string = null;
  @Input() YeuCauTiepNhanId: number = 0;
  @Input() documentType: DocumentType = DocumentType.KhamBenh;
  urlGetDataGrid: string = "KhamBenh/GetDataForGridAsyncLichSuKhamBenh";
  urlGetTotalPageGrid: string = "KhamBenh/GetTotalPageForGridAsyncLichSuKhamBenh";
  urlGetDataGridChild: string = "KhamBenh/GetDataForGridAsyncLichSuKhamBenhChild";
  urlGetTotalPageGridChild: string = "KhamBenh/GetTotalPageForGridAsyncLichSuKhamBenhChild";
  
  urlGetDataGridBHYT: string = "KhamBenh/GetDataForGridAsyncLichSuKhamBenhBHYT";
  urlGetTotalPageGridBHYT: string = "KhamBenh/GetTotalPageForGridAsyncLichSuKhamBenhBHYT";
  @ViewChild("gridA", { static: true }) gridChildA: GridComponent; // == true goij onnit
  @ViewChild('gridA', { static: true }) grid: any;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  // @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;

  ////////////////
  searchBenhNhan: string = null;

  tabActive: string = "card0";
  templateKhoaPhong: string = null;
  tenKhoaPhong: string = null;

  // biến tạm gán value
  bacSi: string = "Nguyễn Văn Tèo";

  benhNhanHienTai = new BenhVienHangDoi();
  arrBenhNhanChuanBiKham: Array<YeuCauKhamBenh> = []
  arrDoChiSoSinhTon: any[] = [];
  _show: boolean = false;
  // documentType: DocumentType = DocumentType.KhamBenh;
  @ViewChild('chuanBiKhamActionTemplate', { static: true }) chuanBiKhamActionTemplate: TemplateRef<any>;
  @ViewChild('doiKetLuanActionTemplate', { static: true }) doiKetLuanActionTemplate: TemplateRef<any>;
  @ViewChild('detailTemplate', { static: true }) detailTemplate: TemplateRef<any>;
  @ViewChild('ChuanBiKham', { static: true }) gridChuanBiKham: GridComponent;
  @ViewChild('DangDoiKetLuan', { static: true }) gridDoiKetLuan: GridComponent;
  //========================================

  phongKhamHienTai: LookupItemVo = {
    "DisplayName": null,
    "KeyId": 0
  };

  slYeuCauHienTai: SoLuongYeuCauHienTai = new SoLuongYeuCauHienTai();

  constructor(private dialog: MatDialog) { }
  currentUser: any;
  gridColumnsBHYT: any[] = [];
  dataSourceBHYT: any = {
    data: [],
    total: 0
  }
  total: number = 0;
  ngOnInit() {
    //this.documentType = DocumentType.KhamBenh; // giá trị tạm để test
    this.benhNhanHienTai.YeuCauKhamBenh = new YeuCauKhamBenh();
    this.tenKhoaPhong = this.tenKP;
    this.benhNhanHienTai.YeuCauKhamBenh.KhamBenh = new KhamBenh();
    this.benhNhanHienTai.isShowPanelItemKhamBenh = true;
    this.benhNhanHienTai.isShowPanelItemKetLuan = true;

    this.gridColumns = [
      { Field: "ThoiDiemDangKyDisplay", Title: "Ngày khám", Width: 150, Sortable: false , Template: this.detailTemplate },
      { Field: "BaSiKham", Title: "Bác sĩ khám", Width: 150, Sortable: false },
      { Field: "BacSiKetLuan", Title: "Bác sĩ kết luận", Width: 150, Sortable: false },
      { Field: "TenDichVuKham", Title: "Tên dịch vụ khám", Width: 150, Sortable: false },
      { Field: "Phong", Title: "Phòng khám", Width: 150, Sortable: false },
      { Field: "LyDoKham", Title: "Lý do khám", Width: 150, Sortable: false },
      // { Field: "HoTen", Title: "Họ tên người bệnh", Width: 200, Sortable: false },
      { Field: "TrieuChungLamSang", Title: "Triệu chứng LS", Width: 200, Sortable: false },
      { Field: "ChuanDoanICD", Title: "Chẩn đoán ICD", Width: 250, Sortable: false },
      { Field: "CachGiaiQuyet", Title: "Cách giải quyết", Width: 250, Sortable: false }
    ];
    this.gridColumnsBHYT = [
      // { Field: "STT", Title: "STT", Width: 45, Sortable: false },
      { Field: "MaTheBHYT", Title: "Mã thẻ BHYT", Width: 150, Sortable: false },
      // { Field: "HoVaTen", Title: "Họ và tên", Width: 150, Sortable: false },
      { Field: "NgayVaoVien", Title: "Ngày vào viện", Width: 156, Sortable: false },
      { Field: "NgayRaVien", Title: "Ngày ra viện", Width: 156, Sortable: false },
      { Field: "CoSoKCB", Title: "Cơ sở KCB", Width: 180, Sortable: false },
      { Field: "KetQuaDieuTri", Title: "Kết quả điều trị", Width: 150, Sortable: false },
      { Field: "LyDoVaoVien", Title: "Lý do vào viện", Width: 130, Sortable: false },
      { Field: "TinhTrangRaVien", Title: "Tình trạng ra viện", Width: 200, Sortable: false },
    ];
  }
  detailExpand(event: any) {
    let dialogRef = this.dialog.open(LichSuKhamBenhPopupDetailComponent, {
      disableClose: false,
      width: '1500px',
      height: 'auto',
      data: event,
    });
    dialogRef.afterClosed().subscribe(result => {
    });

  }
}
