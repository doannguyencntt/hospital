import { SortDescriptor } from "@progress/kendo-data-query";

export interface NhatKyHeThong {
    id: number;
    HoatDong: number;
    TenHoatDong: string;
    MaDoiTuong: string;
    IdDoiTuong: number;
    NoiDung: string;
    NguoiTao: string;
    NguoiTaoId: number;
    NgayTao: Date;
    DenNgay: Date;
}

export class searchLichSuHoatDong {
    constructor(
        public HoatDongId: number = 0,
        public TenHoatDong: string = "Tất cả",
        public NguoiTaoId: number = 0,
        public TenNguoiTao: string = "Tất cả",
        public TuNgay: Date,
        public DenNgay: Date,
        public skip: number,
        public take: number,
        public pageSize: number,
        public searchString: string,
        public additionalSearchString: string,
        public sort: SortDescriptor[],
        public lazyLoadPage: boolean,
    ) { }
}

export class LichSuHoatDongInfo {
    constructor(
        public HoatDongId: number = 0,
        public TenHoatDong: string = "Tất cả",
        public NguoiTaoId: number = 0,
        public TenNguoiTao: string = "Tất cả",
        public TuNgay: Date = null,
        public DenNgay = null,
        public NoiDung: string = null
    ) { }
}
