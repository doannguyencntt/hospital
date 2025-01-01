import { truncate } from "fs";
import { LoaiTapTin } from "src/app/shared/enum/common-type.enums";
import { GioiTinh } from "src/app/shared/enum/common-type.enums";
import { LookupItemVo } from "src/app/shared/models/common.model";

export class KhamDoanHopDongKhamTimKiem {
  public constructor(
    public SearchString: string = null
  ) { }
}
export class ThongTinError {
  constructor(
    public MaGoi: string = null,
    public TenNhanVien: string = null,
    public TotalThanhCong: number = null,
    public Error: string = null
  ) { }
}

export class DanhSachPhongTaiCongTy {
  constructor(
    public Id: number = 0,
    public HopDongKhamSucKhoeId: number = 0,
    public Ma: string = null,
    public Ten: string = null,
    public Tang: string = null,
    public DanhSachNhanSu = []
  ) { }
}

export class FileExcelNhanVien {
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

export class KiemTraHopDongNhanVienChuaKham {
  constructor(
    public NhanVienKhamXong: boolean = false,
    public TrangThai: number = 0,
    public TenTrangThai: string = null,
    public TenNhanVien: string = null,
    public MaNhanVien: string = null,
    public NgaySinh: number = 0,
    public GioiTinh: LoaiTapTin = null
  ) { }
}

export class KhamDoanHopDongKham {
  constructor(
    public Id: number = 0,
    public CongTyKhamSucKhoeId: number = null,
    public TenCongTy: string = null,
    public SoHopDong: string = null,
    public NgayHopDong: Date = new Date(),
    public LoaiHopDong: number = 1,
    public TenLoaiHopDong: string = null,
    public TrangThaiHopDongKham: number = 1,
    public TenTrangThaiHopDongKham: string = "Đang thực hiện",
    public SoNguoiKham: number = null,
    public GiaTriHopDong: number = null,
    public ThanhToanPhatSinh: number = null,
    public TiLeChietKhau: number = null,
    public SoTienTamUng: number = null,
    public SoTienChietKhau: number = null,
    public SoTienPhatSinhThucTe: number = null,
    public SoTienChiChoNhanVien: number = null,
    public NgayHieuLuc: Date = new Date(),
    public NgayKetThuc: Date = null,
    public NguoiKyHopDong: string = null,
    public NguoiGioiThieu: string = null,
    public ChucDanhNguoiKy: string = null,
    public DienGiai: string = null,
    public HopDongKhamSucKhoeDiaDiems: HopDongSucKhoeDiaDiem[] = [],
  ) { }
}

export class HopDongSucKhoeDiaDiem {
  constructor(
    public DiaDiem: string = null,
    public CongViecId: number = null,
    public CongViec: string = null,
    public Ngay: Date = null,
    public GhiChu: string = null,
  ) { }
}

export class HopDongKhamSucKhoeNhanVien {
  constructor(
    public Id: number = 0,
    public HopDongKhamSucKhoeId: number = null,
    public BenhNhanId: number = null,
    public STTNhanVien: number = null,

    public MaBN: string = null,
    public MaNhanVien: string = null,
    public HoTen: string = null,
    public HoTenKhac: string = null,
    public NgaySinh: number = null,
    public ThangSinh: number = null,
    public NamSinh: number = null,
    public NgayThangNamSinh: Date = null,
    public Tuoi: number = null,
    public SoDienThoai: string = null,
    public SoChungMinhThu: string = null,
    public GioiTinh: GioiTinh = null,
    public NgheNghiepId: number = null,
    public QuocTichId: number = null,
    public DanTocId: number = null,
    public DiaChi: string = null,
    public PhuongXaId: number = null,
    public QuanHuyenId: number = null,
    public TinhThanhId: number = null,
    public NhomMau: number = null,
    public YeuToRh: number = null,
    public Email: string = null,
    public TenDonViHoacBoPhan: string = null,
    public NhomDoiTuongKhamSucKhoe: string = null,
    public GoiKhamSucKhoeId: number = null,
    public TenGoiKhamSucKhoe: string = null,
    public TinhTrangHonNhan: number = null,
    public CoMangThai: boolean = null,

    public TienSuBenhs: TienSuBenh[] = [],
    public GhiChuDiUngThuoc: string = null,

    public NgayCapChungMinhThu: Date = null,
    public NoiCapChungMinhThu: string = null,
    public NgayBatDauLamViec: Date = null,

    public NgheCongViecTruocDays: NgheCongViecTruocDay[] = [],

    public TenTinhTrangHonNhan: string = null,
    public TenGioiTinh: string = null,
    public TenNhomMau: string = null,
    public TenYeuToRh: string = null,

    public HoKhauTinhThanhId: number = null,
    public HoKhauQuanHuyenId: number = null,
    public HoKhauPhuongXaId: number = null,
    public HoKhauDiaChi: string = null,
    public TinhTrangKham: boolean = null,
  ) { }
}

export class NgheCongViecTruocDay {
  constructor(
    public CongViec: string = null,
    public TuNgay: Date = null,
    public DenNgay: Date = null,
  ) { }
}

export class TienSuBenh {
  constructor(
    public Id: number = null,
    public LoaiTienSuId: number = null,
    public LoaiTienSu: string = null,
    public BenhNgheNghiep: boolean = null,
    public TenBenh: string = null,
    public PhatHienNam: Date = null,
  ) { }
}

export class XuatFileExcelTrongGoiHoacNgoaiGoi {
  constructor(
    public HopDongKhamSucKhoeId: number = null,
    public LaDichVuTrongGoi: boolean = null,
  ) { }
}

export class MoLaiHopDong {
  constructor(
    public HopDongKhamSucKhoeId: number = null,
    public LyDoMoLaiHopDong: string = null,
  ) { }
}

export class DichVuKhamDoanChiTiet {
  constructor(
    public YeuCauTiepNhanId: number = null,
    public GoiKhamSucKhoeIds: Array<number> = [],
    public BenhNhanId: number = null,
    public LaDichVuTrongGoi: boolean = null,
  ) { }
}