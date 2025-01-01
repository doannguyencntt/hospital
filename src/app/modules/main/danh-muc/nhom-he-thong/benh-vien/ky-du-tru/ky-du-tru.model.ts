export class KyDuTru {
    Id: any;
    TuNgay: any;
    DenNgay: any;
    NhanVienTaoId: number;
    MuaDuocPham: boolean;
    MuaVatTu : boolean;
    HieuLuc: boolean;
    MoTa: string;
    NgayBatDauLap: any;
    NgayKetThucLap: any;
}

export class KyDuTruSearch {
    DuocPham: boolean = true;
    VatTu: boolean = true;
    SearchString: string = "";
    RangeApDung: rangeDate = new rangeDate();
    RangeLap: rangeDate = new rangeDate();
}

export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ){}
}