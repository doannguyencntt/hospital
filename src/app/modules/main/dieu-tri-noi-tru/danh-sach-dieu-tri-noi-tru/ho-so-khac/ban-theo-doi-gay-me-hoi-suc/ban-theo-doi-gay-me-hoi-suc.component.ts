import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumNhomChucDanh } from 'src/app/shared/enum/nhom-chuc-danh-enum';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ChiTietDieuTriNoiTruViewModel, NoiTruHoSoKhacBangTheoDoiGayMeHoiSuc, ThongTinBangTheoDoiGayMeHoiSuc } from '../../../dieu-tri-noi-tru.model';

import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';
import { BanInTheoDoiGayMeHoiSucComponent } from './ban-in-theo-doi-gay-me-hoi-suc/ban-in-theo-doi-gay-me-hoi-suc.component';
import { BienBanGayMePopupComponent } from '../bien-ban-gay-me-popup/bien-ban-gay-me-popup.component';

@Component({
  selector: 'app-ban-theo-doi-gay-me-hoi-suc',
  templateUrl: './ban-theo-doi-gay-me-hoi-suc.component.html',
  styleUrls: ['./ban-theo-doi-gay-me-hoi-suc.component.scss']
})
export class BanTheoDoiGayMeHoiSucComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    nhomChucDanh = EnumNhomChucDanh;
    yeuCauTiepNhanId: number = null;
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    validationErrors: any[] = [];
    loadingPopup: any;
    queryInfo: GridQueryInfo = new GridQueryInfo(0, 10, 10, '', '', null, false);
    saveMessage: string = 'Chỉnh sửa';

    noiTruHoSoKhac: NoiTruHoSoKhacBangTheoDoiGayMeHoiSuc = new NoiTruHoSoKhacBangTheoDoiGayMeHoiSuc();
    thongTinBangTheoDoiGayMeHoiSuc: ThongTinBangTheoDoiGayMeHoiSuc = new ThongTinBangTheoDoiGayMeHoiSuc();

    gridDataSource: any = [];
    gridColumns: any[] = [];

    urlGetDanhSachBangTheoDoiGayMeHoiSuc = `DieuTriNoiTru/GetDanhSachBangTheoDoiGayMeHoiSuc`;
    // urlGetTotalPagesDanhSachBangTheoDoiGayMeHoiSuc = `DieuTriNoiTru/GetTotalPagesDanhSachBangTheoDoiGayMeHoiSuc`;

    sortDanhSachBangTheoDoiGayMeHoiSuc: SortDescriptor[] = [ { field: "NgayThucHien", dir: "asc" }]

    icDelete = icDelete;
    icClear = icClear;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('ngayThucHienTemplate', { static: true }) ngayThucHienTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridBangTheoDoiGayMeHoiSuc', { read: GridComponent, static: false }) gridBangTheoDoiGayMeHoiSuc: GridComponent;

    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id;
        this.queryInfo.additionalSearchString = `${this.yeuCauTiepNhanId}`;
        this.queryInfo.sort = this.sortDanhSachBangTheoDoiGayMeHoiSuc;

        this.getThongTinBangTheoDoiGayMeHoiSuc(null);

        this.gridColumns = [
            { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 150, Sortable: false, Template: this.ngayThucHienTemplate },
            { Field: "LoaiMo", Title: "Loại mổ", Width: 150, Sortable: false },
            { Field: "NguoiMo", Title: "Người mổ", Width: 150, Sortable: false },
            { Field: "Action", Title: "", Width: 30, Sortable: false, Template: this.actionTemplate }
        ];
    }

    getDanhSachBangTheoDoiGayMeHoiSuc() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showLoadingPopup();
            
            this.apiService.post(this.urlGetDanhSachBangTheoDoiGayMeHoiSuc, this.queryInfo).subscribe((res: any) => {
                if(res) {
                    this.gridDataSource = {
                        data: res.Data,
                        total: res.TotalRowCount
                    };
                    this.setDataGridView();
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

    getThongTinBangTheoDoiGayMeHoiSuc(hoSoKhacId: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showLoadingPopup();

            let url = hoSoKhacId ? `DieuTriNoiTru/GetThongTinHoSoKhacBangTheoDoiGayMeHoiSuc?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}&hoSoKhacId=${hoSoKhacId}` : `DieuTriNoiTru/GetThongTinHoSoKhacBangTheoDoiGayMeHoiSuc?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`;
            
            this.apiService.get(url).subscribe((res: any) => {
                this.noiTruHoSoKhac = res;
                this.noiTruHoSoKhac.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                this.returnId.emit(this.noiTruHoSoKhac.Id);

                this.saveMessage = this.noiTruHoSoKhac && this.noiTruHoSoKhac.Id ? `Chỉnh sửa` : `Thêm`;

                if(this.noiTruHoSoKhac.ThongTinHoSo) {
                    this.thongTinBangTheoDoiGayMeHoiSuc = JSON.parse(this.noiTruHoSoKhac.ThongTinHoSo);
                } else {
                    this.thongTinBangTheoDoiGayMeHoiSuc = new ThongTinBangTheoDoiGayMeHoiSuc();
                }

                this.getDanhSachBangTheoDoiGayMeHoiSuc();
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
                    Message: "Bạn có muốn in bảng theo dõi gây mê hồi sức này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    //Lưu trước
                    this.validationErrors = [];
                    this.mergeData();

                    this.showSavingPopup();
                    this.convertThongTinHoSoToUTCDateTime();
                    this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinBangTheoDoiGayMeHoiSuc);
        
                    this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacBangTheoDoiGayMeHoiSuc`, this.noiTruHoSoKhac).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [this.saveMessage]));

                        //getThongTinBangTheoDoiGayMeHoiSuc
                        this.showLoadingPopup();

                        let url = this.noiTruHoSoKhac.Id ? `DieuTriNoiTru/GetThongTinHoSoKhacBangTheoDoiGayMeHoiSuc?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}&hoSoKhacId=${this.noiTruHoSoKhac.Id}` : `DieuTriNoiTru/GetThongTinHoSoKhacBangTheoDoiGayMeHoiSuc?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`;
                        
                        this.apiService.get(url).subscribe((res: any) => {
                            this.noiTruHoSoKhac = res;
                            this.noiTruHoSoKhac.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                            this.returnId.emit(this.noiTruHoSoKhac.Id);

                            if(this.noiTruHoSoKhac.ThongTinHoSo) {
                                this.thongTinBangTheoDoiGayMeHoiSuc = JSON.parse(this.noiTruHoSoKhac.ThongTinHoSo);
                            } else {
                                this.thongTinBangTheoDoiGayMeHoiSuc = new ThongTinBangTheoDoiGayMeHoiSuc();
                            }

                            this.getDanhSachBangTheoDoiGayMeHoiSuc();

                            this.showLoadingPopup(); 
                            this.apiService.get<any>(`DieuTriNoiTru/InBangTheoDoiGayMeHoiSuc?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}&hoSoKhacId=${this.noiTruHoSoKhac.Id}`).subscribe((res) => {
                                this.closeAllDialogs();

                                this.dialog.open(BanInTheoDoiGayMeHoiSucComponent, {
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
                        });
                        
                        this.closeAllDialogs();
                    }, (err: ApiError) => {
                        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        this.closeAllDialogs();
                    });
                    
                    // if(this.noiTruHoSoKhac.Id && this.noiTruHoSoKhac.Id !== 0) {
                    //     this.showLoadingPopup(); 

                    //     this.apiService.get<any>(`DieuTriNoiTru/InBangTheoDoiGayMeHoiSuc?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}&hoSoKhacId=${this.noiTruHoSoKhac.Id}`).subscribe((res) => {
                    //         this.closeAllDialogs();
    
                    //         this.dialog.open(BanInTheoDoiGayMeHoiSucComponent, {
                    //             disableClose: true,
                    //             width: '1200px',
                    //             // height: "550px",
                    //             data: res
                    //         }).afterClosed().subscribe(() => {
                    //         });
                    //     }, (err: ApiError) => {
                    //         err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    //         this.closeAllDialogs();
                    //     });
                    // }
                    // else {
                    //     if(this.gridDataSource && this.gridDataSource.total > 0)
                    //         this.notificationService.showError('Vui lòng chọn bảng theo dõi gây mê hồi sức để in');
                    //     else
                    //         this.notificationService.showError('Chưa có bảng theo dõi gây mê hồi sức để in');
                    // }
                    
                }
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    huy() {
        this.getThongTinBangTheoDoiGayMeHoiSuc(null);
    }

    luuBangTheoDoiGayMeHoiSuc() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, [this.saveMessage.toLowerCase()]) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.validationErrors = [];
                    this.mergeData();

                    this.showSavingPopup();
                    this.convertThongTinHoSoToUTCDateTime();
                    this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinBangTheoDoiGayMeHoiSuc);
        
                    this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacBangTheoDoiGayMeHoiSuc`, this.noiTruHoSoKhac).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [this.saveMessage]));

                        this.getThongTinBangTheoDoiGayMeHoiSuc(this.noiTruHoSoKhac.Id);
                        this.closeAllDialogs();
                    }, (err: ApiError) => {
                        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        this.closeAllDialogs();
                    })
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    setDataGridView() {
        if (this.gridBangTheoDoiGayMeHoiSuc) {
            this.gridBangTheoDoiGayMeHoiSuc.gridDataSource = this.gridDataSource;
            this.gridBangTheoDoiGayMeHoiSuc.setDataSource();
        }
    }

    themBangTheoDoi() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn thêm mới bảng theo dõi gây mê hồi sức không?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.clearAllData();
                }
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    deleteBangTheoDoi(dataItem) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn xoá bảng theo dõi gây mê hồi sức này không?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.showDeletingPopup();

                    this.apiService.delete<any>(`DieuTriNoiTru/XoaThongTinHoSoKhacBangTheoDoiGayMeHoiSuc?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}&hoSoKhacId=${dataItem.Id}`).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xoá"]));
                        this.closeAllDialogs();

                        if(this.noiTruHoSoKhac.Id === dataItem.Id) {
                            this.getThongTinBangTheoDoiGayMeHoiSuc(null);
                        } else {
                            this.getDanhSachBangTheoDoiGayMeHoiSuc();
                        }
                    }, (err: ApiError) => {
                        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        this.closeAllDialogs();
                    })
                }
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    viewBangTheoDoi(dataItem) {
        if(dataItem) {
            this.getThongTinBangTheoDoiGayMeHoiSuc(dataItem.Id);
        }
    }

    mergeData() {
        this.noiTruHoSoKhac.ChanDoan = this.thongTinBangTheoDoiGayMeHoiSuc.ChanDoan;
        this.noiTruHoSoKhac.TienMe = this.thongTinBangTheoDoiGayMeHoiSuc.TienMe;
        this.noiTruHoSoKhac.TacDung = this.thongTinBangTheoDoiGayMeHoiSuc.TacDung;
        this.noiTruHoSoKhac.LoaiMo = this.thongTinBangTheoDoiGayMeHoiSuc.LoaiMo;
        this.noiTruHoSoKhac.TuTheMo = this.thongTinBangTheoDoiGayMeHoiSuc.TuTheMo;
        this.noiTruHoSoKhac.NguoiGayMe = this.thongTinBangTheoDoiGayMeHoiSuc.NguoiGayMe;
        this.noiTruHoSoKhac.NguoiMo = this.thongTinBangTheoDoiGayMeHoiSuc.NguoiMo;
        this.noiTruHoSoKhac.PhuongPhapVoCam = this.thongTinBangTheoDoiGayMeHoiSuc.PhuongPhapVoCam;
        this.noiTruHoSoKhac.NguoiThuCheo = this.thongTinBangTheoDoiGayMeHoiSuc.NguoiThuCheo;
        this.noiTruHoSoKhac.NgayThucHien = this.thongTinBangTheoDoiGayMeHoiSuc.NgayThucHien;
        this.noiTruHoSoKhac.Nang = this.thongTinBangTheoDoiGayMeHoiSuc.Nang;
        this.noiTruHoSoKhac.Cao = this.thongTinBangTheoDoiGayMeHoiSuc.Cao;
        this.noiTruHoSoKhac.KetLuan = this.thongTinBangTheoDoiGayMeHoiSuc.KetLuan;
        this.noiTruHoSoKhac.MaSoThongTinVienPhi = this.thongTinBangTheoDoiGayMeHoiSuc.MaSoThongTinVienPhi;
    }

    clearAllData() {
        this.noiTruHoSoKhac = new NoiTruHoSoKhacBangTheoDoiGayMeHoiSuc();
        this.noiTruHoSoKhac.YeuCauTiepNhanId = this.yeuCauTiepNhanId;

        this.thongTinBangTheoDoiGayMeHoiSuc = new ThongTinBangTheoDoiGayMeHoiSuc();
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

    convertThongTinHoSoToUTCDateTime() {
        if(this.thongTinBangTheoDoiGayMeHoiSuc.NgayThucHien) {
			let ngayThucHienTemp = new Date(this.thongTinBangTheoDoiGayMeHoiSuc.NgayThucHien); 
			this.thongTinBangTheoDoiGayMeHoiSuc.NgayThucHien = new Date(Date.UTC(ngayThucHienTemp.getFullYear(), ngayThucHienTemp.getMonth(), ngayThucHienTemp.getDate(), ngayThucHienTemp.getHours(), ngayThucHienTemp.getMinutes()));
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

    showDeletingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xoá...' }
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
