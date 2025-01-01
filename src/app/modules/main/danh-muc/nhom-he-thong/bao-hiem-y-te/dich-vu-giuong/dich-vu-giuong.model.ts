import { DateTime } from 'luxon';

export class DichVuGiuong {
    constructor(
        public Id: number = 0,
        public Ma: string = "",
        public MaTT37: string = "",
        public Ten: string = "",
        public KhoaId: number = null,
        public HangBenhVien: number = null,
        public MoTa: string = "",
        public MaChung: string = null,
        public TenChung: string = null
    ) { }
}

export class DichVuGiuongThongTinGia {
    constructor(
        public Gia: number = null,
        public TuNgay: DateTime = null,
        public DenNgay: DateTime = null,
        public TuNgayDisplay: string = "",
        public DenNgayDisplay: string = "",
        public DVTTGiaMoTa: string = "",
        public HieuLuc: boolean = false
    ) { }
}