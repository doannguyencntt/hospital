import { DichVuKyThuat } from '../../bao-hiem-y-te/dich-vu-ky-thuat/dich-vu-ky-thuat.model';

export class DichVuKyThuatBenhVien {
    constructor(
        public Ten: string = null,
        public Ma: string = null,
        public DichVuKyThuatId: number = null,
        public DichVuKyThuatModelText: string = null,
        public NgayBatDau: Date = new Date(),
        public NhomDichVuBenhVienId: number = null,
        public TenNhomDichVuBenhVien: string = null,
        public MaNhomDichVuBenhVien: string = null,

        public KhoaPhongIds: number[] = [],
        public NoiThucHienIds: string[] = null,
        public NoiThucHienUuTienId: number = null,
        public TenNoiThucHienUuTien: string = null,

        public ThongTu: string = null,
        public QuyetDinh: string = null,
        public NoiBanHanh: string = null,
        public SoMayThucHien: number = null,
        public SoCanBoChuyenMon: number = null,
        public ThoiGianThucHien: number = null,
        public SoCaChophep: number = null,
        public MoTa: string = null,
        public AnhXa: boolean = false,
        public HieuLuc: boolean = false,
        public CoUuDai: boolean = false,
        public LoaiMauXetNghiem: number = null,
        public DieuKienBaoHiemThanhToan: string = null,
        public DichVuKyThuatBenhVienGiaBaoHiems: DichVuKyThuatBenhVienGiaBaoHiems[] = [],
        public DichVuKyThuatVuBenhVienGiaBenhViens: DichVuKyThuatVuBenhVienGiaBenhViens[] = [],
        public DichVuKyThuat: DichVuKyThuat = null,
        public LoaiPhauThuatThuThuatId: number = null,
        public LoaiPhauThuatThuThuat: string = null,
        public CoInKetQuaKemHinhAnh: boolean = null,
        public TenKyThuat: string = null,
        public DichVuCoKetQuaLau: boolean = null,
        public DichVuKhongKetQua: boolean = null,

        public LaVacxin: boolean = false,
        public NhomDichVuVacxinId: number = null,
        public DichVuKyThuatBenhVienTiemChung: DichVuKyThuatBenhVienTiemChung = null,

        public DinhMucDuocPhamVTYTTrongDichVus : DinhMucDuocPhamVTYTTrongDichVu[] = [],

        public ChuyenKhoaChuyenNganhId: number = null,
        public ChuyenKhoaChuyenNganhText: string = null,
        public SoPhimXquang: number = null,        
    ) {
    }
}
export class DichVuKyThuatBenhVienGiaBaoHiems {
    constructor(
        public DichVuKhamBenhBenhVienId: number = 0,
        public Gia: number = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public TiLeBaoHiemThanhToan: number = null,
        public  DenNgayRequired:boolean=false
    ) {
    }
}
export class DichVuKyThuatVuBenhVienGiaBenhViens {
    constructor(
        public NhomGiaDichVuKyThuatBenhVienId: number = null,
        public NhomGiaDichVuKyThuatBenhVienText: string = null,
        public DichVuKhamBenhBenhVienId: number = 0,
        public Gia: number = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public  DenNgayRequired:boolean=false
    ) {
    }
}

export class DichVuKyThuatBenhVienTiemChung {
    constructor(
        public Id: number = 0,
        public DichVuKyThuatBenhVienId: number = null,
        public DuocPhamBenhVienId: number = null,
        public SoDangKy: string = null,
        public MaDuocPhamBenhVien: string = null,
        public Ten: string = null,
        public MaHoatChat: string = null,
        public HoatChat: string = null,
        public NhaSanXuat: string = null,
        public NuocSanXuat: string = null,
        public QuyCach: string = null
    ) {
    }
}
export class DinhMucDuocPhamVTYTTrongDichVu {
    constructor(
        public Id: number = 0,
        public DichVuKyThuatBenhVienId: number = null,
        public DuocPhamBenhVienId: number = null,
        public VatTuBenhVienId: number = null,
        public SoLuong: number = null,
        public KhongTinhPhi: boolean = null,
        public DuocPhamVTYTId: number = null,
        public EditValue: boolean = false
    ) {
    }
}
export class DuocPhamVTYT {
    constructor(
        public Id: number = null,
        public SoLuong: number = null,
        public SoLuongTon: number = null,
        public KhongTinhPhi: boolean = null,
        public LaDuocPham :number = 1,
        public DuocPhamVTYTText: string = null,
    ) {
    }
}
