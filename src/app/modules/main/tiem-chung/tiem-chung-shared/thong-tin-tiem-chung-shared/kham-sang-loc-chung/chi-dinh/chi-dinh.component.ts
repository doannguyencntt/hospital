import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { YeuCauDichVuKyThuat } from '../../../../tiem-chung.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
    selector: 'app-chi-dinh',
    templateUrl: './chi-dinh.component.html',
    styleUrls: ['./chi-dinh.component.scss']
})

export class ChiDinhComponent implements OnInit {
    LuaChonChiDinh: number = 1;
    
    @Input() documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() isTabKhamLocChungReadOnly: boolean = false;
    
    constructor() { }

    ngOnInit() {
        
    }

    selectLuaChonChiDinh(event) {
        // if (event !== undefined && event != null) {
        //     switch (event) {
        //         case 1:
        //             this.nhomDichVuDangChon = EnumNhomGoiDichVu.DichVuKhamBenh;
        //             this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, EnumTypeLoadingData.View);
        //             this.huyDichVuKhamBenh(); 
        //             this.hienThiNutInChiDinh = true ;
        //             break;
        //         case 2:
        //             this.nhomDichVuDangChon = EnumNhomGoiDichVu.DichVuKyThuat
        //             this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, EnumTypeLoadingData.View);
        //             //this.huyDichVuKyThuat(); this.dichVuDonLeChecked = true; break;
        //             this.hienThiNutInChiDinh = true ;
        //             this.huyDichVuKyThuatMultiselect(); this.dichVuDonLeChecked = true; break;
        //         case 3:
        //             this.nhomDichVuDangChon = EnumNhomGoiDichVu.DichVuKyThuat
        //             this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, EnumTypeLoadingData.View);
        //             //this.huyDichVuKyThuat(); this.dichVuDonLeChecked = true; break;
        //             this.hienThiNutInChiDinh = true ;
        //             this.huyDichVuKyThuatMultiselect(); this.dichVuDonLeChecked = true; break;
        //     }
        // }
        // this.FlagDuocHuongBaoHiem = false;
        // this.validationErrors = [];
    }

    evtNgayHenTiemChanged(evt) {
        if(evt) {
            let today = new Date();
            this.thongTinBenhNhan.KhamSangLocTiemChung.NgayHenTiemMuiTiepTheo = new Date(today.getFullYear(), today.getMonth(), today.getDate() + evt);
        } else {
            this.thongTinBenhNhan.KhamSangLocTiemChung.NgayHenTiemMuiTiepTheo = null;
        }
        this.evtModelOnChange();
    }

    evtModelOnChange() {
        this.thongTinBenhNhan.isDataKhamSangLocChungChange = true;
    }
}