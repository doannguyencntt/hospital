import { RangeDate } from "../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";

export class BaoCaoDichVuHopDongKhamDoanTheoHopDong {
    constructor(
        public Loai: number = 1,
        public HopDongKhamSucKhoeId: number = null,
        public TinhTrang: number = null,
        public DaKham: boolean = false,
        public ChuaKham: boolean = true,
        public ChuaKhamNhanVien: boolean = false,
        public DangKhamNhanVien: boolean = true,
        public DaKhamNhanVien: boolean = false,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public FromDate: any = null,
        public ToDate: any = null,

        public ThoiDiemTiepNhanTuFormat1: any = null,
        public ThoiDiemTiepNhanDenFormat1: any = null,
        public FromDate1: any = null,
        public ToDate1: any = null,

        public SearchString: string = null,
    ) { }
}


export class InBaoCaoDichVuHopDongKhamDoanTheoNhanVien {
    constructor(
        public Loai: number = null,
        public TrangThai: string = null,
        public HostingName: string = null,
        public Datas: Array<any> = null
    ) { }
}

