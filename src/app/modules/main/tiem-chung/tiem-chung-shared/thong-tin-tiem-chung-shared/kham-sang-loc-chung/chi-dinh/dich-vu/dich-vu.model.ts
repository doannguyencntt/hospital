import { TrangThaiYeuCauDichVuKyThuat } from "src/app/shared/enum/kham-benh.enum";
import { HinhThucKhamBenh } from "src/app/shared/enum/kham-doan.enum";

export class ChiDinhDichVuKyThuatMultiSelectTiemChungViewModel {
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
        public DichVuKyThuatTuGois: Array<DichVuChiDinhTrungTuGoiTiemChung> = []
    ) { }
}

export class DichVuChiDinhTrungTuGoiTiemChung {
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

export class GridChiDinhDichVuTiemChungQueryInfoVo{
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public NhomDichVuId: number = null,
        public YeuCauKhamSangLocId: number = null,
    ) { }
}

export class GoiDichVuTiemChung {
    constructor(
        public GoiChietKhaus: GoiCoChietKhauTiemChung[] = [],
        public GoiKhacs: GoiKhongChietKhauTiemChung[] = []
    ) { }
}

export class GoiCoChietKhauTiemChung {
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

export class GoiKhongChietKhauTiemChung {
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

export class ListInChiDinhTiemChung {
    constructor(
        public nhomChiDinhId: number = 0,
        public dichVuChiDinhId: number = 0,
    ) { }
}

export class YeuCauGoiDichVuTiemChung {
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
        public ListNoiThucHiens: Array<GoiDichVuChiTietNoiThucHienTiemChungValidation> = [],
        public DichVuChiDinhTheoGois: Array<string> = []
    ) { }
}

export class GoiDichVuChiTietNoiThucHienTiemChungValidation {
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


export class LookupCheckItemTiemChung {
    constructor(
        public KeyId: string,
        public DisplayName: string,
        public IsCheck: boolean = false
    ) { }
}

export class XoaChiDinhTiemChungViewModel {
    constructor(
        public DichVuId: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public LastModifiedYeuCauKhamBenh: any = null,
        public IsKhamBenhDangKham: boolean = false,
        public IsKhamDoanTatCa: boolean = false,
        public LyDoHuyDichVu: string = null
    ) { }
}

export class GridItemYeuCauDichVuKyThuatTiemChung {
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

        //bvhd-3825
        public LaDichVuKhuyenMai: boolean = null,
        public IsSwapDichVuKhuyenMai: boolean = false,
    ) {
    }
}

export class TrangThaiYeuCauDichVuKyThuatTiemChungObjEnum {
    constructor(
        public ChuaThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.ChuaThucHien,
        public DangThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DangThucHien,
        public DaThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DaThucHien,
        public DaHuy: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DaHuy
    ) { }
}

export class ChiDinhGoiDichVuThuongDungDichVuLoiTiemChung {
    constructor(
        public GoiDichVuId: number = null,
        public NhomGoiDichVu: number = null,
        public DichVuId: number = null,
        public LoaiLoi: number = null,
        public TenLoi: string = null,
        public KhongThem: boolean = false
    ) { }
}

export class ChiDinhGoiDichVuThuongDungTiemChung {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public GoiDichVuIds: Array<number> = [],
        public DichVuKhongThems: Array<ChiDinhGoiDichVuThuongDungDichVuLoiTiemChung> = [],
        public DanhSachDichVuChons: Array<any> = [],
        public IsKhamBenhDangKham: boolean = false,
        public DuocHuongBaoHiem: boolean = null,
        public LaPhauThuatThuThuat: boolean = false,
        public PhieuDieuTriId: number = null
    ) { }
}

export class ChiDinhGoiDichVuTheoBenhNhanDichVuLoiTiemChung {
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

export class ChiDinhGoiDichVuTheoBenhNhanTiemChung {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public NoiTruPhieuDieuTriId: number = null,
        public DichVus: Array<ChiTietGoiDichVuChiDinhTheoBenhNhanTiemChung> = [],
        public DichVuKhongThems: Array<ChiDinhGoiDichVuTheoBenhNhanDichVuLoiTiemChung> = [],
        public IsKhamBenhDangKham: boolean = false,
        public IsPTTT: boolean = false
    ) { }
}

export class ChiTietGoiDichVuChiDinhTheoBenhNhanTiemChung {
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

export class GoiDichVuMarketingDangChonTiemChung {
    constructor(
        public YeuCauGoiDichVuId: number = null,
        public TenGoiDichVu: string = null,
        public TongTienConBaoLanhDuoc: number = 0,
        public DichVus: Array<ChiTietGoiDichVuChiDinhTheoBenhNhanTiemChung> = []
    ) { }
}

export class TrangThaiThucHienYeuCauDichVuKyThuatTiemChung {
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