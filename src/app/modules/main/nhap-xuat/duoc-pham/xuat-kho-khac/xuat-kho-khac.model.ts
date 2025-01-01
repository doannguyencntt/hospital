import { RangeDate } from "../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";

export class XuatKhoKhac {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public TenKhoXuat: string = null,
        public NguoiXuatId: number = null,
        public TenNguoiXuat: string = null,
        public NguoiNhanId: number = null,
        public TenNguoiNhan: string = null,
        public LyDoXuatKho: string = null,
        public NhanVienDuyetId: number = null,
        public TenNhanVienDuyet: string = null,
        public NgayDuyet: Date = null,
        public NgayXuat: Date = null,
        public LaLuuDuyet: boolean = false,
        public TraNCC: boolean = null,
        public DuocDuyet: boolean = null,
        public LoaiKho: number = null,
        public NhaThauId: number = null,
        public TenNhaThau: string = null,
        public NhapKhoDuocPhamId: number = null,
        public SoChungTu: string = null,
        public YeuCauXuatKhoDuocPhamChiTiets: YeuCauXuatKhoDuocPhamChiTiet[] = [],
        public YeuCauXuatKhoDuocPhamChiTietHienThis: YeuCauXuatKhoDuocPhamGridVo[] = []
    ) {
    }
}

export class YeuCauXuatKhoDuocPhamChiTiet {
    constructor(
        public Id: number = 0,
        public SoLuongXuat: number = null,
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: boolean = null,
        public KhoXuatId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
        public MayXetNghiemId: number = null,
    ) {
    }
}

export class YeuCauXuatKhoDuocPhamChiTietVoSearch {
    constructor(
        public KhoXuatId: number = null,
        public NhaThauId: number = null,
        public SoChungTu: string = null,
        public TraNCC: boolean = null,
        public SearchString: string = null,
        public DuocPhamBenhViens: XuatKhacDuocPhamBenhVienChiTietVo[] = [],
    ) {
    }
}

export class XuatKhacDuocPhamBenhVienChiTietVo {
    constructor(
        public DuocPhamBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public LaDuocPhamBHYT: string = null,
        public SoLo: string = null,
        public DonGia: number = null,
        public HanSuDung: Date = null,    
        public XetNghiemIdDauTienMayXetNghiem: number = null,
        public TenXetNghiemDauTienMayXetNghiem: string = null,  
    ) {
    }
}

export class YeuCauXuatKhoDuocPhamGridVo {
    constructor(
        public Id: number = null,
        public DuocPhamBenhVienId: number = null,
        public Ten: string = null,
        public DVT: string = null,
        public LaDuocPhamBHYT: boolean = null,
        public Loai: string = null,
        public SoLuongTon: number = null,
        public SoLuongTonDisplay: string = null,
        public SoLuongXuat: number = null,
        public DuocPhamBenhVienPhanNhomId: number = null,
        public TenNhom: string = null,
        public Ma: string = null,
        public SoDangKy: string = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
        public XetNghiemIdDauTienMayXetNghiem: number = null,
        public TenXetNghiemDauTienMayXetNghiem: string = null,
    ) {
    }
}


export class XuatKhoKhacGrid {
    constructor(
        public NgayXuatTuFormat: any = null,
        public NgayXuatDenFormat: any = null,
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = true,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public SearchString: string = null,
        public RangeFromDate: RangeDate = new RangeDate(),
    ) {
    }
}
export class XuatKhoKhacGridDaDuyet {
    constructor(
        public XuatKhoDuocPhamId: number = null,
        public SearchString: string = null,
    ) {
    }
}

export class PhieuXuatKhoKhacVo {
    constructor(
        public Id: number = null,
        public HostingName: string = null,
        public CoNCC: boolean = null,
        public LaDuocPham: boolean = null,
        public DuocDuyet: boolean = null,
    ) {
    }
}