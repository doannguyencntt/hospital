import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MauXetNghiem } from '../nhan-mau-xet-nghiem.model';
import { SortDescriptor } from '@progress/kendo-data-query';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
    selector: 'app-nhan-mau-xet-nghiem-tu-choi-popup',
    templateUrl: './nhan-mau-xet-nghiem-tu-choi-popup.component.html',
    styleUrls: ['./nhan-mau-xet-nghiem-tu-choi-popup.component.scss']
})
export class NhanMauXetNghiemTuChoiPopupComponent implements OnInit {
    documentType: DocumentType = DocumentType.NhanMauXetNghiem;
    validationErrors: any;
    additionalSearchString: any;

    mauXetNghiems: MauXetNghiem[] = [];
    // lstVoucherChiTietMienGiam: VoucherChiTietMienGiam[] = [];

    urlGetDataTuChoiMau: string = 'XetNghiem/GetDanhSachKhongTiepNhanMau';
    gridTuChoiMauColumns: any[] = [];
    sortNhomXetNghiem: SortDescriptor[] = [ { field: "LoaiMauXetNghiem", dir: "asc" } ]

    icClose = icClose;

    @ViewChild('loaiMauTemplate', { static: true }) loaiMauTemplate: TemplateRef<any>;
    @ViewChild('khongDatTemplate', { static: true }) khongDatTemplate: TemplateRef<any>;
    @ViewChild('lyDoTemplate', { static: true }) lyDoTemplate: TemplateRef<any>;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private dialogRef: MatDialogRef<any>,
                private apiService: ApiService, private notificationService: NotificationService, private authService: AuthService) { }

    ngOnInit() {
        this.gridTuChoiMauColumns = [
			{ Field: "LoaiMauXetNghiem", Title: "Mẫu", Width: 100, Sortable: false, Template: this.loaiMauTemplate },
            { Field: "KhongDatChatLuong", Title: "Không đạt", Width: 100, Sortable: false, Template: this.khongDatTemplate },
            { Field: "LyDoKhongDat", Title: "Lý do", Width: 100, Sortable: false, Template: this.lyDoTemplate }
        ]

        this.additionalSearchString = `{"PhieuGoiMauXetNghiemId":"${this.data.dataItem.PhieuGoiMauXetNghiemId ? this.data.dataItem.PhieuGoiMauXetNghiemId : 0}","NhomDichVuBenhVienId":"${this.data.dataItem.NhomDichVuBenhVienId ? this.data.dataItem.NhomDichVuBenhVienId : 0}","PhienXetNghiemId":"${this.data.dataItem.PhienXetNghiemId ? this.data.dataItem.PhienXetNghiemId : 0}"}`;
    }

    onDataBoundGridTuChoiMau(event: any) {
        if(event && event.Data.length > 0) {
            // this.mauXetNghiems = event.Data;
            this.mauXetNghiems = [...event.Data];
        }
    }

    close() {
        this.dialog.closeAll();
    }

    tuChoiMau() {
        this.onValidateGridDichVuChoVoucher();

        let mauKhongDatChatLuongs = this.mauXetNghiems.filter(p => p.KhongDatChatLuong);

        if(this.validationErrors && this.validationErrors.length === 0 && mauKhongDatChatLuongs && mauKhongDatChatLuongs.length > 0) {
            this.apiService.postArray<any>(`XetNghiem/KhongTiepNhanMau`, mauKhongDatChatLuongs).subscribe(res => {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Từ chối mẫu"]));
                this.dialogRef.close('Yes');
			}, (err: ApiError) => {
				err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
			})
		} else if(!mauKhongDatChatLuongs || mauKhongDatChatLuongs.length === 0) {
            this.notificationService.showSuccess('Không từ chối bất kỳ mẫu nào.');
            this.dialogRef.close('No');
        }
    }

    onValidateGridDichVuChoVoucher() {
		this.validationErrors = [];

		if (this.mauXetNghiems && this.mauXetNghiems.some(p => !p.LyDoKhongDat && p.KhongDatChatLuong)) {
			for (const mauXetNghiem of this.mauXetNghiems.filter(p => !p.LyDoKhongDat && p.KhongDatChatLuong)) {
				const validate = {
					Field: 'LyDoKhongDat[' + this.mauXetNghiems.indexOf(mauXetNghiem) + ']',
					Message: 'Lý do yêu cầu nhập'
                };
                
				this.validationErrors.push(validate);
			}
		}
	}
}