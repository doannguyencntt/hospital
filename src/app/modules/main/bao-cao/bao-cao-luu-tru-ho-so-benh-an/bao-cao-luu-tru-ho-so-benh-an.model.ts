import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class SearchBaoCao {
    constructor(
        public KhoaId : number = null,
        public DateStart: Date = null,
        public DateEnd: Date = null,
        public TenKhoa : string = null
    ) { }
}

export class DateTimeFilter {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = new Date,
    ) { }
}
export class BaoCaoLuuHoSoBenhAnVo  {
    constructor(
        public KhoaId:number =0,
        public NgayVaoVien:Date =null,
        public NgayRaVien: Date =null,
        public hosting : string = null
    ) { }
}
export class BaoCaoLuuTruHoSoBenhAnSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public KhoaId: number = null,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = [],
        public BHYT: boolean = false,
        public VienPhi: boolean = true
    ) { }
}

export class InBaoCaoLuuTruHoSoBenhAn {
    constructor(
        public KhoaId: number = 0,
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}
