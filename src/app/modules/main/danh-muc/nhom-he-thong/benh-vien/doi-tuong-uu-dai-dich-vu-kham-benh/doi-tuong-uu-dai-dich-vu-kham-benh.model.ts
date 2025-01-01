export class DoiTuongUuDaiDichVuKhamBenhAdd {
    constructor(
        public  DoiTuongUuDaiId :number=0,
        public DichVuKhamBenhModelText:string =null,
        public  DichVuKhamBenhBenhVienId:number=null,
        public  TiLeUuDai:number=null,
        public DichVuKhamBenhBenhVienOld:number = null,
        
        public DoiTuongUuDai: DoiTuongUuDai[]=[],
        public ListDichVuKhamBenhBenhVienId : any[]=[]
    ) {
    }
}
export class DoiTuongUuDai {
    constructor(
        public  Ten :string =null,
        public DoiTuongId:number =null,
        public DoiTuongOld:number = null,
        public  TiLeUuDai :number=null,
        public  MoTa :string =null,
        //public  IsDisabled :boolean =null
    ) {
    }
}
