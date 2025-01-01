
import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoTiepNhanBenhNhanKhamSearch {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public SearchString: string = "",
        public HostingName: string = null
    ) { }
}

export class BaoCaoTiepNhanBenhNhanKham {
    constructor(
        public STT: number = null,
        public ThoiGianTiepNhan: Date = null,
        public ThoiGianTiepNhanDisplay: string = null,
        public MaTN: string = null,
        public HoTenBN: string = null,
        public NgaySinhDisplay: string = null,
        public GioiTinhDisplay: string = null,
        public BHTYMaSoThe: string = null,
        public PhieuKham: string = null,
        public PhongKhamId: number = 0,
        public TenPhongKham: string = null,
        public TrangThai: number = null,
        public TrangThaiDisplay: string = null,
        public NgoaiGioHanhChinh: boolean = null,
        public HinhThucDen: string = null,
        public NoiGioiThieu: string = null,
    ) { }
}

export class InBaoCaoTiepNhanBenhNhanKham {
    constructor(
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}