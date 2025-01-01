export class TongHopDuTruMuaTaiKhoaDuoc {
    constructor(
        public Id : number = 0,
        public SoPhieu: string = null,
        public Khoa: string = null,
        public KhoaId: number = null,
        public TenKhoa: string = null,
        public KhoId: number = null,
        public TenKho: string = null,
        public NguoiYeuCauId: string = null,
        public TenNguoiYeuCau: string = null,
        public NgayYeuCau: Date = null,
        public TrangThai: string = null,
        public TrangThaiHienThi: string = null,
        public NgayKhoaDuocDuyet: string = null,
        public NgayGiamDocDuyet: string = null,
        public KyDuTru : string = null,
        public KyDuTruId : number = null,
        public LoaiDuTru : string = null,
        public LoaiDuTruId : number = null,
        public GhiChu : string = null,
        public LyDoTruongKhoaTuChoi :string = null,
        public LoaiDuyet : boolean = null,
        public ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList : ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc[]=[],
        public ListDuTruMuaVatTuKhoDuocChiTiet :DuTruMuaVatTuKhoDuocChiTietList[]=[]

    ) { }
}
export class DuTruMuaVatTuKhoDuocChiTietList {
    constructor(
        public Id : number = 0,
        public DuTruMuaVatTuId : number = 0,
        public DuTruMuaVatTuTheoKhoaId : number = 0,
        public VatTuId : number =0,
        public LaVatTuBHYT: boolean = null,
        public SoLuongDuTru : number =null,
        public SoLuongDuKienSuDung : number =null,
        public  NhomDieuTriDuPhong: string =null,
        public SoLuongDuTruTruongKhoaDuyet : number =null,
        public SoLuongDuTruKhoDuocDuyet: number = null,
        public DuTruMuaVatTuTheoKhoaChiTietId : number =null,
        public DuTruMuaVatTuKhoDuocChiTietId : number =null,
    ) { }
}
export class ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc {
    constructor(
        public Id : number = 0,
        public STT : number =0,
        public Loai: boolean = null,
        public TenLoai : string =null,
        public VatTuId : number = null,
        public TenVatTu : string =null,
        public  HoatChat: string =null,
        public NongDoVaHamLuong : string =null,
        public SĐK : string =null,
        public DuTruMuaVatTuTheoKhoaId : number = 0,
        public DVT : string =null,
        public DD : string =null,
        public NhaSX : string =null,
        public NuocSX : string =null,
        public NhomDieuTriDuPhong : string =null,
        public SLDuTru : number =null,
        public SLDuKienSuDungTrongKho : number =null,
        public KhoDuTruTon : number =null,
        public HDChuaNhan : number =null,
        public SLDuTruTKhoDuyet : number =null,
        public SLDuTruKhoDuocDuyet : number =null,
        public KhoTongTon : number =null,
        public thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild : ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild[]=[]
    ) { }
}
export class ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild {
    constructor(
        public STT: number = 0,
        public Nhom: string = null,
        public Kho: string = null,
        public TuNgay: string = null,

        public DenNgay: string = null,
        public SLDuTru: number=null,
        public SLDuKienTrongKy: number =null,
        public DuTruMuaVatTuTheoKhoaId: number=null,
        public DuTruMuaVatTuTheoKhoaChiTietId: number=null,
        public DuTruMuaVatTuId: number=null,
        public DuTruMuaVatTuChiTietId: number=null,
        public KyDuTru: string = null,
    ) { }
}
export class TongHopDuTruTuaTaiKhoaDuocSearch {
    constructor(
        public ChoDuyet : boolean = true,
        public ChoGoi : boolean = true,
        public SearchString: string = null,

        
        public RangeNhap: RangeDate = new RangeDate(),
        public RangeDuyet: RangeDate = new RangeDate()
    ) { }
}
export class TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy {
    constructor(
        public DaGoiVaDangChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = true,
        public DaDuyet: boolean = true,
        public SearchString: string = null,

        
        // public RangeNhap: RangeDate = new RangeDate(),
        public RangeDuyet: RangeDate = new RangeDate()
    ) { }
}
export class TongHopDuTruTuaTaiKhoaDuocSearchTuChoi {
    constructor(
        public SearchString: string = null,
        public RangeNhap: RangeDate = new RangeDate(),
        // public RangeDuyet: RangeDate = new RangeDate()
    ) { }
}
export class RangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ) { }
}
export class TrangThaiDuyet{
    constructor(
        public TenTrangThai: string = null,
        public DuocDuyet: boolean = null
    ) { }
}
export class DuTruMuaVatTuKhoDuoc{
    constructor(
        public Id: number = null,
        public LyDoTruongKhoaTuChoi :string = null,
        public LoaiDuyet : boolean = null,
        public ListDuTruMuaVatTuKhoDuocChiTiet : DuTruMuaVatTuKhoDuocChiTiet[] = []
    ) { }
}
export class DuTruMuaVatTuKhoDuocChiTiet{
    constructor(
        public DuTruMuaVatTuId: number = null,
        public DuTruMuaVatTuTheoKhoaId: number = null,
        public VatTuId: number = null,
        public LaVatTuBHYT: boolean = null,
        public SoLuongDuTru: number = null,
        public SoLuongDuKienSuDung: number = null,
        public SoLuongDuTruTruongKhoaDuyet: number = null,
        public SoLuongDuTruKhoDuocDuyet: number = null,
        public NhomDieuTriDuPhong: number = null,
        public DuTruMuaVatTuTheoKhoaChiTietId: number = null,
        public DuTruMuaVatTuKhoDuocChiTietId: number = null,
    ) { }
}

 // goi

export class DuTruMuaTaiKhoaDuocGoi {
    constructor(
        public Id : number = 0,
        public KyDuTru: string = null,
        public KyDuTruId: number = null,
        public TenNguoiYeuCau : string = null,
        public NguoiYeuCauId : number = 0,
        public TrangThai: string = null,
        public TrangThaiHienThi: string = null,
        public GhiChu :string = null,
        public TuNgay :Date = null,
        public DenNgay :Date = null,
        public NgayYeuCau : Date = null,
        public LyDoTuChoi : string = null,
        public  ListDuTruVatTuId  :number[]=[],
        public  ListDuTruVatTuTheoKhoaId  :number [] =[],
        
        public thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList : ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc[]=[],
    ) { }
}
export class ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc {
    constructor(
        public Id : number = 0,
        public STT : number =0,
        public Loai: boolean = null,
        public TenLoai : string =null,
        public VatTuId : number = null,
        public TenVatTu : string =null,
        public  HoatChat: string =null,
        public NongDoVaHamLuong : string =null,
        public SĐK : string =null,
        public DuTruMuaVatTuTheoKhoaId : number = 0,
        public DVT : string =null,
        public DD : string =null,
        public NhaSX : string =null,
        public NuocSX : string =null,
        public NhomDieuTriDuPhong : string =null,
        public SLDuTru : number =null,
        public SLDuKienSuDungTrongKho : number =null,
        public KhoDuTruTon : number =null,
        public HDChuaNhan : number =null,
        public SLDuTruTKhoDuyet : number =null,
        public SLDuTruKhoDuocDuyet : number =null,
        public KhoTongTon : number =null,
        public ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChildList : ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild[]=[]
    ) { }
}
// phieu in 
export class PhieuInDuTruMuaTaiKhoaDuoc {
    constructor(
        public DuTruMuaDuocPhamTheoKhoaId: number = null,
        public DuTruMuaVatTuTheoKhoaId: number = null,
        public HostingName: string = null,
        public Header: boolean = null      
    ) {
    }
   
}
export  class DuTruMuaVatTuTaiKhoaDuoc
{
    constructor(
        public Id : number = 0,
        public SoPhieu: string = null,
        public NhanVienYeuCauId: number = 0,
        public NgayYeuCau : Date = null,
        public TuNgay: Date = null  ,
        public DenNgay: Date = null     ,
        public GhiChu: string = null    ,
        public GiamDocDuyet: string = null    ,
        public GiamDocId: string = null    ,
        public NgayGiamDocDuyet: string = null    ,
        public LyDoGiamDocTuChoi: string = null    ,
        public KyDuTruMuaVatTuVatTuId: number = 0,
        public  ListDuTruVatTuId  :number[]=[],
        public  ListDuTruVatTuTheoKhoaId  :number [] =[],
        public  ListDuTruVatTuChiTietId  :number[]=[],
        public  ListDuTruVatTuTheoKhoaChiTietId  :number [] =[],
        public DuTruMuaVatTuKhoDuocChiTiet: DuTruMuaVatTuKhoDuocChiTiets[] = []    ,
    ) {
    }
   
}
// view 
export class DuTruView {
    constructor(
        public SoPhieu: string = null,
        public KyDuTruDisplay: string = null,
        public KyDuTru: string = null,
        public NguoiYeuCau: string = null,
        public NguoiDuyet: string = null,
        public NgayYeuCauDisplay: string = null,
        public Id: number = null,
        public NgayYeuCau: any = null,
        public NgayDuyetDisplay: string = null,
        public LyDoGiamDocTuChoi: string = null,
        public NgayDuyet: any = null,
        public GhiChu: string = null,
        public TrangThai: boolean = null, // null: chờ, true: đã duyệt, false: từ chối duyệt
        public TrangThaiDisplay: string = null,
        public DuTruGiamDocDetails: DuTruViewDetail[] = []
    ) { }
}

export class DuTruViewDetail {
    constructor(
        public Loai: string = null,
        public IsBhyt: boolean = null,
        public VatTuId: number = null,
        public VatTu: string = null,
        public HoatChat: string = null,
        public Id: number = null,
        public NongDo: string = null,
        public Sdk: string = null,
        public Dvt: string = null,
        public DuongDung: string = null,
        public NhaSx: string = null,
        public NuocSx: string = null,
        public SoLuongDuTru: number = null,
        public SoLuongDuKienTrongKy: number = null,
        public SoLuongDuTruTrKhoa: number = null,
        public SoLuongDuTruKhDuoc: number = null,
        public SoLuongDuTruDirector: number = null,
        public KhoDuTruTon: number = null,
        public KhoTongTon: number = null,
        public HdChuaNhap: number = null,
        public TongTonList: any[] = [],
        public HdChuaNhapList: any[] = []
    ) { }
}
export  class DuTruMuaVatTuKhoDuocChiTiets
{
    constructor(
        public Id : number = 0,
        public VatTuId : number = 0,
        public DuTruMuaVatTuKhoDuocId:  number = 0,
        public LaVatTuBHYT: boolean = null,
        public SoLuongDuTru: number = 0  ,
        public SoLuongDuKienSuDung:  number = 0    ,
        public SoLuongDuTruTruongKhoaDuyet:  number = 0    ,
        public SoLuongDuTruKhoDuocDuyet:  number = 0    ,
        public SoLuongDuTruGiamDocDuyet:  number = 0  
        
    ) {
    }
}
export class ListStatusSelectTabTHDTKhoa {
    constructor(
        public selectedTabChoXuLy: boolean = true,
        public selectedTabDaXuLy: boolean = false,
        public selectedTabTuChoi: boolean = false,
    ) {
    }
}