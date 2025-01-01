// export class QuayXuatThuoc {
//     constructor(
//         public Id: number = 0,
//         public MaTN: string = null,
//         public MaBN: string = null,
//         public HoTen: string = null,
//         public SoDon: string = "",

import { Sort } from 'src/app/shared/models/common.model';

//         public ThoiDiemCapPhatThuoc: string = null,
//         public NgayThuStr: string = null,
//     ) { }

// }
export class QuayXuatThuoc {
    constructor(
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public FromDate: any = null,
        public ToDate: any = null
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
export class BenhNhanThongTin {
    constructor(
        public Id: number = null,
        public MaBN: string = null,
        public MaYeuCauTiepNhan: string = null,
        public HoTen: string = null,
        public DiaChiDayDu: string = null,
        public GioiTinh: string = null,
        public GioiTinhHienThi: string = null,
        public NamSinh: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public SoDuTaiKhoan: number = 0
    ) { }

}
export class DanhSachThuoc {
    constructor(
        public Id: number = 0,
        public ThuocBHYT: any[] = [],
        public ThuocKhongBHYT: any[] = [],

    ) { }
}

export class XacNhanInViewModel {
    constructor(
        public TaiKhoanBenhNhanThuId: number = null,
        public InPhieuThu: boolean = null,
        public InBangKe: boolean = null,
        public Hosting: string = null
    ) { }
}
export class XacNhanInThuocVatTuViewModel {
    constructor(
        public PhieuXuatId: number = null,
        public Hosting: string = null,    
        public LoaiDuocPhamVatTu:  number = null,
    ) { }
}
export class XacNhanInThuocViewModel {
    constructor(
        public TiepNhanId: number = null,
        public TaiKhoanBenhNhanThuId: number = null,
        public TaiKhoanBenhNhanChiId : number = null,
        public Hosting: string = null,
        public IsBhyt: boolean = null,
    ) { }
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
