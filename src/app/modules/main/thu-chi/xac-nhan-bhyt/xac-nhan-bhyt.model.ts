import { NhomGoiDichVu } from 'src/app/shared/enum/nhom-goi-dich-vu.enum';
import { EnumTrangThaiThanhToan } from 'src/app/shared/enum/trang-thai-thanh-toan.enum';
import { PercentTypeForPttt } from 'src/app/shared/enum/bhyt-type.enum';

export class XacNhanBhyt {
    constructor(
        public Id: number = 0,
        public MaTN: string = null,
        public MaBN: string = null,
        public HoTen: string = null,
        public NamSinh: number = null,
        public TenGioiTinh: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public SoTienDaXacNhan: number = 0,
        public SoTienChoXacNhan: number = 0,
        public ChuaXacNhan: boolean = true,
        public SearchString: string = null,
        public DaXacNhan: boolean = true,
        public ThoiDiemTiepNhanTu: any = null,
        public ThoiDiemTiepNhanDen: any = null,
        public FromDate: any = null,
        public ToDate: any = null
    ) { }
}

export class ThongTinHanhChinh {
    constructor(
        public Id: number = 0,
        public MaTN: string = null,
        public MaBN: string = null,
        public HoTen: string = null,
        public NamSinh: number = null,
        public TenGioiTinh: string = null,
        public DiaChi: string = null,
        public SoDienThoaiStr: string = null,
        public Email: string = null,
        public DoiTuongUuDai: string = null,
        public CongTyUuDai: string = null
    ) { }
}
export class ThongTinBaoHiemXaHoi {
    constructor(
        public SoThe: string = null,
        public NgayHieuLucStr: string = null,
        public NgayHetHanStr: string = null,
        public NoiDangKyKhamBenh: string = null,
        public TuyenKham: string = null,
        public GiayChuyenVien: string = null,
        public GiayChuyenVienId: number = null,
        public GiayMiemCungTriTra: string = null,
        public GiayMienCungTriTraId: number = null,
        public MucHuong: number = 0,
        public NoiChuyenDi: string = null
    ) { }
}
export class DanhSachLichSuXacNhan {
    constructor(
        public DgBHYTChiTra: number = null,
        public NgayCapNhatStr: string = null,
        public NgươiCapNhat: string = null,
        public DgBh: any = null,
        public DgBhChiTra: any = null,
        public MucHuong: number = null,
        public SoLuong: number = null,
        public Order: number = null,
        public NgayDuyet: any = null,
        public TenNhanVien: string = null,
        public TiLeDv: number = null,
        public TtBh: any = null,
        public TtBhChiTra: number = null
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

export class TimKiemThongTinBenhNhan {
    constructor(
        public TimKiemMaBNVaMaTN: string = null
    ) { }
}

export class GridXacNhanBhyt {
    constructor(
        public CheckedDefault: boolean = null,
        public HuongBhyt: boolean = null,
        public TrangThaiThanhToan: EnumTrangThaiThanhToan = null,
        public DichVuId: number = null,
        public TenDichVu: string = null,
        public Id: number = null,
        public SoLuong: number = null,
        public DonGiaBenhVien: number = null,
        public ThanhTienBenhVien: number = null,
        public DGBHYTThamKhao: number = null,
        public ThanhTienBHYTThamKhao: number = null,
        public TiLeTheoDichVu: number = null,
        public LoaiPhanTram: PercentTypeForPttt = null,
        public LoaiPhanTramText: string = null,
        public TiLeDv: number = null,
        public IsPttt: boolean = null,
        public MucHuong: number = null,
        public DGBHYTChiTra: number = null,
        public TTBHYTChiTra: number = null,
        public TTBHYTChiTraGiaSu: number = null,
        public BNThanhToan: number = null,
        public IsDaXacNhan: boolean = null,
        public HighLightClass: string = null,
        public GroupType: NhomGoiDichVu = null,
        public IsWarning: boolean = null,
        public NhanVienChiDinh: string = null,
        public NoiChiDinh: string = null,
        public IcdChinh: string = null,
        public MucHuongSystem: number = null,
        public GhiChuIcdChinh: string = null,        
        public CanModify: boolean = null,
        public MucHuongDaDuyet : number = null,
        public showInfoChangeMucHuongDuyet: boolean = false,
        public YeuCauKhamBenhId: number = null,
        public IcdKemTheos: IcdKemTheoModel[] = []
    ) { }
}

export class IcdKemTheoModel {
    constructor(
        public Icd: string = null,
        public GhiChu: string = null
    ) { }
}

export class GridBhytModel {
    constructor(
        public data: GridXacNhanBhyt[] = [],
        public total: number = 0
    ) { }
}

export class DesignateCoincidentServiceModel {
    constructor(
        public Id: number = null,
        public ServiceId: number = null,
        public ServiceGroup: NhomGoiDichVu = null,
        public PhongBenhVienChiDinh: string = null,
        public BacSyChiDinh: string = null,
    ) { }
}

export class InsuranceModelRequest {
    constructor(
        public BenefitInsurance: GridXacNhanBhyt[] = [],
        public NonBenefitInsurance: GridXacNhanBhyt[] = [],
        public IdYeuCauTiepNhan: number = null
    ) { }
}

export class ListLoaiPhanTramPttt {
    constructor(
        public DisplayName: string = null,
        public KeyId: number = null
    ) { }
}
