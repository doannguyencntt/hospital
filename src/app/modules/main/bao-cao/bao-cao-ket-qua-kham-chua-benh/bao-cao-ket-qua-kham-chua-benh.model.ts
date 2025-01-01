import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class SearchBaoCao {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = null,
    ) { }
}

export class DateTimeFilter {
    constructor(
        public DateStart: Date = null,
        public DateEnd: Date = new Date,
    ) { }
}
export class BaoCaoKetQuaKhamChuaBenhAnVo  {
    constructor(
        public TuNgay:Date =null,
        public DenNgay: Date =null,
        public hosting : string = null
    ) { }
}
export class ColumnsTitleTable {
    constructor(
        public Html:string = ""
    ) { }
}

export class TimKiemBaoCaoKhamChuaBenh {
    constructor(
        public TuNgayDenNgay: SearchDateRange = new SearchDateRange(),
        public SearchString: string = null
    ) { }
}

export class SearchDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
    ) { }
}