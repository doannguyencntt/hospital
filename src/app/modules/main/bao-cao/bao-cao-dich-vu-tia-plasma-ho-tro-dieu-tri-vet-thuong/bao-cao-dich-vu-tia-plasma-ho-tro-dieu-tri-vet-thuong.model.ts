export class BaoCaoDichVuTiaPLASMaHoTroDieuTriVetThuongSearch {
    constructor(
        public SearchString: string = "",
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,

        public KhoaId: number = 0,
        public DichVuId: number = null,
        public NhomDichVu: number = null,
        public TenDichVu: string = null
    ) { }
}
