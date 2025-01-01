import { Component, OnInit, TemplateRef, Input, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiSoSinhTon, TienSuSanKhoa } from '../thong-tin-benh-an.model';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';

@Component({
    selector: 'app-thong-tin-tien-su-san-khoa',
    templateUrl: './thong-tin-tien-su-san-khoa.component.html',
    styleUrls: ['./thong-tin-tien-su-san-khoa.component.scss']
})
export class ThongTinTienSuSanKhoaComponent implements OnInit {
    @Input() dataSourceThongTinTienSuSanKhoas: any = null;
    // @Input() GhiChuPara: any = null;
    @Input() Para: any = null;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    
    gridTienSuSanKhoaColumns: any[] = [];
    icAdd = icAdd;
    icDelete = icDelete;
    icAddCircle = icAddCircle;
    icEdit = icEdit;
    icSave = icSave;
    documentType: DocumentType;
    format: string = 'n1';
    currentNam : number;
    

    isAllowAdd: boolean = true;
    dataSourceSinhHieu: any = {
        data: [],
        total: 0
    };
    gridColumnChiSoSinhTons: any[] = [];
    huyetApTamTruong: number = 60;
    huyetApTamThu: number = 90;
    phongKhamHienTai: number = 0;
    nhipTho: number = 10;
    currentUserId: number = 0;
    current: Date = new Date();
    gridSinhHieuColumns: any[] = [];

    @Input() data: any = null;
    @Input() phongKhamId: number = 0;
    @Input() dataChiSoSinhTon: any = null;
    @Output() thongGhiChuPara:EventEmitter<any> = new EventEmitter<any>();
    //=====================================Tiền sử bệnh====================================================
    @ViewChild('actionSoLanCoThaiTemplate', { static: true }) actionSoLanCoThaiTemplate: TemplateRef<any>;
    @ViewChild('namTemplate', { static: true }) namTemplate: TemplateRef<any>;
    @ViewChild('deduThangTemplate', { static: true }) deduThangTemplate: TemplateRef<any>;
    @ViewChild('deThieuThangTemplate', { static: true }) deThieuThangTemplate: TemplateRef<any>;
    @ViewChild('sayTemplate', { static: true }) sayTemplate: TemplateRef<any>;
    @ViewChild('hutTemplate', { static: true }) hutTemplate: TemplateRef<any>;
    @ViewChild('naoTemplate', { static: true }) naoTemplate: TemplateRef<any>;
    @ViewChild('coVacTemplate', { static: true }) coVacTemplate: TemplateRef<any>;
    @ViewChild('chuaNgoaiTCTemplate', { static: true }) chuaNgoaiTCTemplate: TemplateRef<any>;
    @ViewChild('chuaTrungTemplate', { static: true }) chuaTrungTemplate: TemplateRef<any>;
    @ViewChild('thaiChetLuuTemplate', { static: true }) thaiChetLuuTemplate: TemplateRef<any>;
    @ViewChild('conHienSongTemplate', { static: true }) conHienSongTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('phuongPhapDeTemplate', { static: true }) phuongPhapDeTemplate: TemplateRef<any>;
    @ViewChild('taiBienTemplate', { static: true }) taiBienTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    constructor( private dialog: MatDialog) { }
    ngOnInit() {
        let year = new Date();
		this.currentNam = year.getFullYear();

        this.dieuTriNoiTruModel = this.dieuTriNoiTruModel != null ? this.dieuTriNoiTruModel : new ChiTietDieuTriNoiTruViewModel();
        this.gridTienSuSanKhoaColumns = [
            { Field: "SoLanCoThai", Title: "SỐ LẦN CÓ THAI", Width: 200, Sortable: true, Template: this.actionSoLanCoThaiTemplate },
            { Field: "Nam", Title: "NĂM", Width: 80, Sortable: true, Template: this.namTemplate },
            { Field: "DeDuThang", Title: "ĐẺ ĐỦ THÁNG", Width: 100, Sortable: true, Template: this.deduThangTemplate },
            { Field: "DeThieuThang", Title: "ĐẺ THIẾU THÁNG", Width: 150, Sortable: true, Template: this.deThieuThangTemplate },
            { Field: "Say", Title: "SẨY", Width: 50, Sortable: true, Template: this.sayTemplate },
            { Field: "Hut", Title: "HÚT", Width: 50, Sortable: true, Template: this.hutTemplate },
            { Field: "Nao", Title: "NẠO", Width: 50, Sortable: true, Template: this.naoTemplate },
            { Field: "CoVac", Title: "CO-VAC", Width: 80, Sortable: true, Template: this.coVacTemplate },
            { Field: "ChuaNgoaiTC", Title: "CHỬA NGOÀI TC", Width: 130, Sortable: true, Template: this.chuaNgoaiTCTemplate },
            { Field: "ChuaTrung", Title: "CHỬA TRỨNG", Width: 150, Sortable: true, Template: this.chuaTrungTemplate },
            { Field: "ThaiChetLuu", Title: "THAI CHẾT LƯU", Width: 150, Sortable: true, Template: this.thaiChetLuuTemplate },
            { Field: "ConHienSong", Title: "CON HIỆN SỐNG", Width: 150, Sortable: true, Template: this.conHienSongTemplate },
            { Field: "CanNang", Title: "CÂN NẶNG", Width: 150, Sortable: true, Template: this.canNangTemplate },
            { Field: "PhuongPhapDe", Title: "PHƯƠNG PHÁP ĐẺ", Width: 150, Sortable: true, Template: this.phuongPhapDeTemplate },
            { Field: "TaiBien", Title: "TAI BIẾN", Width: 150, Sortable: true, Template: this.taiBienTemplate },
            { Field: "", Title: "", Width: 150, Sortable: true, Template: this.actionTemplate }
        ];
    }

    modelChange(dataGhiChuPara: any){        
        this.thongGhiChuPara.emit(dataGhiChuPara);
    }

    them() {
        let newItem = new TienSuSanKhoa();
        newItem.SoLanCoThai = this.dataSourceThongTinTienSuSanKhoas.data.length + 1;
        this.dataSourceThongTinTienSuSanKhoas.data.push(newItem);
    }  

    xoa(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceThongTinTienSuSanKhoas.data.splice(this.dataSourceThongTinTienSuSanKhoas.data.findIndex(x => x == item), 1);
            }
        });
    }
}
