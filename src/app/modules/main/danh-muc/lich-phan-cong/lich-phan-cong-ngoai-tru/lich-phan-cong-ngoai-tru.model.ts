import { DateTime } from 'luxon';
import { publish } from 'rxjs/operators';

export class LichPhanCongNgoaiTru {
    constructor(
        public PhongNgoaiTruId: number = 0,
        public NhanVienId: number = 0,
        public khoaPhongId: number = 0,
        public NgayPhanCong: Date = null,
        public LoaiThoiGianPhanCong: number = 1,
        public Tuan1Display: string = "",
        public Tuan2Display: string = "",
        public Tuan3Display: string = "",
        public Tuan4Display: string = "",
        public Tuan5Display: string = "",
        public Tuan6Display: string = ""
    ) { }
}

export class NhanVienLichPhanCong {
    constructor(
        public Id: number = 0,
        public PhongNgoaiTruId: number = 0,
        public NhanVienId: number = 0,
        public NgayPhanCong: Date = new Date,
        public LoaiThoiGianPhanCong: number = 1,
        public TenNhanVien : string = null,
        public IsBacSi : boolean = false,
        public IsUpdate : boolean = false,
        public IsDelete : boolean = false,
        public Thu : number = 0,
        public IndexNV : number = 0,
        public IsDeleteHiden : boolean = false,
        public ListIdValidator : number[]=[]
    ) { }
}

export class Phong{
    constructor(
        public Id: number = 0,
        public TenPhong : string = null, // TenPhong
        public PhongNgoaiTruId: number = 0,       // PhongId
        public ThoiGianTrucNhanVienBuoiSangs : ThoiGianTrucNhanVien=null,
        public ThoiGianTrucNhanVienBuoiChieus : ThoiGianTrucNhanVien=null,
        public NhanVienTrucDelete : NhanVienLichPhanCong[]=[],
        public IsPrint : boolean = false,
        public IsCopy : boolean = false,
        public CopyForWeek : number = 0,
        public CaTruc: string = null,
        public CaTrucInt : number = 0,
        public BacSis : NhanVienLichPhanCong[]=[],
        public YTas : NhanVienLichPhanCong[]=[], 
        public ToDate : Date = null,
        public FromDate : Date = null,
        public HostingPrint : string = null,
        public LookupDataYta : LookupBacSisYta= null,
        public LookupDataBacsi : LookupBacSisYta= null ,
        public IsShowCopyForWeek : boolean = true,
        public TenKhoa : string = null, 
    ){} 
}

export class ThoiGianTrucNhanVien
{   
    constructor( 
        public NhanVienTrucT2 : NhanVienLichPhanCong[]=[],
        public NhanVienTrucT3 : NhanVienLichPhanCong[]=[],
        public NhanVienTrucT4 : NhanVienLichPhanCong[]=[],
        public NhanVienTrucT5 : NhanVienLichPhanCong[]=[],
        public NhanVienTrucT6 : NhanVienLichPhanCong[]=[],
        public NhanVienTrucT7 : NhanVienLichPhanCong[]=[],
        public NhanVienTrucT8 : NhanVienLichPhanCong[]=[],

       
    ){} 
}

export class ShowDateTime
{   
    constructor( 
        public DateTimeT2 : Date = new Date,
        public DateTimeT3 : Date = new Date,
        public DateTimeT4 : Date = new Date,
        public DateTimeT5 : Date = new Date,
        public DateTimeT6 : Date = new Date,
        public DateTimeT7 : Date = new Date,
        public DateTimeT8 : Date = new Date,
    ){} 
}
 
export class LookupBacSisYta {
    constructor(
        public DisplayName: string = "",
        public KeyId: number = 0
    ) {
    }
} 
