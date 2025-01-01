export class AdrPhanUngCoHaiCuaThuoc {
    constructor(
        public ThuocHoacHoatChat1Id: number = null,
        public Ma1ThuocHoacHoatChat : string = null,
        public TenThuocHoacHoatChat1 : string = null,
        public ThuocHoacHoatChat2Id: number = null,
        public Ma2ThuocHoacHoatChat : string = null,
        public TenThuocHoacHoatChat2 : string = null,
        public MucDoChuYKhiChiDinh: number = null,
        public MucDoChuYKhiChiDinhDisplay : string = null,
        public MucDoTuongTac: number = null,
        public MucDoTuongTacDisplay : string = null,
        public DuocDongHoc: boolean = false,
        public DuocLucHoc: boolean = false,
        public ThuocThucAn: boolean = false,
        public QuyTac: boolean = false,
        public TuongTacHauQua: string = "",
        public GhiChu: string = "",
        public CachXuLy: string = "",
        public MaTenHoatChat1: string = "",
        public MaTenHoatChat2: string = "",

    ) { }
}
