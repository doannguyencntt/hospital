export class ChuyenPhong {
    
}
export class PhongLookupItemVo {
  constructor(
    public KeyId: number = 0,
    public DisplayName: string,
  ) {
  }
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
  export class Khoa {
    constructor(public KeyId: number, public DisplayName: string = "") {}
  }