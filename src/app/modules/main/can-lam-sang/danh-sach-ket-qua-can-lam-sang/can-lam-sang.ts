

import { LoaiTapTin } from "src/app/shared/enum/common-type.enums";
export class CanLamSang {
  constructor(
    public MaTN: number = null,
    public MaBN: number = null,
    public HoTen: string = null,
    public NamSinh: number = null,
    public GioiTinh: number = null,
    public DiaChi: number = null,
    public DienThoaiStr: string = null,
    public ChuaCoKetQua: boolean = true,
    public DaCoKetQua: boolean = true,
    public SearchString: string = null,
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

export class ThongTinBenhNhan {
  constructor(
    public Id: number = 0,
    public MaYeuCauTiepNhan: string = null,
    public BenhNhanId: string = null,
    public MaBN: string = null,
    public HoTen: string = null,
    public NamSinh: number = null,
    public TenGioiTinh: string = null,
    public GioiTinhStr: string = null,
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
    public TenGiayMiemCungTriTra: string = null
  ) { }
}

export class ListDanhSachCanLamSang {
  constructor(
    public YeuCauTiepNhanId: number = 0,
    public DanhSachCanLamSangs: ThongTinCanLamSang[] = [],
    public KetQuaNhomXetNghiems: KetQuaNhomXetNghiem[] = []
  ) { }
}
export class ThongTinCanLamSang {
  constructor(
    public DichVuKyhuatId: number = 0,
    public TenDichVu: string = null,
    public GhiChu: string = null,
    public LoaiYeuCauKyThuat: number = 0,
    public NhanVienThucHienId: number = 0,
    public TenNhanVienThucHien: string = null,
    public GiayKetQuaLamSang: GiayKetQuaLamSang[] = [],
    public KiemTraFileKetQua: boolean = true
  ) { }
}

export class KetQuaNhomXetNghiem {
  constructor(
    public DichVuKyhuatId: number = 0,
    public NhomDichVuKyThuatId: number = 0,
    public TenNhomDichVuKyhuat: string = null,
    public KetLuan: string = null,
    public CapNhatChuaThanhToan: boolean = false,
    public NhomDanhSachXetNghiem: NhomDanhSachXetNghiem[] = [],
    public GiayKetQuaNhomCanLamSang: GiayKetQuaLamSang[] = [],
    public NhanVienThucHienId: number = 0,
    public TenNhanVienThucHien: string = null,
    public KiemTraFileKetQua: boolean = true
  ) { }
}

export class NhomDanhSachXetNghiem {
  constructor(public DichVuId: number = 0, public TenDichVu: string = null, public CapNhatChuaThanhToan: boolean = false) { }
}

export class GiayKetQuaLamSang {
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
export class TimKiemThongTinBenhNhan {
  constructor(public TimKiemMaBNVaMaTN: string = null) { }
}

export class CanLamSangTimKiem {
  public constructor(
    public SearchString: string = null,
    public TrangThai: CanLamSangTimKiemTrangThai = new CanLamSangTimKiemTrangThai(),
    public TuNgayDenNgay: CanLamSangTimKiemDateRange = new CanLamSangTimKiemDateRange(),
    public ThucHienTuNgayDenNgay: CanLamSangTimKiemDateRange = new CanLamSangTimKiemDateRange()
  ) { }
}

export class CanLamSangTimKiemTrangThai {
  public constructor(
    public ChoKetQua: boolean = true,
    public DaCoKetQua: boolean = false
  ) { }
}

export class CanLamSangTimKiemDateRange {
  public constructor(
    public startDate: any = null,
    public endDate: any = null,
    public TuNgay: any = null,
    public DenNgay: any = null
  ) { }
}

export class NoiDungMau {
  public constructor(
    public Id: number = 0,
    public Ma: string = null,
    public Ten: string = null,
    // public NoiDung: string = null,
    // public LoaiKetQuaVaKetLuanMau: number = null
    public KetQuaMau: string = null,
    public KetLuanMau: string = null
  ) { }
}

export class NoiDungKetQua {
  public constructor(
    public Id: number = null,
    public ThongTinHanhChinhMaTiepNhan: string = null,
    public ThongTinHanhChinhMaBenhNhan: string = null,
    public ThongTinHanhChinhHoTen: string = null,
    public ThongTinHanhChinhNgaySinh: number = null,
    public ThongTinHanhChinhThangSinh: number = null,
    public ThongTinHanhChinhNamSinh: number = null,
    public ThongTinHanhChinhTuoi: number = null,
    public ThongTinHanhChinhTenGioiTinh: string = null,
    public ThongTinHanhChinhDiaChi: string = null,
    public ThongTinHanhChinhDoiTuong: string = null,
    public ThongTinHanhChinhBacSiChiDinhId: number = null,
    public ThongTinHanhChinhBacSiChiDinh: string = null,
    public ThongTinHanhChinhNgayChiDinh: string = null,
    public ThongTinHanhChinhNoiChiDinh: string = null,
    public ThongTinHanhChinhSoBenhAn: string = null,
    public ThongTinHanhChinhChanDoan: string = null,
    public ThongTinHanhChinhChiDinh: string = null,

    public DataKetQuaCanLamSang: string = null,
    public ChiTietKetQuaObj: ChiTietKetQua = null,

    public ThoiDiemThucHien: Date = null,
    public NhanVienThucHienId: number = null,
    public NhanVienKetLuanId: number = null,
    public NhanVienThucHien2Id: number = null,
    public NhanVienKetLuan2Id: number = null,
    public GhiChuKetQuaCLS: string = null,
    public ThoiDiemKetLuan: Date = null,
    public MayTraKetQuaId: number = null,
    public YeuCauTiepNhanId: number = null,
    public FileKetQuaCanLamSangs: ChuKyKetQua[] = [],
    public DichVuKyThuatBenhVienId:number=null
  ) { }
}

export class ThongTinHanhChinh {
  public constructor(
    public Id: number = null,
    public ThongTinHanhChinhMaTiepNhan: string = null,
    public ThongTinHanhChinhMaBenhNhan: string = null,
    public ThongTinHanhChinhHoTen: string = null,
    public ThongTinHanhChinhNgaySinh: number = null,
    public ThongTinHanhChinhThangSinh: number = null,
    public ThongTinHanhChinhNamSinh: number = null,
    public ThongTinHanhChinhTuoi: number = null,
    public ThongTinHanhChinhTenGioiTinh: string = null,
    public ThongTinHanhChinhDiaChi: string = null,
    public ThongTinHanhChinhDoiTuong: string = null,
    public ThongTinHanhChinhBacSiChiDinhId: number = null,
    public ThongTinHanhChinhBacSiChiDinh: string = null,
    public ThongTinHanhChinhNgayChiDinh: string = null,
    public ThongTinHanhChinhNoiChiDinh: string = null,
    public ThongTinHanhChinhSoBenhAn: string = null,
    public ThongTinHanhChinhChanDoan: string = null,
    public ThongTinHanhChinhChiDinh: string = null,

    //BVHD-3800
    public LaCapCuu: boolean = null
  ) { }
}

export class CauHinhIn {
  public constructor(
    public InLogo: boolean = true,
    public InBarcode: boolean = true,
    public InTieuDe: boolean = true,
    public InHoVaTen: boolean = true,
    public InNamSinh: boolean = true,
    public InGioiTinh: boolean = true,
    public InDiaChi: boolean = true,
    public InBSChiDinh: boolean = true,
    public InNgayChiDinh: boolean = true,
    public InNoiChiDinh: boolean = true,
    public InNoiThucHien: boolean = true,    
    public InSoBenhAn: boolean = true,
    public InChuanDoan: boolean = true,
    public InDienGiai: boolean = true,
    public InChiDinh: boolean = true,
    public InThanhNgang: boolean = true,
    public InKyThuat: boolean = true,

    public HostingName: string = null,
    public Id: number = null,
  ) { }
}
export class CauHinhInTheoNhom{
  public constructor(
    public DichVuKyThuatBenhVienId: number=0,
    public CauHinhIn: CauHinhIn = null
  ) { }
}

export class ChiTietKetQua {
  public constructor(
    
    public NguoiLuuId: number = null,
    public NguoiLuuTen: string = null,
    public ThoiDiemLuu:  any = null,

    public TenKetQuaLabel: string = "KẾT QUẢ",
    public TenKetQua: string = null,
    public KyThuat: string = null,
    public KetQua: string = null,
    public KetLuan: string = null,
    public InKemAnh: boolean = true,
    public HinhAnhDinhKems: HinhAnhDinhKemKetQua[] = []
  ) { }
}
export class LookupItemChonDichVuKyThuat {
  constructor(
    public KeyId: number = null,
    public DisplayName: string = null,
    public TrangThaiDangThucHien: boolean = null,
  ) {
  }
}


export class HinhAnhDinhKemKetQua {
  public constructor(
    public TenGuid: string = null,
    public HinhAnh: string = null,
    public MoTa: string = null,
    public InKemKetQua: boolean = true
  ) { }
}
export class ChuKyKetQua {
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

