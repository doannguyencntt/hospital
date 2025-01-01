export class Search {
  constructor(
      // tslint:disable-next-line: no-use-before-declare
      public FromToDate: SearchDateRange = new SearchDateRange(),
      // tslint:disable-next-line: no-use-before-declare
      public Searchterm: string = null
  ) { }
}

export class SearchDateRange {
  public constructor(
      public startDate: Date = null,
      public endDate: Date = null,
      public TuNgay: string = null,
      public DenNgay: string = null
  ) { }
}

export class Grid {
  public constructor(
      public data: DanhSachBenhNhanPhauThuatVo[] = [],
      public total: number = null
  ) { }
}

export class DanhSachBenhNhanPhauThuatVo {
  public constructor(
      public Id: number = null,
      public Bhyt: number = null,
      public DichVu: string = null,
      public Goi: number = null,
      public Ksk: number = null,
      public KskDoan: number = null,
      public SoLanCapCuu: number = null,
      public SoNgayDieuTriNgoaiTru: number = null,
      public SoNguoiBenhChuyenVien: number = null,
      public SoNguoiBenhDieuTriNgoaiTru: number = null,
      public SoNguoiBenhVaoVien: number = null,
      public TongSo: number = null,
      public TreEm: number = null,
      public VienPhi: number = null,
  ) { }
}

export class QueryInfo {
  public constructor(
      public skip: number,
      public take: number,
      public pageSize: number,
      public searchString: string,
      public additionalSearchString: string
  ) { }
}
