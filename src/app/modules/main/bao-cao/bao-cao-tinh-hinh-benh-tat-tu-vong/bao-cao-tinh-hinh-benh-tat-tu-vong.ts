import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoTinhHinhBenhTatTuVong{
    constructor(
        public TuNgay: Date = null,
        public DenNgay: Date = null,
    ) { }
}
