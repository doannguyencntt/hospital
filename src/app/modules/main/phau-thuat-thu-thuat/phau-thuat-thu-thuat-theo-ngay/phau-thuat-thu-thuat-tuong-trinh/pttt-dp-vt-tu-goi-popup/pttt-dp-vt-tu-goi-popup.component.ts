import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ChiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT, ChiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet, GhiNhanGoiDuocPhamVatTuPTTTVo } from '../../../phau-thuat-thu-thuat.model';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-pttt-dp-vt-tu-goi-popup',
    templateUrl: './pttt-dp-vt-tu-goi-popup.component.html',
    styleUrls: ['./pttt-dp-vt-tu-goi-popup.component.scss']
})

export class PtttDpVtTuGoiPopupComponent implements OnInit {
    icClose = icClose;
    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    additionalSearchString: string = '';
    ghiNhanGoiDuocPhamVatTuPTTTVo: GhiNhanGoiDuocPhamVatTuPTTTVo = new GhiNhanGoiDuocPhamVatTuPTTTVo();
    urlGetDataGoiDuocPhamVatTuTrongDichVu: string = 'PhauThuatThuThuat/GetGridDataGoiDuocPhamVatTuTrongDichVu';
    urlGetTotalPagesGoiDuocPhamVatTuTrongDichVu: string = 'PhauThuatThuThuat/GetTotalPagesGoiDuocPhamVatTuTrongDichVu';
    gridColumns: any[] = [];
    checkAll: boolean = null;
    chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT: ChiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT = new ChiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT();
    validationErrors: any;

    @ViewChild('gridGoiDPVT', { static: true }) gridGoiDPVT: GridComponent;
    @ViewChild('checkBoxHeaderTemplate', { read: TemplateRef, static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
    @ViewChild('checkBoxTemplate', { read: TemplateRef, static: true }) checkBoxTemplate: TemplateRef<any>;
    @ViewChild('checkBoxKhongTinhPhiTemplate', { static: true }) checkBoxKhongTinhPhiTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('slTemplate', { static: true }) slTemplate: TemplateRef<any>;
    @ViewChild('slTonTemplate', { static: true }) slTonTemplate: TemplateRef<any>;

    groups: GroupDescriptor[] = [{ field: 'Nhom' }];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        private dialog: MatDialog,
        private apiService: ApiService,
        private authService: AuthService,
        private notificationService: NotificationService,
        public dialogRef: MatDialogRef<PtttDpVtTuGoiPopupComponent>

    ) {
        this.ghiNhanGoiDuocPhamVatTuPTTTVo.YeuCauDichVuKyThuatId = data.YeuCauDichVuKyThuatId;
        this.chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT.YeuCauTiepNhanId = data.YeuCauTiepNhanId;
    }

    ngOnInit() {
        this.gridColumns = [
            { Field: "CheckBox", Title: "", Width: 30, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
            { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "KhoDisplay", Title: "Kho sử dụng", Width: 100, Sortable: false, ShowTooltip: true },
            { Field: "Ten", Title: "Tên DP/VT", Width: 100, Sortable: false, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 30, Sortable: false },
            { Field: "SoLuongTon", Title: "SL tồn", Width: 40, Sortable: false, Template: this.slTonTemplate },
            { Field: "SoLuongKe", Title: "SL kê", Width: 40, Sortable: false, Template: this.slTemplate },
            { Field: "KhongTinhPhi", Title: "Tính phí", Width: 60, Sortable: false, Template: this.checkBoxKhongTinhPhiTemplate }
        ]

        this.setAdditionalSearchString();
    }

    setAdditionalSearchString() {
        this.additionalSearchString = JSON.stringify(this.ghiNhanGoiDuocPhamVatTuPTTTVo);
    }

    close() {
        this.dialog.closeAll();
    }

    chonDuocPhamVatTu(dataItem: any, event: any) {
        dataItem.CheckBox = event;
        let lstDataCurrent = this.gridGoiDPVT.getAllDataFromDatasource();
        if (lstDataCurrent.every(z => z.CheckBox)) {
            this.checkAll = true;
        } else {
            this.checkAll = false;
        }
    }

    chonTatCa(event: any) {
        let lstDataCurrent = this.gridGoiDPVT.getAllDataFromDatasource();
        this.checkAll = event;
        lstDataCurrent.forEach(element => {
            element.CheckBox = event;
        });
    }

    changeKhoSuDung() {
        this.setAdditionalSearchString();
        this.gridGoiDPVT._additionalSearchString = this.additionalSearchString;
        this.gridGoiDPVT.search();
    }

    popupAddingData: any = null;
    addingPage() {
        this.popupAddingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang thêm dữ liệu..." },
        });
    }

    closePopupAddingData() {
        if (this.popupAddingData != undefined && this.popupAddingData != null) {
            this.popupAddingData.close();
        }
    }

    themGoiDuocPhamVatTu() {
        let lstDataCurrent = this.gridGoiDPVT.getAllDataFromDatasource().filter(z => z.CheckBox && z.SoLuongTon >= z.SoLuongKe);
        if (lstDataCurrent.length > 0) {
            this.chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT.ChiDinhGhiNhanVatTuThuocPTTTChiTiets = [];
            lstDataCurrent.forEach(dataItem => {
                let chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet = new ChiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet();
                chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet.YeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
                chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet.YeuCauDichVuKyThuatId = this.data.YeuCauDichVuKyThuatId;
                chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet.Id = dataItem.Id;
                chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet.DichVuGhiNhanId = dataItem.DichVuGhiNhanId;
                chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet.KhoId = dataItem.KhoId;
                chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet.SoLuong = dataItem.SoLuongKe;
                chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet.KhongTinhPhi = dataItem.KhongTinhPhi == true;
                chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet.LaDuocPhamBHYT = dataItem.LaDuocPhamVatTuBHYT;
                this.chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT.ChiDinhGhiNhanVatTuThuocPTTTChiTiets.push(chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet);
            });
            // console.log("chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT: ", this.chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT)
            if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
                this.addingPage();
                this.apiService.post<any>("PhauThuatThuThuat/ThemGhiNhanThuocVatTus", this.chiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT).subscribe(
                    (res) => {
                        this.closePopupAddingData();
                        let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
                        this.notificationService.showSuccess(mess);
                        this.dialogRef.close(res);
                    },
                    (err: ApiError) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                        this.closePopupAddingData();
                    });
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }

        } else {
            this.notificationService.showError("Vui lòng chọn ít nhất 1 dược phẩm/ vật tư khi thêm.");
        }
    }
}
