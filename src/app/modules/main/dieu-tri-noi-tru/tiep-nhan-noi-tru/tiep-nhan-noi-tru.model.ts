import { DateFieldNameOptions } from "@progress/kendo-angular-intl";
import { LoaiTapTin } from "src/app/shared/enum/common-type.enums";

export class TiepNhanNoiTruTimKiem {
    public constructor(
        public SearchString: string = null,
        public KhoaPhongId: number = null,
        public TrangThai: TiepNhanNoiTruTimKiemTimKiemTrangThai = new TiepNhanNoiTruTimKiemTimKiemTrangThai(),
        public TuNgayDenNgay: TiepNhanNoiTruTimKiemTimKiemDateRange = new TiepNhanNoiTruTimKiemTimKiemDateRange(),
    ) { }
}

export class TiepNhanNoiTruTimKiemTimKiemTrangThai {
    public constructor(
        public ChoQuyetToan: boolean = true,
        public ChuaTaoBenhAn: boolean = true,
        public DaTaoBenhAn: boolean = false
    ) { }
}

export class TiepNhanNoiTruTimKiemTimKiemDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
    ) { }
}


export class ThongTinYeuCauTiepNoiTru {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public MaBenhNhan: string = null,
        public BenhNhanId: number = null,
        public MaYeuCauTiepNhan: string = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public Tuoi: number = null,
        public TenGioiTinh: string = null,
        public Tuyen: string = null,
        public BHYTMucHuong: number = null,
        public DanToc: string = null,
        public DiaChiDayDu: string = null,
        public NgheNghiep: string = null,
        public DoiTuong: string = null,
        public SoDuTaiKhoan: number = 0,
        public SoDuTaiKhoanConLai: number = 0,

        public NoiTruBenhAn: ThongTinNoiTruBenhAn = new ThongTinNoiTruBenhAn(),
        public ThongTinNhapVien: NoiTruBenhAnYeuCauNhapVien = new NoiTruBenhAnYeuCauNhapVien(),

        //BVHD-3800
        public LaCapCuu: boolean = null
    ) { }
}

export class ThongTinNoiTruBenhAn {
    constructor(
        public Id: number = 0,
        public BenhNhanId: number = null,
        public SoBenhAn: string = null,
        public SoLuuTru: string = null,
        public LaCapCuu: boolean = null,
        public LoaiBenhAn: number = null,
        public TenLoaiBenhAn: string = null,
        public ThoiDiemTaoBenhAn: Date = null,
        public NhanVienTaoBenhAnId: number = null,
        public KhoaPhongNhapVienId: number = null,
        public ThoiDiemNhapVien: Date = null,

        public ThoiDiemTiepNhanNgoaiTru: Date = null
    ) { }
}
export class NoiTruBenhAnYeuCauNhapVien {
    constructor(
        public KhoaNhapVienId: number = null,
        public KhoaNhapVien: string = null,
        public ChanDoanNhapVien: string = null,
        public TrangThaiDieuTri: number = null,
        public TenTrangThaiDieuTri: string = null,
        public NoiChiDinh: string = null,
        public ChanDoanKemTheo: string = null,
        public NguoiTiepNhan: string = null,
        public BacSiChiDinh: string = null,
        public LyDoNhapVien: string = null

    ) { }
}


export class SoDoGiuongTiepNhanNoiTruFillter {
    constructor(
        public KhoaPhongId: number = null,
        public PhongBenhVienId: number = null,
        public GiuongTrong: boolean = true,
        public GiuongDaCoBenhNhan: boolean = true,
        public ThoiGianNhan: Date = null,
        public ThoiGianTra: Date = null,
        public YeuCauDichVuGiuongBenhVienId: number = null,
        public BaoPhong: boolean = false,

        public YeuCauTiepNhanNoiTruId: number = null
    ) { }
}

export class TiepNhanNoiTruChiDinh {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public BacSiDieuTriId: number = null,
        public DieuDuongId: number = null,
        public TuNgay: Date = null,
        public DichVuGiuongId: number = null,
        public DichVuGiuongDisplay: string = null,
        public GiuongId: number = null,
        public TenGiuong: string = null,
        public LoaiGiuong: number = null,
        public BaoPhong: boolean = null,
        public ThoiGianNhan: Date = null,
        public KhongCanChiDinhGiuong: boolean = false,
        public YeuCauGoiDichVuId: number = null
    ) { }
}

export class TiepNhanNoiTruChiDinhChonGiuong {
    constructor(
        public KhoaId: number = null,
        public TenKhoa: string = null,
        public BaoPhong: boolean = null,
        public GiuongId: number = null,
        public TenGiuong: string = null,
        public PhongId: number = null,
        public TenPhong: string = null,
        public Tang: number = null,
        public ThoiGianNhan: Date = null,
        public ThoiGianTra: Date = null,
        public YeuCauDichVuGiuongBenhVienId: number = null
    ) { }
}

export class ThongTinDoiTuongTiepNhan {
    constructor(
        public Id: number = null,
        public BenhNhanId: number = null,
        // public BHYTNgayHieuLuc: Date = null,
        // public BHYTNgayHetHan: Date = null,
        // public BHYTMucHuong: number = null,
        // public BHYTNgayDu5Nam: Date = null,
        // public BHYTDiaChi: string = null,
        // public NoiDangKyBHYT: string = null,
        // public BHYTMaSoThe: string = null,
        // public BHYTMaDKBD: string = null,

        public CoBHYT: boolean = false,
        public LyDoVaoVien: number = null,
        public CoBHTN: boolean = null,

        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public NgayThangNamSinh: Date = null,
        public SoChungMinhThu: string = null,
        public GioiTinh: number = null,
        public NgheNghiepId: number = null,
        public QuocTichId: number = 1,
        public TinhThanhId: number = null,
        public QuanHuyenId: number = null,
        public PhuongXaId: number = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public NoiLamViec: string = null,
        public DanTocId: number = null,

        public HoTenBo: string = null,
        public TrinhDoVanHoaCuaBo: string = null,
        public NgheNghiepCuaBoId: number = null,
        public HoTenMe: string = null,
        public TrinhDoVanHoaCuaMe: string = null,
        public NgheNghiepCuaMeId: number = null,

        //người liên hệ
        public NguoiLienHeHoTen: string = null,
        public NguoiLienHeQuanHeNhanThanId: number = null,
        public NguoiLienHeSoDienThoai: string = null,
        public NguoiLienHeEmail: string = null,
        public NguoiLienHeDiaChi: string = null,
        public NguoiLienHePhuongXaId: number = null,
        public NguoiLienHeQuanHuyenId: number = null,
        public NguoiLienHeTinhThanhId: number = null,

        public IsCheckedBHYT: boolean = null,
        public TuNhap: boolean = false,

        public YeuCauTiepNhanMeId: number = null,
        public YeuCauGoiDichVuId: number = null,

        // thông tin thẻ BHYT
        public YeuCauTiepNhanTheBHYTs: Array<YeuCauTiepNhanTheBHYT> = new Array<YeuCauTiepNhanTheBHYT>(),
        public YeuCauTiepNhanCongTyBaoHiemTuNhans: Array<ThongTinBaoHiemTuNhan> = new Array<ThongTinBaoHiemTuNhan>(),
        public BieuHienLamSang : string =null,
        public DichTeSarsCoV2 : string =null,
        ) { }
}

export class ThongTinBenhNhanTimKiemBHYT {
    constructor(
        public MaThe: string = null,
        public TenBenhNhan: string = null,
        public NgaySinh: Date = null,
        public NgaySinhDisplay: string = null,
        public NamSinh: number = null,
    ) {
    }
}

export class ThongTinDoiTuongSoSinhTiepNhan {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public KhoaNhapVienId: number = null,
        public KhoaNhapVien: string = null,
        public MaBenhAnMe: string = null,

        public LyDoVaoVien: number = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public NgayThangNamSinh: Date = null,
        public SoChungMinhThu: string = null,
        public GioiTinh: number = null,
        public GioiTinhDisplay: string = null,
        public NgheNghiepId: number = null,
        public QuocTichId: number = 1,
        public TinhThanhId: number = null,
        public QuanHuyenId: number = null,
        public PhuongXaId: number = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public NoiLamViec: string = null,
        public TenKhaiSinh: string = null,
        public TenBanDau: string = null,
        public DanTocId: number = null,

        //người liên hệ
        public NguoiLienHeHoTen: string = null,
        public NguoiLienHeQuanHeNhanThanId: number = null,
        public NguoiLienHeSoDienThoai: string = null,
        public NguoiLienHeEmail: string = null,
        public NguoiLienHeDiaChi: string = null,
        public NguoiLienHePhuongXaId: number = null,
        public NguoiLienHeQuanHuyenId: number = null,
        public NguoiLienHeTinhThanhId: number = null,

        public IsCheckedBHYT: boolean = null,
        public TuNhap: boolean = false,

        public YeuCauGoiDichVuId: number = null,
        public KhoaChuyenBenhAnSoSinhVeId: number = null,

        public LucDeSoSinh: Date = null,
    ) { }
}

export class YeuCauTiepNhanTheBHYT {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public BenhNhanId: number = null,
        public MaSoThe: string = null,
        public MucHuong: number = null,
        public MaDKBD: string = null,
        public NoiDangKyBHYT: string = null,
        public NgayHieuLuc: Date = null,
        public NgayHetHan: Date = null,
        public DiaChi: string = null,
        public CoQuanBHXH: string = null,
        public NgayDu5Nam: Date = null,
        public NgayDuocMienCungChiTra: Date = null,
        public MaKhuVuc: string = null,
        public DuocMienCungChiTra: boolean = null,
        public GiayMienCungChiTraId: number = null,
        public TinhTrangThe: number = null,
        public IsCheckedBHYT: boolean = null,
        public DuocGiaHanThe: boolean = null,
        public DisableGiaHanThe: boolean = false,
        public DisabledGiaHanView: boolean = false,
        public IsQuaHanTheBHYT: boolean = false,
        public IsChange: boolean = false,

        public GiayMienCungChiTra: GiayMienCungChiTra = null
    ) {
    }
}

export class GiayMienCungChiTra {
    constructor(
        public Id: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public KichThuoc: number = null,
        public DuongDan: string = null,
        public LoaiTapTin: LoaiTapTin = null,
        public MoTa: string = null
    ) { }
}


export class ThongTinBaoHiemTuNhan {
    constructor(
        public Id: number = 0,
        public CongTyBaoHiemTuNhanId: number = null,
        public TenCongTyBaoHiemTuNhan: string = null,
        public MaSoThe: string = null,
        public NgayHieuLuc: Date = null,
        public NgayHetHan: Date = null,
        public SoDienThoai: string = null,
        public DiaChi: string = null
    ) {
    }
}