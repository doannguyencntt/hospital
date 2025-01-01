import { RangeDate } from "../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";

export class TimKiemRaVienNoiTruSearch {
    constructor(
        public SearchString: string = "",
        public TimKiem: string = null,      
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public KhoaId: number = null,       
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
       
    ) { }
}
