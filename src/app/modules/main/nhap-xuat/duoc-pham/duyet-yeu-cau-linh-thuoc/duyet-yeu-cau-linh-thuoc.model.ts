export class DuyetYeuCauLinhThuoc {
}
import { DateTime } from 'luxon';
import { Sort } from 'src/app/shared/models/common.model';


export class SearchNgay {
    constructor(
        public NgayYeuCauRangDate : rangeDate = new rangeDate,
        public NgayDuyetRangDate : rangeDate = new rangeDate,
        public TrangThaiCheck : number = 4 
    ){}
}
export class rangeDate {
    constructor(
        public startDate:Date = null,
        public endDate:Date = null,
    ){}
}

export class DuyetYeuCauLinhDuocPham {
    constructor(
        public Id: number = null,
        public KhoXuatId : number = null,
        public TenKhoXuat : string = null,
        public KhoNhapId : number = null,
        public TenKhoNhap : string = null,
        public LoaiPhieuLinh : number = null,
        public TenLoaiPhieuLinh : string = null,

        public NhanVienYeuCauId : number = null,
        public TenNhanVienYeuCau : string = null,
        public NhanVienDuyetId : number = null,
        public TenNhanVienDuyet : string = null,
        public NgayYeuCau : DateTime = null,
        public NgayDuyet : DateTime = null,
        public GhiChu : string = null,

        public NguoiXuatKhoId: number = null,
        public TenNguoiXuatKho: string = null,
        public NguoiNhapKhoId: number = null,
        public TenNguoiNhapKho: string = null,

        public isHideDuyet: boolean = false,
        public DuocDuyet: boolean = null,
        public TenTrangThai: string = null,
        public LyDoKhongDuyet: string = null,

        public DuyetYeuCauLinhDuocPhamChiTiets: Array<DuyetYeuCauLinhDuocPhamChiTiet> = [],
        public LastModified: any = null
    ){}
}

export class DuyetYeuCauLinhDuocPhamChiTiet {
    constructor(
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: boolean = null,
        public TenDuocPham : string = null,
        public NongDoHamLuong : string = null,
        public HoatChat : string = null,
        public DuongDung : string = null,
        public DVT : string = null,
        public HangSanXuat : string = null,
        public NuocSanXuat : string = null,
        public SLTon : number = null,
        public SoLuong : number = null,
        public SoLuongCoTheXuat : number = null,
        public Nhom: string = null,
        public Index: number = null
    ){}
}

export class TrangThaiDuyetYeuCauLinh{
    constructor(
        public TenTrangThai: string = null,
        public DuocDuyet: boolean = null
    ){}
}
export class ExportQueryInfoQueryInfo  {
    constructor(
        public Skip: number =0,
        public Take: number =50 ,
        public PageSize: number =50,
        public SearchString: string ="",
        public AdditionalSearchString: string ="",
        // public searchTerms: string = "",
        public Sort: Sort[] = []
    ) { }
}
export class LinhVatTuGridVo  {
    constructor(
        public NgayYeuCauRangDateStartDate: string =null,
        public NgayYeuCauRangDateStartEnd: string =null,
        public NgayDuyetRangDateStartDate: string =null,
        public NgayDuyetRangDateStartEnd: string =null,
        public Searching: string =null,
        public TrangThaiCheck: number =null,
        // public DangChoGoi: boolean = true,
        public DangChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = null,
        public DaDuyet: boolean = null,
    ) { }
}