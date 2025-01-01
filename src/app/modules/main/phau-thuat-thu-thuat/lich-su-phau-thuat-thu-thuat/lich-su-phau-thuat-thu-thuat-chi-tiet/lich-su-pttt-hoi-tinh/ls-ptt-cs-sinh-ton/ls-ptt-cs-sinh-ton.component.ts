import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-ls-ptt-cs-sinh-ton',
  templateUrl: './ls-ptt-cs-sinh-ton.component.html',
  styleUrls: ['./ls-ptt-cs-sinh-ton.component.scss']
})
export class LichSuPttCsSinhTonComponent implements OnInit {
    huyetApTamTruong: number;
    huyetApTamThu: number;
    format: string = 'n2';

    @Input() yeuCauTiepNhanId: number;

    gridChiSoSinhTonColumns: any[] = [];

    documentType: DocumentType = DocumentType.LichSuPhauThuatThuThuat;
    validationErrors: any;

    @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
    @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
    @ViewChild('nhipTimTemplate', { static: true }) nhipTimTemplate: TemplateRef<any>;
    @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
    @ViewChild('BMITemplate', { static: true }) BMITemplate: TemplateRef<any>;
    @ViewChild('glassgowTemplate', { static: true }) glassgowTemplate: TemplateRef<any>;
    @ViewChild('sPO2Template', { static: true }) sPO2Template: TemplateRef<any>;

    constructor() { }

    ngOnInit() {
        this.gridChiSoSinhTonColumns = [
            { Field: "NhipTim", Title: "Mạch (nhịp/phút)", Width: 137, Template: this.nhipTimTemplate },
            { Field: "ThanNhiet", Title: "Nhiệt độ (°C)", Width: 104, Template: this.thanNhietTemplate },
            { Field: "HuyetAp", Title: "Huyết áp (mmHg)", Width: 137, Template: this.huyetApTemplate },
            { Field: "NhipTho", Title: "Nhịp thở (lần/phút)", Width: 155, Template: this.nhipThoTemplate },
            { Field: "CanNang", Title: "Cân nặng (kg)", Width: 113, Template: this.canNangTemplate },
            { Field: "ChieuCao", Title: "Chiều cao (cm)", Width: 117, Template: this.chieuCaoTemplate },
            { Field: "BMI", Title: "BMI (kg/m²)", Width: 91, Template: this.BMITemplate },
            { Field: "Glassgow", Title: "Glassgow", Width: 120, Template: this.glassgowTemplate },
            { Field: "SpO2", Title: "SpO2(%)", Width: 120, Template: this.sPO2Template },
            { Field: "NhanVienThucHien", Title: "Nhân viên thực hiện", Width: 156 },
            { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 160 }
        ];
    }
}
