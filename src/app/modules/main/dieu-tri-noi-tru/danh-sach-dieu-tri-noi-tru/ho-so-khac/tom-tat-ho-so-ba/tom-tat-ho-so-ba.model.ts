import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';

export class TomTatHoSoBenhAn {
    constructor(
        public DienBienLamSang: string = null,
        public KqXnCls: string = null,
        public PpDieuTri: string = null,
        public TinhTrangChuyenTuyen: string = null,
        public GhiChu: string = null,
        public NgayThucHien: Date = null,
        public GiamDoc: string = null,
        public NguoiThucHienReadonly: string = null,
        public NgayThucHienReadonly: string = null,
        public IdNoiTruHoSo: number = null,
        public IsCreated: boolean = null,
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
