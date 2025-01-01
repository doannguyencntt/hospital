import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoHoatDongNoiTruSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public NoiDieuTriId: any = null,
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