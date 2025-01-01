export class DuyetTraVatTuTuBn {
    constructor(
        public SoPhieu: string = null,
        public KhoaHoanTraId: number = null,
        public KhoaHoanTraDisplay: string = null,
        public HoanTraVeKhoId: number = null,
        public HoanTraVeKhoDisplay: string = null,
        public NguoiYeuCauDisplay: string = null,
        public NguoiYeuCauId: number = null,
        public NguoiDuyetId: number = null,
        public NguoiDuyetDisplay: string = null,
        public Id: number = null,
        public NgayYeuCau: any = null,
        public NgayYeuCauDisplay: string = null,
        public NgayDuyet: any = null,
        public NgayDuyetDisplay: string = null,
        public GhiChu: string = null,
        public TinhTrang: boolean = null,
        public TinhTrangDisplay: string = null
    ) { }
}

export class DuyetTraVatTuTuBnTheoVatTu {
    constructor(
        public Nhom: string = null,
        public VatTu: string = null,
        public Dvt: string = null,
        public TongSlChiDinh: number = null,
        public TongSlDaTra: number = null,
        public TongSlTraLanNay: number = null,
        public Id: number = null
    ) { }
}

export class DuyetTraVatTuTuBnTheoVatTuVsYctn {
    constructor(
        public NgayDieuTri: string = null,
        public NgayTra: string = null,
        public BenhNhan: string = null,
        public NguoiTra: string = null,
        public SlChiDinh: number = null,
        public SlDaTra: number = null,
        public SlTraLanNay: number = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public Id: number = null
    ) { }
}

export class Search {
    constructor(
        public DangChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        public SearchString: string = null,
        // tslint:disable-next-line: no-use-before-declare
        public RangeYeuCau: RangeDate = new RangeDate(),
        // tslint:disable-next-line: no-use-before-declare
        public RangeDuyet: RangeDate = new RangeDate()
    ) { }
}

export class RangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ) { }
}
