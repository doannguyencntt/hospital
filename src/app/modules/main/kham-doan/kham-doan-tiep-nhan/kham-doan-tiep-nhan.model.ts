import { GioiTinh } from "src/app/shared/enum/common-type.enums";
import { LoaiHoSoKhamSucKhoe, NhomDichVuChiDinhKhamSucKhoe, TinhTrangHonNhan } from "src/app/shared/enum/kham-doan.enum";

export class KhamDoanTiepNhanTimKiem {
    public constructor(
        public SearchString: string = null
        ){}
}

export class KhamDoanTiepNhanNhanVienTimKiem {
    public constructor(
        public SearchString: string = null,
        public SearchDaDoString: string = null,

        public TrangThai: KhamDoanTiepNhanNhanVienTrangThai = new KhamDoanTiepNhanNhanVienTrangThai(),
        public TinhTrangDoChiSoSinhTon: KhamDoanTiepNhanTinhTrangDoChiSoSinhTon = new KhamDoanTiepNhanTinhTrangDoChiSoSinhTon(),
        public CongTyId: number = null,
        public HopDongId: number = null,
        public IsLichSu: boolean = false,
        public IsDangKham: boolean = false,
        public IsDangKhamVaDaKham: boolean = false
        ){}
}

export class KhamDoanTiepNhanNhanVienTrangThai {
    public constructor(
        public ChuaKham: boolean = true,
        public DangKham : boolean = false,
        public DaKham : boolean = false,
        public HuyKham: boolean = false,
        public DichVuPhatSinh: boolean = false
        ){}
}

export class KhamDoanTiepNhanTinhTrangDoChiSoSinhTon {
    public constructor(
        public ChuaDo: boolean = true,
        public DaDo : boolean = true
        ){}
}

export class TiepNhanDichVuChiDinhQuery {
    public constructor(
        public HopDongKhamSucKhoeNhanVienId: number = null,
        public NgayThangNamSinh : Date = null,
        public NamSinh : number = null,
        public GioiTinh: GioiTinh = null,
        public TinhTrangHonNhan: TinhTrangHonNhan = null,
        public CoMangThai: boolean = null,
        public GoiKhamSucKhoeId: number = null
        ){}
}

export class DichVuChiDinhKhamSucKhoeBenhNhanQueryVo {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public GoiKhamSucKhoeId : number = null,
        public LaDichVuThem: boolean = null
        ){}
}

export class CapNhatGridDichVuKhamSucKhoeNhanVien {
    constructor(
        public YeuCauTiepNhanId: number = 0,
        //public LoaiDichVu: NhomDichVuChiDinhKhamSucKhoe = null,
        public LaDichVuKham: boolean = false,
        public YeuCauDichVuBenhVienId: number = 0,
        public DonGia: number = null,
        public IsUpdateDonGia: boolean = false,
        public SoLan: number = null,
        public IsUpdateSoLan: boolean = false,
        public NoiThucHienId: number = null,
        public IsUpdateNoiThucHien: boolean = false,

        //Cập nhật 31/03/2022
        public XoaDichVuDaChiDinhTrongGoiChung: boolean = null,
        public GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId: number = null,
        public GoiKhamSucKhoeChungDichVuKyThuatNhanVienId: number = null
    ) {
    }
}

export class ChonPhieuInKhamSucKhoe {
    public constructor(
        public SoKhamSucKhoeDinhKy: boolean = true,
        public PhieuDangKyKhamSucKhoe: boolean = true,
        public BangHuongDanKhamSucKhoe: boolean = true
    ) { }
}

export class ThongTinInPhieuKhamSucKhoe {
    public constructor(
        public HopDongKhamSucKhoeNhanVienId: number = null,
        public TenFile: string = null,
        public HostingName: string = null,
        public LoaiHoSoKhamSucKhoe: LoaiHoSoKhamSucKhoe = null,
        public NoFooter: boolean = null
    ) { }
}
export class DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham {
    constructor(
        public Ids: any[] = [],
        public LoaiMauXetNghiem: number = null,
        public LoaiMauXetNghiemText: string = null,
    ) { }
}
export class XetNghiemCovid {
    constructor(
        public BieuHienLamSang: string = null,
        public DichTeSarsCoV2: string = null,
        public LoaiBenhPham: string = null,
    ) { }
}