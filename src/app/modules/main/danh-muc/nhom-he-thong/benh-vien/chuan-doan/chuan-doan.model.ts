export class ChuanDoan {
    constructor(
        public DanhMucChuanDoanId:number=null,
        public DanhMucChuanDoanName:number=null,
        public Ma:string=null,
        public TenTiengViet:string=null,
        public TenTiengAnh:string=null,
        public ChuanDoanLienKetICDIds : number[] =[]
    ) {
    }
}
