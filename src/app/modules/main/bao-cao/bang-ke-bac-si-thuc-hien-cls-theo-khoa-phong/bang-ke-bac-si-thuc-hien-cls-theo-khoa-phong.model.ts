export class BangKeBacSiThucHienClsTheoKhoaPhongTimKiemNangCao {
    constructor(
        public DangKham: boolean = true,
        public DaHoanThanh: boolean = true,
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public SearchString: string = null
    ) { }
}