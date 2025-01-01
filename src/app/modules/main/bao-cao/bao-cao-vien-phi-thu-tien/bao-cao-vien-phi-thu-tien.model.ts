import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class SearchBaoCao {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = null,
        public NhanVienThuNganId: number =null,
        public NhanVienThuNgan: string =null,
    ) { }
}

export class DateTimeFilter {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = new Date,
    ) { }
}
export class BaoCaoVienPhiThuTienVo  {
    constructor(
        public TuNgay:Date =null,
        public DenNgay: Date =null,
        public NhanVienThuNganId: number =null,
        public hosting : string = null
    ) { }
}
export class BaoCaoVienPhiThuTien  {
    constructor(
        public STT:number =null,
        public Ngay: Date =null,
        public NgayString: string =null,
        public SoBLHD: string =null,
        public MaYTe : string = null,
        public TenBenhNhan : string = null,
        public SoBenhAn : string = null,
        public TamUng : number = null,
        public HoanUng : number = null,
        public ThuTien : number = null,
        public Hoan : number = null,
        public GoiDichVu : number = null,
        public CongNo : number = null,
        public Pos : number = null,
        public ChuyenKhoan : number = null,
        public Tienmat : number = null,
        public CongNoCapNhat : number = null,
        public PosCapNhat : number = null,
        public ChuyenKhoanCapNhat : number = null,
        public TienmatCapNhat : number = null,  
    ) { }
}
