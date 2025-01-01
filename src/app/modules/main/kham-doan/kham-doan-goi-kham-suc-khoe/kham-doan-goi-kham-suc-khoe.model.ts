import { LoaiTapTin } from "src/app/shared/enum/common-type.enums";

export class KhamDoanGoiKhamSucKhoeTimKiem {
  public constructor(
    public SearchString: string = null
  ) { }
}

export class FileExcelDichVu {
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


export class GoiKhamChungViewModel {
  public constructor(
    public KeyId: number = null,
    public DisplayName: string = null
  ) { }
}

export class KhamSucKhoeDoanChungViewModel {
  public constructor(
    public Id: number = 0,
    public CongTyKhamSucKhoeId: number = null,
    public TenCongTy: string = null,
    public HopDongKhamSucKhoeId: number = null,
    public SoHopDong: string = null,
    public NgayHieuLuc: Date = null,
    public NgayKetThuc: Date = null,

    public Ma: string = null,
    public Ten: string = null,
    public GoiChung: boolean = null,
    public CoSuDungGoiChung: boolean = null,

    public IsKetThucHopDong: boolean = null,
    public IsCopy: boolean = null,

    public DichVuKhamSucKhoeDoans: DichVuKhamSucKhoeDoanViewModel[] = [],
  ) { }
}

export class KhamSucKhoeDoanViewModel {
  public constructor(
    public Id: number = 0,
    public CongTyKhamSucKhoeId: number = null,
    public TenCongTy: string = null,
    public HopDongKhamSucKhoeId: number = null,
    public SoHopDong: string = null,
    public NgayHieuLuc: Date = null,
    public NgayKetThuc: Date = null,
    public Ma: string = null,
    public Ten: string = null,
    public GoiChung: boolean = null,
    public GoiDichVuPhatSinh: boolean = null,
    public CoSuDungGoiChung: boolean = null,
    public IsKetThucHopDong: boolean = null,
    public IsCopy: boolean = null,
    public DichVuKhamSucKhoeDoans: DichVuKhamSucKhoeDoanViewModel[] = [],
  ) { }
}

export class DichVuKhamSucKhoeDoanViewModel {
  public constructor(
    public Id: number = 0,
    public Nhom: number = null,
    public MaNhomDichVuBenhVien: string = null,
    public MaNhomDichVuBenhVienCha: string = null,
    public TenNhom: string = null,
    // public DichVuKyThuatBenhVienId: number = null,
    public DichVuKyThuatBenhVienId: string = null,
    public ChuyenKhoaKhamSucKhoe: number = null,
    public TenDichVuKyThuatBenhVien: string = null,
    public NhomGiaDichVuKyThuatBenhVienId: number = null,
    public DonGiaBenhVien: number = null,
    public DonGiaUuDai: number = 0,
    public DonGiaChuaUuDai: number = 0,
    public HinhThucKhamBenh: number = null,
    public GioiTinhNam: boolean = null,
    public GioiTinhNu: boolean = null,
    public CoMangThai: boolean = null,
    public KhongMangThai: boolean = null,
    public DaLapGiaDinh: boolean = null,
    public ChuaLapGiaDinh: boolean = null,
    public SoTuoiTu: number = null,
    public SoTuoiDen: number = null,
    public SoTuoiDisplay: string = null,
    public NoiThucHienString: string = null,
    public Loai: number = null,
    public SoLan: number = null,
    public LaDichVuKham: boolean = false,
    public GoiKhamSucKhoeNoiThucHienIds: number[] = [],
    public GoiKhamSucKhoeNoiThucHiens: GoiKhamSucKhoeNoiThucHienViewModel[] = [],
    public DichVuKhamBenhIds: number[] = [],
    public DichVuKyThuatIds: number[] = [],

  ) { }
}

export class GoiKhamSucKhoeNoiThucHienViewModel {
  public constructor(
    public GoiKhamSucKhoeDichVuKhamBenhId: number = null,
    public GoiKhamSucKhoeDichVuDichVuKyThuatId: number = null,
    public PhongBenhVienId: number = null,
  ) { }
}

export class KeyIdStringGoiDichVuKhamSucKhoeVo {
  public constructor(
    public DichVuId: number = 0,
    public Loai: number = 1,
  ) { }
}



