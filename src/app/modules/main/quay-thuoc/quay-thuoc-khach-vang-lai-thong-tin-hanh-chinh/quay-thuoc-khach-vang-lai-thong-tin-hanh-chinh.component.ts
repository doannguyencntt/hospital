import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KhachVangLai, ServiceId,BenhNhanThongTin,TinhHuyenTemplateVo } from '../quay-thuoc.model';
import { ApiService } from 'src/app/core/services/api.service';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
@Component({
    selector: 'app-quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh',
    templateUrl: './quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.html',
    styleUrls: ['./quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component.scss']
})

export class QuayThuocKhachVangLaiThongTinHanhChinhComponent implements OnInit {
    thongTinBenhNhan = {} as KhachVangLai;
    @Input() validationErrors: any;
    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
    @Input() donThuocId: ServiceId;
    @Input() MaBN: number;
    @Input() TenBenhNhan: string;
    @Input() SDT: string;
    @Input() ThongTinBenhNhanDaThuTienData : any;
    data = {} as BenhNhanThongTin;
    constructor(private apiService: ApiService) { }

    ngOnInit() {
        let maBN = this.donThuocId.maBN;
        if(this.MaBN != null)
        {
            maBN = this.MaBN;
        }
        else{
            this.data = null;

        }
        if (maBN != null) {
            this.GetThongTinBenhNhan(maBN);
        }
        else{
            this.data = null;

        }
        if(this.data == null)
        {
            if(this.TenBenhNhan != null || this.SDT != null)
            {
                this.thongTinBenhNhan.HoTen = this.TenBenhNhan;
            }
            if( this.SDT != null)
            {
                this.thongTinBenhNhan.SoDienThoai = this.SDT;
            }
        }
        if(this.ThongTinBenhNhanDaThuTienData != undefined){
            this.GetThongTinBenhNhanTN(this.ThongTinBenhNhanDaThuTienData.YeuCauTiepNhanId);
        }
    }
    ngOnChanges(event: any){
        this.ngOnInit();
    }
    GetThongTinBenhNhan(maBN: number) {
        this.apiService.post<any>("QuayThuoc/GetThongTinBenhNhan1?maBN=" + maBN).subscribe(
            resultData => {
                this.data = resultData;
                console.log(resultData);
            },
            () => {
                console.log("Loi roi")
            });
    }
    GetThongTinBenhNhanTN(maTN: number) {
        this.apiService.post<any>("QuayThuoc/GetThongTinBenhNhanTN?maTN=" + maTN).subscribe(
            resultData => {
                this.data = resultData;
                console.log(resultData);
            },
            () => {
                console.log("Loi roi")
            });
    }
    TinhThanhPhoChange(tinhThanh: any) {
        this.thongTinBenhNhan.TinhThanhId = tinhThanh;
        this.valueChange.emit(this.thongTinBenhNhan);
        if(this.thongTinBenhNhan.TinhThanhId == null)
        {
            this.thongTinBenhNhan.QuanHuyenId =null;
            this.thongTinBenhNhan.TinhThanhId = null;
            this.thongTinBenhNhan.PhuongXaId = null;
            this.thongTinBenhNhan.TenHuyenDisplay = null;
            this.thongTinBenhNhan.TenTinhDisplay = null;
            this.thongTinBenhNhan.TenPhuongDisplay = null;
        }
    }

    QuanHuyenChange(quanHuyen: any) {
        this.thongTinBenhNhan.QuanHuyenId = quanHuyen;
        if(this.thongTinBenhNhan.QuanHuyenId == null)
        {
            this.thongTinBenhNhan.QuanHuyenId =null;
            this.thongTinBenhNhan.TinhThanhId = null;
            this.thongTinBenhNhan.PhuongXaId = null;
            this.thongTinBenhNhan.TenHuyenDisplay = null;
            this.thongTinBenhNhan.TenTinhDisplay = null;
            this.thongTinBenhNhan.TenPhuongDisplay = null;
        }
        this.valueChange.emit(this.thongTinBenhNhan);
    }

    PhuongXaChange(phuongXa: any) {
        this.thongTinBenhNhan.PhuongXaId = phuongXa;
        if(this.thongTinBenhNhan.PhuongXaId != null)
        {
            this.apiService.post<TinhHuyenTemplateVo>("QuayThuoc/GetTinhHuyen?phuongXaId=" + phuongXa).subscribe(
                resultData => {
                    this.thongTinBenhNhan.QuanHuyenId = resultData[0].HuyenId;
                    this.thongTinBenhNhan.TinhThanhId = resultData[0].TinhId;
                    this.thongTinBenhNhan.TenHuyenDisplay = resultData[0].TenHuyen;
                    this.thongTinBenhNhan.TenTinhDisplay = resultData[0].TenTinh;
                    this.thongTinBenhNhan.PhuongXaId = phuongXa
                },
                () => {
                    console.log("Loi roi")
                });
        }
        else{
                    this.thongTinBenhNhan.QuanHuyenId =0;
                    this.thongTinBenhNhan.TinhThanhId = 0;
                    this.thongTinBenhNhan.TenHuyenDisplay = null;
                    this.thongTinBenhNhan.TenTinhDisplay = null;
        }
        this.valueChange.emit(this.thongTinBenhNhan);
    }

    onSaveTen() {
        this.valueChange.emit(this.thongTinBenhNhan);
    }

    onSaveSDT(sdt: any) {
        this.thongTinBenhNhan.SoDienThoai = sdt;
        this.valueChange.emit(this.thongTinBenhNhan);
    }

    onSaveGioiTinh(gioiTinh: any) {
        this.thongTinBenhNhan.GioiTinh = gioiTinh;
        this.valueChange.emit(this.thongTinBenhNhan);
    }

    onSaveNamSinh(namSinh: any) {
        this.thongTinBenhNhan.NamSinh = namSinh;
        this.valueChange.emit(this.thongTinBenhNhan);
    }

    onSaveDiaChi(diaChi: any) {
        this.thongTinBenhNhan.DiaChi = diaChi;
        this.valueChange.emit(this.thongTinBenhNhan);
    }
}
