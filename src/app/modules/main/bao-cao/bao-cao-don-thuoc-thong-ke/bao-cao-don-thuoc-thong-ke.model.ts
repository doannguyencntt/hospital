import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class SearchBaoCao {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = null,
    ) { }
}

export class BaoCaoThongKeDonThuocAnVo  {
    constructor(
        public TuNgay:Date =null,
        public DenNgay: Date =null,
        public hosting : string = null
    ) { }
}