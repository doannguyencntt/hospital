export class VatTuYTeTaiBenhVien {
    constructor(
        public Id: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public NhomVatTuId: number = null,
        public TenNhomVatTu: string = null,
        public DonViTinh: string = null,
        public QuyCach: string = null,
        public NhaSanXuat: string = null,
        public NuocSanXuat: string = null,
        public MoTa: string = null,
        public HieuLuc: boolean = true,
        public IsDisabled: boolean = false,
        public LoaiSuDung: number = null,
        public TenLoaiSuDung: string = null,
        public DieuKienBaoHiemThanhToan: string = null,
        public MaVatTuBenhVien: string = null,
        public TyLeBaoHiemThanhToan: number = null,
        public HeSoDinhMucDonViTinh: number = null,
        
    ) { }

}
export class VatTuBenhVienAdd {
    constructor(
        public isCreate: boolean = null,
        public VatTuBenhVien: VatTuYTeTaiBenhVien[] = [],
    ) {
    }
}
