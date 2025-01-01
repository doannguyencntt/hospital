import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoTongHopDoanhThuThaiSanDaSinhSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public StrQuery: string = "",
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}

export class InBaoCaoTongHopDoanhThuThaiSanDaSinh {
    constructor(
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}
