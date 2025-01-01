import { Component, Input, OnInit, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel, NhuCauDinhDuong, NoiTruHoSoKhac, ThongTinHoSoPhieuSangLocDinhDuong } from '../../../dieu-tri-noi-tru.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AnUongKem, BenhKemTheo, GiamCan, KeHoachDinhDuong, SoKgGiam, TinhTrangBenhLyNang, TocDoTangCan } from 'src/app/shared/enum/dieu-tri-noi-tru.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { PhieuInSangLocDinhDuongComponent } from './phieu-in-sang-loc-dinh-duong/phieu-in-sang-loc-dinh-duong.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

import icClear from '@iconify/icons-ic/twotone-clear';
import { isThisSecond } from 'date-fns';

@Component({
    selector: 'app-phieu-sang-loc-dinh-duong',
    templateUrl: './phieu-sang-loc-dinh-duong.component.html',
    styleUrls: ['./phieu-sang-loc-dinh-duong.component.scss']
})
export class PhieuSangLocDinhDuongComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    yeuCauTiepNhanId: number = null;
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    validationErrors: any[] = [];
    isDungChoPhuNuMangThai: boolean = null;
    loadingPopup: any;

    isLoadingTinhTrangBenhLyNang: boolean = false;
    isLoadingDanhSachNhuCauDinhDuong: boolean = false;

    enumGiamCan = GiamCan;
    enumSoKgGiam = SoKgGiam;
    enumAnUongKem = AnUongKem;
    enumTinhTrangBenhLyNang = TinhTrangBenhLyNang;
    enumKeHoachDinhDuong = KeHoachDinhDuong;
    enumTocDoTangCan = TocDoTangCan;
    enumBenhKemTheo = BenhKemTheo;

    noiTruHoSoKhac: NoiTruHoSoKhac = new NoiTruHoSoKhac();
    thongTinHoSoPhieuSangLocDinhDuong: ThongTinHoSoPhieuSangLocDinhDuong = new ThongTinHoSoPhieuSangLocDinhDuong();
    lstNhuCauDinhDuong: NhuCauDinhDuong[] = new Array<NhuCauDinhDuong>();

    radioBoSungDinhDuongDuongUongItems = [{ Value: true, Text: 'Có' }, { Value: false, Text: 'Không' }];

    gridDataSource: any = [];
    gridColumns: any[] = [];

    urlGetDanhSachNhuCauDinhDuong = `DieuTriNoiTru/GetDanhSachNhuCauDinhDuong`;
    urlGetDanhSachGiamCan = `DieuTriNoiTru/GetListGiamCan`;
    urlGetDanhSachSoKgGiam = `DieuTriNoiTru/GetListSoKgGiam`;
    urlGetDanhSachAnUongKem = `DieuTriNoiTru/GetListAnUongKem`;
    urlGetDanhSachTinhTrangBenhLyNang = `DieuTriNoiTru/GetListTinhTrangBenhLyNang`;
    urlGetDanhSachKeHoachDinhDuong = `DieuTriNoiTru/GetListKeHoachDinhDuong`;
    urlGetDanhSachTocDoTangCan = `DieuTriNoiTru/GetListTocDoTangCan`;
    urlGetDanhSachBenhKemTheo = `DieuTriNoiTru/GetListBenhKemTheo`;

    icClear = icClear;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('nangLuongTemplate', { static: true }) nangLuongTemplate: TemplateRef<any>;
    @ViewChild('damTemplate', { static: true }) damTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridNhuCauDinhDuong', { read: GridComponent, static: true }) gridNhuCauDinhDuong: GridComponent;

    constructor(private route: ActivatedRoute, private dialog: MatDialog,
        private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id;
        this.getThongTinPhieuSangLocDinhDuong();

        this.gridColumns = [
            { Field: "ChieuCaoTu", Title: "Chiều cao", Width: 100, Template: this.chieuCaoTemplate },
            { Field: "CanNangTu", Title: "Cân nặng", Width: 100, Template: this.canNangTemplate },
            { Field: "NangLuongTu", Title: "Năng lượng", Width: 100, Template: this.nangLuongTemplate },
            { Field: "DamTu", Title: "Đạm", Width: 100, Template: this.damTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate }
        ];
    }

    getThongTinPhieuSangLocDinhDuong() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showLoadingPopup();

            this.apiService.get(`DieuTriNoiTru/GetThongTinHoSoKhacPhieuSangLocDinhDuong?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.noiTruHoSoKhac = res;
                this.returnId.emit(this.noiTruHoSoKhac.Id);
                this.noiTruHoSoKhac.YeuCauTiepNhanId = this.yeuCauTiepNhanId;

                if (this.noiTruHoSoKhac.ThongTinHoSo) {
                    this.thongTinHoSoPhieuSangLocDinhDuong = JSON.parse(this.noiTruHoSoKhac.ThongTinHoSo);
                } else {
                    this.thongTinHoSoPhieuSangLocDinhDuong = new ThongTinHoSoPhieuSangLocDinhDuong();
                }

                this.isDungChoPhuNuMangThai = this.thongTinHoSoPhieuSangLocDinhDuong.DungChoPhuNuMangThai;
                this.lstNhuCauDinhDuong = this.thongTinHoSoPhieuSangLocDinhDuong.lstNhuCauDinhDuong;

                if (this.thongTinHoSoPhieuSangLocDinhDuong.TinhTrangBenhLyNang == null) {
                    this.getDefaultTinhTrangBenhLyNang();
                }

                this.getDanhSachNhuCauDinhDuong();
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                this.closeAllDialogs();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    getDefaultTinhTrangBenhLyNang() {
        this.isLoadingTinhTrangBenhLyNang = true;

        this.apiService.get(`DieuTriNoiTru/GetDefaultTinhTrangBenhLyNang`).subscribe((res: any) => {
            this.isLoadingTinhTrangBenhLyNang = false;

            this.thongTinHoSoPhieuSangLocDinhDuong.TinhTrangBenhLyNang = res.KeyId;
            this.thongTinHoSoPhieuSangLocDinhDuong.TinhTrangBenhLyNangDisplay = res.DisplayName;

            this.closeAllDialogs();
        }, (err: ApiError) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.isLoadingTinhTrangBenhLyNang = false;
            this.closeAllDialogs();
        });
    }

    getDanhSachNhuCauDinhDuong() {
        this.isLoadingDanhSachNhuCauDinhDuong = true;

        this.apiService.get(`DieuTriNoiTru/GetDanhSachNhuCauDinhDuong`).subscribe((res: any) => {
            this.isLoadingDanhSachNhuCauDinhDuong = false;

            if (this.lstNhuCauDinhDuong.length === 0) {
                this.lstNhuCauDinhDuong = res.Data;

                this.lstNhuCauDinhDuong.forEach(item => {
                    item.isCheck = false;
                });
            }

            this.setDataGridSource();
            this.closeAllDialogs();
        }, (err: ApiError) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.isLoadingDanhSachNhuCauDinhDuong = false;
            this.closeAllDialogs();
        });
    }

    in() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn in phiếu sàng lọc dinh dưỡng này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    //Lưu
                    this.validationErrors = [];
                    this.thongTinHoSoPhieuSangLocDinhDuong.lstNhuCauDinhDuong = this.lstNhuCauDinhDuong;
                    // this.kiemTraDataPhieuSangLocDinhDuong();

                    if (this.validationErrors && !this.validationErrors.some(x => x)) {
                        this.showSavingPopup();

                        if (this.thongTinHoSoPhieuSangLocDinhDuong.DungChoPhuNuMangThai) {
                            this.clearKhongMangThaiData();
                        } else {
                            this.clearMangThaiData();
                        }

                        this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinHoSoPhieuSangLocDinhDuong);

                        this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacPhieuSangLocDinhDuong`, this.noiTruHoSoKhac).subscribe(res => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                            this.isDungChoPhuNuMangThai = this.thongTinHoSoPhieuSangLocDinhDuong.DungChoPhuNuMangThai;
                            this.getThongTinPhieuSangLocDinhDuong();
                            this.closeAllDialogs();

                            this.showLoadingPopup();
                            if (this.thongTinHoSoPhieuSangLocDinhDuong.DungChoPhuNuMangThai) {
                                this.inPhieuSangLocDinhDuongPhuSan();
                            } else {
                                this.inPhieuSangLocDinhDuong();
                            }
                        }, (err: ApiError) => {
                            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                            this.closeAllDialogs();
                        })
                    }

                    // this.showLoadingPopup();

                    // if(this.thongTinHoSoPhieuSangLocDinhDuong.DungChoPhuNuMangThai != this.isDungChoPhuNuMangThai) {
                    //     this.notificationService.showError('Loại phiếu đã thay đổi, vui lòng lưu lại dữ liệu.');
                    //     this.closeAllDialogs();
                    // } else {
                    //     if(this.thongTinHoSoPhieuSangLocDinhDuong.DungChoPhuNuMangThai) {
                    //         this.inPhieuSangLocDinhDuongPhuSan();
                    //     } else {
                    //         this.inPhieuSangLocDinhDuong();
                    //     }
                    // }
                }
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    inPhieuSangLocDinhDuong() {
        let hosting = "";
        if (window.location.protocol == "http:") {
            hosting = "http://" + window.location.host;
        } else {
            hosting = "https://" + window.location.host;
        }
        this.apiService.get<any>(`DieuTriNoiTru/InPhieuSangLocDinhDuong?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}&hosting=${hosting}`).subscribe((res) => {
            this.closeAllDialogs();
            this.dialog.open(PhieuInSangLocDinhDuongComponent, {
                disableClose: true,
                width: '1200px',
                // height: "550px",
                data: res
            }).afterClosed().subscribe(() => {
            });
        }, (err: ApiError) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.closeAllDialogs();
        });
    }

    inPhieuSangLocDinhDuongPhuSan() {
        let hosting = "";
        if (window.location.protocol == "http:") {
            hosting = "http://" + window.location.host;
        } else {
            hosting = "https://" + window.location.host;
        }
        this.apiService.get<any>(`DieuTriNoiTru/InPhieuSangLocDinhDuongPhuSan?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}&hosting=${hosting}`)
            .subscribe((res) => {
                this.closeAllDialogs();
                this.dialog.open(PhieuInSangLocDinhDuongComponent, {
                    disableClose: true,
                    width: '1200px',
                    // height: "550px",
                    data: res
                }).afterClosed().subscribe(() => {
                });
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                this.closeAllDialogs();
            });
    }

    huy() {
        this.getThongTinPhieuSangLocDinhDuong();
    }

    luuPhieuSangLocDinhDuong() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.validationErrors = [];
                    this.thongTinHoSoPhieuSangLocDinhDuong.lstNhuCauDinhDuong = this.lstNhuCauDinhDuong;
                    // this.kiemTraDataPhieuSangLocDinhDuong();

                    if (this.validationErrors && !this.validationErrors.some(x => x)) {
                        this.showSavingPopup();

                        if (this.thongTinHoSoPhieuSangLocDinhDuong.DungChoPhuNuMangThai) {
                            this.clearKhongMangThaiData();
                        } else {
                            this.clearMangThaiData();
                        }

                        this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinHoSoPhieuSangLocDinhDuong);

                        this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacPhieuSangLocDinhDuong`, this.noiTruHoSoKhac).subscribe(res => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                            this.isDungChoPhuNuMangThai = this.thongTinHoSoPhieuSangLocDinhDuong.DungChoPhuNuMangThai;
                            this.getThongTinPhieuSangLocDinhDuong();
                            this.closeAllDialogs();
                        }, (err: ApiError) => {
                            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                            this.closeAllDialogs();
                        })
                    }
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    // kiemTraDataPhieuSangLocDinhDuong() {
    //     let array = [];

    //     if(!this.thongTinHoSoPhieuSangLocDinhDuong.NgayDanhGia) {
    //         array.push({ Field: 'NgayDanhGia', Message: 'Ngày đánh giá yêu cầu nhập' });
    //     }

    //     if (array.length > 0) { this.validationErrors = [...array]; }
    // }

    evtCanNangVaChieuCaoChanged() {
        if (this.thongTinHoSoPhieuSangLocDinhDuong.CanNang && this.thongTinHoSoPhieuSangLocDinhDuong.ChieuCao) {
            this.thongTinHoSoPhieuSangLocDinhDuong.BMI = this.thongTinHoSoPhieuSangLocDinhDuong.CanNang / (Math.pow(this.thongTinHoSoPhieuSangLocDinhDuong.ChieuCao / 100, 2)); //cm -> m
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.BMI = null;
        }

        this.getDaiThamChieuBMI(this.thongTinHoSoPhieuSangLocDinhDuong.BMI);
    }

    getDaiThamChieuBMI(bmi: number) {
        if (bmi) {
            switch (true) {
                case (bmi < 16):
                    this.thongTinHoSoPhieuSangLocDinhDuong.DaiThamChieuBMI = 'BMI < 16';
                    this.thongTinHoSoPhieuSangLocDinhDuong.MucDoBMI = 'Gầy độ 3';
                    break;
                case (bmi >= 16 && bmi < 17):
                    this.thongTinHoSoPhieuSangLocDinhDuong.DaiThamChieuBMI = '16 <= BMI < 17';
                    this.thongTinHoSoPhieuSangLocDinhDuong.MucDoBMI = 'Gầy độ 2';
                    break;
                case (bmi >= 17 && bmi < 18.5):
                    this.thongTinHoSoPhieuSangLocDinhDuong.DaiThamChieuBMI = '17 <= BMI < 18.5';
                    this.thongTinHoSoPhieuSangLocDinhDuong.MucDoBMI = 'Gầy độ 1';
                    break;
                case (bmi >= 18.5 && bmi < 25):
                    this.thongTinHoSoPhieuSangLocDinhDuong.DaiThamChieuBMI = '18.5 <= BMI < 25';
                    this.thongTinHoSoPhieuSangLocDinhDuong.MucDoBMI = 'Bình thường';
                    break;
                case (bmi >= 25 && bmi < 30):
                    this.thongTinHoSoPhieuSangLocDinhDuong.DaiThamChieuBMI = '25 <= BMI < 30';
                    this.thongTinHoSoPhieuSangLocDinhDuong.MucDoBMI = 'Tiền béo phì';
                    break;
                case (bmi >= 30 && bmi < 35):
                    this.thongTinHoSoPhieuSangLocDinhDuong.DaiThamChieuBMI = '30 <= BMI < 35';
                    this.thongTinHoSoPhieuSangLocDinhDuong.MucDoBMI = 'Béo phì độ 1';
                    break;
                case (bmi >= 35 && bmi < 40):
                    this.thongTinHoSoPhieuSangLocDinhDuong.DaiThamChieuBMI = '35 <= BMI < 40';
                    this.thongTinHoSoPhieuSangLocDinhDuong.MucDoBMI = 'Béo phì độ 2';
                    break;
                case (bmi >= 40):
                    this.thongTinHoSoPhieuSangLocDinhDuong.DaiThamChieuBMI = '40 <= BMI';
                    this.thongTinHoSoPhieuSangLocDinhDuong.MucDoBMI = 'Béo phì độ 3';
                    break;
            }
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.DaiThamChieuBMI = null,
                this.thongTinHoSoPhieuSangLocDinhDuong.MucDoBMI = null;
        }
    }

    evtGiamCanChanged(evt) {
        if (evt != null) {
            switch (evt.KeyId) {
                case this.enumGiamCan.Khong:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemGiamCan = 0;
                    break;
                case this.enumGiamCan.KhongRo:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemGiamCan = 2;
                    break;
            }

            this.thongTinHoSoPhieuSangLocDinhDuong.GiamCanDisplay = evt.DisplayName;
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.GiamCanDisplay = null;
            this.thongTinHoSoPhieuSangLocDinhDuong.DiemGiamCan = null;
        }

        this.thongTinHoSoPhieuSangLocDinhDuong.SoKgGiam = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.SoKgGiamDisplay = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam = 0;

        this.getBoSungDinhDuongDuongUong();
    }

    evtSoCanGiamChanged(evt) {
        if (evt != null) {
            switch (evt.KeyId) {
                case this.enumSoKgGiam.MotDenNamKg:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam = 1;
                    break;
                case this.enumSoKgGiam.SauDenMuoiKg:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam = 2;
                    break;
                case this.enumSoKgGiam.MuoiMotDenMuoiLamKg:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam = 3;
                    break;
                case this.enumSoKgGiam.MuoiLamKgTroLen:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam = 4;
                    break;
                case this.enumSoKgGiam.KhongRoSoKgGiam:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam = 2;
                    break;
            }

            this.thongTinHoSoPhieuSangLocDinhDuong.SoKgGiamDisplay = evt.DisplayName;
            this.thongTinHoSoPhieuSangLocDinhDuong.GiamCan = this.enumGiamCan.KhongRo;
            this.thongTinHoSoPhieuSangLocDinhDuong.DiemGiamCan = 2;
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.SoKgGiamDisplay = null;
            this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam = 0;
        }

        this.getBoSungDinhDuongDuongUong();
    }

    evtAnUongKemChanged(evt) {
        if (evt != null) {
            switch (evt.KeyId) {
                case this.enumAnUongKem.Khong:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemAnUongKem = 0;
                    break;
                case this.enumAnUongKem.Co:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemAnUongKem = 1;
                    break;
            }

            this.thongTinHoSoPhieuSangLocDinhDuong.AnUongKemDisplay = evt.DisplayName;
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.AnUongKemDisplay = null;
            this.thongTinHoSoPhieuSangLocDinhDuong.DiemAnUongKem = null;
        }

        this.getBoSungDinhDuongDuongUong();
    }

    getBoSungDinhDuongDuongUong() {
        this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemMST =
            (this.thongTinHoSoPhieuSangLocDinhDuong.DiemGiamCan != null ? this.thongTinHoSoPhieuSangLocDinhDuong.DiemGiamCan : 0) +
            (this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam != null ? this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam : 0) +
            (this.thongTinHoSoPhieuSangLocDinhDuong.DiemAnUongKem != null ? this.thongTinHoSoPhieuSangLocDinhDuong.DiemAnUongKem : 0);

        if (this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemMST >= 2) {
            this.thongTinHoSoPhieuSangLocDinhDuong.BoSungDinhDuongDuongUong = true;
            this.thongTinHoSoPhieuSangLocDinhDuong.ChanDoanMucDoSuyDinhDuong = 'Có';
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.BoSungDinhDuongDuongUong = false;
            this.thongTinHoSoPhieuSangLocDinhDuong.ChanDoanMucDoSuyDinhDuong = 'Không';
        }

        // if (this.thongTinHoSoPhieuSangLocDinhDuong.DiemGiamCan != null &&
        //     this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam != null &&
        //     this.thongTinHoSoPhieuSangLocDinhDuong.DiemAnUongKem != null) {

        //     this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemMST = this.thongTinHoSoPhieuSangLocDinhDuong.DiemGiamCan + this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam + this.thongTinHoSoPhieuSangLocDinhDuong.DiemAnUongKem;

        //     if(this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemMST >= 2) {
        //         this.thongTinHoSoPhieuSangLocDinhDuong.BoSungDinhDuongDuongUong = true;
        //         this.thongTinHoSoPhieuSangLocDinhDuong.ChanDoanMucDoSuyDinhDuong = 'Có';
        //     } else {
        //         this.thongTinHoSoPhieuSangLocDinhDuong.BoSungDinhDuongDuongUong = false;
        //         this.thongTinHoSoPhieuSangLocDinhDuong.ChanDoanMucDoSuyDinhDuong = 'Không';
        //     }
        // } else {
        //     this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemMST = null;
        //     this.thongTinHoSoPhieuSangLocDinhDuong.BoSungDinhDuongDuongUong = null;
        //     this.thongTinHoSoPhieuSangLocDinhDuong.ChanDoanMucDoSuyDinhDuong = null;
        // }
    }

    evtTinhTrangBenhLyNangChanged(evt) {
        this.thongTinHoSoPhieuSangLocDinhDuong.TinhTrangBenhLyNangDisplay = evt != null ? evt.DisplayName : null;
    }

    evtCanNangVaChieuCaoTruocMangThaiChanged() {
        if (this.thongTinHoSoPhieuSangLocDinhDuong.CanNangTruocMangThai && this.thongTinHoSoPhieuSangLocDinhDuong.ChieuCaoTruocMangThai) {
            this.thongTinHoSoPhieuSangLocDinhDuong.BMITruocMangThai = this.thongTinHoSoPhieuSangLocDinhDuong.CanNangTruocMangThai / (Math.pow(this.thongTinHoSoPhieuSangLocDinhDuong.ChieuCaoTruocMangThai / 100, 2)); //cm -> m
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.BMITruocMangThai = null;
        }

        this.getDaiThamChieuBMITruocMangThai(this.thongTinHoSoPhieuSangLocDinhDuong.BMITruocMangThai);
    }

    getDaiThamChieuBMITruocMangThai(bmi: number) {
        if (bmi) {
            switch (true) {
                case (bmi >= 25 || bmi < 18.5):
                    this.thongTinHoSoPhieuSangLocDinhDuong.KhoangBMITruocMangThai = 'BMI>= 25; BMI < 18,5',
                        this.thongTinHoSoPhieuSangLocDinhDuong.DiemBMITruocMangThai = 1;
                    break;
                case (bmi >= 18.5 && bmi < 25):
                    this.thongTinHoSoPhieuSangLocDinhDuong.KhoangBMITruocMangThai = '18,5<= BMI <25',
                        this.thongTinHoSoPhieuSangLocDinhDuong.DiemBMITruocMangThai = 0;
                    break;
            }
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.KhoangBMITruocMangThai = null,
                this.thongTinHoSoPhieuSangLocDinhDuong.DiemBMITruocMangThai = null;
        }

        this.getKetLuanKhiMangThai();
    }

    evtTocDoTangCanChanged(evt) {
        if (evt != null) {
            switch (evt.KeyId) {
                case this.enumTocDoTangCan.TheoKhuyenNghi:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemTocDoTangCan = 0;
                    break;
                case this.enumTocDoTangCan.TrenDuoiMucKhuyenNghi:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemTocDoTangCan = 1;
                    break;
            }

            this.thongTinHoSoPhieuSangLocDinhDuong.TocDoTangCanDisplay = evt.DisplayName;
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.TocDoTangCanDisplay = null;
            this.thongTinHoSoPhieuSangLocDinhDuong.DiemTocDoTangCan = null;
        }

        this.getKetLuanKhiMangThai();
    }

    evtBenhKemTheoChanged(evt) {
        if (evt != null) {
            switch (evt.KeyId) {
                case this.enumBenhKemTheo.Khong:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemBenhKemTheo = 0;
                    break;
                case this.enumBenhKemTheo.TangHuyetAp:
                    this.thongTinHoSoPhieuSangLocDinhDuong.DiemBenhKemTheo = 1;
                    break;
            }

            this.thongTinHoSoPhieuSangLocDinhDuong.BenhKemTheoDisplay = evt.DisplayName;
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.BenhKemTheoDisplay = null;
            this.thongTinHoSoPhieuSangLocDinhDuong.DiemBenhKemTheo = null;
        }

        this.getKetLuanKhiMangThai();
    }

    getKetLuanKhiMangThai() {
        this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemTruocMangThai =
            (this.thongTinHoSoPhieuSangLocDinhDuong.DiemBMITruocMangThai != null ? this.thongTinHoSoPhieuSangLocDinhDuong.DiemBMITruocMangThai : 0) +
            (this.thongTinHoSoPhieuSangLocDinhDuong.DiemTocDoTangCan != null ? this.thongTinHoSoPhieuSangLocDinhDuong.DiemTocDoTangCan : 0) +
            (this.thongTinHoSoPhieuSangLocDinhDuong.DiemBenhKemTheo != null ? this.thongTinHoSoPhieuSangLocDinhDuong.DiemBenhKemTheo : 0);

        if (this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemTruocMangThai < 2) {
            this.thongTinHoSoPhieuSangLocDinhDuong.KetLuan = 'Bình thường';
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.KetLuan = 'Có nguy cơ về dinh dưỡng';
        }

        // if (this.thongTinHoSoPhieuSangLocDinhDuong.DiemBMITruocMangThai != null &&
        //     this.thongTinHoSoPhieuSangLocDinhDuong.DiemTocDoTangCan != null &&
        //     this.thongTinHoSoPhieuSangLocDinhDuong.DiemBenhKemTheo != null) {

        //     this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemTruocMangThai = this.thongTinHoSoPhieuSangLocDinhDuong.DiemBMITruocMangThai + this.thongTinHoSoPhieuSangLocDinhDuong.DiemTocDoTangCan + this.thongTinHoSoPhieuSangLocDinhDuong.DiemBenhKemTheo;

        //     if(this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemTruocMangThai < 2) {
        //         this.thongTinHoSoPhieuSangLocDinhDuong.KetLuan = 'Bình thường';
        //     } else {
        //         this.thongTinHoSoPhieuSangLocDinhDuong.KetLuan = 'Có nguy cơ về dinh dưỡng';
        //     }
        // } else {
        //     this.thongTinHoSoPhieuSangLocDinhDuong.KetLuan = null;
        // }
    }

    evtKeHoachDinhDuongChanged(evt) {
        this.thongTinHoSoPhieuSangLocDinhDuong.KeHoachDinhDuongDisplay = evt != null ? evt.DisplayName : null;
    }

    evtNhuCauDinhDuongChanged(evt, dataItem) {
        if (evt) {
            this.lstNhuCauDinhDuong.forEach(item => {
                item.isCheck = item.Id === dataItem.Id ? evt : false;
            })

            this.setDataGridSource();
        }
    }

    setDataGridSource() {
        this.gridDataSource = {
            data: [...this.lstNhuCauDinhDuong],
            total: this.lstNhuCauDinhDuong.length
        };

        if (this.gridNhuCauDinhDuong) {
            this.gridNhuCauDinhDuong.gridDataSource = this.gridDataSource;
            this.gridNhuCauDinhDuong.setDataSource();
        }
    }

    clearKhongMangThaiData() {
        this.thongTinHoSoPhieuSangLocDinhDuong.CanNang = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.ChieuCao = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.BMI = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.DaiThamChieuBMI = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.MucDoBMI = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.GiamCan = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.GiamCanDisplay = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.DiemGiamCan = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.SoKgGiam = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.SoKgGiamDisplay = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.DiemSoKgGiam = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.AnUongKem = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.AnUongKemDisplay = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.DiemAnUongKem = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.BoSungDinhDuongDuongUong = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.LoiKhuyenDinhDuongKhac = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.TinhTrangBenhLyNang = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.TinhTrangBenhLyNangDisplay = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemMST = 0;
        this.thongTinHoSoPhieuSangLocDinhDuong.ChanDoanMucDoSuyDinhDuong = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.NhuCauKhacNangLuong = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.NhuCauKhacDuong = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.NhuCauKhacDam = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.NhuCauKhacBeo = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.KeHoachDinhDuong = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.KeHoachDinhDuongDisplay = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.lstNhuCauDinhDuong = new Array<NhuCauDinhDuong>();

        this.noiTruHoSoKhac.FilesChuKy = [];
    }

    clearMangThaiData() {
        this.thongTinHoSoPhieuSangLocDinhDuong.CanNangTruocMangThai = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.ChieuCaoTruocMangThai = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.BMITruocMangThai = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.CanNangHienTai = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.KhoangBMITruocMangThai = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.DiemBMITruocMangThai = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.TocDoTangCan = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.TocDoTangCanDisplay = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.DiemTocDoTangCan = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.BenhKemTheo = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.BenhKemTheoDisplay = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.DiemBenhKemTheo = null;
        this.thongTinHoSoPhieuSangLocDinhDuong.TongDiemTruocMangThai = 0;
        this.thongTinHoSoPhieuSangLocDinhDuong.KetLuan = null;
    }

    selectionChangeNguoiThucHien(event: any) {
        if (event != undefined && event != null) {
            this.thongTinHoSoPhieuSangLocDinhDuong.NguoiThucHienName = event.DisplayName;
        } else {
            this.thongTinHoSoPhieuSangLocDinhDuong.NguoiThucHienName = null;
        }
    }

    showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }
    }

    showSavingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang lưu...' }
            });
        }
    }

    closeAllDialogs() {
        if (this.loadingPopup && !this.isLoadingDanhSachNhuCauDinhDuong && !this.isLoadingTinhTrangBenhLyNang) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }
}