import {
    Component,
    OnInit,
    Input,
    EventEmitter, Output, ViewChild
} from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import {
    LookupItemVo,
    HoatDongNhanVien,
} from 'src/app/shared/models/common.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import {
    PhauThuatThuThuatTuongTrinh,
    LuocDoPhauThuatModel,
} from '../../../phau-thuat-thu-thuat.model';
import {
    PhauThuatThuThuatLuocDoPopupComponent
} from '../../phau-thuat-thu-thuat-luoc-do-popup/phau-thuat-thu-thuat-luoc-do-popup.component';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage, PtttMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";

import icImages from '@iconify/icons-ic/baseline-add-photo-alternate';
import icClose from '@iconify/icons-ic/close';
import icAddCircle from '@iconify/icons-ic/add-circle';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-pttt-tuong-trinh-pttt',
    templateUrl: './pttt-tuong-trinh-pttt.component.html',
    styleUrls: ['./pttt-tuong-trinh-pttt.component.scss'],
    animations: [stagger60ms, fadeInUp400ms],
})
export class PhauThuatThuThuatTuongTrinhPTTTComponent implements OnInit {
    icImages = icImages;
    icClose = icClose;
    icAddCircle = icAddCircle;
    @Input() IsDaTuongTrinh = false;
    @Input() ycdvktId;
    @Input() pTTTChinh;
    showValidationMoTa = false;

    khoaPhong: any;
    phuongPhapvoCam: LookupItemVo = {
        KeyId: 0,
        DisplayName: null
    };

    gridChuanBiKhamColumns: any[] = [];
    dataSourceChuanBiKham = {
        data: [],
        total: 0,
    };

    gridDoiKetLuanColumns: any[] = [];
    dataSourceDoiKetLuan = {
        data: [],
        total: 0,
    };
    canChange = false;

    phongKhamBenh: HoatDongNhanVien;
    phongKhamHienTai: LookupItemVo = {
        DisplayName: null,
        KeyId: 0,
    };
    validationErrors: any;
    popup: any;

    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    isThoiGianBatDauPTTTExisted: boolean = false;

    @Input() thongTinBenhNhan: any = null;
    @Output() displaySaveCclForTuongTrinh: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('phuongPhapPttt', { static: false }) phuongPhapPttt: MultiselectComponent;

    constructor(
        private dialog: MatDialog,
        private apiService: ApiService,
        private broadcastService: BroadcastService,
        private notificationService: NotificationService,
        private authService: AuthService
    ) { }

    pTTT = {} as PhauThuatThuThuatTuongTrinh;

    ngOnInit() {
        const self = this;
        self.canChange = false;
        self.pTTT = new PhauThuatThuThuatTuongTrinh();
        self.pTTT.ThoiGianPt=new Date(); 
        self.pTTT.LuocDoPhauThuats = [];
        self.documentType = DocumentType.PhauThuatThuThuatTheoNgay;
        const phongBenhVienId = self.authService.getPhongLamViecId();
        self.getKhoaPhong(phongBenhVienId, self.ycdvktId);
    }

    onChangePhauThuatThuThuat(data: any) {
        if (!data) {
            this.pTTT.MaPttt = null;
            return;
        }
        this.pTTT.MaPttt = this.FormatMaPttt(data);
        this.pTTT.PhuongPhapPttt = this.FormatTenPttt(data);
        this.displaySaveCclForTuongTrinh.emit(true);
    }

    FormatMaPttt(data) {
        let maPtttFormat = '';
        data.forEach((element, index) => {
            if (index === data.length - 1) {
                maPtttFormat += element;
            } else {
                maPtttFormat += element + '|';
            }
        });
        return maPtttFormat;
    }

    FormatTenPttt(data) {
        let tenPtttFormat = '';
        data.forEach((element, index) => {
            if (index === data.length - 1) {
                tenPtttFormat += this.phuongPhapPttt._data.filter(x => x.Ma === element)[0].Ten;
            } else {
                tenPtttFormat += this.phuongPhapPttt._data.filter(x => x.Ma === element)[0].Ten + '|';
            }
        });
        return tenPtttFormat;
    }

    OnChange() {
        this.displaySaveCclForTuongTrinh.emit(true);
    }

    Save() {
        this.validationErrors = [];
        this.showValidationMoTa = false;
        if (
            this.authService.hasPermission(this.documentType, SecurityOperation.Update)
        ) {
            this.saveDataLoading();
            this.pTTT.YeuCauDichVuKyThuatId = this.ycdvktId;
            this.apiService
                .post<any>(
                    'PhauThuatThuThuat/SaveTuongTrinh', this.pTTT
                )
                .subscribe(() => {
                    this.closePopupLoadingData();
                    this.notificationService.showSuccess(PtttMessage.MessageSaveTuongTrinhThanhCong);
                    this.displaySaveCclForTuongTrinh.emit(false);
                    this.isThoiGianBatDauPTTTExisted = this.pTTT.ThoiGianPt ? true : false;
                }, (errors: any) => {
                    this.closePopupLoadingData();
                    if (errors.ValidationErrors != null) {
                        this.validationErrors = errors.ValidationErrors;

                        if (this.validationErrors.some(x => x.Field.includes('MoTa'))) {
                            this.showValidationMoTa = true;
                        }
                    }
                    if (errors.ValidationErrors == null) {
                        this.notificationService.showError(errors.Message);
                    }
                });
        }
    }

    saveDataLoading() {
        this.popup = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang lưu dữ liệu...' }
        });
    }

    closePopupLoadingData() {
        this.popup.close();
    }

    getKhoaPhong(phongBenhVienId: any = 0, ycdvktId: number = -1) {
        const self = this;

        if (self.validationErrors != null && self.validationErrors.some(x => x)) {
            self.validationErrors = [];
        }

        self.ycdvktId = ycdvktId;
        // tslint:disable-next-line: triple-equals
        if (phongBenhVienId == 0 && ycdvktId === -1) {
            self.khoaPhong = null;
            return;
        }
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.apiService.get<any>(
                `PhauThuatThuThuat/GetThongTinKhoa?phongBenhVienId=${phongBenhVienId}&&ycdvktId=${ycdvktId}`
            ).subscribe((res) => {
                if (res) {
                    self.khoaPhong = res.KhoaPhong;
                    self.pTTT = { ...res };
                    self.pTTT.LuocDoPhauThuats = [...res.LuocDoPhauThuats];
                    self.canChange = true;
                    self.displaySaveCclForTuongTrinh.emit(false);

                    if(self.pTTT.ThoiGianPt) {
                        this.isThoiGianBatDauPTTTExisted = true;
                    }

                    if(!self.pTTTChinh) {
                        self.pTTTChinh = res.NhanVienThucHienDisplay
                    }
                }
            });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    //#region Image
    UpLoadFile() {
        this.dialog.open(PhauThuatThuThuatLuocDoPopupComponent, {
            disableClose: true,
            width: '1000px',
            data: 'KetQua'
        })
            .afterClosed()
            .subscribe(result => {
                if (result == null) {
                    return;
                }

                this.OnChange();
                const data = new LuocDoPhauThuatModel();
                data.LuocDoPhauThuat = result.Url;
                data.MoTa = result.MoTa;

                this.pTTT.LuocDoPhauThuats.push(data);
            });
    }

    DeleteAnh(thongTinAnh: LuocDoPhauThuatModel) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: `Bạn có muốn xoá lược đồ này không?` }
        }).afterClosed().subscribe(result => {
            if (result === "Yes") {
                if (this.pTTT.LuocDoPhauThuats.length !== 0) {
                    this.OnChange();
                    const position = this.pTTT.LuocDoPhauThuats.indexOf(thongTinAnh);
                    this.pTTT.LuocDoPhauThuats.splice(position, 1);
                }
            }
        });
    }

    ViewImage(thongTinAnh: LuocDoPhauThuatModel) {
        if (!thongTinAnh.MoTa) {
            thongTinAnh.MoTa = null;
        }

        this.dialog.open(ViewImagePdfComponent, {
            disableClose: false,
            width: '1000px',
            height: '600px',
            data: {
                Type: 'Image', Title: 'Xem ảnh', Description: (thongTinAnh.MoTa ? thongTinAnh.MoTa : ''),
                Src: thongTinAnh.LuocDoPhauThuat
            }
        });
    }

    setThoiGianBatDauPhauThuat() {
        if(this.pTTT && !this.isThoiGianBatDauPTTTExisted) {
            this.pTTT.ThoiGianPt = new Date();
            this.OnChange();
        }
    }
}
