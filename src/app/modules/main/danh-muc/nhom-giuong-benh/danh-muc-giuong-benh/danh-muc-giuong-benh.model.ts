export class DanhMucGiuongBenh {
}

export class GiuongBenhSearch {
    constructor(
        public KhoaId: number = null,
        public PhongId: number = null,
        public SearchValue: string = null,
    ) { }
}

export class GiuongBenhViewModel {
    constructor(
        public KhoaId: number = null,
        public PhongBenhVienId: number = null,
        public MoTa: string = null,
        public Ten: string = null,
        public Ma: string = null,
        public CoHieuLuc: boolean = true,
        public LaGiuongNoi: boolean = false,
    ) { }
}
