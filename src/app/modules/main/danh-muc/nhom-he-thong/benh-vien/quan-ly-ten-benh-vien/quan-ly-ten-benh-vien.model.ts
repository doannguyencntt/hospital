export interface QuanLyTenBenhVien {
    Ma : string;
    Ten : string;
    TenVietTat : string;
    DiaChi : string;
    HieuLuc : boolean;
    LoaiBenhVienId : number;
    DonViHanhChinhId : number;
    HangBenhVien : number;
    HangBenhVienDisplay : string;
    TuyenChuyenMonKyThuat : number;
    TuyenChuyenMonKyThuatDisplay : string;
    SoDienThoaiLanhDao : string;
    TenLoaiBenhVien : string;
    TenCapQuanLyBenhVien : string;
    TenDonViHanhChinh : string;
}
export interface PrintSession
{
    PrintContent : HTMLElement;
}