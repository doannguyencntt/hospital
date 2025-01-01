import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class SearchBaoCao {
    constructor(
        public PhongId : number = null,
        public KhoaId : number = null,
        public DateStart: Date = null,
        public DateEnd: Date = null,
        public TenKhoa : string = null,
        public TenPhong : string = null
    ) { }
}

export class DateTimeFilter {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = new Date,
    ) { }
}
export class BaoCaoBenhNhanKhamNgoaiTruAnVo  {
    constructor(
        public PhongId:number =0,
        public KhoaId : number = 0,
        public TuNgay:Date =null,
        public DenNgay: Date =null,
        public hosting : string = null
    ) { }
}