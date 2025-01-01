import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ChiTietDieuTriNoiTruViewModel, NoiTruHoSoKhacBienBanCamKetGayTeGiamDauTrongDeSauMo, ThongTinHoSoBienBanCamKetGayTeGiamDauTrongDeSauMo, ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo } from '../../../dieu-tri-noi-tru.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { EnumNhomChucDanh } from 'src/app/shared/enum/nhom-chuc-danh-enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { BienBanInCamKetGayTeComponent } from './bien-ban-in-cam-ket-gay-te/bien-ban-in-cam-ket-gay-te.component';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';

@Component({
    selector: 'app-bien-ban-cam-ket-gay-te',
    templateUrl: './bien-ban-cam-ket-gay-te.component.html',
    styleUrls: ['./bien-ban-cam-ket-gay-te.component.scss']
})
export class BienBanCamKetGayTeComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    nhomChucDanh = EnumNhomChucDanh;
    yeuCauTiepNhanId: number = null;
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    validationErrors: any[] = [];
    loadingPopup: any;

    noiTruHoSoKhac: NoiTruHoSoKhacBienBanCamKetGayTeGiamDauTrongDeSauMo = new NoiTruHoSoKhacBienBanCamKetGayTeGiamDauTrongDeSauMo();
    thongTinHoSoBienBanCamKetGayTe: ThongTinHoSoBienBanCamKetGayTeGiamDauTrongDeSauMo = new ThongTinHoSoBienBanCamKetGayTeGiamDauTrongDeSauMo();
    lstQuanHeThanNhan: ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo[] = new Array<ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo>();

    gridDataSource: any = [];
    gridColumns: any[] = [];

    icAdd = icAdd;
    icDelete = icDelete;
    icClear = icClear;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
    @ViewChild('namSinhTemplate', { static: true }) namSinhTemplate: TemplateRef<any>;
    @ViewChild('cmndTemplate', { static: true }) cmndTemplate: TemplateRef<any>;
    @ViewChild('quanHeTemplate', { static: true }) quanHeTemplate: TemplateRef<any>;
    @ViewChild('diaChiTemplate', { static: true }) diaChiTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('footerTemplate', { static: true }) footerTemplate: TemplateRef<any>;
    @ViewChild('gridNguoiThanBienBanCamKetGayTe', { read: GridComponent, static: true }) gridNguoiThanBienBanCamKetGayTe: GridComponent;

    constructor(private route: ActivatedRoute, private dialog: MatDialog,
        private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id;
        this.getThongTinBienBanCamKetGayTe();

        this.gridColumns = [
            { Field: "HoTen", Title: "Họ tên", Width: 100, Template: this.hoTenTemplate },
            { Field: "NamSinh", Title: "Năm sinh", Width: 40, Template: this.namSinhTemplate },
            { Field: "CMND", Title: "CMND", Width: 70, Template: this.cmndTemplate },
            { Field: "QuanHe", Title: "Quan hệ", Width: 50, Template: this.quanHeTemplate, TemplateFooter: this.footerTemplate },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 200, Template: this.diaChiTemplate },
            { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
        ];
    }

    getThongTinBienBanCamKetGayTe() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showLoadingPopup();

            this.apiService.get(`DieuTriNoiTru/GetThongTinBienBanCamKetGayTeGiamDauTrongDeSauMo?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.noiTruHoSoKhac = res;
                this.noiTruHoSoKhac.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                this.returnId.emit(this.noiTruHoSoKhac.Id);

                if (this.noiTruHoSoKhac.ThongTinHoSo) {
                    this.thongTinHoSoBienBanCamKetGayTe = JSON.parse(this.noiTruHoSoKhac.ThongTinHoSo);
                } else {
                    this.thongTinHoSoBienBanCamKetGayTe = new ThongTinHoSoBienBanCamKetGayTeGiamDauTrongDeSauMo();
                }

                this.lstQuanHeThanNhan = this.thongTinHoSoBienBanCamKetGayTe.QuanHeThanNhans;
                this.setGridDataSource();
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
                width: "600px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn in biên bản cam kết gây tê giảm đau trong đẻ - sau mổ này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    //Lưu trước
                    this.validationErrors = [];

                    this.setIdsQuanHeThanNhans();
                    this.thongTinHoSoBienBanCamKetGayTe.QuanHeThanNhans = this.lstQuanHeThanNhan;
                    this.mergeData();

                    this.showSavingPopup();
                    this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinHoSoBienBanCamKetGayTe);

                    this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacBienBanCamKetGayTeGiamDauTrongDeSauMo`, this.noiTruHoSoKhac).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                        this.getThongTinBienBanCamKetGayTe();
                        this.closeAllDialogs();

                        this.showLoadingPopup();
                        this.apiService.get<any>(`DieuTriNoiTru/InBienBanCamKetGayTeGiamDauTrongDeSauMo?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
                            this.closeAllDialogs();

                            this.dialog.open(BienBanInCamKetGayTeComponent, {
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
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    huy() {
        this.validationErrors = [];
        this.getThongTinBienBanCamKetGayTe();
    }

    luuBienBanCamKetGayTe() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.validationErrors = [];

                    this.setIdsQuanHeThanNhans();
                    this.thongTinHoSoBienBanCamKetGayTe.QuanHeThanNhans = this.lstQuanHeThanNhan;
                    this.mergeData();

                    this.showSavingPopup();
                    this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinHoSoBienBanCamKetGayTe);

                    this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacBienBanCamKetGayTeGiamDauTrongDeSauMo`, this.noiTruHoSoKhac).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                        this.getThongTinBienBanCamKetGayTe();
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

    evtBsGayMeHoiSucChanged(evt) {
        this.thongTinHoSoBienBanCamKetGayTe.BacSiGMHSDisplay = evt != null ? evt.DisplayName : null;
    }

    themNguoiLienHe() {
        this.lstQuanHeThanNhan.push(new ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo());
        this.setGridDataSource();
    }

    deleteNguoiLienHe(dataItem: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));

                let quanHeThanNhanIdx = this.lstQuanHeThanNhan.findIndex(p => p == dataItem);
                this.lstQuanHeThanNhan.splice(quanHeThanNhanIdx, 1);
                this.setValidationErrors(quanHeThanNhanIdx);
                this.setGridDataSource();
            }
        });
    }

    evtQuanHeChanged(evt, dataItem) {
        dataItem.QuanHeDisplay = evt != null ? evt.DisplayName : null;
    }

    setGridDataSource() {
        this.gridDataSource = {
            data: [...this.lstQuanHeThanNhan],
            total: this.lstQuanHeThanNhan.length
        };

        if (this.gridNguoiThanBienBanCamKetGayTe) {
            this.gridNguoiThanBienBanCamKetGayTe.gridDataSource = this.gridDataSource;
            this.gridNguoiThanBienBanCamKetGayTe.setDataSource();
        }
    }

    setIdsQuanHeThanNhans() {
        this.lstQuanHeThanNhan.forEach((item, idx) => {
            item.Id = idx + 1;
        });
    }

    mergeData() {
        this.noiTruHoSoKhac.BacSiGiaiThich = this.thongTinHoSoBienBanCamKetGayTe.BacSiGiaiThich;
        this.noiTruHoSoKhac.NgayThucHien = this.thongTinHoSoBienBanCamKetGayTe.NgayThucHien;
        this.noiTruHoSoKhac.BacSiGMHSId = this.thongTinHoSoBienBanCamKetGayTe.BacSiGMHSId;
        this.noiTruHoSoKhac.QuanHeThanNhans = this.thongTinHoSoBienBanCamKetGayTe.QuanHeThanNhans;
    }

    setValidationErrors(quanHeThanNhanIdx) {
        //QuanHeThanNhans[1], QuanHeThanNhans[2], QuanHeThanNhans[3] -> xoá 2 -> QuanHeThanNhans[1], QuanHeThanNhans[3] -> QuanHeThanNhans[1], QuanHeThanNhans[2]
        this.validationErrors.splice(this.validationErrors.findIndex(p => p.Field == `QuanHeThanNhans[${quanHeThanNhanIdx}].HoTen`), 1);

        if(this.validationErrors && this.validationErrors.length > 0) {
            this.validationErrors.forEach(item => {
                if(item.Field.includes('QuanHeThanNhans')) {
                    let currentIdx = parseInt(item.Field.substring(item.Field.indexOf('[') + 1, item.Field.indexOf(']')));

                    if(currentIdx > quanHeThanNhanIdx) {
                        item.Field = `QuanHeThanNhans[${currentIdx - 1}].HoTen`
                    };
                }
            });
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
