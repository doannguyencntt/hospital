import { RangeDate } from "../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";
import { Sort } from 'src/app/shared/models/common.model';
export class Search {
    constructor(
        // tslint:disable-next-line: no-use-before-declare
        public FromToDate: SearchDateRange = new SearchDateRange(),
        // tslint:disable-next-line: no-use-before-declare
        public Searchterm: string = null,
        public KhoaChoice: number = null
    ) { }
}

export class BaoCaoClsBacSi {
    constructor(
        public KhoaId: number = null,
        public BacSiKetLuanId: number = null,
        // public RangeFromDate: RangeDate = new RangeDate(),
        public FromDate: any = null,
        public ToDate: any = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
    ) {
    }
}

export class BaoCaoClsBacSiSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}


export class SearchDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
    ) { }
}

export class BaoCaoThucHienClsVo {
    public constructor(
        public Id: number = null,
        public NhomDv: string = null,
        public ThoiGianChiDinh: any = null,
        public ThoiGianChiDinhDisplay: string = null,
        public MaTn: string = null,
        public HoTenBn: string = null,
        public BenhNhanId: number = null,
        public NgaySinh: any = null,
        public NgaySinhDisplay: string = null,
        public GioiTinh: number = null,
        public KhoaChiDinh: string = null,
        public MaDv: string = null,
        public DichVu: string = null,
        public PhongThucHien: string = null,
        public BsKetLuan: string = null,
        public ThoiGianCoKq: any = null,
        public ThoiGianCoKqDisplay: string = null
    ) { }
}
