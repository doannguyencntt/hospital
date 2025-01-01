import { DateTime } from 'luxon';
import { GioiTinh, LoaiTapTin } from 'src/app/shared/enum/common-type.enums';
import { ComponentDynamic } from 'src/app/shared/models/component-dynamic.model';
import { LoaiHangDoi, TrangThaiHangDoi, TrangThaiYeuCauKhamBenh, TrangThaiYeuCauDichVuKyThuat } from 'src/app/shared/enum/kham-benh.enum';
import { HinhThucKhamBenh } from 'src/app/shared/enum/kham-doan.enum';
export class DanhSachChoKhamSearch {
    constructor(
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public PhongBenhVienId: number = 0,
        public FromDate: any = null,
        public ToDate: any = null
    ) { }
}
export class DanhSachDaKhamSearch {
    constructor(
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public NoiTiepNhanId: number = 0,
        public FromDate: any = null,
        public ToDate: any = null,
        public LaKhamDoan: boolean = false,
        public CongTyId: number = null,
        public HopDongId: number = null,
        public IsKhamDoanTatCa: boolean = false
    ) { }
}
export class KhamBenhs {
    constructor(
        public LyDoKham: string = null,
        public ChuanDoanBanDau: string = null,
        public TrieuChungLamSang: string = null,
        public ThongTinKhamTheoKhoa: string = null,
        public GhiChuTrieuChungLamSang: string = null
    ) { }
}
export class ThongTinKham {
    constructor(
        public ThongTinKhamTheoKhoas: thongTinKhamTheoKhoas[] = null

    ) { }
}
export class TrieuChungLamSang {
    constructor(
        public Value: string = null,

    ) { }
}
export class ChuanDoanBanDau {
    constructor(
        public Value: string = null,

    ) { }
}
export class thongTinKhamTheoKhoas {
    constructor(
        public Id: string = null,
        public Value: string = null,
    ) { }
}
export class BenhVienHangDoi {
    constructor(
        public Id: number = 0,
        public PhongBenhVienId: number = null,
        public YeuCauTiepNhanId: number = null,
        public YeuCauTiepNhan: YeuCauTiepNhan = null,
        public YeuCauKhamBenhId: number = null,
        public YeuCauKhamBenh: YeuCauKhamBenh = null,
        public YeuCauDichVuKyThuatId: number = null,
        public LoaiHangDoi: LoaiHangDoi = null, /// enum
        public TrangThai: TrangThaiHangDoi = null, // enum
        public SoThuTu: number = null,
        public isShowPanelItemKhamBenh: boolean = false,
        public isExpandPanelItemKhamBenh: boolean = false,
        public isShowPanelItemKetLuan: boolean = false,
        public isExpandPanelItemKetLuan: boolean = false,
        public validationErrors: any = null,

        //dich vu khuyen mai
        public CoDichVuKhuyenMai: boolean = false,

        //gói dịch vụ marketing
        public GoiDichVus: Array<any> = [],

        //BVHD-3574
        public LaChuyenKhoaKhamNhieuKhamBenhDangKham: boolean = false,
        public LaDichVuKhamNhieu: boolean = false
    ) { }
}


export class PhieuKhamBenhVo {
    constructor(
        public YeuCauKhamBenhId: number = null,
        public CoKhamBenh: boolean = false,
        public CoKhamBenhVaoVien: boolean = false,
        public CoHeader: boolean = false,
    ) { }
}



export class DanToc {
    constructor(
        public Id: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public QuocGiaId: number = null,
        public IsDisabled: boolean = null
    ) { }
}
export class NgheNghiep {
    constructor(
        public Id: number = null,
        public Ten: string = null,
        public TenVietTat: string = null,
        public MoTa: string = null,
        public IsDisabled: boolean = null
    ) { }
}

export class YeuCauTiepNhan {
    constructor(
        public Id: number = null,
        public BenhNhanId: number = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public NgaySinhDisplay: string = null,
        public Tuoi: number = null,
        public SoChungMinhThu: string = null,
        public GioiTinh: GioiTinh = null,
        public TenGioiTinh: string = null,
        public NhomMau: number = null,
        public NgheNghiepId: number = null,
        public NgheNghiep: NgheNghiep = null,
        public NoiLamViec: string = null,
        public QuocTichId: number = null,
        public DanTocId: number = null,
        public DanToc: DanToc = null,
        public DiaChi: string = null,
        public DiaChiDisplay: string = null,
        public PhuongXaId: number = null,
        public QuanHuyenId: number = null,
        public TinhThanhId: number = null,
        public SoDienThoai: string = null,
        public SoDienThoaiDisplay: string = null,
        public Email: string = null,
        public NoiGioiThieuId: number = null,
        public HinhThucDenId: number = null,
        public DuocUuDai: boolean = null,
        public DoiTuongUuDaiId: number = null,
        public CongTyUuDaiId: number = null,
        public NguoiLienHeHoTen: string = null,
        public NguoiLienHeQuanHeNhanThanId: number = null,
        public NguoiLienHeSoDienThoai: string = null,
        public NguoiLienHeEmail: string = null,
        public NguoiLienHeDiaChi: string = null,
        public NguoiLienHePhuongXaId: number = null,
        public NguoiLienHeQuanHuyenId: number = null,
        public NguoiLienHeTinhThanhId: number = null,
        public CoBHYT: boolean = null,
        public BHYTMaSoThe: string = null,
        public BHYTMucHuong: number = null,
        public BHYTMaDKBD: string = null,
        public BHYTNgayHieuLuc: Date = null,
        public BHYTNgayHetHan: Date = null,
        public BHYTThoiGianHieuLucDisplay: string = null,
        public IsBHYTHetHan: boolean = null,
        public BHYTDiaChi: string = null,
        public BHYTCoQuanBHXH: string = null,
        public BHYTNgayDu5Nam: Date = null,
        public BHYTNgayDuocMienCungChiTra: Date = null,
        public BHYTMaKhuVuc: string = null,
        public BHYTDuocMienCungChiTra: boolean = null,
        public BHYTGiayMienCungChiTraId: number = null,
        public CoBHTN: boolean = null,
        // public BHTNCongTyBaoHiemId: number = null,
        public TenDichVu: string = null,

        public TenNoiThucHien: string = null,
        // public BHTNNgayHieuLuc: Date = null,
        // public BHTNNgayHetHan: Date = null,
        public CoTaiKham: boolean = null,
        public LoaiYeuCauTiepNhan: number = null,
        public MaYeuCauTiepNhan: string = null,
        public ThoiDiemTiepNhan: Date = null,
        public ThoiDiemTiepNhanDisplay: string = null,
        public NhanVienTiepNhanId: number = null,
        public NoiTiepNhanId: number = null,
        public LyDoVaoVien: number = null,
        public TenLyDoVaoVien: string = null,
        public LaTaiKham: boolean = null,
        public TrieuChungTiepNhan: string = null,
        public LoaiTaiNan: number = null,
        public DuocChuyenVien: boolean = null,
        public GiayChuyenVienId: number = null,
        public ThoiGianChuyenVien: Date = null,
        public NoiChuyenId: number = null,
        public SoChuyenTuyen: string = null,
        public TuyenChuyen: number = null,
        public LyDoChuyen: number = null,
        public DoiTuongUuTienKhamChuaBenhId: number = null,
        public KetQuaDieuTri: number = null,
        public TinhTrangRaVien: number = null,
        public KetQuaSinhHieus: KetQuaSinhHieu[] = [],
        public BenhNhan: KhamBenhBenhNhan = null,
        public BenhVienHienTai: BenhVienHienTai = null,
        public NhanVienTiepNhan: NhanVienTiepNhan = null,

        public TenLyDoTiepNhan: string = null,
        public TenCongTy: string = null,
        public KSKPhanLoaiTheLuc: number = null,
        public HopDongKhamSucKhoeId: number = null,
        public HopDongKhamSucKhoeNhanVienId: number = null,
        public KSKKetQuaCanLamSang: string = null,
        public KSKDanhGiaCanLamSang: string = null,
        public KSKNhanVienDanhGiaCanLamSangId: number = null,
        public PhanLoaiSucKhoeId: number = null,
        public KSKKetLuanPhanLoaiSucKhoe: string = null,
        public KSKKetLuanGhiChu: string = null,
        public KSKKetLuanCacBenhTat: string = null,
        public KSKNhanVienKetLuanId: number = null,
        public KSKThoiDiemKetLuan: DateTime = null,
        public KetQuaKhamSucKhoeData: string = null,
        public IsKhamDoanTatCa: boolean = null,

        public ChuyenKhoaKhamSucKhoeChinhs: number[] = [],
        public IsDuChuyenKhoaKhamSucKhoeChinh: boolean = false,

        //BVHD-3547
        public TrangThaiTiepNhan: number = null,

        //BVHD-3800
        public LaCapCuu: boolean = null
    ) { }
}

export class NhanVienTiepNhan {
    constructor(
        public HoTen: string = null,
        public UserId: number = 0,
        public NgaySinh: string = null,
        public SoCMT: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Avatar: string = null,
        public GhiChu: string = null,
        public GioiTinh: boolean = false,
        public Email: string = null,
        public TextTenQuyenHan: string = null,
        public HocHamHocViId: number = 0,
        public TextTenHocHamHocVi: string = null,
        public PhamViHanhNgheId: number = 0,
        public TextTenPhamViHanhNghe: string = null,
        public ChucDanhId: number = 0,
        public TextTenChucDanh: string = null,
        public VanBangChuyenMonId: number = 0,
        public TextTenVanBangChuyenMon: string = null,
        public MaChungChiHanhNghe: string = null,
        public NgayCapChungChiHanhNghe: string = null,
        public NoiCapChungChiHanhNghe: string = null,
        public NgayKyHopDong: string = null,
        public NgayHetHopDong: string = null,
        public KhoaPhongIds: any = null,
        public KhoaPhongNhanViens: any = null,
        public Id: number = 0
    ) { }
}

export class YeuCauKhamBenh {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public DichVuKhamBenhBenhVienId: number = null,
        public NhomGiaDichVuKhamBenhBenhVienId: number = null,
        public YeuCauKhamBenhTruocId: number = null,
        public MaDichVu: string = null,
        public MaDichVuTT37: string = null,
        public TenDichVu: string = null,
        public Gia: number = null,
        public TiLeUuDai: number = null,
        public GhiChuTrieuChungLamSang: string = null,
        public GoiDichVuId: number = null,
        public YeuCauGoiDichVuId: number = null,
        public MoTa: string = null,
        public DuocHuongBaoHiem: boolean = false,
        public BaoHiemChiTra: boolean = null,
        public TiLeChietKhau: number = null,
        public TinhPhi: boolean = null,
        public ThoiDiemDuyetBaoHiem: Date = null,
        public NhanVienDuyetBaoHiemId: number = null,
        public GiaBaoHiemThanhToan: number = null,
        public TrangThai: number = null, // cập nhật lại enum
        public NhanVienChiDinhId: number = null,
        public NoiChiDinhId: number = null,
        public NoiThucHien: string = null,
        public ThoiDiemChiDinh: Date = new Date(),
        public NoiThanhToanId: number = null,
        public NhanVienThanhToanId: number = null,
        public ThoiDiemThanhToan: Date = null,
        public ThoiDiemDangKy: Date = new Date(),
        public NoiDangKyId: number = null,
        public BacSiDangKyId: number = null,
        public ThoiDiemThucHien: Date = null,
        public NoiThucHienId: number = null,
        public BenhSu: string = null,
        public ThongTinKhamTheoKhoa: string = null, // cần xóa bỏ
        public IcdchinhId: number = null,
        public TenICDChinh: string = null,
        public ICDPhuIds: Array<number> = null,
        public TenBenh: string = null,
        public NoiKetLuanId: number = null,
        public BacSiKetLuanId: number = null,
        public TenDichVuDisplay: string = null,
        public TenNoiDangKyThucHien: string = null,
        public TenLoaiGia: string = null,
        public ThoiDiemHoanThanh: Date = null,
        public KetQuaDieuTri: number = null, // cần cập nhật lại enum
        public TenKetQuaDieuTri: string = null,
        public TinhTrangRaVien: number = null, // cần cập nhật lại enum
        public TenTinhTrangRaVien: string = null,
        public HuongDieuTri: string = null,
        public NgayTaiKham: Date = null,
        public GhiChuTaiKham: string = null,
        public QuayLaiYeuCauKhamBenhTruoc: boolean = null,
        public YeuCauDichVuKyThuats: YeuCauDichVuKyThuat[] = [],
        public YeuCauKhamBenhDonThuocs: YeuCauKhamBenhDonThuoc[] = [],
        public YeuCauKhamBenhDonVTYTs: YeuCauKhamBenhDonVTYT[] = [],
        public YeuCauKhamBenhTrieuChungs: YeuCauKhamBenhTrieuChung[] = [],
        public YeuCauKhamBenhChuanDoans: YeuCauKhamBenhChuanDoan[] = [],
        public YeuCauKhamBenhICDKhacs: YeuCauKhamBenhICDKhac[] = [],

        public BacSiThucHienId: number = null,
        public CoTaiKham: boolean = null,
        public CoKhamChuyenKhoaTiepTheo: boolean = null,
        public CoKeToa: boolean = null,
        public CoNhapVien: boolean = null,
        public CoChuyenVien: boolean = null,
        public SoLuongs: number = 1,
        public DonGia: number = null,
        //Update 02/06/2020
        public GhiChuKhamChuyenKhoa: string = null,
        public TenBacSiDangKy: string = null,
        public KhoaPhongNhapVienId: number = null,
        public TenKhoaPhongNhapVien: string = null,
        public LyDoNhapVien: string = null,
        public BenhVienChuyenVienId: number = null,
        public TenBenhVienChuyenVien: string = null,
        public LyDoChuyenVien: string = null,
        public CoTuVong: boolean = null,
        public TenMucDo: string = null,
        public MucDoId: number = null,
        public CanNang: number = null,
        public TomTatKetQuaCLS: string = null,
        public GhiChuICDChinh: string = null,
        public CachGiaiQuyet: string = null,
        public GhiChu: string = null,
        public YeuCauKhamBenhTruoc: YeuCauKhamBenh = null,
        public YeuCauKhamBenhTiepTheo: YeuCauKhamBenh = null,
        public TrangThaiThanhToan: number = null,
        public CheckValidator: boolean = null,
        public ThanhTien: number = null,
        public BacSiNoiDangKyId: string = null,
        public KhamToanThan: string = null,

        public LoiDanCuaBacSi: string = null,
        public TuanHoan: string = null,
        public HoHap: string = null,
        public TieuHoa: string = null,
        public ThanTietNieuSinhDuc: string = null,
        public ThanKinh: string = null,
        public CoXuongKhop: string = null,
        public TaiMuiHong: string = null,
        public RangHamMat: string = null,
        public NoiTietDinhDuong: string = null,
        public SanPhuKhoa: string = null,
        public DaLieu: string = null,
        public ChanDoanSoBoICDId: number = 0,
        public TenChanDoanSoBoICD: string = null,
        public ChanDoanSoBoGhiChu: string = null,
        //update 23/06/2020
        public SoTienBaoHiemTuNhanChiTra: number = null,
        public SoTienMienGiam: number = null,
        public DichVuKyThuatId: number = null,
        public CoDieuTriNgoaiTru: boolean = null,
        public DieuTriNgoaiTru: boolean = null,
        public SoLanDieuTri: number = null,
        public ThoiGianDieuTri: Date = null,
        public ChanDoanCuaNoiGioiThieu: string = null,
        public YeuCauDichVuKyThuat: YeuCauDichVuKyThuatViewModel = null,
        //update 07/07/2020
        public TinhTrangBenhNhanChuyenVien: string = null,
        public LoaiLyDoChuyenVien: number = 0,
        public ThoiDiemChuyenVien: Date = null,
        public PhuongTienChuyenVien: string = null,
        public NhanVienHoTongChuyenVienId: number = null,
        public HoTenNhanVienHoTong: string = null,
        public KhongKeToa: boolean = null,
        public IsShowTextBoxLoiDan: boolean = false,

        public IsChangeKhamBenh: boolean = false,
        public IsChangeChanDoan: boolean = false,
        public IsChangePhauThuat: boolean = false,

        public CoInKeToa: boolean = null,

        public MucTranChiPhi: number = null,

        public NghiHuongBHXHTuNgay: Date = null,
        public NghiHuongBHXHDenNgay: Date = null,
        public NghiHuongBHXHNguoiInId: number = null,

        // data dạng ds
        public YeuCauKhamBenhKhamBoPhanKhacs: YeuCauKhamBenhKhamBoPhanKhac[] = [],
        public YeuCauKhamBenhChanDoanPhanBiets: YeuCauKhamBenhChanDoanPhanBiet[] = [],
        public YeuCauKhamBenhBoPhanTonThuongs: YeuCauKhamBenhBoPhanTonThuong[] = [],
        public YeuCauDichVuKyThuatPhauThuat: PhauThuatThuThuatTuongTrinh[] = [],

        // khám theo template
        public ThongTinKhamTheoDichVuTemplate: string = null,
        public ThongTinKhamTheoDichVuTemplateObj: any = null,
        public ThongTinKhamTheoDichVuData: string = null,
        public LaThamVan: boolean = null,

        public SoDuTaiKhoan: number = null,
        public SoDuTaiKhoanDisplay: string = null,
        public SoDuTaiKhoanConLai: number = null,
        public SoDuTaiKhoanConLaiDisplay: string = null,
        public LastModified: any = null,

        public PhongBenhVienHangDoiTruocId: number = null,
        public IsHoanThanhKham: boolean = false,
        public IsKhamBenhDangKham: boolean = false,
        public DichVuKhamBenhTuGoi: DichVuChiDinhTrungTuGoi = null,

        // khám đoàn
        public IsKhamDoan: boolean = false,
        public TemplateDichVuKhamSucKhoes: KhamBenhTemplateDichVuKhamSucKhoe[] = [],

        // cần xóa bỏ
        public LuaChonChiDinh: number = 1,
        public KhamBenh: KhamBenh = null,
        public IsShowGridVatTu: boolean = false,


        //
        public KSKPhanLoaiTheLucString: string = null,
        public GhiChuCanLamSang: string = null,

        // 01/11/2021
        //BVHD-3574
        public NoiDungMauKhamBenhId: number = null,
        public NoiDungKhamBenh: string = null,

        //BVHD-3706
        public TrieuChungTiepNhan: string = null,

        //BVHD 3772

        public KetQuaXetNghiemCLS: string = null,
        public PhuongPhapTrongDieuTri: string = null,

        //BVHD-3575
        public PhieuDieuTriId: number = null,
        public LaChiDinhTuNoiTru: boolean = null,
        public SoBenhAn: string = null

    ) { }
}

export class DichVuChiDinhTrungTuGoi {
    constructor(
        public Id: string = null,
        public YeuCauGoiDichVuId: number = null,
        public TenGoiDichVu: string = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuChiTietId: number = null,
        public DichVuBenhVienId: number = null,
        public TenDichVu: string = null,
        public NhomGoiDichVu: number = null,
        public SoLuongSuDung: number = 1
    ) { }
}

export class YeuCauKhamBenhKhamBoPhanKhac {
    constructor(
        public Id: number = 0,
        public Ten: string = null,
        public NoiDung: string = null,
        public YeuCauKhamBenhId: number = 0
    ) { }
}

export class YeuCauKhamBenhChanDoanPhanBiet {
    constructor(
        public Id: number = 0,
        public ICDId: number = null,
        public GhiChu: string = null,
        public YeuCauKhamBenhId: number = 0,
        public TenICD: string = null
    ) { }
}

export class KhamBenhTemplateKhamBenhTheoDichVu {
    constructor(
        public DichVuKhamBenhBenhVienId: number = 0,
        public Ten: string = null,
        public TieuDe: string = null,
        public ComponentDynamics: string = null
    ) { }
}

export class YeuCauKhamBenhTrieuChung {
    constructor(
        public YeuCauKhamBenhId: number = 0,
        public TrieuChungId: number = 0,
        public TrieuChung: TrieuChung = null
    ) { }
}

export class YeuCauKhamBenhChuanDoan {
    constructor(
        public YeuCauKhamBenhId: number = 0,
        public ChuanDoanId: number = 0,
        public ChuanDoan: ChuanDoan = null
    ) { }
}

export class TrieuChung {
    constructor(
        public DanhMucChuanDoanId: number = 0,
        public Ma: string = null,
        public TenTiengViet: string = null,
        public TenTiengAnh: string = null
    ) { }
}

export class ChuanDoan {
    constructor(
        public DanhMucChuanDoanId: number = 0,
        public Ma: string = null,
        public TenTiengViet: string = null,
        public TenTiengAnh: string = null
    ) { }
}

export class YeuCauKhamBenhICDKhac {
    constructor(
        public Id: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public ICDId: number = null,
        public GhiChu: string = null,
        public TenICD: string = null,

    ) { }
}

//thach-create
export class DuocPhamTonKhos {
    constructor(
        public Id: number = 0,
        public DVTId: number = 0,
        public DuongDungId: number = 0,
        public TenDonViTinh: string = null,
        public TenDuongDung: string = null,
        public TuongTacThuoc: string = null,
        public DiUngThuoc: string = null,
        public FlagDiUng: boolean = false,
        public FlagDichDaKe: boolean = false,
        public DichDaKe: string = null,
        public TonKho: number = 0,
        public TonKhoFormat: string = null,
        public DonGia: number = 0,
        public ThuocDaKe: string = null,
        public FlagThuocDaKe: boolean = false,
        public FlagTuongTac: boolean = false,
        public HSD: string = null,
        public MucDo: number = null,
        public MucDoDisplay: string = null,
        public DVT: string = null,
        public Ten: string = null,
        public HoatChat: string = null,
        public TheTich: number = null,
        public KhoId: number = null,
        public FlagThuocDaKeTrungKho: boolean = false,
        public FlagDichDaKeTrungKho: boolean = false,
        public KhuVuc: number = null,
        public CoNhapKhoDuocPhamChiTiet: boolean = null,

    ) { }
}

export class YeuCauDuocPhamChiDinh {
    constructor(
        public Id: number = 0,
        public TuongTacThuoc: string = null,
        public TenDuongDung: string = null,
        public DiUngThuoc: string = null,
        public DonGias: Array<number> = [],
        public DVT: string = null,
        public Ten: string = null,
        public HoatChat: string = null,
        public TheTich: number = null,
        public KhuVuc: number = null,
    ) { }
}

export class VatTuTonKhos {
    constructor(
        public Id: number = 0,
        public LoaiDuocPhamHoacVatTu: number = null,
        public DonViTinh: string = null,
        public DVT: string = null,
        public TonKho: number = 0,
        public TonKhoFormat: string = null,
        public HSD: string = null,
        public FlagVatTuDaKe: boolean = false,
        public FlagVatTuDaKeTrungKho: boolean = false,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public Ma: string = null,
        public Ten: string = null,
        public VatTuDaKe: string = null,
    ) { }
}

export class BenhVienHienTai {
    constructor(
        public Id: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public TenVietTat: string = null,
        public DiaChi: string = null,
        public HangBenhVien: number = null,
        public TuyenChuyenMonKyThuat: number = null,
        public SoDienThoaiLanhDao: string = null,
        public HieuLuc: boolean = null,
        public LoaiBenhVienId: number = null,
        public DonViHanhChinhId: number = null,
        public TenLoaiBenhVien: string = null,
        public TenDonViHanhChinh: string = null,
        public HangBenhVienDisplay: string = null,
        public TuyenChuyenMonKyThuatDisplay: string = null,
    ) { }
}


export class ToaMauSoNgayDung {
    constructor(
        public SoNgayDung: number = null,
    ) { }
}

export class ApDungToaThuocToaMau {
    constructor(
        public YeuCauKhamBenhHienTaiId: number = 0,
        public ToaMauId: number = 0,
    ) { }
}

export class ApDungToaThuocLichSuKeToa {
    constructor(
        public YeuCauKhamBenhHienTaiId: number = 0,
        public YeuCauKhamBenhTruocId: number = 0,
    ) { }
}

export class KhamBenhICDPhu {
    constructor(
        public ICDPhuIds: Array<number> = [],
        public YeuCauKhamBenhId: number = null,
        public ICDPhuChange: boolean = false,
    ) { }
}

export class ThongTinNgayNghiHuongBHYT {
    constructor(
        public YeuCauKhamBenhId: number = null,
        public ThoiDiemTiepNhan: Date = null,
        public DenNgay: Date = null,

        public ICDChinhNghiHuongBHYT: number = null,
        public TenICDChinhNghiHuongBHYT: string = null,
        public PhuongPhapDieuTriNghiHuongBHYT: string = null
    ) { }
}

export class ThongTinNgayNghiHuongBHYTTiepNhan {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public ThoiDiemTiepNhan: Date = null,
        public DenNgay: Date = null,
        public BacSiKetLuanId: number = null,
        public HoTenBacSi: string = null,
        
        public ICDChinhNghiHuongBHYT: number = null,
        public TenICDChinhNghiHuongBHYT: string = null,
        public PhuongPhapDieuTriNghiHuongBHYT: string = null
    ) { }
}

export class ListThuocReOrder {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public TenICDChinh: string = null,
        public GhiChuICDChinh: string = null,
        public HostingName: string = null,
        public Header: boolean = null,
        public IsChangeChanDoan: boolean = null,
        public ListGridThuoc: Array<any> = null,
        public YeuCauKhamBenhICDKhacs: InToaThuocICDKemTheoChiTiet[] = []
    ) { }
}

export class InToaThuocICDKemTheoChiTiet {
    constructor(
        public TenICD: string = null,
        public GhiChu: string = null,
    ) { }
}
export class ListVatTuReOrder {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public HostingName: string = null,
        public Header: boolean = null,
        public ListGridVatTu: Array<any> = null
    ) { }
}

export class XuLyCachGiaiQuyet {
    constructor(
        public ChoVeKeDonStr1: string = "Cho về, Kê đơn thuốc",
        public ChoVeKhongToaStr1: string = "Cho về, Không toa",
        public HenTaiKhamStr1: string = "Hẹn tái khám",
        public DieuTriNgoaiTruStr1: string = "Điều trị ngoại trú",
        public NhapVienStr1: string = "Nhập viện",
        public ChuyenVienStr1: string = "Chuyển tuyến",
        public TuVongStr1: string = "Tử vong",
        public CachXuLyStr1: string = null

    ) { }
}

export class InToaThuocLichSuKhamBenhDanhSach {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public ThuocBHYT: boolean = true,
        public ThuocKhongBHYT: boolean = true,
        public VatTu: boolean = true,
        public HostingName: string = null,
    ) { }
}
//thach-end

export class KhamBenh {
    constructor(
        public LyDoKham: string = null,
        public TrieuChungLamSangs: Array<number> = [],
        public ChuanDoanBanDaus: Array<number> = [],
        public ThongTinKhamTheoKhoas: ThongTinKhamTheoKhoa[] = []
    ) { }
}
export class ThongTinKhamTheoKhoa {
    constructor(
        public Id: string = null,
        public Value: any = null
    ) { }
}
export class TemplateKhamBenhTheoKhoa {
    constructor(
        public KhoaId: number = null,
        public TenNhom: string = null,
        public ComponentDynamics: ComponentDynamic[] = []
    ) { }
}

export class TienSuBenh {
    constructor(
        public Id: number = 0,
        public BenhNhanId: number = 0,
        public TenBenh: string = null,
        public LoaiTienSuBenh: number = null,
        public TenLoaiTienSuBenh: string = null
    ) { }
}
export class ICDPhu {
    constructor(
        public Value: string = null,

    ) { }
}
export class ICDPhuId {
    constructor(
        public Ids: number[] = [],

    ) { }
}
export class KetQuaSinhHieu {
    constructor(
        public Id: number = 0,
        public NhipTim: number = null,
        public NhipTho: number = null,
        public ThanNhiet: number = null,
        public HuyetAp: string = null,
        public HuyetApTamThu: number = null,
        public HuyetApTamTruong: number = null,
        public ChieuCao: number = null,
        public CanNang: number = null,
        public BMI: number = null,
        public Glassgow: number = null,
        public NoiThucHienId: number = null,
        public NhanVienThucHienId: number = null,
        public YeuCauTiepNhanId: number = 0,
        public NgayThucHien: string = null,
        public IsUpdate: boolean = false
    ) { }
}

export class DiUng {
    constructor(
        public Id: number = 0,
        public ThuocId: number = null,
        public Ten: string = null,
        public BieuHienDiUng: string = null,
        public LoaiDiUng: number = null,
        public TenDiUng: string = null,
        public MucDo: number = null,
        public TenMucDo: string = null
    ) { }
}
export class ChanDoanPhanBiet {
    constructor(
        public Id: number = 0,
        public ThuocId: number = null,
        public Ten: string = null,
    ) { }
}
export class KhamKhac {
    constructor(
        public Id: number = 0,
        public Ten: string = "",
        public NoiDung: string = "",
    ) { }
}
export class IsShowPanelItem {
    constructor(
        public KhamBenh: boolean = true,
        public LSCLS: boolean = false,
        public KetLuan: boolean = false,
        public PhauThuatThuThuat: boolean = false,
        public KeToa: boolean = false,
        public VatTuTieuHao: boolean = false
    ) { }
}

export class IsExpandPanelItem {
    constructor(
        public KhamBenh: boolean = true,
        public LSCLS: boolean = false,
        public KetLuan: boolean = false,
        public PhauThuatThuThuat: boolean = false,
        public KeToa: boolean = false,
        public VatTuTieuHao: boolean = false
    ) { }
}

export class VatTuTieuHaoItem {
    constructor(
        public STT: number = null,
        public Id: number = null,
        public Ma: string = null,
        public VatTuId: number = null,
        public TenVatTu: string = null,
        public SoLuong: number = null,
        public TinhTien: boolean = false,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public BHChiTra: number = null,
        public BNChiTra: number = null,
        public GhiChu: string = null
    ) { }
}
export class DichVuLSCLSItem {
    constructor(
        // public STT: number = null,
        // public Id: number = 0,
        // public YeuCauTiepNhanId: number = 0,
        // public MaDichVu: string = null,
        // public DichVuKyThuatBenhVienId: number = null,
        // public TenDichVu: string = null,
        // public LoaiId: number = null,
        // public TenLoai: string = null,
        // public SoLan: number = 1,
        // public TinhTien: boolean = false,
        // public Gia: number = null,
        // public ThanhTien: number = null,
        // public DuocHuongBaoHiem: boolean = false,
        // public BaoHiemChiTra: boolean = false,
        // public BenhNhanChiTra: number = null,
        // public GiaBaoHiemThanhToan: number = null,
        // public NoiThucHienId: number = null,
        // public NoiThucHien: string = null,
        // public MoTa: string = null,
        // public NhomDichVuId : number = null,
        // public TenNhomDichVu : number = null,
        // public OnlyYeuCauDichVuKyThuat : boolean = null,
        // public TenTinhTrang: string = "Chưa đóng tiền", // update sau
        // public TinhTrangId: number = 1,  // update sau
        // public ThoiDiemDangKy : Date = new Date(),
        // public ThoiDiemChiDinh : Date = new Date(),
        // public DaThanhToan : boolean = false,
        // public NhanVienChiDinhId : number = null,
        // public NhomChiPhi : number = null,
        // public MaGiaDichVu:string = null,
        // public LoaiDichVuKyThuat: number = 1,

        public STT: number = null,
        public Id: number = 0,
        public YeuCauTiepNhanId: number = 0,
        public MaDichVu: string = null,
        public DichVuKyThuatBenhVienId: number = null,
        public TenDichVu: string = null,
        public LoaiId: number = null,
        public TenLoai: string = null,
        public SoLan: number = 1,
        public TinhTien: boolean = false,
        public Gia: number = null,
        public ThanhTien: number = null,
        public DuocHuongBaoHiem: boolean = false,
        public BaoHiemChiTra: boolean = false,
        public BenhNhanChiTra: number = null,
        public GiaBaoHiemThanhToan: number = null,
        public NoiThucHienId: number = null,
        public NoiThucHien: string = null,
        public MoTa: string = null,
        public NhomDichVuId: number = null,
        public TenNhomDichVu: number = null,
        public OnlyYeuCauDichVuKyThuat: boolean = null,
        public TenTinhTrang: string = "Chưa đóng tiền", // update sau
        public TinhTrangId: number = 1,  // update sau
        public ThoiDiemDangKy: Date = new Date(),
        public ThoiDiemChiDinh: Date = new Date(),
        public DaThanhToan: boolean = false,
        public NhanVienChiDinhId: number = null,
        public NhomChiPhi: number = null,
        public MaGiaDichVu: string = null,
        public LoaiDichVuKyThuat: number = 1,


    ) { }
}
export class DichVuLSCLSItems {
    constructor(
        public STT: number = null,
        public Id: number = 0,
        public YeuCauTiepNhanId: number = 0,
        public MaDichVuCLS: string = null,
        public DichVuKyThuatBenhVienId: number = null,
        public TenDichVuCLS: string = null,
        public LoaiId: number = null,
        public TenLoaiCLS: string = null,
        public SoLanCLS: number = 1,
        public TinhTienCLS: boolean = false,
        public GiaCLS: number = null,
        public ThanhTienCLS: number = null,
        public DuocHuongBaoHiemCLS: boolean = false,
        public BaoHiemChiTraCLS: boolean = false,
        public BenhNhanChiTraCLS: number = null,
        public GiaBaoHiemThanhToanCLS: number = null,
        public NoiThucHienIdCLS: number = null,
        public NoiThucHienCLS: string = null,
        public MoTaCLS: string = null,
        public NhomDichVuId: number = null,
        public TenNhomDichVuCLS: number = null,
        public OnlyYeuCauDichVuKyThuat: boolean = null,
        public TenTinhTrangCLS: string = "Chưa đóng tiền", // update sau
        public TinhTrangId: number = 1,  // update sau
        public ThoiDiemDangKy: Date = new Date(),
        public ThoiDiemChiDinh: Date = new Date(),
        public DaThanhToan: boolean = false,
        public NhanVienChiDinhId: number = null,
        public NhomChiPhi: number = null,
        public MaGiaDichVu: string = null,
        public LoaiDichVuKyThuat: number = 1,

    ) { }
}

export class PhauThuatThuThuat {
    constructor(
        public STT: number = null,
        public Id: number = null,
        public Ma: string = null,
        public TenDichVu: string = null,
        public DichVuId: number = null,
        public TenLoai: string = null,
        public LoaiId: number = null,
        public SoLuong: number = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public BHChiTra: number = null,
        public BNChiTra: number = null,
        public TenNoiThucHien: string = null,
        public NoiThucHienId: number = null,
        public TenTinhTrang: string = null,
        public TinhTrangId: number = null,
        public GhiChu: string = null
    ) { }
}

export class VatTuTieuHao {
    constructor(
        public STT: number = null,
        public Id: number = null,
        public Ma: string = null,
        public TenVatTu: string = null,
        public VatTuId: number = null,
        public SoLuong: number = null,
        public TinhTien: boolean = false,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public BHChiTra: number = null,
        public BNChiTra: number = null,
        public GhiChu: string = null
    ) { }
}

export class KeToaItem {
    constructor(
        public Id: number = 0,
        public DuocPhamId: number = null,
        public Duoc: string = null,
        public HoatChat: string = null,
        public DVTId: number = null,
        public DVT: string = null,
        public DungSang: number = 0,
        public ThoiGianDungSang: number = null,
        public SangDisplay: string = "",
        public DungTrua: number = 0,
        public ThoiGianDungTrua: number = null,
        public TruaDisplay: string = "",
        public DungChieu: number = 0,
        public ThoiGianDungChieu: number = null,
        public ChieuDisplay: string = "",
        public DungToi: number = 0,
        public ThoiGianDungToi: number = null,
        public ToiDisplay: string = "",
        public SoNgayDung: number = null,
        public SoLuong: number = null,
        public TenDuongDung: string = null,
        public DuongDungId: number = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public BNChiTra: number = null,
        public ThuocBHYT: boolean = false,
        public TuongTacThuoc: string = null,
        public DiUngThuoc: boolean = false,
        public GhiChu: string = null,
        public GhiChuDonThuoc: string = null,
        public KhoThuoc: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public YeuCauKhamBenhDonThuocId: number = 0,
        public Gia: number = 0,
        public LoaiKhoThuoc: number = 0,
        public NoiKeDonId: number = null,
        public Ten: string = null,
        public ToaMauLichSuKeToa: number = 3,
        public DonThuocChiTietId: number = 0,
        public LoaiDonThuoc: number = 0,
        public KhoThuocKhongBHYT: number = 0,
        public ThoiGianDungSangDisplay: string = "",
        public ThoiGianDungTruaDisplay: string = "",
        public ThoiGianDungChieuDisplay: string = "",
        public ThoiGianDungToiDisplay: string = "",
        public LieuDung: string = null,
        public DiUngThuocDisplay: string = null,
        public LastModified: any = null,
        public IsKhamBenhDangKham: boolean = false,
        public TongThanhTien: number = null,
        public LaDuocPhamBenhVien: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public SoLanDungTrongNgayString: string = null,
        public IsKhamDoanTatCa: boolean = false,
        public LieuDungTrenNgay: number = null,
        public LieuDungTrenNgayDisplay: string = null,
        public SoLanTrenVien: number = null,
        public SoLanTrenVienDisplay: string = null,
        public LoaiThuocTheoQuanLy: number = null,
        public SoThuTu: number = null,
        public LaTangSTT: boolean = null,
    ) { }
}

export class KeVatTuItem {
    constructor(
        public Id: number = 0,
        public YeuCauKhamBenhId: number = null,
        public VatTuBenhVienId: number = null,
        public DuocPhamId: number = null,
        public SoLuong: number = null,
        public GhiChu: string = null,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public Ma: string = null,
        public DonViTinh: string = null,
        public Ten: string = null,
        public IsKhamBenhDangKham: boolean = false

    ) { }
}
export class DuocPhamChiDinh {
    constructor(
        public STT: number = null,
        public Id: number = null,
        public DuocId: number = null,
        public Duoc: string = null,
        public HoatChat: string = null,
        public DVTId: number = null,
        public DVT: string = null,
        public SoLuong: number = null,
        public TenDuongDung: string = null,
        public DuongDungId: number = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public BHChiTra: number = null,
        public BNChiTra: number = null,
        public ThuocBHYT: boolean = false,
        public TuongTacThuoc: boolean = false,
        public DiUngThuoc: boolean = false,
        public TinhTien: boolean = false,
        public GhiChu: string = null
    ) { }
}

export class SoLuongYeuCauHienTai {
    constructor(
        public ChuanBiKham: number = 0,
        public DangLamChiDinh: number = 0,
        public DangDoiKetLuan: number = 0,
        public ChuanBiKhamHangDoiChung: number = 0,
        public ChoKetLuanHangDoiChung: number = 0,
    ) { }
}

export class KhamBenhBenhNhanTienSuBenh {
    constructor(
        public Id: number = 0,
        public BenhId: number = 0,
        public BenhNhanId: number = 0,
        public NgayPhatHien: DateTime = null,
        public TenTinhTrang: string = null
    ) { }
}

export class KhamBenhBenhNhanDiUngThuoc {
    constructor(
        public Id: number = 0,
        public ThuocId: number = 0,
        public BenhNhanId: number = 0,

        public TenDiUng: string = null,
        public Ma: string = null,
        public BieuHienDiUng: string = null,
        public LoaiDiUng: number = null,
        public TenLoaiDiUng: string = null,
        public MucDo: number = null,
        public TenMucDo: string = null
    ) { }
}

export class KhamBenhBenhNhan {
    constructor(
        public Id: number = 0,
        public MaBN: string = null,
        public HoTen: string = null,
        public KhamBenhBenhNhanDiUngThuocs: KhamBenhBenhNhanDiUngThuoc[] = [],
        public KhamBenhBenhNhanTienSuBenhs: KhamBenhBenhNhanTienSuBenh[] = []
    ) { }
}

export class YeuCauKhamBenhDonThuoc {
    constructor(
        public Id: number = null,
        public YeuCauKhamBenhId: number = null,
        public ToaThuocMauId: number = null,
        public LoaiDonThuoc: number = null, // cần cập nhật enum
        public TrangThai: number = null,
        public DaThanhToan: boolean = null,
        public NoiThanhToanId: number = null,
        public NhanVienThanhToanId: number = null,
        public ThoiDiemThanhToan: DateTime = null,
        //public PhuongThucThanhToan: number = null, // cần cập nhật enum
        public BacSiKeDonId: number = null,
        public NoiKeDonId: number = null,
        public ThoiDiemKeDon: DateTime = null,
        public NoiCapThuocId: number = null,
        public NhanVienCapThuocId: number = null,
        public ThoiDiemCapThuoc: DateTime = null,
        public GhiChu: string = null,
        public KhamBenhYeuCauDonThuocChiTiets: KhamBenhYeuCauDonThuocChiTiet[] = []
    ) { }
}



export class KhamBenhYeuCauDonThuocChiTiet {
    constructor(
        public Id: number = null,
        public YeuCauKhamBenhDonThuocId: number = null,
        public DuocPhamId: number = null,
        public LaDuocPhamBenhVien: boolean = null,
        public Ten: string = null,
        public TenTiengAnh: string = null,
        public SoDangKy: string = null,
        public StthoatChat: number = null,
        public NhomChiPhi: number = null, // cần cập nhật enum
        public MaHoatChat: string = null,
        public HoatChat: string = null,
        public LoaiThuocHoacHoatChat: number = null, // cần cập nhật enum
        public NhaSanXuat: string = null,
        public NuocSanXuat: string = null,
        public DuongDungId: number = null,
        public HamLuong: string = null,
        public QuyCach: string = null,
        public TieuChuan: string = null,
        public DangBaoChe: string = null,
        public DonViTinhId: number = null,
        public HuongDan: string = null,
        public MoTa: string = null,
        public ChiDinh: string = null,
        public ChongChiDinh: string = null,
        public LieuLuongCachDung: string = null,
        public TacDungPhu: string = null,
        public ChuYdePhong: string = null,
        public HopDongThauDuocPhamId: number = null,
        public NhaThauId: number = null,
        public SoHopDongThau: string = null,
        public SoQuyetDinhThau: string = null,
        public LoaiThau: number = null, // càn cập nhật enum
        public LoaiThuocThau: number = null, // cần cập nhật enum
        public NhomThau: string = null,
        public GoiThau: string = null,
        public NamThau: number = null,
        public Gia: number = null,
        public SoLuong: number = 1,
        public SoLuongThanhToan: number = null,
        public SoNgayDung: number = null,
        public DungSang: number = null,
        public DungTrua: number = null,
        public DungChieu: number = null,
        public DungToi: number = null,
        public DuocHuongBaoHiem: boolean = null,
        public BaoHiemChiTra: boolean = null,
        public ThoiDiemDuyetBaoHiem: DateTime = null,
        public NhanVienDuyetBaoHiemId: number = null,
        public GiaBaoHiemThanhToan: number = null,
        public BenhNhanMuaNgoai: boolean = null,
        public DaThanhToan: boolean = null,
        public DaCapThuoc: boolean = null,
        public GhiChu: string = null,
    ) { }
}

export class YeuCauKhamBenhDonVTYT {
    constructor(
        public Id: number = null,
        public YeuCauKhamBenhId: number = null,
        public TrangThai: number = null,
        public BacSiKeDonId: number = null,
        public NoiKeDonId: number = null,
        public ThoiDiemKeDon: Date = null,
        public GhiChu: string = null,
        public KhamBenhYeuCauDonVTYTChiTiets: KhamBenhYeuCauDonVTYTChiTiet[] = []
    ) { }
}

export class KhamBenhYeuCauDonVTYTChiTiet {
    constructor(
        public Id: number = null,
        public YeuCauKhamBenhDonVTYTId: number = null,
        public VatTuBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public NhomVatTuId: number = null,
        public DonViTinh: string = null,
        public NhaSanXuat: string = null,
        public NuocSanXuat: string = null,
        public QuyCach: string = null,
        public TieuChuan: string = null,
        public MoTa: string = null,
        public SoLuong: string = null,
        public GhiChu: string = null,

    ) { }
}

//Update Theo View Model Areas LC/CLS

export class GoiDichVu {
    constructor(
        public GoiChietKhaus: GoiCoChietKhau[] = [],
        public GoiKhacs: GoiKhongChietKhau[] = []
    ) { }
}

export class GoiCoChietKhau {
    constructor(
        public Id: number = null,
        public Nhom: string = null,
        public NhomId: number = 0,
        public Ma: string = null,
        public TenDichVu: string = null,
        public LoaiGia: string = null,
        public SoLuong: number = 1,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public TLChietKhau: string = null,
        public DonGiaTrongGoi: number = null,
        public ThanhTienTrongGoi: number = null,
        public NoiThucHien: string = null,
        public TongThanhTienTrongGoi: number = null,
        public TongThanhTien: number = null,
        public TrangThai: string = null,
        public NoiThucHienIdStr: string = null,
    ) { }
}

export class GoiKhongChietKhau {
    constructor(
        public Id: number = null,
        public Nhom: string = null,
        public NhomId: number = 0,
        public Ma: string = null,
        public TenDichVu: string = null,
        public LoaiGia: string = null,
        public SoLuong: number = 1,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public BHYTThanhToan: number = null,
        public TLMG: string = null,
        public SoTienMG: number = null,
        public BNThanhToan: number = null,
        public NoiThucHien: string = null,
        public TrangThai: string = null,
        public NoiThucHienIdStr: string = null,
        public isCheckRowItem: boolean = false,

    ) { }
}

export class YeuCauDichVuKyThuat {
    constructor(
        public STT: number = null,
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiDichVuKyThuat: number = null,
        public DichVuKyThuatBenhVienId: number = null,
        public MaDichVu: string = null,
        public MaGiaDichVu: string = null,
        public Ma4350DichVu: string = null,
        public TenDichVu: string = null,
        public TenTiengAnhDichVu: string = null,
        public TenGiaDichVu: string = null,
        public NhomChiPhi: number = null,
        public LoaiPhauThuatThuThuat: number = null,
        public Gia: number = null,
        public KhoaId: number = null,
        public SoLan: number = 1,
        public BaoHiemChiTra: boolean = true,
        public GiaBaoHiemThanhToan: number = null,
        public ThongTu: string = null,
        public QuyetDinh: string = null,
        public NoiBanHanh: string = null,
        public MoTa: string = null,
        public TrangThai: number = null,
        public IsDone: boolean = false,
        public DaThanhToan: number = null,
        public NoiThanhToanId: number = null,
        public NhanVienThanhToanId: number = null,
        public ThoiDiemThanhToan: Date = null,
        public ThoiDiemDangKy: Date = new Date(),
        public NoiThucHienId: number = null,
        public NoiThucHien: string = null,
        public MaGiuong: string = null,
        public ThoiDiemThucHien: Date = null,
        public ThoiDiemHoanThanh: Date = null,
        public NhanVienThucHienId: number = null,
        public KetLuan: string = null,
        public NhanVienKetLuanId: number = null,
        public DeNghi: string = null,
        public LoaiId: number = null,
        public TenLoai: string = null,
        public TinhTien: boolean = false,
        public ThanhTien: number = null,
        public DuocHuongBaoHiem: boolean = false,
        public BenhNhanChiTra: number = null,
        public NhomDichVuId: number = null,
        public TenNhomDichVu: string = null,
        public TenTinhTrang: string = "Chưa đóng tiền", // update sau
        public TinhTrang: number = 1,  // update sau
        public ThoiDiemChiDinh: Date = new Date(),
        public NhanVienChiDinhId: number = null,
        public NoiChiDinhId: number = null,
        public NhomGiaDichVuKyThuatBenhVienId: number = null,
        public YeuCauKhamBenhId: number = null,
        public YeuCauGoiDichVuId: number = null,
        public NhomDichVuBenhVienId: number = null,
        public LastModifiedYeuCauKhamBenh: any = null,
        public KetQuaChuanDoanHinhAnhs: Array<KetQuaChuanDoanHinhAnhViewModel> = [],
        public KetQuaXetNghiems: Array<KetQuaXetNghiemViewModel> = []
    ) { }
}

export class YeuCauDichVuGiuongBenh {
    constructor(
        public STT: number = null,
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public YeuCauDichVuKyThuatId: number = null,
        public DichVuGiuongBenhVienId: number = null,
        public NhomGiaDichVuGiuongBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public MaTT37: string = null,
        public LoaiGiuong: number = null,
        public MoTa: string = null,
        public KhongTinhPhi: boolean = null,
        public Gia: number = null,
        public ThanhTien: number = null,
        public YeuCauGoiDichVuId: number = null,
        public GoiDichVuId: number = null,
        public TiLeChietKhau: number = null,
        public NhanVienChiDinhId: number = null,
        public ThoiDiemChiDinh: Date = new Date(),
        public NoiThucHienId: number = null,
        public TenNoiThucHien: string = null,
        public IdWhereNoiThucHienChiDinh: number = null,
        public GiuongBenhId: number = null,
        public TenGiuongBenh: string = null,
        public IdWhereGiuongBenh: number = null,
        public NoiChiDinhId: number = null,
        public NoiChiDinh: string = null,
        public MaGiuong: string = null,
        public ThoiDiemBatDauSuDung: Date = new Date(),
        public ThoiDiemKetThucSuDung: Date = null,
        public DuocHuongBaoHiem: boolean = null,
        public TinhPhi: boolean = false,
        public BaoHiemChiTra: boolean = null,
        public ThoiDiemDuyetBaoHiem: Date = null,
        public NhanVienDuyetBaoHiemId: number = null,
        public GiaBaoHiemThanhToan: number = null,
        public DaThanhToan: number = null,
        public NoiThanhToanId: number = null,
        public NhanVienThanhToanId: number = null,
        public ThoiDiemThanhToan: Date = null,
        public TinhTrang: number = 1,  // update sau
        public GhiChu: string = null,
        public NoiThucHien: string = null,
        public YeuCauKhamBenhLastModified: any = null
    ) { }
}

export class YeuCauVatTuBenhVien {
    constructor(
        public STT: number = null,
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public YeuCauDichVuKyThuatId: number = null,
        public VatTuBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public NhomVatTuId: number = null,
        public DonViTinhId: number = null,
        public NhaSanXuat: string = null,
        public NuocSanXuat: string = null,
        public TieuChuan: string = null,
        public QuyCach: string = null,
        public MoTa: string = null,
        public KhongTinhPhi: boolean = false,
        public Gia: number = null,
        public GoiDichVuId: number = null,
        public TiLeChietKhau: number = null,
        public SoLuong: number = 1,
        public NhanVienChiDinhId: number = null,
        public NoiThucHienId: number = null,
        public ThoiDiemChiDinh: Date = new Date(),
        public NoiCapVatTuId: number = null,
        public NoiChiDinhId: number = null,
        public NoiChiDinh: string = null,
        public NhanVienCapVatTuId: number = null,
        public ThoiDiemCapVatTu: Date = new Date(),
        public DuocHuongBaoHiem: boolean = false,
        public BaoHiemChiTra: boolean = true,
        public ThoiDiemDuyetBaoHiem: Date = new Date(),
        public NhanVienDuyetBaoHiemId: number = null,
        public GiaBaoHiemThanhToan: number = null,
        public DaThanhToan: number = null,
        public NoiThanhToanId: number = null,
        public NhanVienThanhToanId: number = null,
        public ThoiDiemThanhToan: Date = null,
        public DaCapVatTu: boolean = true,
        public TrangThai: number = 1,  // update sau
        public GhiChu: string = null,
        public NoiThucHien: string = null,
    ) { }
}

export class YeuCauGoiDichVu {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public GoiDichVuId: number = null,
        public LoaiGoiDichVu: number = 2,
        public Ten: string = null,
        public CoChietKhau: boolean = false,
        public ChiPhiGoiDichVu: number = 1,
        public MoTa: string = null,
        public NhanVienChiDinhId: number = null,
        public NoiChiDinhId: number = null,
        public ThoiDiemChiDinh: Date = new Date(),
        public DaThanhToan: boolean = false,
        public NoiThanhToanId: number = null,
        public NhanVienThanhToanId: number = null,
        public ThoiDiemThanhToan: Date = null,
        public TrangThai: number = 1,  // update sau
        public GhiChu: string = null,
        public LastModifiedYeuCauKhamBenh: any = null,
        public ListNoiThucHiens: Array<GoiDichVuChiTietNoiThucHienValidation> = [],
        public DichVuChiDinhTheoGois: Array<string> = []
    ) { }
}

export class DichVuChiDinhTheoGoi {
    constructor(
        public Id: number = 0,
        public NhomDichVu: number = null
    ) { }
}

export class YeuCauDuocPham {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public YeuCauDichVuKyThuatId: number = null,
        public DuocPhamBenhVienId: number = null,
        public Ten: string = null,
        public TenTiengAnh: string = null,
        public SoDangKy: string = null,
        public STTHoatChat: number = null,
        public NhomChiPhi: number = null,
        public MaHoatChat: string = null,
        public HoatChat: string = null,
        public LoaiThuocHoacHoatChat: number = null,
        public NhaSanXuat: string = null,
        public NuocSanXuat: string = null,
        public DuongDungId: number = null,
        public HamLuong: string = null,
        public QuyCach: string = null,
        public DangBaoChe: string = null,
        public DonViTinhId: number = null,
        public MoTa: string = null,
        public HuongDan: string = null,
        public ChiDinh: string = null,
        public ChongChiDinh: string = null,
        public LieuLuongCachDung: string = null,
        public TacDungPhu: string = null,
        public ChuYDePhong: string = null,
        public HopDongThauDuocPhamId: number = null,
        public NhaThauId: number = null,
        public SoHopDongThau: string = null,
        public SoQuyetDinhThau: string = null,
        public LoaiThau: number = null,
        public LoaiThuocThau: number = null,
        public NhomThau: string = null,
        public GoiThau: string = null,
        public NamThau: number = null,
        public KhongTinhPhi: boolean = false,
        public Gia: number = null,
        public GoiDichVuId: number = null,
        public TiLeChietKhau: number = null,
        public SoLuong: number = 1,
        public NhanVienChiDinhId: number = null,
        public NoiChiDinhId: number = null,
        public NoiChiDinh: string = null,
        public ThoiDiemChiDinh: Date = new Date(),
        public NoiCapThuocId: number = null,
        public NhanVienCapThuocId: number = null,
        public ThoiDiemCapThuoc: Date = new Date(),
        public DuocHuongBaoHiem: boolean = false,
        public BaoHiemChiTra: boolean = true,
        public ThoiDiemDuyetBaoHiem: Date = new Date(),
        public NhanVienDuyetBaoHiemId: number = null,
        public GiaBaoHiemThanhToan: number = null,
        public DaThanhToan: number = null,
        public NoiThanhToanId: number = null,
        public NhanVienThanhToanId: number = null,
        public ThoiDiemThanhToan: Date = null,
        public DaCapThuoc: boolean = true,
        public TrangThai: number = 1,  // update sau
        public GhiChu: string = null,
        public NoiThucHien: string = null,
    ) { }
}

export class KetQuaChuanDoanHinhAnhViewModel {
    constructor(
        public Id: number = null,
        public ChuanDoanHinhAnhId: number = null,
        public YeuCauTiepNhanDichVuKyThuatId: number = null,
        public MaMay: string = null,
        public KetQua: string = null,
        public MoTa: string = null,
        public KetLuan: string = null,
        public DateTime: Date = null,
    ) { }
}

export class KetQuaXetNghiemViewModel {
    constructor(
        public Id: number = null,
        public ChuanDoanHinhAnhId: number = null,
        public YeuCauTiepNhanDichVuKyThuatId: number = null,
        public MaMay: string = null,
        public KetQua: string = null,
        public MoTa: string = null,
        public KetLuan: string = null,
        public DateTime: Date = null,
    ) { }
}
//

// class gói dịch vụ: dùng trong trường hợp thêm gói và show popup validation nơi thực hiện
export class GoiDichVuNoiThucHienValidation {
    constructor(
        public Id: number = 0,
        public GoiDichVuChiTietNoiThucHiens: Array<GoiDichVuChiTietNoiThucHienValidation> = [],
        public Total: number = 0
    ) { }
}

export class GoiDichVuChiTietNoiThucHienValidation {
    constructor(
        public Id: number = 0,
        public Ma: string = null,
        public Nhom: number = null,
        public TenDichVu: string = null,
        public LoaiGia: string = null,
        public NoiThucHien: string = null,
        public KetLuan: string = null,
        public DateTime: Date = null,
    ) { }
}

export class ThongTinDichVuKhamTiepTheo {
    constructor(
        public YeuCauTiepNhanId: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public DichVuKhamBenhId: number = null,
        public LoaiGiaId: number = null,
        public GiaDichVuKham: number = 0,
        public GiaBHTT: number = 0,
        public DuocHuongBaoHiem: boolean = false,
        public LanKhamCoBHTrongNgay: number = 0,
        public TiLeBaoHiemThanhToan: number = 0,
        public MucHuong: number = 0,
        public DonGiaThems: Array<number> = [],
        public SoTienBHTTToanBo: number = 0,
        public IsUpdate: boolean = false,
        public FlagDuocHuongBaoHiem: boolean = false
    ) { }
}

export class ThongTinKhamPrevious {
    constructor(
        public TrieuChungTiepNhan: string = null,
        public BenhSu: string = null,
        public ChanDoanCuaNoiGioiThieu: string = null,
        public KhamToanThan: string = null,
        public TuanHoan: string = null,
        public HoHap: string = null,
        public TieuHoa: string = null,
        public ThanTietNieuSinhDuc: string = null,
        public ThanKinh: string = null,
        public CoXuongKhop: string = null,
        public TaiMuiHong: string = null,
        public RangHamMat: string = null,
        public NoiTietDinhDuong: string = null,
        public SanPhuKhoa: string = null,
        public DaLieu: string = null,
        public ChanDoanSoBoICDId: number = null,
        public TenChanDoanSoBoICD: string = null,
        public ChanDoanSoBoGhiChu: string = null,
        public ThongTinKhamTheoDichVuTemplateObj: string = null,
        public YeuCauKhamBenhKhamBoPhanKhacs: YeuCauKhamBenhKhamBoPhanKhac[] = [],
        public YeuCauKhamBenhChanDoanPhanBiets: YeuCauKhamBenhChanDoanPhanBiet[] = [],
        public KetQuaSinhHieus: KetQuaSinhHieu[] = [],
        public KhamBenhBenhNhanDiUngThuocs: KhamBenhBenhNhanDiUngThuoc[] = [],
        public KhamBenhBenhNhanTienSuBenhs: KhamBenhBenhNhanTienSuBenh[] = [],
        public YeuCauKhamBenhBoPhanTonThuongs: YeuCauKhamBenhBoPhanTonThuong[] = [],
        public TemplateDichVuKhamSucKhoes: KhamBenhTemplateDichVuKhamSucKhoe[] = [],
        public TemplateDichVuKhamSucKhoeTatCas: string[] = [],
        public NoiDungKhamBenh: string = null
    ) { }
}

export class ThongTinKetLuanKhamDoanPrevious {
    constructor(
        public KSKKetQuaCanLamSang: string = null,
        public KSKDanhGiaCanLamSang: string = null,
        public PhanLoaiSucKhoeId: number = null,
        public KSKKetLuanGhiChu: string = null,
        public KSKKetLuanCacBenhTat: string = null
    ) { }
}

export class ThongTinChangeDichVuKhamDoanTatCaPrevious {
    constructor(
        //dùng cho trường hợp check từng dịch vụ khám trong khám đoàn tất cả
        public IsCheckDichVuKhamSucKhoeTatCas: boolean[] = [],
        public IsChangeDichVuKhamSucKhoeTatCas: boolean[] = []
    ) { }
}

// ABC
export class YeuCauKhamBenhPrevious {
    constructor(
        public IcdchinhId: number = null,
        public TenICDChinh: string = null,
        public GhiChuICDChinh: string = null,
        public CoTaiKham: boolean = null,
        public NgayTaiKham: Date = null,
        public GhiChuTaiKham: string = null,
        public CoNhapVien: boolean = null,
        public CoChuyenVien: boolean = null,
        public KhoaPhongNhapVienId: number = null,
        public TenKhoaPhongNhapVien: string = null,
        public TinhTrangBenhNhanChuyenVien: string = null,
        public LoaiLyDoChuyenVien: number = 0,
        public ThoiDiemChuyenVien: Date = null,
        public PhuongTienChuyenVien: string = null,
        public NhanVienHoTongChuyenVienId: number = null,
        public HoTenNhanVienHoTong: string = null,
        public LyDoNhapVien: string = null,
        public BenhVienChuyenVienId: number = null,
        public TenBenhVienChuyenVien: string = null,
        public LyDoChuyenVien: string = null,
        public CoTuVong: boolean = null,
        public TomTatKetQuaCLS: string = null,
        public CachGiaiQuyet: string = null,
        public GhiChu: string = null,
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public LoaiDichVuKyThuat: number = null,
        public DichVuKyThuatBenhVienId: number = null,
        public NhomGiaDichVuKyThuatBenhVienId: number = null,
        public MaDichVu: string = null,
        public MaGiaDichVu: string = null,
        public TenDichVu: string = null,
        public TenDichVuHienThi: string = null,
        public NhomChiPhi: number = null,
        public Gia: number = null,
        public SoLan: number = null,
        public DuocHuongBaoHiem: boolean = null,
        public TrangThai: boolean = null,
        public TrangThaiThanhToan: boolean = null,
        public NhanVienChiDinhId: number = null,
        public ThoiDiemChiDinh: Date = null,
        public ThoiDiemDangKy: Date = null,
        public TenNhomDichVu: string = null,
        public NhomDichVuBenhVienId: number = null,
        public DieuTriNgoaiTru: boolean = null,
        public CoDieuTriNgoaiTru: boolean = null,
        public ThoiDiemBatDauDieuTri: Date = null,
        public CoKeToa: boolean = null,
        public KhongKeToa: boolean = null,
        public KetQuaXetNghiemCLS: string = null,
        public PhuongPhapTrongDieuTri: string = null,
        public YeuCauKhamBenhICDKhacs: YeuCauKhamBenhICDKhac[] = [],
    ) { }
}

export class YeuCauDichVuKyThuatViewModel {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public LoaiDichVuKyThuat: number = null,
        public DichVuKyThuatBenhVienId: number = null,
        public NhomGiaDichVuKyThuatBenhVienId: number = null,
        public MaDichVu: string = null,
        public MaGiaDichVu: string = null,
        public TenDichVu: string = null,
        public TenDichVuHienThi: string = null,
        public NhomChiPhi: number = null,
        public Gia: number = null,
        public SoLan: number = null,
        public DuocHuongBaoHiem: boolean = null,
        public TrangThai: boolean = null,
        public TrangThaiThanhToan: boolean = null,
        public NhanVienChiDinhId: number = null,
        public ThoiDiemChiDinh: Date = null,
        public ThoiDiemDangKy: Date = null,
        public TenNhomDichVu: string = null,
        public NhomDichVuBenhVienId: number = null,
        public DieuTriNgoaiTru: boolean = null,
        public ThoiDiemBatDauDieuTri: Date = null,
    ) { }
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

export class GridItemYeuCauDichVuKyThuat {
    constructor(
        public YeuCauTiepNhanId: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public YeuCauDichVuKyThuatId: number = 0,
        public NhomGiaDichVuKyThuatBenhVienId: number = null,
        public IsUpdateLoaiGia: boolean = false,
        public SoLan: number = null,
        public IsUpdateSoLan: boolean = false,
        public NguoiThucHienId: number = null,
        public IsUpdateNguoiThucHien: boolean = false,
        public NoiThucHienId: number = null,
        public IsUpdateNoiThucHien: boolean = false,
        public BenhPhamXetNghiem: string = null,
        public IsUpdateBenhPhamXetNghiem: boolean = false,

        public YeuCauKhamBenhLastModified: any = null,
        public IsKhamBenhDangKham: boolean = false,

        public LaDichVuTrongGoi: boolean = null,
        public IsSwapDichVuGoi: boolean = false,

        public IsDichVuKham: boolean = false,

        public LaDichVuKhuyenMai: boolean = null,
        public IsSwapDichVuKhuyenMai: boolean = false,
    ) {
    }
}

export class GridItemGhiNhanVTTHThuoc {
    constructor(
        public YeuCauGhiNhanVTTHThuocId: string = "",
        public YeuCauTiepNhanId: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public IsCapNhatSoLuong: boolean = false,
        public SoLuong: number = null,
        public IsCapNhatTinhPhi: boolean = false,
        public TinhPhi: boolean = null,
        public IsKhamBenhDangKham: boolean = false
    ) {
    }
}

export class ListInChiDinh {
    constructor(
        public nhomChiDinhId: number = 0,
        public dichVuChiDinhId: number = 0,
    ) {
    }
}

export class ListStatusSelectTabKhamBenh {
    constructor(
        public selectedTabKhamBenh: boolean = true,
        public selectedTabChanDoan: boolean = false,
        public selectedTabLichSuKham: boolean = false,
        public selectedTabChiDinh: boolean = false,
        public selectedTabKetQuaCLS: boolean = false,
        public selectedTabTuongTrinhPttt: boolean = false,
        public selectedTabTuVanThuocKhamDoan: boolean = false
    ) {
    }
}

export class LookupCheckItem {
    constructor(
        public KeyId: string,
        public DisplayName: string,
        public IsCheck: boolean = false
    ) {
    }
}
export class PhauThuatThuThuatTuongTrinh {
    constructor(
        public ICDTruocPhauThuatId: number = null,
        public ICDTruocPhauThuatDisplay: string = null,
        public GhiChuICDTruocPhauThuat: string = null,
        public ICDSauPhauThuatId: number = null,
        public ICDSauPhauThuatDisplay: string = null,
        public GhiChuICDSauPhauThuat: string = null,
        public PhuongPhapPhauThuatThuThuatKey: string = null,
        public PhuongPhapPhauThuatThuThuatDisplay: string = null,
        public LoaiPTTTEnum: LoaiPhauThuatThuThuat = null,
        public LoaiPTTTDisplay: string = null,
        public TinhHinhPttt: TinhHinhPhauThuatThuThuat = null,
        public TinhHinhPtttDisplay: string = null,
        public TaiBienPttt: TaiBienPhauThuatThuThuat = null,
        public TaiBienPtttDisplay: string = null,
        public TuVongPttt: TuVongPhauThuatThuThuat = null,
        public TuVongPtttDisplay: string = null,
        public TrinhTuPttt: string = null,
        public LuocDoPttts: LuocDoPhauThuatThuThuat[] = [],
        public Ten: string = null,
        public Id: number = null,
        public PhuongPhapVoCamId: number = null,
        public PhuongPhapVoCamDisplay: string = null,
        public NhanVienThucHienDisplay: string = null,
        public ListLuocDoPhauThuatThuThuatResultVo: any[] = []
    ) { }
}

export class LuocDoPhauThuatThuThuat {
    constructor(
        public Id: number = null,
        public IdYeuCauDichVuKyThuat: number = null,
        public LuocDoPhauThuat: string = null,
        public MoTa: string = null
    ) { }
}

export enum TinhHinhPhauThuatThuThuat {
    ChuDong = 1,
    CapCuu = 2
}

export enum TaiBienPhauThuatThuThuat {
    Khong = 1,
    DoPT = 2,
    DoGayMe = 3,
    DoNhiemKhuan = 4,
    Khac = 5
}

export enum TuVongPhauThuatThuThuat {
    Khong = 1,
    TrenBanMo = 2,
    Trong24Gio = 3,
    Sau24Gio = 4
}

export enum LoaiPhauThuatThuThuat {
    ThuThuatLoai1 = 1,
    ThuThuatLoai2 = 2,
    ThuThuatLoai3 = 3,
    ThuThuatLoaiDacBiet = 4,
    PhauThuatLoai1 = 5,
    PhauThuatLoai2 = 6,
    PhauThuatLoai3 = 7,
    PhauThuatLoaiDacBiet = 8
}

export class DanhSachThongTinAnh {
    constructor(
        public Url: string = null,
        public ImageUrl: string = null,
        public MoTa: string = null
    ) { }
}

export class ThongTinBoPhanCoThe {
    constructor(
        public KeyId: number = 0,
        public DisplayName: string = null,
        public Url: string = null
    ) { }
}

export class YeuCauKhamBenhBoPhanTonThuong {
    constructor(
        public Id: number = 0,
        public YeuCauKhamBenhId: number = null,
        public MoTa: string = null,
        public HinhAnh: string = null
    ) { }
}

export class SoDoGiuongFillter {
    constructor(
        public PhongBenhVienId: number = 0,
        public GiuongTrong: boolean = true,
        public GiuongDangSuDung: boolean = true
    ) { }
}
export class YeuCauKhamBenhId {
    constructor(
        public Id: number = 0,
    ) { }
}

export class TrangThaiYeuCauKhamBenhObjEnum {
    constructor(
        public ChuaKham: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.ChuaKham,
        public DangKham: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.DangKham,
        public DangLamChiDinh: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.DangLamChiDinh,
        public DangDoiKetLuan: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.DangDoiKetLuan,
        public DaKham: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.DaKham,
        public HuyKham: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.HuyKham
    ) { }
}

export class TrangThaiYeuCauDichVuKyThuatObjEnum {
    constructor(
        public ChuaThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.ChuaThucHien,
        public DangThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DangThucHien,
        public DaThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DaThucHien,
        public DaHuy: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DaHuy
    ) { }
}


export class HangDoiKhamBenhInputViewModel {
    constructor(
        public HangDoiDangKhamId: number = 0,
        public HangDoiBatDauKhamId: number = 0,
        public HoanThanhKham: boolean = false,
        public YeuCauKhamBenhLastModified: any = null,
        public PhongBenhVienId: number = 0,
        public LaKhamDoan: boolean = false
    ) { }
}

export class XoaChiDinhViewModel {
    constructor(
        public DichVuId: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public LastModifiedYeuCauKhamBenh: any = null,
        public IsKhamBenhDangKham: boolean = false,
        public IsKhamDoanTatCa: boolean = false,
        public LyDoHuyDichVu: string = null
    ) { }
}

export class XoaNhieuChiDinhViewModel {
    constructor(
        public DichVuId: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public YeuCauTiepNhanId: number = 0,
        public IsKhamBenhDangKham: boolean = false,
        public IsKhamDoanTatCa: boolean = false,
        public LyDoHuyDichVu: string = null,
        public LaDichVuKham: boolean = false,
    ) { }
}

export class ChiDinhDichVuKyThuatMultiselectViewModel {
    constructor(
        public NhomDichVuBenhVienId: number = null,
        public TenNhomDichVu: string = null,
        public YeuCauTiepNhanId: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public DichVuKyThuatBenhVienChiDinhs: Array<string> = [],
        public ShowComboboxNhomDichVuKyThuat: boolean = true,
        public IsKhamBenhDangKham: boolean = false,
        public IsKhamDoanTatCa: boolean = false,
        public LoaiDangNhap: HinhThucKhamBenh = HinhThucKhamBenh.NoiVien,
        public DichVuKyThuatTuGois: Array<DichVuChiDinhTrungTuGoi> = [],
        public BieuHienLamSang: string = null,
        public DichTeSarsCoV2: string = null,
    ) { }
}

export class ChiDinhGhiNhanVatTuThuoc {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public DichVuChiDinhId: string = null,
        public TenDichVuChiDinh: string = null,
        public KhoId: number = null,
        public TenKho: string = null,
        public LaDuocPhamBHYT: boolean = null,
        public DichVuGhiNhanId: number = null,
        public TenDichVuGhiNhan: string = null,
        public strDonViTinh: string = null,
        public SoLuong: number = null,
        public TinhPhi: boolean = false,
        public IsKhamBenhDangKham: boolean = false,
        public LoaiKho: number = null,
    ) { }
}

export class ChiDinhGoiDichVuThuongDung {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public GoiDichVuIds: Array<number> = [],
        public DichVuKhongThems: Array<ChiDinhGoiDichVuThuongDungDichVuLoi> = [],
        public DanhSachDichVuChons: Array<any> = [],
        public IsKhamBenhDangKham: boolean = false,
        public DuocHuongBaoHiem: boolean = null,
        public LaPhauThuatThuThuat: boolean = false,
        public PhieuDieuTriId: number = null,
        public ChiDinhDichVuGridVos: any[] = []
    ) { }
}

export class ChiDinhGoiDichVuTheoBenhNhan {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public NoiTruPhieuDieuTriId: number = null,
        public DichVus: Array<ChiTietGoiDichVuChiDinhTheoBenhNhan> = [],
        public DichVuKhongThems: Array<ChiDinhGoiDichVuTheoBenhNhanDichVuLoi> = [],
        public IsKhamBenhDangKham: boolean = false,
        public IsPTTT: boolean = false,

        //dùng cho tiếp nhận
        public ChiDinhDichVuGridVos: Array<any> = [],
        public DuocHuongBaoHiem: boolean = false
    ) { }
}

export class GoiDichVuMarketingDangChon {
    constructor(
        public YeuCauGoiDichVuId: number = null,
        public TenGoiDichVu: string = null,
        public TongTienConBaoLanhDuoc: number = 0,
        public DichVus: Array<ChiTietGoiDichVuChiDinhTheoBenhNhan> = []
    ) { }
}
export class ChiTietGoiDichVuChiDinhTheoBenhNhan {
    constructor(
        public Id: string = null,
        public YeuCauGoiDichVuId: number = null,
        public TenGoiDichVu: string = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuChiTietId: number = null,
        public DichVuBenhVienId: number = null,
        public TenDichVu: string = null,
        public NhomGoiDichVu: number = null,
        public SoLuongSuDung: number = null,
        public IsActive: boolean = false,
        public DonGia: number = 0
    ) { }
}

export class ThemDuocPhamNgoaiBV {
    constructor(
        public Id: number = 0,
        public Ten: string = null,
        public YeuCauKhamBenhId: number = 0,
        public TenDuongDung: string = null,
        public TenDonViTinh: string = null,
        public DuongDungId: number = null,
        public DonViTinhId: number = null,
        public SoLuong: number = null,
        public LieuDung: string = null,
        public SangDisplay: string = "",
        public ThoiGianDungSang: number = null,
        public TruaDisplay: string = "",
        public ThoiGianDungTrua: number = null,
        public ChieuDisplay: string = "",
        public ThoiGianDungChieu: number = null,
        public ToiDisplay: string = "",
        public ThoiGianDungToi: number = null,
        public SoNgayDung: number = null,
        public GhiChu: string = null,
    ) { }
}
export class ChiDinhGoiDichVuThuongDungDichVuLoi {
    constructor(
        public GoiDichVuId: number = null,
        public NhomGoiDichVu: number = null,
        public DichVuId: number = null,
        public LoaiLoi: number = null,
        public TenLoi: string = null,
        public KhongThem: boolean = false
    ) { }
}

export class ChiDinhGoiDichVuTheoBenhNhanDichVuLoi {
    constructor(
        public YeuCauGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuChiTietId: number = null,
        public NhomGoiDichVuValue: number = null,
        public DichVuId: number = null,
        public LoaiLoi: number = null,
        public TenLoi: string = null,
        public KhongThem: boolean = false
    ) { }
}

export class GoiLaiYeuCauXetNghiem {
    constructor(
        public LyDo: string = null,
        public ThongTinXetNghiemChiTiets: Array<ThongTinXetNghiemChiTiet> = [],
        public DanhSachGoiXetNghiemLais: Array<DanhSachGoiXetNghiemLai> = [],
    ) { }
}

export class DanhSachGoiXetNghiemLai {
    constructor(
        public PhienXetNghiemId: number = null,
        public NhomDichVuBenhVienId: number = null,
        public NhomDichVu: string = null,
        public LanThucHien: number = null,
        public GoiLai: boolean = false,
    ) { }
}

export class ThongTinXetNghiemChiTiet {
    constructor(
        public NguoiThucHien: string = null,
        public NgayThucHien: string = null,
        public BacSiKetLuan: string = null,
        public NgayKetLuan: string = null,
        public ChuanDoan: string = null,

        public PhienXetNghiemId: number = null,
        public NhomDichVuBenhVienId: number = null,
        public LanThucHien: number = null,
    ) { }
}

export class PhieuInXetNghiemVo {
    constructor(
        public NhomDichVuBenhVienId: number = null,
        public PhienXetNghiemId: number = null,
        public HostingName: string = null,
        public Header: boolean = false
    ) { }
}

export class LichSuYeuCauChayLai {
    constructor(
        public NguoiYeuCau: string = null,
        public NgayYeuCau: string = null,
        public LyDoYeuCau: string = null,
        public NguoiTuChoi: string = null,
        public NgayTuChoi: string = null,
        public LyDoTuChoi: string = null,
        public TrangThai: boolean = false
    ) { }
}

export class KhamBenhTemplateDichVuKhamSucKhoe {
    constructor(
        public YeuCauKhamBenhId: number = null,
        public ChuyenKhoaKhamSucKhoe: number = null,
        public TenChuyenKhoa: string = null,
        public ThongTinKhamTheoDichVuTemplate: string = null,
        public TemplateKhamCacCoQuanObj: any = null,
        public ThongTinKhamTheoDichVuData: string = null,
        public IsDaKham: boolean = null,
        public IsDungChuyenKhoaLogin: boolean = null,

        // BVHD-3257
        // Khi khám đoàn tất cả:
        // 1. check vào dv nào mới lưu dịch vụ đó.
        // 2. bỏ check là clear luôn data
        // 3. đã hoàn thành thì disabled
        public ThongTinKhamTheoDichVuDataDefault: string = null,
        public IsDaHoanThanhKham: boolean = false,
        public IsCheckedDichVu: boolean = false,
        public IsChangeData: boolean = false
    ) { }
}

export class GridChiDinhDichVuQueryInfoVo {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public NhomDichVuId: number = null,
        public IsKhamDoanTatCa: boolean = false
    ) { }
}

export class TrangThaiThucHienYeuCauDichVuKyThuat {
    constructor(
        public Id: number = null,
        public YeuCauKhamBenhId: number = null,
        public TenDichVu: string = null,
        public NhanVienThucHienId: number = null,
        public ThoiDiemThucHien: Date = null,
        public LyDoHuyTrangThaiDaThucHien: string = null,
        public LaThucHienDichVu: boolean = true,
        public IsKhamBenhDangKham: boolean = false,
        public LaKhamDoanTatCa: boolean = false
    ) { }
}

export const sampleProducts = [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 8, 20)
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 7, 12)
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 8, 26)
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 7, 17)
    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        },
        "FirstOrderedOn": new Date(1996, 7, 22)
    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 11, 1)
    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        },
        "FirstOrderedOn": new Date(1997, 1, 21)
    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        },
        "FirstOrderedOn": new Date(1996, 8, 5)
    }
];

export const products = [{
    "ProductID": 1,
    "ProductName": "Chai",
    "SupplierID": 1,
    "CategoryID": 1,
    "QuantityPerUnit": "10 boxes x 20 bags",
    "UnitPrice": 18.0000,
    "UnitsInStock": 39,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 2,
    "ProductName": "Chang",
    "SupplierID": 1,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 12 oz bottles",
    "UnitPrice": 19.0000,
    "UnitsInStock": 17,
    "UnitsOnOrder": 40,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 3,
    "ProductName": "Aniseed Syrup",
    "SupplierID": 1,
    "CategoryID": 2,
    "QuantityPerUnit": "12 - 550 ml bottles",
    "UnitPrice": 10.0000,
    "UnitsInStock": 13,
    "UnitsOnOrder": 70,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 4,
    "ProductName": "Chef Anton's Cajun Seasoning",
    "SupplierID": 2,
    "CategoryID": 2,
    "QuantityPerUnit": "48 - 6 oz jars",
    "UnitPrice": 22.0000,
    "UnitsInStock": 53,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 5,
    "ProductName": "Chef Anton's Gumbo Mix",
    "SupplierID": 2,
    "CategoryID": 2,
    "QuantityPerUnit": "36 boxes",
    "UnitPrice": 21.3500,
    "UnitsInStock": 0,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 6,
    "ProductName": "Grandma's Boysenberry Spread",
    "SupplierID": 3,
    "CategoryID": 2,
    "QuantityPerUnit": "12 - 8 oz jars",
    "UnitPrice": 25.0000,
    "UnitsInStock": 120,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 7,
    "ProductName": "Uncle Bob's Organic Dried Pears",
    "SupplierID": 3,
    "CategoryID": 7,
    "QuantityPerUnit": "12 - 1 lb pkgs.",
    "UnitPrice": 30.0000,
    "UnitsInStock": 15,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 7,
        "CategoryName": "Produce",
        "Description": "Dried fruit and bean curd"
    }
}, {
    "ProductID": 8,
    "ProductName": "Northwoods Cranberry Sauce",
    "SupplierID": 3,
    "CategoryID": 2,
    "QuantityPerUnit": "12 - 12 oz jars",
    "UnitPrice": 40.0000,
    "UnitsInStock": 6,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 9,
    "ProductName": "Mishi Kobe Niku",
    "SupplierID": 4,
    "CategoryID": 6,
    "QuantityPerUnit": "18 - 500 g pkgs.",
    "UnitPrice": 97.0000,
    "UnitsInStock": 29,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    }
}, {
    "ProductID": 10,
    "ProductName": "Ikura",
    "SupplierID": 4,
    "CategoryID": 8,
    "QuantityPerUnit": "12 - 200 ml jars",
    "UnitPrice": 31.0000,
    "UnitsInStock": 31,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 11,
    "ProductName": "Queso Cabrales",
    "SupplierID": 5,
    "CategoryID": 4,
    "QuantityPerUnit": "1 kg pkg.",
    "UnitPrice": 21.0000,
    "UnitsInStock": 22,
    "UnitsOnOrder": 30,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ProductID": 12,
    "ProductName": "Queso Manchego La Pastora",
    "SupplierID": 5,
    "CategoryID": 4,
    "QuantityPerUnit": "10 - 500 g pkgs.",
    "UnitPrice": 38.0000,
    "UnitsInStock": 86,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ProductID": 13,
    "ProductName": "Konbu",
    "SupplierID": 6,
    "CategoryID": 8,
    "QuantityPerUnit": "2 kg box",
    "UnitPrice": 6.0000,
    "UnitsInStock": 24,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 14,
    "ProductName": "Tofu",
    "SupplierID": 6,
    "CategoryID": 7,
    "QuantityPerUnit": "40 - 100 g pkgs.",
    "UnitPrice": 23.2500,
    "UnitsInStock": 35,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 7,
        "CategoryName": "Produce",
        "Description": "Dried fruit and bean curd"
    }
}, {
    "ProductID": 15,
    "ProductName": "Genen Shouyu",
    "SupplierID": 6,
    "CategoryID": 2,
    "QuantityPerUnit": "24 - 250 ml bottles",
    "UnitPrice": 15.5000,
    "UnitsInStock": 39,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 16,
    "ProductName": "Pavlova",
    "SupplierID": 7,
    "CategoryID": 3,
    "QuantityPerUnit": "32 - 500 g boxes",
    "UnitPrice": 17.4500,
    "UnitsInStock": 29,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 17,
    "ProductName": "Alice Mutton",
    "SupplierID": 7,
    "CategoryID": 6,
    "QuantityPerUnit": "20 - 1 kg tins",
    "UnitPrice": 39.0000,
    "UnitsInStock": 0,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    }
}, {
    "ProductID": 18,
    "ProductName": "Carnarvon Tigers",
    "SupplierID": 7,
    "CategoryID": 8,
    "QuantityPerUnit": "16 kg pkg.",
    "UnitPrice": 62.5000,
    "UnitsInStock": 42,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 19,
    "ProductName": "Teatime Chocolate Biscuits",
    "SupplierID": 8,
    "CategoryID": 3,
    "QuantityPerUnit": "10 boxes x 12 pieces",
    "UnitPrice": 9.2000,
    "UnitsInStock": 25,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 20,
    "ProductName": "Sir Rodney's Marmalade",
    "SupplierID": 8,
    "CategoryID": 3,
    "QuantityPerUnit": "30 gift boxes",
    "UnitPrice": 81.0000,
    "UnitsInStock": 40,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 21,
    "ProductName": "Sir Rodney's Scones",
    "SupplierID": 8,
    "CategoryID": 3,
    "QuantityPerUnit": "24 pkgs. x 4 pieces",
    "UnitPrice": 10.0000,
    "UnitsInStock": 3,
    "UnitsOnOrder": 40,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 22,
    "ProductName": "Gustaf's Knäckebröd",
    "SupplierID": 9,
    "CategoryID": 5,
    "QuantityPerUnit": "24 - 500 g pkgs.",
    "UnitPrice": 21.0000,
    "UnitsInStock": 104,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ProductID": 23,
    "ProductName": "Tunnbröd",
    "SupplierID": 9,
    "CategoryID": 5,
    "QuantityPerUnit": "12 - 250 g pkgs.",
    "UnitPrice": 9.0000,
    "UnitsInStock": 61,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ProductID": 24,
    "ProductName": "Guaraná Fantástica",
    "SupplierID": 10,
    "CategoryID": 1,
    "QuantityPerUnit": "12 - 355 ml cans",
    "UnitPrice": 4.5000,
    "UnitsInStock": 20,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 25,
    "ProductName": "NuNuCa Nuß-Nougat-Creme",
    "SupplierID": 11,
    "CategoryID": 3,
    "QuantityPerUnit": "20 - 450 g glasses",
    "UnitPrice": 14.0000,
    "UnitsInStock": 76,
    "UnitsOnOrder": 0,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 26,
    "ProductName": "Gumbär Gummibärchen",
    "SupplierID": 11,
    "CategoryID": 3,
    "QuantityPerUnit": "100 - 250 g bags",
    "UnitPrice": 31.2300,
    "UnitsInStock": 15,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 27,
    "ProductName": "Schoggi Schokolade",
    "SupplierID": 11,
    "CategoryID": 3,
    "QuantityPerUnit": "100 - 100 g pieces",
    "UnitPrice": 43.9000,
    "UnitsInStock": 49,
    "UnitsOnOrder": 0,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 28,
    "ProductName": "Rössle Sauerkraut",
    "SupplierID": 12,
    "CategoryID": 7,
    "QuantityPerUnit": "25 - 825 g cans",
    "UnitPrice": 45.6000,
    "UnitsInStock": 26,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 7,
        "CategoryName": "Produce",
        "Description": "Dried fruit and bean curd"
    }
}, {
    "ProductID": 29,
    "ProductName": "Thüringer Rostbratwurst",
    "SupplierID": 12,
    "CategoryID": 6,
    "QuantityPerUnit": "50 bags x 30 sausgs.",
    "UnitPrice": 123.7900,
    "UnitsInStock": 0,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    }
}, {
    "ProductID": 30,
    "ProductName": "Nord-Ost Matjeshering",
    "SupplierID": 13,
    "CategoryID": 8,
    "QuantityPerUnit": "10 - 200 g glasses",
    "UnitPrice": 25.8900,
    "UnitsInStock": 10,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 31,
    "ProductName": "Gorgonzola Telino",
    "SupplierID": 14,
    "CategoryID": 4,
    "QuantityPerUnit": "12 - 100 g pkgs",
    "UnitPrice": 12.5000,
    "UnitsInStock": 0,
    "UnitsOnOrder": 70,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ProductID": 32,
    "ProductName": "Mascarpone Fabioli",
    "SupplierID": 14,
    "CategoryID": 4,
    "QuantityPerUnit": "24 - 200 g pkgs.",
    "UnitPrice": 32.0000,
    "UnitsInStock": 9,
    "UnitsOnOrder": 40,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ProductID": 33,
    "ProductName": "Geitost",
    "SupplierID": 15,
    "CategoryID": 4,
    "QuantityPerUnit": "500 g",
    "UnitPrice": 2.5000,
    "UnitsInStock": 112,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ProductID": 34,
    "ProductName": "Sasquatch Ale",
    "SupplierID": 16,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 12 oz bottles",
    "UnitPrice": 14.0000,
    "UnitsInStock": 111,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 35,
    "ProductName": "Steeleye Stout",
    "SupplierID": 16,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 12 oz bottles",
    "UnitPrice": 18.0000,
    "UnitsInStock": 20,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 36,
    "ProductName": "Inlagd Sill",
    "SupplierID": 17,
    "CategoryID": 8,
    "QuantityPerUnit": "24 - 250 g  jars",
    "UnitPrice": 19.0000,
    "UnitsInStock": 112,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 37,
    "ProductName": "Gravad lax",
    "SupplierID": 17,
    "CategoryID": 8,
    "QuantityPerUnit": "12 - 500 g pkgs.",
    "UnitPrice": 26.0000,
    "UnitsInStock": 11,
    "UnitsOnOrder": 50,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 38,
    "ProductName": "Côte de Blaye",
    "SupplierID": 18,
    "CategoryID": 1,
    "QuantityPerUnit": "12 - 75 cl bottles",
    "UnitPrice": 263.5000,
    "UnitsInStock": 17,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 39,
    "ProductName": "Chartreuse verte",
    "SupplierID": 18,
    "CategoryID": 1,
    "QuantityPerUnit": "750 cc per bottle",
    "UnitPrice": 18.0000,
    "UnitsInStock": 69,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 40,
    "ProductName": "Boston Crab Meat",
    "SupplierID": 19,
    "CategoryID": 8,
    "QuantityPerUnit": "24 - 4 oz tins",
    "UnitPrice": 18.4000,
    "UnitsInStock": 123,
    "UnitsOnOrder": 0,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 41,
    "ProductName": "Jack's New England Clam Chowder",
    "SupplierID": 19,
    "CategoryID": 8,
    "QuantityPerUnit": "12 - 12 oz cans",
    "UnitPrice": 9.6500,
    "UnitsInStock": 85,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 42,
    "ProductName": "Singaporean Hokkien Fried Mee",
    "SupplierID": 20,
    "CategoryID": 5,
    "QuantityPerUnit": "32 - 1 kg pkgs.",
    "UnitPrice": 14.0000,
    "UnitsInStock": 26,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ProductID": 43,
    "ProductName": "Ipoh Coffee",
    "SupplierID": 20,
    "CategoryID": 1,
    "QuantityPerUnit": "16 - 500 g tins",
    "UnitPrice": 46.0000,
    "UnitsInStock": 17,
    "UnitsOnOrder": 10,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 44,
    "ProductName": "Gula Malacca",
    "SupplierID": 20,
    "CategoryID": 2,
    "QuantityPerUnit": "20 - 2 kg bags",
    "UnitPrice": 19.4500,
    "UnitsInStock": 27,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 45,
    "ProductName": "Rogede sild",
    "SupplierID": 21,
    "CategoryID": 8,
    "QuantityPerUnit": "1k pkg.",
    "UnitPrice": 9.5000,
    "UnitsInStock": 5,
    "UnitsOnOrder": 70,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 46,
    "ProductName": "Spegesild",
    "SupplierID": 21,
    "CategoryID": 8,
    "QuantityPerUnit": "4 - 450 g glasses",
    "UnitPrice": 12.0000,
    "UnitsInStock": 95,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 47,
    "ProductName": "Zaanse koeken",
    "SupplierID": 22,
    "CategoryID": 3,
    "QuantityPerUnit": "10 - 4 oz boxes",
    "UnitPrice": 9.5000,
    "UnitsInStock": 36,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 48,
    "ProductName": "Chocolade",
    "SupplierID": 22,
    "CategoryID": 3,
    "QuantityPerUnit": "10 pkgs.",
    "UnitPrice": 12.7500,
    "UnitsInStock": 15,
    "UnitsOnOrder": 70,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 49,
    "ProductName": "Maxilaku",
    "SupplierID": 23,
    "CategoryID": 3,
    "QuantityPerUnit": "24 - 50 g pkgs.",
    "UnitPrice": 20.0000,
    "UnitsInStock": 10,
    "UnitsOnOrder": 60,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 50,
    "ProductName": "Valkoinen suklaa",
    "SupplierID": 23,
    "CategoryID": 3,
    "QuantityPerUnit": "12 - 100 g bars",
    "UnitPrice": 16.2500,
    "UnitsInStock": 65,
    "UnitsOnOrder": 0,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 51,
    "ProductName": "Manjimup Dried Apples",
    "SupplierID": 24,
    "CategoryID": 7,
    "QuantityPerUnit": "50 - 300 g pkgs.",
    "UnitPrice": 53.0000,
    "UnitsInStock": 20,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 7,
        "CategoryName": "Produce",
        "Description": "Dried fruit and bean curd"
    }
}, {
    "ProductID": 52,
    "ProductName": "Filo Mix",
    "SupplierID": 24,
    "CategoryID": 5,
    "QuantityPerUnit": "16 - 2 kg boxes",
    "UnitPrice": 7.0000,
    "UnitsInStock": 38,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ProductID": 53,
    "ProductName": "Perth Pasties",
    "SupplierID": 24,
    "CategoryID": 6,
    "QuantityPerUnit": "48 pieces",
    "UnitPrice": 32.8000,
    "UnitsInStock": 0,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    }
}, {
    "ProductID": 54,
    "ProductName": "Tourtière",
    "SupplierID": 25,
    "CategoryID": 6,
    "QuantityPerUnit": "16 pies",
    "UnitPrice": 7.4500,
    "UnitsInStock": 21,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    }
}, {
    "ProductID": 55,
    "ProductName": "Pâté chinois",
    "SupplierID": 25,
    "CategoryID": 6,
    "QuantityPerUnit": "24 boxes x 2 pies",
    "UnitPrice": 24.0000,
    "UnitsInStock": 115,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    }
}, {
    "ProductID": 56,
    "ProductName": "Gnocchi di nonna Alice",
    "SupplierID": 26,
    "CategoryID": 5,
    "QuantityPerUnit": "24 - 250 g pkgs.",
    "UnitPrice": 38.0000,
    "UnitsInStock": 21,
    "UnitsOnOrder": 10,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ProductID": 57,
    "ProductName": "Ravioli Angelo",
    "SupplierID": 26,
    "CategoryID": 5,
    "QuantityPerUnit": "24 - 250 g pkgs.",
    "UnitPrice": 19.5000,
    "UnitsInStock": 36,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ProductID": 58,
    "ProductName": "Escargots de Bourgogne",
    "SupplierID": 27,
    "CategoryID": 8,
    "QuantityPerUnit": "24 pieces",
    "UnitPrice": 13.2500,
    "UnitsInStock": 62,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 59,
    "ProductName": "Raclette Courdavault",
    "SupplierID": 28,
    "CategoryID": 4,
    "QuantityPerUnit": "5 kg pkg.",
    "UnitPrice": 55.0000,
    "UnitsInStock": 79,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ProductID": 60,
    "ProductName": "Camembert Pierrot",
    "SupplierID": 28,
    "CategoryID": 4,
    "QuantityPerUnit": "15 - 300 g rounds",
    "UnitPrice": 34.0000,
    "UnitsInStock": 19,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ProductID": 61,
    "ProductName": "Sirop d'érable",
    "SupplierID": 29,
    "CategoryID": 2,
    "QuantityPerUnit": "24 - 500 ml bottles",
    "UnitPrice": 28.5000,
    "UnitsInStock": 113,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 62,
    "ProductName": "Tarte au sucre",
    "SupplierID": 29,
    "CategoryID": 3,
    "QuantityPerUnit": "48 pies",
    "UnitPrice": 49.3000,
    "UnitsInStock": 17,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 63,
    "ProductName": "Vegie-spread",
    "SupplierID": 7,
    "CategoryID": 2,
    "QuantityPerUnit": "15 - 625 g jars",
    "UnitPrice": 43.9000,
    "UnitsInStock": 24,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 64,
    "ProductName": "Wimmers gute Semmelknödel",
    "SupplierID": 12,
    "CategoryID": 5,
    "QuantityPerUnit": "20 bags x 4 pieces",
    "UnitPrice": 33.2500,
    "UnitsInStock": 22,
    "UnitsOnOrder": 80,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ProductID": 65,
    "ProductName": "Louisiana Fiery Hot Pepper Sauce",
    "SupplierID": 2,
    "CategoryID": 2,
    "QuantityPerUnit": "32 - 8 oz bottles",
    "UnitPrice": 21.0500,
    "UnitsInStock": 76,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 66,
    "ProductName": "Louisiana Hot Spiced Okra",
    "SupplierID": 2,
    "CategoryID": 2,
    "QuantityPerUnit": "24 - 8 oz jars",
    "UnitPrice": 17.0000,
    "UnitsInStock": 4,
    "UnitsOnOrder": 100,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID": 67,
    "ProductName": "Laughing Lumberjack Lager",
    "SupplierID": 16,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 12 oz bottles",
    "UnitPrice": 14.0000,
    "UnitsInStock": 52,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 68,
    "ProductName": "Scottish Longbreads",
    "SupplierID": 8,
    "CategoryID": 3,
    "QuantityPerUnit": "10 boxes x 8 pieces",
    "UnitPrice": 12.5000,
    "UnitsInStock": 6,
    "UnitsOnOrder": 10,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ProductID": 69,
    "ProductName": "Gudbrandsdalsost",
    "SupplierID": 15,
    "CategoryID": 4,
    "QuantityPerUnit": "10 kg pkg.",
    "UnitPrice": 36.0000,
    "UnitsInStock": 26,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ProductID": 70,
    "ProductName": "Outback Lager",
    "SupplierID": 7,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 355 ml bottles",
    "UnitPrice": 15.0000,
    "UnitsInStock": 15,
    "UnitsOnOrder": 10,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 71,
    "ProductName": "Flotemysost",
    "SupplierID": 15,
    "CategoryID": 4,
    "QuantityPerUnit": "10 - 500 g pkgs.",
    "UnitPrice": 21.5000,
    "UnitsInStock": 26,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ProductID": 72,
    "ProductName": "Mozzarella di Giovanni",
    "SupplierID": 14,
    "CategoryID": 4,
    "QuantityPerUnit": "24 - 200 g pkgs.",
    "UnitPrice": 34.8000,
    "UnitsInStock": 14,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ProductID": 73,
    "ProductName": "Röd Kaviar",
    "SupplierID": 17,
    "CategoryID": 8,
    "QuantityPerUnit": "24 - 150 g jars",
    "UnitPrice": 15.0000,
    "UnitsInStock": 101,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ProductID": 74,
    "ProductName": "Longlife Tofu",
    "SupplierID": 4,
    "CategoryID": 7,
    "QuantityPerUnit": "5 kg pkg.",
    "UnitPrice": 10.0000,
    "UnitsInStock": 4,
    "UnitsOnOrder": 20,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 7,
        "CategoryName": "Produce",
        "Description": "Dried fruit and bean curd"
    }
}, {
    "ProductID": 75,
    "ProductName": "Rhönbräu Klosterbier",
    "SupplierID": 12,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 0.5 l bottles",
    "UnitPrice": 7.7500,
    "UnitsInStock": 125,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 76,
    "ProductName": "Lakkalikööri",
    "SupplierID": 23,
    "CategoryID": 1,
    "QuantityPerUnit": "500 ml",
    "UnitPrice": 18.0000,
    "UnitsInStock": 57,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID": 77,
    "ProductName": "Original Frankfurter grüne Soße",
    "SupplierID": 12,
    "CategoryID": 2,
    "QuantityPerUnit": "12 boxes",
    "UnitPrice": 13.0000,
    "UnitsInStock": 32,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}];

export class DataChiDinhTheoLoaiDichVuGroup {
    constructor(
        public Id: number = null,
        public LoaiDichVuKyThuat: string = null,
        public LoaiDichVuKyThuatEnum: number = null,
        public IsCheckPhieuIn: boolean = true
    ) { }
}

export class ListKetQuaXetNghiem {
    public Ten: string = null;
    public GiaTriCu: string = null;
    public GiaTriTuMay: string = null;
    public GiaTriNhapTay: string = null;
    public GiaTriDuyet: string = null;
    public ToDamGiaTri: boolean = null;
    public CSBT: string = null;
    public DonVi: string = null;

    public KetQuaCu: string = null;
    public KetQuaMoi: string = null;

    public ThoiDiemGuiYeuCau: Date = null;
    public ThoiDiemGuiYeuCauDisplay: string = null;
    public ThoiDiemNhanKetQua: Date = null;
    public ThoiDiemNhanKetQuaDisplay: string = null;
    public TenMayXetNghiem: string = null;
    public MayXetNghiemId: number = null;
    public ThoiDiemDuyetKetQua: Date = null;
    public ThoiDiemDuyetKetQuaDisplay: string = null;
    public NguoiDuyet: string = null;

    public LoaiMau: string = null;
    public DichVuXetNghiemId: number = null;

    public LoaiKetQuaTuMay: number = null;

    public IdChilds: number[] = new Array<number>();
    public Level: number = null;

    public DanhSachLoaiMau: string[] = new Array<string>();

    public YeuCauChayLai: boolean = null;
    public DaDuyet: boolean = null;
    public NgayYeuCauDisplay: string = null;
    public LyDoYeuCau: string = null;
    public NgayDuyetDisplay: string = null;

    public NguoiYeuCau: string = null;

    public NguoiDuyetChayLai: string = null;
    public Nhom: string = null;

    public DaDuyetChiTiet: boolean = null;

    public HighLightClass: string = null;
    public DaGoiDuyet: boolean = null;
    public CheckBox: boolean = null;

}
export class InPhieuXetNghiem {
    constructor(
        public HostingName: string = null,
        public Header: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public YeuCauDichVuKyThuatId: number = null,
        public NhomDichVuBenhVienId: number = null
    ) { }
}

export class NoiDungMauKhamBenh {
    public constructor(
        public Id: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public NoiDung: string = null
    ) { }
}

export class KhamBenhThongTinDoiTuongTiepNhan {
    constructor(
        public Id: number = null,
        public BenhNhanId: number = null,
        public BHYTNgayHieuLuc: Date = null,
        public BHYTNgayHetHan: Date = null,
        public BHYTMucHuong: number = null,
        public BHYTNgayDu5Nam: Date = null,
        public BHYTDiaChi: string = null,
        public NoiDangKyBHYT: string = null,
        public BHYTMaSoThe: string = null,
        public BHYTMaDKBD: string = null,
        public IsQuaHanTheBHYT: boolean = false,

        public CoQuanBHXH: string = null,
        public BHYTNgayDuocMienCungChiTra: Date = null,
        public MaKhuVuc: string = null,
        public BHYTDuocMienCungChiTra: boolean = null,
        public BHYTGiayMienCungChiTraId: number = null,
        public TinhTrangThe: number = null,
        public BHYTGiayMienCungChiTra: KhamBenhGiayMienCungChiTra = null,
        public IsChange: boolean = false,

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
        public YeuCauTiepNhanCongTyBaoHiemTuNhans: Array<KhamBenhThongTinBaoHiemTuNhan> = new Array<KhamBenhThongTinBaoHiemTuNhan>(),
        public BieuHienLamSang: string = null,
        public DichTeSarsCoV2: string = null,
    ) { }

}

export class KhamBenhGiayMienCungChiTra {
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

export class KhamBenhThongTinBaoHiemTuNhan {
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
export class KhamBenhDiaChiBHYT {
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
export class KhamBenhThongTinBenhNhanTimKiemBHYT {
    constructor(
        public MaThe: string = null,
        public TenBenhNhan: string = null,
        public NgaySinh: Date = null,
        public NgaySinhDisplay: string = null,
        public NamSinh: number = null,
    ) {
    }
}
export class CapNhatPhieuDuongThai {
    constructor(
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public YeuCauKhamBenhId: number = null,
    ) {
    }
}
export class DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham {
    constructor(
        public Ids: any[] = [],
        public LoaiMauXetNghiem: number = null,
        public LoaiMauXetNghiemText: string = null,
    ) { }
}
export class XetNghiemCovid {
    constructor(
        public BieuHienLamSang: string = null,
        public DichTeSarsCoV2: string = null,
        public LoaiBenhPham: string = null,
    ) { }
}

export class DeletesViewModel {
    constructor(
        public Ids: any[] = [],
    ) { }
}

export class NguoiThucHienChuyenTTDichVu {
	constructor(	
		public ThoiGianThucHien: Date = null,
        public NguoiThucHienId: number = null,
		public TenNguoiThucHien: string = null,
	) { }
}