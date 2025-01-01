import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DanhSachHoanThanhQueryInfo, DanhSachKhamPTHoanThanh, LichSuPTTT, TuongTrinhLai } from '../../phau-thuat-thu-thuat.model';
import { MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icicclose from '@iconify/icons-ic/twotone-close';
import icPlay from "@iconify/icons-ic/play-circle-filled";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BenhNhanDaHoanThanhPtttPopupComponent } from '../benh-nhan-da-hoan-thanh-pttt-popup/benh-nhan-da-hoan-thanh-pttt-popup.component';
import { Subscription } from 'rxjs';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SortDescriptor } from '@progress/kendo-data-query';
import { LookupItemVo } from 'src/app/shared/models/common.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-phau-thuat-thu-thuat-benh-nhan-da-phau-thuat',
    templateUrl: './phau-thuat-thu-thuat-benh-nhan-da-phau-thuat.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-benh-nhan-da-phau-thuat.component.scss']
})

export class PhauThuatThuThuatBenhNhanDaPhauThuatComponent implements OnInit {
    danhSachHoanThanhQueryInfo = new DanhSachHoanThanhQueryInfo;
    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    searchString: string;
    fromDate: any;
    formattedFromDate: any;
    toDate: any;
    formattedToDate: any;
    phongBenhVienId: any;
    gridKetQuaPhauThuatColumns: any[] = [];
    dataSourceKetQuaPhauThuat = {
        data: [],
        total: 0,
    };
    icSearch = icSearch;
    icicclose = icicclose;
    icPlay = icPlay;
    subscription: Subscription;
    popupLoadingData: any;
    query: any;
    lichSuPTTT: DanhSachKhamPTHoanThanh;
    lichSuPTTTDefault: DanhSachKhamPTHoanThanh;
    phongKhamHienTai: LookupItemVo = {
        DisplayName: null,
        KeyId: Number(this.authService.getPhongLamViecId()),
    };
    sort: SortDescriptor[] = [{
        field: "ThoiDiemHoanThanh",
        dir: 'desc'
    }];

    minDateDenNgay: Date = null;
    minDateTuNgay: Date = null;

    @ViewChild('MaTNTemplate', { static: true }) MaTNTemplate: TemplateRef<any>;
    @ViewChild('TrangThaiTemplate', { static: true }) TrangThaiTemplate: TemplateRef<any>
    @ViewChild('TuongTrinhLaiTemplate', { static: true }) TuongTrinhLaiTemplate: TemplateRef<any>
    @ViewChild('trangThaiYCKTTemplate', { static: true }) trangThaiYCKTTemplate: TemplateRef<any>
    @ViewChild('thoiDiemHoanThanhTemplate', { static: true }) thoiDiemHoanThanhTemplate: TemplateRef<any>;
    @ViewChild('thoiDiemThucHienTemplate', { static: true }) thoiDiemThucHienTemplate: TemplateRef<any>;
    @ViewChild('gridChild', { static: false }) gridChild: GridComponent;
    constructor(private dialog: MatDialog, private apiService: ApiService, private broadcastService: BroadcastService, 
                private authService: AuthService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.lichSuPTTT = new DanhSachKhamPTHoanThanh();
        this.lichSuPTTTDefault = new DanhSachKhamPTHoanThanh();

        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
    
        if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat == null) {
          this.lichSuPTTT.ThoiDiemTiepNhanTuFormat = this.minDateTuNgay;
          this.lichSuPTTT.FromDate = CommonService.formatDateTime(this.lichSuPTTT.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        if (this.lichSuPTTT.ThoiDiemTiepNhanDenFormat == null) {
          this.lichSuPTTT.ThoiDiemTiepNhanDenFormat = new Date();
          this.lichSuPTTT.ToDate = CommonService.formatDateTime(this.lichSuPTTT.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }

        this.gridKetQuaPhauThuatColumns = [
            { Field: "MaBN", Title: "Mã NB", Width: 150, Sortable: true, Template: this.MaTNTemplate },
            { Field: "HoTen", Title: "Tên NB", Width: 150, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 100, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 100, Sortable: true },
            { Field: "DoiTuong", Title: "Đối tượng", Width: 100, Sortable: true },
            { Field: "TrangThaiPTTTSearch", Title: "Trạng thái", Width: 150, Sortable: true, Template: this.trangThaiYCKTTemplate },
            { Field: "SoDichVuKhongTuongTrinh", Title: "SL DV Không thực hiện", Width: 100, Sortable: true },
            { Field: "NoiChuyenGiao", Title: "Nơi chuyển giao", Width: 150, Sortable: true },
            { Field: "ThoiDiemHoanThanh", Title: "Thời điểm hoàn thành", Width: 150, Sortable: true, Template: this.thoiDiemHoanThanhTemplate },
            { Field: "ThoiDiemThucHien", Title: "Thời điểm thực hiện", Width: 150, Sortable: true, Template: this.thoiDiemThucHienTemplate },
            { Field: "Action", Title: "", Width: 80, Template: this.TrangThaiTemplate },
            { Field: "Action", Title: "", Width: 150, Template: this.TuongTrinhLaiTemplate }
        ]
        this.getPhongBenhVienId();
    }

    ngAfterContentInit() {
        this.subscription = this.broadcastService.on("ChuyenPhongThanhCong", (event) => {
            if (event) {
                this.getPhongBenhVienId();
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }
    getPhongBenhVienId() {

        setTimeout(() => {
            this.dialog.closeAll();
        }, 1000);

        let currentAccessUser = this.authService.getAccessUser();
        if (currentAccessUser.PhongBenhVienId != 0) {
            this.phongBenhVienId = parseInt(this.authService.getPhongLamViecId());
            this.lichSuPTTT.PhongBenhVienId = this.phongBenhVienId;
            var queryString = JSON.stringify(this.lichSuPTTT);
            this.query = queryString;
            if (this.gridChild != null) {
                this.gridChild._additionalSearchString = this.query;
                this.gridChild.search();
            }
        }
    }

    onKey(event: any) {
        if (event.key === "Enter") {
            if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat == null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat == null) {
                this.TimKiemNangCao();
            }
            else if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null) {
                this.TimKiemNangCao();
            }
            else if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat == null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null) {
                this.TimKiemNangCao();
            }
            else if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat == null) {
                this.TimKiemNangCao();
            }
        }

    }

    searchChanges() {
        if (this.searchString == null || this.searchString == "" && this.lichSuPTTT.ThoiDiemTiepNhanTuFormat == null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat == null) {
            this.TimKiemNangCao();
        }
        else if (this.searchString == null || this.searchString == "" && this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null) {
            this.TimKiemNangCao();
        }
        else if (this.searchString == null || this.searchString == "" && this.lichSuPTTT.ThoiDiemTiepNhanTuFormat == null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null) {
            this.TimKiemNangCao();
        }
        else if (this.searchString == null || this.searchString == "" && this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat == null) {
            this.TimKiemNangCao();
        }
        else if (this.searchString == null || this.searchString == "" && this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat == null) {
            this.TimKiemNangCao();
        }
    }

    clearSearch() {
        this.searchString = "";
        this.gridChild.search();
    }

    thoiDiemTNChange() {
        if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat == null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat == null) {
            this.Timkiem();
        }
        else if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null) {
            this.TimKiemNangCao();
        }
        else if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat == null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null) {
            this.TimKiemNangCao();
        }
        else if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat == null) {
            this.TimKiemNangCao();
        }
    }

    Timkiem() {
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        if (this.searchString != null) {
            QueryString = this.searchString;
        }
        this.gridChild.searchString = QueryString;
        this.gridChild.search();
    }

    TimKiemNangCao() {
        if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null) {
            this.lichSuPTTT.FromDate = CommonService.formatDateTime(this.lichSuPTTT.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.lichSuPTTT.FromDate = null;
        }
        if (this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null) {
            this.lichSuPTTT.ToDate = CommonService.formatDateTime(this.lichSuPTTT.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.lichSuPTTT.ToDate = null;
        }
        if (this.searchString != null || this.searchString != "") {
            this.lichSuPTTT.SearchString = this.searchString;
        }

        this.lichSuPTTT.PhongBenhVienId = this.phongBenhVienId;
        var queryString = JSON.stringify(this.lichSuPTTT);
        // this.gridChild.searchString = null;
        this.gridChild._additionalSearchString = queryString;

        this.gridChild.search();
    }

    XemPTTTBenhNhanHoanThanh(yeuCauTiepNhanId: any, yeuCauKyThuatId: any, soLan: any, laKhongThucHien: boolean = false) {
        this.dialog.open(BenhNhanDaHoanThanhPtttPopupComponent, {
            disableClose: true,
            width: 'auto',
            height: 'auto',
            data: { yeuCauTiepNhanId, yeuCauKyThuatId, soLan, laKhongThucHien }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
            }
        });
    }

    showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
        let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";

        switch (typeLoading) {
            case EnumTypeLoadingData.View:
                mess = 'Đang tải dữ liệu...'; break;
            case EnumTypeLoadingData.Update:
                mess = 'Đang lưu dữ liệu...'; break;
            case EnumTypeLoadingData.Delete:
                mess = 'Đang xóa dữ liệu...'; break;
            default: mess = 'Đang tải dữ liệu...';
        }

        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: mess }
        });
    }

    tuongtinhLai(dataItem: any) {
        let tuongTrinhLai = new TuongTrinhLai();
        tuongTrinhLai.PhongBenhVienId = this.phongKhamHienTai.KeyId;
        tuongTrinhLai.TuongTrinhLaiTheoYeuCauDichVuKyThuatId = dataItem.TuongTrinhLaiYeuCauKyThuatIds;

        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["tường trình lại"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.apiService.post<any>("PhauThuatThuThuat/TuongTrinhLai", tuongTrinhLai).subscribe(res => {
                    // this.gridChild.search();
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tường trình lại"]));
                    window.location.reload(); //load lại trang do tab Phẫu thuật/thủ thuật không call lại
                }, (err) => {
                    this.notificationService.showError(err.Message);
                });
            }
        });
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

}
