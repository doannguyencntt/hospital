import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch {
    constructor(
        public HinhThucDenId: number = null,
        public NoiGioiThieuId: number = null,
        public MaYeuCauTiepNhan: string = "0",
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}

export class ChiTietHoaHongCuaNguoiGioiThieu {
    public constructor(
        public SoTienDV: number = null,
    ) { }
}


export class DoanhThuNhaThuocVo {
    public constructor(
        public Id: number = null,
        public ThanhTien: number = null,
        public TienMat: number = null,
        public Chuyen: number = null,
        public Pos: number = null,
        public CongNo: number = null,
    ) { }
}

export class InBaoCaoChiTietHoaHongCuaNguoiGioiThieu {
    constructor(
        public KhoId: number = 0,
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}