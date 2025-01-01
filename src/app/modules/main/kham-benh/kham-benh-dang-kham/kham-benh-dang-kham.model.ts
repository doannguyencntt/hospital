
export class KhamBenhDangKhamTimKiem {
    public constructor(
        public PhongBenhVienId: number = null,
        public KhoaPhongId: number = null,
        public SearchString: string = null,
        public TrangThai: KhamBenhDangKhamTimKiemTrangThai = new KhamBenhDangKhamTimKiemTrangThai(),
        public TuNgayDenNgay: KhamBenhDangKhamTimKiemDateRange = new KhamBenhDangKhamTimKiemDateRange(),
        ){}
}

export class KhamBenhDangKhamTimKiemTrangThai {
    public constructor(
        public ChuaKham: boolean = true,
        public DangKham: boolean = true,
        public DangLamChiDinh: boolean = true,
        public DangDoiKetLuan: boolean = true,
        public DaKham: boolean = true
        ){}
}

export class KhamBenhDangKhamTimKiemDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
        ){}
}
