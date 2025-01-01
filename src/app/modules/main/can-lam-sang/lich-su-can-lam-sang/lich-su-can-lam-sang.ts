import { LoaiTapTin } from "src/app/shared/enum/common-type.enums";

export class LichSuCanLamSang {
    constructor(
        public TimKiem: any = null,
        public TuNgay: any = null,
        public DenNgay: any = null,
        public FromDate: any = null,
        public ToDate: any = null
    ) { }
}

export class TagItem {
    constructor(
        public Key: string = null,
        public Value: string = null,
        public ValueDisplay: string = null,
        public Title: string = null
    ) { }
}

export class ThongTinBenhNhan {
    constructor(
        public Id: number = 0,
        public MaYeuCauTiepNhan: string = null,
        public BenhNhanId: string = null,
        public MaBN: string = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public Tuoi: number = null,
        public SoBenhAn: string = null,
        public TenGioiTinh: string = null,
        public GioiTinhStr: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public DoiTuongUuDai: string = null,
        public CongTyUuDai: string = null,
        public BHYTMaSoThe: string = null,
        public BHYTngayHieuLuc: string = null,
        public BHYTNgayHetHan: string = null,
        public BHYTDiaChi: string = null,
        public BHYTMucHuong: string = null,
        public TuyenKham: string = null,
        public TenGiayChuyenVien: string = null,
        public CongTyUuDaiId: number = null,
        public NgayHieuLucStr: string = null,
        public NgayHetHanStr: string = null,
        public GiayChuyenVienId: number = null,
        public DuocHuongBHYT: boolean,
        public CoBHYT: boolean,
        public DoiTuong: string= null,
        public BHYTgiayMienCungChiTraId: number = null,
        public TenGiayMiemCungTriTra: string = null,

        //BVHD-3800
        public LaCapCuu: boolean = null
    ) { }
}

export class ListDanhSachCanLamSang {
    constructor(public DanhSachCanLamSangs: ThongTinCanLamSang[] = []) { }
}
export class ThongTinCanLamSang {
    constructor(
        public DichVuKyhuatId: number = 0,
        public TenDichVu: string = null,
        public GhiChu: string = null,
        public LoaiYeuCauKyThuat: number = 0,
        public GiayKetQuaLamSang: GiayKetQuaLamSang[] = [],
    ) { }
}
export class GiayKetQuaLamSang {
    constructor(
        public Id: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public DuongDan: string = null,
        public MoTa: string = null,
        public KichThuoc: number = 0,
        public LoaiTapTin: LoaiTapTin = null
    ) { }
}


export class CanLamSangLichSuTimKiem {
    public constructor(
        public SearchString: string = null,
        public TuNgayDenNgay: CanLamSangLichSuTimKiemDateRange = new CanLamSangLichSuTimKiemDateRange(),
    ) { }
}

export class CanLamSangLichSuTimKiemDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
    ) { }
}