import { DateTime } from 'luxon';
import { LookupItemVo } from 'src/app/shared/models/common.model';

export class LayMauXetNghiemTimKiem {
    public constructor(
        public SearchString: string = null,
        public TrangThai: LayMauXetNghiemTimKiemTrangThai = new LayMauXetNghiemTimKiemTrangThai(),
        public TuNgayDenNgay: LayMauXetNghiemTimKiemDateRange = new LayMauXetNghiemTimKiemDateRange(),
        public IsGridChuaCapCode: boolean = false
        ){}
}

export class LayMauXetNghiemTimKiemTrangThai {
    public constructor(
        public ChoLayMau: boolean = true,
        public ChoGuiMau: boolean = false,
        public ChoKetQua: boolean = false,
        public ChoDuyetKetQua: boolean = false,
        public DaCoKetQUa: boolean = false,
        public DaLayMau: boolean = false
        ){}
}

export class LayMauXetNghiemTimKiemDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
        ){}
}


export class ThongTinYeuCauTiepNhanLayMau {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public BenhNhanId: number = null,
        public MaBenhNhan: string = null,
        public MaTiepNhan: string = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public Tuoi: number = null,
        public TenGioiTinh: string = null,
        public SoDienThoai: string = null,
        public Tuyen: string = null,
        public SoTheBHYT: string = null,
        public MucHuong: number = null,
        public DanToc: string = null,
        public DiaChi: string = null,
        public NgheNghiep: string = null,
        public IsTraKetQua: boolean = false,
        public TraKetQuaChoBenhNhan: string = null,
        public IsAutoBarcode: boolean = false,
        public IsCoDuKetQua: boolean = false,
        public IsCoPhienChiTietCoKetQua: boolean = false,
        public IsNhanVienKhoaXetNghiem: boolean = false,

        //BVHD-3364
        public TenCongTy: string = null
        ){}
}

export class XacNhanLayMauXetNghiem {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public BenhNhanId: number = null,
        public PhienXetNghiemId: number = null,
        public NhomDichVuBenhVienId: number = null,
        public BarcodeNumber: number = null,
        public BarcodeId: string = null
        ){}
}

export class LayMauXetNghiemBarcodeQueryInfo {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public BarcodeNumbers: Array<LookupItemVo> = new Array<LookupItemVo>()
        ){}
}

export class GuiMauXetNghiem {
    public constructor(
        public NhanVienGuiMauId: number = null,
        public TenNhanVienGuiMau: string = null,
        public ThoiDiemGuiMau: Date = null,
        public PhongNhanMauId: number = null,
        public GhiChu: string = null,
        public NhomMauGuis: Array<XacNhanLayMauXetNghiem> = new Array<XacNhanLayMauXetNghiem>()
    ) { }
}

export class LayMauXetNghiemInBarcode {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public BarcodeId: string = null,
        public BarcodeNumber: number = null,
        public SoLuong: number = null,
        public HostingName: string = null
    ) { }
}
export class KiemTraBarcodeLayMauXetNghiem {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public BarcodeNumber: string = null,
        public IsInBarcode: boolean = false,
        public SoLuong: number = null,
        public IsCapMoi: boolean = false,
        public BarcodeString = null,
        public IsCapBarcodeChoDichVu: boolean = null
    ) { }
}

export class InPhieuKetQuaLayMau {
    constructor(
        public HostingName: string = null,
        public Header: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public PhienXetNghiemId: number = null,     
        public LoaiIn: number = null,
        public ListIn :any[]=[]
    ) { }
}

export class CapBarcodeTheoDichVu {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public BenhNhanId: number = null,
        public BarcodeNumber: number = null,
        public BarcodeId: string = null,
        public SoLuong: number = null,
        public YeuCauDichVuKyThuatIds: Array<number> = new Array<number>()
    ) { }
}