export class GiayChungSinh {
    constructor(
        public NoiTruHoSoKhacId : number  = 0,
        public So: string = null,
        public QuyenSo: string = null,
        public HoVaTenCha: string = null,
        public CMND: string = null,
        public NgayCap:Date= null,
        public NoiCap:string= null,
        public DuDinhDatTenCon: string = null,
        public DuDinhDatTenConId: number = null,
        public GioiTinh: string = null,
        public CanNang: number = null,
        public GhiChu: string = null,
        public NgayCapGiayChungSinh:Date= null,
      
        public TenNhanVienDoDe: string = null,
        public NhanVienDoDeId: number = null,
        public TenNhanVienGhiPhieu: string = null,
        public NhanVienGhiPhieuId: number = null,
        public TenGiamDocChuyenMon: string = null,
        public GiamDocChuyenMonId: number = null,
        public FileDinhKems: FileDinhKemModel[] =  [],

        public TrangThaiLuu: number = 1,
        public YeuCauTiepNhanId: number = null,
        public ThoiGianDe:Date= null,
        public NoiTruHoSoKhacGiayChungSinhId :number = null
    ) {
    }
}
export class NoiTruHoSoKhacGiayChungSinh {
    constructor(
        public Id: number= 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FileDinhKems : FileDinhKemModel[]= [],
    ) { }
}
export class FileDinhKemModel {
    constructor(
        public Id: number = 1,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public KichVatTu: number = null,
        public DuongDan: string = null,
        public MoTa: string = null,
        public LoaiTapTin: LoaiTapTin = null,
        public DuongDanTmp: string = null,
    ) {
    }
}
export enum LoaiTapTin {
    Image = 1,
    Pdf = 2,
    Khac = 10
}
export class GiayChungSinhDS {
    constructor(
        public NoiTruHoSoKhacId : number  = 0,
        public So: string = null,
        public QuyenSo: string = null,
        public DuDinhDatTenCon: string = null,
        public GioiTinh: string = null,
        public CanNang: string = null,
        public TrangThaiLuu: number = null,
    ) {
    }
}
