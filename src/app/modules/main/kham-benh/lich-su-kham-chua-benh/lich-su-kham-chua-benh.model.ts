import { LoaiLichSuKhamChuaBenh, LoaiLichSuKhamChuaBenhChiTiet } from "src/app/shared/enum/lich-su-kham-chua-benh.enum";

export class LichSuKhamChuaBenhTimKiemNangCao {
    public constructor(
        public SearchString: string = null,
        public NamSinh: number = null,
        public SoDienThoai: string = null,
        public CoQuyenXemKhamBenh: boolean = false,
        public CoQuyenXemCanLamSang: boolean = false,
        public CoQuyenXemYLenh: boolean = false,

        public TuNgayDenNgay: LichSuKhamChuaBenhTimKiemTuNgayDenNgay = new LichSuKhamChuaBenhTimKiemTuNgayDenNgay()
    ) { }
}

export class LichSuKhamChuaBenhTimKiemTuNgayDenNgay {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
    ) { }
}

export class PhieuInLichSuKhamQueryInfo {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public LoaiLichSuKhamChuaBenh: LoaiLichSuKhamChuaBenh = null,
        public LoaiLichSuKhamChuaBenhChiTiet: LoaiLichSuKhamChuaBenhChiTiet = null,
        public YeuCauDichVuId: number = null,
        public NoiTruBenhAnId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null, // ở BE là enum
        public NoiTruHoSoKhacId: number = null,

        public Hosting: string = null,
        public HienLichSuNoiTru: boolean = false
    ) { }
}
