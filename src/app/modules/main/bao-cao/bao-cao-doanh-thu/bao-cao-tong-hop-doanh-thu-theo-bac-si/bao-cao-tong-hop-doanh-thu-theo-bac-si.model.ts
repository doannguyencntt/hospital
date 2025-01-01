import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class Search{
    constructor(
        public RangeDateTimeFilter: rangeDate = new rangeDate,
    ){}
}

export class rangeDate {
    constructor(
        public DateStart:Date = null,
        public DateEnd:Date = new Date,
        
    ){}
}

export class BaoCaoTongHopDoanhThuBacSy {
    constructor(
        public Stt: number = null,
        public HoTenBacSi: string = null,
        public DoanhThu: number = null,
        public MienGiam : number = 0,
        public Bhyt : number = 0,
        public ThucThu : number = 0,
        public KhoanGiamTruKhac : number = 0
    ) { }
}
export class BaoCaoDoanhThuBacSiQueryInfoQueryInfo  {
    constructor(
        public TuNgay:Date =null,
        public DenNgay: Date =null,
        public Skip: number =0,
        public Take: number =50 ,
        public PageSize: number =50,
        public SearchString: string ="",
        public AdditionalSearchString: string ="",
        public Sort: Sort[] = []
    ) { }
}