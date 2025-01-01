import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ThongTinHanhChinh, ThongTinBaoHiemXaHoi, GridXacNhanBhyt, InsuranceModelRequest } from '../xac-nhan-bhyt.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { HttpParams } from '@angular/common/http';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { BhytThongTinXacNhanComponent } from '../bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage, DuyetBhytMessage } from 'src/app/shared/configdata/system-message';
import { NhomGoiDichVu } from 'src/app/shared/enum/nhom-goi-dich-vu.enum';
import { EnumTrangThaiThanhToan } from 'src/app/shared/enum/trang-thai-thanh-toan.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var $: any;
import { ThongTinPhieuBHYTPdfPopupComponent } from '../../lich-su-xac-nhan-bhyt/thong-tin-phieu-linh-thuoc-pdf-popup/thong-tin-phieu-linh-thuoc-pdf-popup.component';
declare var $: any;
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-chi-tiet-xac-nhan-bhyt',
    templateUrl: './chi-tiet-xac-nhan-bhyt.component.html',
    styleUrls: ['./chi-tiet-xac-nhan-bhyt.component.scss'],
})
export class ChiTietXacNhanBhytComponent implements OnInit {
    thongTinHanhChinh: ThongTinHanhChinh;
    thongTinBaoHiemXaHoi: ThongTinBaoHiemXaHoi;
    documentType: DocumentType;
    dataChoXacNhan: any[] = [];
    dataDaXacNhan: any[] = [];
    snackBarOpen: any;
    tabIndex = 0;
    tab: number = this.route.snapshot.queryParams.loaiXacNhan;
    confrim: any = null;
    errors: any[] = [];
    yeuCauTiepNhanId: any = null;

    @ViewChild('tabBhyt', { static: true }) tabBhyt: TabStripComponent;
    @ViewChild('bhytGrid', { static: true }) bhytGrid: BhytThongTinXacNhanComponent;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private notificationService: NotificationService,
        private authService: AuthService,
        private router: Router,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.XacNhanBHYT;
        this.tabIndex = this.tab - 1;
        const id: number = this.route.snapshot.params.id;
        this.yeuCauTiepNhanId = id;

        this.thongTinBaoHiemXaHoi = {
            SoThe: '',
            NgayHieuLucStr: '',
            NgayHetHanStr: '',
            NoiDangKyKhamBenh: '',
            TuyenKham: '',
            GiayChuyenVien: '',
            GiayMiemCungTriTra: '',
            MucHuong: 0,
            GiayChuyenVienId: 0,
            GiayMienCungTriTraId: 0,
            NoiChuyenDi:''
        };

        this.thongTinHanhChinh = {
            Id: 1,
            MaTN: '',
            MaBN: '',
            HoTen: '',
            NamSinh: 1990,
            DiaChi: '',
            SoDienThoaiStr: '',
            Email: '',
            DoiTuongUuDai: '',
            CongTyUuDai: '',
            TenGioiTinh: '',
        };

        this.OpenLoading();

        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }

    OpenLoading() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });
    }

    CloseLoading() {
        this.dialog.closeAll();
    }

    getById(id: number) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService
                .post<any>('XacNhanBHYT/GetById?id=' + id)
                .subscribe((resultData: any) => {
                    if (resultData !== undefined && resultData != null) {
                        self.thongTinBaoHiemXaHoi = {
                            SoThe: resultData.BHYTMaSoThe,
                            NgayHieuLucStr: resultData.BHYTngayHieuLucStr,
                            NgayHetHanStr: resultData.BHYTngayHetHanStr,
                            NoiDangKyKhamBenh: resultData.DKBD,
                            TuyenKham: resultData.LyDoVaoVienDisplay,
                            GiayChuyenVien: resultData.GiayChuyenVienDisplay,
                            GiayChuyenVienId: resultData.GiayChuyenVienId,
                            GiayMiemCungTriTra: resultData.GiayMienCungChiTraDisplay,
                            GiayMienCungTriTraId: resultData.BHYTGiayMienCungChiTraId,
                            MucHuong: resultData.BHYTMucHuong,
                            NoiChuyenDi: resultData.NoiChuyenDi
                        };

                        self.thongTinHanhChinh = {
                            Id: id,
                            MaTN: resultData.MaYeuCauTiepNhan,
                            MaBN: resultData.BenhNhan.MaBN,
                            HoTen: resultData.HoTen,
                            NamSinh: resultData.NamSinh,
                            DiaChi: resultData.DiaChi,
                            SoDienThoaiStr: resultData.SoDienThoai,
                            Email: resultData.Email,
                            DoiTuongUuDai:
                                resultData.DoiTuongUuDai != null
                                    ? resultData.DoiTuongUuDai.Ten
                                    : '',
                            CongTyUuDai:
                                resultData.CongTyUuDai != null ? resultData.CongTyUuDai.Ten : '',
                            TenGioiTinh: resultData.GioiTinh === 1 ? 'Nam' : 'Nữ',
                        };

                    }
                }, err => {
                    self.notificationService.showError(err.Message);
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);

        }
    }

    viewDocument(idFile: number, type: number) {
        this.apiService
            .post('XacNhanBHYT/GetDocument?idFile=' + idFile + '&type=' + type)
            .subscribe((result: any) => {
                if (result.MoTa === undefined) {
                    result.MoTa = null;
                }
                const params = new HttpParams({
                    fromObject: {
                        tenGuid: result.TenGuid,
                        duongDan: result.DuongDan,
                    },
                });
                this.apiService
                    .get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params)
                    .subscribe((resp) => {
                        if (resp) {
                            if (
                                result.TenGuid.indexOf('.pdf') !== -1 || result.TenGuid.indexOf('.PDF') !== -1
                            ) {
                                this.dialog.open(ViewImagePdfComponent, {
                                    disableClose: false,
                                    width: '1000px',
                                    height: '600px',
                                    data: {
                                        Type: 'PDF', Title: 'Xem tài liệu',
                                        Description: (result.MoTa !== null ? result.MoTa : ''), Src: resp
                                    }
                                });
                            } else {
                                this.dialog.open(ViewImagePdfComponent, {
                                    disableClose: false,
                                    width: '1000px',
                                    height: '600px',
                                    data: {
                                        Type: 'Image', Title: 'Xem ảnh',
                                        Description: (result.MoTa !== null ? result.MoTa : ''), Src: resp
                                    }
                                });
                            }
                        }
                    });
            });
    }

    onTabSelect(ev: any) {
        this.OpenLoading();
        this.tabIndex = ev.index;
    }

    onXacNhan() {
        const self = this;
        const insuranceModelRequest = self.bhytGrid.GetSharedData();

        if (insuranceModelRequest.BenefitInsurance != null) {
            insuranceModelRequest.BenefitInsurance.forEach(element => {
                {
                    if ($('#' + 'bhytDuocHuongselectCheckboxId' + element.Id).prop('checked')) {
                        return (element.CheckedDefault = true);
                    } else {
                        return (element.CheckedDefault = false);
                    }
                }
            });
        }

        if (insuranceModelRequest.NonBenefitInsurance != null) {
            insuranceModelRequest.NonBenefitInsurance.forEach(element => {
                {
                    if ($('#' + 'bhytChuaDuocHuongselectCheckboxId' + element.Id).prop('checked')) {
                        return (element.CheckedDefault = true);
                    } else {
                        return (element.CheckedDefault = false);
                    }
                }
            });
        }

        if (insuranceModelRequest.BenefitInsurance != null || insuranceModelRequest.NonBenefitInsurance != null) {
            if (self.confrim != null) {
                self.CloseLoading();
                self.confrim = null;
            }

            if (insuranceModelRequest.BenefitInsurance.length === 0 && insuranceModelRequest.NonBenefitInsurance.length === 0) {
                self.notificationService.showError(DuyetBhytMessage.MessageNotEmptyBhyt);
                return;
            }

            self.confrim = self.dialog
                .open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: {
                        Title: 'Xác nhận',
                        Message: 'Bạn có chắc chắn duyệt những bảo hiểm này không?',
                    },
                })
                .afterClosed()
                .subscribe((result) => {
                    if (result === 'Yes') {
                        self.errors = self.ValidDataForBhytModel(insuranceModelRequest.BenefitInsurance);
                        if (self.errors != null && self.errors.some(x => x)) {
                            return;
                        }

                        // const msgErrorTlHuong = self.CheckValidationForTiLeHuong(insuranceModelRequest.BenefitInsurance);

                        // if (msgErrorTlHuong != null) {
                        //     self.dialog
                        //         .open(ConfirmComponent, {
                        //             disableClose: false,
                        //             width: '400px',
                        //             data: {
                        //                 Title: 'Cảnh báo',
                        //                 Message: msgErrorTlHuong,
                        //             },
                        //         }).afterClosed()
                        //         .subscribe(confirmResult => {
                        //             if (confirmResult === 'Yes') {
                        //                 self.bhytGrid.SetBenefitRaioForWholeBenefitInsurance(100, false, true);
                        //                 const sumOfTTBHYTChiTraCurrent = self.bhytGrid.dataHuongBh.data
                        //                     .reduce((sum: number, item: GridXacNhanBhyt) => sum + item.TTBHYTChiTra, 0);
                        //                 if (sumOfTTBHYTChiTraCurrent > self.bhytGrid.mucHuong15Percent) {
                        //                     self.bhytGrid.SetBenefitRaioForWholeBenefitInsurance
                        //                         (self.bhytGrid.bhytInfo.MucHuong, false, true);
                        //                 }
                        //                 self.Request(insuranceModelRequest);
                        //             }
                        //         });
                        //     return;
                        // }
                        self.Request(insuranceModelRequest);
                    }
                });
        } else {
            self.notificationService.showError(DuyetBhytMessage.MessageLoiKoXn);
        }
    }

    Request(insuranceModelRequest: InsuranceModelRequest) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.apiService
                .post('XacNhanBHYT/ConfirmBenefitInsuranceAsync', insuranceModelRequest)
                .subscribe((resultData: any) => {
                    if (!resultData.IsError) {
                        self.notificationService.showSuccess(DuyetBhytMessage.MessageXnThanhCong);
                        self.router.navigate(['/xac-nhan-bhyt/ngoai-tru'], {
                            queryParamsHandling: 'preserve',
                        });
                        return;
                    }

                    if (resultData.ErrorType === 3) {
                        self.notificationService.showError(resultData.ErrorMessage);
                        return;
                    }

                    const msgErrorTlHuongSauRequest =
                        self.CheckValidationForTiLeHuong(insuranceModelRequest.BenefitInsurance, resultData.ErrorType);

                    if (msgErrorTlHuongSauRequest != null) {
                        self.dialog
                            .open(ConfirmComponent, {
                                disableClose: false,
                                width: '400px',
                                data: {
                                    Title: 'Cảnh báo',
                                    Message: msgErrorTlHuongSauRequest,
                                },
                            }).afterClosed()
                            .subscribe(confirmResult => {
                                if (confirmResult === 'Yes') {
                                    if (resultData.ErrorType === 1) {
                                        self.bhytGrid.SetBenefitRaioForWholeBenefitInsurance(100);
                                    } else {
                                        self.bhytGrid.SetBenefitRaioForWholeBenefitInsurance
                                            (self.bhytGrid.bhytInfo.MucHuong);
                                    }
                                }
                            });
                        return;
                    }
                }, err => {
                    if (err.ValidationErrors != null) {
                        self.errors = err.ValidationErrors;
                        return;
                    }
                    self.notificationService.showError(err.Message);
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    ValidDataForBhytModel(benefitInsurances: GridXacNhanBhyt[]) {
        const validationErrors = [];
        const self = this;

        if (benefitInsurances != null &&
            benefitInsurances.some(x => x.MucHuong == null && x.TrangThaiThanhToan !== EnumTrangThaiThanhToan.DaThanhToan)) {
            benefitInsurances.filter(x => x.MucHuong == null && x.TrangThaiThanhToan !== EnumTrangThaiThanhToan.DaThanhToan)
                .forEach(insurance => {
                    const index = benefitInsurances.indexOf(insurance);
                    const validationError = {
                        Field: 'BenefitInsurance[' + index + '].MucHuong',
                        Message: DuyetBhytMessage.MessageNotAllowNull
                    };
                    validationErrors.push(validationError);
                });
        }
        if (benefitInsurances != null &&
            benefitInsurances.some(x => x.MucHuong === 0 && x.TrangThaiThanhToan !== EnumTrangThaiThanhToan.DaThanhToan)) {
            benefitInsurances.filter(x => x.MucHuong === 0 && x.TrangThaiThanhToan !== EnumTrangThaiThanhToan.DaThanhToan)
                .forEach(insurance => {
                    const index = benefitInsurances.indexOf(insurance);
                    const validationError = {
                        Field: 'BenefitInsurance[' + index + '].MucHuong',
                        Message: DuyetBhytMessage.MessageNotEqualZero
                    };
                    validationErrors.push(validationError);
                });
        }
        return validationErrors;
    }

    CheckValidationForTiLeHuong(benefitInsurances: GridXacNhanBhyt[], errorType: number = 0) {
        const self = this;
        let message = null;
        let showMessage = false;
        self.bhytGrid.SetBenefitRaioForWholeBenefitInsurance(100, true);
        const sumOfTTBHYTChiTraCurrent = self.bhytGrid.dataHuongBh.data
            .reduce((sum: number, item: GridXacNhanBhyt) => sum + item.TTBHYTChiTraGiaSu, 0);

        if (errorType === 0) {
            if (sumOfTTBHYTChiTraCurrent > self.bhytGrid.mucHuong15Percent) {
                showMessage = self.ShowPopupBaoLoi(benefitInsurances, true);

                if (showMessage) {
                    message = CommonService.format(DuyetBhytMessage.MessageGreaterThanCurrent,
                        [self.bhytGrid.bhytInfo.MucHuong.toString()]);
                }
            } else {
                showMessage = self.ShowPopupBaoLoi(benefitInsurances);

                if (showMessage) {
                    message = DuyetBhytMessage.MessageLessThan100;
                }
            }
            return message;
        }

        if (errorType === 1) {
            showMessage = self.ShowPopupBaoLoi(benefitInsurances);

            if (showMessage) {
                message = DuyetBhytMessage.MessageLessThan100;
            }
        } else {
            showMessage = self.ShowPopupBaoLoi(benefitInsurances, true);

            if (showMessage) {
                message = CommonService.format(DuyetBhytMessage.MessageGreaterThanCurrent,
                    [self.bhytGrid.bhytInfo.MucHuong.toString()]);
            }
        }

        return message;
    }

    ShowPopupBaoLoi(benefitInsurances: GridXacNhanBhyt[], isExceedQuarter: boolean = false) {
        const self = this;

        if (isExceedQuarter) {
            if (benefitInsurances.some(x => x.GroupType !== NhomGoiDichVu.DichVuKhamBenh &&
                x.MucHuong > self.bhytGrid.bhytInfo.MucHuong)) {
                return true;
            }

            if (benefitInsurances.some(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)) {
                const firstCuring = benefitInsurances.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)[0];
                if (firstCuring != null && firstCuring.MucHuong > self.bhytGrid.bhytInfo.MucHuong) {
                    return true;
                }

                const secondCuring = benefitInsurances.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)[1];
                if (secondCuring != null && secondCuring.MucHuong > self.bhytGrid.bhytInfo.MucHuong) {
                    return true;
                }

                const thirdCuring = benefitInsurances.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)[2];
                if (thirdCuring != null && thirdCuring.MucHuong > self.bhytGrid.bhytInfo.MucHuong) {
                    return true;
                }

                const forthCuring = benefitInsurances.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)[3];
                if (forthCuring != null && forthCuring.MucHuong > self.bhytGrid.bhytInfo.MucHuong) {
                    return true;
                }

                const fifthCuring = benefitInsurances.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)[4];
                if (fifthCuring != null && fifthCuring.MucHuong > self.bhytGrid.bhytInfo.MucHuong) {
                    return true;
                }
            }
        } else {
            if (benefitInsurances != null && benefitInsurances.some(x => x.GroupType !== NhomGoiDichVu.DichVuKhamBenh &&
                x.MucHuong !== 100)) {
                return true;
            }

            if (benefitInsurances != null && benefitInsurances.some(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)) {
                const firstCuring = benefitInsurances.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)[0];
                if (firstCuring != null && firstCuring.MucHuong !== 100) {
                    return true;
                }

                const secondCuring = benefitInsurances.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)[1];
                if (secondCuring != null && secondCuring.MucHuong !== 100) {
                    return true;
                }

                const thirdCuring = benefitInsurances.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)[2];
                if (thirdCuring != null && thirdCuring.MucHuong !== 100) {
                    return true;
                }

                const forthCuring = benefitInsurances.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)[3];
                if (forthCuring != null && forthCuring.MucHuong !== 100) {
                    return true;
                }

                const fifthCuring = benefitInsurances.filter(x => x.GroupType === NhomGoiDichVu.DichVuKhamBenh)[4];
                if (fifthCuring != null && fifthCuring.MucHuong !== 100) {
                    return true;
                }
            }
        }

        return false;
    }

    onHuyDuyet() {
        const self = this;
        const insuranceModelRequest = self.bhytGrid.GetSharedData();
        if (insuranceModelRequest.BenefitInsurance != null || insuranceModelRequest.NonBenefitInsurance != null) {
            if (self.confrim != null) {
                self.CloseLoading();
                self.confrim = null;
            }

            if (insuranceModelRequest.BenefitInsurance.length === 0 && insuranceModelRequest.NonBenefitInsurance.length === 0) {
                self.notificationService.showError(DuyetBhytMessage.MessageNotEmptyBhyt);
                return;
            }

            self.confrim = self.dialog
                .open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: {
                        Title: 'Xác nhận',
                        Message: 'Bạn có chắc chắn hủy duyệt những bảo hiểm này không?',
                    },
                })
                .afterClosed()
                .subscribe((result) => {
                    if (result === 'Yes') {
                        self.RequestHuyDuyet(insuranceModelRequest);
                    }
                });
        } else {
            self.notificationService.showError(DuyetBhytMessage.MessageLoiKoXn);
        }
    }

    RequestHuyDuyet(insuranceModelRequest: InsuranceModelRequest) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.apiService
                .post('XacNhanBHYT/HuyDuyetBaoHiemYte', insuranceModelRequest)
                .subscribe((resultData: any) => {
                    if (!resultData.IsError) {
                        self.notificationService.showSuccess(DuyetBhytMessage.MessageHuyDuyetThanhCong);
                        self.router.navigate(['/xac-nhan-bhyt/ngoai-tru'], {
                            queryParamsHandling: 'preserve',
                        });
                        return;
                    }           
                }, err => {
                    if (err.ValidationErrors != null) {
                        self.errors = err.ValidationErrors;
                        return;
                    }
                    self.notificationService.showError(err.Message);
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    onHuy() {
        this.router.navigate(['/xac-nhan-bhyt/ngoai-tru'], {
            queryParamsHandling: 'preserve',
        });
    }


    phieuLinhThuocBenhNhanBHYT() {
        let loading = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: {},
        });
        let hostingName = window.location.protocol + '//' + window.location.host;
        this.apiService.post<String>("XacNhanBHYT/PhieuLinhThuocBenhNhanBHYTTheoYCTN?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId + "&hostingName=" + hostingName).subscribe(
            arrHtml => {
                var arrHtmls = [{
                    Html: arrHtml,
                    TenFile: "PhieuLinhThuocBenhNhanBHYT",
                    PageSize: "A4",
                    PageOrientation: "Portrait",
                }];

                this.dialog
                    .open(ThongTinPhieuBHYTPdfPopupComponent, {
                        disableClose: false,
                        width: "1000px",
                        data: arrHtmls,
                    })
                    .afterClosed()
                    .subscribe(result => { loading.close() });
            },
            (err: ApiError) => {
                if (err.Message !== "Validation Failed") {
                    this.notificationService.showError(err.Message);
                    loading.close();
                }
            }
        );
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode == 83 && event.ctrlKey) {
            // ctrl + s
            this.onXacNhan();
            event.preventDefault();
        }

        if (event.keyCode == 27 && !event.ctrlKey) {
            // esc
            this.onHuy();
            event.preventDefault();
        }
    }
}
