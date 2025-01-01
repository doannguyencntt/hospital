import { DateTime } from "luxon";
import { DanhSachDichVuChonTrongLanPopup, ListDichVuCheckTruocDo, ThemChiDinhDichVu } from '../tiep-nhan-benh-nhan.model';

export class DanhSachChoKham {
  constructor(
    //public Phong: string = "",
    public SearchString: string = null,
    public DoiTuongId: number = null,
    public DoiTuongBHYT: number = null,
    public DoiTuong: string = null,
    public KhoaPhongId: number = null,
    public TenBenh: string = null,
    public BenhNhanId: number = null,
    public HoTen: string = null,
    public NamSinh: number = null,
    public DiaChi: string = null,
    public BhytmaSoThe: string = null,
    public MaYeuCauTiepNhan: string = null,
    public ThoiDiemTiepNhan: DateTime = null,
    public ThoiDiemTiepNhanTuFormat: any = null,
    public ThoiDiemTiepNhanDenFormat: any = null,
    public ThoiDiemTiepNhanTu: any = null,
    public ThoiDiemTiepNhanDen: any = null,
    public NhanVienTiepNhanId: number = null,
    public NoiTiepNhanId: number = null,
    public TrieuChungId: number = null,
    public TrieuChungTiepNhan: string = null,
    public TrangThaiYeuCauTiepNhan: number = null,
    public ThoiDiemCapNhatTrangThai: DateTime = null,
    public FromDate: any = null,
    public ToDate: any = null,
    public CoBHYT: boolean = null,

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

export class modelUpdateView {
  constructor(
    public YeuCauTiepNhanId: number = null,
    public BenhNhanid: number = null,
    public MucHuongBHYT: number = null,
    public Data: ThemChiDinhDichVu[] = null,
    public ListDichVuCheckTruocDos :ListDichVuCheckTruocDo[] = []
  ) { }
}

//CheckDuSoLuongTonTrongGoiListDichVu
export class CheckDuSoLuongTonTrongGoiListDichVu {
  constructor(
    public LstDichVuThem: ThemChiDinhDichVu[] = null
  ) { }
}

export class ThongTinBenhNhans {
  constructor(
    public MaYeuCauTiepNhan: string = null,
    public BenhNhanId: number = null,
    public HoTen: string = null,
    public TenGioiTinh: string = null,
    public Tuoi: number = null,
    public SoDienThoai: number = null,
    public DanToc: string = null,
    public DiaChi: string = null,
    public NgheNghiep: string = null,
    public TuyenKham: string = null,
    public BHYTMucHuong: number = null,
    public TenLyDoTiepNhan: string = null,
    public ThoiDiemTiepNhanDisplay: string = null,
    public NamSinh: number = null,
    public ThangSinh: number = null,
    public NgaySinh: number = null,
    public TuoiThoiDiemHienTai: string = null,
    public TenLyDoKhamBenh: string = null,
    public MaBN: string = null,
    public SoBHYT: string = null,
    public CoBHYT: boolean = null,
    public BHYTNgayHieuLuc: Date = null,
    public BHYTNgayHetHan: string = null,
    public BHYTThoiGianHieuLucDisplay: string = null,
    public IsBHYTHetHan: boolean = null,
    public TenCongTy: string = null,
    public LoaiYeuCauTiepNhan: number = null,

    //BVHD-3800
    public LaCapCuu: boolean = null
  ) { }
}
export class TimKiemThongTinBenhNhan {
  constructor(public TimKiemMaBNVaMaTN: string = null) { }
}

export class GoiDichVuMarketingDangChonTiepNhan{
  constructor(
      public YeuCauGoiDichVuId: number = null,
      public ChuongTrinhGoiDichVuId: number = null,
      public TenGoiDichVu: string = null,
      public TongTienConBaoLanhDuoc: number = 0,
      public IsChecked: boolean = null,
      public DichVus: Array<DanhSachDichVuChonTrongLanPopup> = []
  ) { }
}