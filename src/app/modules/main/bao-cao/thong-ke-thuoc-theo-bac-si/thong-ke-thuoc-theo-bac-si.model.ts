import { RangeDate } from "../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";

export class BaoCaoThongKeThuocTheoBacSiSearch {
    constructor(
        public SearchString: string = "",           
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public BacSiId: number = 0,  
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
       
    ) { }
}
