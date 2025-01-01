import { ControlContainer } from "@angular/forms";
import { DateTime } from "luxon";
import { LoaiTapTin } from "src/app/shared/enum/common-type.enums";
export class ThongTinThuTienMarketing {
	constructor(
		public Id: number = 0,
		public TenBenhNhan: string = null,
		public SoTienChuaThu: number = 0
	) { }
}

export class ThuTienMarketing {
	constructor(
		public Id: number = 0,
		public BenhNhanId: number = 0,
		public TienMat: number = 0,
		public ChuyenKhoan: number = 0,
		public POS: number = 0,
		public NgayThu: Date = null,
		public NoiDungThu: string = null,
		public TienBenhNhanDua: number = 0,
		public TienTraLaiBenhNhan: number = 0,
		public GoiChuaQuyetToanMarketing: GoiChuaQuyetToanMarketing[] = []
	) { }
}

export class LoaiThanhToan {
	TienMat = 1;
	TienMatDisplay = 'Tiền mặt';
	ChuyenKhoan = 2;
	ChuyenKhoanDisplay = 'Chuyển khoản';
	POS = 3
	POSDisplay = 'POS';
}

export class ThongTinBenhNhan {
	constructor(
		public Id: number = 0,
		public MaYeuCauTiepNhan: string = null,
		public BenhNhanId: string = null,
		public MaBN: string = null,
		public HoTen: string = null,
		public NamSinh: number = null,
		public NgayThangNamSinh: string = null,
		public TenGioiTinh: string = null,
		public DiaChi: string = null,
		public SoDienThoai: string = null,
		public Email: string = null,
		public DoiTuongUuDai: string = null,
		public CongTyUuDai: string = null,
		public BHYTMaSoThe: string = null,
		public BHYTngayHieuLuc: string = null,
		public BHYTNgayHetHan: string = null,
		public BHYTDiaChi: string = null,
		public BHYTMucHuong: string = null,
		public TuyenKham: string = null,
		public TenGiayChuyenVien: string = null,
		public CongTyUuDaiId: number = null,
		public NgayHieuLucStr: string = null,
		public NgayHetHanStr: string = null,
		public GiayChuyenVienId: number = null,
		public DuocHuongBHYT: boolean,
		public CoBHYT: boolean,
		public BHYTgiayMienCungChiTraId: number = null,
		public TenGiayMiemCungTriTra: string = null,
		public ThongTinCongTyBaoHiemTuNhans: ThongTinCongTyBaoHiemTuNhans[] = [],
		public TenBHYTgiayMienCungChiTra: string = null,
		public TaiLieuDinhKemGiayChuyenVien: TaiLieuDinhKemGiayChuyenVien[] = [],
		public TaiLieuDinhKemGiayMiemCungChiTra: TaiLieuDinhKemGiayMiemCungChiTra[] = [],
		public TaiLieuDinhKemGiayMiemGiam: TaiLieuDinhKemGiayMiemGiamVo = null
	) { }
}
export class ThongTinCongTyBaoHiemTuNhans {
	constructor(
		public TenCongTy: string = null,
		public MaSoThe: string = null,
		public TuNgayStr: string = null,
		public DenNgayStr: string = null,
		public SoDienThoaiStr: string = null,
		public DiaChi: string = null,

		public Id: string = null,
		public SoTienCongNo: number = null
	) { }
}

export class TaiLieuDinhKemGiayChuyenVien {
	constructor(
		public Id: number = 0,
		public GiayChuyenVienId: number = 0,
		public Ma: string = null,
		public Ten: string = null,
		public TenGuid: string = null,
		public MoTa: string = null,
		public KichThuoc: number = 0,
		public DuongDan: string = null,
		public LoaiTapTin: number = 0,
		public TenTapTin: string = null
	) { }
}

export class TaiLieuDinhKemGiayMiemGiamVo {
	constructor(
		public Id: number = 0,
		public GiayChuyenVienId: number = 0,
		public Ma: string = null,
		public Ten: string = null,
		public TenGuid: string = null,
		public MoTa: string = null,
		public KichThuoc: number = 0,
		public DuongDan: string = null,
		public LoaiTapTin: number = 0,
		public TenTapTin: string = null
	) { }
}

export class TaiLieuDinhKemGiayMiemCungChiTra {
	constructor(
		public Id: number = 0,
		public GiayChuyenVienId: number = 0,
		public Ma: string = null,
		public Ten: string = null,
		public TenGuid: string = null,
		public MoTa: string = null,
		public KichThuoc: number = 0,
		public DuongDan: string = null,
		public LoaiTapTin: number = 0,
		public TenTapTin: string = null
	) { }
}

export class ChoThuTien {
	constructor(
		public Id: number = 0,
		public MaTN: string = null,
		public MaBN: string = null,
		public HoTen: string = null,
		public NamSinh: number = null,
		public TenGioiTinh: string = null,
		public DiaChi: string = null,
		public SoDienThoaiStr: string = null,
		public SoDienThoai: string = null,
		public SoTienBNThanhToan: number = 0,
		public KiemTraChonThanhToan: boolean = true,
		public TabActive: number = 0,

		//cập nhật trạng thái 27/08/2020
		public CongNo: boolean = true,
		public DaQuyetToan: boolean = true,

		//cập nhật value sreach
		public SearchString: string = null,

		//update 19/10
		public ThoiDiemTiepNhan: DateTime = null,
		public ThoiDiemTiepNhanTuFormat: any = null,
		public ThoiDiemTiepNhanDenFormat: any = null,

		public FromDate: any = null,
		public ToDate: any = null
	) { }
}
export class TagItem {
	constructor(public Key: string = null, public Value: string = null, public ValueDisplay: string = null, public Title: string = null) { }
}
export class TimKiemThongTinBenhNhan {
	constructor(public TimKiemMaBNVaMaTN: string = null) { }
}

export class GoiChuaQuyetToanMarketing {
	constructor(
		public Id: number = 0,
		public MaGoi: string = null,
		public TenGoi: string = null,
		public NgayDang: string = null,
		public GiaGoi: number = 0,
		public DaThu: number = 0,
		public ChuaThu: number = 0,
		public TongDVDaDung: number = 0,
		public TrangThaiQuyetToan: number = 0,
		public SoTienThuLanNay: number = 0,
		public CheckedDefault: boolean = null,
		public NgungSuDung: boolean = null,
	) { }
}

export class GoiDaQuyetToanMarketing {
	constructor(
		public Id: number = 0,
		public MaGoi: string = null,
		public TenGoi: string = null,
		public NgayDang: string = null,
		public GiaGoi: number = 0,
		public DaThu: number = 0,
		public ChuaThu: number = 0,
		public TongDVDaDung: number = 0,
		public TraLaiBN: number = 0,
	) { }
}

export class ThongTinQuyetToan {
	constructor(
		public BenhNhanId: number = 0,
		public YeuCauGoiDichVuId: number = 0,
		public TongTienGoi: number = 0,
		public TongTienDaThu: number = 0,
		public TongTienDaDung: number = 0,
		public SoTienTraLai: number = 0,
		public HuyTrongNgay: boolean = false,

		public HuyGoi: boolean = false,
		public LyDoHuyGoi: string = null,

		public TrangThaiQuyetToanDichVu: number = 0,
		public DanhSachDichVuTrongGois: DanhSachDichVuTrongGoi[] = []
	) { }
}

export class HuyQuyetToanGoi {
	constructor(
		public YeuCauGoiDichVuId: number = 0,
		public LyDoHuyQuyetToan: string = null,
	) { }
}

export class timKiemThongTinPhieuThu {
	constructor(
		public BenhNhanId: number = 0,
		public GoiDichDichVuId: number = null,
		public ThoiDiemTuFormat: any = null,
		public ThoiDiemDenFormat: any = null,
		public FromDate: any = null,
		public ToDate: any = null,
		public SearchString: string = null,
	) { }
}

export class DanhSachDichVuTrongGoi {
	constructor(
		public Id: number = 0,
		public MaDichVu: string = null,
		public Nhom: string = null,
		public TenDichVu: string = null,
		public LoaiGia: number = 0,
		public Sl: number = 0,
		public SoLuongChuaDung: number = 0,
		public DGBV: number = 0,
		public DGTruoc: number = 0,
		public DGSau: number = 0,
		public TTBV: number = 0,
		public TTTruocCK: number = 0,
		public TTSauCK: number = 0,
		public TTBVChuaDung: number = 0,
		public TTTruocCKChuaDung: number = 0,
		public TTSauCKChuaDung: number = 0,
		public TTBVDaDung: number = 0,
		public TTTruocCKDaDung: number = 0,
		public TTSauCKDaDung: number = 0,
	) { }
}

export class LuuThongTinChuyenGoiMoi {
	constructor(
		public YeuCauGoiDichVuId: number = null,
        public TenGoiMoi: string = null,
		public MaGoiMoi: string = null,
		public DichVuTrongGoiMarketingModels: DichVuTrongGoi[] = []
	) { }
}
export class DichVuTrongGoi {
	constructor(	
		public DichVuBenhVienId: number = null,	
		public TenDichVu: string = null,
		public Nhom: number = null,
		public NhomDisplay: string = null,
		public LoaiGia: string = null,
		public NhomGiaDichVuId: number = null,
		public SoLuong: number = 1,
		public DonGiaBenhVien: number = null,
		public DonGiaTruocChietKhau: number = null,
		public DonGiaSauChietKhau: number = null,
		public ThanhTienBenhVien: number = null,
		public ThanhTienTruocChietKhau: number = null,
		public ThanhTienSauChietKhau: number = null,	
		public HighLightClass : string = null	
	) { }
}

export class ChonGoiMarketing {
	constructor(
		public KeyId: number = null,
		public DisplayName: number = null,
		public SoLuong: number = 1
	) { }
}
