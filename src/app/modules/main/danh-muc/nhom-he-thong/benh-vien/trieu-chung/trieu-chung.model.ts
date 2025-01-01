export class TrieuChung {
    constructor(
        public Id : number = 0,
        public Ten: string = null,
        public TenCha: string = null,
        public TrieuChungChaId : number = 0 ,
        public CapNhom: number = 0,
        public TrieuChungDanhMucChuanDoans : TrieuChungDanhMucChuanDoan[]=[],
        public DanhMucChuanIds : number[] =[]
    ) { }
}
export class TrieuChungDanhMucChuanDoan {
    constructor(
        public TrieuChungId: number = 0,
        public DanhMucChuanDoanId: number = 0,
    ) { }
}

export class LookupQueryInfo {
    constructor(
      public Take: number = 50,
      public Id: number = 0,
      public Query: string = null,
      public ParameterDependencies: string = null
    ) {
    }
  }