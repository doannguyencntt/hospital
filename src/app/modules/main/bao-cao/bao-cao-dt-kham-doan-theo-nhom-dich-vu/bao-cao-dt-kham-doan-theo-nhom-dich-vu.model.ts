import { Sort } from "src/app/shared/models/common.model";

export class BCDoanhThuKhamDoanTheoNhomDVSearch{
    constructor(
        public CongTyId: number = 0,
        public HopDongId: number = 0,
        public FromDate: any = null,
        public ToDate: any = null,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}