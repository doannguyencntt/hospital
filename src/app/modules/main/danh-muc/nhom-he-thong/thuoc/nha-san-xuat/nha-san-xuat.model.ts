
export class NhaSanXuat {
    constructor(
        public Id: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public NhaSanXuatTheoQuocGias: NhaSanXuatTheoQuocGias[]=[]
    ) { }
}
export class NhaSanXuatTheoQuocGias {
    constructor(
        public NhaSanXuatId: number = 0,
        public QuocGiaId: number = 0,
        public DiaChi: string = "",
        public TenQuocGia: string = null
        ) { }
}