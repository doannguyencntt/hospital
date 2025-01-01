export class ChiSoXetNghiem {
    constructor(
        public Id: number = 0,
        public IdCap: string = null,
        public Ma: string = null,
        public Ten: string = null,
        public TenCha: string = null,
        public DichVuXetNghiemChaId: number = null,
        public DichVuXetNghiemId: number = null,
        public NhomDichVuBenhVienId: number = null,
        public CapDichVu: number = 0,
        public MoTa: string = null,
        public SearchString: string = null,
        public SearchTermString: string = null,
        public Loai: number = 0,
        public CoChiSoXetNghiem: boolean = null,

    ) {
    }
}
export class KetNoiChiSoXetNghiem {
    constructor(
        public Id: number = 0,
        public TenKetNoi: string = null,
        public MaChiSo: string = null,
        public MauMayXetNghiemId: number = null,
        public TenMauMayXetNghiem: string = null,
        public NotSendOrder: boolean = null,
    ) {
    }
}
export class ChiSoXetNghiemChiTiet {
    constructor(
        public Id: number = 0,
        public NhomDichVuBenhVienId: number = 0,
        public TenCha: string = null,
        public Ten: string = null,
        public Ma: string = null,
        public MaLIS: string = null,
        public DichVuKyThuatBenhVienId: number = 0,
        public TenDichVuKyThuat: string = null,
        public SoThuTu: number = null,
        public DonVi: string = null,
        public ChiSoCha: string = null,
        public TenChiSo: string = null,
        public NamMin: string = null,
        public NamMax: string = null,
        public NuMin: string = null,
        public NuMax: string = null,
        public TreEmMin: string = null,
        public TreEmMax: string = null,
        public KieuDuLieu: string = null,
        public TreEm6Min: string = null,
        public TreEm6Max: string = null,
        public TreEm612Min: string = null,
        public TreEm612Max: string = null,
        public TreEm1218Min: string = null,
        public TreEm1218Max: string = null,
        public NguyHiemMax: string = null,
        public NguyHiemMin: string = null,
        public CoChiSoXetNghiem: boolean = null,
        public CapDichVu: number = 0,
        public HasChildren: boolean = null,
        public DichVuXetNghiemChaId: number = null,
        public HieuLuc: boolean = null,
        public DichVuXetNghiemId: number = null,
        public IsCreateChild: boolean = false,
        public IsDelete: boolean = false,
        public MaKetNoi: string = null,
        public TenKetNoi: string = null,
        public TiLe: number = null,
        public LoaiMauXetNghiem: number = null,
        public TenLoaiMauXetNghiem: string = null,
        public KetNoiChiSoXetNghiems: KetNoiChiSoXetNghiem[] = []
    ) {
    }
}

export class ChuaCoDichVuXetNghiemViewModel {
    constructor(
        public DichVuKyThuatBenhVienId: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public TenCha: string = null,
        public TenDichVuKyThuat: string = null,
        public CapDichVu: number = null,
        public NhomDichVuBenhVienId: number = null,
        public LoaiMauXetNghiem: number = null,
    ) {
    }
}