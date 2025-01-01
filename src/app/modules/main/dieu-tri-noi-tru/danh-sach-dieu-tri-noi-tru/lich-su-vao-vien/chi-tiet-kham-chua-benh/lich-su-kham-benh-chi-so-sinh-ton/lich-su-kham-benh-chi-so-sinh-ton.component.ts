import { Component, OnInit, TemplateRef, Input, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { YeuCauKhamBenh } from 'src/app/modules/main/kham-benh/kham-benh.model';
@Component({
  selector: 'app-lich-su-kham-benh-chi-so-sinh-ton-noi-tru',
  templateUrl: './lich-su-kham-benh-chi-so-sinh-ton.component.html',
  styleUrls: ['./lich-su-kham-benh-chi-so-sinh-ton.component.scss']
})
export class LichSuKhamBenhChiSoSinhTonNoiTruComponent implements OnInit {
  icAdd = icAdd;
  icDelete = icDelete;
  icAddCircle = icAddCircle;
  icEdit = icEdit;
  icSave = icSave;
  documentType: DocumentType;
  format: string = 'n2';
  dataSourceSinhHieu: any = {
    data: [],
    total: 0
  };
  validationErrors: any;
  huyetApTamTruong: number;
  huyetApTamThu: number;
  gridSinhHieuColumns: any[] = [];
  @Input() data: any = null;
  @Input() maTiepNhanBNId: number;

  urlGetData: string = "KhamBenh/GetDataForGridAsyncChiSoSinhHieu";
  @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
  @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
  @ViewChild('nhipTimTemplate', { static: true }) nhipTimTemplate: TemplateRef<any>;
  @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
  @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
  @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
  @ViewChild('BMITemplate', { static: true }) BMITemplate: TemplateRef<any>;
  @ViewChild('glassgowTemplate', { static: true }) glassgowTemplate: TemplateRef<any>;
  @ViewChild('spO2Template', { static: true }) spO2Template: TemplateRef<any>;
  constructor() { }
  @Input() yeuCauKhamBenhId: number;
  @Input() BenhNhan: number;
  ngOnInit() {

    this.gridSinhHieuColumns = [
      { Field: "NhipTim", Title: "Mạch (nhịp/phút)", Width: 137, Template: this.nhipTimTemplate },
      { Field: "ThanNhiet", Title: "Nhiệt độ (°C)", Width: 104, Template: this.thanNhietTemplate },
      { Field: "HuyetAp", Title: "Huyết áp (mmHg)", Width: 137, Template: this.huyetApTemplate },
      { Field: "NhipTho", Title: "Nhịp thở (lần/phút)", Width: 155, Template: this.nhipThoTemplate },
      { Field: "CanNang", Title: "Cân nặng (kg)", Width: 113, Template: this.canNangTemplate },
      { Field: "ChieuCao", Title: "Chiều cao (cm)", Width: 117, Template: this.chieuCaoTemplate },
      { Field: "BmI", Title: "BMI (kg/m²)", Width: 91, Template: this.BMITemplate },
      { Field: "Glassgow", Title: "Glassgow", Width: 120, Template: this.glassgowTemplate },
      { Field: "SpO2", Title: "SpO2(%)", Width: 120, Template: this.spO2Template },
      { Field: "NhanVienThucHien", Title: "Nhân viên thực hiện", Width: 156 },
      { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 160 },
    ];
  }
}