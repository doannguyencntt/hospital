import { DichVuGiuong } from '../../bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.model';

export class DichVuGiuongBenhVien {
    constructor(
        public DichVuGiuongId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public KhoaPhongIds: number[] = [],
        public NoiThucHienIds: string[] = [],
        public LoaiGiuong:number =null,
        public LoaiGiuongText:string =null,
        public DichVuGiuongModelText:string =null,
        public MoTa: string = null,
        public HieuLuc: boolean = false,
        public AnhXa: boolean = null,
        public DichVuGiuong: DichVuGiuong = null,
        public DichVuGiuongBenhVienGiaBaoHiems: DichVuGiuongBenhVienGiaBaoHiems[]=[],
        public DichVuGiuongBenhVienGiaBenhViens: DichVuGiuongBenhVienGiaBenhViens[]=[],
    ) { }
}
export class DichVuGiuongBenhVienGiaBaoHiems {
    constructor(
        public  DichVuGiuongBenhVienId :number=0,
        public  Gia:number=null,
        public  TuNgay: Date=null,
        public  DenNgay:Date=null,
        public  TiLeBaoHiemThanhToan:number=null
    ) {
    }
}
export class DichVuGiuongBenhVienGiaBenhViens {
    constructor(
        public NhomGiaDichVuGiuongBenhVienId:number = null,
        public NhomGiaDichVuGiuongBenhVienText:string=null,
        public  DichVuGiuongBenhVienId :number=0,
        public  Gia:number=null,
        public  TuNgay:Date=null,
        public  DenNgay:Date=null,
        public BaoPhong:boolean=null
    ) {
    }
}
