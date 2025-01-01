import { RangeDate } from "../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";

export class BaoCaoClsTheoKhoaBacSi {
    constructor(
        public SearchString: string = null,
        public RangeFromDate: RangeDate = new RangeDate(),
        public KhoaId: number = null,
        public BacSiKetLuanId: number = null,
        public FromDate: any = null,
        public ToDate: any = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
    ) {
    }
}
