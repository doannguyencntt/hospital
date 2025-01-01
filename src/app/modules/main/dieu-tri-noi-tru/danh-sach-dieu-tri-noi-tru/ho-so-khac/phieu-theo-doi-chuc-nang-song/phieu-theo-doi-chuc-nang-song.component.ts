import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { SeriesLabelsPosition, ValueAxisLabels } from '@progress/kendo-angular-charts';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ChiTietDieuTriNoiTruViewModel, NoiTruHoSoKhac, ThongTinHoSoPhieuTheoDoiChucNangSong } from '../../../dieu-tri-noi-tru.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { PhieuInTheoDoiChucNangComponent } from './phieu-in-theo-doi-chuc-nang/phieu-in-theo-doi-chuc-nang.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

import icClear from '@iconify/icons-ic/twotone-clear';
// import { nhietDoData, machData } from './data';

@Component({
    selector: 'app-phieu-theo-doi-chuc-nang-song',
    templateUrl: './phieu-theo-doi-chuc-nang-song.component.html',
    styleUrls: ['./phieu-theo-doi-chuc-nang-song.component.scss']
})

export class PhieuTheoDoiChucNangSongComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    validationErrors: any[] = [];
    yeuCauTiepNhanId: number = null;
    loadingPopup: any;

    noiTruHoSoKhac: NoiTruHoSoKhac = new NoiTruHoSoKhac();
    thongTinHoSoPhieuTheoDoiChucNangSong: ThongTinHoSoPhieuTheoDoiChucNangSong = new ThongTinHoSoPhieuTheoDoiChucNangSong();

    icClear= icClear;

    //#region Chart
    // dataSource: any = [];
    // public valueAxisLabel: ValueAxisLabels = {
    //     step: 10
    // }

    // public valueAxes: any[] = [
    //     { name: 'nhietdoc', title: 'Nhiệt độ C', min: 35, max: 41, majorUnit: 0.1, color: '#2b78e4' },
    //     { name: 'mach', title: 'Mạch L/ph', min: 40, max: 160, majorUnit: 2, color: '#cf2a27' }
    // ];

    // public series: any[] = [{
    //     type: 'line',
    //     stack: false,
    //     name: 'Nhiệt độ',
    //     data: nhietDoData,
    //     xField: 'date',
    //     yField: 'value',
    //     axis: 'nhietdoc',
    //     color: '#2b78e4',
    //     category: 'catenhietdo'
    // }, {
    //     type: 'line',
    //     stack: false,
    //     name: 'Mạch',
    //     data: machData,
    //     xField: 'date',
    //     yField: 'value',
    //     axis: 'mach',
    //     color: '#cf2a27',
    //     category: 'catemach'
    // }];
    //#endregion
    
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;

    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();

    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id; 
        this.getThongTinPhieuTheoDoiChucNangSong();

        // this.dataSource = [
        //     { NhomDoLuong: '1. Huyết áp (mmHg)', MorningFirstDay: '20', EveningFirstDay: '20', MorningSecondDay: '20', EveningSecondDay: '20', MorningThirdDay: '20', EveningThirdDay: '20'  },
        //     { NhomDoLuong: '2. Cân nặng (kg)', MorningFirstDay: '20', EveningFirstDay: '20', MorningSecondDay: '20', EveningSecondDay: '20', MorningThirdDay: '20', EveningThirdDay: '20'  },
        //     { NhomDoLuong: '3. Nhịp thở (lần/phút)', MorningFirstDay: '20', EveningFirstDay: '20', MorningSecondDay: '20', EveningSecondDay: '20', MorningThirdDay: '20', EveningThirdDay: '20'  },
        //     { NhomDoLuong: 'Điều dưỡng', MorningFirstDay: 'Nguyễn Thị A', EveningFirstDay: 'Nguyễn Thị A', MorningSecondDay: 'Nguyễn Thị A', EveningSecondDay: 'Nguyễn Thị A', MorningThirdDay: 'Nguyễn Thị A', EveningThirdDay: 'Nguyễn Thị A'  }
        // ]
    }

    getThongTinPhieuTheoDoiChucNangSong() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showLoadingPopup();  

            this.apiService.get(`DieuTriNoiTru/GetThongTinHoSoKhacPhieuTheoDoiChucNangSong?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.noiTruHoSoKhac = res;
                this.noiTruHoSoKhac.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                this.returnId.emit(this.noiTruHoSoKhac.Id);

                if(this.noiTruHoSoKhac.ThongTinHoSo) {
                    this.thongTinHoSoPhieuTheoDoiChucNangSong = JSON.parse(this.noiTruHoSoKhac.ThongTinHoSo);
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
                    Message: "Bạn có muốn in phiếu theo dõi chức năng sống này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    //Lưu trước
                    this.validationErrors = [];
                    
                    if(this.validationErrors && !this.validationErrors.some(x => x)) {
                        this.showSavingPopup();
                        this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinHoSoPhieuTheoDoiChucNangSong);
            
                        this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacPhieuTheoDoiChucNangSong`, this.noiTruHoSoKhac).subscribe(res => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                            this.getThongTinPhieuTheoDoiChucNangSong();
                            this.closeAllDialogs();

                            this.showLoadingPopup(); 
                            this.apiService.get<any>(`DieuTriNoiTru/InPhieuTheoDoiChucNangSong?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
                                this.closeAllDialogs();

                                this.dialog.open(PhieuInTheoDoiChucNangComponent, {
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
        this.getThongTinPhieuTheoDoiChucNangSong();
    }

    luuPhieuTheoDoiChucNangSong() {
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
                        this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinHoSoPhieuTheoDoiChucNangSong);
            
                        this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacPhieuTheoDoiChucNangSong`, this.noiTruHoSoKhac).subscribe(res => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                            this.getThongTinPhieuTheoDoiChucNangSong();

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
