import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChiTietDieuTriNoiTruViewModel, NoiTruHoSoKhacBieuDoChuyenDa, ThongTinBieuDoChuyenDa } from '../../../dieu-tri-noi-tru.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icClear from '@iconify/icons-ic/twotone-clear';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { EnumNhomChucDanh } from 'src/app/shared/enum/nhom-chuc-danh-enum';
import { PhieuInBieuDoChuyenDaComponent } from './phieu-in-bieu-do-chuyen-da/phieu-in-bieu-do-chuyen-da.component';

@Component({
    selector: 'app-bieu-do-chuyen-da',
    templateUrl: './bieu-do-chuyen-da.component.html',
    styleUrls: ['./bieu-do-chuyen-da.component.scss']
})
export class BieuDoChuyenDaComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    validationErrors: any[] = [];
    yeuCauTiepNhanId: number = null;
    loadingPopup: any;
    nhomChucDanh = EnumNhomChucDanh;

    noiTruHoSoKhac: NoiTruHoSoKhacBieuDoChuyenDa = new NoiTruHoSoKhacBieuDoChuyenDa();
    thongTinBieuDoChuyenDa: ThongTinBieuDoChuyenDa = new ThongTinBieuDoChuyenDa();

    icClear= icClear;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();

    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id; 
        this.getBieuDoChuyenDa();
    }

    getBieuDoChuyenDa() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showLoadingPopup();  

            this.apiService.get(`DieuTriNoiTru/GetThongTinHoSoKhacBieuDoChuyenDa?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.noiTruHoSoKhac = res;
                this.noiTruHoSoKhac.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                this.thongTinBieuDoChuyenDa = this.noiTruHoSoKhac.ThongTinHoSo ? JSON.parse(this.noiTruHoSoKhac.ThongTinHoSo) : new ThongTinBieuDoChuyenDa();
                this.returnId.emit(this.noiTruHoSoKhac.Id);

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
                    Message: "Bạn có muốn in biểu đồ chuyển dạ này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    //Lưu trước
                    this.validationErrors = [];
                    
                    if(this.validationErrors && !this.validationErrors.some(x => x)) {
                        this.showSavingPopup();
                        this.mergeData();
                        this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinBieuDoChuyenDa);
            
                        this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacBieuDoChuyenDa`, this.noiTruHoSoKhac).subscribe(res => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                            this.getBieuDoChuyenDa();
                            this.closeAllDialogs();

                            this.showLoadingPopup(); 
                            this.apiService.get<any>(`DieuTriNoiTru/InBieuDoChuyenDa?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
                                this.closeAllDialogs();

                                this.dialog.open(PhieuInBieuDoChuyenDaComponent, {
                                    disableClose: true,
                                    width: '1200px',
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
        this.getBieuDoChuyenDa();
    }

    luuBieuDoChuyenDa() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.validationErrors = [];
                    
                    if(this.validationErrors && !this.validationErrors.some(x => x)) {
                        this.showSavingPopup();
                        this.mergeData();
                        this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinBieuDoChuyenDa);
            
                        this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacBieuDoChuyenDa`, this.noiTruHoSoKhac).subscribe(res => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                            this.getBieuDoChuyenDa();

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

    mergeData() {
        this.noiTruHoSoKhac.NgayGhiBieuDo = this.thongTinBieuDoChuyenDa.NgayGhiBieuDo;
        this.noiTruHoSoKhac.NguoiGhiBieuDoId = this.thongTinBieuDoChuyenDa.NguoiGhiBieuDoId;
        this.noiTruHoSoKhac.NguoiGhiBieuDoDisplay = this.thongTinBieuDoChuyenDa.NguoiGhiBieuDoDisplay;
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

    evtNguoiGhiBieuDoChanged(evt) {
        this.thongTinBieuDoChuyenDa.NguoiGhiBieuDoDisplay = evt != null ? evt.DisplayName : null;
    }
}
