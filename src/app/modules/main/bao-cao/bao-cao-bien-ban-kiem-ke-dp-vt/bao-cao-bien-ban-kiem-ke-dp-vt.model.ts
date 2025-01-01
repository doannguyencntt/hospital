import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoBienBanKiemKeDpVtSearch {
    constructor(
        public GioThongKe: any = null,
        public GioThongKeFormat: any = null,
        public KhoId:number = 0,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}

export class InBaoCaoBienBanKiemKeDpVt {
    constructor(
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}
