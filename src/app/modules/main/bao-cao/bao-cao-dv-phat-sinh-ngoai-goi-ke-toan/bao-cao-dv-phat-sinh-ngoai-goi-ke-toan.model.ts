import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';
export class SearchThuNgan {
    constructor(
        public TuNgay : Date = null,
        public DenNgay : Date = null,
        public HopDongId : number = 0,
        public CongTyId : number = 0,
    ) { }
}
export class Search {
    constructor(
        public RangeDateTimeFilter: DateTimeFilter = new DateTimeFilter,     
        public HopDongId : number = 0,
        public CongTyId : number = 0,
    ) { }
}

export class DateTimeFilter {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = new Date,
    ) { }
}
export class BaoCaoDichVuPhatSinhNgoaiGoi {
    constructor(    
        public NhanVienId : number = 0,
        public STT: number = null,      
        public NgayThu: Date,
        public NgayThuStr: string = null,        
        public MaBenhNhan: string = null,
        public TenBenhNhan: string = null,
        public SoBenhAn: string = null,
        public GoiDichVu: string = null,
        public SoBLHD: string = null,
 
        public SoTienThu: number = 0,
        public HuyThu: number = 0,
        public ThucThu: number = 0,

        public CongNo: number = 0,
        public TienMat: number = 0,
        public ChuyenKhoan: number = 0,
        public Pos: number = 0,      
        public Voucher: number = 0,

        public LyDo: string = null,
        public NguoiThu: string = null,        
    ) { }
}
export class BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo  {
    constructor(
        public TuNgay:Date =null,
        public DenNgay: Date =null,
        public HopDongId:  number = 0,
        public CongTyId : number = 0,
        public Skip: number =0,
        public Take: number =50 ,
        public PageSize: number =50,
        public SearchString: string ="",
        public AdditionalSearchString: string ="",
        // public searchTerms: string = "",
        public Sort: Sort[] = []
    ) { }
}

