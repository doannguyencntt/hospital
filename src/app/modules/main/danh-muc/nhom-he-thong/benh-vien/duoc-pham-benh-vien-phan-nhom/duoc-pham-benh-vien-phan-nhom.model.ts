export class DuocPhamBenhVienPhanNhom {
    constructor(
        public Id: number = 0,
        public Ten: string = null,
        public TenCha: string = null,
        public NhomChaId: number = 0,
        public CapNhom: number = null,

        //BVHD-3454
        public KyHieuPhanNhom: string = null
    ) { }
}
