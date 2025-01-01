import { EnumLoaiNoiChiDinh } from "src/app/shared/enum/phau-thuat-thu-thuat.enum";

export class GridItemGhiNhanVatTuThuocTiemChung {
    public YeuCauGhiNhanVTTHThuocId: string = "";
    public YeuCauTiepNhanId: number = 0;
    public YeuCauDichVuKyThuatId: number = 0;
    public SoLuong: number = null;
    public TinhPhi: boolean = false;
    public IsCapNhatSoLuong: boolean = false;
    public IsCapNhatTinhPhi: boolean = false;
}

export class ChiDinhGhiNhanVatTuThuocTiemChung {
    public YeuCauTiepNhanId: number = null;
    public DichVuChiDinhId: string = null;
    public TenDichVuChiDinh: string = null;
    public KhoId: number = null;
    public TenKho: string = null;
    public LaDuocPhamBHYT: boolean = true;
    public DichVuGhiNhanId: string = null;
    public TenDichVuGhiNhan: string = null;
    public strDonViTinh: string = null;
    public SoLuong: number = null;
    public TinhPhi: boolean = false;
    public LoaiNoiChiDinh : EnumLoaiNoiChiDinh = EnumLoaiNoiChiDinh.TiemChung;
}

export class VatTuThuocTiemChung {
    constructor(
        public Id: number = null,
        public KhoId: number = null,
        public VatTuBenhVienId: number = null,
        public YeuCauDichVuKyThuatId: number = null,
        public DuocHuongBaoHiem: boolean = null,
        public LoaiKho: number = null,
        public SoLuong: number = null,
        public KhongTinhPhi: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public NhomYeuCauId: number = null
        ) { }
}

export class VatTuThuocTonKhoTiemChung {
    constructor(
        public Id: number = 0,
        public LoaiDuocPhamHoacVatTu: number = null,
        public DonViTinh: string = null,
        public DVT: string = null,
        public TonKho: number = 0,
        public TonKhoFormat: string = null,
        public HSD: string = null,
        public FlagVatTuDaKe: boolean = false,
        public FlagVatTuDaKeTrungKho: boolean = false,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public Ma: string = null,
        public Ten: string = null,
        public VatTuDaKe: string = null,
    ) { }
}

export class HoanTraThuocVatTuTiemChung {
    constructor(
        public Id: string = null,
        public YeuCauTiepNhanId: number = null,
        public KhoId: number = null,
        // public LaDichTruyen: boolean = null,
        // public LaTuTruc: boolean = null,
        public SoLuong: number = null,
        
        public NoiTruChiDinhDuocPhamId: number = null,
        public YeuCauBenhVienId: number = null, //YeuCauDuocPhamBenhVien, YeuCauVatTuBenhVien
        public NhomYeuCauId: number = null, //EnumNhomGoiDichVu
        public DuocHuongBaoHiem: boolean = null,

        public CoYeuCauTraDuocPhamTuBenhNhanChiTiet: boolean = null,
        public CoYeuCauTraVTTuBenhNhanChiTiet: boolean = null,
    ) {
    }
}

export class ThongTinHoanTraVatTuThuocTiemChung {
    constructor(
        public Id: number = null,
        public VatTuThuocBenhVienId: number = null,
        public DuocHuongBaoHiem: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public NhomYeuCauId: number = null,
        public Ten: string = null,
        public TenKho: string = null,
        public NhanVienYeuCauId: number = null,
        public TenNhanVienYeuCau: string = null,
        public NgayYeuCau: Date = null,
        public YeuCauDuocPhamVatTuBenhViens: any = null
    ) { }
}