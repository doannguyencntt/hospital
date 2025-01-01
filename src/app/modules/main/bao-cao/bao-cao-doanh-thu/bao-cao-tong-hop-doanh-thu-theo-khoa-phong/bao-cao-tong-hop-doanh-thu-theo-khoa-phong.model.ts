import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class Search {
    constructor(
        public RangeDateTimeFilter: DateTimeFilter = new DateTimeFilter,
        public RangeDateTimeSoSanh: DateTimeFilter = new DateTimeFilter,
    ) { }
}

export class DateTimeFilter {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = new Date,
    ) { }
}
export class DoanhThuTheoKhoaPhong {
    constructor(
        public STT: number = null,
        public KhoaPhong: string = null,
        public Thang: string = null,
        public DoanhThuThang : number = 0,
        public MienGiamThang : number = 0,
        public KhacThang : number =0,
        public BHYTThang : number =0,
        public DoanhThuThuanThang : number = 0,
        public KySoSanh: string = null,
        public DoanhThuKy : number = 0,
        public MienGiamKy : number = 0,
        public KhacKy : number = 0,
        public BHYTKy : number = 0,
        public DoanhThuThuanKy : number = 0,
    ) { }
}
export class BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo  {
    constructor(
        public BacSyId:number =0,
        public TuNgay:Date =null,
        public DenNgay: Date =null,
        public KySoSanhTuNgay:Date =null,
        public KySoSanhDenNgay: Date =null,
        public Skip: number =0,
        public Take: number =50 ,
        public PageSize: number =50,
        public SearchString: string ="",
        public AdditionalSearchString: string ="",
        public Sort: Sort[] = []
    ) { }
}