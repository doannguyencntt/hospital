import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietSuDungGiuongTheoNgay } from '../../../dieu-tri-noi-tru.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { LoaiChiPhiGiuongBenh } from '../phong-giuong-bs-dieu-tri.model';
import { DoiTuongSuDung } from '../../../dieu-tri-noi-tru.model';

import icAdd from '@iconify/icons-ic/twotone-add';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';

declare var $: any;

@Component({
    selector: 'app-chi-tiet-su-dung-popup',
    templateUrl: './chi-tiet-su-dung-popup.component.html',
    styleUrls: ['./chi-tiet-su-dung-popup.component.scss']
})

export class ChiTietSuDungPopupComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    yeuCauTiepNhanId: number = 0;
    validationErrors: any[] = [];
    loadingPopup: any;
    queryInfo: LookupQueryInfo = new LookupQueryInfo();
    dichVuGiuongQueryInfo: LookupQueryInfo = new LookupQueryInfo();
    loaiChiPhiGiuongBenh = LoaiChiPhiGiuongBenh;
    enumDoiTuongSuDung = DoiTuongSuDung;

    step: number = 0.5;
    format: string = 'n1';

    dataChiTietSuDung: ChiTietSuDungGiuongTheoNgay = new ChiTietSuDungGiuongTheoNgay();

    tongTienBaoHiem: number = 0;
    tongTienDichVu: number = 0;

    icClose = icClose;
    icAdd = icAdd;
    icDelete = icDelete;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog,
        private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.data.yeuCauTiepNhanId;

        this.getDanhSachChiTietSuDungGiuongTheoNgay();
    }

    getDanhSachChiTietSuDungGiuongTheoNgay() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) { //check là View hoặc Update
            this.apiService.get<any>(`DieuTriNoiTru/GetDanhSachChiTietSuDungGiuongTheoNgayForGrid?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
                this.dataChiTietSuDung = res;
                console.log("data goi : ", this.dataChiTietSuDung)
                this.getTongTien();
            }, (err: ApiError) => {
                err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    close() {
        this.dialog.closeAll();
    }

    addDichVu(item: any) {
        var obj = CommonService.findObjectByKey(this.dataChiTietSuDung.SuDungGiuongTheoNgays, "NgayPhatSinh", item.NgayPhatSinh);
        if (obj != null) {
            obj.ChiTietGiuongBenhVienChiPhis.push(
                {
                    Id: 0,
                    "KhoaChiDinhId": null, "KhoaChiDinhDisplay": null,
                    "GiuongChuyenDenId": null, "GiuongChuyenDenDisplay": null,
                    "LoaiGiuong": null, "LoaiGiuongDisplay": null,
                    "BaoPhong": false, "LoaiChiPhiGiuongBenh": null,
                    "DichVuGiuongId": null, "DichVuGiuongDisplay": null,
                    "DoiTuong": 1, "DoiTuongDisplay": "Người bệnh",
                    "SoLuong": 1, "SoLuongGhep": 1, "DonGia": null, "ThanhTien": null,
                    "isCreated": true, IdTemp: CommonService.makeRandom(6)
                }
            );
        }
    }

    removeDichVu(item: any, item1: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == 'Yes') {
                var obj = CommonService.findObjectByKey(this.dataChiTietSuDung.SuDungGiuongTheoNgays, "NgayPhatSinh", item.NgayPhatSinh);
                if (obj != null) {
                    obj.ChiTietGiuongBenhVienChiPhis = $.grep(obj.ChiTietGiuongBenhVienChiPhis,
                        function (o, i) { return (item1.Id != 0 && o.Id === item1.Id) || (item1.Id == 0 && o.IdTemp === item1.IdTemp); },
                        true);
                }
            }
        });
    }

    getTongTien() {
        let tongTienDichVu = 0;
        let tongTienBaoHiem = 0;

        this.dataChiTietSuDung.SuDungGiuongTheoNgays.forEach(item => {
            item.ChiTietGiuongBenhVienChiPhis.forEach(item1 => {
                tongTienDichVu += item1.ThanhTien;

                if (item1.ChiTietGiuongBenhVienChiPhiBHYTs && item1.ChiTietGiuongBenhVienChiPhiBHYTs.length > 0) {
                    item1.ChiTietGiuongBenhVienChiPhiBHYTs.forEach(item2 => {
                        tongTienBaoHiem += item2.ThanhTien;
                    });
                }
            });
        });

        this.tongTienDichVu = tongTienDichVu;
        this.tongTienBaoHiem = tongTienBaoHiem;
    }

    evtDichVuGiuongChanged(evt, item: any, item1: any) {
        // console.log("giuong change: ", evt)
        var obj = CommonService.findObjectByKey(this.dataChiTietSuDung.SuDungGiuongTheoNgays, "NgayPhatSinh", item.NgayPhatSinh);

        if (obj != null) {
            var obj1 = obj.ChiTietGiuongBenhVienChiPhis.find(p => p == item1);

            if (obj1) {
                if (evt) {
                    this.getLoaiGiuong(evt.LoaiGiuong, obj1);
                    obj1.BaoPhong = evt.BaoPhong;

                    let thongTinGetGiaDichVuGiuong = {
                        YeuCauTiepNhanId: this.yeuCauTiepNhanId,
                        DichVuGiuongId: evt.KeyId,
                        NgayPhatSinh: item.NgayPhatSinh,
                        BaoPhong: evt.BaoPhong
                    }

                    this.apiService.post<any>(`DieuTriNoiTru/GetDonGiaDichVuGiuong`, thongTinGetGiaDichVuGiuong).subscribe((res) => {
                        if (res) {
                            item1.DonGia = res.DonGia;
                            item1.ThanhTien = res.ThanhTien;
                            item1.DonGiaBHYT = res.DonGiaBHYT;
                            item1.ThanhTienBHYT = res.ThanhTienBHYT;
                            item1.IsDataDichVuGiuongChange = true;
                        }
                    }, (err: ApiError) => {
                        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        return null;
                    });
                } else {
                    obj1.LoaiGiuong = null;
                    obj1.LoaiGiuongDisplay = null;
                    obj1.BaoPhong = false;
                }
            }
        }
    }

    getLoaiGiuong(loaiGiuong, obj: any) {
        this.apiService.get<any>(`DieuTriNoiTru/GetLoaiGiuong?loaiGiuong=${loaiGiuong}`).subscribe((res) => {
            if (res) {
                obj.LoaiGiuong = res.KeyId;
                obj.LoaiGiuongDisplay = res.DisplayName;
            }
        }, (err: ApiError) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            return null;
        });
    }

    huyChiTietSuDungGiuongTheoNgay() {
        this.getDanhSachChiTietSuDungGiuongTheoNgay();
    }

    luuChiTietSuDungGiuongTheoNgay() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "400px",
                data: {
                    Title: "Xác nhận",
                    Message: CommonService.format(SystemMessage.MessConfirm, ["lưu"])
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.validationErrors = [];
                    this.showSavingPopup();

                    this.apiService.post<any>(`DieuTriNoiTru/SuaDanhSachChiTietSuDungGiuongTheoNgay?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`, this.dataChiTietSuDung).subscribe(() => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                        this.getDanhSachChiTietSuDungGiuongTheoNgay();
                        this.closeAllDialogs();
                    }, (err: ApiError) => {
                        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        this.closeAllDialogs();
                    });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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

    getQueryInfo(item) {
        this.queryInfo.ParameterDependencies = JSON.stringify({ YeuCauTiepNhanId: this.yeuCauTiepNhanId, NgayPhatSinh: item.NgayPhatSinh });

        return this.queryInfo;
    }

    mergeGiuongBenhVienChiPhis(item) {
        let arr = [];
        let arrBHYT = [];
        let arrMoi = [];

        let filteredArr: any = item.GiuongBenhVienChiPhis.filter(p => p.LoaiChiPhiGiuongBenh == this.loaiChiPhiGiuongBenh.ChiPhiGiuongBenhVien);
        let filteredArrBHYT: any = item.GiuongBenhVienChiPhis.filter(p => p.LoaiChiPhiGiuongBenh == this.loaiChiPhiGiuongBenh.ChiPhiGiuongBHYT);
        let filteredArrMoi: any = item.GiuongBenhVienChiPhis.filter(p => p.LoaiChiPhiGiuongBenh == null);

        if (filteredArr && filteredArr.length > 0) {
            arr = [...filteredArr[0].ChiTietGiuongBenhVienChiPhis];
        }

        if (filteredArrBHYT && filteredArrBHYT.length > 0) {
            arrBHYT = [...filteredArrBHYT[0].ChiTietGiuongBenhVienChiPhis];

            arr.forEach(giuong => {
                arrBHYT.forEach(giuongBHYT => {
                    if (giuong.Id == giuongBHYT.ThanhToanTheoYeuCauDichVuGiuongBenhVienChiPhiBenhVienId) {
                        giuong.DonGiaBHYT = giuongBHYT.DonGia;
                        giuong.ThanhTienBHYT = giuongBHYT.ThanhTien;
                    }
                });
            });
        }

        if (filteredArrMoi && filteredArrMoi.length > 0) {
            arrMoi = [...filteredArrMoi[0].ChiTietGiuongBenhVienChiPhis];
        }

        return [...arr, ...arrMoi];
    }

    evtSoLuongChanged(evt, item) {
        let roundingNumber = Math.ceil(evt * 2) / 2;

        if (roundingNumber !== evt) {
            item.SoLuong = roundingNumber
        }
    }

    getDonGiaBHYT(item) {
        if (item.IsDataDichVuGiuongChange) {
            return item.DonGiaBHYT;
        } else {
            if (!item.ChiTietGiuongBenhVienChiPhiBHYTs) {
                return null;
            }

            let total = 0;

            item.ChiTietGiuongBenhVienChiPhiBHYTs.forEach(item => {
                total += item.DonGia;
            });

            return total;
        }
    }

    getThanhTienBHYT(item) {
        if (item.IsDataDichVuGiuongChange) {
            return item.ThanhTienBHYT;
        } else {
            if (!item.ChiTietGiuongBenhVienChiPhiBHYTs) {
                return null;
            }


            let total = 0;

            item.ChiTietGiuongBenhVienChiPhiBHYTs.forEach(item => {
                total += item.ThanhTien;
            });

            return total;
        }
    }

    getDichVuGiuongQueryInfo(ngayPhatSinh) {
        this.dichVuGiuongQueryInfo.ParameterDependencies = JSON.stringify({
            ThoiGianNhan: ngayPhatSinh
        });

        return this.dichVuGiuongQueryInfo;
    }

    giuongChange(evt, item1: any) {
        // console.log("evt: ", evt)
        // console.log("item1: ", item1)
        if (evt != undefined && evt != null) {
            this.apiService.post<any>("DieuTriNoiTru/KiemTraDichVuCoTrongGoi?benhNhanId=" + this.data.benhNhanId + "&dichVuGiuongBenhVienId=" + evt).subscribe(
                resultData => {
                    item1.CoDichVuNayTrongGoi = resultData;
                    item1.LaDichVuTrongGoi = resultData;
                },
                (err: ApiError) => {
                });
        } else {
            item1.CoDichVuNayTrongGoi = false;
            item1.LaDichVuTrongGoi = false;
        }
    }
}
