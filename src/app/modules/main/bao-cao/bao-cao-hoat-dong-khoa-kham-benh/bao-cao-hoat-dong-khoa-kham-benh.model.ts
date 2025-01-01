import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoHoatDongKhoaKhamBenhSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public FromDateHoanThanh: any = null,
        public ToDateHoanThanh: any = null,
        public TuNgayFormatHoanThanh: any = null,
        public DenNgayFormatHoanThanh: any = null,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}
export class InBaoCaoHoatDongKhoaKhamBenh {
    constructor(
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}