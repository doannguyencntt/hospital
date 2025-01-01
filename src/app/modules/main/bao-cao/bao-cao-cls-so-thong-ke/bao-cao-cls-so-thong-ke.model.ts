import { RangeDate } from "../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";
import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoClsSoThongKe {
    constructor(
        public KhoaId: number = null,
        public DaThucHien: boolean = true,
        public ChuaThucHien: boolean = true,
        public RangeFromDate: RangeDate = new RangeDate(),
        // public KhoaId: number = null,
        // public BacSiKetLuanId: number = null,
        public FromDate: any = null,
        public ToDate: any = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public Skip: number = 50,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) {
    }
}
