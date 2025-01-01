import { Sort } from "src/app/shared/models/common.model";

export class BaoCaoSoPhucTrinhPhauThuatThuThuatSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public KhoaId: number = null,

        //BVHD-3636
        public KhoaPhongIds: Array<string> = [],
        public NoiThucHienIds: Array<string> = [],
        public LaPhauThuat: boolean = true,
        public LaThuThuat: boolean = true,

        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}

export class BaoCaoSoPhucTrinhPhauThuatThuThuat {
    constructor(
        public STT: number = null,
        public Ten: string = null,
        public DVT: string = null,
        public SLTonDauKy: number = 0,
        public ThanhTienTonDauKy: number = 0,
        public SLNhapTrongKy: number = 0,
        public ThanhTienNhapTrongKy: number = 0,
        public SLXuatTrongKy: number = 0,
        public ThanhTienXuatTrongKy: number = 0,
        public SLTonCuoiKy: number = 0,
        public Gia: number = 0,
        public ThanhTien: number = 0,
    ) { }
}

export class InBaoCaoSoPhucTrinhPhauThuatThuThuat {
    constructor(
        public KhoId: number = 0,
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {}
}