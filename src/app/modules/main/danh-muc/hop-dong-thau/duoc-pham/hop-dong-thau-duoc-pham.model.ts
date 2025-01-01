import { NhapKhoDuocPhamChiTiet } from '../../../nhap-xuat/duoc-pham/nhap-kho/nhap-kho.model';

export class HopDongThauDuocPham {
    constructor(
        public Id: number = 0,
        public NhaThauId: number = 0,
        public NhaThau: string = null,
        public SoHopDong: string = null,
        public SoQuyetDinh: string = null,
        public CongBo: Date = null,
        public NgayKy: Date = null,
        public NgayHieuLuc: Date = null,
        public NgayHetHan: Date = null,
        public LoaiThau: number = null,
        public TenLoaiThau: string = null,
        public LoaiThuocThau: number = null,
        public TenLoaiThuocThau: string = null,
        public NhomThau: string = null,
        public GoiThau: string = null,
        public Nam: number = 0,
        public HopDongThauDuocPhamChiTiets: HopDongThauDuocPhamChiTiet[] = [],
        public NhapKhoDuocPhamChiTiets: NhapKhoDuocPhamChiTiet[] = []
    ) { }
}

export class HopDongThauDuocPhamChiTiet {
    constructor(
        public HopDongThauDuocPhamId: number = 0,
        public DuocPhamId: number = 0,
        public DuocPham: string = null,
        public Gia: number = 0,
        public GiaDisplay: string = null,
        public SoLuong: number = 0,
        public SoLuongDisplay: string = null,
        public SoLuongDaCap: number = 0,
        public Id: number = 0,
        public IdGrid: number = null,
        public SuDungTaiBenhVien: boolean = false,
        public SuDungTaiBenhVienDisplay: string = null ,//SuDungTaiBenhVien ==true ?"Có":"Không",
        public MaDuocPhamBenhVien: string = null,
        // public DuocPhamBenhVienPhanNhomId : number = null  ,
        // public DuocPhamBenhVienPhanNhomModelText: string = null,
    
        // BVHD-3454
        public DuocPhamBenhVienId: number = null,
        public DuocPhamBenhVienPhanNhomId: number = null,
        public DuocPhamBenhVienPhanNhomConId: number = null,
        public TenDuocPhamBenhVienPhanNhomCon: string = null,
        public DuocPhamBenhVienPhanNhomChaId: number = null,
        public TenDuocPhamBenhVienPhanNhomCha: string = null,
        public MaDuocPhamTemps: Array<string> = []
        ) { }
}
