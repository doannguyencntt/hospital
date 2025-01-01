import { Sort } from 'src/app/shared/models/common.model';
import { RangeDate } from '../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model';

export class BaoCaoTheKhoSearch {
    constructor(
        public RangeFromDate: RangeDate = new RangeDate(),
        public startDate: Date = null,
        public endDate: Date = null,
        public KhoId: number = null,
        public DuocPhamHoacVatTuBenhVienId: number = null,
        public LoaiDuocPhamHoacVatTu: number = null,
        public NgayThang: Date = null,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}
