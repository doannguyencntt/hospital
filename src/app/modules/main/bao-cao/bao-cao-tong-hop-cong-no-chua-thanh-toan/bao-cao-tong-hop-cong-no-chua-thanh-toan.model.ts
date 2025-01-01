export class BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao {
    constructor(
        public HinhThucDenId: number = null,
        public NoiGioiThieuId: number = null,
        public MaYeuCauTiepNhan: string = "0",
        public SearchString: string = "",
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null
    ) { }
}