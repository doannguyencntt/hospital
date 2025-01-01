import { RangeDate } from '../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model';

export class DieuChuyenKhoNoiBoDuocPhamGrid {
    constructor(
        public NgayYeuCauTuFormat: any = null,
        public NgayYeuCauDenFormat: any = null,
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = true,
        public TuChoiDuyet: boolean = true,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public SearchString: string = null,
        public RangeFromDate: RangeDate = new RangeDate(),
    ) {
    }
}


export class YeuCauDieuChuyenDuocPham {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public TenKhoXuat: string = null,
        public KhoNhapId: number = null,
        public TenKhoNhap: string = null,
        public NguoiXuatId: number = null,
        public TenNguoiXuat: string = null,
        public NguoiNhapId: number = null,
        public TenNguoiNhap: string = null,
        public DuocKeToanDuyet: boolean = null,
        public NhanVienDuyetId: number = null,
        public TenNhanVienDuyet: string = null,
        public LyDoKhongDuyet: string = null,
        public NgayDuyet: Date = null,
        public HienThiCaThuocHetHan: boolean = false,
        public YeuCauDieuChuyenDuocPhamChiTiets: YeuCauDieuChuyenDuocPhamChiTiet[] = [],
        public YeuCauDieuChuyenDuocPhamChiTietHienThis: DieuChuyenDuocPhamGridVo[] = []
    ) {
    }
}

export class YeuCauDieuChuyenDuocPhamChiTiet {
    constructor(
        // public Id: number = 0,
        public SoLuongDieuChuyen: number = null,
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: boolean = null,
        public KhoXuatId: number = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
        public WillDelete: boolean = null,
        public DonGiaNhap: number = null,
    ) {
    }
}

export class YeuCauDieuChuyenDuocPhamPhieuIn {
    constructor(
        public YeuCauDieuChuyenDuocPhamId: number = 0,
        public HostingName: string = null,
        public TrangThai: boolean = null
    ) {
    }
}

export class YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch {
    constructor(
        public YeuCauDieuChuyenDuocPhamId: number = null,
        public KhoXuatId: number = null,
        public SearchString: string = null,
        public HienThiCaThuocHetHan: boolean = false,
        public DuocPhamBenhViens: DuocPhamBenhVienChiTietVo[] = [],
    ) {
    }
}

export class DuocPhamBenhVienChiTietVo {
    constructor(
        public DuocPhamBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public LaDuocPhamBHYT: string = null,
        public SoLo: string = null,
    ) {
    }
}


export class DieuChuyenDuocPhamGridVo {
    constructor(
        public Id: number = null,
        public DuocPhamBenhVienId: number = null,
        public Ten: string = null,
        public DVT: string = null,
        public LaDuocPhamBHYT: boolean = null,
        public Loai: string = null,
        public SoLuongTon: number = null,
        public SoLuongTonDisplay: string = null,
        public SoLuongDieuChuyen: number = null,
        public DuocPhamBenhVienPhanNhomId: number = null,
        public TenNhom: string = null,
        public Ma: string = null,
        public SoDangKy: string = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
        public DonGiaNhap: number = null,
    ) {
    }
}

export class DieuChuyenDuocPhamTheoNhomGridVo {
    constructor(
        public Id: string = null,
        public DuocPhamBenhVienId: string = null,
        public Ten: string = null,
        public DVT: string = null,
        public LaDuocPhamBHYT: boolean = null,
        public Loai: string = null,
        public SoLuongTon: number = null,
        public SoLuongTonDisplay: string = null,
        public SoLuongDieuChuyen: number = null,
        public DuocPhamBenhVienPhanNhomId: string = null,
        public TenNhom: string = null,
        public Ma: string = null,
        public SoDangKy: string = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public HanSuDungDisplay: string = null,
        public HanSuDung: Date = null,
        public HamLuong: string = null,



    ) {
    }
}

export class DuocPhamBenhVienDaSuaSoLuongXuat {
    constructor(
        public DuocPhamBenhVienId: number = null,
        public SoLuongDieuChuyen: number = null,
    ) {
    }
}

export class DuocPhamBenhVienTheoNhom {
    constructor(
        public DuocPhamBenhVienPhanNhomId: number = null,
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: boolean = null,
        public KhoXuatId: number = null,
        public SearchString: string = null,
        public DuocPhamBenhViens: DuocPhamBenhVienDaSuaSoLuongXuat[] = [],
    ) {
    }
}