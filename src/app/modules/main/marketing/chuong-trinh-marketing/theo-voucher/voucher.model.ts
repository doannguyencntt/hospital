export class Voucher {
    Ten: string;
    Ma: string;
    MoTa: string;
    SoLuongPhatHanh: number;
    MaSoTu: string;
    MaSoDen: string;
    TuNgay: Date;
    DenNgay: Date;
    ChietKhauTatCaDichVu: boolean;
    LoaiChietKhau: LoaiChietKhau;
    TiLeChietKhau: number;
    SoTienChietKhau: number;
    LoaiDichVuVoucherMarketing: LoaiDichVuVoucherMarketing;
    GhiChu: string;
    IsThemHoacLuuDichVu: boolean = false;

    lstVoucherChiTietMienGiam: VoucherChiTietMienGiam[] = [];
    lstVoucherChiTietMienGiamNhomDichVu: VoucherChiTietMienGiam[] = [];
}

export class VoucherChiTietMienGiam {
    // VoucherId: number;
    // LoaiDichVu: LoaiDichVuVoucherMarketing;
    LoaiDichVuBenhVien: LoaiDichVuBenhVien; //DVKT, DVKB
    LoaiDichVuBenhVienDisplay: string;
    DichVuId: number;
    DichVuDisplay: string;
    MaDichVu: string;
    LoaiGiaId: number;
    LoaiGiaDisplay: string;
    DonGia: number;
    LoaiChietKhau: LoaiChietKhau;
    TiLeChietKhau: number;
    SoTienChietKhau: number
    DonGiaSauChietKhau: number;
    GhiChu: string;

    NhomDichVuId: number;
    NhomDichVuDisplay: string;
    NhomDichVuChaId : number;
    NhomDichVuConItems: any[];
}

export enum LoaiDichVuVoucherMarketing {
    DichVu = 1,
    NhomDichVu = 2,
    TatCaDichVu = 3
}

export enum LoaiChietKhau {
    ChietKhauTheoTiLe = 1,
    ChietKhauTheoSoTien = 2,
}

export enum LoaiDichVuBenhVien {
    KhamBenh = 1,
    KyThuat = 2,
    // GiuongBenh = 3
}

export class VoucherSearch {
    public SearchString: string = "";
    public RangeNgayApDung: rangeDate = new rangeDate();
}

export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ){}
}

export class VoucherThongTinHTML {
    constructor (
        public HostingName: string = null,
        public Ten: string = null,
        public Ma: string = null,
        public SoLuong: number = null,
        public MaSoTu: number = null,
        public SoLuongPhatHanh: number = null,
    ) { }
}