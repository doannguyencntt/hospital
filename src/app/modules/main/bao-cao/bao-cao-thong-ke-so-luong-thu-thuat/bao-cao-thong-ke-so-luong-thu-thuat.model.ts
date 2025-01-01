import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoThongKeSoLuongThuThuatSearchVT {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public TuNgayFormat: any = null,
        public DenNgayFormat: any = null,
        public KhoaPhongId: number = null,
        public HostingName: string = null
    ) { }
}
export class InBaoCaoThongKeSoLuongThuThuat {
    constructor(
        public HostingName: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}