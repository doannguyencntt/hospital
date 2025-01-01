import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel, DieuTriNoiTruTaiNanThuongTich, ThongTinTaiNanThuongTich } from '../../dieu-tri-noi-tru.model';

@Component({
    selector: 'app-tai-nan-thuong-tich',
    templateUrl: './tai-nan-thuong-tich.component.html',
    styleUrls: ['./tai-nan-thuong-tich.component.scss']
})

export class TaiNanThuongTichComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];
    yeuCauTiepNhanId: number = null;
    loadingPopup: any;
    format = 'n1';
    
    dieuTriNoiTruTaiNanThuongTich: DieuTriNoiTruTaiNanThuongTich = new DieuTriNoiTruTaiNanThuongTich();
    thongTinTaiNanThuongTich: ThongTinTaiNanThuongTich = new ThongTinTaiNanThuongTich();

    radioTwoSelectItems = [{ Value: 1, Text: 'Có' }, { Value: 0, Text: 'Không' }];
    radioThreeSelectItems = [{ Value: 1, Text: 'Có' }, { Value: 0, Text: 'Không' }, { Value: null, Text: 'Không rõ' }];
    radioPhuongTienGayTaiNan = [{ Value: 0, Text: 'Ô tô' }, { Value: 1, Text: 'Tàu hoả' }, { Value: 2, Text: 'Mô tô, xe gắn máy' }, { Value: 3, Text: 'Xe tự chế' }, { Value: 4, Text: 'Tự gây tai nạn' }];
    radioTuVong = [{ Value: 0, Text: 'Trước BV' }, { Value: 1, Text: 'Trong BV' }];

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id; 

        this.getThongTinTaiNanThuongTich();
    }

    getThongTinTaiNanThuongTich() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showLoadingPopup();

            this.apiService.get(`DieuTriNoiTru/GetThongTinTaiNanThuongTich?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.dieuTriNoiTruTaiNanThuongTich = res;

                if(this.dieuTriNoiTruTaiNanThuongTich.ThongTinTaiNanThuongTich) {
                    this.thongTinTaiNanThuongTich = JSON.parse(this.dieuTriNoiTruTaiNanThuongTich.ThongTinTaiNanThuongTich);
                } else {
                    this.thongTinTaiNanThuongTich = new ThongTinTaiNanThuongTich();
                }

                this.closeAllDialogs();
            }, (err: ApiError) => {
                err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                this.closeAllDialogs();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    luuTaiNanThuongTich() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.validationErrors = [];

                    this.dieuTriNoiTruTaiNanThuongTich.Id = this.yeuCauTiepNhanId;
                    this.dieuTriNoiTruTaiNanThuongTich.ThoiGianXayRaTaiNan = this.thongTinTaiNanThuongTich.ThoiGianXayRaTaiNan;
                    this.dieuTriNoiTruTaiNanThuongTich.ThoiGianDenCapCuu = this.thongTinTaiNanThuongTich.ThoiGianDenCapCuu;
                    this.dieuTriNoiTruTaiNanThuongTich.ThongTinTaiNanThuongTich = JSON.stringify(this.thongTinTaiNanThuongTich);

                    this.apiService.post<any>(`DieuTriNoiTru/CapNhatTaiNanThuongTich`, this.dieuTriNoiTruTaiNanThuongTich).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                        this.closeAllDialogs();
                    }, (err: ApiError) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        this.closeAllDialogs();
                    })
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    khongDoNongDoConTrongMauChanged(evt) {
        if(evt) {
            this.thongTinTaiNanThuongTich.NongDoConTrongMau = null;
        }
    }

    khongDoNongDoConTrongHoiThoChanged(evt) {
        if(evt) {
            this.thongTinTaiNanThuongTich.NongDoConTrongHoiTho = null;
        }
    }

    khongChuyenTuyenChanged(evt) {
        if(evt) {
            this.thongTinTaiNanThuongTich.NoiChuyenTuyen = null;
        }
    }

    huyTaiNanThuongTich() {
        this.getThongTinTaiNanThuongTich();
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
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }
}
