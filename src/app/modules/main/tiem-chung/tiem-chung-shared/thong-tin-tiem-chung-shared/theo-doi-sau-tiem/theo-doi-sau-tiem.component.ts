import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { LoaiPhanUngSauTiem, NoiXuTriTheoDoiTiemVacxin, TinhTrangHienTaiTheoDoiTiemVacxin } from 'src/app/shared/enum/tiem-vacxin.enum';
import { YeuCauDichVuKyThuat } from '../../../tiem-chung.model';
import { TiemChungTheoDoiSauTiem, TiemChungThongTinPhanUngSauTiem } from './theo-doi-sau-tiem.model';

@Component({
    selector: 'app-theo-doi-sau-tiem',
    templateUrl: './theo-doi-sau-tiem.component.html',
    styleUrls: ['./theo-doi-sau-tiem.component.scss']
})

export class TheoDoiSauTiemComponent implements OnInit {
    validationErrors: any;
    documentType: DocumentType.TiemChungKhamSangLoc;
    loadingDataPopup: any;

    loaiPhanUngSauTiem = LoaiPhanUngSauTiem;
    noiXuTri = NoiXuTriTheoDoiTiemVacxin;
    tinhTrangHienTai = TinhTrangHienTaiTheoDoiTiemVacxin;

    ngayTuVongTemp: Date;
    isNoiXuTriKhacDisabled: boolean = true;
    isThongTinPhanUngSauTiemExisted: boolean = false;
    
    xuLyPhanSungSauTiemRadioItems: any[] = [{ Value: true, Text: 'Có' }, { Value: false, Text: 'Không' }]

    tiemChungTheoDoiSauTiem: TiemChungTheoDoiSauTiem = new TiemChungTheoDoiSauTiem();
    tiemChungThongTinPhanUngSauTiem: TiemChungThongTinPhanUngSauTiem = new TiemChungThongTinPhanUngSauTiem();
    
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() isPopupLichSuTiemChung: boolean = false;
    @Input() isKhongTiemChung: boolean = false;

    constructor(private dialog: MatDialog, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.tiemChungTheoDoiSauTiem = new TiemChungTheoDoiSauTiem(
                this.thongTinBenhNhan.KhamSangLocTiemChung.TiemChungTheoDoiSauTiem.Id,
                this.thongTinBenhNhan.YeuCauTiepNhanId,
                this.thongTinBenhNhan.KhamSangLocTiemChung.TiemChungTheoDoiSauTiem.NhanVienTheoDoiSauTiemId,
                this.thongTinBenhNhan.KhamSangLocTiemChung.TiemChungTheoDoiSauTiem.NhanVienTheoDoiSauTiemDisplay,
                this.thongTinBenhNhan.KhamSangLocTiemChung.TiemChungTheoDoiSauTiem.ThoiDiemTheoDoiSauTiem,
                this.thongTinBenhNhan.KhamSangLocTiemChung.TiemChungTheoDoiSauTiem.GhiChuTheoDoiSauTiem,
                this.thongTinBenhNhan.KhamSangLocTiemChung.TiemChungTheoDoiSauTiem.LoaiPhanUngSauTiem,
                this.thongTinBenhNhan.KhamSangLocTiemChung.TiemChungTheoDoiSauTiem.LoaiPhanUngSauTiemDisplay,
                this.thongTinBenhNhan.KhamSangLocTiemChung.TiemChungTheoDoiSauTiem.ThongTinPhanUngSauTiem,
                this.thongTinBenhNhan.KhamSangLocTiemChung.TiemChungTheoDoiSauTiem.TiemChungThongTinPhanUngSauTiem
            );

            if(this.tiemChungTheoDoiSauTiem.TiemChungThongTinPhanUngSauTiem) {
                this.tiemChungThongTinPhanUngSauTiem = this.tiemChungTheoDoiSauTiem.TiemChungThongTinPhanUngSauTiem;
                this.isThongTinPhanUngSauTiemExisted = true;
            }
        }
    }

    luuTheoDoiSauTiem() {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);

        this.validationErrors = null;
        this.xuLyClearThongTin();
        this.tiemChungTheoDoiSauTiem.TiemChungThongTinPhanUngSauTiem = this.tiemChungThongTinPhanUngSauTiem;

        this.apiService.post<any>('TiemChung/LuuThongTinTheoDoi', this.tiemChungTheoDoiSauTiem).subscribe(res => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [`Lưu thông tin theo dõi`]));
            this.closePopupLoadingData();
        }, (err) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.closePopupLoadingData();
        });
    }

    xuLyClearThongTin() {
        switch(this.tiemChungTheoDoiSauTiem.LoaiPhanUngSauTiem) {
            case this.loaiPhanUngSauTiem.KhongCoPhanUng:
                this.clearThongTinKhongCoPhanUng();
                break;
            case this.loaiPhanUngSauTiem.PhanUngThongThuong:
                this.clearThongTinPhanUngThongThuong();
                break;
            case this.loaiPhanUngSauTiem.TaiBienNang:
                this.clearThongTinPhanUngTaiBienNang();
                break;
            case this.loaiPhanUngSauTiem.PhanUngKhac:
                this.clearThongTinPhanUngKhac();
                break;
        }
    }

    clearThongTinKhongCoPhanUng() {
        this.tiemChungThongTinPhanUngSauTiem = new TiemChungThongTinPhanUngSauTiem();
    }

    clearThongTinPhanUngThongThuong() {
        let tempThongTinPhanUngSauTiem = new TiemChungThongTinPhanUngSauTiem();

        tempThongTinPhanUngSauTiem.SungDauTaiChoTiem = this.tiemChungThongTinPhanUngSauTiem.SungDauTaiChoTiem;
        tempThongTinPhanUngSauTiem.SotLonHonBang39DoPUTT = this.tiemChungThongTinPhanUngSauTiem.SotLonHonBang39DoPUTT;
        tempThongTinPhanUngSauTiem.TrieuChungKhacPUTT = this.tiemChungThongTinPhanUngSauTiem.TrieuChungKhacPUTT;
        tempThongTinPhanUngSauTiem.MoTaPhanUngPUTT = this.tiemChungThongTinPhanUngSauTiem.TrieuChungKhacPUTT ? this.tiemChungThongTinPhanUngSauTiem.MoTaPhanUngPUTT : null;

        this.tiemChungThongTinPhanUngSauTiem = tempThongTinPhanUngSauTiem;
        // if(!this.tiemChungThongTinPhanUngSauTiem.TrieuChungKhac) {
        //     this.tiemChungThongTinPhanUngSauTiem.MoTaPhanUng = null;
        // }
    }

    clearThongTinPhanUngTaiBienNang() {
        let tempThongTinPhanUngSauTiem = new TiemChungThongTinPhanUngSauTiem();

        tempThongTinPhanUngSauTiem.SotLonHonBang39DoTBN = this.tiemChungThongTinPhanUngSauTiem.SotLonHonBang39DoTBN;
        tempThongTinPhanUngSauTiem.SocTrongVong72Gio = this.tiemChungThongTinPhanUngSauTiem.SocTrongVong72Gio;
        tempThongTinPhanUngSauTiem.BenhNaoTrongVong7Ngay = this.tiemChungThongTinPhanUngSauTiem.BenhNaoTrongVong7Ngay;
        tempThongTinPhanUngSauTiem.ApXeTaiChoTiem = this.tiemChungThongTinPhanUngSauTiem.ApXeTaiChoTiem;
        tempThongTinPhanUngSauTiem.NhungConCoGiatTrong3Ngay = this.tiemChungThongTinPhanUngSauTiem.NhungConCoGiatTrong3Ngay;
        tempThongTinPhanUngSauTiem.TrieuChungKhacTBN = this.tiemChungThongTinPhanUngSauTiem.TrieuChungKhacTBN;
        tempThongTinPhanUngSauTiem.MoTaPhanUngTBN = this.tiemChungThongTinPhanUngSauTiem.TrieuChungKhacTBN ? this.tiemChungThongTinPhanUngSauTiem.MoTaPhanUngTBN : null;
        tempThongTinPhanUngSauTiem.TienSuBenhTat = this.tiemChungThongTinPhanUngSauTiem.TienSuBenhTat;
        tempThongTinPhanUngSauTiem.XuLyPhanUngSauTiem = this.tiemChungThongTinPhanUngSauTiem.XuLyPhanUngSauTiem;
        tempThongTinPhanUngSauTiem.NoiXuTri = this.tiemChungThongTinPhanUngSauTiem.XuLyPhanUngSauTiem ? this.tiemChungThongTinPhanUngSauTiem.NoiXuTri : null;
        tempThongTinPhanUngSauTiem.NoiXuTriDisplay = this.tiemChungThongTinPhanUngSauTiem.XuLyPhanUngSauTiem ? this.tiemChungThongTinPhanUngSauTiem.NoiXuTriDisplay : null;
        tempThongTinPhanUngSauTiem.NoiXuTriKhac = tempThongTinPhanUngSauTiem.NoiXuTri && tempThongTinPhanUngSauTiem.NoiXuTri.some(p => p == this.noiXuTri.Khac) ? this.tiemChungThongTinPhanUngSauTiem.NoiXuTriKhac : null;
        tempThongTinPhanUngSauTiem.NguoiXuTriId = this.tiemChungThongTinPhanUngSauTiem.XuLyPhanUngSauTiem ? this.tiemChungThongTinPhanUngSauTiem.NguoiXuTriId : null;
        tempThongTinPhanUngSauTiem.NguoiXuTriDisplay = this.tiemChungThongTinPhanUngSauTiem.XuLyPhanUngSauTiem ? this.tiemChungThongTinPhanUngSauTiem.NguoiXuTriDisplay : null;
        tempThongTinPhanUngSauTiem.TinhTrangHienTai = this.tiemChungThongTinPhanUngSauTiem.TinhTrangHienTai;
        tempThongTinPhanUngSauTiem.TinhTrangHienTaiDisplay = this.tiemChungThongTinPhanUngSauTiem.TinhTrangHienTaiDisplay;
        tempThongTinPhanUngSauTiem.MoTaTinhTrangHienTai = this.tiemChungThongTinPhanUngSauTiem.TinhTrangHienTai ? this.tiemChungThongTinPhanUngSauTiem.MoTaTinhTrangHienTai : null;
        tempThongTinPhanUngSauTiem.NgayTuVong = this.tiemChungThongTinPhanUngSauTiem.TinhTrangHienTai && this.tiemChungThongTinPhanUngSauTiem.TinhTrangHienTai == this.tinhTrangHienTai.TuVong ? this.tiemChungThongTinPhanUngSauTiem.NgayTuVong : null;
        tempThongTinPhanUngSauTiem.NguoiBaoCaoId = this.tiemChungThongTinPhanUngSauTiem.NguoiBaoCaoId;
        tempThongTinPhanUngSauTiem.NguoiBaoCaoDisplay = this.tiemChungThongTinPhanUngSauTiem.NguoiBaoCaoDisplay;

        this.tiemChungThongTinPhanUngSauTiem = tempThongTinPhanUngSauTiem;

        // this.tiemChungThongTinPhanUngSauTiem = tempThongTinPhanUngSauTiem;

        // if(!this.tiemChungThongTinPhanUngSauTiem.TrieuChungKhac) {
        //     this.tiemChungThongTinPhanUngSauTiem.MoTaPhanUng = null;
        // }

        // if(!this.tiemChungThongTinPhanUngSauTiem.XuLyPhanUngSauTiem) {
        //     this.tiemChungThongTinPhanUngSauTiem.NoiXuTri = null;
        //     this.tiemChungThongTinPhanUngSauTiem.NoiXuTriDisplay = null;
        //     this.tiemChungThongTinPhanUngSauTiem.NoiXuTriKhac = null;
        //     this.tiemChungThongTinPhanUngSauTiem.NguoiXuTriId = null;
        //     this.tiemChungThongTinPhanUngSauTiem.NguoiXuTriDisplay = null;
        // } else {
        //     if(!this.tiemChungThongTinPhanUngSauTiem.NoiXuTri || this.tiemChungThongTinPhanUngSauTiem.NoiXuTri.every(p => p != this.noiXuTri.Khac)) {
        //         this.tiemChungThongTinPhanUngSauTiem.NoiXuTriKhac = null;
        //     }
        // }

        // if(this.tiemChungThongTinPhanUngSauTiem.TinhTrangHienTai != this.tinhTrangHienTai.TuVong) {
        //     this.tiemChungThongTinPhanUngSauTiem.NgayTuVong = null;
        // }
    }

    clearThongTinPhanUngKhac() {
        let tempMoTaPhanUng = this.tiemChungThongTinPhanUngSauTiem.MoTaPhanUngPUK;

        this.tiemChungThongTinPhanUngSauTiem = new TiemChungThongTinPhanUngSauTiem();
        this.tiemChungThongTinPhanUngSauTiem.MoTaPhanUngPUK = tempMoTaPhanUng;
    }

    clearThongTinTheoDoi() {
        if(!this.isThongTinPhanUngSauTiemExisted) {
            this.tiemChungThongTinPhanUngSauTiem = new TiemChungThongTinPhanUngSauTiem();
        }
    }

    evtTrieuChungKhacChanged(evt) {
        if(!evt) {
            switch(this.tiemChungTheoDoiSauTiem.LoaiPhanUngSauTiem) {
                case this.loaiPhanUngSauTiem.PhanUngThongThuong:
                    this.tiemChungThongTinPhanUngSauTiem.MoTaPhanUngPUTT = null;
                    break;
                case this.loaiPhanUngSauTiem.TaiBienNang:
                    this.tiemChungThongTinPhanUngSauTiem.MoTaPhanUngTBN = null;
                    break;
                case this.loaiPhanUngSauTiem.PhanUngKhac:
                    this.tiemChungThongTinPhanUngSauTiem.MoTaPhanUngPUK = null;
                    break;
            }            
        }
    }

    evtXuLyPhanUngSauTiem(evt) {
        if(!evt) {
            this.tiemChungThongTinPhanUngSauTiem.NoiXuTri = [];
            this.tiemChungThongTinPhanUngSauTiem.NoiXuTriKhac = null;
            this.tiemChungThongTinPhanUngSauTiem.NguoiXuTriId = null;
            this.tiemChungThongTinPhanUngSauTiem.NguoiXuTriDisplay = null;
        }
    }

    evtNoiXuTriChanged(evt) {
        if(evt && evt.some(p => p == this.noiXuTri.Khac)) {
            this.isNoiXuTriKhacDisabled = false;
        } else {
            this.isNoiXuTriKhacDisabled = true;
            this.tiemChungThongTinPhanUngSauTiem.NoiXuTriKhac = null;
        }
    }

    evtNguoiXuTriChanged(evt) {
        this.tiemChungThongTinPhanUngSauTiem.NguoiXuTriDisplay = evt ? evt.DisplayName : null;
    }

    evtTinhTrangHienTaiChanged(evt) {
        this.tiemChungThongTinPhanUngSauTiem.TinhTrangHienTaiDisplay = evt ? evt.DisplayName : null;
    }

    evtNguoiBaoCaoChanged(evt) {
        this.tiemChungThongTinPhanUngSauTiem.NguoiBaoCaoDisplay = evt ? evt.DisplayName : null;
    }

    // convertToUTC() {
    //     if(this.tiemChungThongTinPhanUngSauTiem.NgayTuVong) {
    //         this.ngayTuVongTemp = new Date(this.tiemChungThongTinPhanUngSauTiem.NgayTuVong); 
    //         this.tiemChungThongTinPhanUngSauTiem.NgayTuVong = new Date(Date.UTC(this.ngayTuVongTemp.getFullYear(), this.ngayTuVongTemp.getMonth(), this.ngayTuVongTemp.getDate(), this.ngayTuVongTemp.getHours(), this.ngayTuVongTemp.getMinutes()));
    //     }
    // }
    
    // revertToDate() {
    //     if(this.tiemChungThongTinPhanUngSauTiem.NgayTuVong) {
    //         this.tiemChungThongTinPhanUngSauTiem.NgayTuVong = new Date(this.ngayTuVongTemp.getFullYear(), this.ngayTuVongTemp.getMonth(), this.ngayTuVongTemp.getDate(), this.ngayTuVongTemp.getHours(), this.ngayTuVongTemp.getMinutes());
    //     }
    // }

    showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
        let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
        switch (typeLoading) {
            case EnumTypeLoadingData.View:
                mess = "Đang tải dữ liệu..."; break;
            case EnumTypeLoadingData.Update:
                mess = "Đang lưu dữ liệu..."; break;
            case EnumTypeLoadingData.Delete:
                mess = "Đang xóa dữ liệu..."; break;
            case EnumTypeLoadingData.Cancel:
                mess = "Đang hủy dữ liệu..."; break;
            default: mess = "Đang tải dữ liệu...";
        }

        this.loadingDataPopup = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: mess }
        });
    }

    closePopupLoadingData() {
        if (this.loadingDataPopup) {
            this.loadingDataPopup.close();
        }
    }
}