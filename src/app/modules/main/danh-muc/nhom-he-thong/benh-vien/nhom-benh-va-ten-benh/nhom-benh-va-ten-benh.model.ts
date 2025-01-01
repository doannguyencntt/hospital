export class NhomBenhVaTenBenh {
    constructor(
        public Id: number = 0,
        public Stt: string = null,
        public Ma: string = null,
        public TenTiengViet: string = null,
        public TenTiengAnh: string = null,
        public MoTa: string = null,
        public HieuLuc: boolean = null,

        public ChuongICDId: number = null,
        public TextChuongICD: number = null,

        public NhomICDLienKetICDTheoBenhViens: NhomICDLienKetICDTheoBenhVien[] = [],

        public MaICDs: number[]
    ) { }
}
export class NhomICDLienKetICDTheoBenhVien {
    constructor(
        public Id: number = 0,
        public NhomICDTheoBenhVienId: number = null,
        public ICDId: number = null
    ) { }
}

