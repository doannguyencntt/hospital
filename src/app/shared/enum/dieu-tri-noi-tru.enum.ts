//#region Phiếu sàng lọc dinh dưỡng
export enum GiamCan {
    Khong = 0,
    KhongRo = 1            
}

export enum SoKgGiam {
    MotDenNamKg = 0,
    SauDenMuoiKg = 1,
    MuoiMotDenMuoiLamKg = 2,
    MuoiLamKgTroLen = 3,
    KhongRoSoKgGiam = 4
}

export enum AnUongKem {
    Khong = 0,
    Co = 1
}

export enum TinhTrangBenhLyNang {
    Khong = 0,
    PhauThuatDacBiet = 1,
    GhepTangViemPhucMac = 2,
    PhuBangBungViemTuyCap = 3,
    GiamAn = 4
}

export enum KeHoachDinhDuong {
    DuongMieng = 0,
    QuaOngThong = 1,
    QuaTinhMach = 2
}

export enum TocDoTangCan {
    TheoKhuyenNghi = 0,
    TrenDuoiMucKhuyenNghi = 1
}

export enum BenhKemTheo {
    Khong = 0,
    TangHuyetAp = 1
}
//#endregion

export enum LoaiBenhAn {
    NoiKhoa = 1,
    NhiKhoa = 2,
    PhuKhoa = 3,
    SanKhoaMo = 4,
    SanKhoaThuong = 5,
    NgoaiKhoa = 6,
    ThamMy = 7,
    TreSoSinh = 8
}