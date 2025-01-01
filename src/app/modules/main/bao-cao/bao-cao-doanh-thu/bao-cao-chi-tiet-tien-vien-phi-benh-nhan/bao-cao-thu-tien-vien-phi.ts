import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class Search {
    constructor(
        public RangeDateTimeFilter: DateTimeFilter = new DateTimeFilter,
    ) { }
}
export class NhanVienThuNgan {
    constructor(
        public KeyId: number = 0,
        public DisplayName: string = "Tất cả nhân viên"
    ) { }
}
export class QuayThuNgan {
    constructor(
        public KeyId: number = 0,
        public DisplayName: string = "Tất cả các quầy"
    ) { }
}
export class DateTimeFilter {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = new Date,
    ) { }
}
export class BaoCaoChiTietThuTienVienPhiBenhNhan {
    constructor(
        public STT: number = null,
        public MaTiepNhan: string = null,
        public NgayThu: Date =null,
        public NgayThuStr: string = null,
        public MaBenhNhan: string = null,
        public TenBenhNhan: string = null,
        public SoBenhAn: string = null,
        public TenDichVu: string = null,
        public BacSiChiDinhThucHien: string = null,

        public DoanhThu: number = 0,
        public BHYTChiTra: number = 0,
        public BHYTTuNhanChiTra: number = 0,
        public MiemGiam: number = 0,
        public Voucher: number = 0,
        public ThuTuBenhNhan: number = 0,
        public TienMat: number = 0,
        public ChuyenKhoan: number = 0,
        public Pos: number = 0,
        public NguoiThu: string = null,
        public Group: string = null,
    ) { }
}
export class SearchField  {
        constructor(
            public TuNgay:Date =null,
            public DenNgay: Date =null,
            public NhanVienId:  number = 0,
            public PhongBenhVienId:  number = 0,
        ) { }
}
export class BaoCaoThuPhiVienPhiQueryInfoQueryInfo  {
        constructor(
            public TuNgay:Date =null,
            public DenNgay: Date =null,
            public NhanVienId:  number = 0,
            public PhongBenhVienId:  number = 0,
            public Skip: number =0,
            public Take: number =50 ,
            public PageSize: number =50,
            public SearchString: string ="",
            public AdditionalSearchString: string ="",
            public Sort: Sort[] = []
        ) { }
}


