import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoDoanhThuTheoNhomBenhVienSearch {
    constructor(
        public TuNgay: any = null,
        public DenNgay: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null
    ) { }
}


export class SearchThuNgan {
    constructor(
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public PhongBenhVienId: number = 0,
        public NhanVienId: number = 0,
    ) { }
}
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
export class BaoCaoThuTienVienPhi {
    constructor(
        public STT: number = 0,
        public Nhom: string = null,
        public MaTN: string = null,
        public HoVaTen: string = null,
        public NamSinh: string = null,
        public GioiTinh: string = null,
        public SoBenhAn: string = null,
        public NoiDung: string = null,
        public NgayThu: Date = null,
        public NgayThuStr: string = null,
        public NguoiGioiThieu: string = null,

        public KhamBenh: number = null,
        public XetNghiem: number = null,
        public NoiSoi: number = null,
        public NoiSoiTMH: number = null,

        public SieuAm: number = null,
        public XQuang: number = null,
        public CTScan: number = null,
        public MRI: number = null,

        public DienTimDienNao: number = null,
        public TDCNDoLoangXuong: number = null,
        public ThuThuat: number = null,
        public PhauThuat: number = null,

        public NgayGiuong: number = null,
        public DVKhac: number = null,
        public Thuoc: number = null,
        public VTYT: number = null
    ) { }
}
export class BaoCaoDoanhThuTheoNhomBenhVienQueryInfo {
    constructor(
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public NhanVienId: number = 0,
        public PhongBenhVienId: number = 0,
        public Skip: number = 0,
        public Take: number = 10,
        public PageSize: number = 10,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        // public searchTerms: string = "",
        public Sort: Sort[] = []
    ) { }
}

