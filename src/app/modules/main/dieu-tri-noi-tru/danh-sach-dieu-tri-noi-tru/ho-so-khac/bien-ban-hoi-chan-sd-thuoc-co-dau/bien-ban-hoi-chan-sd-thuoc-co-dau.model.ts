export class BienBanHoiChanPhauThuatThuocCoDau {
    constructor(
        public Id: number = null,
        public ChanDoanBenh: string = null,
        public TomTatTinhTrangBenhNhanKhiHoiChan: string =null,
        public ThuocDaDieuTris : string[] =[],
        public ThuocDaDieuTriVos : any[] =[],
        public ChanDoanBenhSauHoiChan: string = null,
        public ThuocCoDaus : string[] =[],
        public ListThemThuocCoDau: ThuocCoDau[] = [],
        public HoiChanLuc :Date = null,
        public LanhDao : number = null,
        public BsDieuTri: number = null,
        public LyDo: string =null,
       ) { }
}  
export class ThuocCoDau {
    constructor(
        public Id: string = null,
        public LyDo: string =null,
        public TenThuoc : string =null,
        public HamLuong: string = null,
        public DuongDung: string = null,
        public ThuocCoDaus : string[] =[],
       ) { }
}  
export class NoiTruHoSoKhacBienBanHoiChanPhauThuatThuocCoDau {
    constructor(
        public Id: number= 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public HoiChanLuc:Date = null,
        public LanhDao : number = null,
        public BsDieuTri: number = null
    ) { }
}
export  class SimpleChange {
    constructor(previousValue: any, currentValue: any, firstChange: boolean){}
}