export class DanhSachKyThuat {
    constructor(
        public Id: number = 0,
        public IdCap: string = null,
        public Ma: string = null,
        public Ten: string = null,
        public TenCha: string = null,
        public DichVuXetNghiemChaId: number = null,
        public DichVuKyThuatId: number = null,
        public NhomDichVuBenhVienId: number = null,
        public DichVuXetNghiemId: number = null,
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
export class DichVuKyThuatChiTiet {
    constructor(
        public Id: number = 0,
        public NhomDichVuBenhVienId: number = 0,
        public TenCha: string = null,
        public Ten: string = null,
        public Ma: string = null,
        public MaLIS: string = null,
        public DichVuKyThuatBenhVienId: number = 0,
        public TenDichVuKyThuat: string = null,
        public TenKetQuaMau: number = null,
        public MaSo: string = null,

        public UserLoginId: string = null,  
        public TenUserLogin: string = null,  
         
        public KetQua: string = null, 
        public KetLuan: string = null, 
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