import { LoaiPhanUngSauTiem, NoiXuTriTheoDoiTiemVacxin, TinhTrangHienTaiTheoDoiTiemVacxin } from 'src/app/shared/enum/tiem-vacxin.enum';

export class TiemChungTheoDoiSauTiem {
    constructor (
        public Id: number = null,
        public YeuCauTiepNhanId: number = null,
        public NhanVienTheoDoiSauTiemId: number = null,
        public NhanVienTheoDoiSauTiemDisplay: string = null,
        public ThoiDiemTheoDoiSauTiem: Date = null,
        public GhiChuTheoDoiSauTiem: string = null,
        public LoaiPhanUngSauTiem: LoaiPhanUngSauTiem = null,
        public LoaiPhanUngSauTiemDisplay: string = null,
        public ThongTinPhanUngSauTiem: string = null,
        public TiemChungThongTinPhanUngSauTiem: TiemChungThongTinPhanUngSauTiem = null
    ) { }
}

export class TiemChungThongTinPhanUngSauTiem {
    constructor (
        public SungDauTaiChoTiem: boolean = null,
        public SotLonHonBang39DoPUTT: boolean = null,
        public TrieuChungKhacPUTT: boolean = null,
        public MoTaPhanUngPUTT: string = null,

        public SotLonHonBang39DoTBN: boolean = null,
        public SocTrongVong72Gio: boolean = null,
        public BenhNaoTrongVong7Ngay: boolean = null,
        public ApXeTaiChoTiem: boolean = null,
        public NhungConCoGiatTrong3Ngay: boolean = null,
        public TrieuChungKhacTBN: boolean = null,
        public MoTaPhanUngTBN: string = null,
        public TienSuBenhTat: string = null,
        public XuLyPhanUngSauTiem: boolean = false,
        public NoiXuTri: NoiXuTriTheoDoiTiemVacxin[] = null,
        public NoiXuTriDisplay: string = null,
        public NoiXuTriKhac: string = null,
        public NguoiXuTriId: number = null,
        public NguoiXuTriDisplay: string = null,
        public TinhTrangHienTai: TinhTrangHienTaiTheoDoiTiemVacxin = null,
        public TinhTrangHienTaiDisplay: string = null,
        public MoTaTinhTrangHienTai: string = null,
        public NgayTuVong: Date = null,
        public NguoiBaoCaoId: number = null,
        public NguoiBaoCaoDisplay: string = null,

        public MoTaPhanUngPUK: string = null
    ) { }
}