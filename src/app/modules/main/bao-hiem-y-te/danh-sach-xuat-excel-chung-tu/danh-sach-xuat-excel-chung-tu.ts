export enum LoaiChungTu {
  GiayRaVien = 1,
  GiayNghiHuongBHXH = 2,
  GiayNghiDuongThai = 3,
  TomTatBenhAn = 4,
  GiayChungSinh = 5
}
export class ExcelChungTuQueryInfo {
  constructor(
    public LoaiChungTu: number = null, 
    public YeuCauTiepNhanIds: number[] = [],
    public MaYeuCauTiepNhans: string[] = [],
    public ThongTinYeuCauTiepNhans: ThongTinYeuCauTiepNhans[] = []
  ) { }
}

export class ThongTinYeuCauTiepNhans {
  constructor(
    public YeuCauTiepNhanNoiTruId: number = null,
    public MaYeuCauTiepNhan: number = null,
    public YeuCauTiepNhanNgoaiTruId: number = null,
  ) { }
}

export class TimKiemThongTinBenhNhanXuatExcelChungTu {
  constructor(
    public LoaiChungTu: number = null,

    public TuNgay: any = null,
    public DenNgay: any = null,

    public FromDate: any = null,
    public ToDate: any = null,

    public TimKiem: any = null,
    public SearchString: string = null
  ) { }
}
