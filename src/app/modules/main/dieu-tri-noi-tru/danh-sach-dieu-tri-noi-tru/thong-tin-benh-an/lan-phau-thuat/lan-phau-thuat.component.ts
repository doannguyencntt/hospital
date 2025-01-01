import { Component, OnInit, TemplateRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DacĐiemTreSoSinh, LanPhauThuat } from '../thong-tin-benh-an.model';
import { GridPhauThuatThuThuatViewModel } from '../../../dieu-tri-noi-tru.model';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-lan-phau-thuat',
  templateUrl: './lan-phau-thuat.component.html',
  styleUrls: ['./lan-phau-thuat.component.scss']
})
export class ThongTinLanPhauThuatComponent implements OnInit, OnChanges  {
  @Input() dataSourceLanPhauThuats: any = [];
  gridTienSuSanKhoaColumns: any[] = [];
  icAdd = icAdd;
  icDelete = icDelete;
  icAddCircle = icAddCircle;
  icEdit = icEdit;
  icSave = icSave;
  documentType: DocumentType;
  format: string = 'n1';
  isAllowAdd: boolean = true;
  gridColumnChiSoSinhTons: any[] = [];
  huyetApTamTruong: number = 60;
  huyetApTamThu: number = 90;
  phongKhamHienTai: number = 0;
  nhipTho: number = 10;
  currentUserId: number = 0;
  current: Date = new Date();
  gridColumnLanPhauThuats: any[] = [];
  @Input() data: any = null;
  @Input() phongKhamId: number = 0;
  @Input() dataChiSoSinhTon: any = null;

  @Input() yeuCauTiepNhanId: number;

  //=====================================Tiền sử bệnh====================================================
  @ViewChild('ngayGioTemplate', { static: true }) ngayGioTemplate: TemplateRef<any>;
  @ViewChild('phuongPhapPPVoCamTemplate', { static: true }) phuongPhapPPVoCamTemplate: TemplateRef<any>;
  @ViewChild('phauThuatVienTemplate', { static: true }) phauThuatVienTemplate: TemplateRef<any>;
  @ViewChild('bacSyGMTemplate', { static: true }) bacSyGMTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @ViewChild('phuongPhapTemplate', { static: true }) phuongPhapTemplate: TemplateRef<any>;
  @ViewChild('voCamTemplate', { static: true }) voCamTemplate: TemplateRef<any>;

  @ViewChild('grid', { static: true }) grid: GridComponent;

  constructor(private dialog: MatDialog, private apiService: ApiService) {
  }

  ngOnInit() {
    if (this.yeuCauTiepNhanId != undefined) {      
      this.dataSourceLanPhauThuats;
    }
    this.gridColumnLanPhauThuats = [
      { Field: "PTTTNgayGio", Title: "NGÀY GIỜ", Width: 200, Sortable: true, Template: this.ngayGioTemplate },
      { Field: "PTTT", Title: "Phương pháp phẫu thuật ", Width: 300, Sortable: false, Template: this.phuongPhapTemplate },
      { Field: "VoCam", Title: "Phương pháp vô cảm", Width: 300, Sortable: false, Template: this.voCamTemplate },
      { Field: "PTTTPhauThuatVien", Title: "PHẪU THUẬT VIÊN", Width: 100, Sortable: true, Template: this.phauThuatVienTemplate },
      { Field: "PTTTBacSyGayMe", Title: "BÁC SỸ GÂY MÊ", Width: 150, Sortable: true, Template: this.bacSyGMTemplate },
      { Field: "Action", Title: "", Width: 80, Sortable: true, Template: this.actionTemplate }
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSourceLanPhauThuats;
  }


  refreshGrid() {
    if (this.grid != undefined) {
      this.grid.setDataSource();
    }
  }

  them() {
    let newItem = new LanPhauThuat();
    this.dataSourceLanPhauThuats.data.push(newItem);
  }

  selectionPhauThatVien(ev: any, dataItem: any) {
    if (ev != undefined && ev != null) {
      dataItem.TenPhauThuatVien = ev.DisplayName;
    }
    else {
      dataItem.TenPhauThuatVien = null;
    }
  }

  selectionBS(ev: any, dataItem: any) {
    if (ev != undefined && ev != null) {
      dataItem.TenBacSiGayMe = ev.DisplayName;
    }
    else {
      dataItem.TenBacSiGayMe = null;
    }
  }

  xoa(item: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.dataSourceLanPhauThuats.data.splice(this.dataSourceLanPhauThuats.data.findIndex(x => x == item), 1);
      }
    });
  }
}
