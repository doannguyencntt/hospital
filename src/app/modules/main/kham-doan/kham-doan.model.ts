import { GioiTinh } from "src/app/shared/enum/common-type.enums";
import { TrangThaiYeuCauKhamBenh } from "src/app/shared/enum/kham-benh.enum";
import { HinhThucKhamBenh, NhomDichVuChiDinhKhamSucKhoe, TrangThaiYeuCauTiepNhan } from "src/app/shared/enum/kham-doan.enum";

export class KhamDoanThongTinHanhChinh {
    constructor(
        public Id: number = null,
        public MaYeuCauTiepNhan: string = null,
        public MaBenhNhan: string = null,
        public HoTen: string = null,
        public TenGioiTinh: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public Tuoi: number = null,
        public SoDienThoaiDisplay: string = null,
        public TenNgheNghiep: string = null,
        public TenDanToc: string = null,
        public DiaChiDisplay: string = null,
        public TenCongTy: string = null
    ) { }
}

export class TimKiemHopDongKhamTheoCongTy {
    constructor(
        public CongTyId: number = null,
        public HopDongId: number = null,
        public NgayHopDong: Date = null,
        public LoaiHopDong: number = null,
        public TrangThai: number = null,
        public SoBenhNhan: number = null,
        public NgayHieuLuc: Date = null,
        public NgayKetThuc: Date = null,
    ) { }
}

export class HopDongKhamSucKhoeNhanVien {
    constructor(
        public Id: number = 0,
        public HopDongKhamSucKhoeId: number = null,
        public BenhNhanId: number = null,
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
        public GhiChuTienSuBenh: string = null,
        public GhiChuDiUngThuoc: string = null,
        public HuyKham: boolean = null,
        public YeuCauTiepNhan: YeuCauTiepNhanKhamSucKhoe = null,

        public DichVuChiDinhThems: Array<TiepNhanDichVuChiDinh> = new Array<TiepNhanDichVuChiDinh>(),
        public DichVuChiDinhTrongGois: Array<TiepNhanDichVuChiDinh> = new Array<TiepNhanDichVuChiDinh>()
    ) { }
}

export class YeuCauTiepNhanKhamSucKhoe {
    constructor(
        public Id: number = 0,
        public HopDongKhamSucKhoeNhanVien: HopDongKhamSucKhoeNhanVien = null,
        public TrangThaiYeuCauTiepNhan: TrangThaiYeuCauTiepNhan = null,
        public IsBatDauKhamTuDanhSach: boolean = false,
        public HopDongKhamSucKhoeNhanVienDanhSachId: number = null
    ) { }
}

export class TiepNhanDichVuChiDinh {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public LoaiDichVu: NhomDichVuChiDinhKhamSucKhoe = null,
        public TenNhomDichVu: string = null,
        public LoaiDichVuKyThuat: number = null,
        public DichVuBenhVienId: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public LoaiGiaId: number = null,
        public TenLoaiGia: string = null,
        public SoLan: number = null,
        public DonGiaBenhVien: number = null,
        public DonGiaMoi: number = null,
        public DonGiaUuDai: number = null,
        public DonGiaChuaUuDai: number = null,
        public ThanhTien: number = null,
        public NoiThucHienId: number = null,
        public TenNoiThucHien: number = null,
        public GoiKhamSucKhoeId: number = null,
        public TinhTrang: number = null,
        public TenTinhTrang: string = null,
        public LaDichVuKham: boolean = false,
        public ChuyenKhoaKhamSucKhoe: any = null,

        public LoaiNhomDichVuId: number = null,
        public TenGoiKhamSucKhoe: string = null,
        public SoLanChuaLuu: number = 0,
        public IsFirstLoad: boolean = true,

        //BVHD-3618
        public LaGoiChung: boolean = null,
        public GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId: number = null,
        public GoiKhamSucKhoeChungDichVuKyThuatNhanVienId: number = null,

        //BVHD-3668
        public GoiKhamSucKhoeDichVuPhatSinhId: number = null
    ) { }
}

export class TiepNhanDichVuChiDinhMultiselect {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public LoaiNhomDichVuId: number = null,
        public GoiKhamSucKhoeId: number = null,
        public DichVus: Array<string> = [],
        public DichVuThems: Array<any> = [],
        public DichVuGois: Array<any> = [],

        public HinhThucKhamBenh: HinhThucKhamBenh = null,
        public HopDongKhamSucKhoeId: number = null,

        //BVHD-3618
        public HopDongKhamSucKhoeNhanVienId: number = null,

        //BVHD-3668
        public LaGoiPhatSinh: boolean = false,
        //BVHD-3761
        public BieuHienLamSang: string = null,
        public DichTeSarsCoV2: string = null,
    ) { }
}

export class DichVuGoiChungXoaChuaBatDauKham {
    constructor(
        public GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId: number = null,
        public GoiKhamSucKhoeChungDichVuKyThuatNhanVienId: number = null
    ) { }
}
export class ListInChiDinh {
    constructor(
        public NhomChiDinhId: number = 0,
        public DichVuChiDinhId: number = 0,
    ) {
    }
}