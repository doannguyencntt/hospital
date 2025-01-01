import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';

export class GiayCamKetKyThuatMoi {
    constructor(
        public TaoLaAi: number = 0,
        public HoTen: string = null,
        public NamSinh: number = null,
        public QuanHe: string = null,
        public GioiTinh: number = null,
        public DiaChi: string = null,
        public ChanDoan: string = null,
        public GiaiThich: string = null,
        public SoTien: number = null,
        public SoTienChu: string = null,
        public NgayThucHien: Date = null,
        public BsGmhs: string = null,
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
