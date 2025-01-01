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

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-chi-tiet-xac-nhan-bhyt',
    templateUrl: './chi-tiet-xac-nhan-bhyt.component.html',
    styleUrls: ['./chi-tiet-xac-nhan-bhyt.component.scss'],
})
export class ChiTietXacNhanBhytComponent implements OnInit {
    thongTinHanhChinh: ThongTinHanhChinh = new ThongTinHanhChinh();
    thongTinBaoHiemXaHois: ThongTinBaoHiemXaHoi[] = [];
    documentType: DocumentType;
    dataChoXacNhan: any[] = [];
    dataDaXacNhan: any[] = [];
    snackBarOpen: any;
    tabIndex = 0;
    tab: number = this.route.snapshot.queryParams.loaiXacNhan;
    confrim: any = null;
    errors: any[] = [];
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
        this.documentType = DocumentType.XacNhanBhytNoiTru;
        this.tabIndex = this.tab - 1;
        const id: number = this.route.snapshot.params.id;

        this.OpenLoading();

        if (id) {
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
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.apiService
                .get<ThongTinHanhChinh>(`XacNhanBHYT/GetByIdNoiTruAsync?yctnId=${id}`)
                .subscribe((resultData: any) => {
                    if (resultData) {
                        resultData.ThongTinBhytNoiTrus.forEach(thongTinBhyt => {
                            const bhyt: ThongTinBaoHiemXaHoi = {
                                BhytMaSoThe: thongTinBhyt.BhytMaSoThe,
                                BhytNgayHieuLucStr: thongTinBhyt.BhytNgayHieuLucStr,
                                BhytNgayHetHanStr: thongTinBhyt.BhytNgayHetHanStr,
                                Dkbd: thongTinBhyt.Dkbd,
                                GiayMienCungChiTra: thongTinBhyt.GiayMienCungChiTra,
                                GiayMienCungChiTraId: thongTinBhyt.GiayMienCungChiTraId,
                                BhytMucHuong: thongTinBhyt.BhytMucHuong,
                                Id: thongTinBhyt.Id
                            };
                            this.thongTinBaoHiemXaHois.push(bhyt);
                        });

                        this.thongTinHanhChinh = {
                            MaYeuCauTiepNhan: resultData.MaYeuCauTiepNhan,
                            MaBn: resultData.MaBn,
                            HoTen: resultData.HoTen,
                            NamSinh: resultData.NamSinh,
                            DiaChi: resultData.DiaChi,
                            SoDienThoai: resultData.SoDienThoai,
                            Email: resultData.Email,
                            DoiTuongUuDai: resultData.DoiTuongUuDai,
                            CongTyUuDai: resultData.CongTyUuDai,
                            GioiTinh: resultData.GioiTinh === 1 ? 'Nam' : 'Nữ',
                            LyDoVaoVien: resultData.LyDoVaoVien,
                            GiayChuyenVien: resultData.GiayChuyenVienDisplay,
                            GiayChuyenVienId: resultData.GiayChuyenVienId,
                            Id: resultData.Id
                        };

                    }
                }, err => {
                    this.notificationService.showError(err.Message);
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);

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
                .post('XacNhanBHYT/XnBhytNoiTruAsync', insuranceModelRequest)
                .subscribe((resultData: any) => {              
                    if (!resultData.IsError) {
                        self.notificationService.showSuccess(DuyetBhytMessage.MessageXnThanhCong);
                        self.router.navigate(['/xac-nhan-bhyt/noi-tru'], {
                            queryParamsHandling: 'preserve',
                        });
                        return;
                    }
                    else {
                        self.notificationService.showError(resultData.ErrorMessage);
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

    onHuy() {
        this.router.navigate(['/xac-nhan-bhyt/noi-tru'], {
            queryParamsHandling: 'preserve',
        });
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
                .post('XacNhanBHYT/HuyDuyetBaoHiemYteNoiTru', insuranceModelRequest)
                .subscribe((resultData: any) => {
                    if (!resultData.IsError) {
                        self.notificationService.showSuccess(DuyetBhytMessage.MessageHuyDuyetThanhCong);
                        self.router.navigate(['/xac-nhan-bhyt/noi-tru'], {
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

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 83 && event.ctrlKey) {
            // ctrl + s
            this.onXacNhan();
            event.preventDefault();
        }

        // tslint:disable-next-line: deprecation
        if (event.keyCode === 27 && !event.ctrlKey) {
            // esc
            this.onHuy();
            event.preventDefault();
        }
    }
}
