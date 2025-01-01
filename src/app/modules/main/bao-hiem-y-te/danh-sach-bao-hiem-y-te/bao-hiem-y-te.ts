import { analytics } from "firebase";
import { DateTime } from "luxon";

export class DsBaoHiemYTe {
  constructor(
    public MaTN: string = null,
    public MaBN: string = null,
    public HoTen: string = null,
    public GioiTinh: number = null,
    public DiaChi: number = null,
    public MucHuong: number = null,
    public SoTienBHYTDuyet: number = null,
    public SearchString: string = null
  ) { }
}
export class ThongTinBenhNhanViewModels {
  public ThongTinBenhNhanVMs: XMLThongTinBenhNhan[] = []
}
export class XMLThongTinBenhNhan {
  constructor(
    public MaLienKet: string = null,
    public STT: number = null,
    public MaBenhNhan: string = null,
    public HoTen: string = null,
    public NgaySinh: Date = null,
    public GioiTinh: number = null,
    public DiaChi: string = null,
    public MaThe: string = null,
    public MaCoSoKCBBanDau: string = null,
    public GiaTriTheTu: Date = null,
    public GiaTriTheDen: Date = null,
    public MienCungChiTra: Date = null,
    public TenBenh: string = null,
    public MaBenh: string = null,
    public MaBenhKhac: string = null,
    public LyDoVaoVien: number = null,
    public MaNoiChuyen: string = null,
    public MaTaiNan: number = null,
    public NgayVao: DateTime = null,
    public NgayRa: DateTime = null,
    public SoNgayDieuTri: number = null,
    public KetQuaDieuTri: number = null,
    public TinhTrangRaVien: number = null,
    public TinhTrangRaVienText: string = null,
    public NgayThanhToan: Date = null,
    public MucHuong: number = null,
    public TienThuoc: number = null,
    public TienVatTuYTe: number = null,
    public DataJson: string = null,
    public TienTongChi: number = null,
    public TienBenhNhanTuTra: number = null,
    public TienBenhNhanCungChiTra: number = null,
    public TienBaoHiemThanhToan: number = null,
    public TienNguonKhac: number = null,
    public TienNgoaiDinhSuat: number = null,
    public NamQuyetToan: number = null,
    public ThangQuyetToan: number = null,
    public MaLoaiKCB: number = null,
    public MaKhoa: string = null,
    public MaCSKCB: string = null,
    public MaKhuVuc: string = null,
    public MaPhauThuatQuocTe: string = null,
    public CanNang: number = null,
    public IsDownLoad: boolean = false,
    public Version: number = null,
    public WarningMessage: string = null,
    public HoSoChiTietThuoc: HoSoChiTietThuoc[] = [],
    public HoSoChiTietDVKT: HoSoChiTietDVKT[] = [],
    public HoSoCanLamSang: HoSoCanLamSang[] = [],
    public HoSoChiTietDienBienBenh: HoSoChiTietDienBienBenh[] = []
  ) { }
}

export class HoSoChiTietThuoc {
  constructor(
    public MaLienKet: string = null,
    public STT: number = null,
    public MaThuoc: string = null,
    public MaNhom: number = null,
    public MaNhomChiPhi: number = null,
    public MaNhomText: string = null,
    public TenThuoc: string = null,
    public DonViTinh: string = null,
    public HamLuong: string = null,
    public DuongDung: string = null,
    public LieuDung: string = null,
    public SoDangKy: string = null,
    public SoLuong: number = null,
    public DonGia: number = null,
    public TyLeThanhToan: number = null,
    public ThanhTien: number = null,
    public MaKhoa: string = null,
    public MaBacSi: string = null,
    public MaBenh: string = null,
    public NgayYLenh: Date = null,
    public ThongTinThau: string = null,
    public PhamVi: string = null,
    public MucHuong: number = null,
    public TienBenhNhanTuTra: number = 0,
    public TienNguonKhac: number = 0,
    public TienBaoHiemThanhToan: number = 0,
    public TienBenhNhanCungChiTra: number = 0,
    public TienNgoaiDinhSuat: number = 0,
    public MaPhuongThucThanhToan: number = null
  ) { }
}
export class HoSoChiTietDVKT {
  constructor(
    public MaDichVu: string = null,
    public STT: number = null,
    public MaVatTu: string = null,
    public GoiVatTuYTe: string = null,
    public TenVatTu: string = null,
    public ThongTinThau: string = null,
    public PhamVi: number = null,
    public TienThanhToanToiDa: number = null,
    public MucHuong: number = null,
    public TienNguonKhac: number = null,
    public TienBenhNhanTuTra: number = null,
    public TienBaoHiemThanhToan: number = null,
    public TienBenhNhanCungChiTra: number = null,
    public TienNgoaiDinhSuat: number = null,
    public MaGiuong: string = null,
    public MaNhom: number = null,
    public MaNhomText: string = null,
    public TenDichVu: string = null,
    public DonViTinh: string = null,
    public SoLuong: number = null,
    public DonGia: number = null,
    public TyLeThanhToan: number = null,
    public ThanhTien: number = null,
    public MaKhoa: string = null,
    public MaBacSi: string = null,
    public MaBenh: string = null,
    public NgayYLenh: Date = null,
    public NgayKetQua: Date = null,
    public MaPhuongThucThanhToan: number = null,
    public MaLienKet: string = null,
  ) { }
}
export class HoSoCanLamSang {
  constructor(
    public MaLienKet: string = null,
    public STT: number = null,
    public MaDichVu: string = null,
    public MaChiSo: string = null,
    public TenChiSo: string = null,
    public GiaTri: string = null,
    public MaMayXetNghiem: string = null,
    public MaMay: string = null,
    public MoTa: string = null,
    public KetLuan: string = null,
    public NgayKQ: Date = null
  ) { }
}
export class HoSoChiTietDienBienBenh {
  constructor(
    public STT: number = null,
    public DienBien: string = null,
    public HoiChuan: string = null,
    public PhauThuat: string = null,
    public NgayYLenh: Date = null,
    public MaLienKet: string = null,
  ) { }
}

export class TimKiemDSBaoHiemYTe {
  constructor(
    public TuNgay: any = null,
    public DenNgay: any = null,
    public TimKiem: any = null,
    public FromDate: any = null,
    public ToDate: any = null,
    public ThoiDiemTiepNhanTuFormat: any = null,
    public ThoiDiemTiepNhanDenFormat: any = null,
    public SearchString: string = null
  ) { }
}

export class GoiDanhSachThongTinBenhNhanCoBHYT {
  constructor(
    public YeuCauTiepNhanIds: number[],
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

export class DanhSachYeuCauTiepNhanIds {
  constructor(
    public Id: any = []
  ) { }
}

export enum EnumTypeLoadingData {
  View = 1,
  Update = 2,
  Delete = 3,
  Cancel = 4,
  Add = 5,
  DangGuiHoSo = 6,
  LoadingExcel = 7,
  LoadingTaiFile = 8
}