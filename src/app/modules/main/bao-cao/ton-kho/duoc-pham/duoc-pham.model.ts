import { SortDescriptor } from '@progress/kendo-data-query';

export class DuocPham {
}
export class searchTonKho {
    constructor(
        public KhoId:number=null,
        public TenKho:string = null,
        public LoaiCanhBao :string = null,
        public CanhBaoId:number=0,
        public searchString:string=null
    ){}
}
export class searchNhapXuatTonKho {
    constructor(
        public KhoId:number=null,
        public TenKho:string = null,
        public Description:string=null,
        public RangeDate: rangeDate = new rangeDate,
        public Sort: Sort[] = new Array<Sort>(),
    ){}
}

export class Sort {
    constructor(
        public Field:string = null,
        public Dir:string=null
    ){}
}

export class rangeDate {
    constructor(
        public startDate:Date = null,
        public endDate:Date = new Date,
        
    ){}
}

export class modelChiTiet {
    constructor(
        public KhoId:number = 0,
        public DuocPhamId:number = 0,
        public RangeDate: rangeDate = new rangeDate,

    ){}
}

export class queryInfo {
    constructor(
        public AdditionalSearchString:string = null,
        public SearchString: string = "",
        public Sort: SortDescriptor[] = null,
    ){}
}

export class chiTietItem {
    constructor(
        public KhoId:number = 0,
        public DuocPhamId:number = 0,
        public KhoDisplay: string = null,
        public DuocPhamDisplay: string = null,
    ){}
}
export class CapNhatTonKhoItem {
    constructor(
        public DuocPhamId:number = 0,
        public DuocPham: string = null,
        public SoDangKy: string = null,
        public CapNhatTonKhoDuocPhamChiTiets: CapNhatTonKhoItemDetail[] = []
    ){}
}
export class CapNhatTonKhoItemDetail {
    constructor(
        public Id:number = 0,
        public HanSuDung: Date = null,
        public MaRef: string = null,
        public MaVach: string = null,
        public DonGiaNhap: number = null,
        public VAT: number = null,
        public TiLeBHYTThanhToan: number = null,
        public LaVatTuBHYT: boolean = null,
        public SoLuong: number = null,
        public DuocPhamBenhVienPhanNhomId: number = null,
    ){}
}
export class GridQueryInfo {    
    constructor(
      public skip:number,
      public take:number,
      public pageSize:number,
      public searchString:string,
      public additionalSearchString:string,
      public sort:SortDescriptor[],
      public lazyLoadPage:boolean,
        ) {
    }
  }