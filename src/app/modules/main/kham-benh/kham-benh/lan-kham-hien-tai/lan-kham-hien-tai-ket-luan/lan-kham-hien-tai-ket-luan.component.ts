import { Component, OnInit, Input, ViewChild, TemplateRef, SimpleChanges, HostListener, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { BenhVienHangDoi, YeuCauKhamBenhICDKhac, ThongTinDichVuKhamTiepTheo, YeuCauKhamBenh, YeuCauDichVuKyThuatViewModel, XuLyCachGiaiQuyet } from '../../../kham-benh.model';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icCancel from '@iconify/icons-ic/cancel';
import icSave from '@iconify/icons-ic/outline-save';
import { AuthService } from 'src/app/core/services/auth.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ChanDoanCuaBacSiKhacPopupComponent } from '../chan-doan-cua-bac-si-khac-popup/chan-doan-cua-bac-si-khac-popup.component';
import { GiayChuyenVienPopupComponent } from '../giay-chuyen-vien-popup/giay-chuyen-vien-popup.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { NotificationComponent } from 'src/app/shared/component/dialogs/notification/notification.component';

declare var jQuery: any;
@Component({
    selector: 'app-lan-kham-hien-tai-ket-luan',
    templateUrl: './lan-kham-hien-tai-ket-luan.component.html',
    styleUrls: ['./lan-kham-hien-tai-ket-luan.component.scss']
})
export class LanKhamHienTaiKetLuanComponent implements OnInit {
    queryInfoICD: LookupQueryInfo = new LookupQueryInfo();
    queryInfoICDKhac: LookupQueryInfo = new LookupQueryInfo();
    queryInfoDichVuKyThuatBenhVien: LookupQueryInfo = new LookupQueryInfo();
    queryInfoBenhVienChuyenVien: LookupQueryInfo = new LookupQueryInfo();
    icAddCircle = icAddCircle;
    icDelete = icDelete;
    icEdit = icEdit;
    icSave = icSave;
    icMoreHoriz = icMoreHoriz;
    icCancel = icCancel;
    iCDPhuYeuCauKhamBenhId: number = 0;
    dateChuyenVienMin: Date = null;
    coLyDoChuyenVien: boolean = false;
    gridICDsPhuKhacColumns: any[] = [];
    benhNhanHienTai: BenhVienHangDoi = new BenhVienHangDoi();
    yeuCauKhamBenh: YeuCauKhamBenh = new YeuCauKhamBenh();
    yeuCauKhamBenhICDKhac: YeuCauKhamBenhICDKhac = new YeuCauKhamBenhICDKhac();
    chanDoanSoBoICDid: number = null;
    xuLyCachGiaiQuyet: XuLyCachGiaiQuyet = new XuLyCachGiaiQuyet();
    xuLyCachGiaiQuyetArray: any[] = [];
    dataSourceICDsPhuKhac: any = {
        data: [],
        total: 0
    }
    popupDeletingData: any = null;
    isSelectDuocPham: boolean = false;
    datathuoc: any;
    datavt: any;

    @Input() documentType: DocumentType = DocumentType.KhamBenh;
    @Input() validationErrors: any[];
    @Input() data: any = null;
    @Input() dataYeuCauKhamBenh: any = null;
    @Input() dataICDKhacs: any;
    @Input() dataYeuCauKhamBenhPrevious: any;

    @ViewChild('teniCDsPhuKhacTemplate', { static: true }) teniCDsPhuKhacTemplate: TemplateRef<any>;
    @ViewChild('ghiChuICDsPhuKhacTemplate', { static: true }) ghiChuICDsPhuKhacTemplate: TemplateRef<any>;
    @ViewChild('actionICDsPhuKhacTemplate', { static: true }) actionICDsPhuKhacTemplate: TemplateRef<any>;
    @ViewChild('iCDKhacs', { static: true }) gridICDsPhuKhac: GridComponent;

    thongTinDichVuKhamTiepTheo: ThongTinDichVuKhamTiepTheo = new ThongTinDichVuKhamTiepTheo();
    constructor(
        private apiService: ApiService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private authService: AuthService,
        private ref: ChangeDetectorRef,

    ) { }

    ngOnInit() {
        //this.documentType = DocumentType.KhamBenh;
        this.benhNhanHienTai = this.data;
        this.yeuCauKhamBenh = this.dataYeuCauKhamBenh;
        console.log("yeuCauKhamBenh Receive: ", this.benhNhanHienTai);
        this.dateChuyenVienMin = new Date(this.benhNhanHienTai.YeuCauTiepNhan.ThoiDiemTiepNhan); //this.benhNhanHienTai.YeuCauTiepNhan.ThoiDiemTiepNhan;
        if (this.yeuCauKhamBenh.YeuCauDichVuKyThuat == null) {
            this.yeuCauKhamBenh.YeuCauDichVuKyThuat = new YeuCauDichVuKyThuatViewModel();
        }
        this.gridICDsPhuKhacColumns = [
            { Field: "ICDsPhu", Title: "Chẩn đoán ICD kèm theo", Width: 250, Template: this.teniCDsPhuKhacTemplate },
            { Field: "GhiChu", Title: "Chẩn đoán", MinWidth: 100, Template: this.ghiChuICDsPhuKhacTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionICDsPhuKhacTemplate }
        ];
        this.iCDPhuYeuCauKhamBenhId = this.yeuCauKhamBenh.Id;

        if (this.yeuCauKhamBenh.YeuCauKhamBenhICDKhacs != []) {
            this.dataSourceICDsPhuKhac.data = this.yeuCauKhamBenh.YeuCauKhamBenhICDKhacs;
        }
        if (this.yeuCauKhamBenh.ChanDoanSoBoICDId != null) {
            this.chanDoanSoBoICDid = this.yeuCauKhamBenh.ChanDoanSoBoICDId;
        }
        this.thongTinDichVuKhamTiepTheo.YeuCauKhamBenhId = this.yeuCauKhamBenh.Id;
        this.thongTinDichVuKhamTiepTheo.YeuCauTiepNhanId = this.yeuCauKhamBenh.YeuCauTiepNhanId;
        if (this.yeuCauKhamBenh.LoaiLyDoChuyenVien == 0) {
            this.yeuCauKhamBenh.LoaiLyDoChuyenVien = 1;
        }
        //this.chonICDChinhtheoICDSoBo();
        this.chonICDKhactheoICDPhanBiet();
        this.getHuongDieuTriHangBenhVien();
        if (this.yeuCauKhamBenh.IcdchinhId != null) {
            this.queryInfoICD.ParameterDependencies = this.yeuCauKhamBenh.IcdchinhId.toString();
        }
        if (this.yeuCauKhamBenh.BenhVienChuyenVienId != null) {
            this.queryInfoBenhVienChuyenVien.ParameterDependencies = this.yeuCauKhamBenh.BenhVienChuyenVienId.toString();
        }
        if (this.yeuCauKhamBenh.YeuCauDichVuKyThuat.DichVuKyThuatBenhVienId != null) {
            this.queryInfoDichVuKyThuatBenhVien.ParameterDependencies = this.yeuCauKhamBenh.YeuCauDichVuKyThuat.DichVuKyThuatBenhVienId.toString();
        }

        if (this.yeuCauKhamBenh.CachGiaiQuyet == null) {
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
        }

    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes['dataICDKhacs'] && changes['dataICDKhacs'].previousValue != null && changes['dataICDKhacs'].previousValue != changes['dataICDKhacs'].currentValue) {
            this.dataSourceICDsPhuKhac.data = changes['dataICDKhacs'].currentValue;
        }
    }

    onChangeSetTenICDPhu(dataItem: any, rowIndex: number) {
        if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
            this.dataSourceICDsPhuKhac.data[rowIndex].TenICD = dataItem.DisplayName;
            this.dataSourceICDsPhuKhac.data[rowIndex].GhiChu = dataItem.Ten;
        }
        else {
            this.dataSourceICDsPhuKhac.data[rowIndex].TenICD = null;
            this.dataSourceICDsPhuKhac.data[rowIndex].GhiChu = null;
        }
        this.changeData();
    }

    iCDSelectionChange(dataItem: any) {
        if (dataItem != undefined && dataItem != null) {
            // if (this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs != [] && this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs.length > 0) {
            //     this.benhNhanHienTai.YeuCauKhamBenh.IsShowTextBoxLoiDan = true;
            // }
            this.yeuCauKhamBenh.TenICDChinh = dataItem.DisplayName;
            this.yeuCauKhamBenh.GhiChuICDChinh = dataItem.Ten;
            this.apiService.get<any>("KhamBenh/GetLoiDanTheoICD?iCDId=" + dataItem.KeyId).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        this.benhNhanHienTai.YeuCauKhamBenh.GhiChu = resultData;
                        if (this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs != [] && this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs.length > 0) {
                            this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs[0].GhiChu = resultData;
                        }
                    }
                    else {
                        this.benhNhanHienTai.YeuCauKhamBenh.GhiChu = null;
                    }
                });
        }
        else {
            //this.benhNhanHienTai.YeuCauKhamBenh.IsShowTextBoxLoiDan = false;
            this.yeuCauKhamBenh.TenICDChinh = null;
            this.yeuCauKhamBenh.GhiChuICDChinh = null;
            this.benhNhanHienTai.YeuCauKhamBenh.GhiChu = null;
        }
        this.changeData();
    }
    chonICDChinhtheoICDSoBo() {
        if (this.yeuCauKhamBenh.ChanDoanSoBoICDId != null) {
            if (this.yeuCauKhamBenh.IcdchinhId == null && this.yeuCauKhamBenh.GhiChuICDChinh == null
                || this.yeuCauKhamBenh.IcdchinhId == null
                || this.yeuCauKhamBenh.GhiChuICDChinh == null) {
                let model = new LookupQueryInfo();
                model.ParameterDependencies = this.yeuCauKhamBenh.ChanDoanSoBoICDId.toString();
                model.Take = 50;
                this.apiService.post<any>("KhamBenh/ICD", model).subscribe(
                    resultData => {
                        if (resultData != undefined && resultData != null) {
                            this.yeuCauKhamBenh.IcdchinhId = resultData[0].KeyId;
                            this.yeuCauKhamBenh.TenICDChinh = resultData[0].DisplayName;
                            this.yeuCauKhamBenh.GhiChuICDChinh = resultData[0].Ten;
                        }

                    });
            }

        }
    }

    chonICDKhactheoICDPhanBiet() {
        if (this.yeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets.length > 0) {
            if (this.yeuCauKhamBenh.YeuCauKhamBenhICDKhacs.length < 1) {
                let model = new LookupQueryInfo();
                model.ParameterDependencies = this.yeuCauKhamBenh.Id.toString();
                model.Take = 50;
                this.apiService.post<any>("KhamBenh/ICDKhacs", model).subscribe(
                    resultData => {
                        if (resultData != undefined && resultData != null) {
                            this.dataSourceICDsPhuKhac.data = resultData;
                            this.yeuCauKhamBenh.YeuCauKhamBenhICDKhacs = resultData;
                        }

                    });
            }

        }
    }

    themICDsPhu() {
        let yeuCauKhamBenhICDKhac = new YeuCauKhamBenhICDKhac()
        yeuCauKhamBenhICDKhac.YeuCauKhamBenhId = this.yeuCauKhamBenh.Id;
        this.dataSourceICDsPhuKhac.data.push(yeuCauKhamBenhICDKhac);
        console.log("data return: ", this.dataSourceICDsPhuKhac)
        this.changeData();

    }

    xoaICDsPhu(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.dataSourceICDsPhuKhac.data.splice(this.dataSourceICDsPhuKhac.data.findIndex((x: any) => x == item), 1);
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                this.changeData();
            }
        });
    }

    changeData() {
        this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = true;
    }

    changeDataDichVuKyThuat(dichVuKyThuatBenhVienId: any) {
        if (dichVuKyThuatBenhVienId != undefined && dichVuKyThuatBenhVienId != null) {
            this.apiService.get<any>("KhamBenh/GetChiDinhThongTinDichVuKyThuat?dichVuKyThuatBenhVienId=" + dichVuKyThuatBenhVienId).subscribe(result => {
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVu = result.DichVu;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.MaDichVu = result.Ma;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.MaGiaDichVu = result.MaGiaDichVu;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.NhomGiaDichVuKyThuatBenhVienId = result.NhomGiaDichVuKyThuatBenhVienId;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.Gia = result.Gia;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.NhomChiPhi = result.NhomChiPhi;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.LoaiDichVuKyThuat = result.LoaiDichVuKyThuat;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.NhomDichVuBenhVienId = result.NhomDichVuBenhVienId;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.TenNhomDichVu = result.TenNhomDichVuBenhVien;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.DuocHuongBaoHiem = this.benhNhanHienTai.YeuCauKhamBenh.DuocHuongBaoHiem;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.DieuTriNgoaiTru = this.benhNhanHienTai.YeuCauKhamBenh.DieuTriNgoaiTru;
                this.yeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVuHienThi = result.DisplayName;
            });
        }
        else {
            this.yeuCauKhamBenh.YeuCauDichVuKyThuat = new YeuCauDichVuKyThuatViewModel();
        }
        this.changeData();
    }

    boCheckDeXoaDieuTriNgoaiChu(event: any) {
        if (this.yeuCauKhamBenh.CachGiaiQuyet == null) {
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
        }

        if (event == false) {
            this.yeuCauKhamBenh.YeuCauDichVuKyThuat = new YeuCauDichVuKyThuatViewModel();

            // Xử lý cách giải quyết
            if (this.yeuCauKhamBenh.CachGiaiQuyet.indexOf(";")) {
                this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.DieuTriNgoaiTruStr1)) {
                        this.xuLyCachGiaiQuyetArray.splice(i, 1);
                        break;
                    }
                }
                this.yeuCauKhamBenh.CachGiaiQuyet = "";
                //this.yeuCauKhamBenh.CachGiaiQuyet = this.xuLyCachGiaiQuyetArray.join(this.yeuCauKhamBenh.CachGiaiQuyet);
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    this.yeuCauKhamBenh.CachGiaiQuyet += this.xuLyCachGiaiQuyetArray[i] + ";";
                }
                if (this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";")) {
                    this.yeuCauKhamBenh.CachGiaiQuyet = this.yeuCauKhamBenh.CachGiaiQuyet.substring(0, this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";"));
                }
            }
        } else {
            // Xử lý cách giải quyết
            this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.NhapVienStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChuyenVienStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.TuVongStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
            this.xuLyCachGiaiQuyetArray.forEach(element => {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + element;
            });
            if (this.yeuCauKhamBenh.CachGiaiQuyet.includes(this.xuLyCachGiaiQuyet.DieuTriNgoaiTruStr1) == false) {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + this.xuLyCachGiaiQuyet.DieuTriNgoaiTruStr1;
            }
            this.yeuCauKhamBenh.CoNhapVien = null;
            this.yeuCauKhamBenh.CoChuyenVien = null;
            this.yeuCauKhamBenh.CoTuVong = null;
            this.yeuCauKhamBenh.KhoaPhongNhapVienId = null;
            this.yeuCauKhamBenh.LyDoNhapVien = null;
            this.yeuCauKhamBenh.YeuCauDichVuKyThuat = new YeuCauDichVuKyThuatViewModel();
        }
        this.removeValidator();
        this.changeData();
    }

    deletingPage() {
        this.popupDeletingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang xóa dữ liệu..." },
        });
    }

    closePopupDeletingData() {
        if (this.popupDeletingData != undefined && this.popupDeletingData != null) {
            this.popupDeletingData.close();
        }
    }

    boCheckDeXoaToaThuoc(check: boolean) {
        let yeuKhamBenhModel = {
            YeuCauKhamBenhId: this.yeuCauKhamBenh.Id,
            IsKhamBenhDangKham: false
        }
        if (this.documentType == DocumentType.KhamBenhDangKham || this.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham) {
            yeuKhamBenhModel.IsKhamBenhDangKham = true;
        }

        if (this.yeuCauKhamBenh.CachGiaiQuyet == null) {
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
        }

        if (check == false) {
            if (this.yeuCauKhamBenh.CachGiaiQuyet != null) {
                // Xử lý cách giải quyết
                if (this.yeuCauKhamBenh.CachGiaiQuyet.indexOf(";")) {
                    this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
                    for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                        if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChoVeKeDonStr1)) {
                            this.xuLyCachGiaiQuyetArray.splice(i, 1);
                            break;
                        }
                    }
                    this.yeuCauKhamBenh.CachGiaiQuyet = "";
                    //this.yeuCauKhamBenh.CachGiaiQuyet = this.xuLyCachGiaiQuyetArray.join(this.yeuCauKhamBenh.CachGiaiQuyet);
                    for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                        if (this.xuLyCachGiaiQuyetArray[i] != "") {
                            this.yeuCauKhamBenh.CachGiaiQuyet += this.xuLyCachGiaiQuyetArray[i] + ";";
                        }
                    }
                    if (this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";")) {
                        this.yeuCauKhamBenh.CachGiaiQuyet = this.yeuCauKhamBenh.CachGiaiQuyet.substring(0, this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";"));
                    }
                }
            }


            this.apiService.post<any>("KhamBenh/KiemTraCoDonThuocs2?yeuCauKhamBenhId=" + this.yeuCauKhamBenh.Id).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        if (resultData == true) {
                            var self = this;
                            self.dialog.open(ConfirmComponent, {
                                disableClose: false,
                                width: '400px',
                                data: { Title: "Xác nhận", Message: "Nếu bỏ chọn kê toa sẽ xóa đơn thuốc và vật tư(nếu có) hiện tại." }
                            }).afterClosed().subscribe(result => {
                                if (result == "Yes") {
                                    if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
                                        self.deletingPage()
                                        self.apiService.post<any>("KhamBenh/XoaDonThuoc", yeuKhamBenhModel).subscribe(
                                            () => {
                                                if (self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonVTYTs.length < 0) {
                                                    self.benhNhanHienTai.YeuCauKhamBenh.IsShowGridVatTu = false;
                                                }
                                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                                                self.closePopupDeletingData();
                                            },
                                            (err: ApiError) => {
                                                self.validationErrors = err.ValidationErrors;
                                                if (err.Message != "Validation Failed") {
                                                    self.notificationService.showError(err.Message);
                                                }
                                                self.yeuCauKhamBenh.CoKeToa = true;
                                                self.closePopupDeletingData();
                                            });
                                    } else {
                                        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                                    }
                                }
                                else {
                                    this.yeuCauKhamBenh.CoKeToa = true;
                                }
                            });
                        }
                    }
                });
        }
        else {
            // Xử lý cách giải quyết
            if (this.yeuCauKhamBenh.CachGiaiQuyet.includes(this.xuLyCachGiaiQuyet.ChoVeKeDonStr1) == false) {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + this.xuLyCachGiaiQuyet.ChoVeKeDonStr1;
            }
            this.yeuCauKhamBenh.KhongKeToa = null;
            this.yeuCauKhamBenh.CoNhapVien = null;
            this.yeuCauKhamBenh.KhoaPhongNhapVienId = null;
            this.yeuCauKhamBenh.LyDoNhapVien = null;
            this.yeuCauKhamBenh.KetQuaXetNghiemCLS = null;
            this.yeuCauKhamBenh.PhuongPhapTrongDieuTri = null;
            this.yeuCauKhamBenh.CoChuyenVien = null;
            this.yeuCauKhamBenh.BenhVienChuyenVienId = null;
            this.yeuCauKhamBenh.TinhTrangBenhNhanChuyenVien = null;
            this.yeuCauKhamBenh.LoaiLyDoChuyenVien = 1;
            this.yeuCauKhamBenh.LyDoChuyenVien = null;
            this.yeuCauKhamBenh.ThoiDiemChuyenVien = new Date();
            this.yeuCauKhamBenh.NhanVienHoTongChuyenVienId = null;
            this.yeuCauKhamBenh.PhuongTienChuyenVien = null;
            this.yeuCauKhamBenh.CoTuVong = null;
        }
        //this.changeData();
        this.removeValidator();
    }

    checkKhongKeToa(event: any) {
        if (this.yeuCauKhamBenh.CachGiaiQuyet == null) {
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
        }

        if (event == true) {
            this.yeuCauKhamBenh.CoKeToa = false;
            this.yeuCauKhamBenh.CoNhapVien = null;
            this.yeuCauKhamBenh.KhoaPhongNhapVienId = null;
            this.yeuCauKhamBenh.LyDoNhapVien = null;

            this.yeuCauKhamBenh.PhuongPhapTrongDieuTri = null;
            this.yeuCauKhamBenh.CoChuyenVien = null;
            this.yeuCauKhamBenh.BenhVienChuyenVienId = null;
            this.yeuCauKhamBenh.TinhTrangBenhNhanChuyenVien = null;
            this.yeuCauKhamBenh.LoaiLyDoChuyenVien = 1;
            this.yeuCauKhamBenh.LyDoChuyenVien = null;
            this.yeuCauKhamBenh.PhuongPhapTrongDieuTri = null;
            this.yeuCauKhamBenh.KetQuaXetNghiemCLS = null;

            this.yeuCauKhamBenh.ThoiDiemChuyenVien = new Date();
            this.yeuCauKhamBenh.NhanVienHoTongChuyenVienId = null;
            this.yeuCauKhamBenh.PhuongTienChuyenVien = null;

            this.yeuCauKhamBenh.CoTuVong = null;

            // Xử lý cách giải quyết
            this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.NhapVienStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChuyenVienStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.TuVongStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
            this.xuLyCachGiaiQuyetArray.forEach(element => {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + element;
            });

            if (this.yeuCauKhamBenh.CachGiaiQuyet.includes(this.xuLyCachGiaiQuyet.ChoVeKhongToaStr1) == false) {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + this.xuLyCachGiaiQuyet.ChoVeKhongToaStr1;
            }

        } else {
            this.yeuCauKhamBenh.CoKeToa = null;

            // Xử lý cách giải quyết
            if (this.yeuCauKhamBenh.CachGiaiQuyet.indexOf(";")) {
                this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChoVeKhongToaStr1)) {
                        this.xuLyCachGiaiQuyetArray.splice(i, 1);
                        break;
                    }
                }
                this.yeuCauKhamBenh.CachGiaiQuyet = "";
                //this.yeuCauKhamBenh.CachGiaiQuyet = this.xuLyCachGiaiQuyetArray.join(this.yeuCauKhamBenh.CachGiaiQuyet);
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    this.yeuCauKhamBenh.CachGiaiQuyet += this.xuLyCachGiaiQuyetArray[i] + ";";
                }
                if (this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";")) {
                    this.yeuCauKhamBenh.CachGiaiQuyet = this.yeuCauKhamBenh.CachGiaiQuyet.substring(0, this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";"));
                }
            }
        }
        this.removeValidator();
        this.changeData();
    }

    boCheckDeXoaTaiKham() {
        if (this.yeuCauKhamBenh.CachGiaiQuyet == null) {
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
        }
        if (this.yeuCauKhamBenh.CoTaiKham == false) {
            this.yeuCauKhamBenh.CoTaiKham = null;
            this.yeuCauKhamBenh.NgayTaiKham = null;
            this.yeuCauKhamBenh.GhiChuTaiKham = null;

            // Xử lý cách giải quyết
            if (this.yeuCauKhamBenh.CachGiaiQuyet.indexOf(";")) {
                this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.HenTaiKhamStr1)) {
                        this.xuLyCachGiaiQuyetArray.splice(i, 1);
                        break;
                    }
                }
                this.yeuCauKhamBenh.CachGiaiQuyet = "";
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    this.yeuCauKhamBenh.CachGiaiQuyet += this.xuLyCachGiaiQuyetArray[i] + ";";
                }
                if (this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";")) {
                    this.yeuCauKhamBenh.CachGiaiQuyet = this.yeuCauKhamBenh.CachGiaiQuyet.substring(0, this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";"));
                }
            }
        }
        else {
            // Xử lý cách giải quyết
            this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.NhapVienStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChuyenVienStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.TuVongStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
            this.xuLyCachGiaiQuyetArray.forEach(element => {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + element;
            });
            if (this.yeuCauKhamBenh.CachGiaiQuyet.includes(this.xuLyCachGiaiQuyet.HenTaiKhamStr1) == false) {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + this.xuLyCachGiaiQuyet.HenTaiKhamStr1;
            }
            this.yeuCauKhamBenh.CoNhapVien = null;
            this.yeuCauKhamBenh.KhoaPhongNhapVienId = null;
            this.yeuCauKhamBenh.LyDoNhapVien = null;

            this.yeuCauKhamBenh.CoChuyenVien = null;
            this.yeuCauKhamBenh.BenhVienChuyenVienId = null;
            this.yeuCauKhamBenh.TinhTrangBenhNhanChuyenVien = null;
            this.yeuCauKhamBenh.LoaiLyDoChuyenVien = 1;
            this.yeuCauKhamBenh.LyDoChuyenVien = null;
            this.yeuCauKhamBenh.KetQuaXetNghiemCLS = null;
            this.yeuCauKhamBenh.PhuongPhapTrongDieuTri = null;
            this.yeuCauKhamBenh.ThoiDiemChuyenVien = new Date();
            this.yeuCauKhamBenh.NhanVienHoTongChuyenVienId = null;
            this.yeuCauKhamBenh.PhuongTienChuyenVien = null;

            this.yeuCauKhamBenh.CoTuVong = null;
        }
        this.removeValidator();
        this.changeData();
    }
    popupLoadingData: any;
    loadingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

    InGiayChuyenVien() {
        this.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            if (self.documentType == DocumentType.KhamBenhDangKham || self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham) {
                self.yeuCauKhamBenh.IsKhamBenhDangKham = true;
            }
            self.loadingPage();
            self.apiService.post<any>("KhamBenh/LuuKetLuan", self.yeuCauKhamBenh).subscribe(
                (res) => {
                    self.closePopupLoadingData();
                    self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
                    const yeuCauKhamBenhICDKhacs = [];
                    self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs.forEach(val => yeuCauKhamBenhICDKhacs.push(Object.assign({}, val)));
                    self.dataYeuCauKhamBenhPrevious.YeuCauKhamBenhICDKhacs = yeuCauKhamBenhICDKhacs;
                    self.dataYeuCauKhamBenhPrevious.CachGiaiQuyet = self.yeuCauKhamBenh.CachGiaiQuyet;

                    self.dataYeuCauKhamBenhPrevious.CoChuyenVien = self.yeuCauKhamBenh.CoChuyenVien;
                    self.dataYeuCauKhamBenhPrevious.BenhVienChuyenVienId = self.yeuCauKhamBenh.BenhVienChuyenVienId;
                    self.dataYeuCauKhamBenhPrevious.TinhTrangBenhNhanChuyenVien = self.yeuCauKhamBenh.TinhTrangBenhNhanChuyenVien;
                    self.dataYeuCauKhamBenhPrevious.LoaiLyDoChuyenVien = self.yeuCauKhamBenh.LoaiLyDoChuyenVien;
                    self.dataYeuCauKhamBenhPrevious.LyDoChuyenVien = self.yeuCauKhamBenh.LyDoChuyenVien;
                    self.dataYeuCauKhamBenhPrevious.KetQuaXetNghiemCLS = self.yeuCauKhamBenh.KetQuaXetNghiemCLS;
                    self.dataYeuCauKhamBenhPrevious.PhuongPhapTrongDieuTri = self.yeuCauKhamBenh.PhuongPhapTrongDieuTri;
                    self.dataYeuCauKhamBenhPrevious.ThoiDiemChuyenVien = self.yeuCauKhamBenh.ThoiDiemChuyenVien;
                    self.dataYeuCauKhamBenhPrevious.NhanVienHoTongChuyenVienId = self.yeuCauKhamBenh.NhanVienHoTongChuyenVienId;
                    self.dataYeuCauKhamBenhPrevious.PhuongTienChuyenVien = self.yeuCauKhamBenh.PhuongTienChuyenVien;
                    self.dataYeuCauKhamBenhPrevious.IcdchinhId = self.yeuCauKhamBenh.IcdchinhId;
                    self.dataYeuCauKhamBenhPrevious.GhiChuICDChinh = self.yeuCauKhamBenh.GhiChuICDChinh;
                    self.dataYeuCauKhamBenhPrevious.TomTatKetQuaCLS = self.yeuCauKhamBenh.TomTatKetQuaCLS;
                    self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                    self.dialog.open(GiayChuyenVienPopupComponent, {
                        disableClose: true,
                        width: '1000px',
                        data: { Model: self.benhNhanHienTai, Title: "Giấy Chuyển Tuyến" }
                    });
                },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message)
                    };
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
        // this.apiService.post("KhamBenh/LuuKetLuan", this.yeuCauKhamBenh).subscribe(
        //     () => {
        //         this.dialog.open(GiayChuyenVienPopupComponent, {
        //             disableClose: true,
        //             width: '1000px',
        //             data: { Model: this.benhNhanHienTai, Title: "Giấy Chuyển Viện" }
        //         });
        //     }, (err: ApiError) => {
        //         this.validationErrors = err.ValidationErrors;
        //     });
    }



    boCheckDeXoaNhapVien(event) {
        if (this.yeuCauKhamBenh.CachGiaiQuyet == null) {
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
        }
        let yeuKhamBenhModel = {
            YeuCauKhamBenhId: this.yeuCauKhamBenh.Id,
            IsKhamBenhDangKham: false
        }

        if (event == false) {
            this.yeuCauKhamBenh.CoNhapVien = null;
            this.yeuCauKhamBenh.KhoaPhongNhapVienId = null;
            this.yeuCauKhamBenh.LyDoNhapVien = null;

            // Xử lý cách giải quyết
            if (this.yeuCauKhamBenh.CachGiaiQuyet.indexOf(";")) {
                this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.NhapVienStr1)) {
                        this.xuLyCachGiaiQuyetArray.splice(i, 1);
                        break;
                    }
                }
                this.yeuCauKhamBenh.CachGiaiQuyet = "";
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    this.yeuCauKhamBenh.CachGiaiQuyet += this.xuLyCachGiaiQuyetArray[i] + ";";
                }
                if (this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";")) {
                    this.yeuCauKhamBenh.CachGiaiQuyet = this.yeuCauKhamBenh.CachGiaiQuyet.substring(0, this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";"));
                }
            }
        } else {
            // Xử lý cách giải quyết
            this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChoVeKeDonStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChoVeKhongToaStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.HenTaiKhamStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.DieuTriNgoaiTruStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
            this.xuLyCachGiaiQuyetArray.forEach(element => {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + element;
            });

            if (this.yeuCauKhamBenh.CachGiaiQuyet.includes(this.xuLyCachGiaiQuyet.NhapVienStr1) == false) {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + this.xuLyCachGiaiQuyet.NhapVienStr1;
            }
            if (this.yeuCauKhamBenh.CoKeToa == true) {
                if (this.datathuoc.length > 0 || this.datavt.length > 0) {
                    this.xoaDonThuoc(yeuKhamBenhModel);
                } else {
                    this.yeuCauKhamBenh.CoKeToa = null;
                }
            }

            this.yeuCauKhamBenh.KhongKeToa = null;
            this.yeuCauKhamBenh.CoTaiKham = null;
            this.yeuCauKhamBenh.NgayTaiKham = null;
            this.yeuCauKhamBenh.GhiChuTaiKham = null;
            this.yeuCauKhamBenh.CoDieuTriNgoaiTru = null;
            this.yeuCauKhamBenh.YeuCauDichVuKyThuat = new YeuCauDichVuKyThuatViewModel();
            this.yeuCauKhamBenh.CoTuVong = null;

        }
        this.changeData();
        this.removeValidator();
    }

    boCheckDeXoaChuyenVien(event) {
        if (this.yeuCauKhamBenh.CachGiaiQuyet == null) {
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
        }
        let yeuKhamBenhModel = {
            YeuCauKhamBenhId: this.yeuCauKhamBenh.Id,
            IsKhamBenhDangKham: false
        }
        if (event == false) {
            this.coLyDoChuyenVien = false;
            this.yeuCauKhamBenh.CoChuyenVien = null;
            this.yeuCauKhamBenh.BenhVienChuyenVienId = null;
            this.yeuCauKhamBenh.LyDoChuyenVien = null;
            this.yeuCauKhamBenh.KetQuaXetNghiemCLS = null;
            this.yeuCauKhamBenh.PhuongPhapTrongDieuTri = null;
            this.yeuCauKhamBenh.LoaiLyDoChuyenVien = null;
            this.yeuCauKhamBenh.TinhTrangBenhNhanChuyenVien = null;
            this.yeuCauKhamBenh.ThoiDiemChuyenVien = null;
            this.yeuCauKhamBenh.NhanVienHoTongChuyenVienId = null;
            this.yeuCauKhamBenh.PhuongTienChuyenVien = null;

            // Xử lý cách giải quyết
            if (this.yeuCauKhamBenh.CachGiaiQuyet.indexOf(";")) {
                this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChuyenVienStr1)) {
                        this.xuLyCachGiaiQuyetArray.splice(i, 1);
                        break;
                    }
                }
                this.yeuCauKhamBenh.CachGiaiQuyet = "";
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    this.yeuCauKhamBenh.CachGiaiQuyet += this.xuLyCachGiaiQuyetArray[i] + ";";
                }
                if (this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";")) {
                    this.yeuCauKhamBenh.CachGiaiQuyet = this.yeuCauKhamBenh.CachGiaiQuyet.substring(0, this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";"));
                }
            }
        }
        else {
            this.yeuCauKhamBenh.LoaiLyDoChuyenVien = 1;
            this.yeuCauKhamBenh.ThoiDiemChuyenVien = this.benhNhanHienTai.YeuCauTiepNhan.ThoiDiemTiepNhan;
            this.apiService.post<any>("KhamBenh/GetPhuongPhapKyThuatDieuTri?yeuCauKhamBenhId=" + this.yeuCauKhamBenh.Id).subscribe(
                (res) => {
                    if (res != undefined && res != null) {
                        this.yeuCauKhamBenh.PhuongPhapTrongDieuTri = res;
                    }
                });
            // Xử lý cách giải quyết
            this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChoVeKeDonStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChoVeKhongToaStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.HenTaiKhamStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.DieuTriNgoaiTruStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
            this.xuLyCachGiaiQuyetArray.forEach(element => {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + element;
            });

            if (this.yeuCauKhamBenh.CachGiaiQuyet.includes(this.xuLyCachGiaiQuyet.ChuyenVienStr1) == false) {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + this.xuLyCachGiaiQuyet.ChuyenVienStr1;
            }

            if (this.yeuCauKhamBenh.CoKeToa == true) {
                if (this.datathuoc.length > 0 || this.datavt.length > 0) {
                    this.xoaDonThuoc(yeuKhamBenhModel);
                } else {
                    this.yeuCauKhamBenh.CoKeToa = null;
                }
            }

            this.yeuCauKhamBenh.KhongKeToa = null;
            this.yeuCauKhamBenh.CoTaiKham = null;
            this.yeuCauKhamBenh.NgayTaiKham = null;
            this.yeuCauKhamBenh.GhiChuTaiKham = null;
            this.yeuCauKhamBenh.CoDieuTriNgoaiTru = null;
            this.yeuCauKhamBenh.YeuCauDichVuKyThuat = new YeuCauDichVuKyThuatViewModel();
            this.yeuCauKhamBenh.CoTuVong = null;

        }
        this.removeValidator();
        this.changeData();
    }
    coCheckTuVong(event) {

        if (this.yeuCauKhamBenh.CachGiaiQuyet == null) {
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
        }
        let yeuKhamBenhModel = {
            YeuCauKhamBenhId: this.yeuCauKhamBenh.Id,
            IsKhamBenhDangKham: false
        }
        if (event == true) {


            // Xử lý cách giải quyết
            this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChoVeKeDonStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChoVeKhongToaStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.HenTaiKhamStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.DieuTriNgoaiTruStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.NhapVienStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.ChuyenVienStr1)) {
                    this.xuLyCachGiaiQuyetArray.splice(i, 1);
                    break;
                }
            }
            this.yeuCauKhamBenh.CachGiaiQuyet = "";
            this.xuLyCachGiaiQuyetArray.forEach(element => {
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + element;
            });

            if (this.yeuCauKhamBenh.CachGiaiQuyet.includes(this.xuLyCachGiaiQuyet.TuVongStr1) == false) {
                this.yeuCauKhamBenh.CachGiaiQuyet = "";
                let format = this.yeuCauKhamBenh.CachGiaiQuyet != null && this.yeuCauKhamBenh.CachGiaiQuyet != "" ? "; " : this.yeuCauKhamBenh.CachGiaiQuyet;
                this.yeuCauKhamBenh.CachGiaiQuyet += format + this.xuLyCachGiaiQuyet.TuVongStr1;
            }
            if (this.yeuCauKhamBenh.CoKeToa == true) {
                if (this.datathuoc.length > 0 || this.datavt.length > 0) {
                    this.xoaDonThuoc(yeuKhamBenhModel);
                } else {
                    this.yeuCauKhamBenh.CoKeToa = null;
                }
            }
            this.yeuCauKhamBenh.KhongKeToa = null;
            this.yeuCauKhamBenh.CoTaiKham = null;
            this.yeuCauKhamBenh.NgayTaiKham = null;
            this.yeuCauKhamBenh.GhiChuTaiKham = null;
            this.yeuCauKhamBenh.CoDieuTriNgoaiTru = null;
            this.yeuCauKhamBenh.YeuCauDichVuKyThuat = new YeuCauDichVuKyThuatViewModel();
            this.yeuCauKhamBenh.CoNhapVien = null;
            this.yeuCauKhamBenh.KhoaPhongNhapVienId = null;
            this.yeuCauKhamBenh.LyDoNhapVien = null;

            this.yeuCauKhamBenh.CoChuyenVien = null;
            this.yeuCauKhamBenh.BenhVienChuyenVienId = null;
            this.yeuCauKhamBenh.TinhTrangBenhNhanChuyenVien = null;
            this.yeuCauKhamBenh.LoaiLyDoChuyenVien = 1;
            this.yeuCauKhamBenh.LyDoChuyenVien = null;
            this.yeuCauKhamBenh.KetQuaXetNghiemCLS = null;
            this.yeuCauKhamBenh.PhuongPhapTrongDieuTri = null;

            this.yeuCauKhamBenh.ThoiDiemChuyenVien = new Date();
            this.yeuCauKhamBenh.NhanVienHoTongChuyenVienId = null;
            this.yeuCauKhamBenh.PhuongTienChuyenVien = null;


        } else {
            // Xử lý cách giải quyết
            if (this.yeuCauKhamBenh.CachGiaiQuyet.indexOf(";")) {
                this.xuLyCachGiaiQuyetArray = this.yeuCauKhamBenh.CachGiaiQuyet.trim().split(";");
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    if (this.xuLyCachGiaiQuyetArray[i].includes(this.xuLyCachGiaiQuyet.TuVongStr1)) {
                        this.xuLyCachGiaiQuyetArray.splice(i, 1);
                        break;
                    }
                }
                this.yeuCauKhamBenh.CachGiaiQuyet = "";
                for (let i = 0; i < this.xuLyCachGiaiQuyetArray.length; i++) {
                    this.yeuCauKhamBenh.CachGiaiQuyet += this.xuLyCachGiaiQuyetArray[i] + ";";
                }
                if (this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";")) {
                    this.yeuCauKhamBenh.CachGiaiQuyet = this.yeuCauKhamBenh.CachGiaiQuyet.substring(0, this.yeuCauKhamBenh.CachGiaiQuyet.lastIndexOf(";"));
                }
            }
        }
        this.removeValidator();
        this.changeData();
    }

    xoaDonThuoc(model: any) {
        this.apiService.post<any>("KhamBenh/KiemTraDonThuocDaXuatHayDaThanhToan", model).subscribe(
            (res) => {
                if (!res) {
                    this.dialog.open(NotificationComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "THÔNG BÁO", Message: "Hiện tại có đơn thuốc/vật tư đã xuất/thanh toán. Vui lòng hủy phiếu xuất/thanh toán trước khi chuyển cách giải quyết." }
                    }).afterClosed().subscribe(result => {
                        if (this.yeuCauKhamBenh.CoNhapVien == true) {
                            this.yeuCauKhamBenh.CoNhapVien = null;
                        }
                        if (this.yeuCauKhamBenh.CoChuyenVien == true) {
                            this.yeuCauKhamBenh.CoChuyenVien = null;
                        }
                        if (this.yeuCauKhamBenh.CoTuVong == true) {
                            this.yeuCauKhamBenh.CoTuVong = null;
                        }
                    });
                } else {
                    this.deletingPage()
                    this.apiService.post<any>("KhamBenh/XoaDonThuoc", model).subscribe(
                        () => {
                            this.yeuCauKhamBenh.CoKeToa = null;
                            if (this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonVTYTs.length < 0) {
                                this.benhNhanHienTai.YeuCauKhamBenh.IsShowGridVatTu = false;
                            }
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                            this.closePopupDeletingData();
                        },
                        (err: ApiError) => {
                            this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                this.notificationService.showError(err.Message);
                            }
                            this.yeuCauKhamBenh.CoKeToa = true;
                            // if (this.yeuCauKhamBenh.CoNhapVien == true) {
                            //     this.yeuCauKhamBenh.CoNhapVien = null;
                            // }
                            // if (this.yeuCauKhamBenh.CoChuyenVien == true) {
                            //     this.yeuCauKhamBenh.CoChuyenVien = null;
                            // }
                            // if (this.yeuCauKhamBenh.CoTuVong == true) {
                            //     this.yeuCauKhamBenh.CoTuVong = null;
                            // }
                            this.closePopupDeletingData();
                        });
                }
            },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.yeuCauKhamBenh.CoKeToa = true;
                this.closePopupDeletingData();
            });
    }
    xemChanDoan() {
        this.dialog.open(ChanDoanCuaBacSiKhacPopupComponent, {
            disableClose: false,
            width: '1000px',
            data: { Model: this.yeuCauKhamBenh, Title: "" }
        }).afterClosed().subscribe(() => {
        });
    }
    selectChangeKhoa(event: any) {
        //console.log(event);
        if (event != undefined && event != null) {
            this.yeuCauKhamBenh.TenKhoaPhongNhapVien = event.DisplayName;
        }
        this.changeData();
    }

    getHuongDieuTriHangBenhVien() {
        if (this.yeuCauKhamBenh.BenhVienChuyenVienId != null) {
            this.apiService.post<any>("KhamBenh/GetBenhViens?benhVienId=" + this.yeuCauKhamBenh.BenhVienChuyenVienId).subscribe(
                resultData => {
                    if (this.benhNhanHienTai.YeuCauTiepNhan.BenhVienHienTai.HangBenhVien < resultData.HangBenhVien) {
                        this.coLyDoChuyenVien = true;
                    }
                })
        }
    }

    selectChangeBenhVien(event: any) {
        if (event != undefined && event != null) {
            this.yeuCauKhamBenh.TenBenhVienChuyenVien = event.DisplayName;
            let benhVienId = event.KeyId;
            this.apiService.post<any>("KhamBenh/GetBenhViens?benhVienId=" + benhVienId).subscribe(
                resultData => {
                    if (resultData != undefined && resultData != null) {
                        //console.log(resultData);
                        if (this.benhNhanHienTai.YeuCauTiepNhan.BenhVienHienTai != null
                            && this.benhNhanHienTai.YeuCauTiepNhan.BenhVienHienTai.HangBenhVien < resultData.HangBenhVien) {
                            this.coLyDoChuyenVien = true;
                        }
                    }
                })
        } else {
            this.coLyDoChuyenVien = false;
            this.yeuCauKhamBenh.LoaiLyDoChuyenVien = 1;
            this.yeuCauKhamBenh.TinhTrangBenhNhanChuyenVien = null;
            //this.yeuCauKhamBenh.ThoiDiemChuyenVien = null;
            this.yeuCauKhamBenh.LyDoChuyenVien = null;
            this.yeuCauKhamBenh.KetQuaXetNghiemCLS = null;
            this.yeuCauKhamBenh.PhuongPhapTrongDieuTri = null;
            this.yeuCauKhamBenh.NhanVienHoTongChuyenVienId = null;
            this.yeuCauKhamBenh.PhuongTienChuyenVien = null;

        }
        this.removeValidator();
        this.changeData();
    }
    selectChangeNhanVienHoTong(event: any) {
        if (event != undefined && event != null) {
            this.yeuCauKhamBenh.NhanVienHoTongChuyenVienId = event.KeyId;
            this.yeuCauKhamBenh.HoTenNhanVienHoTong = event.TenNhanVien;
        } else {
            this.yeuCauKhamBenh.NhanVienHoTongChuyenVienId = undefined;
            this.yeuCauKhamBenh.HoTenNhanVienHoTong = null;
        }
        this.removeValidator();
        this.changeData();
    }

    scrollTo(element) {
        jQuery('.sidenav-content').animate({ scrollTop: jQuery('#' + element).position().top + 85 });
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        var self = this;

        // ctrl + F7
        if (event.ctrlKey && event.keyCode == 118) {
            event.preventDefault();
            // if (self.yeuCauKhamBenh.CoNhapVien != true && !self.yeuCauKhamBenh.CoChuyenVien && !self.yeuCauKhamBenh.CoTuVong) {
            //     self.yeuCauKhamBenh.CoKeToa = true;
            //     self.boCheckDeXoaToaThuoc(true);
            // }

            //BVHD-3575
            if(self.yeuCauKhamBenh.LaChiDinhTuNoiTru != true)
            {
                self.yeuCauKhamBenh.CoKeToa = true;
                self.boCheckDeXoaToaThuoc(true);
                setTimeout(function () {
                    self.scrollTo('ChoVeKeDonThuoc');
                }, 100);
            }
        }

        //ctrl + F8
        if (event.ctrlKey && event.keyCode == 119) {
            event.preventDefault();
            // if (self.yeuCauKhamBenh.CoNhapVien != true && !self.yeuCauKhamBenh.CoChuyenVien && !self.yeuCauKhamBenh.CoTuVong) {
            //     self.yeuCauKhamBenh.CoTaiKham = true;
            // }
            self.yeuCauKhamBenh.CoTaiKham = true;

            setTimeout(function () {
                self.scrollTo('HenTaiKham');
                self.boCheckDeXoaTaiKham();
            }, 100);
        }

        //ctrl + F9
        if (event.ctrlKey && event.keyCode == 120) {
            event.preventDefault();
            // if (self.yeuCauKhamBenh.CoNhapVien != true && !self.yeuCauKhamBenh.CoChuyenVien && !self.yeuCauKhamBenh.CoTuVong) {
            //     self.yeuCauKhamBenh.CoDieuTriNgoaiTru = true;
            // }
            self.yeuCauKhamBenh.CoDieuTriNgoaiTru = true;

            setTimeout(function () {
                self.scrollTo('CoDieuTriNgoaiTru');
                self.boCheckDeXoaDieuTriNgoaiChu(true);
            }, 100);
        }

        //ctrl + F10
        if (event.ctrlKey && event.keyCode == 121) {
            event.preventDefault();
            // if (self.yeuCauKhamBenh.CoKeToa != true && !self.yeuCauKhamBenh.CoTaiKham && !self.yeuCauKhamBenh.CoTuVong) {
            //     self.yeuCauKhamBenh.CoNhapVien = true;
            //     self.boCheckDeXoaNhapVien(self.yeuCauKhamBenh.CoNhapVien);
            // }

            //BVHD-3575
            if (self.yeuCauKhamBenh.LaChiDinhTuNoiTru != true) {
                self.yeuCauKhamBenh.CoNhapVien = true;
                self.boCheckDeXoaNhapVien(self.yeuCauKhamBenh.CoNhapVien);
                setTimeout(function () {
                    self.scrollTo('NhapVien');
                }, 100);
            }
        }

        //ctrl + F11
        if (event.ctrlKey && event.keyCode == 122) {
            event.preventDefault();
            // if (self.yeuCauKhamBenh.CoKeToa != true && !self.yeuCauKhamBenh.CoTaiKham && !self.yeuCauKhamBenh.CoTuVong) {
            //     self.yeuCauKhamBenh.CoChuyenVien = true;
            //     self.boCheckDeXoaChuyenVien(self.yeuCauKhamBenh.CoChuyenVien);
            // }
            self.yeuCauKhamBenh.CoChuyenVien = true;
            self.boCheckDeXoaChuyenVien(self.yeuCauKhamBenh.CoChuyenVien);
            setTimeout(function () {
                self.scrollTo('ChuyenVien');
            }, 100);
        }

        //ctrl + F12
        if (event.ctrlKey && event.keyCode == 123) {
            event.preventDefault();
            // if (self.yeuCauKhamBenh.CoKeToa != true && !self.yeuCauKhamBenh.CoTaiKham) {
            //     self.yeuCauKhamBenh.CoTuVong = true;
            //     self.coCheckTuVong(self.yeuCauKhamBenh.CoTuVong);
            // }
            self.yeuCauKhamBenh.CoTuVong = true;
            self.coCheckTuVong(self.yeuCauKhamBenh.CoTuVong);
            setTimeout(function () {
                self.scrollTo('CoTuVong');
            }, 100);
        }
    }
    removeValidator() {
        if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
            let lenValidate = this.validationErrors.length;
            if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
                for (let i = 0; i < lenValidate; i++) {
                    if (this.validationErrors[i].Field === "NgayTaiKham") {
                        this.validationErrors.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                return null;
            }
        }
        if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
            let lenValidate = this.validationErrors.length;
            if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
                for (let i = 0; i < lenValidate; i++) {
                    if (this.validationErrors[i].Field === "YeuCauDichVuKyThuat.SoLan") {
                        this.validationErrors.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                return null;
            }
        }
        if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
            let lenValidate = this.validationErrors.length;
            if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
                for (let i = 0; i < lenValidate; i++) {
                    if (this.validationErrors[i].Field === "YeuCauDichVuKyThuat.ThoiDiemBatDauDieuTri") {
                        this.validationErrors.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                return null;
            }
        }
        if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
            let lenValidate = this.validationErrors.length;
            if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
                for (let i = 0; i < lenValidate; i++) {
                    if (this.validationErrors[i].Field === "YeuCauDichVuKyThuat.DichVuKyThuatBenhVienId") {
                        this.validationErrors.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                return null;
            }
        }
        if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
            let lenValidate = this.validationErrors.length;
            if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
                for (let i = 0; i < lenValidate; i++) {
                    if (this.validationErrors[i].Field === "KhoaPhongNhapVienId") {
                        this.validationErrors.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                return null;
            }
        }
        if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
            let lenValidate = this.validationErrors.length;
            if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
                for (let i = 0; i < lenValidate; i++) {
                    if (this.validationErrors[i].Field === "BenhVienChuyenVienId") {
                        this.validationErrors.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                return null;
            }
        }
        if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
            let lenValidate = this.validationErrors.length;
            if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
                for (let i = 0; i < lenValidate; i++) {
                    if (this.validationErrors[i].Field === "ThoiDiemChuyenVien") {
                        this.validationErrors.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                return null;
            }
        }

        if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
            let lenValidate = this.validationErrors.length;
            if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
                for (let i = 0; i < lenValidate; i++) {
                    if (this.validationErrors[i].Field === "NhanVienHoTongChuyenVienId") {
                        this.validationErrors.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                return null;
            }
        }

        if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
            let lenValidate = this.validationErrors.length;
            if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
                for (let i = 0; i < lenValidate; i++) {
                    if (this.validationErrors[i].Field === "CachGiaiQuyet") {
                        this.validationErrors.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                return null;
            }
        }
    }

    hideTextBoxLoiDan(event: any) {
        // if (event) {
        //     this.benhNhanHienTai.YeuCauKhamBenh.IsShowTextBoxLoiDan = true;
        // }
        // else {
        //     this.benhNhanHienTai.YeuCauKhamBenh.IsShowTextBoxLoiDan = false;
        // }

    }

    dataThuoc(event: any) {
        this.datathuoc = event;
    }

    dataVatTu(event: any) {
        this.datavt = event;
    }
    validationErrorsOut(event: any) {
        this.validationErrors = event;
    }
    openCombobox(event: any) {
        if (event) {
            this.isSelectDuocPham = true;
        }
        else {
            this.isSelectDuocPham = false;
        }
    }


}
