
export class ThongKeKhamBenhSearch {
    constructor(
        public TuNgay: any = null,
        public DenNgay: any = null,

        public FromDate: any = null,
        public ToDate: any = null
    ) { }
}


export class ThongKeBenhVien {
    constructor(
        public ThongKeTiepNhan: ThongKeTiepNhan = null,
        public ThongKeKhamBenh: ThongKeKhamBenh = null,
        public ThongKeGiuongBenh : ThongKeGiuongBenh = null,
        public ThongKeNoiTru : ThongKeNoiTru = null,
        public ThongKeSoSinh : ThongKeSoSinh = null,
    ) { }
}

export class ThongKeTiepNhan {
    constructor(
        public TongSoTiepNhan: number = null,
        public TongSoBHYT: number = null,
        public TongSoDichVu: number = null,
        public TongSoVienPhi: number = null,
        public TongSoKSK: number = null
    ) { }
}

export class ThongKeKhamBenh {
    constructor(
        public TongSoNguoiKhamBenh: number = null,
        public TongSoChoKham: number = null,
        public TongSoDangKham: number = null,
        public TongSoHoanThanh: number = null
    ) { }
}

export class ThongKeGiuongBenh {
    constructor(
        public TongSoGiuongBenh: number = null,
        public TongSoDaDung: number = null,
        public TongSoTrong: number = null
    ) { }
}

export class ThongKeNoiTru {
    constructor(
        public TongSoNhapVien: number = null,
        public TongChuyenVien: number = null,
        public TongSoDieuTri: number = null,
        public TongSoTuVong: number = null,
        public TongSoRaVien: number = null
    ) { }
}

export class ThongKeSoSinh {
    constructor(
        public TongSoSSThuong: number = null,
        public TongSoSSBenh: number = null,
        public TongSoRaVien: number = null,
        public TongSoChuyenVien: number = null,
        public TongSoTuVong: number = null
    ) { }
}
