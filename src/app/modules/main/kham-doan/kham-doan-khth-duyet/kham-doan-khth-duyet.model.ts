import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';

export class KhamDoanKhthDuyetTimKiem {
    public constructor(
        public SearchString: string = null,
        public TrangThai: KhamDoanKhthDuyetTimKiemTrangThai = new KhamDoanKhthDuyetTimKiemTrangThai(),
        public NgayGui: KhamDoanKhthDuyetTimKiemDateRange = new KhamDoanKhthDuyetTimKiemDateRange(),
        public NgayKHTHDuyet: KhamDoanKhthDuyetTimKiemDateRange = new KhamDoanKhthDuyetTimKiemDateRange(),
        public NgayNhanSuDuyet: KhamDoanKhthDuyetTimKiemDateRange = new KhamDoanKhthDuyetTimKiemDateRange(),
        public NgayGiamDocDuyet: KhamDoanKhthDuyetTimKiemDateRange = new KhamDoanKhthDuyetTimKiemDateRange()
    ) { }
}

export class KhamDoanKhthDuyetTimKiemTrangThai {
    public constructor(
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = true,
        public TuChoi: boolean = true
    ) { }
}

export class KhamDoanKhthDuyetTimKiemDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
    ) { }
}

export class YeuCauNhanSuKhamSucKhoeDetail {
    public constructor(
        public Id: number = null,
        public HopDongKhamSucKhoeId: number = null,
        public CongTyId: number = null,
        public CongTy: string = null,
        public SoNguoiKham: number = null,
        public NgayHieuLuc: any = null,
        public NgayHieuLucDisplay: string = null,
        public NgayKetThuc: any = null,
        public NgayKetThucDisplay: string = null,
        public TongSoBs: number = 0,
        public TongSoDd: number = 0,
        public TongNvKhac: number = 0,
        public NhanVienGuiYeuCauId: number = null,
        public NhanVienGui: string = null,
        public NgayGuiYeuCau: any = null,
        public DuocKHTHDuyet: boolean = null,
        public NgayKHTHDuyet: any = null,
        public NgayKhthDuyetDisplay: string = null,
        public NhanVienKHTHDuyetId: number = null,
        public NhanVienKhthDuyet: string = null,
        public LyDoKHTHKhongDuyet: string = null,
        public DuocNhanSuDuyet: boolean = null,
        public NgayNhanSuDuyet: any = null,
        public NgayNhanSuDuyetDisplay: string = null,
        public NhanVienNhanSuDuyetId: number = null,
        public NhanVienNhanSuDuyet: string = null,
        public LyDoNhanSuKhongDuyet: string = null,
        public DuocGiamDocDuyet: boolean = null,
        public NgayGiamDocDuyet: any = null,
        public NgayGiamDocDuyetDisplay: string = null,
        public GiamDocId: number = null,
        public GiamDoc: string = null,
        public LyDoGiamDocKhongDuyet: string = null,
        public TrangThai: number = null,
        public TenTinhTrang: string = null,
        public YeuCauNhanSuKhamSucKhoeChiTiets: YeuCauNhanSuKhamSucKhoeChiTiet[] = []
    ) { }
}

export class YeuCauNhanSuKhamSucKhoeChiTiet {
    constructor(
        public Id: number = null,
        public NguonNhanSu: number = null,
        public HoTen: string = null,
        public NhanVienId: number = null,
        public DonVi: string = null,
        public ViTriLamViec: string = null,
        public SoDienThoai: string = null,
        public DoiTuongLamViec: number = null,
        public DoiTuongLamViecDisplay: string = null,
        public NguoiGioiThieuId: number = null,
        public NguoiGioiThieu: string = null,
        public NhanSuKhamSucKhoeTaiLieuDinhKem: FileTaiLieu[] = [],
        public NhanSuKhamSucKhoeTaiLieuDinhKemId: number = null,
        public LoaiNhanVien: number = null,
        public GhiChu: string = null,
        public IsCreate: boolean = null,
        public IsUpdate: boolean = null
    ) { }
}

export class FileTaiLieu {
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
