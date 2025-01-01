import { RangeDate } from '../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model';


export class YeuCauTraThuocTuBenhNhanGrid {
    constructor(
        public NgayYeuCauTuFormat: any = null,
        public NgayYeuCauDenFormat: any = null,
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public SearchString: string = null,
        public RangeFromDate: RangeDate = new RangeDate(),
    ) {
    }
}

export class YeuCauTraThuocTuBenhNhan {
    constructor(
        public SoPhieu: string = null,
        public KhoaHoanTraId: number = null,
        public TenKhoaTra: string = null,
        public KhoTraId: number = null,
        public TenKhoTra: string = null,
        public NhanVienYeuCauId: number = null,
        public TenNhanVienYeuCau: string = null,
        public NgayYeuCau: Date = null,
        public YeuCauDuocPhamBenhVienId: number = null,
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: boolean = null,
        public GhiChu: string = null,
        public LyDoKhongDuyet: string = null,
        public IsCreate: boolean = null,
        public RangeFromDate: RangeDate = new RangeDate(),
        public TuNgay: any = null,
        public DenNgay: any = null,
        public YeuCauTraThuocTuBenhNhanChiTiets: YeuCauTraThuocTuBenhNhanChiTiet[] = [],
    ) {
    }
}

export class YeuCauTraThuocTuBenhNhanChiTiet {
    constructor(
        public YeuCauDuocPhamBenhVienId: number = null,
        public DuocPhamBenhVienId: number = null,
    ) {
    }
}
