import { Sort } from 'src/app/shared/models/common.model';

export class BangKeThuocVatTuSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,

        public TuNgay: Date = null,
        public DenNgay: Date = null,

        public PhongBenhVienId: number = 0,
        public MaYeuCauTiepNhan: string = null,

        //BVHD-3860
        public BangKeThuocPhi: PhiBangKeThuoc = new PhiBangKeThuoc(),

        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}

export class ThongTinBenhNhanPhauThuatQueryInfo {
    constructor(
        public PhongBenhVienId: number = 0,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
    ) { }
}
export class ThongTinBenhNhanLookupItemVo {
    constructor(
        public KeyId: number = 0,
        public DisplayName: string = null,
        public MaYeuCauTiepNhan: string = null,
        public MaBN: string = null,
        public MaBA: string = null
    ) { }
}

export class InBangKeThuocVatTu {
    constructor(
        public KhoId: number = 0,
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}

export class PhongPTLookupItemVo {
    constructor(
        public KeyId: number = 0,
        public DisplayName: string = null
    ) {
    }
}
export class DanhSachThuocVaVatTuPhauThuat {
    constructor(
        public STT: string = null,
        public Loai: string = null,
        public Nhom: string = null,
        public TenDichVu: string = null,
        public SoChungTu: string = null,
        public HamLuongNoiSanXuat: string = null,
        public DonViTinh: string = null,
        public SoLuong: number = null,
        public DonGia: number = 0,
        public ThanhTien: number = 0,
    ) {
    }
}

//BVHD-3860
export class PhiBangKeThuoc {
    public constructor(
        public TinhPhi: boolean = true,
        public KhongTinhPhi: boolean = false
    ) { }
}