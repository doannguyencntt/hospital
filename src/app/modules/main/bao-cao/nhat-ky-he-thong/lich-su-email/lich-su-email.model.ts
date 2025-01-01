export interface LichSuEmail {
    Id: number;
    GoiDen: number;
    TieuDe: string;
    NoiDung: string;
    TapTinDinhKem: string;
    urlTapTinhDinhKem: string;
    NgayGui: Date;
    NgayGuiFormat: string;
    TenTrangThai: string;
    TrangThai: number;
}

export class searchLichSuEmail {
    constructor(
        public GoiDen: string = null,
        public TieuDe: string = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public TrangThai: number = 0,
        public TenTrangThai: string = "Tất cả"
    ) { }
}
