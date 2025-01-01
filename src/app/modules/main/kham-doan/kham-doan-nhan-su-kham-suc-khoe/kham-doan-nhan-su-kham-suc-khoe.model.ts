import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';

export class KhamDoanNhanSuKhamSucKhoeTimKiem {
    public constructor(
        public SearchString: string = null,
        public TrangThai: KhamDoanNhanSuKhamSucKhoeTimKiemTrangThai = new KhamDoanNhanSuKhamSucKhoeTimKiemTrangThai(),
        public NgayGui: KhamDoanNhanSuKhamSucKhoeTimKiemDateRange = new KhamDoanNhanSuKhamSucKhoeTimKiemDateRange(),
        public NgayKHTHDuyet: KhamDoanNhanSuKhamSucKhoeTimKiemDateRange = new KhamDoanNhanSuKhamSucKhoeTimKiemDateRange(),
        public NgayNhanSuDuyet: KhamDoanNhanSuKhamSucKhoeTimKiemDateRange = new KhamDoanNhanSuKhamSucKhoeTimKiemDateRange(),
        public NgayGiamDocDuyet: KhamDoanNhanSuKhamSucKhoeTimKiemDateRange = new KhamDoanNhanSuKhamSucKhoeTimKiemDateRange()
    ) { }
}

export class KhamDoanNhanSuKhamSucKhoeTimKiemTrangThai {
    public constructor(
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = true,
        public TuChoi: boolean = true
    ) { }
}

export class KhamDoanNhanSuKhamSucKhoeTimKiemDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null
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
        public YeuCauNhanSuKhamSucKhoeChiTiets: YeuCauNhanSuKhamSucKhoeChiTiet[] = [],
        public NhanSuBiLoaiBo: number[] = [],
        public IsDuyet: boolean = null
    ) { }
}

export class HopDongKhamSucKhoeDiaDiem {
    constructor(
        public Id: number = null,
        public DiaDiem: string = null,
        public CongViec: string = null,
        public Ngay: any = null,
        public NgayDisplay: string = null,
        public GhiChu: string = null
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
        public IsUpdate: boolean = null,
    
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

export const CommandName = {
    Add: 'Thêm',
    Update: 'Cập nhật'
};

export const DoiTuongLamViec = {
    Parttime: 'Parttime',
    Fulltime: 'Fulltime'
};

export const DeleteDialog = {
    Title: 'Xác nhận xóa',
    Message: 'Bạn có muốn xóa người này không?'
};
