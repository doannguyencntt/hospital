import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { YeuCauDichVuKyThuat } from '../../../tiem-chung.model';

import icAddCircle from '@iconify/icons-ic/add-circle';
import { ThongTinMuiTiemComponent } from './thong-tin-mui-tiem/thong-tin-mui-tiem.component';
import { TrangThaiTiemChung } from 'src/app/shared/enum/tiem-vacxin.enum';

@Component({
    selector: 'app-thuc-hien-tiem-chung',
    templateUrl: './thuc-hien-tiem-chung.component.html',
    styleUrls: ['./thuc-hien-tiem-chung.component.scss']
})

export class ThucHienTiemChungComponent implements OnInit {
    icAddCircle = icAddCircle;

    @ViewChild(ThongTinMuiTiemComponent, { static: false }) thongTinMuiTiemChild: ThongTinMuiTiemComponent;

    @Input() documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() isTabThucHienTiemReadOnly: boolean = false;
    @Input() isLichSuTiemChung: boolean = false;
    @Input() validationErrors: any;

    constructor() { }

    ngOnInit() {
    }

    getDataThongTinTiemVacxin(){
        return this.thongTinMuiTiemChild.dataSourceThongTinMuiTiem.data;
    }

    disabledDataVacxinDaTiem(){
        if(this.thongTinMuiTiemChild.dataSourceThongTinMuiTiem != undefined 
            && this.thongTinMuiTiemChild.dataSourceThongTinMuiTiem.data.length > 0)
        {
            this.thongTinMuiTiemChild.dataSourceThongTinMuiTiem.data.forEach(element => {
                if(element.TiemChung.TrangThaiTiemChung == TrangThaiTiemChung.DaTiemChung)
                {
                    element.TiemChung.IsDaTiem = true;
                    element.IsDaTiem = true;
                }
            });
        }
    }
}