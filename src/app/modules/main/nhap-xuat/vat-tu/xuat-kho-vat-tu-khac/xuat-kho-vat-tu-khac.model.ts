import { RangeDate } from "../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";

export class XuatKhoVatTuKhac {
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
        public NhapKhoVatTuId: number = null,
        public SoChungTu: string = null,
        public YeuCauXuatKhoVatTuChiTiets: YeuCauXuatKhoVatTuChiTiet[] = [],
        public YeuCauXuatKhoVatTuChiTietHienThis: YeuCauXuatKhoVatTuGridVo[] = []
    ) {
    }
}

export class YeuCauXuatKhoVatTuChiTiet {
    constructor(
        public Id: number = 0,
        public SoLuongXuat: number = null,
        public VatTuBenhVienId: number = null,
        public LaVatTuBHYT: boolean = null,
        public KhoXuatId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,

    ) {
    }
}

export class YeuCauXuatKhoVatTuChiTietVoSearch {
    constructor(
        public KhoXuatId: number = null,
        public SearchString: string = null,
        public NhaThauId: number = null,
        public SoChungTu: string = null,
        public TraNCC: boolean = null,
        public VatTuBenhViens: XuatKhacVatTuBenhVienChiTietVo[] = [],
    ) {
    }
}

export class XuatKhacVatTuBenhVienChiTietVo {
    constructor(
        public VatTuBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public LaVatTuBHYT: string = null,
        public SoLo: string = null,
    ) {
    }
}

export class YeuCauXuatKhoVatTuGridVo {
    constructor(
        public Id: number = null,
        public VatTuBenhVienId: number = null,
        public Ten: string = null,
        public DVT: string = null,
        public LaVatTuBHYT: boolean = null,
        public Loai: string = null,
        public SoLuongTon: number = null,
        public SoLuongTonDisplay: string = null,
        public SoLuongXuat: number = null,
        public NhomVatTuId: number = null,
        public TenNhom: string = null,
        public Ma: string = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
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
        public XuatKhoVatTuId: number = null,
        public SearchString: string = null,
    ) {
    }
}

