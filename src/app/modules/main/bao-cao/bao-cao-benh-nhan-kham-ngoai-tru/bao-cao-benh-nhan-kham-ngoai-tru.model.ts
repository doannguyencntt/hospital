import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoBenhNhanKhamNgoaiTruSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public KhoaId: number = null,
        public PhongId: number = null,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}

export class BaoCaoBenhNhanKhamNgoaiTru {
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

export class InBaoCaoBenhNhanKhamNgoaiTru {
    constructor(
        public KhoId: number = 0,
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {}
}