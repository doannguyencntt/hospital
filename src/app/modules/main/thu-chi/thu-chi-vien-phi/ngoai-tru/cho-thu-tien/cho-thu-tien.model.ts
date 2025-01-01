import { DateTime } from "luxon";
import { LoaiTapTin } from "src/app/shared/enum/common-type.enums";

export class LoaiMienGiam {
	UuDai = 1;
	Voucher = 2;
	MienGiamThem = 3;
}

export enum LoaiBangKeChiPhi {
	XemTruocBangKe = 1,
	BangKeChoThu = 2,
	BangKeDaThu = 3,
}

export class LoaiChietKhau {
	ChietKhauTheoTiLe = 1;
	ChietKhauTheoSoTien = 2;
}

export class TrangThaiThuTien {
	ChuaThu = 1;
	TraNo = 2;
	HoanUng = 3;
	DaThu = 4;
}
export class CommonThuTien {
	TienMat = 1;
	ChuyenKhoan = 2;
	Pos = 3;
	CongNo = 4;
	TienMatText = "Tiền mặt";
	ChuyenKhoanText = "Chuyển khoản";
	PosText = "Pos";
	CongNoText = "Công nợ";
	Http = "http:";
	ThuNgan = "ThuNgan";
	ThuTien = "thutien";
	ThuTamUng = "thutamung";
	TraLaiBenhNhan = "tralaibn";
	BenhNhanTraTien = "bnTraTien";
	NoiDungThuField = "NoiDungThu";
	InPhieuThu = "InPhieuThu";
	BangKeThuoc = "BangKeThuoc";
	InCPKhamNgoaiTru = "InCPKhamNgoaiTru";
	InPhieuThuTamUng = "InPhieuThuTamUng";
	InPhieuChi = "InPhieuChi";
	InPhieuThuBenhNhanTraTien = "InPhieuThuBenhNhanTraTien";
	DataTextUTF8 = "data:text/html;charset=utf-8,";
	NoiDungThuTamUng = "NoiDungThuTamUng";
	NoiDungChiTien = "NoiDungChiTien";
	HinhThucThanhToan = "HinhThucThanhToan";
	InPhieuHoanUng = "InPhieuHoanUng";
	//======= Show message  ============================
	NoiDungThu = "Thu tiền khám chữa bệnh ngoại trú";
	NoiDungThuGoi = "Thanh toán chi phí trong gói marketing";
	VuiLongChonHTTT = "Vui lòng chọn hình thức thanh toán.";
	VuiLongChonDVTT = "Vui lòng chọn dịch vụ thanh toán.";
	VuiLongChonDVCNTT = "Vui lòng chọn dịch vụ để cập nhật thanh toán.";
	NoiDungThuMessage = "Nội dung thu yêu cầu nhập.";
	ThuTienThanhCong = "Đã thu tiền thành công.";
	ApDungCongNoThanhCong = "Áp dụng công nợ thành công.";
	ApDungCongNoKhongLonSoTienThanhToanDichVu = "Số tiền áp dụng công nợ không lớn hơn số tiền thanh toán.";
	SoTienCongNoLonKhong = "Số tiền công nợ phải lớn hơn 0.";
	ApDungGiayMiemGiamThanhCong = "Thêm giấy miễn giảm thành công.";
	ErrorSoTienDVKhongDung = "Số tiền tính cho từng dịch vụ không đúng.";
	ErrorChuaXacNhanTienBHYT = "Yêu cầu thu tạm ứng cho NB BHYT.";
	ErrorSoTienBenhNhanDuaKhongDung = "Số tiền người bệnh đưa không đúng.";
	ErrorSoTienMiemGiam = "Vui lòng kiểm tra thông tin miễm giảm.";
	ErrorSoTienNhapKhongDung = "Số tiền nhập không đúng.";
	ErrorXacNhanBaoHYTe = "Vui lòng xác nhận bảo hiểm y tế cho từng dịch vụ.";
	ErrorKiemTraSoTienTamUng = "Vui lòng kiểm tra số tiền tạm ứng.";
	ErrorNoiDungThuTamUng = "Nội dung thu tạm ứng yêu cầu nhập.";
	ShowTienTamUngThanhCong = "Thu tiền tạm ứng NB thành công.";
	ErrorKhongTimThayThongTin = "Không tìm thấy cần tìm.";
	ErrorNoiDungThuYeuCauNhap = "Nội dung chi yêu cầu nhập.";
	ErrorDichVuHuyThanhToan = "Dịch vụ đang hoặc đã thực hiện không được hủy.";
	ShowNoiDungTienDu = "Tiền dư.";
	ShowTraTienBNThanhCong = "Trả tiền NB thành công.";
	ShowBenhNhanTraTien = "Người bệnh trả tiền.";
	ShowBenhNhanChiTienThanhCong = "Người bệnh trả tiền thành công.";
	ShowVuiLongChonHTTT = "Vui lòng chọn hình thức thanh toán.";
	ShowVuiLongChonDvHuy = "Vui lòng chọn dịch vụ để hủy thanh toán.";
	ShowHuyThanhToanThanhCong = "Hủy thanh toán thành công.";
	ShowCapNhatThanhToanThanhCong = "Cập nhật thanh toán thành công.";
	SoTienCongNoNhapVuotQuaTienDV = "Số tiền công nợ nhập không đúng.";
	SoTienThanhToanKhongHopLe = "Số tiền thanh toán không hợp lệ.";
	XoaMiemGiamThanhCong = "Xóa giấy miễn giảm thành công.";
	ApDungMiemGiamThanhCong = "Áp dụng miễn giảm thành công.";
}
export class DanhSachChiPhiThuTamUng {
	constructor(public Id: number = 0, public DanhSachChiPhiKhamChuaBenhDaChons: DanhSachChiPhiKhamChuaBenh[] = []) { }
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
		public DienThoaiStr: string = null,
		public SoDienThoai: string = null,
		public SoTienBNThanhToan: number = 0,
		public KiemTraChonThanhToan: boolean = true,
		public TabActive: number = 0,

		//cập nhật trạng thái 27/08/2020
		public ChuaThu: boolean = true,
		public CongNo: boolean = true,
		public HoanUng: boolean = true,
		public DaThu: boolean = true,

		//cập nhật value sreach
		public SearchString: string = null,

		//update 19/10
		public ThoiDiemTiepNhan: DateTime = null,
		public ThoiDiemTiepNhanTuFormat: any = null,
		public ThoiDiemTiepNhanDenFormat: any = null,

		public FromDate: any = null,
		public ToDate: any = null,
	) { }
}

export class ThongTinBenhNhan {
	constructor(
		public Id: number = 0,
		public MaYeuCauTiepNhan: string = null,
		public BenhNhanId: string = null,
		public MaBN: string = null,
		public HoTen: string = null,
		public NamSinh: number = null,
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
    public DangDieuTriNoiTru: boolean,
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

export class TagItem {
	constructor(public Key: string = null, public Value: string = null, public ValueDisplay: string = null, public Title: string = null) { }
}
export class TimKiemThongTinBenhNhan {
	constructor(public TimKiemMaBNVaMaTN: string = null) { }
}
//=================================================Begin chi tiết thu tiền===============================================

export class ThuTien {
	constructor(
		public LoaiThuTienBenhNhan: LoaiThuTienBenhNhan[] = [],
		public DanhSachCongNos: DanhSachCongNo[] = [],
		public DanhSachChiPhiKhamChuaBenhDaChons: DanhSachChiPhiKhamChuaBenh[] = [],

		public Id: number = 0,
		public TienMat: number = 0,
		public ChuyenKhoan: number = 0,
		public POS: number = 0,
		public SoTienHoanLaiThanhToan: number = 0,
		public SoTienCongNo: number = 0,
		public NgayThu: Date = null,
		public NoiDungThu: string = null,

		public NoiDungCongNo: string = null,
		public TienBenhNhanDua: number = 0,
		public TienTraLaiBenhNhan: number = 0
	) { }
}


export class QuyetToanDichVuTrongGoiVo {
	constructor(
		public DanhSachChiPhiKhamChuaBenhTrongGoiDichVus: ChiPhiKhamChuaBenhTrongGoiDichVuVo[] = [],
		public Id: number = 0,
		public TienMat: number = 0,
		public NgayThu: Date = null,
		public NoiDungThu: string = null
	) { }
}
export class DanhSachCongNo {
	constructor(public CongTyCongNoId: number = null, public SoTienCongNo: number = 0) { }
}

export class LoaiThuTienBenhNhan {
	constructor(public Id: Number = null, public TenHinhThucThanhToan: string = null) { }
}

//=================================================Danh Sách đã thu tiền===============================================
export class DanhSachDaThuTienReq {
	constructor(public YeuCauTiepNhanId: Number = null, public LyDoHuy: String = null, public DanhSachChiPhiKhamChuaBenhDaChons: DanhSachChiPhiKhamChuaBenh[] = []) { }
}

// export class KetQuaXacNhanHuyThanhToanVo {
//     constructor(
//         public YeuCauTiepNhanId: Number = null,
//         public SoTienDaThanhToan: Number = 0,
//         public CaseValue: Number = 0,
//         public DanhSachChiPhiKhamChuaBenhDaChons: DanhSachChiPhiKhamChuaBenh[] = [],
//         public DanhSachCongNoCus: DanhSachCongNoCu[] = []
//     ) { }
// }

export class DanhSachDaThuTienResp {
	constructor(
		public CaseValue: Number = 0,
		public YeuCauTiepNhanId: Number = null,
		public SoTienDaThanhToan: Number = 0,
		public SoTienTraVaoLaiTaiKhoan: Number = 0,
		public Error: string = null,
		public DanhSachChiPhiKhamChuaBenhDaChons: DanhSachChiPhiKhamChuaBenh[] = [],
		public DanhSachCongNoCus: DanhSachCongNoCu[] = []
	) { }
}
export class DanhSachCongNoCu {
	constructor(public CongTyCongNoId: number = null, public CongTyCongNoName: string = null, public SoTienCongNo: number = null, public HoanLaiTien: number = 0, public CongNoConLai: number = 0) { }
}
//=================================================End chi tiết thu tiền===============================================

//=================================================Thu Tien Tạm Ứng===================================================
export class ThuTienTamUng {
	constructor(
		public Id: number = 0,
		public TienMat: number = 0,
		public ChuyenKhoan: number = 0,
		public POS: number = 0,
		public NgayThuTamUng: Date = null,
		public NoiDungThuTamUng: string = null,

		public TienBenhNhanDua: number = 0,
		public TienTraLaiBenhNhan: number = 0
	) { }
}
//================================================= End Thu Tien Tạm Ứng===============================================

//=================================================Thu Chi Tiền ==================================================
export class ChiTien {
	constructor(
		public Id: number = 0,
		public TienMat: number = 0,
		public ChuyenKhoan: number = 0,
		public NgayChi: Date = null,
		public NoiDungChiTien: string = null,

		public TienBenhNhanDua: number = 0,
		public TienTraLaiBenhNhan: number = 0
	) { }
}

export class BenhNhanTraTien {
	constructor(
		public Id: number = 0,
		public TienBenhNhanDua: number = 0,

		public TienMat: number = 0,
		public ChuyenKhoan: number = 0,
		public Pos: number = 0,

		public NgayTraTien: Date = null,
		public NoiDungBenhNhanDuaTien: string = null,
		public TienTraLaiBenhNhan: number = 0
	) { }
}
//================================================= End Chi Tiền ===============================================

//=================================================Danh Sach Thu Phí =================================================
export class DanhSachCongNoChoThu {
	constructor(public CongNoChoThus: CongNoChoThu[] = []) { }
}
export class CongNoChoThu {
	constructor(public CongTyBaoHiemTuNhanId: number = 0, public TenCongTy: string = null, public SoTienCongNoChoThu: number = 0, public ViTri: number = 0) { }
}
export class DanhSachChiPhiKhamChuaBenh {
	constructor(
		public Id: number = 0,
		public LoaiNhom: number = null,
		public Nhom: string = null,
		public STT: number = null,
		public Ma: string = null,
		public TenDichVu: string = null,
		public LoaiGia: string = null,
		public Soluong: number = null,
		public DonGia: number = null,
		public ThanhTien: number = null,
		public KiemTraBHYTXacNhan: boolean = null,
		public DuocHuongBHYT: boolean = null,
		public BHYTThanhToan: number = null,
		public TLMG: number = null,
		public SoTienMG: number = null,
		public DaThanhToan: number = null,
		public BNConPhaiThanhToan: number = null,
		public NoiThucHien: string = null,
		public CheckedDefault: boolean = null,
		public CapNhatThanhToan: boolean = false,
		public HighLightCapNhatThanhToanClass: string = null,
		public DanhSachCongNoChoThus: CongNoChoThu[] = [],
		public KiemTraTienSoTienItemDichVu: boolean = false,

		public TrangThaiThanhToan: number = 0,
		public TongCongNo: number = null,
		public SoTienMGThem: number = 0,
		public TrangThai: string = null,
		public KiemTraHuy: boolean = null,
		public ThoiDiemChiDinhStr: boolean = null,

		public GhiChuMienGiamThem: string = null,
        public NoiDungGhiChuMiemGiamId: number = null,

		public DanhSachMienGiamVos: DanhSachMienGiamVo[] = [],

		public DaHoanUng: boolean = null,
		public ConHanHuyPhieuThu: boolean = null,
		public apdungMGTThanhCong: boolean = null
	) { }
}

export class DanhSachDaThuPhiKhamChuaBenh {
	constructor(
		public Id: number = 0,
		public LoaiNhom: string = null,
		public Nhom: string = null,
		public STT: number = null,
		public Ma: string = null,
		public TenDichVu: string = null,
		public LoaiGia: string = null,
		public Soluong: number = null,
		public DonGia: number = null,
		public ThanhTien: number = null,
		public KiemTraBHYTXacNhan: boolean = null,
		public BHYTThanhToan: number = null,
		public TLMG: number = null,
		public SoTienMG: number = null,
		public DaThanhToan: number = null,
		public BNConPhaiThanhToan: number = null,
		public NoiThucHien: string = null,
		public CheckedDefault: string = null,
		public SoPhieu: string = null,
		public ThoiGianThuStr: string = null,
		public NguoiThu: string = null,
		public ThoiDiemChiDinhStr: boolean = null
	) { }
}
//============================== file TaiLieuDinhKemGiayChuyenVien và TaiLieuDinhKemGiayMiemCungChiTra==================
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

export class GiayMiemGiam {
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

//============================== Thông tin miễm giảm ========================================
export class LookupItemVo {
	constructor(public KeyId: number = 0, public DisplayName: string = null, public LoaiVoucher: number = 0) { }
}

export class ThongTinMienGiamVo {
	constructor(
		//============================== Thông tin miễm giảm theo đối tượng ============================
		public ThongTinMienGiamTheoDoiTuongUuDaiVo: ThongTinMienGiamTheoDoiTuongUuDai = null,
		//==============================Thông tin miễm giảm voucher ====================================
		public ThongTinMienGiamVoucherVo: ThongTinMienGiamVoucher = null,
		//==============================Thông tin miễm giảm thêm =======================================
		public ThongTinMienGiamThemVo: ThongTinMienGiamThem = null
	) { }
}

//============================== Thông tin miễm giảm theo đối tượng ====================================
export class ThongTinMienGiamTheoDoiTuongUuDai {
	constructor(public CongTyUudai: string = null, public DoiTuongUuDai: string = null, public DichVuMiemGiamTheoTiLes: DichVuUuDaiTheoTungDoiTuong[] = []) { }
}
export class DichVuUuDaiTheoTungDoiTuong {
	constructor(public LoaiNhom: number = 0, public DichVuId: number = 0, public TiLe: number = 0) { }
}
//============================== END Thông tin miễm giảm theo đối tượng =================================

//==============================Thông tin miễm giảm voucher ============================================
export class ThongTinMienGiamVoucher {
	constructor(
		public LoaiVoucher: number = 0,
		public MaVouchers: string[] = [],
		public TenVoucher: string = null,
		public DichVuMiemGiamTheoTiLes: DichVuUuDaiTheoTungDoiTuong[] = [],
		public SoTienVoucherMiemGiam: number = 0
	) { }
}

export class ThongTinMienGiamThem {
	constructor(
		public LoaiMienGiamThem: number = 0,
		public SoTienMG: number = 0,
		public TiLeMienGiam: number = 0.0,
		public SoTienMGConLai: number = 0,
		public LyDoMiemGiam: string = null,
		public NhanVienDuyetMienGiamThemId: number = null,
		public TenNhanVienDuyet: string = null,
		public TaiLieuDinhKemGiayMiemGiam: TaiLieuDinhKemGiayMiemGiamVo = null,
		public GiayMiemGiam: GiayMiemGiam = null
	) { }
}

export class ThongTinVoucherTheoYeuCauTiepNhan {
	constructor(public TheVoucher: string = null, public YeucauTiepNhanId: number = 0) { }
}
export class TaiLieuDinhKemGiayMiemGiamVo {
	constructor(
		public Id: number = 0,
		public Ma: string = null,
		public Ten: string = null,
		public TenGuid: string = null,
		public DuongDan: string = null,
		public MoTa: string = null,
		public KichThuoc: number = 0,
		public LoaiTapTin: LoaiTapTin = null
	) { }
}

export class ApDungMiemGiamThem {
	constructor(
		public ChietKhauTheoTiLe: boolean = false,
		public ChietKhauTheoSoTien: boolean = false,

		public SoTien: number = 0,
		public TiLe: number = 0,
		public GhiChu: string = null
	) { }
}

export class DanhSachMienGiamVo {
	constructor(
		public LoaiMienGiam: number = 0,

		public DoiTuongUuDaiId: number = null,
		public DoiTuongUuDai: string = null,
		public TheVoucherId: number = null,
		public MaTheVoucher: string = null,
		public LoaiChietKhau: number = 0,
		public SoTien: number = 0,
		public TiLe: number = 0,
		public SoTienMiemGiamTatCa: number = 0,
		public TongTienMiemGiam: number = 0,
		public DaSuDung: boolean = false
	) { }
}

export class TrangThaiThuTienBenhNhan {
	ThuTheoChiPhiNumber = 1;
	ThuTamUngNumber = 2;
	HoanUngNumber = 3;
	HoanThuNumber = 4;
	PhieuChiNumber = 5;

	// -------------------------------
	ThuTheoChiPhi = "Phiếu thu";
	ThuTamUng = "Tạm ứng";
	HoanUng = "Hoàn ứng";
	HoanThu = "Hoàn thu";
	PhieuChi = "Phiếu chi";
	Huy = "Đã hủy";
}

export class ThongTinHuyPhieu {
	constructor(
		public SoPhieu: number = null,
		public TenSoPhieu: string = null,
		public TenPhieuThuChi: string = null,
		public LoaiPhieuThuChiThuNgan: number = null,
		public ThuHoiPhieu: boolean = null,
		public LaPhieuChi: boolean = null,
		public NguoiThuHoiId: number = null,
		public TenNguoiThuHoi: string = null,
		public ThoiGianThuHoi: Date = null,
		public DaHoanUng: boolean = null,
		public LyDo: string = null,
		public KiemTraThuHoi: boolean = null,
		public TamUng: number = null,
		public ThuTienGoiDichVu: boolean = null,
	) { }
}

export class ThongTinSoPhieuDaThu {
	constructor(
		public SoPhieuId: number = null,
		public TenSoPhieu: string = null,
		public LoaiPhieu: string = null,
		public TinhTrang: string = null,
		public SoTien: number = null,
		public HinhThucThanhToan: string = null,
		public TienMat: number = null,
		public ChuyenKhoan: number = null,
		public Pos: number = null,
		public TongChiPhi: number = null,
		public CongNo: number = null,
		public BHYTThanhToan: number = null,
		public MienGiam: number = null,
		public BenhNhanThanhToan: number = null,
		public TamUng: number = null,
		public SoTienPhaiThuHoacChi: number = null,
		public LoaiPhieuThuChiThuNgan: number = null,
		public SoPhieu: string = null,
		public NgayThuStr: string = null,
		public NoiDungThu: string = null,
		public DaThuHoi: boolean = null,
		public DaHoanUng: boolean = null,
		public PhieuHoanUng: string = null,
		public NguoiThuHoi: string = null,
		public ConHanHuyPhieuThu: boolean = null,
		public LaPhieuChi: boolean = null,

		public NhanVienHuyPhieu: string = null,
		public NgayHuyStr: string = null,
		public ThuTienGoiDichVu: boolean = null,
		public DaChuyenVoNoiTru: boolean = null,
		public ChiPhiKhamChuaBenhVos: DanhSachChiPhiKhamChuaBenh[] = []
	) { }
}

export class ChiPhiKhamChuaBenhTrongGoiDichVuVo {
	constructor(
		public Id: number = 0,
		public STT: number = 0,
		public Nhom: string = null,
		public Ma: string = null,
		public TenDichVu: string = null,
		public LoaiGia: string = null,
		public Soluong: number = 0,

		public KiemTraBHYTXacNhan: boolean = false,
		public DuocHuongBHYT: boolean = false,
		public DanhSachCongNoChoThus: CongNoChoThu[] = [],

		public DonGia: number = 0,
		public ThanhTien: number = 0,
		public DonGiaBHYT: number = 0,
		public TiLeBaoHiemThanhToan: number = 0,
		public MucHuongBaoHiem: number = 0,
		public DonGiaBHYTThanhToan: number = 0,
		public BHYTThanhToan: number = 0,
		public SoTienPhaiTraLaiBenhNhan: number = 0,
		public CheckedDefault: boolean = null,
		public SoTienQuyetToan: number = null,

		public NoiThucHien: string = null

	) { }
}

export class ApDungKhuyenMaiBenhNhan {
	constructor(
		public YeuCauTiepNhanId: number = 0,
		public DsKhuyenMaiBenhNhans: DanhSachDichVuKhuyenMaiBenhNhan[] = []
	) { }
}

export class DanhSachDichVuKhuyenMaiBenhNhan {
	constructor(
		public Id: number = 0,
		public TenGoi: string = null,
		public DanhSachDichVuTrongGoiKhuyenMais: DanhSachDichVuTrongGoiKhuyenMai[] = []
	) { }
}

export class DanhSachChiPhiTrongGoi {
	constructor(public Id: number = 0, public DanhSachChiPhiKhamChuaBenhTrongGoiDichVus : ChiPhiKhamChuaBenhTrongGoiDichVuVo[] = []) { }
}

export class DanhSachDichVuTrongGoiKhuyenMai {
	constructor(
		public Id: number = 0,
		public DaChon: boolean = null,
		public LoaiNhom: string = null,
		public Nhom: string = null,
		public Ma: string = null,
		public TenDichVu: string = null,
		public LoaiGia: string = null,
		public Soluong: number = 0,
		public DonGia: number = 0,
		public DonGiaKM: number = 0,
		public GhiChu: string = null,
		public HanSuDung: Date = null,
		public HanSuDungDisplay: string = null,
		public ThanhTien: number = 0,
		public SoLuongDaDung: number = 0,
	) { }
}
