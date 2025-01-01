import { RangeDate } from "../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";

export class BaoCaoDichVuHopDongKhamDoanNgoaiHopDong {
    constructor(
        public CongTyKhamSucKhoeId: number = null,
        public HopDongKhamSucKhoeId: number = null,
        public SearchString: string = null,
        public RangeFromDate: RangeDate = new RangeDate(),
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) { }
}