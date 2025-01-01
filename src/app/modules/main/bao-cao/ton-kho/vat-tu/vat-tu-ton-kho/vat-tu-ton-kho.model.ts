import { SortDescriptor } from '@progress/kendo-data-query';

export class SearchVatTuTonKhoCanhBao {
    public KhoId: number = null;
    public TenKho: string = null;
    public SearchString: string = null;
    public CanhBaoId: number = 0;
    public LoaiCanhBao: string = "Tất cả";
}

export class SearchVatTuTonKhoTongHop {
    public KhoId: number = null;
    public TenKho: string = null;
    public SearchString: string = null;
}

export class SearchVatTuTonKhoNhapXuat {
    public KhoId: number = null;
    public TenKho: string = null;
    public SearchString: string = null;
    public RangeDate: RangeDate = new RangeDate();
    public Sort: Sort[] = new Array<Sort>();
}

export class VatTuTonKhoNhapXuatChiTiet {
    public KhoId:number = null;
    public VatTuId:number = 0;
    public RangeDate: RangeDate = new RangeDate();
}

export class ChiTietVatTuTonKhoNhapXuat {
    constructor(
        public KhoId:number = null,
        public KhoDisplay: string = null,
        public VatTuId:number = 0,
        public TenVatTu: string = null,
    ){}
}

export class Sort {
    constructor(
        public Field: string = null,
        public Dir: string = null
    ){}
}

export class RangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = new Date(),
    ){}
}

export enum LoaiTonKhoVatTu {
    CanhBaoTonKhoVatTu = 1,
    TongHopTonKhoVatTu = 2,
    NhapXuatTonKhoVatTu = 3
}

export class QueryInfo {
    constructor(
        public AdditionalSearchString:string = null,
        public SearchString: string = "",
        public Sort: SortDescriptor[] = null,
    ){}
}
export class CapNhatTonKhoVatTuItem {
    constructor(
        public VatTuId:number = 0,
        public CapNhatTonKhoItemDetails: CapNhatTonKhoItemDetail[] = []
    ){}
}export class CapNhatTonKhoItemDetail {
    constructor(
        public Id:number = 0,
        public HanSuDung: Date = null,
        public SoLuong: number = null,
        public Loai: string = null,
    ){}
}

export class NhapKhoVatTuTonKhoViewModel {
    constructor(
        public Id:number = 0,
        public VatTuId:number = 0,
        public VatTu: string = null,
        public NhapKhoVatTuChiTiets: NhapKhoVatTuChiTietTonKhoViewModel[] = []
    ){}
}export class NhapKhoVatTuChiTietTonKhoViewModel {
    constructor(
        public Id:number = 0,
        public SoLo: string = null,
        public HanSuDung: Date = null,
        public MaRef: string = null,
        public MaVach: string = null,
        public DonGiaNhap: number = null,
        public VAT: number = null,
        public TiLeBHYTThanhToan: number = null,
        public LaVatTuBHYT: boolean = null,
        public SoLuong: number = null,
        public Loai: number = null,
    ){}
}