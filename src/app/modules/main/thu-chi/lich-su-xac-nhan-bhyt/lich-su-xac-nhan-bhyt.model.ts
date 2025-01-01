export class XacNhanBhyt {
    constructor(
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public FromDate: any = null,
        public ToDate: any = null,
        public SearchString: string = null
    ) { }
}

export class ThongTinHanhChinh {
    constructor(
        public Id: number = 0,
        public MaTN: string = null,
        public MaBN: string = null,
        public HoTen: string = null,
        public NamSinh: number = null,
        public TenGioiTinh: string = null,
        public DiaChi: string = null,
        public SoDienThoaiStr: string = null,
        public Email: string = null,
        public DoiTuongUuDai: string = null,
        public CongTyUuDai: string = null
    ) { }
}
export class ThongTinBaoHiemXaHoi {
    constructor(
        public SoThe: string = null,
        public NgayHieuLucStr: string = null,
        public NgayHetHanStr: string = null,
        public NoiDangKyKhamBenh: string = null,
        public TuyenKham: string = null,
        public GiayChuyenVien: string = null,
        public GiayChuyenVienId: number = null,
        public GiayMiemCungTriTra: string = null,
        public GiayMienCungTriTraId: number = null,
        public MucHuong: number = 0
    ) { }
}

export class TagItem {
    constructor(
        public Key: string = null,
        public Value: string = null,
        public ValueDisplay: string = null,
        public Title: string = null
    ) { }
}

export class DateTimeFilter {
    constructor(
        public FromDate: string = null,
        public ToDate: string = null
    ) { }
}
