export class BenhAnDienTuTimKiemNangCao {
    public constructor(
        public SearchString: string = null,

        public TuNgayDenNgayNhapVien: BenhAnDienTuTimKiemTuNgayDenNgay = new BenhAnDienTuTimKiemTuNgayDenNgay(),
        public TuNgayDenNgayXuatVien: BenhAnDienTuTimKiemTuNgayDenNgay = new BenhAnDienTuTimKiemTuNgayDenNgay()
    ) { }
}

export class BenhAnDienTuTimKiemTuNgayDenNgay {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
    ) { }
}


export class BenhAnDienTuDetail {
    public constructor(
        public NoiTruBenhAnId: number = null,
        public MaYeuCauTiepNhan: string = null,
        public BenhNhanId: number = null,
        public Hosting: string = null,
        public LaInPhieu: boolean = false,

        public GayBenhAns: Array<BenhAnDienTuMenuInfo> = []
    ) { }
}

export class BenhAnDienTuMenuInfo {
    public constructor(
        public ViTri: number = null,
        public TenGayHoSo: string = null,

        public ChiTietHoSos: Array<BenhAnDienTuChiTietMenuInfo> = []
    ) { }
}
export class BenhAnDienTuChiTietMenuInfo {
    public constructor(
        public LoaiHoSo: number = null,
        public Value: number = null
    ) { }
}
