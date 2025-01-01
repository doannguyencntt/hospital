import { NhanVien } from '../../../nhom-nhan-vien/quan-ly-tai-khoan/quan-ly-tai-khoan.model';

export interface KhoDuocPham {
    Ten : string;
    LoaiKho : number;
    TextLoaiKho : string;
    NhanVienIds: number[];
    // NhanVienId: number;
    // NhanVien: string;
    KhoaPhongId: number;
    KhoaPhong: string;
    PhongBenhVienId: number;
    PhongBenhVien: string;
    KhoId: number;
    IsDefault: boolean;
    LoaiDuocPham: boolean;
    LoaiVatTu: boolean;

}
