export class CongNoBaoHiemTuNhanTimKiem {
    public constructor(
        public SearchString: string = null,
        public CongTyId: number = null,
        public LoaiThuChi: string = null,
        public TuNgayDenNgayCT: CongNoBaoHiemTuNhanDateRange = new CongNoBaoHiemTuNhanDateRange(),
        public TuNgayDenNgayHD: CongNoBaoHiemTuNhanDateRange = new CongNoBaoHiemTuNhanDateRange(),
        public TuNgayDenNgay: CongNoBaoHiemTuNhanDateRange = new CongNoBaoHiemTuNhanDateRange(),
        public TrangThai: GachNoTimKiemTrangThai = new GachNoTimKiemTrangThai()
        ){}
}

export class CongNoBaoHiemTuNhanDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
        ){}
}

export class CongTyBaoHiemTuNhanTimKiem {
    public constructor(
        public Ma: string = null,
        public Ten: string = null,
        public DiaChi: string = null,
        public DienThoai: string = null,
        public MaSoThue: string = null,
    ) { }
}

export class GachNo {
    public constructor(
        public Id: number = null,
        public SoChungTu: string = null,
        public NgayChungTu: Date = null,
        public LoaiChungTu: number = null,
        public TenLoaiChungTu: string = null,
        public KyKeToan: string = null,
        public TrangThai: number = null,
        public TenTrangThai: number = null,
        public LoaiTienTe: number = null,
        public TenLoaiTienTe: string = null,
        public TyGia: number = null,
        public NgayThucThu: Date = null,
        public LoaiDoiTuong: number = null,
        public TenLoaiDoiTuong: string = null,
        public CongTyBaoHiemTuNhanId: number = null,
        public BenhNhanId: number = null,
        public TaiKhoan: string = null,
        public TaiKhoanLoaiTien: string = null,
        public NguoiNop: string = null,
        public ChungTuGoc: string = null,
        public DienGiaiChung: string = null,
        public SoTaiKhoanNganHang: string = null,
        public NguyenTe: string = null,
        public ThueNguyenTe: string = null,
        public TongNguyenTe: string = null,
        public HachToan: string = null,
        public ThueHachToan: string = null,
        public TongHachToan: string = null,
        public LoaiThuChi: string = null,
        public VAT: number = null,
        public TienHachToan: number = null,
        public KhoanMucPhi: string = null,
        public SoHoaDon: string = null,
        public NgayHoaDon: Date = null,
        public TienThueHachToan: number = null,
        public TongTienHachToan: number = null,
        public IsShowXacNhanNhapLieu: boolean = false,
        public IsDisabledView: boolean = false,
        public SuDungGoi: boolean = null,

        public CongTyBaoHiemTuNhan: GachNoCongTyBaoHiemTuNhan = new GachNoCongTyBaoHiemTuNhan(),
        public BenhNhan: GachNoBenhNhan = new GachNoBenhNhan()
        ){}
}

export class GachNoCongTyBaoHiemTuNhan {
    public constructor(
        public Ma: string = null,
        public Ten: string = null,
        public DiaChi: string = null,
        public DienThoai: string = null,
        public MaSoThue: string = null,
        public DonVi: string = null,
    ) { }
}

export class GachNoBenhNhan {
    public constructor(
        public MaBN: string = null,
        public HoTen: string = null,
        public NgayThangNamSinh: string = null,
        public TenGioiTinh: string = null,
        public SoChungMinhThu: string = null,
        public SoDienThoai: string = null,
        public SoDienThoaiDisplay: string = null,
        public DiaChiDayDu: string = null
    ) { }
}

export class GachNoTimKiemTrangThai {
    public constructor(
        public DungGoi: boolean = true,
        public KhongDungGoi: boolean = true
    ) { }
}
