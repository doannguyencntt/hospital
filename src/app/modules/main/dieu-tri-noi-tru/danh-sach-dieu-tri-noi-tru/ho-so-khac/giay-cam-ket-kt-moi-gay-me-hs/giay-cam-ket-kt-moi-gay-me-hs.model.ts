import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';

export class GiayCamKetKyThuatMoiHS {
    constructor(
        public TaoLaAi: number = 0,
        public HoTen: string = null,
        public NamSinh: number = null,
        public QuanHe: string = null,
        public GioiTinh: number = null,
        public DiaChi: string = null,
        public ChanDoan: string = null,
        public SoTien: number = null,
        public SoTienChu: string = null,
        public NgayThucHien: Date = null,
        public BacSyThucHien: string = null,
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
export class GiayCamKetKyThuatMoiHSPopupModel {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public HostingName: string = null,
        public Header: boolean = false
    ) { }
  }