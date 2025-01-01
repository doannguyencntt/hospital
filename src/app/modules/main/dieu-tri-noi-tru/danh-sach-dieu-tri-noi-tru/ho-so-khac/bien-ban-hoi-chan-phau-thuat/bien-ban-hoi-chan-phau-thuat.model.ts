import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';
export class BienBanHoiChanPhauThuat {
    constructor(
        public ThoiGianHoiChan: Date = null,
        public ThoiGianHoiChanUTC: string = null,
        public ThanhVienThamGia: string[] = null,
        public ChanDoan: string = null,
        public Summary: string = null,
        public DongMau: string = null,
        public NhomMau: string = null,
        public Ure: string = null,
        public Creatinin: string = null,
        public Got: string = null,
        public Gpt: string = null,
        public DienTim: string = null,
        public XnKhac: string = null,
        public KetLuan: string = null,
        public DuKienPhauThuat: string = null,
        public NhomPhauThuat: string[] = null,
        public NhomGayMe: string[] = null,
        public PhuongPhapGayMe: string = null,
        public ThoiGianPhauThuat: Date = null,
        public DuKienKhac: string = null,
        public NgayThucHien: Date = null,
        public BacSiDieuTri: string = null,
        public BacSiGayMe: string = null,
        public BacSiTruongKhoa: string = null,
        public BacSiDuyetMo: string = null,
        public BacSiThucHien: string = null,
        public NgayThucHienReadonly: string = null,
        public NguoiThucHienReadonly: Date = null,
        // public IdNoiTruHoSo: number = null,
        // public ListPhieu: PhieuHoiChan[] = [],
        // public ThongTinHoSo: string = null,
        public FileChuKy: Array<FileChuKyModel> = new Array<FileChuKyModel>(),
        public ThanhVienThamGias : Array<ThanhVienThamGia> = new Array<ThanhVienThamGia>()
    ) { }
}
export class NoiTruHoSoKhacBienBanHoiChanPhauThuat {
    constructor(
        public Id: number= 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FileChuKy : FileChuKyModel[]= [],
    ) { }
}
export class PhieuHoiChan {
    constructor(
        public NgayHoiChanDisplay: string = null,
        public ThanhVienThamGiaDisplay: string = null,
        public ChanDoan: string = null,
        public Id: number = null
    ) { }
}
export class FileChuKyModel {
    constructor(
        public NoiTruHoSoKhacId: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public Uid: string = null,
        public KichThuoc: number = null,
        public DuongDan: string = null,
        public MoTa: string = null,
        // tslint:disable-next-line: no-shadowed-variable
        public LoaiTapTin: LoaiTapTin = null,
        public DuongDanTmp: string = null,
        
    ) {
    }
}
export class ThongTinThanhVienThamGia {
    constructor(
        public MaHocHamHocVi: string = null,
        public MaHocHamHocViId: number = null,
        public MaBangChuyenMon: string = null,
        public MaBangChuyenMonId: number = null,
        public TenThanhVien: string = null,
        public ThanhVienId: number = null,
    ) {
    }
}
export class ThanhVienThamGia {
    constructor(
        // public DisplayName: string = null,
        public KeyId: number = null,
        public ViTriCongTac: string = null,
    ) {
    }
}
