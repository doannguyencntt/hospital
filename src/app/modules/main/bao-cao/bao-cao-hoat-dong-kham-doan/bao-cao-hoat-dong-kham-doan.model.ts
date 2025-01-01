import { Sort } from 'src/app/shared/models/common.model';



export class HoatDongKhamDoanSearch {
    constructor(
        public CongTyKhamSucKhoeId: number = null,
        public HopDongKhamSucKhoeId: number = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) {
    }
}

export class HoatDongKhamDoanQueryInfoQueryInfo {
    constructor(
        public FromDateString: any = null,
        public ToDateString: any = null,
        public CongTyKhamSucKhoeId: number = null,
        public HopDongKhamSucKhoeId: number = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}

export class BaoCaoHoatDongKhamDoan {
    constructor(
        public CongTyKhamSucKhoeId: number = null,
        public HopDongKhamSucKhoeId: number = null,
        public TenHopDongKhamSucKhoe: string = null,
        public TenCongTyKhamSucKhoe: string = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public TongSo: number = null,
        public NoiThucHienCuaNguoiBenhs: BaoCaoHoatDongKhamDoanPhongKham[] = []
    ) { }
}

export class BaoCaoHoatDongKhamDoanPhongKham {
    constructor(
        public NoiThucHienId: number = null,
        public TenNoiThucHien: string = null,
        public SoLan: number = null,
    ) { }
}