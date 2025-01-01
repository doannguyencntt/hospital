import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoDoanhThuKhamDoanTheoNhomDVSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public SearchString: string = "",
        public Hosting: string = null
    ) { }
}

export class DoanhThuKhamDoanTheoNhomDV {
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

export class InBaoCaoDoanhThuKhamDoanTheoNhomDV {
    constructor(
        public KhoId: number = 0,
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}