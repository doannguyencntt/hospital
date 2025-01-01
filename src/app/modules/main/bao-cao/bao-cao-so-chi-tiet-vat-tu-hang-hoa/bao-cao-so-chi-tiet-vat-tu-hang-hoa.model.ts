import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoSoChiTietVatTuHangHoaSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,

        public KhoId: number = 0,     
        public DuocPhamHoacVatTuBenhVienId: number = 0,     
        public LoaiDuocPhamHoacVatTu: number = 0,  
           
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}

export class SoChiTietVatTuHangHoa {
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

export class InBaoCaoSoChiTietVatTuHangHoa {
    constructor(
        public KhoId: number = 0,
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}

export class DataChiTietVatTuHangHoa {
    constructor(
        public GroupNgayXuatNhap: string = null,        
        public NgayXuatNhap: Date = null,
        public NgayXuatNhapStr: string = null,
        public SoChungTu: string = null,
        public NgayChungTu: any = null,
        public NgayChungTuStr: string = null,
        public DienGiai: string = null,
        public DonGia: number = 0,
        public SoLuongNhap: number = 0,
        public ThanhTienNhap: number = 0,
        public SoLuongXuat: number = 0,
        public ThanhTienXuat: number = 0,
        public SoLuongTon: number = 0,
        public ThanhTienTon: number = 0,
    ) {
    }
}