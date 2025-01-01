import { DateTime } from 'luxon';

export class BaoHiemYTe {
    constructor(
        public maKetQua: string=null,
        public ghiChu: string=null,
        public maThe: string=null,
        public hoTen: string=null,
        public ngaySinh: string=null,
        public gioiTinh: string=null,
        public diaChi: string=null,
        public maDKBD: string=null,
        public cqBHXH: string=null,
        public gtTheTu: string=null,
        public gtTheDen: string=null,
        public maKV: string=null,
        public ngayDu5Nam: string=null,
        public maSoBHXH: string=null,
        public maTheCu: string=null,
        public maTheMoi: string=null,
        public gtTheTuMoi: string=null,
        public gtTheDenMoi: string=null,
        public dsLichSuKCB2018: dsLichSuKCB2018[]=[],
        public dsLichSuKT2018: dsLichSuKT2018[]=[],
        public isConnectSuccessfully: boolean = true,
     ) {
    }
}
export class ThongTinBenhNhan {
    constructor(
        public MaThe: string=null,
        public TenBenhNhan: string=null,
        public NgaySinh: Date=null,
        public NgaySinhDisplay: string = null,
        public NamSinh: number = null,
        public MessageErrFromBHYT: string = null
     ) {
    }
}
export class dsLichSuKT2018 {
    constructor(
        public userKT: string=null,
        public thoiGianKT: string=null,
        public thongBao: string=null,
        public maLoi: string=null,

        public tenCSKCB: string = null,
        public maCSKCB: string = null,
        
        public thoiGianKTDisplay: string = null,
        public thoiGianKTDateTime: Date = null,
     ) {
    }
}
export class dsLichSuKCB2018 {
    constructor(
        public maHoSo: string=null,
        public maCSKCB: string=null,
        public ngayVao: string=null,
        public ngayRa: string=null,
        public tenBenh: string=null,
        public tinhTrang: string=null,
        public kqDieuTri: string=null,
        public lyDoVV: string=null,
        public TEMP1: string=null,
        public TEMP2: string=null,
        public TEMP3: string=null,
        public TEMP4: string=null,
        public TEMP5: string=null,
        public coSoKCB: string = null,
        public lyDoVVDisplay: string = null,
        public kqDieuTriDisplay: string = null,
        public tinhTrangDisplay: string = null,
        public ngayRaDisplay: string = null,
        public ngayVaoDisplay: string = null,

        public ngayVaoDateTime: Date = null,
        public ngayRaDateTime: Date = null,
     ) {
    }
}
export class Login {
    constructor(
        public userName: string=null,
        public pass: string=null
     ) {
    }
}
export class TenFile {
    constructor(
        public TenFile: string=null,
        public DuLieu: string=null
     ) {
    }
}
export class XMLThongTinBenhNhan {
    constructor(
        public MaLienKet : string=null,
        public MaBenhNhan : string=null,
        public  HoTen : string=null,
        public  NgaySinh : string=null,
        public  ThoiGian : Date= null,
        public  GioiTinh : number=null,
        public  GioiTinhText : string=null,
        public DiaChi : string=null,
        public  MaThe: string=null,
        public  MaCoSoKCBBanDau : string=null,
        public  GiaTriTheTu : string=null,
        public  GiaTriTheDen : string=null,
        public MienCungChiTra : string=null,
        public  TenBenh : string= null,
        public  MaBenh : string= null,
        public  MaBenhKhac : string= null,
        public  LyDoVaoVien : number= null,
        public  LyDoVaoVienText : string= null,
        public  MaNoiChuyen: string= null,
        public  MaTaiNan : number = null,
        public  MaTaiNanText : string= null,
        public  NgayVao : string= null,
        public NgayVaoTime:DateTime=null,
        public NgayRaTime:DateTime=null,
        public  NgayRa : string=null,
        public  SoNgayDieuTri : number =null,
        public  KetQuaDieuTri : number =null,
        public  KetQuaDieuTriText : string=null,
        public  TinhTrangRaVien : number =null,
        public  TinhTrangRaVienText : string=null,
        public NgayThanhToan : string=null,
        public NgayThanhToanTime:Date=null,
        // public  MucHuong : number=null,
        public  TienThuoc : number=null,
        public  TienVatTuYTe : number=null,
        public DataJson:string =null,
        public  TienTongChi : number=null,
        public  TienBenhNhanThanhToan : number=null,
        public TienBenhNhanCungChiTra:number =null,
        public  TienBaoHiemThanhToan : number=null,
        public  TienNguonKhac: number=null,
        public  TienNgoaiDanhSach : number=null,
        public  NamQuyetToan : number=null,
        public  ThangQuyetToan : number=null,
        public  MaLoaiKCB : number=null,
        public  MaLoaiKCBText : string=null,
        public  MaKhoa : string=null,
        public  MaCSKCB : string=null,
        public  MaKhuVuc : string=null,
        public  MaPhauThuatQuocTe : string=null,
        public  CanNang : number= null,
        public  IsDownLoad:boolean=false,
        public HoSoChiTietThuoc:HoSoChiTietThuoc[]=[],
        public HoSoChiTietDVKT:HoSoChiTietDVKT[]=[],
        public HoSoCanLamSang:HoSoCanLamSang[]=[],
        public HoSoChiTietDienBienBenh:HoSoChiTietDienBienBenh[]=[]
        
     ) {
    }
}
export class HoSoChiTietThuoc {
    constructor(
        public MaLienKet : string=null,
        public  MaThuoc : string=null,
        public  MaNhom : number= null,
        public  MaNhomText : string= null,
        public  TenThuoc : string=null,
        public  DonViTinh : string=null,
        public  HamLuong : string=null,
        public  DuongDung : string=null,
        public  LieuDung : string=null,
        public  SoDangKy : string=null,
        public  SoLuong : number= null,
        public  DonGia : number= null,
        public  TyLeThanhToan: number= null,
        public  ThanhTien : number= null,
        public  MaKhoa : string=null,
        public  MaBacSi : string=null,
        public  MaBenh : string=null,
        public  NgayYLenh : string=null,
        public  NgayYLenhTime : Date=null,
        public  ThongTinThau : string=null,
        public  PhamVi : string=null,
        public  MucHuong : number= null,
        public  TienBenhNhanTuTra : number= null,
        public  TienNguonKhac : number= null,
        public  TienBaoHiemTuTra : number= null,
        public  TienBenhNhanTuChiTra : number= null,
        public  TienNgoaiDanhSach : number= null,
        public  MaPhuongThucThanhToan : number= null,
        public  MaPhuongThucThanhToanText : string= null,
     ) {
    }
}
export class HoSoChiTietDVKT {
    constructor(
        public  MaDichVu :string = null,
        public  MaVatTu:string = null,
        public  GoiVatTuYTe :string = null,
        public  TenVatTu :string = null,
        public  ThongTinThau :string = null,
        public  PhamVi : number= null,
        public  MucThanhToanToiDa : number= null,
        public  MucHuong : number= null,
        public  TienNguonKhac : number= null,
        public TienBenhNhanThanhToan : number= null,
        public  TienBaoHiemThanhToan : number= null,
        public TienBenhNhanCungChiTra : number= null,
        public  TienNgoaiDanhSach : number= null,
        public  MaGiuong :string = null,
        public  MaNhom : number= null,
        public MaNhomText:string = null,
        public  TenDichVu :string = null,
        public  DonViTinh :string = null,
        public  SoLuong : number= null,
        public  DonGia : number= null,
        public  TyLeThanhToan : number= null,
        public  ThanhTien : number= null,
        public  MaKhoa :string = null,
        public  MaBacSi :string = null,
        public  MaBenh :string = null,
        public  NgayYLenh :string = null,
        public  NgayYLenhTime :Date = null,
        public  NgayKetQua :string = null,
        public  NgayKetQuaTime :Date = null,
        public MaPhuongThucThanhToan : number= null,
        public MaPhuongThucThanhToanText : string= null
     ) {
    }
}
export class HoSoCanLamSang {
    constructor(
        public MaLienKet : string=null,
        public  MaDichVu : string=null,
        public  MaChiSo : string=null,
        public  TenChiSo : string=null,
        public  GiaTri : string=null,
        public  MaMayXetNghiem : string=null,
        public  MaMay : string=null,
        public  MoTa: string=null,
        public  KetLuan : string=null,
        public  NgayKQ : string=null,
        public  NgayKQTime : Date=null
     ) {
    }
}
export class HoSoChiTietDienBienBenh {
    constructor(
        public  DienBien : string=null,
        public  HoiChuan : string=null,
        public  PhauThuat : string=null,
        public  NgayYLenh : string=null,
        public  NgayYLenhTime : Date=null,
     ) {
    }
}