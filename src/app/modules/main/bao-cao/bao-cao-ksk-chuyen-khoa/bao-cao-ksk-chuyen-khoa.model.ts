export class BaoCaoKSKChuyenKhoa {
    constructor(
        public CongTyKhamSucKhoeId: number = null,
        public HopDongKhamSucKhoeId: number = null,
        public TenHopDongKhamSucKhoe: string = null,
        public TenCongTyKhamSucKhoe: string = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public TongSo: number = null,
        public NoiThucHienCuaNguoiBenhs: BaoCaoHoatDongKhamDoanChuyenKhoa[] = []
    ) { }
}


export class BaoCaoHoatDongKhamDoanChuyenKhoa {
    constructor(
        public ChuyenKhoaKhamSucKhoe: number = null,
        public TenChuyenKhoaKhamSucKhoe: string = null,
        public SoLan: number = null,
    ) { }
}