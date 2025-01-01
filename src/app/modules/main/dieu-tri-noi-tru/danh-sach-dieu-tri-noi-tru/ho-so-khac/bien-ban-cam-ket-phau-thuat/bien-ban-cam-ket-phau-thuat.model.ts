import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';

export class BienBanCamKetPhauThuat {
    constructor(
        public BsGiaiThich: string = null,
        public ChanDoan: string = null,
        public PhuongPhapPttt: string = null,
        public NgayHoiChan: Date = null,
        public NgayThucHien: Date = null,
        public BacSiThucHien: number = null,
        public NguoiThucHienReadonly: string = null,
        public NgayThucHienReadonly: string = null,
        public IdNoiTruHoSo: number = null,
        public ThongTinNguoiBenhs: ThongTinNguoiBenh[] = [],
        public FileChuKy: FileChuKyModel[] = []
    ) { }
}

export class ThongTinNguoiBenh {
    constructor(
        public HoTen: string = null,
        public NamSinh: number = null,
        public Cmnd: string = null,
        public QuanHe: number = null,
        public DiaChi: string = null,
        public Id: number = null
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
