import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DanhSachKhamPTHoanThanhThucHien, LichSuPTTT, TuongTrinhLai } from '../../phau-thuat-thu-thuat.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icicclose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LookupItemVo } from 'src/app/shared/models/common.model';

@Component({
    selector: 'app-lich-su-phau-thuat-thu-thuat-list',
    templateUrl: './lich-su-phau-thuat-thu-thuat-list.component.html',
    styleUrls: ['./lich-su-phau-thuat-thu-thuat-list.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class LichSuPhauThuatThuThuatListComponent implements OnInit {
    icSearch = icSearch;
    icicclose = icicclose;
    icFileExcel = icFileExcel;
    icFilterList = icFilterList;
    fromDate: any;
    formattedFromDate: any;
    toDate: any;
    formattedToDate: any;
    searchString: string;
    lichSuPTTT: LichSuPTTT;
    gridColumns: any[] = [];
    sort: SortDescriptor[] = [{
        field: "ThoiDiemHoanThanh",
        dir: 'desc'
    }];
    phongKhamHienTai: LookupItemVo = {
        DisplayName: null,
        KeyId: Number(this.authService.getPhongLamViecId()),
    };
    baseRoute: string = "/lich-su-phau-thuat-thu-thuat";
    addtionStringDefault: string = null;
    documentType: DocumentType = DocumentType.LichSuPhauThuatThuThuat;
    validationKetLuanErrors: any;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('thoiDiemTiepNhanTemplate', { static: true }) thoiDiemTiepNhanTemplate: TemplateRef<any>;
    @ViewChild('thoiDiemThucHienTemplate', { static: true }) thoiDiemThucHienTemplate: TemplateRef<any>;
    @ViewChild('TuongTrinhLaiTemplate', { static: true }) TuongTrinhLaiTemplate: TemplateRef<any>
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('chiTietTemplate', { static: true }) chiTietTemplate: TemplateRef<any>;
    @ViewChild('thoiDiemHoanThanhTemplate', { static: true }) thoiDiemHoanThanhTemplate: TemplateRef<any>;
    constructor(private dialog: MatDialog, private router: Router,
        private apiService: ApiService,
        private authService: AuthService,
        private location: Location,
        private route: ActivatedRoute,
        private notificationService: NotificationService) { }

    ngOnInit() {
        this.lichSuPTTT = new LichSuPTTT();
        let dateNow = new Date();
        this.lichSuPTTT.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.lichSuPTTT.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null) {
            this.lichSuPTTT.FromDate = CommonService.formatDateTime(
                this.lichSuPTTT.ThoiDiemTiepNhanTuFormat,
                "dd/mm/yyyy"
            );
        } else {
            this.lichSuPTTT.FromDate = null;
        }

        if (this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null) {
            this.lichSuPTTT.ToDate = CommonService.formatDateTime(
                this.lichSuPTTT.ThoiDiemTiepNhanDenFormat,
                "dd/mm/yyyy"
            );
        } else {
            this.lichSuPTTT.ToDate = null;
        }
        var queryString = JSON.stringify(this.lichSuPTTT);
        this.addtionStringDefault = queryString;

        this.backWithSearch();
        this.gridColumns = [
            { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.chiTietTemplate },
            { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
            { Field: "HoTen", Title: "Tên Người Bệnh", Width: 180, Sortable: true },
            { Field: "NamSinh", Title: "Năm Sinh", Width: 100, Sortable: true },
            { Field: "DoiTuong", Title: "Đối Tượng", Width: 140, Sortable: true },
            // { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 100, Sortable: true },
            // { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 180, Sortable: true },
            { Field: "ThoiDiemHoanThanh", Title: "Thời điểm hoàn thành", Width: 150, Sortable: true, Template: this.thoiDiemHoanThanhTemplate },
            { Field: "ThoiDiemThucHien", Title: "Thời điểm thực hiện", Width: 150, Sortable: true, Template: this.thoiDiemThucHienTemplate },
            { Field: "ThoiDiemTiepNhan", Title: "Tiếp Nhận Lúc", Width: 190, Sortable: true, Template: this.thoiDiemTiepNhanTemplate },
            // { Field: "TrieuChungTiepNhan", Title: "Lý Do Khám Bệnh", Width: 145, Sortable: true },
            { Field: "TrangThaiPTTTSearch", Title: "Trạng Thái", Width: 140, Sortable: true, Template: this.trangThaiTemplate },
            { Field: "SoDichVuKhongTuongTrinh", Title: "SL DV Không thực hiện", Width: 100, Sortable: true },
            { Field: "NoiChuyenGiao", Title: "Nơi chuyển giao", Width: 150, Sortable: true },
            { Field: "Action", Title: "", Width: 150, Template: this.TuongTrinhLaiTemplate }
        ];
    }

    backWithSearch() {
        let hasLocalSearchString = false;

        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringLichSuPTTT");
                if (additionalSearchString != null) {

                    this.lichSuPTTT = JSON.parse(additionalSearchString);
                    if (this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != undefined && this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanTuFormat != "") {
                        this.lichSuPTTT.ThoiDiemTiepNhanTuFormat = new Date(this.lichSuPTTT.ThoiDiemTiepNhanTuFormat);
                    }
                    else {
                        this.lichSuPTTT.ThoiDiemTiepNhanTuFormat = null;
                    }
                    if (this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != undefined && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != null && this.lichSuPTTT.ThoiDiemTiepNhanDenFormat != "") {
                        this.lichSuPTTT.ThoiDiemTiepNhanDenFormat = new Date(this.lichSuPTTT.ThoiDiemTiepNhanDenFormat);
                    }
                    else {
                        this.lichSuPTTT.ThoiDiemTiepNhanDenFormat = null;

                    }
                    this.addtionStringDefault = additionalSearchString;
                    this.gridChild.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            LocalStorageHelper.removeItem("additionalSearchStringLichSuPTTT");
        }
    }

    onKey(event: any) {
        if (event.key === "Enter") {
            this.TimKiemNangCao();
        }

    }

    searchChanges(event: any) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.gridChild.searchString = null;
            // self.gridChild._additionalSearchString = null;
            self.TimKiemNangCao();
        }
    }

    clearSearch() {
        this.searchString = "";
        this.gridChild.search();
    }

    thoiDiemTNChange() {
        this.TimKiemNangCao();
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
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
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
        var queryString = JSON.stringify(this.lichSuPTTT);
        //this.gridChild.searchString = null;
        this.gridChild._additionalSearchString = queryString;
        LocalStorageHelper.setItem("additionalSearchStringLichSuPTTT", queryString);
        this.gridChild.search();
    }

    tuongtinhLai(dataItem: any) {
        let tuongTrinhLai = new TuongTrinhLai();
        tuongTrinhLai.PhongBenhVienId = dataItem.PhongBenhVienId;
        tuongTrinhLai.TuongTrinhLaiTheoYeuCauDichVuKyThuatId = dataItem.TuongTrinhLaiYeuCauKyThuatIds;

        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["tường trình lại"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.apiService.post<any>("PhauThuatThuThuat/TuongTrinhLai", tuongTrinhLai).subscribe(res => {
                    this.gridChild.search();
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tường trình lại"]));
                }, (err) => {
                    this.notificationService.showError(err.Message);
                });
            }
        });
    }

    view(id: any, laKhongThucHien: boolean = false) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.router.navigate(["/lich-su-phau-thuat-thu-thuat/chi-tiet/" + id + "/" + laKhongThucHien]);
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }


    exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>("PhauThuatThuThuat/ExportLichSuPhauThuatThuThuat", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "LichSuPhauThuatThuThuat" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            })
        } else {
            this.dialog.closeAll();
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
