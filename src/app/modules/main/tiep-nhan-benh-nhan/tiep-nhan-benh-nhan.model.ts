import { GioiTinh } from 'src/app/shared/enum/common-type.enums';
import { CapHanhChinh } from 'src/app/shared/enum/common-type.enums';
import { VungDiaLy } from 'src/app/shared/enum/common-type.enums';
import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';
import { TinhTrangThe } from 'src/app/shared/enum/tinh-trang-the.enum';
export class TiepNhanBenhNhan {
}

export class DanhSachDichVuGoiChon {
    constructor(
        public TenChuongTrinh: string = null,
        public DichVuId: number = null,
        public YeuCauGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public SoLanKhamTrongYCTN: number = null,
        public SoLanKhamNgoaiYCTN: number = null,

        public DichVuKhamBenh: boolean = false,
        public DichVuKyThuat: boolean = false,
        public DichVuGiuongBenh: boolean = false,
        public IsFromMarketing: boolean = false,
    ) {
    }
}

export class DanhSachDichVuChonTrongLanPopup {
    constructor(
        public Id: number = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public YeuCauGoiDichVuId: number = null,
        public IsFromMarketing: boolean = false,
        public BenhNhanId: number = null,
        public DichVuId: number = null,
        public TenDichVu: string = null,
        public SoLan: number = null,
        public TenNhomDichVu: string = null,
        public SoLuongDungLanNay: number = null,
        public SoLuongConLai: number = null,
        public ThuocGoi: string = null,

        public TenGoi: string = null,

        public DonGia: number = null,
        public GiaSauChietKhau: number = null,
        public GiaSauChietKhauDisplay: string = null,
        public TrangThaiThanhToan: number = null,
        public TrangThaiThanhToanDisplay: string = null,
        public DaThanhToan: boolean = false,
        public KhongThem: boolean = false,
        public NhomGiaDichVuBenhVienId:number=null
    ) {
    }
}

export class DanhSachGoiChonTrongLanPopup {
    constructor(
        public ThuocGoi: string = null,
        public GiaSauChietKhau: number = null,
        public GiaSauChietKhauDisplay: string = null,
        public TrangThaiThanhToan: number = null,
        public TrangThaiThanhToanDisplay: string = null,
    ) {
    }
}

export class DanhSachGoiChon {
    constructor(
        public TenChuongTrinh: string = null,
        public TenGoiDichVu: string = null,
        public YeuCauGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public IsFromMarketing: boolean = false,
        public BenhNhanId: number = null,
        public DaThanhToan: boolean = false,
        public YeuCauTiepNhanId: number = null,
    ) {
    }
}

export class DichVuTrongGoiKhiThem {
    constructor(
        public TenChuongTrinh: string = null,
        public YeuCauGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public IsFromMarketing: boolean = false,
        public BenhNhanId: number = null,

        public TenDichVu: string = null,

        public Data: ChiDinhDichVuGridVo = null,
    ) {
    }
}

export class CheckDuSoLuongTonTrongGoi {
    constructor(
        public DichVuThem: ThemChiDinhDichVu = null,
        public DanhSachDichVuChonTrongLanPopup: Array<DanhSachDichVuChonTrongLanPopup> = null,
    ) {
    }
}

export class ChiTietGoiDichVuChiDinhTheoBenhNhan {
    constructor(
        public Id: string = null,
        public YeuCauGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuChiTietId: number = null,
        public DichVuBenhVienId: number = null,
        public TenDichVu: string = null,
        public NhomGoiDichVu: number = null,
        public SoLuongSuDung: number = null,
        public IsActive: boolean = false
    ) { }
}

export class TiepNhanBenhNhanViewModel {
    constructor(
        public DisableCoMienGiam: boolean = false,
        public DisableDoiTuongUuDai: boolean = false,

        public SoTienConLai: number = null,
        public DanTocId: number = 1,

        public LoaiMienGiam: number = 1,
        public LstVoucherId: number[] = [],
        public LstMaVoucher: string[] = [],

        public BenhNhanId: number = null,
        //update v2
        public BHYTNgayHieuLuc: Date = null,
        public BHYTCoQuanBHXH: string = null,
        public BHYTNgayHetHan: Date = null,
        public NgayThangNamSinh: Date = null,
        public NgayThangNamSinhDisplay: string = null,
        public BHYTMucHuong: number = null,
        public BHYTNgayDu5Nam: Date = null,
        public GioiTinhDisplay: string = null,
        public BHYTDiaChi: string = null,
        public NoiDangKyBHYT: string = null,
        public BHYTMaSoThe: string = null,
        public BHYTDuocMienCungChiTra: boolean = false,
        public BHYTGiayMienCungChiTraId: number = null,
        public BHYTGiayMienCungChiTra: GiayMienCungChiTraViewModel = null,
        public BHYTNgayDuocMienCungChiTra: Date = null,
        public BHYTMaDKBD: string = null,
        public CoBHYT: boolean = false,
        public LyDoVaoVien: number = null,
        public LyDoTiepNhanId: number = 1,
        public LyDoTiepNhanText: string = null,
        public DuocChuyenVien: boolean = null,
        public SoChuyenTuyen: string = null,
        public TuyenChuyen: number = null,
        public NoiChuyenId: number = null,
        public LyDoChuyen: string = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public SoChungMinhThu: string = null,
        public GioiTinh: number = 1,
        public NgheNghiepId: number = null,
        public QuocTichId: number = 1,
        public TinhThanhId: number = null,
        public QuanHuyenId: number = null,
        public PhuongXaId: number = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public NoiLamViec: string = null,
        public DuocUuDai: boolean = false,
        public DoiTuongUuDaiId: number = null,
        public DoiTuongUuDai: DoiTuongUuDaiViewModel = null,
        public CongTyUuDaiId: number = null,
        public CongTyUuDai: CongTyUuDaiViewModel = null,
        public CoBHTN: boolean = null,
        // public BHTNCongTyBaoHiemId: number = null,
        // public BHTNCongTyBaoHiem: CongTyBaoHiemTuNhanViewModel = null,
        // public BHTNMaSoThe: string = null,
        // public BHTNNgayHieuLuc: Date = null,
        // public BHTNNgayHetHan: Date = null,
        // public BHTNSoDienThoai: string = null,
        // public BHTNDiaChi: string = null,
        public BaoHiemTuNhans: BaoHiemTuNhanViewModel[] = [],
        public LoaiYeuCauTiepNhan: number = 1,
        public ThoiDiemTiepNhan: Date = null,
        public HinhThucDenId: number = 1,
        public NoiGioiThieuId: number = 1,
        public NguoiGioiThieuId: number = null,
        public NguoiGioiThieu: NguoiGioiThieuViewModel = null,
        public NoiGioiThieu: NoiGioiThieuViewModel = null,
        public TrieuChungTiepNhan: string = null,
        public YeuCauKhamBenhs: YeuCauKhamBenhTiepNhanViewModel[] = [],
        public YeuCauKhamBenhGrid: ChiDinhDichVuGridVo[] = [],
        public YeuCauKhacGrid: ChiDinhDichVuGridVo[] = [],
        public YeuCauDichVuKyThuats: YeuCauKhamBenhTiepNhanViewModel[] = [],
        public YeuCauKyThuatGrid: ChiDinhDichVuGridVo[] = [],
        public YeuCauVatTuBenhViens: YeuCauKhamBenhTiepNhanViewModel[] = [],
        public YeuCauDuocPhamBenhViens: YeuCauDuocPhamBenhVienTiepNhanViewModel[] = [],

        public HoSoYeuCauTiepNhans: HoSoYeuCauTiepNhanViewModel[] = [],

        //người liên hệ
        public NguoiLienHeHoTen: string = null,
        public NguoiLienHeQuanHeNhanThanId: number = null,
        public NguoiLienHeSoDienThoai: string = null,
        public NguoiLienHeEmail: string = null,
        public NguoiLienHeDiaChi: string = null,
        public NguoiLienHePhuongXaId: number = null,
        public NguoiLienHeQuanHuyenId: number = null,
        public NguoiLienHeTinhThanhId: number = null,
        //người liên hệ

        //update v2

        public LoaiKham: number = 1,
        public ThoiGianTiepNhan: Date = new Date(),
        public LaTaiKham: boolean = false,
        public LyDoKhamBenhId: number = null,
        public PhongKhamId: number = null,
        public PhongKhamVaBacSiId: string = null,
        public KhoaKhamId: number = null,
        public GiayChuyenVienId: number = null,
        public ThoiGianChuyenVien: Date = null,
        public DoiTuongUuTienKhamChuaBenhId: number = null,
        public LaKhamTheoYeuCau: boolean = false,

        //public gtTheTu: string=null,
        //public gtTheDen: string=null,
        //public maKV: string=null,
        //public ngayDu5Nam: string=null,
        //public maSoBHXH: string=null,
        //public maTheCu: string=null,
        //public maTheMoi: string=null,
        //public gtTheTuMoi: string=null,
        //public gtTheDenMoi: string=null,

        //Thong tin bao hiem y te
        public MaDKBD: string = null,
        public NgayCoHieuLucDisplay: string = null,
        public NgayHetHieuLucDisplay: string = null,
        public NgayDu5NamDisplay: string = null,
        public DiaChiDisplay: string = null,
        public cqBHXH: string = null,
        //

        public BenhNhan: BenhNhanTiepNhanBenhNhanViewModel = null,
        public LyDoKhamBenh: LyDoKhamBenhBenhNhanViewModel = null,
        public PhongKham: PhongNgoaiTruBenhNhanViewModel = null,
        public GiayChuyenVien: GiayChuyenVienBenhNhanViewModel = null,
        public DoiTuongUuTienKhamChuaBenh: DoiTuongUuTienKhamChuaBenhBenhNhanViewModel = null,

        public LyDoKhamModelText: string = null,
        public KhoaKhamModelText: string = null,
        public PhongKhamModelText: string = null,
        public DoiTuongUuTienModelText: string = null,

        public isOutOfDate: boolean = false,
        public IsCheckedBHYT: boolean = true,
        public TinhTrangThe: TinhTrangThe = 3,

        public LoaiVoucher: number = null,

        public GridLichSuKCB: GridLichSuKCB[] = [],
        public GridLichSuKiemTraTheBHYT: GridLichSuKiemTraTheBHYT[] = [],
        public TuNhap: boolean = false,

        //update 21/08/2020
        public MaBN: string = null,
        public MaYeuCauTiepNhan: string = null,
        // update CheckYeuCauTiepNhanTaoMoi
        public CheckYeuCauTiepNhanTaoMoi: boolean = false,
        public CoYeuCauGoiDichVu: boolean = null,

        // cập nhật điều kiện cho phép tạo mới YCTN
        public MessageKhongChoPhepTaoMoiYCTN: string = null,

        // biến tạm lưu mess check thẻ BHYT từ cổng
        public MessageErrFromBHYT: string = null,
        public BieuHienLamSang:string = null,
        public DichTeSarsCoV2:string = null,


        //BVHD-3800
        public LaCapCuu: boolean = null
    ) {
    }
}

export class BenhNhanTiepNhanBenhNhanViewModel {
    constructor(
        public CoBHYT: boolean = null,
        //update v2
        public BHYTDuocMienCungChiTra: boolean = null,
        public BHYTGiayMienCungChiTraId: number = null,
        public BHYTGiayMienCungChiTra: GiayMienCungChiTraViewModel = null,
        public BHYTNgayDuocMienCungChiTra: Date = null,
        public CoBHTN: boolean = null,
        // public BHTNCongTyBaoHiemId: number = null,
        // public BHTNCongTyBaoHiem: CongTyBaoHiemTuNhanViewModel = null,
        // public BHTNMaSoThe: string = null,
        // public BHTNNgayHieuLuc: Date = null,
        // public BHTNNgayHetHan: Date = null,
        // public BHTNSoDienThoai: string = null,
        // public BHTNDiaChi: string = null,
        public BaoHiemTuNhans: BaoHiemTuNhanViewModel[] = [],
        //update v2
        public BHYTMaSoThe: string = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public NgayThangNamSinh: Date = null,

        public NgayThangNamSinhDisplay: string = null,

        public GioiTinh: GioiTinh = null,
        public GioiTinhDisplay: string = null,
        public BHYTNoiDangKyId: number = null,
        public NoiDangKyBHYT: string = null,
        public BHYTDiaChi: string = null,

        public BHYTNgayHieuLuc: Date = new Date,
        public BHYTNgayHetHan: Date = new Date,


        //Thong tin bo sung
        public SoChungMinhThu: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public DanTocId: number = null,
        public QuocTichId: number = null,
        public TinhThanhId: number = null,
        public QuanHuyenId: number = null,
        public PhuongXaId: number = null,
        public DiaChi: string = null,
        public NgheNghiepId: number = null,
        public NoiLamViec: string = null,

        public NguoiLienHeHoTen: string = null,
        public NguoiLienHeQuanHeNhanThanId: number = null,
        public NguoiLienHeSoDienThoai: string = null,
        public NguoiLienHeEmail: string = null,

        public DanTocModelText: string = null,
        public QuocTichModelText: string = null,
        public TinhThanhModelText: string = null,
        public QuanHuyenModelText: string = null,

        public PhuongXaModelText: string = null,
        public NgheNghiepModelText: string = null,
        public NguoiLienHeThanNhanModelText: string = null,

        public BHYTCoQuanBHXH: string = null,
        public BHYTNgayDu5Nam: Date = null,
        public BHYTNgayDu5NamDisplay: string = null,
        public BHYTMaDKBD: string = null,
        public MaBN: string = null,
    ) {
    }
}

export class BaoHiemTuNhanViewModel {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public BHTNCongTyBaoHiemId: number = null,
        public CongTyDisplay: string = null,
        public BHTNMaSoThe: string = null,
        public BHTNNgayHieuLuc: Date = null,
        public BHTNNgayHetHan: Date = null,
        public BHTNSoDienThoai: string = null,
        public BHTNDiaChi: string = null,
    ) {
    }
}

export class DonViHanhChinhBenhNhanViewModel {
    constructor(
        public Ten: string = null,
        public CapHanhChinh: CapHanhChinh = null,
        public TenDonViHanhChinh: number = null,
        public VungDiaLy: VungDiaLy = null,
        public TenVietTat: string = null,
    ) {
    }
}

export class GridLichSuKCB {
    constructor(
        public Id: number = 0,
        public STT: number = null,
        public MaTheBHYT: string = null,
        public HoVaTen: string = null,
        public NgayVaoVien: string = null,
        public NgayRaVien: string = null,
        public CoSoKCB: string = null,
        public MaCoSoKCB: string = null,

        public KetQuaDieuTri: string = null,
        public KetQuaDieuTriNumber: number = null,

        public LyDoVaoVien: string = null,
        public LyDoVaoVienNumber: number = null,

        public TinhTrangRaVien: string = null,
        public TinhTrangRaVienNumber: number = null,

        public NgayVaoDateTime: Date = null,
        public NgayRaDateTime: Date = null,
    ) {
    }
}

export class GridLichSuKiemTraTheBHYT {
    constructor(
        public Id: number = 0,
        public STT: number = null,

        public UserKiemTra: string = null,

        public TenCSKCB: string = null,
        public MaCSKCB: string = null,

        public ThoiGianKiemTra: string = null,
        public NoiDungThongBao: string = null,

        public thoiGianKTDateTime: Date = null,
    ) {
    }
}

export class LyDoKhamBenhBenhNhanViewModel {
    constructor(
        public Ten: string = null,
        public TenVietTat: string = null,
        public MoTa: string = null,
        public IsDisabled: boolean = null,
    ) {
    }
}

export class PhongNgoaiTruBenhNhanViewModel {
    constructor(
        public KhoaPhongId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public IsDisabled: boolean = null,
    ) {
    }
}

export class GiayChuyenVienBenhNhanViewModel {
    constructor(
        public Id: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public KichThuoc: number = null,
        public DuongDan: string = null,
        public MoTa: string = null,
        public LoaiTapTin: LoaiTapTin = null,
    ) {
    }
}

export class GiayMienCungChiTraViewModel {
    constructor(
        public Id: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public KichThuoc: number = null,
        public DuongDan: string = null,
        public MoTa: string = null,
        public LoaiTapTin: LoaiTapTin = null,
    ) {
    }
}

export class ThemTaiLieuDinhKem {
    constructor(
        public LoaiId: number = null,
        public MoTa: string = null,
        public TaiLieu: TaiLieuModel = null,
    ) {
    }
}

export class TaiLieuModel {
    constructor(
        public Id: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public KichThuoc: number = null,
        public DuongDan: string = null,
        public MoTa: string = null,
        public LoaiTapTin: LoaiTapTin = null,
        public DuongDanTmp: string = null,
    ) {
    }
}


export class HoSoYeuCauTiepNhanViewModel {
    constructor(
        public Id: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public KichThuoc: number = null,
        public DuongDan: string = null,
        public DuongDanTmp: string = null,
        public MoTa: string = null,
        public LoaiTapTin: LoaiTapTin = null,

        public LoaiHoSoYeuCauTiepNhanId: number = null,
        public YeuCauTiepNhanId: number = null,
        public LoaiDisplay: string = null,

        public AddNew: boolean = false,
    ) {
    }
}


export class DoiTuongUuTienKhamChuaBenhBenhNhanViewModel {
    constructor(
        public Ten: string = null,
        public TenVietTat: string = null,
        public ThuTuUuTien: number = null,
        public MoTa: string = null,
        public IsDisabled: boolean = null,

    ) {
    }
}

export class DoiTuongUuDaiViewModel {
    constructor(
        public Ten: string = null,
        public TiLeUuDai: number = null,
        public MoTa: string = null,
        public IsDisabled: boolean = null,
    ) {
    }
}

export class CongTyUuDaiViewModel {
    constructor(
        public Ten: string = null,
        public MoTa: string = null,
        public IsDisabled: boolean = null,
    ) {
    }
}

export class NoiGioiThieuViewModel {
    constructor(
        public Ten: string = null,
        public MoTa: string = null,
        public IsDisabled: boolean = null,
    ) {
    }
}

export class NguoiGioiThieuViewModel {
    constructor(
        public HoTen: string = null,
        public HoTenNguoiQuanLy: string = null,
        public Id: number = null,
        public NhanVienQuanLyId: number = null,
        public SoDienThoai: string = null,
    ) { }
}

export class CongTyBaoHiemTuNhanViewModel {
    constructor(
        public Ma: string = null,
        public Ten: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public GhiChu: string = null,
        public HinhThucBaoHiem: number = null,
        public PhamViBaoHiem: number = null,
    ) {
    }
}

export class YeuCauKhamBenhTiepNhanViewModel {
    constructor(
        public NhomGiaDichVuKhamBenhBenhVienId: number = null,
        public YeuCauTiepNhanId: number = null,
        public DichVuKhamBenhBenhVienId: number = null,
        public YeuCauKhamBenhTruocId: number = null,
        public MaDichVu: string = null
    ) {
    }
}


export class YeuCauDichVuKyThuatTiepNhanViewModel {
    constructor(
        public NhomGiaDichVuKhamBenhBenhVienId: number = null,
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public LoaiDichVuKyThuat: number = null,
        public DichVuKyThuatBenhVienId: number = null,
        public MaDichVu: string = null
    ) {
    }
}

export class YeuCauVatTuBenhVienTiepNhanViewModel {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public YeuCauDichVuKyThuatId: number = null,
        public VatTuBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null
    ) {
    }
}

export class YeuCauDuocPhamBenhVienTiepNhanViewModel {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public YeuCauDichVuKyThuatId: number = null,
        public DuocPhamBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null
    ) {
    }
}


export class ThemChiDinhDichVu {
    constructor(
        public MaDichVuId: number = null,
        public MaDichVuGoiId: number = null,
        public LoaiGiaId: number =  null,
        public NoiThucHienId: number = null,
        public SoLuong: number = 1,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public BHYTMucHuong: number = null,
        public DoiTuongUuDaiId: number = null,
        public DuocHuongBHYT: boolean = true,
        // public LoaiDichVuKhac: number = 1,
        public LaGoi: boolean = false,

        public yeuCauTiepNhanId: number = null,

        public benhNhanId: number = null,
        public chuongTrinhGoiDichVuId: number = null,
        public TenNhomDichVu: string = null,
        public YeuCauGoiDichVuId: number = null,
        public ThuocGoi: string = null,
        public isCheckRowItem :boolean = true,
        public ListDichVuCheckTruocDos :ListDichVuCheckTruocDo[] = []
    ) {
    }
}

export class ThemChiDinhDichVuKyThuat {
    constructor(
        public MaDichVuId: number = null,
        public LoaiGiaId: number = 1,
        public NoiThucHienId: number = null,
        public SoLuong: number = 1,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public DoiTuongUuDaiId: number = null,

        public yeuCauTiepNhanId: number = null,
    ) {
    }
}

export class DiaChiBHYT {
    constructor(
        public TinhThanh: string = null,
        public TinhThanhId: number = null,
        public QuanHuyen: string = null,
        public QuanHuyenId: number = null,
        public PhuongXa: string = null,
        public PhuongXaId: number = null,
    ) {
    }
}


export class ThemBaoHiemTuNhan {
    constructor(
        public Id: number = null,
        public CongTyBaoHiemTuNhanId: number = null,
        public MaSoThe: string = null,
        public NgayHieuLuc: Date = null,
        public NgayHetHan: Date = null,
        public SoDienThoai: string = null,
        public DiaChi: string = null,
        //public STT: number = null,
    ) {
    }
}

export class ThemBaoHiemTuNhanGridVo {
    constructor(
        public Id: number = null,
        public STT: number = null,
        public CongTyBaoHiemTuNhanId: number = null,
        public CongTyDisplay: string = null,
        public MaSoThe: string = null,
        public NgayHieuLuc: Date = null,
        public NgayHieuLucDisplay: string = null,
        public NgayHetHan: Date = null,
        public NgayHetHanDisplay: string = null,
        public SoDienThoai: string = null,
        public DiaChi: string = null,
    ) {
    }
}


export class GetDonGiaVo {
    constructor(
        public DichVuKhamBenhBenhVienId: number = null,
        public NhomGiaDichVuKhamBenhBenhVienId: number = null,

        public IsCheckValidDonGia: boolean = null
    ) {
    }
}

export class AddGoiForUpdateView {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public MucHuong: number = null,
        public LstGrid: ChiDinhDichVuGridVo[] = [],
    ) {
    }
}

export class ChiDinhDichVuGridVo {
    constructor(
        public TinhTrangDisplay: string = null,
        public IsDontHavePermissionChangeNoiThucHien: boolean = null,
        public CoGiaBHYT: boolean = null,
        public STT: number = null,
        public Id: number = null,
        public MaDichVuId: number = null,
        public Ma: string = null,
        public TenDichVu: string = null,
        public LoaiGia: string = null,
        public LoaiGiaId: number = null,
        public SoLuong: number = 1,
        public DonGiaDisplay: string = null,
        public DonGia: number = null,
        public DonGiaSauChietKhau: number = null,
        public ThanhTienDisplay: string = null,
        public ThanhTien: number = null,
        public ThanhTienSauChietKhau: number = null,
        public BHYTThanhToanDisplay: string = null,
        public TLMGDisplay: string = null,
        public TLMG: number = null,
        public SoTienMGDisplay: string = null,
        public SoTienMG: number = null,
        public BnThanhToanDisplay: string = null,
        public BnThanhToan: number = null,
        public NoiThucHienDisplay: string = null,
        public BHYTThanhToan: number = null,
        public BHYTThanhToanChuaBaoGomMucHuong: number = null,
        public Nhom: string = null,
        public NhomId: number = null,
        public LoaiDichVuKhac: number = null,
        public IsHaveNoiThucHien: boolean = null,
        public NoiThucHienId: string = null,
        public DuocHuongBHYT: boolean = null,

        public DuocHuongBHYTPopup: boolean = null,

        //Goi co chiet khau
        public IsGoiCoChietKhau: boolean = false,
        public GoiCoChietKhauId: number = null,
        public TenGoiChietKhau: string = null,

        public TyLeChietKhau: number = null,
        public TyLeChietKhauDisplay: string = null,
        public DuocGiamTrongGoi: number = null,
        public ThanhTienTrongGoi: number = null,
        public TongChiPhiGoi: number = null,

        public KhoaPhongId: number = null,

        public GiaBHYT: number = null,
        public TiLeBaoHiemThanhToan: number = null,

        public NoiThucHienModelText: string = null,

        //Thach
        public CongNo: number = null,
        public SoTienMienGiam: number = null,

        public ChuongTrinhGoiDichVuId: number = null,
        //nam
        public isCheckValueRowItemCuoiCung :boolean = null,
        public isCheckRowItem :boolean = null,

        //BVHD-3825
        public YeuCauGoiDichVuKhuyenMaiId: number = null,
    ) {
    }
}

export class ChiDinhDichVuKyThuatGridVo {
    constructor(
        public MaDichVuId: number = null,
        public Ma: string = null,
        public TenDichVu: string = null,
        public SoLuong: number = 1,
        public DonGiaDisplay: string = null,
        public DonGia: number = null,
        public ThanhTienDisplay: string = null,
        public ThanhTien: number = null,
        public BHYTThanhToanDisplay: string = null,
        public TLMGDisplay: string = null,
        public TLMG: number = null,
        public SoTienMGDisplay: string = null,
        public SoTienMG: number = null,
        public BnThanhToanDisplay: string = null,
        public BnThanhToan: number = null,
        public NoiThucHienDisplay: string = null,
        public Nhom: string = null,
        public LoaiGia: string = null,
        public LoaiGiaId: number = null,
        public NoiThucHienId: string = null,

        public KhoaPhongId: number = null,

        public GiaBHYT: number = null,
        public TiLeBaoHiemThanhToan: number = null,
        public DuocHuongBHYT: boolean = null,
    ) {
    }
}

export class TimKiemBenhNhanGridVo {
    constructor(
        public MaBN: string = null,
        public MaBHYT: string = null,
        public BHYTMaSoThe: string = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public NgaySinhDisplay: any = null,
        public GioiTinh: number = null,
        public GioiTinhDisplay: string = null,
        public SoChungMinhThu: string = null,
        public SoDienThoai: string = null,
        public DiaChi: string = null,
        public Id: number = 0,
        public STT: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public NgaySinhFormat: any = null,
    ) {
    }
}

export class TimKiemBenhNhanSearch {
    constructor(
        public MaBenhNhan: string = null,
        public MaBHYT: string = null,
        public HoTen: string = null,
        public NgaySinh: string = null,
        public NgaySinhFormat: Date = null,
        public CMND: string = null,
        public DienThoai: string = null,
        public DiaChi: string = null,
    ) { }
}

export class DataTimKiem {
    constructor(
        public searchBenhNhan: TimKiemBenhNhanGridVo = null,
        public data: TimKiemBenhNhanGridVo[] = [],
    ) { }
}

export class TimKiemBenhNhanPopup {
    constructor(
        public searchPopup: TimKiemBenhNhanSearch = null,
        public searchBenhNhan: TimKiemBenhNhanGridVo = null,
    ) { }
}


export class GridUpdate {
    constructor(
        public tuNhap: boolean = null,
        public model: TiepNhanBenhNhanViewModel = null,
        public isChecked: boolean = null,
        public maDichVuId: number = null,
        public nhom: string = null,
        public yeuCauTiepNhanId: number = null,
        public mucHuong: number = null,

        public NoiThucHienId: string = null,

        public HoTen: string = null,
        public NgaySinh: Date = null,

        public lstChiDinhDichVu: ListChiDinhNeedUpdate[] = [],

        // cập nhật hủy dịch vụ đã hủy thanh toán
        public LyDoHuyDichVu: string = null,
        public ListDichVuCheckTruocDos : ListDichVuCheckTruocDo[] = []
    ) { }
}

export class ListChiDinhNeedUpdate {
    constructor(
        public Nhom: string = null,
        public DichVuId: number = null,
    ) { }
}

export class DefaultValueTNBNModel {
    constructor(
        public DanTocId: number = null,
        public HinhThucDenId: number = null,
        public LyDoTiepNhanId: number = null,
        public QuocTichId: number = null,
        public TinhThanhPhoId: number = null,
    ) { }
}

export class ListDichVuCheckTruocDo {
    constructor(
        public Id: number = null,
        public NhomId: number = null,
    ) { }
}

export class XetNghiemCovid {
    constructor(
        public BieuHienLamSang: string = null,
        public DichTeSarsCoV2: string = null,
        public LoaiBenhPham: string = null,
    ) { }
}

export class DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham {
    constructor(
        public Ids: any[] = [],
        public LoaiMauXetNghiem: number = null,
        public LoaiMauXetNghiemText: string = null,
    ) { }
}
