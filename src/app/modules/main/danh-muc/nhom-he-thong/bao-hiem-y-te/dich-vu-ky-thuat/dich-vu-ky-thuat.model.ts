import { LoaiTapTin } from "src/app/shared/enum/common-type.enums";
export class DichVuKyThuat {
  constructor(
    public TenChung: string = null,
    public TenTiengAnh: string = null,
    public MaChung: string = null,
    public Ma4350: string = null,
    public MaGia: string = null,
    public TenGia: string = null,
    public NhomChiPhi: number = null,
    public TenNhomChiPhi: string = null,
    public NhomDichVuKyThuatId: number = null,
    public TenNhomDichVuKyThuat: string = null,
    public LoaiPhauThuatThuThuat: number = null,
    public TenLoaiPhauThuatThuThuat: string = null,
    public Mota: string = null
  ) { }
}

export class FileExcelDichVuKyThuat {
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

export class ThongTinError {
  constructor(
    public Ma: string = null,
    public TotalThanhCong: number = null,
    public Error: string = null
  ) { }
}

export class DichVuKyThuatBaoHiemYTe {
  constructor(
    public Id: number = 0,
    public MaChung: string = null,
    public TenChung: string = null,
    public TenTiengAnh: string = null,
    public Ma4350: string = null,
    public MaGia: string = null,
    public TenGia: string = null,
    public NhomChiPhi: number = null,
    public TenNhomChiPhi: string = null,
    public NhomDichVuKyThuatId: number = null,
    public TenNhomDichVuKyThuat: string = null,
    public LoaiPhauThuatThuThuat: number = null,
    public TenLoaiPhauThuatThuThuat: string = null,
    public NgoaiQuyDinhBHYT: boolean = null,
    public MoTa: string = null,
    public DichVuKyThuatThongTinGias: DichVuKyThuatThongTinGiaBaoHiemYTe[] = []
  ) { }
}

export class DichVuKyThuatThongTinGiaBaoHiemYTe {
  constructor(
    public Id: number = 0,
    public HangBenhVien: number = null,
    public TenHangBenhVien: string = null,
    public Gia: number = null,
    public TuNgay: Date = null,
    public DenNgay: Date = null,
    public ThongTu: string = null,
    public QuyetDinh: string = null,
    public MoTa: string = null,
    public HieuLuc: boolean = null,
  ) { }
}