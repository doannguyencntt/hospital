import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';

export class BangKiemAnToanPhauThuat {
    constructor(
        public BsCheckHoTen: boolean = true,
        public DdCheckHoTen: boolean = true,
        public XnKhangSinhDuPhong: boolean = true,
        public XnVtRachDa: boolean = true,
        public XnChamSocSauMo: boolean = true,
        public XnNhanDan: boolean = true,
        public CheckGioiThieuEkip: boolean = true,
        public DdDemDungCu: boolean = true,
        public XnMo: boolean = true,
        public CamKetMo: boolean = true,
        public DanhDauVungMo: number = null,
        public XnDu: boolean = true,
        public XnMonitor: boolean = true,
        public XnTienSuDiUng: boolean = true,
        public XnKhoTho: boolean = true,
        public XnMatMau: boolean = true,
        public XnDoiChieuHa: boolean = true,
        public ChuThich: string = null,
        public PtvXnChuY: boolean = true,
        public BsXnChuY: boolean = true,
        public DdXnChuY: boolean = true,
        public DdChayNgoai: string = null,
        public DdDungCu: string = null,
        public DdGayMe: string = null,
        public BsGayMe: string = null,
        public PhauThuatVien: string = null,
        public NgayKiem: Date = null,
        public ChanDoan: string = null,
        public PhongMo: string = null,
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
