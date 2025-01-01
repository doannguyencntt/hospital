export class BenhNhan {
    constructor(
        public HoTen: string = null,
        public NgayThangNamSinh: Date = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,

        public SoChungMinhThu: string = null,
        public GioiTinh: number = null,
        public GioiTinhDisplay: string = null,
        public NgheNghiepId: number = null,
        public NoiLamViec: string = null,
        public QuocTichId: number = null,
        public DanTocId: number = null,
        public DiaChi: string = null,
        public PhuongXaId: number = null,
        public QuanHuyenId: number = null,
        public TinhThanhId: number = null,

        public SoDienThoai: string = null,
        public Email: string = null,
        public NguoiLienHeHoTen: string = null,
        public NguoiLienHeQuanHeNhanThanId: number = null,
        public NguoiLienHeSoDienThoai: number = null,
        public NguoiLienHeEmail: string = null,
        public NguoiLienHeDiaChi: string = null,
        public NguoiLienHePhuongXaId: number = null,
        public NguoiLienHeQuanHuyenId: number = null,
        public NguoiLienHeTinhThanhId: number = null,

        public BHYTMaSoThe: string = null,
        public BHYTNgayHieuLuc: Date = null,
        public BHYTNgayHetHan: Date = null,
        public BHYTDiaChi: string = null,
        public BHYTCoQuanBHXH: string = null,
        public BHYTNgayDu5Nam: Date = null,
        public BHYTNgayDu5NamDisplay: string = null,
        public BHYTMaDKBD: string = null,
        public BHYTNgayHetHanDisplay: string = null,
        public BHYTNgayHieuLucDisplay: string = null,
        public NgheNghiepText: string = null,
        public NhomMauText: string = null,
        public NhomMau: number = null,
        public QuocTichText: string = null,
        public NguoiLienHeQuanHeNhanThanText: string = null,
        public CoTienSuBenh: boolean = null,
        public CoDiUngThuoc: boolean = null,
        public CoBHYT: boolean = null,
        public CoBHTN: boolean = null,
        public BenhNhanTienSuBenhs: BenhNhanTienSuBenhViewModel[] = [],
        public BenhNhanDiUngThuocs: BenhNhanDiUngThuocViewModel[] = [],
        public BenhNhanCongTyBaoHiemTuNhans: BenhNhanBaoHiemTuNhanViewModel[] = [],
        public TuNhap: boolean = false,

    ) {
    }

}

export interface PrintSession {
    PrintContent: HTMLElement;
}

export class ThongTinBenhNhan {
    constructor(
        public MaThe: string = null,
        public TenBenhNhan: string = null,
        public NgaySinh: Date = null,
        public NgaySinhDisplay: string = null,
    ) {
    }
}


export class BenhNhanTienSuBenhViewModel {
    constructor(
        public STT: number = null,
        public Id: number = 0,
        public BenhNhanId: number = 0,
        public TenBenh: string = null,
        public LoaiTienSuBenh: number = null,
        public TenLoaiTienSuBenh: string = null,
        public TenTienSuBenhs: BenhNhanTienSuBenhChiTiet[] = [],
    ) {
    }
}

export class BenhNhanTienSuBenhChiTiet {
    constructor(
        public LoaiTienSuBenh: number = null,
        public TenBenh: string = null,
    ) {
    }
}


export class BenhNhanDiUngThuocViewModel {
    constructor(
        public STT: number = null,
        public Id: number = 0,
        public BenhNhanId: number = 0,
        public ThuocId: number = null,
        public TenThuoc: string = null,
        public BieuHienDiUng: string = null,
        public TenDiUng: string = null,
        public LoaiDiUng: number = null,
        public LoaiDiUngDisplay: string = null,
        public MucDo: number = null,
        public MucDoDisplay: string = null,
        public TenDiUngThuocs: BenhNhanDiUngThuocChiTiet[] = [],
    ) {
    }
}

export class BenhNhanDiUngThuocChiTiet {
    constructor(
        public LoaiDiUng: number = null,
        public TenDiUng: string = null,
        public ThuocId: number = null,
    ) {
    }
}

export class BenhNhanBaoHiemTuNhanViewModel {
    constructor(
        public STT: number = null,
        public BenhNhanId: number = 0,
        public CongTyBaoHiemTuNhanId: number = null,
        public CongTyDisplay: string = null,
        public MaSoThe: string = null,
        public NgayHieuLuc: Date = null,
        public NgayHieuLucDisplay: string = null,
        public NgayHetHan: Date = null,
        public NgayHetHanDisplay: string = null,
        public SoDienThoai: string = null,
        public DiaChi: string = null,
        public CongTyBHTNIds: Array<number> = null,

    ) {
    }
}
