export interface HoSoCuaToi {
    HoTen: string;
    NgaySinh: Date;
    GioiTinh: number;
    SoCMT: string;
    DiaChi: string;
    QuyenHan: string;
    TextTenQuyenHan: string;
    TextTenHocHamHocVi: string;
    TextTenChucDanh: string;
    TextTenVanBangChuyenMon: string;
    TextTenPhamViHanhNghe: string;
    MaChungChiHanhNghe: string;
    NoiCapChungChiHanhNghe: string;
    NgayCapChungChiHanhNghe: Date;
    NgayKyHopDong: Date;
    NgayHetHopDong: Date;
    GhiChu: string;
    Avatar: any;
    HocHamHocViId: number;
    PhamViHanhNgheId: number;
    ChucDanhId: number;
    VanBangChuyenMonId: number;
    SoDienThoai: string;
    Email: string;
    KhoaPhongIds: number[];
    LstRole: number[];
    PhongBenhVienIds: number[];
    KhoaPhongNhanViens: KhoaPhongNhanViens;
    Password: string;
    PasswordConfirm: string;
    ChucVuIds: number[];
    HoSoNhanVienFileDinhKems: FileDinhKemModel[] ;
}
export class KhoaPhongNhanViens {
    constructor(
        public KhoaPhongId: number,
        public NhanVienId: number
    ) { }
}

export class ThongTinKhoaPhong {
    constructor(
        public NhomKhoa: string = null,
        public NhomKhoaId: number = null,
        public MaPhong: string = null,
        public TenPhong: string = null,
        public PhongChinh: boolean = null,
        public IsChecked: boolean = null,
        public Id: number = null
    ) { }
}

export class ThongTinKho {
    constructor(
        public DaChon: boolean = null,
        public Id: number = null,
        public TenKho: string = null,
        public TenKhoa: string = null,
        public TenPhong: boolean = null
    ) { }
}

export class GridThongTinKhoaPhongModel {
    constructor(
        public Data: ThongTinKhoaPhong[] = [],
        public TotalRowCount: number = 0
    ) { }
}

export class GridThongTinKhoModel {
    constructor(
        public Data: ThongTinKho[] = [],
        public TotalRowCount: number = 0
    ) { }
}

export class SreachKhoaPhong {
    constructor(
        public NhanVienId: number,
        public KhoaPhongIds: number[],
        public PhongBenhVienIds: number[]
    ) { }
}

export interface HoSoNhanVien {
    HoTen: string;
    NgaySinh: Date;
    GioiTinh: number;
    SoCMT: string;
    DiaChi: string;
    QuyenHan: string;
    TextTenQuyenHan: string;
    TextTenHocHamHocVi: string;
    TextTenChucDanh: string;
    TextTenVanBangChuyenMon: string;
    TextTenPhamViHanhNghe: string;
    MaChungChiHanhNghe: string;
    NoiCapChungChiHanhNghe: string;
    NgayCapChungChiHanhNghe: Date;
    NgayKyHopDong: Date;
    NgayHetHopDong: Date;
    GhiChu: string;

    HocHamHocViId: number;
    PhamViHanhNgheId: number;
    ChucDanhId: number;
    VanBangChuyenMonId: number;
    SoDienThoai: string;
    Email: string;

    KhoaPhongIds: number[];
    KhoaPhongNhanViens: KhoaPhongNhanViens;

    PhongBenhVienIds: number[];
    PhongNhanViens: KhoaPhongNhanViens;

    KhoNhanVienQuanLyIds: number[];
    KhoNhanVienQuanLys: KhoNhanVienQuanLys;

    PhongChinhId: number;

    TaoTaiKhoan: boolean;
    Password: string;
    PasswordConfirm: string;

    PasswordNew: string;
    PasswordNewConfirm: string;
    Avatar: any;
    LstRole: number[];
    IsUpdateView: boolean;
}

export class KhoNhanVienQuanLys {
    constructor(public KhoId: number, public NhanVienId: number) { }
}

export class NhomKhoaPhongModel {
    constructor(
        public Id: number = null,
        public Visit: boolean = false
    ) { }
}
export class FileDinhKemModel {
    constructor(
        public Id: number = 1,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public KichVatTu: number = null,
        public DuongDan: string = null,
        public MoTa: string = null,
        public LoaiTapTin: LoaiTapTin = null,
        public DuongDanTmp: string = null,
    ) {
    }
}
export enum LoaiTapTin {
    Image = 1,
    Pdf = 2,
    Khac = 10
}
