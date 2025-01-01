export class BangKeChiTietTheoNguoiBenhTimKiemNangCao {
    constructor(
        public HinhThucDenId: number = null,
        public NoiGioiThieuId: number = null,
        public MaYeuCauTiepNhan: string = null,
        public SearchString: string = "",
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null
    ) { }
}