import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class QuayThuoc {
}
export class TimBenhNhan {
    constructor(
        public MaBenhNhan: string = null,
        public MaTiepNhan: string = null,
        public HoTen: string = null,
        public SoDienThoai: string = null,
        public KiemTraThanhToan: number = 0,
        public RangeDate: rangeDate = new rangeDate,
    ) { }

}
export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,

    ) { }
}

export class BenhNhanThongTin {
    constructor(
        public Id: number = null,
        public MaBN: string = null,
        public MaYeuCauTiepNhan: string = null,
        public HoTen: string = null,
        public GioiTinh: string = null,
        public GioiTinhHienThi: string = null,
        public NamSinh: string = null,
        public DiaChi: string = null,
        public DiaChiDayDu: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public SoDuTaiKhoan: number = 0
    ) { }

}
export class ThongTinBenhNhan {
    constructor(
        public MaBenhNhan: string = null,
        public MaTiepNhan: string = null,
        public YeuCauTiepNhanId: number = null,
        public TrangThaiThanhToan: number = null,
    ) { }

}
export class SearchInfoNhaThuoc {
    constructor(
        public MaBenhNhan: string = "",
        public MaTiepNhan: string = "",
        public HoTen: string = "",
        public SoDienThoai: string = "",
        public KiemTraThanhToan: string = "",
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }

}
export class KhachVangLai {
    constructor(
        public Id: number = 0,
        public HoTen: string = null,
        public GioiTinh: number = 1,
        public NamSinh: number = 1900,
        public DiaChi: string = null,
        public DiaChiDayDu: string = null,
        public SoDienThoai: string = null,
        public TinhThanhId: number = 0,
        public QuanHuyenId: number = 0,
        public PhuongXaId: number = 0,
        public Email: string = null,
        public GioiTinhHienThi: string = null,
        public MaBN: string = null,
        public MaTN: string = null,
        public TenTinhDisplay: string = null,
        public TenHuyenDisplay: string = null,
        public TenPhuongDisplay: string = null
    ) { }
}

export class ToaThuocCuTimKiem {
    constructor(
        public DVKhamHienThi: string = null,
        public DVKhamId: number = null,
        public ChuanDoan: string = null,
        public BSKham: string = null,
        public BSId: number = null,
        // public NgayKham: DateTime = null
        public RangeDate: rangeDate = new rangeDate,
    ) { }

}
export class danhSachThuoc {
    constructor(
        public Id: number = 0,
        public ThuocBHYT: any[] = [],
        public ThuocKhongBHYT: any[] = [],

    ) { }

}
export class ThemDuocPham {
    constructor(
        public DuocPhamId: number = null,
        public DuocPhamText: string = null,
        public SoLuongTon: number = null,
        public SoLuong: number = null
    ) { }

}

export class XemTruocBangKeThuoc {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public Hosting: string = null,
        public DanhSachDonThuocs: ThongTinDuocPham[] = []
    ) { }
}

export class ThongTinDuocPham {
    constructor(
        public Id: number = null,
        public STT: number = null,
        public DuocPhamId: number = null,
        public MaHoatChat: string = null,
        public TenDuocPham: string = null,
        public SoLuongTon: number = null,
        public NhapKhoDuocPhamChiTietId: number = null,
        public TenHoatChat: string = null,
        public DonViTinh: string = null,
        public SoLuongToa: number = null,
        public SoLuongMua: number = null,
        public ThanhTien: number = null,
        public DonGiaHienThi: number = null,
        public Solo: string = null,
        public ViTri: string = null,
        public HanSuDung: number = null,
        public HanSuDungHientThi: string = null,
        public BacSiKeToa: string = null,
        public BacSiId: number = null,
        public isNew: boolean = null,
        public HighLightClass: string = null,
        public CheckedDefault: boolean = true,
        public BNConPhaiThanhToan: number = 0,
        public DanhSachCongNoChoThus: CongNoChoThu[] = [],
        public DonGia: number = null,

        public ThanhTienHienThi: number = null,
        public BNConPhaiThanhToanHienThi: number = null,
        public LoaiDuocPhamHoacVatTu: number = 0,
        public LoaiDuocPhamHoacVatTu1: number = 0,
        public GhiChuMienGiamThem: string = null,
        public DanhSachMienGiamVos: DanhSachMienGiamVo[] = [],

        public SoTienMG: number = null,
        public DaThanhToan: number = null,
        public TongCongNo: number = null,
        public BHYTThanhToan: number = null,

        public apdungMGTThanhCong: boolean = null,
    ) { }

}

export class ThongTinDonThuoc {
    constructor(
        public Id: number = null,

        public HoTenBenhNhan: string = null,
        public TienMat: number = 0,
        public ChuyenKhoan: number = 0,
        public POS: number = 0,
        public SoTienCongNo: number = 0,

        public BenhNhanDua: number = 0,
        public TienTraLai: number = null,
        public HinhThucThanhToan: number[] = [],
        public NgayThu: Date = null,
        public NoiDungThu: string = null,
        public DanhSachCongNos: CongNoVo[] = [],
        public DanhSachDonThuocs: ThongTinDuocPham[] = [],
        public TongTien: number = TienMat + ChuyenKhoan + POS
    ) { }
}

export class CongNoVo {
    constructor(
        public CongTyCongNoId: number = null,
        public SoTienCongNo: number = null,
    ) { }

}
export class ConfirmPrint {
    constructor(
        public TaiKhoanBenhNhanThuId: number = null,
        public InPhieuThu: boolean = false,
        public InBangKe: boolean = true,
        public Hosting: string = null,
        public Response: string = null
    ) { }

}
export class ServiceId {
    constructor(
        public ToaThuoc: any[] = [],
        public maBN: number = 0,
    ) { }

}

export class DanhSachCongNoChoThu {
    constructor(
        public CongNoChoThus: CongNoChoThu[] = [],
    ) { }
}
export class CongNoChoThu {
    constructor(
        public CongNoId: number = 0,
        public TenCongTy: string = null,
        public SoTienCongNoChoThu: number = 0,
        public ViTri: number = 0
    ) { }
}
export class ExportQueryInfoQueryInfo {
    constructor(
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        // public searchTerms: string = "",
        public Sort: Sort[] = []
    ) { }
}
export class TinhHuyenTemplateVo {
    constructor(
        public TenTinh: string = "",
        public TenHuyen: string = "",
        public TinhId: number = 0,
        public HuyenId: number = 0,
    ) { }
}
export class QuayThuocGridVo {
    constructor(
        public MaBenhNhan: string = null,
        public MaTiepNhan: string = null,
        public HoTen: string = null,
        public SoDienThoai: string = null,
        public KiemTraThanhToan: number = null,
        public DateStart: string = null,
        public DateEnd: string = null,
        public DateNow: Date = null,
        public DieuKienLoadVaoChiTiet: boolean = false
    ) { }
}
// update 28122020
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
        public DaSuDung: boolean = false,
    ) { }
}
export class LoaiChietKhau {
    ChietKhauTheoTiLe = 1;
    ChietKhauTheoSoTien = 2;
}

export class LoaiMienGiam {
    UuDai = 1;
    Voucher = 2;
    MienGiamThem = 3;
}

export class ThongTinHuyPhieu {
    constructor(
        public SoPhieu: number = null,
        public TenSoPhieu: string = null,
        public TenPhieuThuChi: string = null,
        public LoaiPhieuThuChiThuNgan: number = null,
        public ThuHoiPhieu: boolean = null,
        public NguoiThuHoiId: number = null,
        public TenNguoiThuHoi: string = null,
        public ThoiGianThuHoi: Date = null,
        public DaHoanUng: boolean = null,
        public LyDo: string = null
    ) { }
}


export class TrangThaiThuTienBenhNhan {
    ThuTheoChiPhiNumber = 1;
    ThuTheoChiPhi = "Phiếu thu";
    Huy = "Đã hủy";
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
        public SoTienPhaiThuHoacChi: number = null,
        public LoaiPhieuThuChiThuNgan: number = null,
        public SoPhieu: string = null,
        public NgayThuStr: string = null,
        public NoiDungThu: string = null,
        public DaThuHoi: boolean = null,
        public NguoiThuHoi: string = null,
        public ConHanHuyPhieuThu: boolean = null,
        public NhanVienHuyPhieu: string = null,
        public NgayHuyStr: string = null,

        public DanhSachThuPhis: ThongTinDuocPham[] = []
    ) { }
}

export class HuyXuatThuocTrongNgay {
    constructor(
        public TaiKhoanBenhNhanThuId: number = null,
        public TenSoPhieu: string = null,
        public ThuHoiPhieu: boolean = null,
        public NguoiThuHoiId: number = null,
        public TenNguoiThuHoi: string = null,
        public ThoiGianThuHoi: Date = null,      
        public LyDo: string = null
    ) { }
}

export class NguoiDungKhongMuaDonThuoc {
    constructor(
        public YeuCauTiepNhanId: number = null,
    ) { }
}

