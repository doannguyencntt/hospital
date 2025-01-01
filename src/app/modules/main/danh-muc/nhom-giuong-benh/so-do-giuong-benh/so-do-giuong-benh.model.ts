export class SoDoGiuongBenh {
}

export class SoDoGiuongBenhSearchHeader {
    constructor(
        public KhoaId: number = null,
        public PhongId: number = null,
    ) { }
}

export class ResultSoDoPopup {
    constructor(
        public KhoaId: number = null,
        public PhongId: number = null,
        public TenKhoa: string = null,
        public GiuongTrong: boolean = null,
        public GiuongDaCoBenhNhan: boolean = null,
        public lstPhong: LstPhong[] = new Array<LstPhong>(),
    ) { }
}

export class LstPhong {
    constructor(
        public PhongId: number = null,
        public DisplayName: string = null,
        public lstGiuong: LstGiuong[] = new Array<LstGiuong>(),
    ) { }
}

export class LstGiuong {
    constructor(
        public IsGiuongTrong: boolean = null,
        public SoBenhNhan: string = null,
        public TenGiuong: string = null,
    ) { }
}
