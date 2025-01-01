import { XetNghiemCapCodeTimKiemDateRange } from "../xet-nghiem-cap-code/xet-nghiem-cap-code.model";
export class XetNghiemNhanMauTimKiem {
    public constructor(
        public SearchString: string = null,
        public HopDongKhamSucKhoeId: number = 0,
        public YeuCauTiepNhanId: number = null,
        public PhienXetNghiemId: number = null,
        public TrangThai: XetNghiemNhanMauTimKiemTrangThai = new XetNghiemNhanMauTimKiemTrangThai(),
        public TuNgayDenNgay: XetNghiemCapCodeTimKiemDateRange = new XetNghiemCapCodeTimKiemDateRange(),
        public ThoiDiemHienTai: Date = new Date(),
        public SoLuong: number = null,

    ) { }
}
export class XetNghiemNhanMauTimKiemTrangThai {
    public constructor(
        public ChuaNhanMau: boolean = true,
        public DaNhanMau: boolean = false
    ) { }
}