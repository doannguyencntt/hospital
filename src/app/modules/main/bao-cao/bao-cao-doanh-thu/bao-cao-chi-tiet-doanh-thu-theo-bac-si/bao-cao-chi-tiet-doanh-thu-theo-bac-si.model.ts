import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class Search {
    constructor(
        public RangeDateTimeFilter: DateTimeFilter = new DateTimeFilter,
    ) { }
}

export class DateTimeFilter {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = new Date,
    ) { }
}
export class BaoCaoDanhThuTheoBacSi {
    constructor(
        //Thông tin bác sĩ và người bệnh
        public STT: number = null,
        public MaTT: string = null,
        public NgayForMat: string = null,
        public MaBN: string = null,
        public HoVaTenBenhNhan: string = null,
        public TenDichVuChiDinh: string = null,
        public MienGiam: number = 0,
        public Khac: number = 0,
        //Thông tin tháng
        public Thang: string = null,

        //Thông tin doanh thu của bác sĩ
        public DoanhThu: number = 0,
        public BHYT: number = 0,
        public DoanhThuThuan: number = 0,
    ) { }
}
export class BaoCaoChiTietDoanhThuQueryInfoQueryInfo  {
    constructor(
        public BacSiId:number =0,
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
export class DanhSachBacSy {
    constructor(     
        public KeyId: number = 0,  
        public DisplayName: string = "Chọn bác sĩ"      
    ) { }
}
