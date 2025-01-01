import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ChiTietDieuTriNoiTruViewModel, NoiTruHoSoKhac, ThongTinHoSoGiayTuNguyenTrietSan } from '../../../dieu-tri-noi-tru.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { GiayInTuNguyenTrietSanComponent } from './giay-in-tu-nguyen-triet-san/giay-in-tu-nguyen-triet-san.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { EnumNhomChucDanh } from 'src/app/shared/enum/nhom-chuc-danh-enum';

import icClear from '@iconify/icons-ic/twotone-clear';

@Component({
    selector: 'app-giay-tu-nguyen-triet-san',
    templateUrl: './giay-tu-nguyen-triet-san.component.html',
    styleUrls: ['./giay-tu-nguyen-triet-san.component.scss']
})
export class GiayTuNguyenTrietSanComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    validationErrors: any[] = [];
    yeuCauTiepNhanId: number = null;
    nhomChucDanh = EnumNhomChucDanh;
    loadingPopup: any;
    hostingName: string;

    noiTruHoSoKhac: NoiTruHoSoKhac = new NoiTruHoSoKhac();
    thongTinHoSoGiayTuNguyenTrietSan: ThongTinHoSoGiayTuNguyenTrietSan = new ThongTinHoSoGiayTuNguyenTrietSan();

    icClear= icClear;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
    
    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id; 
        this.getThongTinGiayTuNguyenTrietSan();
    }

    getThongTinGiayTuNguyenTrietSan() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showLoadingPopup();  

            this.apiService.get(`DieuTriNoiTru/GetThongTinHoSoKhacGiayTuNguyenTrietSan?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.noiTruHoSoKhac = res;
                this.noiTruHoSoKhac.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                this.returnId.emit(this.noiTruHoSoKhac.Id);

                if(this.noiTruHoSoKhac.ThongTinHoSo) {
                    this.thongTinHoSoGiayTuNguyenTrietSan = JSON.parse(this.noiTruHoSoKhac.ThongTinHoSo);
                } else {
                    this.thongTinHoSoGiayTuNguyenTrietSan = new ThongTinHoSoGiayTuNguyenTrietSan();
                }

                this.closeAllDialogs();
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                this.closeAllDialogs();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    in() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn in giấy tự nguyện triệt sản này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    //Lưu trước
                    this.validationErrors = [];
                    this.kiemTraDataGiayTuNguyenTrietSan();

                    if(this.validationErrors && !this.validationErrors.some(x => x)) {
                        this.showSavingPopup();
                        this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinHoSoGiayTuNguyenTrietSan);
            
                        this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacGiayTuNguyenTrietSan`, this.noiTruHoSoKhac).subscribe(res => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                            this.getThongTinGiayTuNguyenTrietSan();
                            this.closeAllDialogs();

                            this.showLoadingPopup(); 
                            this.hostingName = "http://" + window.location.host;
                            this.apiService.get<any>(`DieuTriNoiTru/InGiayTuNguyenTrietSan?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}&hostingName=${this.hostingName}`).subscribe((res) => {
                                this.closeAllDialogs();

                                this.dialog.open(GiayInTuNguyenTrietSanComponent, {
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
                        }, (err: ApiError) => {
                            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                            this.closeAllDialogs();
                        })
                    }
                }
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    huy() {  
        this.getThongTinGiayTuNguyenTrietSan();
    }

    luuThongTinGiayTuNguyenTrietSan() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.validationErrors = [];
                    this.kiemTraDataGiayTuNguyenTrietSan();

                    if(this.validationErrors && !this.validationErrors.some(x => x)) {
                        this.showSavingPopup();
                        this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinHoSoGiayTuNguyenTrietSan);
            
                        this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacGiayTuNguyenTrietSan`, this.noiTruHoSoKhac).subscribe(res => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                            this.getThongTinGiayTuNguyenTrietSan();
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

    kiemTraDataGiayTuNguyenTrietSan() {
        let array = [];

        if(!this.thongTinHoSoGiayTuNguyenTrietSan.NgayThucHien) {
            array.push({ Field: 'NgayThucHien', Message: 'Ngày thực hiện yêu cầu nhập' });
        }

        if (array.length > 0) { this.validationErrors = [...array]; }
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

    evtBsThucHienTrietSanChanged(evt) {
        this.thongTinHoSoGiayTuNguyenTrietSan.BacSiThucHienDisplay = evt != null ? evt.DisplayName : null;
    }
}
