import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';

export class PhieuKhamGayMeTruocMo {
    constructor(
        public Nang: number = null,
        public Cao: number = null,
        public Asa: string = null,
        public Mallampati: string = null,
        public KcCamGiap: string = null,
        public HaMieng: string = null,
        public RangGia: number = null,
        public GioMoTruocBuaAn: number = null,
        public CapCuu: boolean = null,
        public DaDayDay: boolean = null,
        public ChanDoan: string = null,
        public HuongDieuTri: string = null,
        public TienSuNoiKhoa: string = null,
        public TienSuNgoaiKhoa: string = null,
        public TienSuGayMe: string = null,
        public DiUng: string = null,
        public ThuocLa: boolean = null,
        public Ruou: boolean = null,
        public MaTuy: boolean = null,
        public BenhLayNhiem: string = null,
        public ThuocDangDieuTri: string = null,
        public KhamLamSang: string = null,
        public TuanHoan: string = null,
        public M: string = null,
        public Ha: string = null,
        public HoHap: string = null,
        public ThanKinh: string = null,
        public CotSong: string = null,
        public XnBatThuong: string = null,
        public YcBoSung: string = null,
        public DkCachThuocVc: string = null,
        public DkGiamDauSauMo: string = null,
        public YlenhTruocMo: string = null,
        public ThuocTienMe: string = null,
        public NgayKham: Date = null,
        public NgayHenKham: Date = null,
        public DdThucHien: string = null,
        public BsGmHs: string = null,
        public NguoiThucHienReadonly: string = null,
        public NgayThucHienReadonly: string = null,
        public IdNoiTruHoSo: number = null,
        public FileChuKy: FileChuKyModel[] = []
    ) { }
}

export class FileChuKyModel {
    constructor(
        public Ten: string = null,
        public TenGuid: string = null,
        public Uid: string = null,
        public KichThuoc: number = null,
        public DuongDan: string = null,
        public MoTa: string = null,
        // tslint:disable-next-line: no-shadowed-variable
        public LoaiTapTin: LoaiTapTin = null,
        public DuongDanTmp: string = null
    ) { }
}
