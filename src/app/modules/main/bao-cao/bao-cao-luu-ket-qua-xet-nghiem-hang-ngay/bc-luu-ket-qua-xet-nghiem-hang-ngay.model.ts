import { Sort } from "src/app/shared/models/common.model";

export class LocKetQua {
    constructor(
        public NoiChiDinhId : number = null,
        public BHYT : boolean = null,
        public KhamSucKhoe:boolean =null,
        public TuNgay : Date = null,
        public DenNgay : Date = null,  
        public Skip: number =0,
        public Take: number =50 ,
        public PageSize: number =50,
        public SearchString: string ="",
        public AdditionalSearchString: string ="",
        // public searchTerms: string = "",
        public Sort: Sort[] = []  ,
        public Hosting :string="",
        public TuNgayUTC : string = null,
        public DenNgayUTC : string = null,  
    ) { }
}


export class NoiChiDinh{
    constructor(     
        public KeyId: number = 0,  
        public DisplayName: string = "Tất cả "      
    ) { }
}
export class DateTimeFilter {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = new Date,
    ) { }
}
export class BHYT{
    constructor(     
        public KeyId: number = 0,  
        public DisplayName: string = "Tất cả"      
    ) { }
}
export class KSK{
    constructor(     
        public KeyId: number = 0,  
        public DisplayName: string = "Tất cả"      
    ) { }
}