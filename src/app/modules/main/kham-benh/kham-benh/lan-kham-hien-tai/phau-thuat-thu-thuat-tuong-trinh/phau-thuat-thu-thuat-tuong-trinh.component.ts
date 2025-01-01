import {
    Component,
    OnInit,
    Input,
} from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import {
    PhauThuatThuThuatTuongTrinh,
    LuocDoPhauThuatThuThuat,
    BenhVienHangDoi,
} from '../../../kham-benh.model';
import {
    PhauThuatThuThuatPopUpChonAnhComponent
} from '../phau-thuat-thu-thuat-popup-chon-anh/phau-thuat-thu-thuat-popup-chon-anh.component';
import icImages from '@iconify/icons-ic/baseline-add-photo-alternate';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import icClose from '@iconify/icons-ic/close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phau-thuat-thu-thuat-tuong-trinh',
    templateUrl: './phau-thuat-thu-thuat-tuong-trinh.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-tuong-trinh.component.scss'],
    animations: [stagger60ms, fadeInUp400ms],
})

export class PhauThuatThuThuatTuongTrinhComponent implements OnInit {
    validationErrors: any;
    khoaPhong: string;
    chanDoanICD: string;
    moTaICD: string;
    @Input() thongTinBenhNhan: BenhVienHangDoi = null;
    icImages = icImages;
    icAddCircle = icAddCircle;
    icClose = icClose;
    documentType: DocumentType = DocumentType.KhamBenh;
    showValidationMoTa = false;
    popup: any;

    constructor(
        private dialog: MatDialog,
        private apiService: ApiService,
        private authService: AuthService,
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.KhamBenh;
        this.loadingPage();
        const phongBenhVienId = this.authService.getPhongLamViecId();
        const nhanVienId = this.authService.getAccessUser().Id;
        const yeuCauKhamBenhId = this.thongTinBenhNhan.YeuCauKhamBenhId;
        this.getThongTinTuongTrinh(phongBenhVienId, yeuCauKhamBenhId);
        if (this.thongTinBenhNhan.YeuCauKhamBenh.YeuCauDichVuKyThuatPhauThuat === undefined) {
            this.getListPhauThuatThuThuatTemplate(phongBenhVienId, nhanVienId, yeuCauKhamBenhId);
        }
    }

    getThongTinTuongTrinh(phongBenhVienId: any, yeuCauKhamBenhId: any) {
        if (
            this.authService.hasPermission(this.documentType, SecurityOperation.View)
        ) {
            this.apiService
                .get<any>(
                    'KhamBenh/GetThongTinTuongTrinh?phongBenhVienId=' +
                    phongBenhVienId + '&&yeuCauKhamBenhId=' + yeuCauKhamBenhId
                )
                .subscribe((resultData) => {
                    if (resultData !== undefined && resultData != null) {
                        this.khoaPhong = resultData.TenKhoaPhong;
                        this.chanDoanICD = resultData.ChanDoanVaoKhoa;
                        this.moTaICD = resultData.MoTa;
                        if (this.thongTinBenhNhan.YeuCauKhamBenh.YeuCauDichVuKyThuatPhauThuat !== undefined) {
                            this.closePopupLoadingData();
                        }
                    }
                }, (err: any) => {
                    if (err.Status === 0) {
                        this.closePopupLoadingData();
                    }
                });
        }
    }

    getListPhauThuatThuThuatTemplate(phongBenhVienId: any, nhanVienId: number, yeuCauKhamBenhId: any) {
        if (
            this.authService.hasPermission(this.documentType, SecurityOperation.View)
        ) {
            this.apiService
                .get<any>(
                    'KhamBenh/GetListPhauThuatThuThuat?phongBenhVienId=' +
                    phongBenhVienId + '&nhanVienId=' + nhanVienId + '&yeuCauKhamBenhId=' + yeuCauKhamBenhId
                )
                .subscribe((resultData) => {
                    if (resultData !== undefined && resultData != null) {
                        this.thongTinBenhNhan.YeuCauKhamBenh.YeuCauDichVuKyThuatPhauThuat = resultData;
                        const idYcDvKts = [];
                        this.thongTinBenhNhan.YeuCauKhamBenh.YeuCauDichVuKyThuatPhauThuat.forEach(element => {
                            idYcDvKts.push(element.Id);
                        });
                        const listDichVuKyThuatIdModel: any = {
                            Ids: idYcDvKts
                        };
                        this.apiService
                            .post<any>(
                                'KhamBenh/GetListLuocDoPhauThuat', listDichVuKyThuatIdModel
                            )
                            // tslint:disable-next-line: no-shadowed-variable
                            .subscribe(resultData => {
                                this.thongTinBenhNhan.YeuCauKhamBenh.YeuCauDichVuKyThuatPhauThuat.forEach(element => {
                                    if (element.LuocDoPttts === undefined) {
                                        element.LuocDoPttts = [];
                                    }

                                    resultData.forEach(elementResultData => {
                                        if (element.Id === elementResultData.IdYeuCauDichVuKyThuat) {
                                            let luocDoCurrent = new LuocDoPhauThuatThuThuat();
                                            luocDoCurrent = {
                                                IdYeuCauDichVuKyThuat: elementResultData.IdYeuCauDichVuKyThuat,
                                                Id: elementResultData.Id,
                                                LuocDoPhauThuat: elementResultData.LuocDoPhauThuat,
                                                MoTa: elementResultData.MoTa
                                            };


                                            element.LuocDoPttts.push(luocDoCurrent);
                                        }
                                    });
                                    this.closePopupLoadingData();
                                });
                            });
                    }
                });
        }
    }

    UpLoadFile(currentData: PhauThuatThuThuatTuongTrinh) {
        this.dialog
            .open(PhauThuatThuThuatPopUpChonAnhComponent, {
                disableClose: true,
                width: '1000px',
                data: 'KetQua',
            })
            .afterClosed()
            .subscribe(result => {
                if (result === undefined) {
                    return;
                }

                let luocDoCurrent = new LuocDoPhauThuatThuThuat();
                luocDoCurrent = {
                    IdYeuCauDichVuKyThuat: currentData.Id,
                    Id: 0,
                    LuocDoPhauThuat: result.Url,
                    MoTa: result.MoTa
                };

                if (currentData.LuocDoPttts === undefined) {
                    currentData.LuocDoPttts = [];
                }
                currentData.LuocDoPttts.push(luocDoCurrent);
                this.onChangeData();
            });
    }

    onChangePhauThuatThuThuat(data: any, itemPhauThuatThuThuat: PhauThuatThuThuatTuongTrinh) {
        if (data === undefined) {
            itemPhauThuatThuThuat.LoaiPTTTDisplay = null;
            itemPhauThuatThuThuat.PhuongPhapPhauThuatThuThuatDisplay = null;
            this.onChangeData();
            return;
        }

        itemPhauThuatThuThuat.PhuongPhapPhauThuatThuThuatDisplay = data.DisplayName;
        this.onChangeData();

        if (
            this.authService.hasPermission(this.documentType, SecurityOperation.View)
        ) {
            this.apiService
                .get<any>(
                    'KhamBenh/GetLoaiPtttDisplay?ma=' + data.KeyId
                )
                .subscribe((resultData) => {
                    if (resultData !== undefined && resultData != null) {
                        itemPhauThuatThuThuat.LoaiPTTTDisplay = resultData.LoaiPTTTDisplay;
                        itemPhauThuatThuThuat.LoaiPTTTEnum = resultData.LoaiPTTTEnum;
                    }
                });
        }
    }

    OnChangePhuongPhapVoCam(dataEvent: any, dataItem: any) {
        const self = this;

        if (dataEvent === undefined) {
            dataItem.PhuongPhapVoCamId = null;
            dataItem.PhuongPhapVoCamDisplay = null;
            self.onChangeData();
            return;
        }

        dataItem.PhuongPhapVoCamId = dataEvent.KeyId;
        dataItem.PhuongPhapVoCamDisplay = dataEvent.DisplayName;
        self.onChangeData();
    }

    OnChangeTinhHinhPttt(dataEvent: any, dataItem: any) {
        const self = this;

        if (dataEvent === undefined) {
            dataItem.TinhHinhPttt = null;
            dataItem.TinhHinhPtttDisplay = null;
            self.onChangeData();
            return;
        }

        dataItem.TinhHinhPttt = dataEvent;
        dataItem.TinhHinhPtttDisplay = dataEvent.DisplayName;
        self.onChangeData();
    }

    OnChangeTaiBien(dataEvent: any, dataItem: any) {
        const self = this;

        if (dataEvent === undefined) {
            dataItem.TaiBienPttt = null;
            dataItem.TaiBienPtttDisplay = null;
            self.onChangeData();
            return;
        }

        dataItem.TaiBienPttt = dataEvent.KeyId;
        dataItem.TaiBienPtttDisplay = dataEvent.DisplayName;
        self.onChangeData();
    }

    OnChangeTuVong(dataEvent: any, dataItem: any) {
        const self = this;

        if (dataEvent === undefined) {
            dataItem.TuVongPttt = null;
            dataItem.TuVongPtttDisplay = null;
            self.onChangeData();
            return;
        }

        dataItem.TuVongPttt = dataEvent.KeyId;
        dataItem.TuVongPtttDisplay = dataEvent.DisplayName;
        self.onChangeData();
    }

    SaveTuongTrinh() {
        this.validationErrors = [];
        this.showValidationMoTa = false;

        if (
            this.authService.hasPermission(this.documentType, SecurityOperation.Update)
        ) {
            this.loadingPage();
            const phauThuatTuongTrinh: any = {
                ListPttt: this.thongTinBenhNhan.YeuCauKhamBenh.YeuCauDichVuKyThuatPhauThuat,
                YeuCauKhamBenhId: this.thongTinBenhNhan.YeuCauKhamBenhId,
            };
            this.apiService
                .post<any>(
                    'KhamBenh/SaveTuongTrinh', phauThuatTuongTrinh
                )
                .subscribe((resultData) => {
                    if (resultData !== undefined && resultData != null) {
                        this.closePopupLoadingData();
                        if (resultData.Error === false) {
                            this.notificationService.showSuccess(resultData.Message);
                        }
                    }
                }, (errors: any) => {
                    this.closePopupLoadingData();
                    if (errors.ValidationErrors != null) {
                        this.validationErrors = errors.ValidationErrors;


                        if (this.thongTinBenhNhan.YeuCauKhamBenh.YeuCauDichVuKyThuatPhauThuat.length !== 0 &&
                            this.validationErrors.some(x => x.Field.includes('MoTa'))) {
                            this.showValidationMoTa = true;
                            // tslint:disable-next-line: prefer-for-of
                            for (let index = 0; index < this.thongTinBenhNhan.YeuCauKhamBenh.YeuCauDichVuKyThuatPhauThuat.length; index++) {
                                this.validationErrors.filter(x => x.Field.includes('MoTa')).forEach(validation => {
                                    if (validation.Field.includes('ListPttt[' + index + ']')) {
                                        validation.Field = 'ListPttt[' + index + '].MoTa';
                                    }
                                });
                            }
                        }
                    }
                    if (errors.ValidationErrors == null) {
                        this.notificationService.showError(errors.Message);
                    }
                });
        }
    }


    DeleteAnh(thongTinAnh: LuocDoPhauThuatThuThuat, item: PhauThuatThuThuatTuongTrinh) {
        if (item.LuocDoPttts.length !== 0) {
            for (const luocDoItem of item.LuocDoPttts) {
                // tslint:disable-next-line: no-var-keyword
                var position = item.LuocDoPttts.indexOf(thongTinAnh);
                break;
            }
        }
        item.LuocDoPttts.splice(position, 1);
        this.onChangeData();
    }

    ViewImage(thongTinAnh: LuocDoPhauThuatThuThuat) {
        if (thongTinAnh.MoTa === undefined) {
            thongTinAnh.MoTa = null;
        }

        this.dialog.open(ViewImagePdfComponent, {
            disableClose: false,
            width: '1000px',
            height: '600px',
            data: {
                Type: 'Image', Title: 'Xem ảnh', Description: (thongTinAnh.MoTa !== null ? thongTinAnh.MoTa : ''),
                Src: thongTinAnh.LuocDoPhauThuat
            }
        });
    }

    onChangeData() {
        const self = this;
        self.thongTinBenhNhan.YeuCauKhamBenh.IsChangePhauThuat = true;
    }

    loadingPage() {
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

    OnChangeCdTruocPhauThuat(dataEvent: any, dataItem: any) {
        const self = this;

        if (dataEvent === undefined) {
            dataItem.ICDTruocPhauThuatId = null;
            dataItem.ICDTruocPhauThuatDisplay = null;
            self.onChangeData();
            return;
        }

        dataItem.ICDTruocPhauThuatId = dataEvent.KeyId;
        dataItem.ICDTruocPhauThuatDisplay = dataEvent.DisplayName;
        self.onChangeData();
    }

    OnChangeCdSauPhauThuat(dataEvent: any, dataItem: any) {
        const self = this;

        if (dataEvent === undefined) {
            dataItem.ICDSauPhauThuatId = null;
            dataItem.ICDSauPhauThuatDisplay = null;
            self.onChangeData();
            return;
        }

        dataItem.ICDSauPhauThuatId = dataEvent.KeyId;
        dataItem.ICDSauPhauThuatDisplay = dataEvent.DisplayName;
        self.onChangeData();
    }
}
