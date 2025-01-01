import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoTonKhoSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgay: any = null,
        public DenNgay: any = null,

        public KhoId: number = null,
        public DuocPhamId: number = null,
        public MayXetNghiemId: number = null,

        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}

export class BaoCaoTonKho {
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

export class ThongTinChiTietXetNghiem {
    constructor(
        public KhoId: number = null,
        public DuocPhamId: number = null,
        public MayXetNghiemId: number = null,

        public TenDuocPham: string = null,
        public TenKho: number = null,
        public TuNgay: any = null,
        public DenNgay: any = null,
    ) {
    }
}