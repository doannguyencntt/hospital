export class BaoCaoNguoiBenhDenKhamTimKiemNangCao {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public SearchString: string = "",
        public Skip:number = 0,
        public Take:number = 50,
    ) { }
}
