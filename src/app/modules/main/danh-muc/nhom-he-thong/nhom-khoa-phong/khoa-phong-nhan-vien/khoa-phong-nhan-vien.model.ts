export class KhoaPhongNhanVien {
    constructor(
        public KhoaPhongId: number = 0,
        public NhanVienId: number = 0,
        public NhanVienIds: number[] = [],
        public TenKhoaPhong: string,
        public TenNhanVien: string
    ) { }
}
