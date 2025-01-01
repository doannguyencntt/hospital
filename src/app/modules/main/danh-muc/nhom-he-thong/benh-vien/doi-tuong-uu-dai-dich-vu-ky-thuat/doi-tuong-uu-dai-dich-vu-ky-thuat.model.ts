export class DoiTuongUuDaiDichVuKyThuatAdd {
    constructor(
        public  DoiTuongUuDaiId :number=0,
        public DichVuKyThuatModelText:string =null,
        public  DichVuKyThuatBenhVienId:number=null,
        public  TiLeUuDai:number=null,
        public DichVuKyThuatBenhVienOld:number = null,
        
        public DoiTuongUuDai: DoiTuongUuDai[]=[],
        public  ListDichVuKyThuatBenhVienId:any[]=[],
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

