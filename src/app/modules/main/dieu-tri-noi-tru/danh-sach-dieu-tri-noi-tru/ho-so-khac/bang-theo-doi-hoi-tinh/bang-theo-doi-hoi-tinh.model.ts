import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';

export class BangTheoDoiHoiTinh {
    constructor(
        public CachMo: string = null,
        public CachVoCam: string = null,
        public PhongMo: string = null,
        public DdNhan: string = null,
        public GioNhan: Date = null,
        public GioChuyen: Date = null,
        public VePhong: string = null,
        public PhauThuatVien: string = null,
        public BsGmhs: string = null,
        public YlenhBs: string = null,
        public PhongHoiTinhSo: string = null,
        public NgayThucHien: Date = null,
        public NguoiThucHienReadonly: string = null,
        public NgayThucHienReadonly: string = null,
        public IdNoiTruHoSo: number = null,
        public ThongTinHoSo: string = null,
        public ListPhieu: PhieuHoiTinh[] = [],
        public FileChuKy: FileChuKyModel[] = []
    ) { }
}

export class PhieuHoiTinh {
    constructor(
        public NgayThucHienDisplay: string = null,
        public CachMo: string = null,
        public DdNhan: string = null,
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
