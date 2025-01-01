import { DateTime } from 'luxon';
import { DichVuKhamBenh } from '../../bao-hiem-y-te/dich-vu-kham-benh/dich-vu-kham-benh.model';

export class DichVuKhamBenhBenhVien {
    constructor(
        public DichVuKhamBenhId: number = null,

        public DichVuKhamBenhModelText: string = null,
        public Ma: string = null,
        public Ten: string = null,

        public KhoaId: number = null,
        public KhoaModelText: string = null,
        public KhoaPhongIds: number[] = [],
        public NoiThucHienIds: string[] = [],
        public NgayBatDau: Date = new Date(),
        public Gia: number = null,
        public TuNgay: number = null,
        public DenNgay: Date = null,
        public MoTa: string = null,
        public HieuLuc: boolean = false,
        public AnhXa: boolean = null,
        public DichVuKhamBenh: DichVuKhamBenh = null,
        public DichVuKhamBenhBenhVienGiaBaoHiems: DichVuKhamBenhBenhVienGiaBaoHiems[] = [],
        public DichVuKhamBenhBenhVienGiaBenhViens: DichVuKhamBenhBenhVienGiaBenhViens[] = [],
    ) {
    }
}
export class DichVuKhamBenhBenhVienGiaBaoHiems {
    constructor(
        public DichVuKhamBenhBenhVienId: number = 0,
        public Gia: number = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public TiLeBaoHiemThanhToan: number = null,
        public DenNgayRequired: boolean = false

    ) {
    }
}
export class DichVuKhamBenhBenhVienGiaBenhViens {
    constructor(
        public NhomGiaDichVuKhamBenhBenhVienId: number = null,
        public NhomGiaDichVuKhamBenhBenhVienText: string = null,
        public DichVuKhamBenhBenhVienId: number = 0,
        public Gia: number = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public DenNgayRequired: boolean = false
    ) {
    }
}


export class DichVuKhamBenhSreach {
    constructor(
        public SearchString: string = null,
        public AnhXa: boolean = null,
        public HieuLuc: boolean = null,
    ) {
    }
}
