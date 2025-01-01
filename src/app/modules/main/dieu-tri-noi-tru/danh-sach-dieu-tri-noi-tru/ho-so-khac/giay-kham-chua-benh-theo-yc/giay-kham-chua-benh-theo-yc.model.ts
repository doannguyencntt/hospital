import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';

export class GiayKhamChuaBenhTheoYc {
    constructor(
        public NguoiNhan: string = null,
        public TaoLaAi: number = 0,
        public HoTenNguoiThan: string = null,
        public NamSinhNguoiThan: number = null,
        public GioiTinhNguoiThan: number = 1,
        public CmndNguoiThan: string = null,
        public NoiCapCmndNguoiThan: string = null,
        public DanTocNguoiThan: number = null,
        public NgoaiKieuNguoiThan: number = null,
        public NgheNghiepNguoiThan: number = null,
        public NoiLamViecNguoiThan: string = null,
        public DiaChiNguoiThan: string = null,
        public KhiCanBaoTin: string = null,
        public BacSiChamSoc: string = null,
        public LoaiChuaTri: string = null,
        public SoTien: number = null,
        public SoTienChu: string = null,
        public NgayThucHien: Date = null,
        public BsDieuTri: string = null,
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
