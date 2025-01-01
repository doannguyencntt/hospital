import { LoaiKhoaPhong } from "src/app/shared/enum/loai-khoa-phong.enum";

export class KhoaPhong {
    constructor(
        public Id: number = 0,
        public Ten: string = null,
        public Ma: string = null,
        public MoTa: string = null,
        public LoaiKhoaPhong: LoaiKhoaPhong = 1,
        public CoKhamNgoaiTru: boolean = false,
        public CoKhamNoiTru: boolean = false,
        public IsDisabled: boolean = false,
        public TenLoaiKhoaPhong: string = null,
        public KieuKhamDisplay: string = null,
        public KhoaIds: number[] = [],
        public KhoaPhongChuyenKhoas: KhoaPhongChuyenKhoa[] = [],
        public SoTienThuTamUng: number = 0,
        public SoGiuongKeHoach: number = null        
    ) { }
}
export class KhoaPhongChuyenKhoa {
    constructor(
        public KhoaPhongId: number = 0,
        public KhoaId: number = 0,
        public TenKhoa: string = null,
    ) { }
}