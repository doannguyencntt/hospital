export class ListTabCongNoBenhNhan {
    constructor(
        public tabConNoSelected: boolean = true,
        public tabHetNoSelected: boolean = false
    ) { }
}

export class ListTabLichSuThuCongNoBenhNhan {
    constructor(
        public tabChuaThuSelected: boolean = true,
        public tabDaThuSelected: boolean = false
    ) { }
}

export class CongNoBenhNhanSearch {
    constructor(
        public searchString: string = '',
        public listTabCongNoBenhNhan: ListTabCongNoBenhNhan = new ListTabCongNoBenhNhan()
    ) {}
}

export class CongNoBenhNhanThongTinHanhChinh {
    constructor(
        public Id: number = 0,
        public MaBenhNhan: string = null,
        public HoTen: string = null,
        public GioiTinh: any = null,
        public GioiTinhDisplay: string = null,
        public NamSinh: number = null,
        public SoDienThoai: string = null,
        public DiaChi: string = null,
        public ConNo: boolean = false
    ) {}
}

export class ThongTinTraNo {
    constructor(
        public Id: number = 0,
        public TenBenhNhan: string = null,
        public SoTienChuaThu: number = 0
    ) { }
}

export class TraNo {
    constructor(
        public Id: number = 0,
        public TienMat: number = 0,
        public ChuyenKhoan: number = 0,
        public POS: number = 0,
        public NgayThu: Date = null,
        public NoiDungThu: string = null,

        public TienBenhNhanDua: number = 0,
        public TienTraLaiBenhNhan: number = 0
    ) { }
}

export class LoaiThanhToanTraNo {
    TienMat = 1;
    TienMatDisplay = 'Tiền mặt';
    ChuyenKhoan = 2;
    ChuyenKhoanDisplay = 'Chuyển khoản';
    POS = 3
    POSDisplay = 'POS';
}