import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { GiayInChuyenTuyenComponent } from './giay-in-chuyen-tuyen/giay-in-chuyen-tuyen.component';
import { ChiTietDieuTriNoiTruViewModel, NoiTruHoSoKhacGiayChuyenTuyen, ThongTinGiayChuyenTuyen } from '../../../dieu-tri-noi-tru.model';

import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { EnumNhomChucDanh } from 'src/app/shared/enum/nhom-chuc-danh-enum';

@Component({
    selector: 'app-giay-chuyen-tuyen',
    templateUrl: './giay-chuyen-tuyen.component.html',
    styleUrls: ['./giay-chuyen-tuyen.component.scss']
})

export class GiayChuyenTuyenComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    nhomChucDanh = EnumNhomChucDanh;
    yeuCauTiepNhanId: number = null;
    validationErrors: any[] = [];
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    loadingPopup: any;
    kiemTraKetThucBenhAn: boolean = false;

    radioLyDoChuyenTuyen = [{ Value: 0, Text: 'Đủ điều kiện chuyển tuyến' }, { Value: 1, Text: 'Theo yêu cầu của người bệnh hoặc người đại diện hợp pháp của người bệnh' }];

    noiTruHoSoKhac: NoiTruHoSoKhacGiayChuyenTuyen = new NoiTruHoSoKhacGiayChuyenTuyen();
    thongTinGiayChuyenTuyen: ThongTinGiayChuyenTuyen = new ThongTinGiayChuyenTuyen();

    icDelete = icDelete;
    icClear = icClear;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();

    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id; 

        this.getThongTinGiayChuyenTuyen();
    }

    getThongTinGiayChuyenTuyen() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showLoadingPopup();  

            this.apiService.get(`DieuTriNoiTru/GetThongTinHoSoKhacGiayChuyenTuyen?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.noiTruHoSoKhac = res;
                this.noiTruHoSoKhac.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                this.returnId.emit(this.noiTruHoSoKhac.Id);

                if(this.noiTruHoSoKhac.ThongTinHoSo) {
                    this.thongTinGiayChuyenTuyen = JSON.parse(this.noiTruHoSoKhac.ThongTinHoSo);
                } else {
                    this.thongTinGiayChuyenTuyen = new ThongTinGiayChuyenTuyen();
                }

                this.getChanDoan();
                this.getHuongDieuTri();
                this.getPhuongPhapSuDungTrongDieuTri();
                this.getTinhTrangNguoiBenh();
                this.getKetQuaXNCLS();

                this.closeAllDialogs();
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                this.closeAllDialogs();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    getChanDoan() {
        if(!this.thongTinGiayChuyenTuyen.ChanDoan) {
            this.apiService.get(`DieuTriNoiTru/GetChanDoan?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.thongTinGiayChuyenTuyen.ChanDoan = res;
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }

    getPhuongPhapSuDungTrongDieuTri() {
        if(!this.thongTinGiayChuyenTuyen.PhuongPhapSuDungTrongDieuTri) {
            this.apiService.get(`DieuTriNoiTru/GetPhuongPhapSuDungTrongDieuTri?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.thongTinGiayChuyenTuyen.PhuongPhapSuDungTrongDieuTri = res;
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }

    getTinhTrangNguoiBenh() {
        if(!this.thongTinGiayChuyenTuyen.TinhTrangNguoiBenh) {
            this.apiService.get(`DieuTriNoiTru/GetTinhTrangNguoiBenh?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.thongTinGiayChuyenTuyen.TinhTrangNguoiBenh = res;
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }

    getKetQuaXNCLS() {
        if(!this.thongTinGiayChuyenTuyen.KetQuaXetNghiemCLS) {
            this.apiService.get(`DieuTriNoiTru/GetKetQuaXNCLS?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.thongTinGiayChuyenTuyen.KetQuaXetNghiemCLS = res;
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }

    getHuongDieuTri() {
        if(!this.thongTinGiayChuyenTuyen.HuongDieuTri) {
            this.apiService.get(`DieuTriNoiTru/GetHuongDieuTri?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
                this.thongTinGiayChuyenTuyen.HuongDieuTri = res;
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }

    in() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có muốn in giấy chuyển tuyến này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    //Lưu trước
                    this.validationErrors = [];

                    this.showSavingPopup();

                    this.mergeData();
                    this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinGiayChuyenTuyen);
        
                    this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacGiayChuyenTuyen`, this.noiTruHoSoKhac).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                        this.getThongTinGiayChuyenTuyen();
                        this.closeAllDialogs();

                        this.showLoadingPopup(); 
                        this.apiService.get<any>(`DieuTriNoiTru/InGiayChuyenTuyen?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
                            this.closeAllDialogs();
                            
                            this.dialog.open(GiayInChuyenTuyenComponent, {
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
        this.getThongTinGiayChuyenTuyen();
    }

    luuThongTinGiayChuyenTuyen() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"]) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.validationErrors = [];

                    this.showSavingPopup();

                    this.mergeData();
                    this.noiTruHoSoKhac.ThongTinHoSo = JSON.stringify(this.thongTinGiayChuyenTuyen);
        
                    this.apiService.post<any>(`DieuTriNoiTru/SuaThongTinHoSoKhacGiayChuyenTuyen`, this.noiTruHoSoKhac).subscribe(res => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                        this.getThongTinGiayChuyenTuyen();
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

    kiemTraKetThucNoiTruBenhAn(id: any) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
          this.apiService.get<any>("DieuTriNoiTru/KiemTraKetThucBenhAn/" + id)
            .subscribe((resultData) => {
              this.kiemTraKetThucBenhAn = resultData;
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    mergeData() {
        this.noiTruHoSoKhac.SoHoSo = this.thongTinGiayChuyenTuyen.SoHoSo;
        this.noiTruHoSoKhac.SoChuyenTuyenSo = this.thongTinGiayChuyenTuyen.SoChuyenTuyenSo;
        this.noiTruHoSoKhac.NguoiNhan = this.thongTinGiayChuyenTuyen.NguoiNhan;
        this.noiTruHoSoKhac.DauHieuLamSan = this.thongTinGiayChuyenTuyen.DauHieuLamSan;
        this.noiTruHoSoKhac.KetQuaXetNghiemCLS = this.thongTinGiayChuyenTuyen.KetQuaXetNghiemCLS;
        this.noiTruHoSoKhac.ChanDoan = this.thongTinGiayChuyenTuyen.ChanDoan;
        this.noiTruHoSoKhac.PhuongPhapSuDungTrongDieuTri = this.thongTinGiayChuyenTuyen.PhuongPhapSuDungTrongDieuTri;
        this.noiTruHoSoKhac.TinhTrangNguoiBenh = this.thongTinGiayChuyenTuyen.TinhTrangNguoiBenh;
        this.noiTruHoSoKhac.HuongDieuTri = this.thongTinGiayChuyenTuyen.HuongDieuTri;
        this.noiTruHoSoKhac.LyDoChuyenTuyen = this.thongTinGiayChuyenTuyen.LyDoChuyenTuyen;
        this.noiTruHoSoKhac.ChuyenTuyenHoi = this.thongTinGiayChuyenTuyen.ChuyenTuyenHoi;
        this.noiTruHoSoKhac.PhuongTienVanChuyen = this.thongTinGiayChuyenTuyen.PhuongTienVanChuyen;
        this.noiTruHoSoKhac.HoTenNguoiHoTong = this.thongTinGiayChuyenTuyen.HoTenNguoiHoTong;
        this.noiTruHoSoKhac.ChucDanhNguoiHoTong = this.thongTinGiayChuyenTuyen.ChucDanhNguoiHoTong;
        this.noiTruHoSoKhac.TrinhDoChuyenMonNguoiHoTong = this.thongTinGiayChuyenTuyen.TrinhDoChuyenMonNguoiHoTong;
        this.noiTruHoSoKhac.NgayThucHien = this.thongTinGiayChuyenTuyen.NgayThucHien;
        this.noiTruHoSoKhac.NguoiCoThamQuyenId = this.thongTinGiayChuyenTuyen.NguoiCoThamQuyenId;
        this.noiTruHoSoKhac.YBacSiKhamDieuTriId = this.thongTinGiayChuyenTuyen.YBacSiKhamDieuTriId;
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

    evtNguoiCoThamQuyenChanged(evt) {
        this.thongTinGiayChuyenTuyen.NguoiCoThamQuyenDisplay = evt != null ? evt.DisplayName : null;
    }

    evtYBacSiKhamDieuTriChanged(evt) {
        this.thongTinGiayChuyenTuyen.YBacSiKhamDieuTriDisplay = evt != null ? evt.DisplayName : null;
    }
}
