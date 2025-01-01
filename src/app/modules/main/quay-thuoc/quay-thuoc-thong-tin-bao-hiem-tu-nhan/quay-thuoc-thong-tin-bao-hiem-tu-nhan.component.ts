import { Component, OnInit, ViewChild, TemplateRef, EventEmitter, Output, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';

@Component({
    selector: 'app-quay-thuoc-thong-tin-bao-hiem-tu-nhan',
    templateUrl: './quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.html',
    styleUrls: ['./quay-thuoc-thong-tin-bao-hiem-tu-nhan.component.scss']
})
export class QuayThuocThongTinBaoHiemTuNhanComponent implements OnInit, OnChanges {
    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private cdRef: ChangeDetectorRef,
        private notificationService: NotificationService
    ) { }
    gridChildColumns2: any[] = [];
    documentType: DocumentType;
    idMYCTN: number = this.route.snapshot.params.id;
    @ViewChild('actionTemplateSTCongNo', { static: true }) actionTemplateSTCongNo: TemplateRef<any>;
    @ViewChild('actionTemplateSubmitCongNo', { static: true }) actionTemplateSubmitCongNo: TemplateRef<any>;
    apDungCongNo: boolean = false;
    thongTinBenhNhantam: any = [];
    @Output() valueChangeBaoHiem = new EventEmitter<any>();
    @Output() valueChangeMg = new EventEmitter<any>();
    dataSourceDanhSachBHTN = {
        data: [],
        total: 0
    };
    checkHaveBHTN: boolean = false;
    flagEnableVoucher: boolean = false;
    flagApDung: boolean = false;
    thongTinMienGiamThem: any = [];
    thongTinMienGiamVo: any;
    thongTinMienGiamVoucher: any = [];
    disabledVoucher: boolean = false;
    flagEnableMGThem: boolean = false;
    disabledMGThem: boolean = false;
    disabledSoTienMG: boolean = true;
    disabledTiLeMG: boolean = true;
    isExistFile: boolean = false;
    soTienMgCheck: boolean = true;
    tiLeMgCheck: boolean = false;
    listVouchers: number[] = [];
    listOldVouchers: number[] = [];
    quayThuocValidationErrors: any = [];
    apDungMienGiam: boolean = false;
    idBenhNhan: number = 0;
    @Input() tongTienBNThanhToan: number;
    tongTienBNThanhToanPrivate: number = 0;
    public checkHiddenSoTienConLai: boolean = false;
    loaiVoucher: number = 0;
    @ViewChild('voucherList', { static: false }) voucherList: MultiselectComponent;
    khachVangLaiMuaThuoc: boolean = false;
    format: string = 'n2';
    
    ngOnInit() {
        this.documentType = DocumentType.QuayThuoc;
        this.gridChildColumns2 = [
            { Field: "TenCongTy", Title: "Công Ty", Width: 231 },
            { Field: "SoThe", Title: "Số Thẻ", Width: 111 },
            { Field: "TuNgayHienThi", Title: "Từ ngày", Width: 96 },
            { Field: "DenNgayHienThi", Title: "Đến ngày", Width: 104 },
            { Field: "DienThoai", Title: "Điện thoại", Width: 122 },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 240 },
            { Field: "CongNo", Title: "Công nợ", Width: 115, Template: this.actionTemplateSTCongNo },
            { Field: "", Title: "", Width: 125, Template: this.actionTemplateSubmitCongNo }
        ];
        this.idBenhNhan = this.route.snapshot.params.idsub;
        this.getDanhSachBHTN();
    }

    ngOnChanges() {
        this.tongTienBNThanhToanPrivate = this.tongTienBNThanhToan;
    }

    getDanhSachBHTN() {
        this.apiService.get<any>("QuayThuoc/GetListCongTyBaoHiemTuNhans?tiepNhanId=" + this.idMYCTN).subscribe(
            resultData => {
                if (resultData != null && resultData != undefined) {
                    this.dataSourceDanhSachBHTN.data = resultData;
                    this.dataSourceDanhSachBHTN.data.forEach(element => {
                        var congNoItem = {
                            Id: element.Id,
                            CongNoId: element.CongNoId,
                            SoTien: element.SoTien,
                            TenCongTy: element.TenCongTy
                        };
                        this.thongTinBenhNhantam.push(congNoItem);
                    });

                    this.CheckThongTinBenhNhan(this.idMYCTN);
                }
            });
    }

    CheckThongTinBenhNhan(tiepNhanId: number) {
        this.apiService.post<Array<any>>("QuayThuoc/CheckBenhNhanExistBaoHiemTuNhan?yctnId=" + tiepNhanId).subscribe(
            resultData => {
                if (resultData.length > 0) {
                    this.checkHaveBHTN = true;
                } else {
                    this.checkHaveBHTN = false;
                }

                this.getThongTinMienGiam(tiepNhanId);
            }, () => { });
    }

    getThongTinMienGiam(id: number) {
        this.apiService.get<any>("ThuNgan/GetThongTinMienGiam?yeuCauTiepNhanId=" + id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.khachVangLaiMuaThuoc = resultData.KhachVangLaiMuaThuoc;
                if (resultData.ThongTinMienGiamVoucherVo != null || resultData.ThongTinMienGiamVoucherVo != undefined) {
                    this.flagApDung = true;
                    this.flagEnableVoucher = true;
                    if (this.flagEnableVoucher === true) {
                        this.disabledVoucher = true;
                    }

                    this.listVouchers = [];

                    resultData.ThongTinMienGiamVoucherVo.MaVouchers.forEach(element => {
                        this.listVouchers.push(element.KeyId);
                        this.listOldVouchers.push(element.KeyId);
                    });

                    this.thongTinMienGiamVoucher = {
                        MaVouchers: resultData.ThongTinMienGiamVoucherVo.MaVouchers,
                        DuocPhamMienGiamTheoTiLes: resultData.ThongTinMienGiamVoucherVo.DuocPhamMienGiamTheoTiLes,
                        LoaiVoucher: resultData.ThongTinMienGiamVoucherVo.LoaiVoucher,
                        TenVoucher: resultData.ThongTinMienGiamVoucherVo.TenVoucher,
                        SoTienVoucherMiemGiam: resultData.ThongTinMienGiamVoucherVo.LoaiVoucher.SoTienVoucherMiemGiam
                    };

                    this.loaiVoucher = resultData.ThongTinMienGiamVoucherVo.LoaiVoucher;
                }

                if (resultData.ThongTinMienGiamThemVo != null || resultData.ThongTinMienGiamThemVo != undefined) {
                    this.flagApDung = true;
                    this.flagEnableMGThem = true;
                    if (this.flagEnableMGThem === true) {
                        this.disabledMGThem = true;
                    }

                    this.thongTinMienGiamThem = {
                        LoaiMienGiamThem: resultData.ThongTinMienGiamThemVo.LoaiMienGiamThem,
                        LyDoMiemGiam: resultData.ThongTinMienGiamThemVo.LyDoMiemGiam,
                        SoTienMG: resultData.ThongTinMienGiamThemVo.SoTienMG,
                        SoTienMGConLai: resultData.ThongTinMienGiamThemVo.SoTienMGConLai,
                        TiLeMienGiam: resultData.ThongTinMienGiamThemVo.TiLeMienGiam,
                        NhanVienDuyetMienGiamThemId: resultData.ThongTinMienGiamThemVo.NhanVienDuyetMienGiamThemId,
                        TenNhanVienDuyet: resultData.ThongTinMienGiamThemVo.TenNhanVienDuyet,
                        TaiLieuDinhKemGiayMiemGiam: {
                            Id: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.Id,
                            Ma: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.Ma,
                            DuongDan: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.DuongDan,
                            MoTa: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.MoTa,
                            KichThuoc: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.KichThuoc,
                            LoaiTapTin: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.LoaiTapTin,
                            Ten: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.Ten,
                            TenGuid: resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam.TenGuid
                        }
                    };

                    if (this.thongTinMienGiamThem.SoTienMG != 0) {
                        this.disabledSoTienMG = false;
                        this.soTienMgCheck = true;
                        this.tiLeMgCheck = false;
                    }

                    if (this.thongTinMienGiamThem.TiLeMienGiam != 0) {
                        this.disabledTiLeMG = false;
                        this.soTienMgCheck = false;
                        this.tiLeMgCheck = true;
                    }

                    if (this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam.Ten != null) {
                        this.isExistFile = true;
                    }
                } else {
                    this.disabledSoTienMG = false;
                    this.thongTinMienGiamThem = {
                        LoaiMienGiamThem: null,
                        LyDoMiemGiam: null,
                        SoTienMG: 0,
                        SoTienMGConLai: 0,
                        TiLeMienGiam: 0,
                        TaiLieuDinhKemGiayMiemGiam: {
                            Ma: null,
                            DuongDan: null,
                            MoTa: null,
                            KichThuoc: null,
                            LoaiTapTin: null,
                            Ten: null,
                            TenGuid: null
                        }
                    };
                }
            }
        });
    }

    uploadFileDone(tapTin: any) {
        this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam = tapTin;
        this.cdRef.detectChanges();
    }

    onApplyMGThem() {
        this.thongTinMienGiamVo = {
            ThongTinMienGiamVoucherVo: this.thongTinMienGiamVoucher,
            ThongTinMienGiamThemVo: this.thongTinMienGiamThem,
        }
        this.apDungMienGiam = true;
        var loaiMGThem = 1;

        if (this.soTienMgCheck) {
            loaiMGThem = 1;
        }

        if (this.tiLeMgCheck) {
            loaiMGThem = 2;
        }

        if (this.thongTinMienGiamThem.SoTienMG != 0) {
            this.thongTinMienGiamThem.LoaiMienGiamThem = 1;
            this.thongTinMienGiamThem.TiLeMienGiam = 0;
        }

        if (this.thongTinMienGiamThem.TiLeMienGiam != 0) {
            this.thongTinMienGiamThem.LoaiMienGiamThem = 2;
            this.thongTinMienGiamThem.SoTienMG = 0;
        }

        var thongTinMGThem = {
            ValidateVoucher: this.flagEnableVoucher,
            IdYeuCauTiepNhan: this.idMYCTN,
            ListVouchers: this.listVouchers,
            ValidateMGThem: this.flagEnableMGThem,
            LoaiMienGiamThem: loaiMGThem,
            LyDoMienGiam: this.thongTinMienGiamThem.LyDoMiemGiam,
            TaiLieuDinhKem: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
            SoTienMG: this.thongTinMienGiamThem.SoTienMG,
            TiLeMienGiam: this.thongTinMienGiamThem.TiLeMienGiam,
            SoTienMGConLai: this.thongTinMienGiamThem.SoTienMGConLai,
            BenhNhanId: this.idBenhNhan,
            NhanVienDuyetMienGiamThemId: this.thongTinMienGiamThem.NhanVienDuyetMienGiamThemId
        };

        this.quayThuocValidationErrors = null;
        this.apiService.post<any>("ThuNgan/ThemThongTinMiemGiamThemVaVoucher", thongTinMGThem)
            .subscribe(resultData => {
                if (resultData) {
                    this.getThongTinMienGiam(this.idMYCTN);
                }

                this.apDungMienGiam = true;
                var mienGiamObj = {
                    apDungMienGiam: this.apDungMienGiam,
                    thongTinMienGiam: this.thongTinMienGiamVo
                };
                this.valueChangeMg.emit(mienGiamObj);
            }, (err: ApiError) => {
                this.quayThuocValidationErrors = err.ValidationErrors;
                this.disabledSoTienMG = true;
                this.thongTinMienGiamThem = {
                    LoaiMienGiamThem: loaiMGThem,
                    LyDoMiemGiam: this.thongTinMienGiamThem.LyDoMiemGiam,
                    SoTienMG: this.thongTinMienGiamThem.SoTienMG,
                    TiLeMienGiam: this.thongTinMienGiamThem.TiLeMienGiam,
                    SoTienMGConLai: this.thongTinMienGiamThem.SoTienMGConLai,
                    TaiLieuDinhKemGiayMiemGiam: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
                };
            });
    }

    onChangeLoaiMg(value: any) {
        if (value === 1) {
            this.soTienMgCheck = true;
            this.tiLeMgCheck = false;
            this.disabledSoTienMG = false;
            this.disabledTiLeMG = true;
            this.checkHiddenSoTienConLai = false;
            this.thongTinMienGiamThem.TiLeMienGiam = 0;
        }

        if (value === 2) {
            this.soTienMgCheck = false;
            this.tiLeMgCheck = true;
            this.disabledSoTienMG = true;
            this.disabledTiLeMG = false;
            this.checkHiddenSoTienConLai = true;
            this.thongTinMienGiamThem.SoTienMG = 0;
        }
    }

    onKeyCongNo(event: any, indexRow: any) {
        if (event.key == "Enter") {
            this.ApDungCongNo(indexRow);
        }
    }

    ApDungCongNo(indexRow: any) {
        if (this.dataSourceDanhSachBHTN.data[indexRow].SoTien != 0) {
            this.thongTinBenhNhantam[indexRow].SoTien = this.dataSourceDanhSachBHTN.data[indexRow].SoTien;

            this.apDungCongNo = true;

            var apDungCongNoQuayThuoc = {
                apDungCongNoThuoc: this.apDungCongNo,
                viTri: indexRow,
                thongTinTam: this.thongTinBenhNhantam
            }
            this.dataSourceDanhSachBHTN.data[indexRow].SoTien = 0;
            this.valueChangeBaoHiem.emit(apDungCongNoQuayThuoc);
        }
    }

    onChangeVoucher(data: any) {
        if (data === false) {
            this.flagEnableVoucher = false;
            if (this.flagEnableMGThem) {
                this.flagApDung = true;
                return;
            }

            this.flagApDung = false;
        } else {
            this.flagEnableVoucher = true;
            this.flagApDung = true;

            if (this.quayThuocValidationErrors == null) {
                this.quayThuocValidationErrors = [];
            }

            var lengthQuayThuocValidators = this.quayThuocValidationErrors.length;

            if (lengthQuayThuocValidators != 0) {
                for (let i = 0; i < lengthQuayThuocValidators; i++) {
                    if (this.quayThuocValidationErrors.length - 1 < i) {
                        //exceed
                        break;
                    }

                    if (this.quayThuocValidationErrors[i].Field == "ListVouchers") {
                        this.quayThuocValidationErrors.splice(i, 1);
                        if (i != 0) { i--; }
                    }
                }
            }
        }
    }

    onChangeMienGiam(data: any) {
        if (data === false) {
            this.flagEnableMGThem = false;
            if (this.flagEnableVoucher == false && this.flagEnableMGThem == false) {
                this.flagApDung = false;
            }
            if (this.flagEnableVoucher == true) {
                this.flagApDung = true;
            }
        } else {
            this.flagEnableMGThem = true;
            this.flagApDung = true;
            this.soTienMgCheck = true;
            this.tiLeMgCheck = false;

            if (this.quayThuocValidationErrors == null) {
                this.quayThuocValidationErrors = [];
            }

            var lengthQuayThuocValidators = this.quayThuocValidationErrors.length;

            if (lengthQuayThuocValidators != 0) {
                for (let i = 0; i < lengthQuayThuocValidators; i++) {
                    if (this.quayThuocValidationErrors.length - 1 < i) {
                        //exceed
                        break;
                    }

                    if (this.quayThuocValidationErrors[i].Field == "SoTienMG") {
                        this.quayThuocValidationErrors.splice(i, 1);
                        if (i != 0) { i--; }
                    }

                    if (this.quayThuocValidationErrors[i].Field == "LyDoMienGiam") {
                        this.quayThuocValidationErrors.splice(i, 1);
                        if (i != 0) { i--; }
                    }

                    if (this.quayThuocValidationErrors[i].Field == "TiLeMienGiam") {
                        this.quayThuocValidationErrors.splice(i, 1);
                        if (i != 0) { i--; }
                    }

                    if (this.quayThuocValidationErrors[i].Field == "TaiLieuDinhKem") {
                        this.quayThuocValidationErrors.splice(i, 1);
                        if (i != 0) { i--; }
                    }
                }
            }
        }
    }

    onOpenChange() {
        this.voucherList.getDataForLookup();
    }

    onSelectChangeVoucher(voucherId: any) {
        if (voucherId.length == 0)
            this.loaiVoucher = 0
        var last = voucherId[voucherId.length - 1];
        this.apiService.post<any>("ThuNgan/GetMaVoucher?loaiVoucher=" + this.loaiVoucher).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                resultData.forEach(element => {
                    if (element.KeyId == last) {
                        this.loaiVoucher = element.LoaiVoucher;
                    }
                });
            }
        });
    }

    valueChangeTheVoucher(value: any) {
        var voucherId: any[] = [];

        if (value.length > this.listOldVouchers.length) {
            this.listOldVouchers = value;
        }

        if (value.length < this.listOldVouchers.length) {
            if (value.length == 0) {
                this.disabledVoucher = false;
                voucherId = this.listOldVouchers;
                this.flagEnableVoucher = false;
                if (this.flagEnableMGThem === false) {
                    this.flagApDung = false;
                    this.apDungMienGiam = true;
                }
            }
            else {
                voucherId = this.differenceOf2Arrays(this.listOldVouchers, value);
            }

            var thongTinVoucherTheoYeuCauTiepNhan = {
                VoucherIds: voucherId,
                YeucauTiepNhanId: this.idMYCTN
            };

            this.apiService.post<any>("ThuNgan/DeleteTheVoucher", thongTinVoucherTheoYeuCauTiepNhan)
                .subscribe(resultData => {
                    if (resultData !== null && resultData !== undefined) {
                        if (resultData.Item1) {
                            this.notificationService.showSuccess(resultData.Item2);
                            this.getThongTinMienGiam(this.idMYCTN);
                            this.apDungMienGiam = true;
                            var mienGiamObj = {
                                apDungMienGiam: this.apDungMienGiam,
                                thongTinMienGiam: this.thongTinMienGiamVo
                            };
                            this.valueChangeMg.emit(mienGiamObj);
                        }
                    }
                });
            this.listOldVouchers = value;
        }
    }

    differenceOf2Arrays(arr1, arr2) {
        const temp = [];
        arr1 = arr1.toString().split(',').map(Number);
        arr2 = arr2.toString().split(',').map(Number);

        for (var i in arr1) {
            if (!arr2.includes(arr1[i])) temp.push(arr1[i]);
        }
        for (i in arr2) {
            if (!arr1.includes(arr2[i])) temp.push(arr2[i]);
        }
        return temp.sort((a, b) => a - b);
    }
}
