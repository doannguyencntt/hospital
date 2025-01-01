export class ThongTinBenhAnMe {
    public constructor(
        public KeyId: number = null,
        public DisplayName: string = null,
        
        public YeuCauTiepNhanMeId: number = null,
        public MaBA: string = null,
        public MaTN: string = null,
        public MaBN: string = null,
        public HoTen: string = null,
        public NamSinh: string = null,
    ) { }
}
export class LookupItemChuyenKhoaVo {
    constructor(
      public KeyId: number= null,
      public DisplayName: string= null,
    ) {
    }
  }
  