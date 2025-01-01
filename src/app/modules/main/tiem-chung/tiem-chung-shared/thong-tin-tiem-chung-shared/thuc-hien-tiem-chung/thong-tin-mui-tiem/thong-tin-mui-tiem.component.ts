import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumTypeLoadingData, TrangThaiYeuCauDichVuKyThuat } from 'src/app/shared/enum/kham-benh.enum';
import { TrangThaiTiemChung } from 'src/app/shared/enum/tiem-vacxin.enum';
import { YeuCauDichVuKyThuat } from '../../../../tiem-chung.model';
import icHistory from '@iconify/icons-ic/twotone-history';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import icInfo from '@iconify/icons-ic/twotone-info';

@Component({
    selector: 'app-thong-tin-mui-tiem',
    templateUrl: './thong-tin-mui-tiem.component.html',
    styleUrls: ['./thong-tin-mui-tiem.component.scss']
})

export class ThongTinMuiTiemComponent implements OnInit {

    icInfo = icInfo;

    loadingDataPopup: any;
    icHistory = icHistory;
    gridThongTinMuiTiemColumns: any[] = [];
    dataSourceThongTinMuiTiem = {
        data: [],
        total: 0,
    };

    coVacxinChuaThanhToan: boolean = false;

    @ViewChild('tenVacxinTemplate', { static: true }) tenVacxinTemplate: TemplateRef<any>;
    @ViewChild('muiSoTemplate', { static: true }) muiSoTemplate: TemplateRef<any>;
    @ViewChild('viTriTiemTemplate', { static: true }) viTriTiemTemplate: TemplateRef<any>;
    @ViewChild('lieuLuongTemplate', { static: true }) lieuLuongTemplate: TemplateRef<any>;
    @ViewChild('loVacxinTemplate', { static: true }) loVacxinTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('nguoiThucHienTemplate', { static: true }) nguoiThucHienTemplate: TemplateRef<any>;
    @ViewChild('thoiGianTiemTemplate', { static: true }) thoiGianTiemTemplate: TemplateRef<any>;
    @ViewChild('nguoiChiDinhTemplate', { static: true }) nguoiChiDinhTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

    @Input() documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() isTabThucHienTiemReadOnly: boolean = false;
    @Input() isLichSuTiemChung: boolean = false;
    @Input() validationErrors: any;

    constructor(
        private authService: AuthService,
        private apiService: ApiService,
        private notificationService: NotificationService,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.gridThongTinMuiTiemColumns = [
            { Field: 'TenVacxin', Title: 'Tên Vắc xin', Width: 120, Sortable: false, Template: this.tenVacxinTemplate },
            { Field: 'MuiSo', Title: 'Mũi', Width: 30, Sortable: false, Template: this.muiSoTemplate },
            { Field: 'ViTriTiem', Title: 'Vị trí tiêm', Width: 50, Sortable: false, Template: this.viTriTiemTemplate },
            { Field: 'LieuLuong', Title: 'Liều lượng', Width: 70, Sortable: false, Template: this.lieuLuongTemplate },
            { Field: 'LoVacxin', Title: 'Lô vắcxin', Width: 80, Sortable: false, Template: this.loVacxinTemplate },
            { Field: 'TrangThai', Title: 'Trạng thái', Width: 80, Sortable: false, Template: this.trangThaiTemplate },
            { Field: 'NguoiThucHienTiemId', Title: 'Người thực hiện tiêm', Width: 100, Sortable: false, Template: this.nguoiThucHienTemplate },
            { Field: 'ThoiGianTiem', Title: 'Thời gian tiêm', Width: 100, Sortable: false, Template: this.thoiGianTiemTemplate },
            { Field: 'NguoiChiDinhId', Title: 'Người chỉ định', Width: 100, Sortable: false, Template: this.nguoiChiDinhTemplate },
            { Field: 'Action', Title: '', Width: 30, Sortable: false, Template: this.actionTemplate, Hidden: this.isTabThucHienTiemReadOnly }
        ];

        var self = this;
        setTimeout(function () {
            self.setGridMuiTiem();
        }, 100);
    }

    setGridMuiTiem() {
        let phongHienTaiId = Number(this.authService.getPhongLamViecId());
        this.coVacxinChuaThanhToan = this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats
            .filter(x => (this.isLichSuTiemChung || x.NoiThucHienId == phongHienTaiId) && x.TrangThai != TrangThaiYeuCauDichVuKyThuat.DaHuy && !x.CoThongTinThanhToan).length > 0;

        let gridData = this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats
                            .filter(x => (this.isLichSuTiemChung || x.NoiThucHienId == phongHienTaiId) && x.TrangThai != TrangThaiYeuCauDichVuKyThuat.DaHuy && x.CoThongTinThanhToan)
                            .sort((n1,n2) => (n1.TiemChung.TrangThaiTiemChung - n2.TiemChung.TrangThaiTiemChung) || (n2.TiemChung.MuiSo - n1.TiemChung.MuiSo));
        this.dataSourceThongTinMuiTiem = {
            data: gridData,
            total: gridData.length
        };
    }

    xuLyChuyenTrangThaiTiem(event, dataItem){
        if(event)
        {
            if(event == TrangThaiTiemChung.ChuaTiemChung)
            {
                this.thongTinBenhNhan.CoVacxinChuaTiem = true;
                dataItem.TiemChung.NhanVienTiemId = null;
                dataItem.TiemChung.ThoiDiemTiem = null;
            }
            else
            {
                var user = this.authService.getAccessUser();
                if(dataItem.TiemChung.NhanVienTiemId == null)
                {
                    dataItem.TiemChung.NhanVienTiemId = user.Id;
                }
                if(dataItem.TiemChung.ThoiDiemTiem == null)
                {
                    dataItem.TiemChung.ThoiDiemTiem = new Date();
                }

                var indexVacxinChuaTiem = this.dataSourceThongTinMuiTiem.data.findIndex(x => x.TiemChung.TrangThaiTiemChung == TrangThaiTiemChung.ChuaTiemChung);
                if(indexVacxinChuaTiem == -1 && !this.coVacxinChuaThanhToan)
                {
                    // xử lý api kiểm tra
                    this.apiService.get<any>('TiemChung/KiemTraTatCaVacxinDaThucHien?yeuCauKhamSangLocId=' + this.thongTinBenhNhan.KhamSangLocTiemChung.Id)
                    .subscribe(res => {
                        this.thongTinBenhNhan.CoVacxinChuaTiem = !res;
                    }, (err: any) => {
                        this.notificationService.showError(err.Message);
                    });
                }
                else
                {
                    this.thongTinBenhNhan.CoVacxinChuaTiem = true;
                }
            }
        }
    }

    xuLyHuyTiemVacxin(dataItem){
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn hủy tiêm vacxin này không?' }
            }).afterClosed().subscribe(result => {
                if (result == 'Yes') {
                    this.showPopupLoadingData();
                    this.apiService.put("TiemChung/XuLyHuyTiemVacxin?yeuCauVacxinId=" + dataItem.Id).subscribe(() => {
                        this.closePopupLoadingData();
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy tiêm vacxin"]));
                        window.location.reload();
                    }, (err: ApiError) => {
                        if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                        }
                        this.closePopupLoadingData();
                    });
                }
            });
        }
        else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
        let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
        switch (typeLoading) {
            case EnumTypeLoadingData.View:
                mess = "Đang tải dữ liệu..."; break;
            case EnumTypeLoadingData.Update:
                mess = "Đang lưu dữ liệu..."; break;
            case EnumTypeLoadingData.Delete:
                mess = "Đang xóa dữ liệu..."; break;
            case EnumTypeLoadingData.Cancel:
                mess = "Đang hủy dữ liệu..."; break;
            default: mess = "Đang tải dữ liệu...";
        }

        this.loadingDataPopup = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: mess }
        });
    }

    closePopupLoadingData() {
        if (this.loadingDataPopup) {
            this.loadingDataPopup.close();
        }
    }
}