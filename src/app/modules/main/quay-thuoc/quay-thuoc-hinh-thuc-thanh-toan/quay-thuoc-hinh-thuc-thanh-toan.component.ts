import { Component, OnInit, OnChanges, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import {
    ThemDuocPham, ThongTinDuocPham, ThongTinDonThuoc, BenhNhanThongTin,
    DanhSachCongNoChoThu, CongNoChoThu, CongNoVo,
    ApDungMiemGiamThem, DanhSachMienGiamVo,
    LoaiMienGiam, LoaiChietKhau,  NguoiDungKhongMuaDonThuoc
} from '../quay-thuoc.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import icDelete from '@iconify/icons-ic/delete';
import { QuayThuocXacNhanInPopUpComponent } from '../quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component';
import { SelectAllCheckboxState } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
declare var jQuery: any;
import icInfo from '@iconify/icons-ic/twotone-info';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import icRoundEdit from '@iconify/icons-ic/edit';
import { ApDungMiemGiamThemPopupComponent } from '../ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component';
import { ApDungMiemGiamChoTungLoaiThuocPopupComponent } from '../ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component';
import * as _ from 'underscore';
import { ThongTinPhieuPdfPopupComponent } from '../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-quay-thuoc-hinh-thuc-thanh-toan',
    templateUrl: './quay-thuoc-hinh-thuc-thanh-toan.component.html',
    styleUrls: ['./quay-thuoc-hinh-thuc-thanh-toan.component.scss']
})
export class QuayThuocHinhThucThanhToanComponent implements OnInit, OnChanges {
    icInfo = icInfo;
    icRoundEdit = icRoundEdit;
    validationErrors: any[] = [];
    validationThuThuocErrors: any[] = [];
    id = 0;
    idSub = 0;
    tongTien = 0;
    tongTienGrid = 0;
    thongtinDonThuoc: ThongTinDonThuoc;
    icDelete = icDelete;
    themDuocPham: ThemDuocPham;
    documentType: DocumentType;
    lstthongTinDonThuoc: Array<ThongTinDuocPham>;
    flagCheckSeletedTienMat = false;
    flagCheckSeletedChuyenKhoan = false;
    flagCheckSeletedPos = false;
    flagCheckSeletedSoTienCongNo = false;
    format: string = 'n2';
    selectItem: number[] = [];
    deleteItem: Array<ThongTinDuocPham>;
    isSelectingItem: boolean = false;
    public showCanhBaoSoTienNhap: boolean = false;

    public hinhThucThanhToan: any = [
        { KeyId: 1, DisplayName: "Tiền mặt", Selected: false, Change: false },
        { KeyId: 2, DisplayName: "Chuyển khoản", Selected: false, Change: false },
        { KeyId: 3, DisplayName: "Pos", Selected: false, Change: false },
        { KeyId: 4, DisplayName: "Công nợ", Selected: false, Change: false },
    ];

    public setDefeautTienMat: any = [1];

    constructor(private route: ActivatedRoute, private apiService: ApiService, private notificationService: NotificationService,
        private dialog: MatDialog, private cdRef: ChangeDetectorRef, private authService: AuthService,private router: Router) { }
    lstDonThuocMoiThem = Array<ThongTinDuocPham>();
    public danhSachCongNoChoThus: DanhSachCongNoChoThu[] = [];
    dataSourcedanhsachThuoc: any = {
        data: [],
        total: 0
    };
    maYCTNId = 0;
    public keySelectBy = 'Id';
    public mySelection: number[] = [];
    public mySelectionInPage: number[] = [];
    public selectAllState: SelectAllCheckboxState = 'unchecked';

    public selectMoneyTienBNDua: any[] = null;
    public selectMoneyTienMat: any[] = null;
    public selectMoneyTienChuyenKhoan: any[] = null;
    public selectMoneyTienPos: any[] = null;
    public selectMoneySoTienCongNo: any[] = null;

    @Output() danhSachChuaThanhToan = new EventEmitter<any>();

    @Input() benhnhanThongTin: BenhNhanThongTin;
    @Input() apDungCongNoThuoc = false;
    @Input() apDungMienGiam = false;
    @Input() thongTinTam: any = [];
    @Input() viTri: number;
    @Input() thongTinMienGiamVos: any;

    @Output() afterChangedCongNo = new EventEmitter<any>();
    @Output() afterChangedMg = new EventEmitter<any>();
    @Output() changeTab = new EventEmitter<any>();
    @ViewChild('duocPhamCombobox', { static: false }) duocPhamCombobox: ComboboxComponent;
    public state: State = {};
    public gridData: any = process(this.dataSourcedanhsachThuoc.data, this.state);
    public apDungCNAndMiemGiam = false;

    arrayThanhToans: any[] = [];
    arrayThanhToanstmp: any[] = [];
    confirm: any = null;

    checkSeletedTienMat = false;
    checkSeletedChuyenKhoan = false;
    checkSeletedPos = false;
    checkSeletedSoTienCongNo = false;

    loaiYeuCauTiepNhanKhachVangLai: boolean = false;

    closedialog: any;

    public total(field: any) {
        switch (field) {
            case 'BNConPhaiThanhToan':
                return this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
                    .reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0);
            case 'SoTienMG':
                return this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
                    .reduce((sum, item) => sum + item.SoTienMG, 0);
            case 'ThanhTienHienThi':
                return this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
                    .reduce((sum, item) => sum + item.ThanhTienHienThi, 0);
            case 'BNConPhaiThanhToanHienThi':
                return this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
                    .reduce((sum, item) => sum + item.BNConPhaiThanhToanHienThi, 0);
            case 'ThanhTien':
                return this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
                    .reduce((sum, item) => sum + item.ThanhTien, 0);
        }
    }

    // update 28/12/2020
    public apDungMGT = new ApDungMiemGiamThem;
    confrim: any = null;
    public danhSachMienGiamVo = new DanhSachMienGiamVo;
    public loaiMienGiam = new LoaiMienGiam;
    public loaiChietKhau = new LoaiChietKhau;

    ngOnInit() {
        this.documentType = DocumentType.QuayThuoc;
        this.closedialog = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: {}
        });
        const tiepNhanId: number = this.route.snapshot.params.id;
        this.maYCTNId = tiepNhanId;
        const id: number = this.route.snapshot.params.id;
        this.id = id;



        this.idSub = this.route.snapshot.params.idsub;
        this.thongtinDonThuoc = new ThongTinDonThuoc();
        this.GetTenBenhNhan(this.idSub);
        this.checkLoaiYCTN(tiepNhanId);
        this.lstDonThuocMoiThem = new Array<ThongTinDuocPham>();
        this.themDuocPham = new ThemDuocPham();
        this.deleteItem = new Array<ThongTinDuocPham>();

        if (this.benhnhanThongTin == null) {
            this.benhnhanThongTin = new BenhNhanThongTin();
        }
        this.selectItem = [1];
        this.checkSeletedTienMat = true;
        this.flagCheckSeletedTienMat = true;
        this.thongtinDonThuoc.NgayThu = new Date();
        this.thongtinDonThuoc.NoiDungThu = 'Thu tiền thuốc';

        this.hinhThucThanhToan = [
            { KeyId: 1, DisplayName: "Tiền mặt", Selected: true, Change: false },
            { KeyId: 2, DisplayName: "Chuyển khoản", Selected: false, Change: false },
            { KeyId: 3, DisplayName: "Pos", Selected: false, Change: false },
            { KeyId: 4, DisplayName: "Công nợ", Selected: false, Change: false },
        ];;
    }

    checkLoaiYCTN(tiepNhanId: number) { // kiểm tra loại yêu cầu tiếp nhận  => nếu yctn là khách vãng lai grid => hidden miển giảm
        this.apiService.post<any>('QuayThuoc/CheckLoaiYCTN?tiepNhanId=' + tiepNhanId).subscribe(
            resultData => {
                this.loaiYeuCauTiepNhanKhachVangLai = resultData;
            });
    }

    ngOnChanges() {
        if (this.apDungCongNoThuoc === true) {
            this.apDungCNAndMiemGiam = true;
            this.bindChiaTienCongNo();
            const soTienCongNoApply = this.thongTinTam[this.viTri].SoTien;
            const soTienTongHienTai = this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            if (soTienCongNoApply > soTienTongHienTai) {
                this.notificationService.showError('Áp dụng công nợ thất bại.');
            } else {
                this.notificationService.showSuccess('Áp dụng công nợ thành công.');
            }
            this.afterChangedCongNo.emit();
        }

        if (this.apDungMienGiam === true) {
            this.apDungCNAndMiemGiam = false;
            this.getThongTinMienGiam(this.maYCTNId);
        }
    }

    bindChiaPhanTramDoiTuongUuDai() {
        if (this.danhSachCongNoChoThus.length > 0) {
            this.bindChiaTienCongNo();
            this.cdRef.detectChanges();
        }

        if (this.dataSourcedanhsachThuoc.data.length > 0) {
            if (this.thongTinTam.length === 0) {
                for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                    if (dsChiPhiKhamChuaBenh.CheckedDefault === true) {
                        dsChiPhiKhamChuaBenh.TLMG = 0;
                        dsChiPhiKhamChuaBenh.SoTienMG = 0;
                        dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien;
                    }
                }
            }
            //tiền miễn giảm số lẻ làm tròn xuống Math.floor , tiền Người bệnh Thanh toán làm tròn lên Math.round
            if (this.thongTinMienGiamVos != undefined && this.thongTinMienGiamVos != null) {
                // Case 3: Áp dụng voucher
                if (this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo !== null &&
                    Object.entries(this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo).length !== 0) {
                    if (this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo.LoaiVoucher === 2) {
                        let soTienMiemGiamThemConLaiVoucherCase = this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo.SoTienVoucherMiemGiam;
                        let soTienMiemGiamThemConLaiTamVoucherCase = 0;
                        for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                            const totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                            if (dsChiPhiKhamChuaBenh.CheckedDefault === true) {
                                if (dsChiPhiKhamChuaBenh.BNConPhaiThanhToan !== 0
                                    && dsChiPhiKhamChuaBenh.BNConPhaiThanhToan < soTienMiemGiamThemConLaiVoucherCase) {
                                    soTienMiemGiamThemConLaiTamVoucherCase = dsChiPhiKhamChuaBenh.BNConPhaiThanhToan;
                                    dsChiPhiKhamChuaBenh.SoTienMG = Math.floor(dsChiPhiKhamChuaBenh.SoTienMG +
                                        dsChiPhiKhamChuaBenh.BNConPhaiThanhToan);
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = (dsChiPhiKhamChuaBenh.ThanhTien -
                                        totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG);
                                    soTienMiemGiamThemConLaiVoucherCase = soTienMiemGiamThemConLaiVoucherCase -
                                        dsChiPhiKhamChuaBenh.BNConPhaiThanhToan - soTienMiemGiamThemConLaiTamVoucherCase;
                                }
                                if (soTienMiemGiamThemConLaiVoucherCase > 0 &&
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan > soTienMiemGiamThemConLaiVoucherCase) {
                                    dsChiPhiKhamChuaBenh.SoTienMG = dsChiPhiKhamChuaBenh.SoTienMG + soTienMiemGiamThemConLaiVoucherCase;
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG;
                                    soTienMiemGiamThemConLaiVoucherCase = 0;
                                }
                            }
                        }
                    }

                    if (this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo.LoaiVoucher === 1) {
                        // Case 2: Áp dụng voucher rãi đều % theo tông sô tiền SoTienVoucherMiemGiam
                        let soTienVoucherConLai = this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo.SoTienVoucherMiemGiam;
                        this.thongTinMienGiamVos.ThongTinMienGiamVoucherVo.DuocPhamMienGiamTheoTiLes.forEach(element => {
                            for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                                if (dsChiPhiKhamChuaBenh.CheckedDefault === true) {
                                    const totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                                    if (dsChiPhiKhamChuaBenh.DuocPhamId === element.DuocPhamId) {
                                        dsChiPhiKhamChuaBenh.TLMG = dsChiPhiKhamChuaBenh.TLMG + element.TiLe;
                                        dsChiPhiKhamChuaBenh.SoTienMG = Math.floor(
                                            ((dsChiPhiKhamChuaBenh.SoLuongMua * dsChiPhiKhamChuaBenh.DonGia - totalCongNo) *
                                                element.TiLe) / 100);

                                        if (dsChiPhiKhamChuaBenh.SoTienMG > dsChiPhiKhamChuaBenh.SoLuongMua
                                            * dsChiPhiKhamChuaBenh.DonGia - totalCongNo) {
                                            dsChiPhiKhamChuaBenh.SoTienMG = dsChiPhiKhamChuaBenh.SoLuongMua
                                                * dsChiPhiKhamChuaBenh.DonGia - totalCongNo;
                                        }

                                        if (soTienVoucherConLai < dsChiPhiKhamChuaBenh.SoTienMG) {
                                            dsChiPhiKhamChuaBenh.SoTienMG = soTienVoucherConLai;
                                        }
                                        soTienVoucherConLai = soTienVoucherConLai - dsChiPhiKhamChuaBenh.SoTienMG;
                                        dsChiPhiKhamChuaBenh.BNConPhaiThanhToan =
                                            (dsChiPhiKhamChuaBenh.SoLuongMua * dsChiPhiKhamChuaBenh.DonGia - totalCongNo)
                                            - dsChiPhiKhamChuaBenh.SoTienMG;
                                    }
                                }
                            }

                        });
                    }
                }

                // Case 2: Áp dụng ThongTinMienGiamThemVo
                if (this.thongTinMienGiamVos.ThongTinMienGiamThemVo != undefined && this.thongTinMienGiamVos.ThongTinMienGiamThemVo != null &&
                    Object.entries(this.thongTinMienGiamVos.ThongTinMienGiamThemVo).length !== 0) {
                    if (this.thongTinMienGiamVos.ThongTinMienGiamThemVo.LoaiMienGiamThem === 1) {
                        let soTienMiemGiamThemConLai = this.thongTinMienGiamVos.ThongTinMienGiamThemVo.SoTienMGConLai;
                        let soTienMiemGiamThemConLaiTam = 0;
                        for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                            const totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                            if (dsChiPhiKhamChuaBenh.CheckedDefault === true) {
                                if (dsChiPhiKhamChuaBenh.BNConPhaiThanhToan !== 0
                                    && dsChiPhiKhamChuaBenh.BNConPhaiThanhToan <= soTienMiemGiamThemConLai) {
                                    soTienMiemGiamThemConLaiTam = dsChiPhiKhamChuaBenh.BNConPhaiThanhToan;
                                    dsChiPhiKhamChuaBenh.SoTienMG = Math.floor(dsChiPhiKhamChuaBenh.SoTienMG
                                        + dsChiPhiKhamChuaBenh.BNConPhaiThanhToan);
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien
                                        - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG;
                                    soTienMiemGiamThemConLai = soTienMiemGiamThemConLai -
                                        dsChiPhiKhamChuaBenh.BNConPhaiThanhToan - soTienMiemGiamThemConLaiTam;
                                }
                                if (soTienMiemGiamThemConLai > 0 && dsChiPhiKhamChuaBenh.BNConPhaiThanhToan > soTienMiemGiamThemConLai) {
                                    dsChiPhiKhamChuaBenh.SoTienMG = dsChiPhiKhamChuaBenh.SoTienMG + soTienMiemGiamThemConLai;
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG;
                                    soTienMiemGiamThemConLai = 0;
                                }
                            }
                        }
                    } else {
                        // Case 2: Áp dụng ThongTinMienGiamThemVo tỉ lệ miễm giảm
                        let isApDungDichVuId = false;
                        const tiLeMienGiam = this.thongTinMienGiamVos.ThongTinMienGiamThemVo.TiLeMienGiam;
                        for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                            const totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                            if (dsChiPhiKhamChuaBenh.CheckedDefault === true) {
                                isApDungDichVuId = true;
                                dsChiPhiKhamChuaBenh.TLMG = dsChiPhiKhamChuaBenh.TLMG + tiLeMienGiam;
                                dsChiPhiKhamChuaBenh.SoTienMGThem = dsChiPhiKhamChuaBenh.SoTienMG;
                                dsChiPhiKhamChuaBenh.SoTienMG = Math.floor(
                                    ((dsChiPhiKhamChuaBenh.SoLuongMua * dsChiPhiKhamChuaBenh.DonGia - totalCongNo) *
                                        dsChiPhiKhamChuaBenh.TLMG) / 100);
                                dsChiPhiKhamChuaBenh.BNConPhaiThanhToan =
                                    dsChiPhiKhamChuaBenh.ThanhTien - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG;
                            }
                        }

                        if (isApDungDichVuId) {
                            for (const dsChiPhiKhamChuaBenh of this.dataSourcedanhsachThuoc.data) {
                                if (dsChiPhiKhamChuaBenh.CheckedDefault === true && dsChiPhiKhamChuaBenh.SoTienMGThem !== undefined) {
                                    const totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                                    dsChiPhiKhamChuaBenh.SoTienMG = dsChiPhiKhamChuaBenh.SoTienMG + dsChiPhiKhamChuaBenh.SoTienMGThem;
                                    if (dsChiPhiKhamChuaBenh.SoTienMG > (dsChiPhiKhamChuaBenh.SoLuongMua
                                        * dsChiPhiKhamChuaBenh.DonGia - totalCongNo)) {
                                        dsChiPhiKhamChuaBenh.SoTienMG = (dsChiPhiKhamChuaBenh.SoLuongMua
                                            * dsChiPhiKhamChuaBenh.DonGia - totalCongNo);
                                    }
                                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan =
                                        (dsChiPhiKhamChuaBenh.SoLuongMua * dsChiPhiKhamChuaBenh.DonGia - totalCongNo)
                                        - dsChiPhiKhamChuaBenh.SoTienMG;
                                }
                            }
                        }
                    }
                }
            }
        }

        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            } else {
                this.tongTien = 0;
            }
        }

        if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
            this.thongtinDonThuoc.TienMat = this.tongTien;

            if (this.thongtinDonThuoc.BenhNhanDua > 0 && this.apDungMienGiam === true) {
                this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
            }
        }
        this.gridData = this.dataSourcedanhsachThuoc.data;
        this.myDanhSachChuaThanhToan();
    }

    itemTotalCongNo(danhSachCongNoChoThus: any): number {
        let toatalCongNo = 0;
        if (danhSachCongNoChoThus != null) {
            danhSachCongNoChoThus.forEach(cn => {
                toatalCongNo += cn.SoTienCongNoChoThu;
            });
        }
        return toatalCongNo;
    }

    selectDataDanhSachDaChon(): number {
        let totalThanhTien = 0;
        this.dataSourcedanhsachThuoc.data.forEach(element => {
            if (element.CheckedDefault === true) {
                totalThanhTien += element.ThanhTien;
            }
        });
        return totalThanhTien;
    }

    totalCongNoPrivate(): number {
        let totalCongNoThanhToan = 0;
        if (this.thongTinTam.length !== 0) {
            // tslint:disable-next-line: prefer-for-of
            for (let index = 0; index < this.thongTinTam.length; index++) {
                totalCongNoThanhToan += this.thongTinTam[index].SoTien;
            }
        }
        return totalCongNoThanhToan;
    }

    tinhTienCongNo(itemThanhTien, congNoId, totalTT): number {
        let totalCongNo = 0;
        // kiểm tra công nợ được áp dụng tiền
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.thongTinTam.length; index++) {
            if (this.thongTinTam[index].CongNoId === congNoId) {
                totalCongNo = this.thongTinTam[index].SoTien;
            }
        }
        // const itemSoTienCongNo = Math.floor(parseFloat(((totalCongNo / totalTT) * itemThanhTien).toPrecision(15)));
        // return itemSoTienCongNo;
        var itemSoTienCongNo = Math.round(parseFloat(((totalCongNo / totalTT) * (itemThanhTien)).toPrecision(15)) * 100) / 100;
        return itemSoTienCongNo;
    }

    tinhTiLeMiemGiamInGrid(data: any) {
        const tongCongNoItem = this.itemTotalCongNo(data.DanhSachCongNoChoThus);
        const sumSoTienBenhNhanTra = (data.ThanhTien - tongCongNoItem);
        if (sumSoTienBenhNhanTra === 0) {
            return 0;
        }
        return Math.round((data.SoTienMG / sumSoTienBenhNhanTra) * 100);
    }


    bindChiaTienCongNo() {
        const totalTT = this.selectDataDanhSachDaChon();
        const totalCongNo = this.totalCongNoPrivate();

        if (totalCongNo > totalTT) {
            this.notificationService.showError('Số tiền thanh toán công nợ không hợp lệ');
            return;
        }

        if (this.danhSachCongNoChoThus[0].CongNoChoThus.length !== 0) {
            this.danhSachCongNoChoThus[0].CongNoChoThus.forEach(congNo => {
                if (congNo.ViTri === this.viTri) {
                    if (this.thongTinTam.length !== 0) {
                        congNo.SoTienCongNoChoThu = this.thongTinTam[this.viTri].SoTien;
                    }
                }
            });
        }

        // mỗi lần cập nhật công nợ thông tin tạm thì sẽ luôn cập nhập thông tin đơn thuốc danh sách công nợ (dùng cho việc thu tiền)
        this.thongTinTam.forEach(element => {
            this.thongtinDonThuoc.DanhSachCongNos.forEach(congNoDonThuoc => {
                if (element.CongNoId === congNoDonThuoc.CongTyCongNoId) {
                    congNoDonThuoc.SoTienCongNo = element.SoTien;
                }
            });
        });

        if (this.thongTinTam.length > 0) {
            const danhSachCongNoChoThu = new DanhSachCongNoChoThu();
            for (let index = 0; index < this.thongTinTam.length; index++) {
                const congNo = new CongNoChoThu();
                congNo.ViTri = index;
                congNo.CongNoId = this.thongTinTam[index].CongNoId;
                congNo.TenCongTy = this.thongTinTam[index].TenCongTy;
                congNo.SoTienCongNoChoThu = 0;
                danhSachCongNoChoThu.CongNoChoThus.push(congNo);
            }

            const lastItem = this.findLast();
            let tongCongNo = 0;

            for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
                if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                    if (this.viTri !== -1) {
                        this.dataSourcedanhsachThuoc.data[index].TLMG = 0;
                        this.dataSourcedanhsachThuoc.data[index].SoTienMG = 0;
                        this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan =
                            (this.dataSourcedanhsachThuoc.data[index].SoLuongMua * this.dataSourcedanhsachThuoc.data[index].DonGia)
                            - ((this.dataSourcedanhsachThuoc.data[index].SoLuongMua *
                                this.dataSourcedanhsachThuoc.data[index].DonGia) * this.dataSourcedanhsachThuoc.data[index].TLMG / 100);  // to do Math.round
                        if (index === lastItem) {
                            this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri]
                                .SoTienCongNoChoThu = this.apDungCNAndMiemGiam ?
                                    this.thongTinTam[this.viTri].SoTien - tongCongNo :
                                    this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri].SoTienCongNoChoThu;
                        }

                        if (index !== lastItem) {
                            if (this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.length > 0) {
                                this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri].SoTienCongNoChoThu =
                                    danhSachCongNoChoThu.CongNoChoThus[this.viTri].SoTienCongNoChoThu = this.apDungCNAndMiemGiam ?
                                        this.tinhTienCongNo(this.dataSourcedanhsachThuoc.data[index].ThanhTien,
                                            danhSachCongNoChoThu.CongNoChoThus[this.viTri].CongNoId,
                                            totalTT) :
                                        this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri].SoTienCongNoChoThu;
                                tongCongNo += this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri].SoTienCongNoChoThu;
                            }
                        }

                        this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu =
                            this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                    }
                } else {
                    if (this.viTri !== -1) {
                        this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[this.viTri].SoTienCongNoChoThu =
                            danhSachCongNoChoThu.CongNoChoThus[this.viTri].SoTienCongNoChoThu = 0;
                    }
                }
            }

            this.dataSourcedanhsachThuoc.data.forEach(element => {
                let totalCongNoEle = 0;
                element.DanhSachCongNoChoThus.forEach(elementCongNo => {
                    totalCongNoEle += elementCongNo.SoTienCongNoChoThu;
                });
                let soTienMG = this.tinhSoTienMiemGiam(element);
                element.SoTienMG = soTienMG;
                return element.BNConPhaiThanhToan = element.ThanhTien - totalCongNoEle - element.SoTienMG;
            });
        }
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            } else {
                this.tongTien = 0;
            }
        }

        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }

        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }

        this.myDanhSachChuaThanhToan();
        this.cdRef.detectChanges();
    }

    findLast() {
        for (let index = this.dataSourcedanhsachThuoc.data.length - 1; index >= 0; index--) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                return index;
            }
        }
        return -1;
    }

    myDanhSachChuaThanhToan() {
        const danhSachChuaThanhToans: any = [];
        this.dataSourcedanhsachThuoc.data.forEach(element => {
            let totalCongNoEle = 0;
            if (element.CheckedDefault) {
                element.SoTienMG = this.tinhSoTienMiemGiam(element);
                element.DanhSachCongNoChoThus.forEach(elementCongNo => {
                    totalCongNoEle += elementCongNo.SoTienCongNoChoThu;
                });
                let soTienMG = this.tinhSoTienMiemGiam(element);
                element.SoTienMG = soTienMG;
                element.BNConPhaiThanhToan = element.ThanhTien - totalCongNoEle - element.SoTienMG;
                danhSachChuaThanhToans.push(element);
            }
        });

        this.danhSachXemTruocBangKeThuocVaVatTu(danhSachChuaThanhToans);
    }

    danhSachXemTruocBangKeThuocVaVatTu(danhSachChuaThanhToans: any) {
        // lý do trả về danhSachChuaThanhToan cho quay-thuoc-mua-thuoc.component
        // để xem trước bảng kê
        this.danhSachChuaThanhToan.emit(danhSachChuaThanhToans);
    }

    setSelectAll() {
        setTimeout(function () {
            if (!jQuery('#selectAllCheckboxId').prop('checked')) {
                jQuery('#selectAllCheckboxId').trigger('click');
            }
        }, 1000);
    }

    chuyenDen(event: any) {
        if (event.index === 0) {
            this.cdRef.detectChanges();
            this.clearHinhThucThanhToan();
            this.defeautSoTien();

            this.setDefeautTienMat = [1];
            this.checkSeletedTienMat = true;
            this.flagCheckSeletedTienMat = true;

            this.GetThongTinDonThuoc(this.maYCTNId);
            this.getDanhSachBHTN();

            let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
            if (items != null && items.length > 0) {
                this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
            }
        }
    }

    onSelectChangeCheckbox(e: any, val: any) {
        this.unCheckedBindSoTienMG(val);
        this.mySelection = [];
        if (e.target.checked) {
            this.mySelectionInPage.push(val);
        }
        else {
            this.mySelectionInPage.splice(this.mySelectionInPage.indexOf(val), 1);
        }
        var allData = this.dataSourcedanhsachThuoc.data;
        const len = this.mySelectionInPage.length;
        this.mySelection = this.mySelection.concat(this.mySelectionInPage);

        if (len === 0) {
            this.selectAllState = 'unchecked';
        } else if (len > 0 && len < allData
            .filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false))
            .length) {
            this.selectAllState = 'indeterminate';
        } else {
            this.selectAllState = 'checked';
        }

        this.extCheckboxSelection(this.mySelection);
    }

    onSelectDuocPham(event) {
        let loai = 0;
        if (event == undefined || event == null) {
            // this.notificationService.showError('Bạn chưa chọn thuốc.');
            this.themDuocPham.SoLuongTon = null;
        } else {
            this.apiService.post<Array<any>>('QuayThuoc/GetThongTinDuocPham?duocPhamId=' + event.KeyId + "&LoaiDuocPhamHoacVatTu=" + event.LoaiDuocPhamHoacVatTu).subscribe(
                resultData => {
                    let soLuongTon = 0;
                    this.lstthongTinDonThuoc = resultData;
                    if (this.lstDonThuocMoiThem.length > 0) {
                        this.lstDonThuocMoiThem.forEach(x => {
                            if (x.DuocPhamId === this.themDuocPham.DuocPhamId) {
                                soLuongTon = soLuongTon + x.SoLuongMua;
                            }
                        });
                    }
                    this.themDuocPham.SoLuongTon = resultData.reduce((sum, item) => sum + item.SoLuongTon, 0) - soLuongTon;
                },
                () => {
                });
        }
    }

    unCheckedBindSoTienMG(id: any) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === false) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === id) {
                    this.dataSourcedanhsachThuoc.data[index].SoTienMG = 0;
                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan =
                        this.dataSourcedanhsachThuoc.data[index].ThanhTien - this.dataSourcedanhsachThuoc.data[index].TongCongNo; // to do Math.round
                }
            }
        }
        this.gridData = process(this.dataSourcedanhsachThuoc.data, this.state);
    }

    delete(event: any) {
        if (event != undefined && event != null) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn xóa thuốc/vật tư này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.notificationService.showSuccess(
                        "Xóa thành công"
                    );
                    let i = 0;
                    let stt = event.STT;
                    for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
                        if (this.dataSourcedanhsachThuoc.data[index].STT === event.STT) {
                            i = index;
                        }
                    }

                    this.dataSourcedanhsachThuoc.data[i].HighLightClass = null;
                    this.deleteItem.push(this.dataSourcedanhsachThuoc.data[i]);

                    if (this.lstthongTinDonThuoc === undefined) {
                        this.lstthongTinDonThuoc = [];
                    }

                    this.lstthongTinDonThuoc.push(this.dataSourcedanhsachThuoc.data[i]);
                    this.dataSourcedanhsachThuoc.data.splice(i, 1);

                    this.lstDonThuocMoiThem = new Array<ThongTinDuocPham>();

                    for (let index0 = 0; index0 < i; index0++) {
                        this.lstDonThuocMoiThem.push(this.dataSourcedanhsachThuoc.data[index0]);
                    }

                    for (let index1 = i; index1 < this.dataSourcedanhsachThuoc.data.length; index1++) {
                        this.dataSourcedanhsachThuoc.data[index1].STT = stt;
                        this.lstDonThuocMoiThem.push(this.dataSourcedanhsachThuoc.data[index1]);
                        stt++;
                    }

                    this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
                    this.tongTien = this.tongTienGrid;

                    if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
                        if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                            this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
                        } else {
                            this.tongTien = 0;
                        }
                    }
                    // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                    //     this.thongtinDonThuoc.TienMat = this.tongTien;
                    // }
                    let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
                    if (items != null && items.length > 0) {
                        this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
                    }
                }
            });
        }

    }

    clearHinhThucThanhToan() {
        this.flagCheckSeletedTienMat = false;
        this.flagCheckSeletedChuyenKhoan = false;
        this.flagCheckSeletedPos = false;
        this.flagCheckSeletedSoTienCongNo = false;
        this.checkSeletedTienMat = false;
        this.checkSeletedChuyenKhoan = false;
        this.checkSeletedPos = false;
        this.checkSeletedSoTienCongNo = false;
    }

    GetTenBenhNhan(id: number) {
        this.apiService.post<any>('QuayThuoc/GetTenBenhNhan?benhNhanId=' + id).subscribe(
            resultData => {
                this.thongtinDonThuoc.HoTenBenhNhan = resultData;
                this.GetThongTinDonThuoc(this.id);
            },
            () => {
            });
    }

    onSelectAllChange(checkedState: SelectAllCheckboxState) {
        var allData = this.dataSourcedanhsachThuoc.data;
        if (allData == undefined)
            allData = [];
        this.mySelection = [];
        if (checkedState === 'checked') {
            this.mySelectionInPage = allData
                .filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).map((item) =>
                    item[this.keySelectBy]
                )
            this.mySelection = this.mySelection.concat(this.mySelectionInPage);
            this.selectAllState = 'checked';
        } else {
            var mySelectionRemove = allData
                .filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).map((item) =>
                    item[this.keySelectBy]
                );
            if (mySelectionRemove != null && mySelectionRemove.length > 0) {
                mySelectionRemove.forEach(obj => {
                    this.mySelection.splice(this.mySelection.indexOf(obj), 1);
                });
            }
            this.mySelectionInPage = [];
            this.selectAllState = 'unchecked';
        }
        this.extCheckboxSelection(this.mySelection);
    }

    GetThongTinDonThuoc(id: number) {
        this.apiService.post<Array<any>>('QuayThuoc/GetDataDonThuoc?tiepNhanId=' + id).subscribe(
            resultData => {
                this.dataSourcedanhsachThuoc.data = resultData;
                let index = 1;
                this.dataSourcedanhsachThuoc.data.forEach(x => {
                    x.STT = index;
                    index++;
                    x.KiemTraTienSoTienItemDichVu = false;
                });

                this.myDanhSachChuaThanhToan();
                this.getSoDuTaiKhoanBenhNhan(id);
                this.closedialog.close();
            },
            () => {
            });
    }

    getSoDuTaiKhoanBenhNhan(id: number) {
        this.apiService.get<number>('ThuNgan/SoDuTaiKhoanBenhNhan/' + id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                // số dư tài khoản bằng 0 vi đã tra chô thu ngân
                this.benhnhanThongTin.SoDuTaiKhoan = 0;
                this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
                this.tongTien = this.tongTienGrid;
                if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
                    if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                        this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
                    } else {
                        this.tongTien = 0;
                    }
                }
                this.thongtinDonThuoc.TienMat = this.tongTien;
                this.thongtinDonThuoc.HinhThucThanhToan = [1];
                this.getDanhSachBHTN();
            }
        });
    }

    getDanhSachBHTN() {
        this.apiService.get<any>('QuayThuoc/GetListCongTyBaoHiemTuNhans?tiepNhanId=' + this.maYCTNId).subscribe(
            resultData => {
                if (resultData.length > 0) {
                    const danhSachCongNoChoThu = new DanhSachCongNoChoThu();
                    for (let index = 0; index < resultData.length; index++) {
                        const congNo = new CongNoChoThu();
                        congNo.ViTri = index;
                        congNo.CongNoId = resultData[index].CongNoId;
                        congNo.TenCongTy = resultData[index].TenCongTy;
                        congNo.SoTienCongNoChoThu = 0;
                        danhSachCongNoChoThu.CongNoChoThus.push(congNo);
                    }

                    // tslint:disable-next-line: prefer-for-of
                    for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
                        this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus = [];
                    }
                    this.danhSachCongNoChoThus = [];


                    // tslint:disable-next-line: prefer-for-of
                    for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
                        // tslint:disable-next-line: prefer-for-of
                        for (let subIndex = 0; subIndex < danhSachCongNoChoThu.CongNoChoThus.length; subIndex++) {
                            const congNoItem = new CongNoChoThu();
                            congNoItem.CongNoId = danhSachCongNoChoThu.CongNoChoThus[subIndex].CongNoId;
                            congNoItem.SoTienCongNoChoThu = danhSachCongNoChoThu.CongNoChoThus[subIndex].SoTienCongNoChoThu;
                            congNoItem.TenCongTy = danhSachCongNoChoThu.CongNoChoThus[subIndex].TenCongTy;
                            congNoItem.ViTri = danhSachCongNoChoThu.CongNoChoThus[subIndex].ViTri;

                            this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.push(congNoItem);
                        }

                        const totalCongNo = this.itemTotalCongNo(this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus);
                        this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan =
                            this.dataSourcedanhsachThuoc.data[index].ThanhTien - totalCongNo - this.dataSourcedanhsachThuoc.data[index].SoTienMG;
                    }

                    this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
                    this.danhSachCongNoChoThus[0].CongNoChoThus.forEach(element => {
                        const congNo = new CongNoVo();
                        congNo.CongTyCongNoId = element.CongNoId;
                        congNo.SoTienCongNo = element.SoTienCongNoChoThu;
                        this.thongtinDonThuoc.DanhSachCongNos.push(congNo);
                    });
                }
                this.gridData = this.dataSourcedanhsachThuoc.data;
                this.setSelectAll();
                // this.getThongTinMienGiam(this.maYCTNId);  // to do
            });
    }

    public totalCongno(field: any) {
        let sumCongNoItem = 0;
        this.dataSourcedanhsachThuoc.data.forEach(element => {
            if (element.DanhSachCongNoChoThus[field] !== undefined) {
                sumCongNoItem += element.DanhSachCongNoChoThus[field].SoTienCongNoChoThu;
            }
        });
        return sumCongNoItem;
    }

    GuiVaXuatThuocData(data: any) {
        this.apiService.post<any>('QuayThuoc/ThuTienVaXuatThuoc', data).subscribe(
            resultData => {
                if (resultData.ThanhCong === false) {
                    this.notificationService.showError(resultData.Error);

                    if (resultData.DanhSachDuocPhamVuotTonKho != null) {
                        // tslint:disable-next-line: prefer-for-of
                        for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                            // tslint:disable-next-line: prefer-for-of
                            for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                                if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt === this.dataSourcedanhsachThuoc.data[j].STT) {
                                    this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                    this.dataSourcedanhsachThuoc.data[j].SoLuongDung =
                                        resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                                }

                            }
                        }
                    }
                } else if (resultData.ThanhCong === true) {
                    this.dataSourcedanhsachThuoc.data = [];
                    this.lstDonThuocMoiThem = [];
                    this.cdRef.detectChanges();
                    this.gridData = process(this.dataSourcedanhsachThuoc.data, this.state);
                    this.dialog.open(QuayThuocXacNhanInPopUpComponent, {
                        disableClose: true,
                        width: '500px',
                        data: { Model: resultData, Title: 'XÁC NHẬN' }
                    }).afterClosed().subscribe(result => {

                        if (result.Response !== 'No answer') {
                            this.changeTab.emit(2);
                            this.tongTien = 0;
                            this.getSoDuTaiKhoanBenhNhan(data.Id);
                            this.thongtinDonThuoc.TienMat = 0;
                            this.thongtinDonThuoc.ChuyenKhoan = 0;
                            this.thongtinDonThuoc.BenhNhanDua = 0;
                            this.thongtinDonThuoc.TienTraLai = 0;
                            this.XacNhanIn(result);
                        }
                        else {
                            this.changeTab.emit(2);
                            this.getSoDuTaiKhoanBenhNhan(data.Id);
                            this.tongTien = 0;
                            this.thongtinDonThuoc.TienMat = 0;
                            this.thongtinDonThuoc.ChuyenKhoan = 0;
                            this.thongtinDonThuoc.BenhNhanDua = 0;
                            this.thongtinDonThuoc.TienTraLai = 0;
                        }
                    });
                }
            });
    }

    GuiData(data: any) {
        this.apiService.post<any>('QuayThuoc/ThemThanhToanDonThuoc', data).subscribe(
            resultData => {
                if (resultData.ThanhCong === false) {
                    this.notificationService.showError(resultData.Error);

                    if (resultData.DanhSachDuocPhamVuotTonKho != null) {
                        // tslint:disable-next-line: prefer-for-of
                        for (let i = 0; i < resultData.DanhSachDuocPhamVuotTonKho.length; i++) {
                            // tslint:disable-next-line: prefer-for-of
                            for (let j = 0; j < this.dataSourcedanhsachThuoc.data.length; j++) {
                                if (resultData.DanhSachDuocPhamVuotTonKho[i].Stt === this.dataSourcedanhsachThuoc.data[j].STT) {
                                    this.dataSourcedanhsachThuoc.data[j].HighLightClass = 'bg-row-lightpink';
                                    this.dataSourcedanhsachThuoc.data[j].SoLuongDung =
                                        resultData.DanhSachDuocPhamVuotTonKho[i].SoLuongTonKho;
                                }

                            }
                        }
                    }
                } else if (resultData.ThanhCong === true) {
                    this.dataSourcedanhsachThuoc.data = [];
                    this.lstDonThuocMoiThem = [];
                    this.cdRef.detectChanges();
                    this.gridData = process(this.dataSourcedanhsachThuoc.data, this.state);
                    this.dialog.open(QuayThuocXacNhanInPopUpComponent, {
                        disableClose: true,
                        width: '500px',
                        data: { Model: resultData, Title: 'XÁC NHẬN' }
                    }).afterClosed().subscribe(result => {

                        if (result.Response !== 'No answer') {
                            this.changeTab.emit(2);
                            this.tongTien = 0;
                            this.getSoDuTaiKhoanBenhNhan(data.Id);
                            this.thongtinDonThuoc.TienMat = 0;
                            this.thongtinDonThuoc.ChuyenKhoan = 0;
                            this.thongtinDonThuoc.BenhNhanDua = 0;
                            this.thongtinDonThuoc.TienTraLai = 0;
                            this.XacNhanIn(result);
                        }
                        else {
                            this.changeTab.emit(2);
                            this.getSoDuTaiKhoanBenhNhan(data.Id);
                            this.tongTien = 0;
                            this.thongtinDonThuoc.TienMat = 0;
                            this.thongtinDonThuoc.ChuyenKhoan = 0;
                            this.thongtinDonThuoc.BenhNhanDua = 0;
                            this.thongtinDonThuoc.TienTraLai = 0;
                        }
                    });
                }
            });
    }

    XacNhanIn(data: any) {
        this.showPopupLoadingIn();
        data.Hosting = window.location.protocol + '//' + window.location.host;
        this.apiService.postExportPdf<any>('QuayThuoc/XacNhanIn', data).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {
                    if (data.InBangKe == false && data.InPhieuThu == false) {
                        this.notificationService.showError('Không có phiếu in được chọn.');
                        this.closePopupLoadingData();
                    }
                    else {
                        this.dialog.open(ThongTinPhieuPdfPopupComponent, {
                            disableClose: true,
                            width: '1000px',
                            data: { Model: resultData }
                        }).afterClosed().subscribe(() => {
                            this.closePopupLoadingData();
                        });

                    }
                }
            },
            (err: ApiError) => {
                this.closePopupLoadingData();
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });

    }

    shareData() {
        this.thongtinDonThuoc.DanhSachDonThuocs = [...this.dataSourcedanhsachThuoc.data];
        this.thongtinDonThuoc.Id = this.id;
        for (let index = 0; index < this.thongtinDonThuoc.DanhSachDonThuocs.length; index++) {
            this.thongtinDonThuoc.DanhSachDonThuocs[index].HighLightClass = null;
            if (this.thongtinDonThuoc.DanhSachDonThuocs[index].CheckedDefault === false) {
                this.thongtinDonThuoc.DanhSachDonThuocs.splice(index, 1);
                index = -1;
            }
        }
        return this.thongtinDonThuoc;
    }

    kiemTraNhapSoTienTra(dataThuTien: any) {
        const soTienNhapTra = dataThuTien.ChuyenKhoan + dataThuTien.POS + dataThuTien.TienMat + dataThuTien.SoTienCongNo;
        if (this.tongTien !== soTienNhapTra) {
            return true;
        }
        return false;
    }

    // ======= Begin Thu tiền và xuất thuốc 
    ThuTienVaXuatThuoc() {
        let checkTien = true;
        if (this.validationErrors !== undefined) {
            this.validationThuThuocErrors = [];
        }
        this.cdRef.detectChanges();
        if (this.setDefeautTienMat.length === 0) {
            this.validationThuThuocErrors.push({
                Message: "Vui lòng chọn hình thức thanh toán.",
                Field: "HinhThucThanhToan",
            });
            return true;
        }

        if (this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault).length === 0) {
            this.notificationService.showError('Người bệnh này không có thuốc nào để thanh toán');
            checkTien = false;
        }

        if (this.thongtinDonThuoc.HinhThucThanhToan.length !== 0 && this.kiemTraNhapSoTienTra(this.thongtinDonThuoc)) {
            this.notificationService.showError('Số tiền nhập không đúng.');
            checkTien = false;
        }
        if (this.dataSourcedanhsachThuoc.length != 0) {
            this.dataSourcedanhsachThuoc.data.forEach(element => {
                if (element.KiemTraTienSoTienItemDichVu === true) {
                    this.notificationService.showError('Thanh toán không hợp lệ');
                    checkTien = false;
                }
            });
        }

        this.thongtinDonThuoc.TongTien = this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo;

        if (this.thongtinDonThuoc.Id == null) {
            this.thongtinDonThuoc.Id = this.id;
        }

        this.thongtinDonThuoc.DanhSachDonThuocs = this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault);
        this.apiService.post<any>('QuayThuoc/CheckValidationForQuayThuoc', this.thongtinDonThuoc).subscribe(
            () => {
                if (checkTien === true) {
                    if (this.confirm != null) {
                        // this.dialog.closeAll();
                        this.confirm = null;
                    }
                    this.confirm = this.dialog.open(ConfirmComponent, {
                        disableClose: true,
                        width: '700px',
                        data: {
                            Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn thu của người bệnh ' +
                                this.benhnhanThongTin.HoTen.bold() + ' với số tiền là ' +
                                this.tongTien.toLocaleString('vi-VI').bold() + ' đồng hay không?'
                        }
                    }).afterClosed().subscribe(result => {
                        if (result === 'Yes') {
                            this.GuiVaXuatThuocData(this.thongtinDonThuoc);
                            this.setDefeautTienMat = [1];
                            this.checkSeletedTienMat = true;
                            this.defeautSoTien();
                        }
                    });
                }
            }, (err: ApiError) => {
                this.validationThuThuocErrors = err.ValidationErrors;
            });
    }
    // ======= End Thu tiền và xuất thuốc 

    ThuTien() {
        let checkTien = true;

        if (this.validationErrors !== undefined) {
            this.validationThuThuocErrors = [];
        }
        this.cdRef.detectChanges();
        if (this.setDefeautTienMat.length === 0) {
            this.validationThuThuocErrors.push({
                Message: "Vui lòng chọn hình thức thanh toán.",
                Field: "HinhThucThanhToan",
            });
            return true;
        }

        if (this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault).length === 0) {
            this.notificationService.showError('Người bệnh này không có thuốc nào để thanh toán');
            checkTien = false;
        }

        if (this.thongtinDonThuoc.HinhThucThanhToan.length !== 0 && this.kiemTraNhapSoTienTra(this.thongtinDonThuoc)) {
            this.notificationService.showError('Số tiền nhập không đúng.');
            checkTien = false;
        }
        if (this.dataSourcedanhsachThuoc.length != 0) {
            this.dataSourcedanhsachThuoc.data.forEach(element => {
                if (element.KiemTraTienSoTienItemDichVu === true) {
                    this.notificationService.showError('Thanh toán không hợp lệ');
                    checkTien = false;
                }
            });
        }

        this.thongtinDonThuoc.TongTien = this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo;

        if (this.thongtinDonThuoc.Id == null) {
            this.thongtinDonThuoc.Id = this.id;
        }
        console.log("thongtindonthuoc", this.thongtinDonThuoc)

        this.thongtinDonThuoc.DanhSachDonThuocs = this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault);
        this.apiService.post<any>('QuayThuoc/CheckValidationForQuayThuoc', this.thongtinDonThuoc).subscribe(
            () => {
                if (checkTien === true) {
                    if (this.confirm != null) {
                        // this.dialog.closeAll();
                        this.confirm = null;
                    }
                    this.confirm = this.dialog.open(ConfirmComponent, {
                        disableClose: true,
                        width: '700px',
                        data: {
                            Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn thu của người bệnh ' +
                                this.benhnhanThongTin.HoTen.bold() + ' với số tiền là ' +
                                this.tongTien.toLocaleString('vi-VI').bold() + ' đồng hay không?'
                        }
                    }).afterClosed().subscribe(result => {
                        if (result === 'Yes') {
                            this.GuiData(this.thongtinDonThuoc);
                            this.setDefeautTienMat = [1];
                            this.checkSeletedTienMat = true;
                            this.defeautSoTien();
                        }
                    });
                }
            }, (err: ApiError) => {
                this.validationThuThuocErrors = err.ValidationErrors;
            });
    }

    extCheckboxSelection(event: any[]) {
        this.dataSourcedanhsachThuoc.data.forEach(element => {
            element.CheckedDefault = false;
        });
        if (event.length > 0) {
            // tslint:disable-next-line: prefer-for-of
            for (let index = 0; index < event.length; index++) {
                this.dataSourcedanhsachThuoc.data.forEach(element => {
                    let soTienMG = this.tinhSoTienMiemGiam(element);
                    element.SoTienMG = soTienMG;
                    // số tiền người bệnh phải trả đã trừ số tiền miễn giảm
                    let soTienCN = this.soTienCongNoChoTungDichVu(element);
                    if (element.BNConPhaiThanhToan >= element.SoTienMG) {
                        element.BNConPhaiThanhToan = ((element.DonGia * element.SoLuongMua)) - soTienCN - element.SoTienMG;
                    }
                    if (element.Id === event[index]) {
                        return element.CheckedDefault = true;
                    }
                });
            }
        }



        this.tongTien = Math.round(this.dataSourcedanhsachThuoc.data.filter(x => x.CheckedDefault)
            .reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0));
        this.thongtinDonThuoc.BenhNhanDua = 0;
        this.thongtinDonThuoc.TienTraLai = 0;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            } else {
                this.tongTien = 0;
            }
        }
        // var items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        //let pos = this.thongtinDonThuoc.ChuyenKhoan;

        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        //     this.thongtinDonThuoc.POS = 0;
        //     this.thongtinDonThuoc.SoTienCongNo = 0;
        //     this.thongtinDonThuoc.ChuyenKhoan = 0;
        // }

        this.clearHinhThucThanhToan();
        this.defeautSoTien();

        this.setDefeautTienMat = [1];
        this.checkSeletedTienMat = true;
        this.flagCheckSeletedTienMat = true;
        this.thongtinDonThuoc.TienMat = this.tongTien;

        this.resetGiaTienCongNo();
        this.myDanhSachChuaThanhToan();

    }

    resetGiaTienCongNo() {
        this.dataSourcedanhsachThuoc.data.forEach(element => {
            if (element.CheckedDefault !== true) {
                if (element.DanhSachCongNoChoThus != null && element.DanhSachCongNoChoThus.length !== 0) {
                    element.DanhSachCongNoChoThus.forEach(congNo => {
                        congNo.SoTienCongNoChoThu = 0;
                    });
                }
            }
        });
    }

    themThuoc() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        if (this.themDuocPham.DuocPhamId == null) {
            this.validationErrors.push({ Message: 'Dược phẩm yêu cầu nhập', Field: 'DuocPhamId' });
        }
        if (this.themDuocPham.SoLuong == null || this.themDuocPham.SoLuong === 0) {
            this.validationErrors.push({ Message: 'Số lượng yêu cầu nhập', Field: 'SoLuong' });
        }
        if (this.themDuocPham.SoLuongTon < this.themDuocPham.SoLuong) {
            this.validationErrors.push({ Message: 'Số lượng phải nhỏ hơn tồn kho', Field: 'SoLuong' });
        }
        if (this.validationErrors.length > 0) {
            return;
        }

        let soLuongDaMua = 0;
        if (this.lstDonThuocMoiThem.length > 0) {
            this.lstDonThuocMoiThem.forEach(x => {
                if (x.DuocPhamId === this.themDuocPham.DuocPhamId) {
                    soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                }
            });
        }
        if (this.themDuocPham.SoLuongTon >= this.themDuocPham.SoLuong) {
            let stt = 1;
            let idNew = 1;
            if (this.dataSourcedanhsachThuoc.data.length > 0) {
                stt = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].STT + 1;
                idNew = this.dataSourcedanhsachThuoc.data[this.dataSourcedanhsachThuoc.data.length - 1].Id + 1;
            }

            let count = this.themDuocPham.SoLuong;
            let tamp = this.lstthongTinDonThuoc;
            if (this.lstDonThuocMoiThem != undefined || this.lstDonThuocMoiThem != null) {

                for (let jisoo = 0; jisoo < this.lstDonThuocMoiThem.length; jisoo++) {
                    for (let jihoo = 0; jihoo < this.lstthongTinDonThuoc.length; jihoo++) {
                        if (this.lstDonThuocMoiThem[jisoo].Solo == this.lstthongTinDonThuoc[jihoo].Solo) {
                            this.lstthongTinDonThuoc[jihoo].SoLuongTon = this.lstthongTinDonThuoc[jihoo].SoLuongTon - this.lstDonThuocMoiThem[jisoo].SoLuongMua;
                            tamp = this.lstthongTinDonThuoc;
                        }
                    }
                }
            }
            let dsMGThem1 = new DanhSachMienGiamVo();
            let dsMGThem2 = new DanhSachMienGiamVo();
            let danhSachMienGiamVos = new Array<DanhSachMienGiamVo>();
            dsMGThem1.DoiTuongUuDai = null;
            dsMGThem1.DoiTuongUuDaiId = null;
            dsMGThem1.LoaiChietKhau = 1;
            dsMGThem1.LoaiMienGiam = 3;
            dsMGThem1.MaTheVoucher = null;
            dsMGThem1.SoTien = 0;
            dsMGThem1.TheVoucherId = null;
            dsMGThem1.TiLe = 0;
            danhSachMienGiamVos.push(dsMGThem1);
            dsMGThem2.DoiTuongUuDai = null;
            dsMGThem2.DoiTuongUuDaiId = null;
            dsMGThem2.LoaiChietKhau = 2;
            dsMGThem2.LoaiMienGiam = 3;
            dsMGThem2.MaTheVoucher = null;
            dsMGThem2.SoTien = 0;
            dsMGThem2.TheVoucherId = null;
            dsMGThem2.TiLe = 0;
            danhSachMienGiamVos.push(dsMGThem2);
            for (let index = 0; index < tamp.length; index++) { // tmp don thuuoc
                if (tamp[index].SoLuongTon > 0) {
                    if (count !== 0) {
                        let item = new ThongTinDuocPham();
                        if (count <= this.lstthongTinDonThuoc[index].SoLuongTon) {
                            item = Object.assign({}, this.lstthongTinDonThuoc[index]);
                            item.SoLuongMua = count;
                            item.STT = stt;
                            item.Id = idNew;
                            item.CheckedDefault = true;
                            item.isNew = true;
                            item.BacSiKeToa = 'Nhà Thuốc';
                            item.ThanhTien = item.SoLuongMua * item.DonGia;
                            item.BNConPhaiThanhToan = item.ThanhTien;
                            item.ThanhTienHienThi = Math.round(item.ThanhTien);
                            item.DonGiaHienThi = Math.round(item.DonGia);
                            item.BNConPhaiThanhToanHienThi = Math.round(item.ThanhTien);
                            item.DanhSachCongNoChoThus = [];
                            item.DanhSachMienGiamVos = danhSachMienGiamVos;
                            if (this.danhSachCongNoChoThus.length > 0) {
                                if (this.danhSachCongNoChoThus[0].CongNoChoThus.length !== 0 ||
                                    this.danhSachCongNoChoThus == null || this.danhSachCongNoChoThus === undefined) {
                                    for (let i = 0; i < this.danhSachCongNoChoThus[0].CongNoChoThus.length; i++) {
                                        const congNo = new CongNoChoThu();
                                        congNo.ViTri = i;
                                        congNo.CongNoId = this.danhSachCongNoChoThus[0].CongNoChoThus[i].CongNoId;
                                        congNo.TenCongTy = this.danhSachCongNoChoThus[0].CongNoChoThus[i].TenCongTy;
                                        congNo.SoTienCongNoChoThu = 0;
                                        item.DanhSachCongNoChoThus.push(congNo);
                                    }
                                }
                            }

                            this.lstDonThuocMoiThem.push(item);
                            this.mySelectionInPage.push(idNew);
                            this.mySelection = this.mySelection.concat(this.mySelectionInPage);
                            this.lstthongTinDonThuoc[index].SoLuongTon = this.lstthongTinDonThuoc[index].SoLuongTon - count;
                            this.dataSourcedanhsachThuoc.data.push(item);
                            this.duocPhamCombobox.focusManual();
                            count = 0;
                        } else {
                            item = Object.assign({}, this.lstthongTinDonThuoc[index]);
                            item.SoLuongMua = this.lstthongTinDonThuoc[index].SoLuongTon;
                            item.ThanhTien = item.SoLuongMua * item.DonGia;
                            item.BNConPhaiThanhToan = Math.round(item.ThanhTien);
                            item.ThanhTienHienThi = Math.round(item.ThanhTien);
                            item.DonGiaHienThi = Math.round(item.DonGia);
                            item.BNConPhaiThanhToanHienThi = Math.round(item.ThanhTien);
                            item.STT = stt;
                            item.Id = idNew;
                            item.isNew = true;
                            item.CheckedDefault = true;
                            item.BacSiKeToa = 'Nhà Thuốc';
                            count = count - this.lstthongTinDonThuoc[index].SoLuongTon;
                            item.DanhSachCongNoChoThus = [];
                            item.DanhSachMienGiamVos = danhSachMienGiamVos;
                            if (this.danhSachCongNoChoThus.length > 0) {
                                if (this.danhSachCongNoChoThus[0].CongNoChoThus.length !== 0 ||
                                    this.danhSachCongNoChoThus == null || this.danhSachCongNoChoThus === undefined) {
                                    // tslint:disable-next-line: prefer-for-of
                                    for (let i = 0; i < this.danhSachCongNoChoThus[0].CongNoChoThus.length; i++) {
                                        const congNo = new CongNoChoThu();
                                        congNo.ViTri = i;
                                        congNo.CongNoId = this.danhSachCongNoChoThus[0].CongNoChoThus[i].CongNoId;
                                        congNo.TenCongTy = this.danhSachCongNoChoThus[0].CongNoChoThus[i].TenCongTy;
                                        congNo.SoTienCongNoChoThu = 0;
                                        item.DanhSachCongNoChoThus.push(congNo);
                                    }
                                }
                            }

                            this.lstDonThuocMoiThem.push(item);
                            this.mySelectionInPage.push(idNew);
                            this.mySelection = this.mySelection.concat(this.mySelectionInPage);
                            this.dataSourcedanhsachThuoc.data.push(item);
                            this.duocPhamCombobox.focusManual();
                            this.lstthongTinDonThuoc.splice(index, 1);
                            index = -1;
                        }
                        idNew++;
                        stt++;
                    } else {
                        break;
                    }
                }

            }
            if (this.lstDonThuocMoiThem.length > 0) {
                this.lstDonThuocMoiThem.forEach(x => {
                    if (x.DuocPhamId === this.themDuocPham.DuocPhamId) {
                        soLuongDaMua = soLuongDaMua + x.SoLuongMua;
                    }
                });
            }
            this.themDuocPham.SoLuongTon = this.themDuocPham.SoLuongTon - this.themDuocPham.SoLuong;

            this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
            this.tongTien = this.tongTienGrid;
            if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
                if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                    this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
                } else {
                    this.tongTien = 0;
                }
            }
            // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
            //     this.thongtinDonThuoc.TienMat = this.tongTien;
            // }

            let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
            if (items != null && items.length > 0) {
                this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
            }

            this.themDuocPham = new ThemDuocPham();
        } else {
            this.notificationService.showError('Số lượng bạn nhập lớn hơn số lượng tồn');
        }

        this.gridData = this.dataSourcedanhsachThuoc.data;
        this.setSelectAll();

        this.danhSachXemTruocBangKeThuocVaVatTu(this.dataSourcedanhsachThuoc.data);
    }

    // change số lượng mua trả các giá trị về bằng 0
    modelChangeSoLuongMua(ev: any, dsQuayThuocs: any) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === dsQuayThuocs.Id) {
                    this.dataSourcedanhsachThuoc.data[index].SoLuongMua = ev;
                    let soTienMGiam = this.tinhSoTienMiemGiam(this.dataSourcedanhsachThuoc.data[index]);
                    this.dataSourcedanhsachThuoc.data[index].SoTienMG = soTienMGiam;
                    this.dataSourcedanhsachThuoc.data[index].ThanhTien = ev * this.dataSourcedanhsachThuoc.data[index].DonGia;
                    this.changeInputSoTienMGBindGrid(this.dataSourcedanhsachThuoc.data[index]);
                    // this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan = this.dataSourcedanhsachThuoc.data[index].ThanhTien;
                    if (this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus != null) {
                        if (this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.length > 0) {
                            // tslint:disable-next-line: prefer-for-of
                            for (let i = 0; i < this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus.length; i++) {
                                this.dataSourcedanhsachThuoc.data[index].DanhSachCongNoChoThus[i].SoTienCongNoChoThu = 0;
                                this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu =
                                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                            }
                        }
                    }
                }
            }

        }
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            } else {
                this.tongTien = 0;
            }
        }

        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
    }

    modelChangeSoTienMg(ev: any, data: any) {
        data.SoTienMG = ev;
        this.changeInputSoTienMgBindGrid(data);
        this.myDanhSachChuaThanhToan();
    }

    changeInputSoTienMgBindGrid(data: any) {
        const totalCongNo = this.itemTotalCongNo(data.DanhSachCongNoChoThus);
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === data.Id) {
                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan =
                        this.dataSourcedanhsachThuoc.data[index].ThanhTien - totalCongNo - data.SoTienMG;

                    this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu =
                        this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                }
            }
        }

        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            } else {
                this.tongTien = 0;
            }
        }
        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }
        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
    }

    getThongTinMienGiam(id: number) {
        this.apiService.get<any>('ThuNgan/GetThongTinMienGiam?yeuCauTiepNhanId=' + id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.thongTinMienGiamVos = resultData;
                this.bindChiaPhanTramDoiTuongUuDai();

                if (this.apDungMienGiam === true) {
                    this.notificationService.showSuccess('Áp dụng miễn giảm thành công.');
                }

                this.afterChangedMg.emit();
            }
        });
        this.cdRef.detectChanges();
    }

    modelChangeCongNo(ev: any, data: any, vtri: number) {
        data.DanhSachCongNoChoThus[vtri].SoTienCongNoChoThu = ev;
        data.SoTienMG = 0;
        this.changeInputCongNoBindGrid(data);
        this.myDanhSachChuaThanhToan();
    }

    changeInputCongNoBindGrid(data: any) {
        const totalCongNo = this.itemTotalCongNo(data.DanhSachCongNoChoThus);

        // tslint:disable-next-line: prefer-for-
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === data.Id) {
                    this.dataSourcedanhsachThuoc.data[index].SoTienMG = this.tinhSoTienMiemGiam(this.dataSourcedanhsachThuoc.data[index]);
                    this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan =
                        this.dataSourcedanhsachThuoc.data[index].ThanhTien - totalCongNo - this.dataSourcedanhsachThuoc.data[index].SoTienMG;
                    this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu =
                        this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                }
            }
        }

        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            } else {
                this.tongTien = 0;
            }
        }

        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }

        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }
    }

    modelChangePos(ev: any, type: any) {
        const total = (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.SoTienCongNo) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienPos = [total, 0];

        this.thongtinDonThuoc.POS = ev;
        this.onValueChange(ev, type);
    }

    modelChangeChuyenKhoan(ev: any, type: any) {
        const total = (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo) !== 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienChuyenKhoan = [total, 0];
        this.thongtinDonThuoc.ChuyenKhoan = ev;
        this.onValueChange(ev, type);
    }

    modelChangeTienMat(ev: any, type: any) {
        const total = (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo);
        this.selectMoneyTienMat = [total, 0];

        this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
        this.thongtinDonThuoc.TienMat = ev;
        this.onValueChange(ev, type);
    }

    modelChangeSoTienCongNo(ev: any, type: any) {
        const total = (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.TienMat) === 0 ?
            this.tongTien : this.tongTien - (this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.TienMat);
        this.selectMoneySoTienCongNo = [total, 0];

        this.thongtinDonThuoc.SoTienCongNo = ev;
        this.onValueChange(ev, type);
    }

    modelChangeTienBNDua(input: any) {
        this.selectMoneyTienBNDua = [this.tongTien, 100000000];
        this.thongtinDonThuoc.TienTraLai = input - this.thongtinDonThuoc.TienMat;

        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }

    onChangeBenhNhanDua() {
        this.thongtinDonThuoc.TienTraLai = this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }

    // Begin pttt và công nợ cho quầy thuốc 21/08/2020
    defeautSoTien() {
        this.thongtinDonThuoc.TienMat = 0;
        this.thongtinDonThuoc.POS = 0;
        this.thongtinDonThuoc.SoTienCongNo = 0;
        this.thongtinDonThuoc.ChuyenKhoan = 0;
        this.thongtinDonThuoc.BenhNhanDua = 0;
        this.thongtinDonThuoc.TienTraLai = 0;
    }

    tinhTienChoPhuongThucThanhToan(item: any) {
        switch (item) {
            case 1:
                this.thongtinDonThuoc.TienMat = this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.TienMat < 0) {
                    this.thongtinDonThuoc.TienMat = 0;
                }
                break;
            case 2:
                this.thongtinDonThuoc.ChuyenKhoan = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.ChuyenKhoan < 0) {
                    this.thongtinDonThuoc.ChuyenKhoan = 0;
                }
                break;
            case 3:
                this.thongtinDonThuoc.POS = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.SoTienCongNo;
                if (this.thongtinDonThuoc.POS < 0) {
                    this.thongtinDonThuoc.POS = 0;
                }
                break;
            case 4:
                this.thongtinDonThuoc.SoTienCongNo = this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS;
                if (this.thongtinDonThuoc.SoTienCongNo < 0) {
                    this.thongtinDonThuoc.SoTienCongNo = 0;
                }
                break;
        }
    }

    ChangeHinhThucThanhToan(event: any) {
        this.clearHinhThucThanhToan();
        this.defeautSoTien();
        this.showCanhBaoSoTienNhap = false;
        var items = this.hinhThucThanhToan.filter((item) => item.Selected == true);

        if (items != null && items.length === 1) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }

        event.forEach((element) => {
            switch (element) {
                case 1:
                    this.flagCheckSeletedTienMat = true;
                    break;
                case 2:
                    this.flagCheckSeletedChuyenKhoan = true;
                    break;
                case 3:
                    this.flagCheckSeletedPos = true;
                    break;
                case 4:
                    this.flagCheckSeletedSoTienCongNo = true;
                    break;
            }
        });

        this.hinhThucThanhToan.forEach(item => { item.Change = false; });
        this.hinhThucThanhToan.forEach(item => {
            if (event.filter(o => o == item.KeyId).length > 0) {
                item.Selected = true;
                if (event.length == 1) {
                    switch (item.KeyId) {
                        case 1:
                            this.thongtinDonThuoc.TienMat = this.tongTien;
                            break;
                        case 2:
                            this.thongtinDonThuoc.ChuyenKhoan = this.tongTien;
                            break;
                        case 3:
                            this.thongtinDonThuoc.POS = this.tongTien;
                            break;
                        case 4:
                            this.thongtinDonThuoc.SoTienCongNo = this.tongTien;
                            break;
                    }
                }
            }
            else {
                item.Selected = false;
            }
        });

        this.cdRef.detectChanges();
    }

    onValueChange(event: any, type: number) {
        if (this.thongtinDonThuoc.TienTraLai < 0) {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
        this.hinhThucThanhToan.forEach(item => {
            if (item.KeyId == type) {
                item.Change = true;
            }
        });
        var itemNotChanges = this.hinhThucThanhToan.filter(o => o.Selected == true && o.Change == false);
        if (itemNotChanges.length == 1) {
            this.changeSoTien(itemNotChanges[0].KeyId);
        }
        else {
            if (itemNotChanges.length == 0 && this.hinhThucThanhToan.filter(o => o.Selected == true).length == 2) {
                var items = this.hinhThucThanhToan.filter(o => o.Selected == true && o.KeyId != type);
                this.changeSoTien(items[0].KeyId);
            }
        }
        if (this.thongtinDonThuoc.TienMat + this.thongtinDonThuoc.ChuyenKhoan + this.thongtinDonThuoc.POS + this.thongtinDonThuoc.SoTienCongNo != this.tongTien) {
            this.showCanhBaoSoTienNhap = true;
        }
        else {

            this.showCanhBaoSoTienNhap = false;
        }
        this.changeTienTraLaiBenhNhan();
    }

    changeSoTien(items: any) {
        switch (items) {
            case 1:
                this.thongtinDonThuoc.TienMat = (this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 2:
                this.thongtinDonThuoc.ChuyenKhoan = (this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 3:
                this.thongtinDonThuoc.POS = (this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.SoTienCongNo) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.SoTienCongNo;
                break;
            case 4:
                this.thongtinDonThuoc.SoTienCongNo = (this.tongTien - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.POS) < 0 ? 0 :
                    this.tongTien - this.thongtinDonThuoc.ChuyenKhoan - this.thongtinDonThuoc.TienMat - this.thongtinDonThuoc.POS;
                break;
        }
    }

    changeTienTraLaiBenhNhan() {
        if (this.thongtinDonThuoc.BenhNhanDua > this.thongtinDonThuoc.TienMat) {
            this.thongtinDonThuoc.TienTraLai =
                this.thongtinDonThuoc.BenhNhanDua - this.thongtinDonThuoc.TienMat;
        } else {
            this.thongtinDonThuoc.TienTraLai = 0;
        }
    }
    // End pttt và công nợ cho quầy thuốc 21/08/2020
    onKeyEnterAddItem(event: any) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {

                this.themThuoc();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }

    openCombobox(event: any) {
        if (event) {
            this.isSelectingItem = true;
        }
        else {
            this.isSelectingItem = false;
        }
    }
    onKey(event: any) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {

                this.themThuoc();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }
    apDungMiemGiamThem() {
        let dataMGT = new ApDungMiemGiamThem;
        if (this.confrim != null) {
            this.dialog.closeAll();
            this.confrim = null;
        }
        this.confrim = this.dialog.open(ApDungMiemGiamThemPopupComponent, {
            disableClose: true,
            width: "500px",
            data: { dataMGT }
        }).afterClosed().subscribe((result) => {
            if (result != null) {
                // this.dataSourcedanhsachThuoc.data.forEach(element => {
                //     if(element.DanhSachMienGiamVos != null)
                //     {
                //         for (const danhSachMienGiam of element.DanhSachMienGiamVos.filter(x => x.LoaiMienGiam === this.loaiMienGiam.MienGiamThem)) {
                //             element.DanhSachMienGiamVos.splice(element.DanhSachMienGiamVos.indexOf(danhSachMienGiam), 1);
                //         }
                //     }
                // });

                this.dataSourcedanhsachThuoc.data.forEach(element => {
                    element.GhiChuMienGiamThem = result.GhiChu;
                    element.DanhSachMienGiamVos = new Array<DanhSachMienGiamVo>();
                    if (result.TiLe != undefined && result.TiLe != null) {
                        let dsMiemGiamThem = new DanhSachMienGiamVo();
                        dsMiemGiamThem.LoaiMienGiam = this.loaiMienGiam.MienGiamThem;
                        dsMiemGiamThem.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoTiLe;
                        dsMiemGiamThem.TiLe = result.TiLe;
                        element.DanhSachMienGiamVos.push(dsMiemGiamThem);
                    }
                    if (result.SoTien != undefined && result.SoTien != null) {
                        let dsMiemGiamThem = new DanhSachMienGiamVo();
                        dsMiemGiamThem.LoaiMienGiam = this.loaiMienGiam.MienGiamThem;
                        dsMiemGiamThem.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
                        dsMiemGiamThem.SoTien = result.SoTien;
                        dsMiemGiamThem.SoTienMiemGiamTatCa = result.SoTien;
                        element.DanhSachMienGiamVos.push(dsMiemGiamThem);
                    }
                });
                console.log(result)

                // console.log("data miễn giảm",this.dataSourcedanhsachThuoc.data);
                this.dataSourcedanhsachThuoc.data.forEach(element => {
                    element.SoTienMG = this.tinhSoTienMiemGiam(element);
                    if (element.SoTienMG > element.BNConPhaiThanhToan) {
                        this.notificationService.showSuccess('Số tiền áp dụng lớn hơn số tiền cần thanh toán.');
                    }
                    // số tiền người bệnh phải trả đã trừ số tiền miễn giảm
                    let soTienCN = this.soTienCongNoChoTungDichVu(element);
                    if (element.BNConPhaiThanhToan >= element.SoTienMG) {
                        element.BNConPhaiThanhToan = ((element.DonGia * element.SoLuongMua)) - soTienCN - element.SoTienMG;
                    }
                });
                this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
                this.tongTien = this.tongTienGrid;
                if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
                    if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                        this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
                    } else {
                        this.tongTien = 0;
                    }
                }
                // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
                //     this.thongtinDonThuoc.TienMat = this.tongTien;
                // }
                let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
                if (items != null && items.length > 0) {
                    this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
                }
                this.notificationService.showSuccess("Áp dụng miễn giảm thành công.");
            }
        });
    }

    public tongTatCaSoTienMg: any;

    tinhSoTienMiemGiam(dataItem: any) {
        let tongTatCaSoTienMg = 0;
        var tiLePhanTramConLai = 100;
        let tongTienTungDichVu = ((dataItem.DonGia * dataItem.SoLuongMua)) - this.soTienCongNoChoTungDichVu(dataItem);

        var soTienConLai = tongTienTungDichVu;
        if (tongTienTungDichVu > 0) {
            var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 1 && item.TiLe != 0);
            var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 2 && item.SoTien != 0);
            if (dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0) {
                //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
                dsMienGiamTheoPhanTram = _.sortBy(dsMienGiamTheoPhanTram, 'LoaiMienGiam');
                dsMienGiamTheoPhanTram.forEach(item => {
                    //Nếu tỉ lệ còn lại sau khi đổ từ trên xuống
                    if (tiLePhanTramConLai > 0) {
                        item.TiLe = item.TiLe > tiLePhanTramConLai ? tiLePhanTramConLai : item.TiLe;
                    }
                    else {
                        item.TiLe = 0;
                    }
                    item.TongTienMiemGiam = (item.TiLe * tongTienTungDichVu) / 100;
                    tongTatCaSoTienMg += item.TongTienMiemGiam;
                    if (item.TiLe >= tiLePhanTramConLai) {
                        tiLePhanTramConLai = 0;
                    }
                    else {
                        tiLePhanTramConLai = tiLePhanTramConLai - item.TiLe;
                    }
                });
            }
            if (tiLePhanTramConLai > 0 && dsMienGiamTheoSoTien != null && dsMienGiamTheoSoTien.length > 0) {
                tiLePhanTramConLai = dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0 ? tiLePhanTramConLai : 0;
                soTienConLai = tiLePhanTramConLai != 0 ? (((dataItem.ThanhTien - this.soTienCongNoChoTungDichVu(dataItem)) * tiLePhanTramConLai) / 100) : dataItem.ThanhTien - this.soTienCongNoChoTungDichVu(dataItem);
                //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
                dsMienGiamTheoSoTien = _.sortBy(dsMienGiamTheoSoTien, 'LoaiMienGiam');
                dsMienGiamTheoSoTien.forEach(item => {
                    //Nếu số tiền còn lại sau khi đổ từ trên xuống
                    if (soTienConLai > 0) {
                        item.SoTien = item.SoTien > soTienConLai ? soTienConLai : item.SoTien;
                    }
                    else {
                        item.SoTien = 0;
                    }
                    item.TongTienMiemGiam = item.SoTien;
                    tongTatCaSoTienMg += item.TongTienMiemGiam;
                    if (item.SoTien >= soTienConLai) {
                        soTienConLai = 0;
                    }
                    else {
                        soTienConLai = soTienConLai - item.SoTien;
                    }
                });
            } else {
                dsMienGiamTheoSoTien = _.sortBy(dsMienGiamTheoSoTien, 'LoaiMienGiam');
                dsMienGiamTheoSoTien.forEach(item => {
                    //NẾU PHẦN TRĂM MÀ SÀI HẾT THÌ BIND TIỀN TẤT CẢ CON LẠI BẰNG 0
                    item.SoTien = 0;
                });
            }
        }
        return tongTatCaSoTienMg < 0 ? 0 : tongTatCaSoTienMg;

    }

    soTienCongNoChoTungDichVu(dataItem: any) {
        let soTienCongNo = 0;
        if (dataItem.DanhSachCongNoChoThus != null) {
            dataItem.DanhSachCongNoChoThus.forEach(element => {
                soTienCongNo = soTienCongNo + element.SoTienCongNoChoThu;
            });
        }
        return soTienCongNo;
    }

    apDungMiemGiamChoTungDichVu(dataItem: any) {
        // this.dataSourcedanhsachThuoc.data = this.danhSachChiPhiKhamChuaBenh;
        let isView = true;
        if (this.confrim != null) {
            this.dialog.closeAll();
            this.confrim = null;
        }
        this.confrim = this.dialog.open(ApDungMiemGiamChoTungLoaiThuocPopupComponent, {
            disableClose: true,
            width: "500px",
            data: { dataItem, isView },
        }).afterClosed().subscribe((result) => {
            if (result != null) {
                //tính số tiền miễm giam tren grid                
                if (result.apdungMGTThanhCong) {

                    this.dataSourcedanhsachThuoc.data.forEach(element => {
                        if (element.Id === result.Id) {
                            element.GhiChuMienGiamThem = result.GhiChuMienGiamThem;
                            element.SoTienMG = this.tinhSoTienMiemGiam(element);
                            this.modelChangeSoTienMG(element);
                        }
                    });
                    console.log("data", this.dataSourcedanhsachThuoc.data)
                    this.notificationService.showSuccess("Áp dụng miễn giảm thành công.");
                }
                else {
                    this.dataSourcedanhsachThuoc.data.forEach(element => {
                        if (element.Id === result.Id) {
                            if (element.DanhSachMienGiamVos != null) {
                                element.DanhSachMienGiamVos.forEach(item => {
                                    result.DanhSachMienGiamVos.forEach(item1 => {
                                        if (item1.LoaiMienGiam === item.LoaiMienGiam && item1.LoaiChietKhau === 1) {
                                            { item.TiLe = item1.TiLe; item.TongTienMiemGiam = 0; item.DaSuDung = false }
                                        }
                                        if (item1.LoaiMienGiam === item.LoaiMienGiam && item1.LoaiChietKhau === 2) {
                                            { item.SoTien = item1.SoTien; item.TongTienMiemGiam = 0; item.DaSuDung = false }
                                        }
                                    });
                                });
                            }
                        }
                    });
                }
            }
        });
    }

    modelChangeSoTienMG(data: any) {
        this.changeInputSoTienMGBindGrid(data);
        this.myDanhSachChuaThanhToan();
    }

    changeInputSoTienMGBindGrid(dsChiPhiKhamChuaBenh: any) {
        for (let index = 0; index < this.dataSourcedanhsachThuoc.data.length; index++) {
            let totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
            if (this.dataSourcedanhsachThuoc.data[index].CheckedDefault === true) {
                if (this.dataSourcedanhsachThuoc.data[index].Id === dsChiPhiKhamChuaBenh.Id) {
                    dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG;
                    this.dataSourcedanhsachThuoc.data[index].KiemTraTienSoTienItemDichVu = this.dataSourcedanhsachThuoc.data[index].BNConPhaiThanhToan < 0 ? true : false;
                }
            }
        }
        this.gridData = process(this.dataSourcedanhsachThuoc.data, this.state);
        this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0) + 0.0000001);
        this.tongTien = this.tongTienGrid;
        if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
            if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
                this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
            } else {
                this.tongTien = 0;
            }
        }

        let items = this.hinhThucThanhToan.filter((item) => item.Selected == true);
        if (items != null && items.length > 0) {
            this.tinhTienChoPhuongThucThanhToan(items[0].KeyId);
        }

        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }
        // this.tongTienGrid = Math.round(this.dataSourcedanhsachThuoc.data.reduce((sum, item) => sum + item.BNConPhaiThanhToan, 0));
        // this.tongTien = this.tongTienGrid;
        // if (this.benhnhanThongTin.SoDuTaiKhoan > 0) {
        //     if (this.tongTien > this.benhnhanThongTin.SoDuTaiKhoan) {
        //         this.tongTien -= this.benhnhanThongTin.SoDuTaiKhoan;
        //     } else {
        //         this.tongTien = 0;
        //     }
        // }
        // if (this.thongtinDonThuoc.HinhThucThanhToan.indexOf(1) >= 0) {
        //     this.thongtinDonThuoc.TienMat = this.tongTien;
        // }

    }

    nguoiBenhKhongMuaThuoc() {
        debugger;
        var self = this; 
        const yeuCauTiepNhanId: number = this.route.snapshot.params.id;    
        if (this.dataSourcedanhsachThuoc.data.length > 0) {
            var nguoiDungKhongMuaDonThuoc = new NguoiDungKhongMuaDonThuoc();         
            nguoiDungKhongMuaDonThuoc.YeuCauTiepNhanId = yeuCauTiepNhanId;
            if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
                self.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: "Người bệnh không muốn mua thuốc này?"}
                }).afterClosed().subscribe(result => {
                    if (result == "Yes") {
                        self.apiService.post("QuayThuoc/NguoiBenhKhongMuaDonThuoc", nguoiDungKhongMuaDonThuoc).subscribe(
                            () => {
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                                this.router.navigate(['nha-thuoc']);
                            },
                            (err: ApiError) => {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                }
                            });
                    }
                });
            }
            else {
                self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
    }

    showPopupLoadingIn() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang loading...' },
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }
}
