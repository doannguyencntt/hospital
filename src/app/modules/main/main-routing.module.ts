import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from 'src/app/core/guards/auth-guard.service';

const mainChildRoutes: Routes = [
    {
        path: 'loi-he-thong',
        loadChildren: () => import('./unknown-error/unknown-error.module').then(o => o.UnknownErrorModule)
    },
    {
        path: 'khong-co-quyen',
        loadChildren: () => import('./permission/permission.module').then(o => o.PermissionModule)
    },
    {
        path: 'trang-chu',
        loadChildren: () => import('./trang-chu/trang-chu.module').then(o => o.TrangChuModule)
    },
    {
        path: 'ket-qua-tim-kiem',
        loadChildren: () => import('./ket-qua-tim-kiem/ket-qua-tim-kiem.module').then(o => o.KetQuaTimKiemModule)
    },
    {
        path: 'them-yeu-cau-tiep-nhan',
        loadChildren: () => import('./tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.module').then(o => o.TiepNhanBenhNhanModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-nhan/benh-nhan',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-nhan/benh-nhan/benh-nhan.module').then(o => o.BenhNhanModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom.module')
            .then(o => o.DuocPhamBenhVienPhanNhomModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/hanh-chinh/chuc-vu',
        loadChildren: () => import('./danh-muc/nhom-he-thong/hanh-chinh/chuc-vu/chuc-vu.module').then(o => o.ChucVuModule)
    }, {
        path: 'danh-muc/bao-hiem-y-te',
        loadChildren: () => import('./danh-muc/bao-hiem-y-te/bao-hiem-y-te.module').then(o => o.BaoHiemYTeModule)
    }
    ,
    {
        path: 'danh-muc/nhom-he-thong/hanh-chinh/chuc-danh',
        loadChildren: () => import('./danh-muc/nhom-he-thong/hanh-chinh/chuc-danh/chuc-danh.module').then(o => o.ChucDanhModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/hanh-chinh/nghe-nghiep',
        loadChildren: () => import('./danh-muc/nhom-he-thong/hanh-chinh/nghe-nghiep/nghe-nghiep.module').then(o => o.NgheNghiepModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/hanh-chinh/van-bang-chuyen-mon',
        loadChildren: () => import('./danh-muc/nhom-he-thong/hanh-chinh/van-bang-chuyen-mon/van-bang-chuyen-mon.module').then(o => o.VanBangChuyenMonModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/hanh-chinh/quoc-gia',
        loadChildren: () => import('./danh-muc/nhom-he-thong/hanh-chinh/quoc-gia/quoc-gia.module').then(o => o.QuocGiaModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/cong-ty-bhtn',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/cong-ty-bhtn/cong-ty-bhtn.module').then(o => o.CongTyBhtnModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/cap-quan-ly-benh-vien',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/cap-quan-ly-benh-vien/cap-quan-ly-benh-vien.module')
            .then(o => o.CapQuanLyBenhVienModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/cong-ty-uu-dai',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/cong-ty-uu-dai/cong-ty-uu-dai.module')
            .then(o => o.CongTyUuDaiModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/vat-tu-y-te',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/vat-tu-y-te/vat-tu-y-te.module')
            .then(o => o.VatTuYTeModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/doi-tuong-uu-dai-dich-vu-ky-thuat',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/doi-tuong-uu-dai-dich-vu-ky-thuat/doi-tuong-uu-dai-dich-vu-ky-thuat.module')
            .then(o => o.DoiTuongUuDaiDichVuKyThuatModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/doi-tuong-uu-dai-dich-vu-kham-benh',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/doi-tuong-uu-dai-dich-vu-kham-benh/doi-tuong-uu-dai-dich-vu-kham-benh.module')
            .then(o => o.DoiTuongUuDaiDichVuKhamBenhModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru.module')
            .then(o => o.LoaiPhongBenhNoiTruModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/loai-benh-vien',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien.module').then(o => o.LoaiBenhVienModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/danh-muc-chuan-doan',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/danh-muc-chuan-doan/danh-muc-chuan-doan.module')
            .then(o => o.DanhMucChuanDoanModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-nhan/quan-he-than-nhan',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-nhan/quan-he-than-nhan/quan-he-than-nhan.module').then(o => o.QuanHeThanNhanModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/ten-benh-vien',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/quan-ly-ten-benh-vien/quan-ly-ten-benh-vien.module').then(o => o.QuanLyTenBenhVienModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien/duoc-pham-benh-vien.module').then(o => o.DuocPhamBenhVienModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam.module').then(o => o.PhuongPhapVoCamModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/icd',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/icd/icd.module').then(o => o.IcdModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/trieu-chung',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung.module').then(o => o.TrieuChungModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-kham-benh',
        loadChildren: () => import('./danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-kham-benh/dich-vu-kham-benh.module').then(o => o.DichVuKhamBenhModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan.module').then(o => o.LyDoTiepNhanModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung.module').then(o => o.NhomDichVuThuongDungModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/chuyen-khoa',
        loadChildren: () => import('./danh-muc/nhom-he-thong/bao-hiem-y-te/khoa/khoa.module').then(o => o.KhoaModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/hanh-chinh/nhom-chuc-danh',
        loadChildren: () => import('./danh-muc/nhom-he-thong/hanh-chinh/nhom-chuc-danh/nhom-chuc-danh.module').then(o => o.NhomChucDanhModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong',
        loadChildren: () => import('./danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.module').then(o => o.DichVuGiuongModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/nhom-dich-vu-ky-thuat',
        loadChildren: () => import('./danh-muc/nhom-he-thong/bao-hiem-y-te/nhom-dich-vu-ky-thuat/nhom-dich-vu-ky-thuat.module').then(o => o.NhomDichVuKyThuatModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/thuoc/mau-va-che-pham',
        loadChildren: () => import('./danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham.module').then(o => o.MauVaChePhamModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/thuoc/duong-dung',
        loadChildren: () => import('./danh-muc/nhom-he-thong/thuoc/duong-dung/duong-dung.module').then(o => o.DuongDungModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/hanh-chinh/dan-toc',
        loadChildren: () => import('./danh-muc/nhom-he-thong/hanh-chinh/dan-toc/dan-toc.module').then(o => o.DanTocModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-benh-vien',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-benh-vien/nhom-dich-vu-benh-vien.module').then(o => o.NhomDichVuBenhVienModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/thuoc/adr-phan-ung-co-hai-cua-thuoc',
        loadChildren: () => import('./danh-muc/nhom-he-thong/thuoc/adr-phan-ung-co-hai-cua-thuoc/adr-phan-ung-co-hai-cua-thuoc.module').then(o => o.AdrPhanUngCoHaiCuaThuocModule)
    },
    {
        path: 'danh-muc/phan-quyen-nguoi-dung',
        loadChildren: () => import('./danh-muc/phan-quyen-nguoi-dung/phan-quyen-nguoi-dung.module').then(o => o.PhanQuyenNguoiDungModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/thuoc/don-vi-tinh',
        loadChildren: () => import('./danh-muc/nhom-he-thong/thuoc/don-vi-tinh/don-vi-tinh.module').then(o => o.DonViTinhModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/thuoc/nha-san-xuat',
        loadChildren: () => import('./danh-muc/nhom-he-thong/thuoc/nha-san-xuat/nha-san-xuat.module').then(o => o.NhaSanXuatModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/thuoc/nhom-thuoc',
        loadChildren: () => import('./danh-muc/nhom-he-thong/thuoc/nhom-thuoc/nhom-thuoc.module').then(o => o.NhomThuocModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham',
        loadChildren: () => import('./nhap-xuat/duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.module').then(o => o.YeuCauTraThuocModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham',
        loadChildren: () => import('./nhap-xuat/duoc-pham/yeu-cau-tra-thuoc-tu-benh-nhan/yeu-cau-tra-thuoc-tu-benh-nhan.module').then(o => o.YeuCauTraThuocTuBenhNhanModule)
    },
    {
        path: 'nhap-xuat/vat-tu/yeu-cau-tra-vat-tu',
        loadChildren: () => import('./nhap-xuat/vat-tu/yeu-cau-tra-vat-tu/yeu-cau-tra-vat-tu.module').then(o => o.YeuCauTraVatTuModule)
    },
    {
        path: 'nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu',
        loadChildren: () => import('./nhap-xuat/vat-tu/yeu-cau-tra-vat-tu-tu-benh-nhan/yeu-cau-tra-vat-tu-tu-benh-nhan.module').then(o => o.YeuCauTraVatTuTuBenhNhanModule)
    },
    //#region Nhom Giuong Benh
    {
        path: 'danh-muc/nhom-giuong-benh/danh-muc-giuong-benh',
        loadChildren: () => import('./danh-muc/nhom-giuong-benh/danh-muc-giuong-benh/danh-muc-giuong-benh.module').then(o => o.DanhMucGiuongBenhModule)
    },
    {
        path: 'danh-muc/nhom-giuong-benh/so-do-giuong-benh',
        loadChildren: () => import('./danh-muc/nhom-giuong-benh/so-do-giuong-benh/so-do-giuong-benh.module').then(o => o.SoDoGiuongBenhModule)
    },
    //#endregion Nhom Giuong Benh

    {
        path: 'bao-cao/nhat-ky-he-thong/lich-su-hoat-dong',
        loadChildren: () => import('./bao-cao/nhat-ky-he-thong/lich-su-hoat-dong/lich-su-hoat-dong.module').then(o => o.LichSuHoatDongModule)
    },
    {
        path: 'bao-cao/nhat-ky-he-thong/lich-su-goi-thong-bao',
        loadChildren: () => import('./bao-cao/nhat-ky-he-thong/lich-su-goi-thong-bao/lich-su-goi-thong-bao.module').then(o => o.LichSuThongBaoModule)
    },
    {
        path: 'bao-cao/nhat-ky-he-thong/lich-su-goi-email',
        loadChildren: () => import('./bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email.module').then(o => o.LichSuEmailModule)
    },
    {
        path: 'bao-cao/nhat-ky-he-thong/lich-su-goi-sms',
        loadChildren: () => import('./bao-cao/nhat-ky-he-thong/lich-su-sms/lich-su-sms.module').then(o => o.LichSuSMSModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-ky-thuat',
        loadChildren: () => import('./danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-ky-thuat/dich-vu-ky-thuat.module').then(o => o.DichVuKyThuatModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/cau-hinh-he-thong/thong-so-mac-dinh',
        loadChildren: () => import('./danh-muc/nhom-he-thong/cau-hinh-he-thong/cau-hinh-he-thong.module').then(o => o.CauHinhHeThongModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/noi-dung-mau/noi-dung-mau-xuat-ra-pdf',
        loadChildren: () => import('./danh-muc/nhom-he-thong/noi-dung-mau/noi-dung-mau-pdf/noi-dung-mau-pdf.module').then(o => o.NoiDungMauPdfModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/noi-dung-mau/noi-dung-mau-email-sms-thong-bao',
        loadChildren: () => import('./danh-muc/nhom-he-thong/noi-dung-mau/noi-dung-mau-email-sms-notify/noi-dung-mau-email-sms-notify.module').then(o => o.NoiDungMauEmailSmsNotifyModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/vat-tu-y-te',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/vat-tu-y-te/vat-tu-y-te.module').then(o => o.VatTuYTeModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/nhom-vat-tu',
        loadChildren: () => import('./danh-muc/nhom-he-thong/bao-hiem-y-te/nhom-vat-tu/nhom-vat-tu.module').then(o => o.NhomVatTuModule)
    },
    {
        path: 'danh-sach-tiep-nhan',
        loadChildren: () => import('./tiep-nhan-benh-nhan/danh-sach-cho-kham/danh-sach-cho-kham.module').then(o => o.DanhSachChoKhamModule)
    },
    {
        path: 'lich-su-tiep-nhan',
        loadChildren: () => import('./tiep-nhan-benh-nhan/lich-su-tiep-nhan/lich-su-tiep-nhan.module').then(o => o.LichSuTiepNhanModule)
    },
    {
        path: 'lich-su-kham-benh',
        loadChildren: () => import('./kham-benh/lich-su-kham-benh/lich-su-kham-benh.module').then(o => o.LichSuKhamBenhModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe',
        loadChildren: () => import('./danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe.module').then(o => o.PhamViHanhNgheModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham',
        loadChildren: () => import('./danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham.module').then(o => o.HocViHocHamModule)
    },
    {
        path: 'ho-so-cua-toi',
        loadChildren: () => import('./danh-muc/nhom-nhan-vien/ho-so-cua-toi/ho-so-cua-toi.module').then(o => o.HoSoCuaToiModule)
    },
    {
        path: 'danh-muc/nhom-nhan-vien/ho-so-nhan-vien',
        loadChildren: () => import('./danh-muc/nhom-nhan-vien/ho-so-nhan-vien/ho-so-nhan-vien.module').then(o => o.HoSoNhanVienModule)
    },
    {
        path: 'danh-muc/nhom-nhan-vien/tai-khoan-nguoi-dung',
        loadChildren: () => import('./danh-muc/nhom-nhan-vien/quan-ly-tai-khoan/quan-ly-tai-khoan.module').then(o => o.QuanLyTaiKhoanModule)
    },
    {
        path: 'danh-muc/nhom-khoa-phong/khoa-phong',
        loadChildren: () => import('./danh-muc/nhom-he-thong/nhom-khoa-phong/khoa-phong/khoa-phong.module').then(o => o.KhoaPhongModule)
    },
    {
        path: 'danh-muc/nhom-khoa-phong/khoa-phong-phong-kham-ngoai-tru',
        loadChildren: () => import('./danh-muc/nhom-he-thong/nhom-khoa-phong/phong-benh-vien/phong-benh-vien.module').then(o => o.PhongBenhVienModule)
    },
    {
        path: 'danh-muc/nhom-khoa-phong/khoa-phong-nhan-vien',
        loadChildren: () => import('./danh-muc/nhom-he-thong/nhom-khoa-phong/khoa-phong-nhan-vien/khoa-phong-nhan-vien.module').then(o => o.KhoaPhongNhanVienModule)
    },
    {
        path: 'danh-muc/lich-phan-cong/ngoai-tru',
        loadChildren: () => import('./danh-muc/lich-phan-cong/lich-phan-cong-ngoai-tru/lich-phan-cong-ngoai-tru.module').then(o => o.LichPhanCongNgoaiTruModule)
    },
    {
        path: 'marketing/dang-ky-goi-marketing',
        loadChildren: () => import('./marketing/dang-ky-goi-marketing/marketing.module').then(o => o.MarketingModule)
    },
    {
        path: 'nhap-xuat/marketing/nhap-kho',
        loadChildren: () => import('./nhap-xuat/marketing/nhap-kho/nhap-kho.module').then(o => o.NhapKhoModule)
    },
    {
        path: 'marketing/nhap-kho-marketing',
        loadChildren: () => import('./marketing/marketing-nhap-kho/marketing-nhap-kho.module').then(o => o.MarketingNhapKhoModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/thuoc/thuoc-hoac-hoat-chat',
        loadChildren: () => import('./danh-muc/nhom-he-thong/thuoc/thuoc-hoac-hoat-chat/thuoc-hoac-hoat-chat.module').then(o => o.ThuocHoacHoatChatModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/nguoi-gioi-thieu',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/nguoi-gioi-thieu/nguoi-gioi-thieu.module').then(o => o.NguoiGioiThieuModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/noi-gioi-thieu',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/noi-gioi-thieu/noi-gioi-thieu.module').then(o => o.NoiGioiThieuModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-benh-vien/dich-vu-giuong-benh-vien.module').then(o => o.DichVuGiuongBenhVienModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/vat-tu-y-te-tai-benh-vien',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/vat-tu-y-te-tai-benh-vien/vat-tu-y-te-tai-benh-vien.module').then(o => o.VatTuYTeTaiBenhVienModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/dich-vu-kham-benh-tai-benh-vien',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/dich-vu-kham-benh-benh-vien/dich-vu-kham-benh-benh-vien.module').then(o => o.DichVuKhamBenhBenhVienModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/chuan-doan',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/chuan-doan/chuan-doan.module').then(o => o.ChuanDoanModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/dich-vu-ky-thuat-benh-vien',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/dich-vu-ky-thuat-benh-vien/dich-vu-ky-thuat-benh-vien.module').then(o => o.DichVuKyThuatBenhVienModule)
    },
    {
        path: 'bao-cao/ton-kho/duoc-pham',
        loadChildren: () => import('./bao-cao/ton-kho/duoc-pham/duoc-pham.module').then(o => o.DuocPhamModule)
    },
    {
        path: 'bao-cao/duoc-pham-sap-het-han',
        loadChildren: () => import('./bao-cao/duoc-pham-sap-het-han/duoc-pham-sap-het-han.module').then(o => o.DuocPhamSapHetHanModule)
    },
    {
        path: 'bao-cao/ton-kho/vat-tu/vat-tu-ton-kho',
        loadChildren: () => import('./bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.module').then(o => o.VatTuTonKhoModule)
    },
    {
        path: 'bao-cao/bao-cao-bac-si-thuc-hien-cls',
        loadChildren: () => import('./bao-cao/thuc-hien-cls/bao-cao-thuc-hien-cls.module').then(o => o.BaoCaoThucHienClsModule)
    },
    {
        path: 'bao-cao/bao-cao-so-thong-ke-cls',
        loadChildren: () => import('./bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.module').then(o => o.BaoCaoClsSoThongKeModule)
    },
    {
        path: 'bao-cao/bao-cao-dich-vu-tia-plasma-ho-tro-vet-thuong',
        loadChildren: () =>
            import('./bao-cao/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.module')
                .then(o => o.BaoCaoDichVuPLASMAHoTroDieuTruVetThuongModule)
    },
    {
        path: 'bao-cao/bao-cao-hoat-dong-cls-theo-khoa',
        loadChildren: () => import('./bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa.module').then(o => o.BaoCaoClsTheoKhoaModule)
    },
    {
        path: 'bao-cao/danh-sach-benh-nhan-phau-thuat',
        loadChildren: () =>
            import('./bao-cao/danh-sach-benh-nhan-phau-thuat/danh-sach-benh-nhan-phau-thuat.module')
                .then(o => o.DanhSachBenhNhanPhauThuatModule)
    },
    {
        path: 'bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han',
        loadChildren: () => import('./bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han.module').then(o => o.VatTuSapHetHanModule)
    },
    {
        path: 'bao-cao/ton-kho/vat-tu/vat-tu-da-het-han',
        loadChildren: () => import('./bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han.module').then(o => o.VatTuDaHetHanModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/kho/nha-thau',
        loadChildren: () => import('./danh-muc/nhom-he-thong/kho/nha-thau/nha-thau.module').then(o => o.NhaThauModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/toa-thuoc-mau',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/toa-thuoc-mau/toa-thuoc-mau.module').then(o => o.ToaThuocMauModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/kho/kho-duoc-pham-vat-tu-y-te',
        loadChildren: () => import('./danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham.module').then(o => o.KhoDuocPhamModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/Kho/vi-tri-kho-duoc-pham-vat-tu-y-te',
        loadChildren: () => import('./danh-muc/nhom-he-thong/Kho/vi-tri-kho-duoc-pham/vi-tri-kho-duoc-pham.module').then(o => o.ViTriKhoDuocPhamModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/kho/dinh-muc-duoc-pham-ton-kho',
        loadChildren: () => import('./danh-muc/nhom-he-thong/kho/dinh-muc-duoc-pham-ton-kho/dinh-muc-duoc-pham-ton-kho.module').then(o => o.DinhMucDuocPhamTonKhoModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/kho/dinh-muc-vat-tu-ton-kho',
        loadChildren: () => import('./danh-muc/nhom-he-thong/kho/dinh-muc-vat-tu-ton-kho/dinh-muc-vat-tu-ton-kho.module')
            .then(o => o.DinhMucVatTuTonKhoModule)
    },
    {
        path: 'danh-muc/hop-dong-thau/duoc-pham',
        loadChildren: () => import('./danh-muc/hop-dong-thau/duoc-pham/hop-dong-thau-duoc-pham.module').then(o => o.HopDongThauDuocPhamModule)
    },
    {
        path: 'danh-muc/hop-dong-thau/vat-tu',
        loadChildren: () => import('./danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu.module').then(o => o.HopDongThauVatTuModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/thuoc/duoc-pham',
        loadChildren: () => import('./danh-muc/nhom-he-thong/thuoc/duoc-pham/duoc-pham.module').then(o => o.DuocPhamModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/xuat-kho',
        loadChildren: () => import('./nhap-xuat/duoc-pham/xuat-kho/xuat-kho.module').then(o => o.XuatKhoModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/xuat-kho-khac',
        loadChildren: () => import('./nhap-xuat/duoc-pham/xuat-kho-khac/xuat-kho-khac.module').then(o => o.XuatKhoKhacModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham',
        loadChildren: () => import('./nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.module').then(o => o.DieuChuyenKhoNoiBoDuocPhamModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/nhap-kho',
        loadChildren: () => import('./nhap-xuat/duoc-pham/nhap-kho/nhap-kho.module').then(o => o.NhapKhoModule)
    },
    {
        path: 'nhap-xuat/vat-tu/nhap-kho',
        loadChildren: () => import('./nhap-xuat/vat-tu/nhap-kho/nhap-kho.module').then(o => o.NhapKhoModule)
    },
    {
        path: 'nhap-xuat/vat-tu/xuat-kho',
        loadChildren: () => import('./nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.module').then(o => o.XuatKhoVatTuModule)
    },
    {
        path: 'nhap-xuat/vat-tu/xuat-kho-khac',
        loadChildren: () => import('./nhap-xuat/vat-tu/xuat-kho-vat-tu-khac/xuat-kho-vat-tu-khac.module').then(o => o.XuatKhoVatTuKhacModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/chi-so-xet-nghiem',
        loadChildren: () => import('./danh-muc/nhom-he-thong/bao-hiem-y-te/chi-so-xet-nghiem/chi-so-xet-nghiem.module').then(o => o.ChiSoXetNghiemModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh',
        loadChildren: () => import('./danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh.module').then(o => o.ChuanDoanHinhAnhModule)
    },
    {
        path: 'kham-benh',
        loadChildren: () => import('./kham-benh/kham-benh.module').then(o => o.KhamBenhModule)
    },
    {
        path: 'phau-thuat-thu-thuat',
        loadChildren: () => import('./phau-thuat-thu-thuat/phau-thuat-thu-thuat.module').then(o => o.PhauThuatThuThuatModule)
    },
    {
        path: 'lich-su-phau-thuat-thu-thuat',
        loadChildren: () => import('./phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat.module').then(o => o.LichSuPhauThuatThuThuatModule)
    },
    {
        path: 'bang-ke-thuoc-vt-pttt',
        loadChildren: () => import('./phau-thuat-thu-thuat/bang-ke-thuoc-va-vat-tu-phau-thuat/bang-ke-thuoc-va-vat-tu-phau-thuat.module').then(o => o.BangKeThuocVatTuPTModule)
    },
    {
        path: 'bao-cao/duoc-pham-da-het-han',
        loadChildren: () => import('./bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han.module').then(o => o.DuocPhamDaHetHanModule)
    },
    {
        path: 'ket-qua-cdha-tdcn',
        loadChildren: () => import('./can-lam-sang/danh-sach-ket-qua-can-lam-sang/can-lam-sang.module').then(o => o.CanLamSangModule)
    },
    {
        path: 'xet-nghiem/ket-qua',
        loadChildren: () => import('./xet-nghiem/xet-nghiem-ket-qua/ket-qua-xet-nghiem/ket-qua-xet-nghiem.module').then(o => o.KetQuaXetNghiemModule)
    },
    {
        path: 'xet-nghiem/ket-qua-new',
        loadChildren: () => import('./xet-nghiem/xet-nghiem-ket-qua-new/xet-nghiem-ket-qua-new.module').then(o => o.XetNghiemKetQuaNEWModule)
    },
    {
        path: 'lich-su-ket-qua-cdha-tdcn',
        loadChildren: () => import('./can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang.module').then(o => o.LichSuCanLamSangModule)
    },
    {
        path: 'xac-nhan-bhyt/ngoai-tru',
        loadChildren: () => import('./thu-chi/xac-nhan-bhyt/xac-nhan-bhyt.module').then(o => o.XacNhanBhytModule)
    },
    {
        path: 'xac-nhan-bhyt-da-hoan-thanh/ngoai-tru',
        loadChildren: () => import('./thu-chi/xac-nhan-bhyt-da-hoan-thanh/xac-nhan-bhyt-da-hoan-thanh.module')
            .then(o => o.XacNhanBhytDaHoanThanhModule)
    },
    {
        path: 'xac-nhan-bhyt/noi-tru',
        loadChildren: () => import('./thu-chi/noi-tru/xac-nhan-bhyt/xac-nhan-bhyt.module').then(o => o.XacNhanBhytNoiTruModule)
    },
    {
        path: 'bao-cao/doanh-thu-nha-thuoc',
        loadChildren: () => import('./bao-cao/doanh-thu-nha-thuoc/doanh-thu-nha-thuoc.module').then(o => o.DoanhThuNhaThuocModule)
    },
    {
        path: 'bao-cao/bao-cao-hoat-dong-khoa-kham-benh',
        loadChildren: () => import('./bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh.module').then(o => o.BaoCaoHoatDongKhoaKhamBenhModule)
    },
    {
        path: 'marketing/goi-dv',
        loadChildren: () => import('./marketing/goi-dich-vu/goi-dv.module')
            .then(o => o.GoiDvModule)
    },
    {
        path: 'marketing/ct-marketing/goi-dv',
        loadChildren: () => import('./marketing/chuong-trinh-marketing/theo-goi-dich-vu/goi-dv-marketing.module')
            .then(o => o.GoiDvMarketingModule)
    },
    {
        path: 'lich-su-xac-nhan-bhyt/ngoai-tru',
        loadChildren: () => import('./thu-chi/lich-su-xac-nhan-bhyt/lich-su-xac-nhan-bhyt.module').then(o => o.LichSuXacNhanBhytModule)
    },
    {
        path: 'danh-sach-xac-nhan-bhyt-da-hoan-thanh',
        loadChildren: () => import('./thu-chi/ds-xn-bhyt-noi-tru-ngoai-tru/ds-xn-bhyt-noi-tru-ngoai-tru-list.module').then(o => o.XacNhanBHYTNoiTruVaNgoaiTruHoanThanhServiceModule)
    },
    {
        path: 'danh-sach-thu-dich-vu',
        loadChildren: () => import('./thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.module').then(o => o.ChoThuTienModule)
    },
    {
        path: 'danh-sach-thu-tien-noi-tru',
        loadChildren: () => import('./thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module').then(o => o.ChoThuTienNoiTruModule)
    },
    {
        path: 'danh-sach-thu-goi-marketing',
        loadChildren: () => import('./thu-chi/thu-chi-vien-phi/marketing/cho-thu-tien/cho-thu-tien-goi-marketing.module').then(o => o.ChoThuTienGoiMarketingTruModule)
    },
    {
        path: 'thu-ngan/cong-no-benh-nhan',
        loadChildren: () => import('./thu-chi/cong-no-benh-nhan/cong-no-benh-nhan.module').then(o => o.CongNoBenhNhanModule)
    },
    {
        path: 'nha-thuoc',
        loadChildren: () => import('./quay-thuoc/quay-thuoc.module').then(o => o.QuayThuocModule)
    },
    {
        path: 'lich-su-nha-thuoc',
        loadChildren: () => import('./quay-thuoc/lich-su-quay-thuoc/lich-su-quay-thuoc.module').then(o => o.LichSuQuayThuocModule)
    },
    {
        path: 'lich-su-huy-ban-thuoc',
        loadChildren: () => import('./quay-thuoc/danh-sach-lich-su-huy-ban-thuoc/danh-sach-lich-su-huy-ban-thuoc.module').then(o => o.DanhSachHuyBanThuocModule)
    },
    {
        path: 'lich-su-xuat-thuoc',
        loadChildren: () => import('./quay-thuoc/lich-su-xuat-thuoc/lich-su-xuat-thuoc.module').then(o => o.LichSuXuatThuocModule)
    },
    {
        path: 'danh-sach-don-thuoc-cho-cap-thuoc',
        loadChildren: () => import('./quay-thuoc/danh-sach-cap-thuoc-bhyt/cap-thuoc-bhyt/danh-sach-cap-thuoc-bhyt.module').then(o => o.DanhSachCapThuocBHYTModule)
    },    
    {
        path: 'lich-su-xuat-thuoc-cap-phat',
        loadChildren: () => import('./quay-thuoc/danh-sach-cap-thuoc-bhyt/lich-su-cap-thuoc-bhyt/lich-su-cap-thuoc-bhyt.module').then(o => o.LichSuCapThuocBHYTModule)
    },
    {
        path: 'danh-sach-goi',
        loadChildren: () => import('./bao-hiem-y-te/danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te.module').then(o => o.DsBaoHiemYTeModule)
    },
    {
        path: 'danh-sach-xuat-excel-chung-tu',
        loadChildren: () => import('./bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.module').then(o => o.DanhSachXuatChungTuExcelModule)
    },
    {
        path: 'ke-toan/duyet-nhap-kho',
        loadChildren: () => import('./ke-toan/duyet-nhap-kho/duyet-nhap-kho.module').then(o => o.DuyetNhapKhoModule)
    },
    {
        path: 'ke-toan/duyet-dieu-chuyen-duoc-pham',
        loadChildren: () => import('./ke-toan/duyet-dieu-chuyen-duoc-pham/duyet-dieu-chuyen-duoc-pham.module').then(o => o.DuyetDieuChuyenDuocPhamModule)
    },
    {
        path: 'ke-toan/duyet-nhap-kho-vat-tu',
        loadChildren: () => import('./ke-toan/duyet-nhap-kho-vat-tu/duyet-nhap-kho.module').then(o => o.DuyetVatTuNhapKhoModule)
    },
    {
        path: "lich-su-bao-hiem-y-te",
        loadChildren: () => import("./bao-hiem-y-te/lich-su-bao-hiem-y-te/lich-su-bao-hiem-y-te.module").then((o) => o.LichSuBaoHiemYTeModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/loi-dan',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan.module').then(o => o.LoiDanModule)
    },
    {
        path: 'bao-cao/bao-cao-tong-hop-doanh-thu-theo-khoa-phong',
        loadChildren: () => import('./bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong.module').then(o => o.BaoCaoTongHopDoanhThuTheoKhoaPhongModule)
    }, {
        path: 'bao-cao/bao-cao-tong-hop-doanh-thu-theo-bac-si',
        loadChildren: () => import('./bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-bac-si/bao-cao-tong-hop-doanh-thu-theo-bac-si.module').then(o => o.BaoCaoTongHopDoanhThuTheoBacSiModule)
    },
    {
        path: 'bao-cao/bao-cao-chi-tiet-doanh-thu-theo-bac-si',
        loadChildren: () => import('./bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-doanh-thu-theo-bac-si/bao-cao-chi-tiet-doanh-thu-theo-bac-si.module').then(o => o.BaoCaoChiTietDoanhThuTheoBacSiModule)
    },
    {
        path: 'bao-cao/bao-cao-chi-tiet-tien-vien-phi-benh-nhan',
        loadChildren: () => import('./bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-thu-tien-vien-phi.module').then(o => o.BaoCaoThuTienVienPhiBNModule)
    },
    {
        path: 'bao-cao/bao-cao-thu-tien-vien-phi',
        loadChildren: () => import('./bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.module').then(o => o.BaoCaoThuTienVienPhiModule)
    },
    {
        path: 'bao-cao/bao-cao-doanh-thu-dich-vu-theo-nhom-benh-vien',
        loadChildren: () => import('./bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.module').then(o => o.BaoCaoDoanhThuDichVuTheoNhomBenhVienModule)
    },
    {
        path: 'bao-cao/bao-cao-luu-tru-benh-an',
        loadChildren: () => import('./bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an.module').then(o => o.BaoCaoLuuTruBenhAnModule)
    },
    {
        path: 'bao-cao/bao-cao-bs-ds-kham-ngoai-tru',
        loadChildren: () => import('./bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.module').then(o => o.BaoCaoBenhNhanKhamNgoaiTruModule)
    },
    {
        path: 'bao-cao/bao-cao-xuat-nhap-ton',
        loadChildren: () => import('./bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton.module').then(o => o.BaoCaoXuatNhapTonModule)
    },
    {
        path: 'bao-cao/bao-cao-xuat-nhap-ton-vt',
        loadChildren: () => import('./bao-cao/bao-cao-xuat-nhap-ton-vt/bao-cao-xuat-nhap-ton-vt.module').then(o => o.BaoCaoXuatNhapTonVtModule)
    },
    {
        path: 'bao-cao/bao-cao-the-kho-vt',
        loadChildren: () => import('./bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te.module').then(o => o.BaoCaoTheKhoModule)
    },
    {
        path: 'bao-cao/bao-cao-ton-kho-vt',
        loadChildren: () => import('./bao-cao/bao-cao-ton-kho-vat-tu-y-te/bao-cao-ton-kho-vat-tu-y-te.module').then(o => o.BaoCaoTonKhoModule)
    },
    {
        path: 'bao-cao/bao-cao-tiep-nhan-benh-nhan-kham',
        loadChildren: () => import('./bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham.module').then(o => o.BaoCaoTiepNhanBenhNhanKhamModule)
    },
    {
        path: 'bao-cao/bao-cao-bang-ke-chi-tiet-ttcn',
        loadChildren: () => import('./bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn.module').then(o => o.BaoCaoBangKeChiTietTtcnModule)
    },
    {
        path: 'bao-cao/bao-cao-the-kho',
        loadChildren: () => import('./bao-cao/bao-cao-the-kho/bao-cao-the-kho.module').then(o => o.BaoCaoTheKhoModule)
    },
    {
        path: 'bao-cao/bao-cao-benh-nhan-kham-suc-khoe-doan',
        loadChildren: () => import('./bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan.module').then(o => o.BaoCaoDichVuHopDongKhamDoanModule)
    },
    {
        path: 'bao-cao/bao-cao-dich-vu-ngoai-hop-dong',
        loadChildren: () => import('./bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan.module').then(o => o.BaoCaoDichVuNgoaiHopDongKhamDoanModule)
    },
    {
        path: 'bao-cao/bao-cao-hoat-dong-kham-doan',
        loadChildren: () => import('./bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan.module').then(o => o.BaoCaoHoatDongKhamDoanModule)
    },
    {
        path: 'bao-cao/bao-cao-ksk-chuyen-khoa',
        loadChildren: () => import('./bao-cao/bao-cao-ksk-chuyen-khoa/bao-cao-ksk-chuyen-khoa.module').then(o => o.BaoCaoKskChuyenKhoaModule)
    },
    {
        path: 'bao-cao/bao-cao-ket-qua-kham-chua-benh',
        loadChildren: () => import('./bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.module').then(o => o.BaoCaoKetQuaKhamChuaBenhModule)
    },
    {
        path: 'bao-cao/bao-cao-vien-phi-thu-tien',
        loadChildren: () => import('./bao-cao/bao-cao-vien-phi-thu-tien/bao-cao-vien-phi-thu-tien.module').then(o => o.BaoCaoVienPhiThuTienModule)
    },
    {
        path: 'bao-cao/bao-cao-don-thuoc-thong-ke',
        loadChildren: () => import('./bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke.module').then(o => o.BaoCaoDonThuocThongKeModule)
    },
    {
        path: 'bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay',
        loadChildren: () => import('./bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-bc-luu-ket-qua-xet-nghiem-hang-ngay.module').then(o => o.BcBcLuuKetQuaXetNghiemHangNgayModule)
    },
    {
        path: 'bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat',
        loadChildren: () => import('./bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat.module').then(o => o.BaoCaoSoPhucTrinhPhauThuatThuThuatModule)
    },
    {
        path: 'bao-cao/bao-cao-benh-nhan-kham-ngoai-tru',
        loadChildren: () => import('./bao-cao/bao-cao-benh-nhan-kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.module').then(o => o.BaoCaoBenhNhanKhamNgoaiTruModule)
    },
    {
        path: 'bao-cao/bao-cao-tiep-nhan-benh-pham',
        loadChildren: () => import('./bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham.module').then(o => o.BaoCaoTiepNhanBenhPhamModule)
    },
    {
        path: 'bao-cao/bao-cao-bang-ke-phieu-xuat-kho',
        loadChildren: () => import('./bao-cao/bao-cao-bang-ke-phieu-xuat-kho/bao-cao-bang-ke-phieu-xuat-kho.module').then(o => o.BaoCaoBangKePhieuXuatKhoModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/yeu-cau-linh-thuoc',
        loadChildren: () => import('./nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.module').then(o => o.YeuCauLinhThuocModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc',
        loadChildren: () => import('./nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.module').then(o => o.DuyetYeuCauLinhThuocModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham',
        loadChildren: () => import('./nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module').then(o => o.DuyetHoanTraDuocPhamModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra',
        loadChildren: () => import('./nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn.module')
            .then(o => o.DuyetTraThuocTuBnModule)
    },
    {
        path: 'nhap-xuat/vat-tu/hoan-tra/tu-benh-nhan/duyet-hoan-tra',
        loadChildren: () => import('./nhap-xuat/vat-tu/duyet-tra-tu-bn/duyet-tra-tu-bn.module')
            .then(o => o.DuyetTraVatTuTuBnModule)
    },
    {
        path: 'nhap-xuat/vat-tu/yeu-cau-linh-vat-tu',
        loadChildren: () => import('./nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.module').then(o => o.YeuCauLinhVatTuModule)
    },
    {
        path: 'nhap-xuat/vat-tu/duyet-yeu-cau-linh-vat-tu',
        loadChildren: () => import('./nhap-xuat/vat-tu/duyet-yeu-cau-linh-vat-tu/duyet-yeu-cau-linh-vat-tu.module').then(o => o.DuyetYeuCauLinhVatTuModule)
    },
    {
        path: 'nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu',
        loadChildren: () => import('./nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu.module').then(o => o.DuyetHoanTraVatTuModule)
    },
    {
        path: 'nhap-xuat/vat-tu/vat-tu-can-bu',
        loadChildren: () => import('./nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-vat-tu-can-bu/danh-sach-vat-tu-can-bu.module').then(o => o.DanhSachVatTuCanBuModule)
    },
    {
        path: 'nhap-xuat/vat-tu/vat-tu-can-linh-truc-tiep',
        loadChildren: () => import('./nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/danh-sach-vat-tu-can-linh-truc-tiep/danh-sach-vat-tu-can-linh-truc-tiep.module').then(o => o.DanhSachVatTuCanLinhTrucTiepModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/duoc-pham-can-bu',
        loadChildren: () => import('./nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-duoc-pham-can-bu/danh-sach-duoc-pham-can-bu.module').then(o => o.DanhSachDuocPhamCanBuModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/duoc-pham-can-linh-truc-tiep',
        loadChildren: () => import('./nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/danh-sach-duoc-pham-can-linh-truc-tiep/danh-sach-duoc-pham-can-linh-truc-tiep.module').then(o => o.DanhSachDuocPhamCanLinhTrucTiepModule)
    },
    {
        path: 'kham-benh-dang-kham',
        loadChildren: () => import('./kham-benh/kham-benh-dang-kham/kham-benh-dang-kham.module').then(o => o.KhamBenhDangKhamModule)
    },
    {
        path: 'marketing/qua-tang',
        loadChildren: () => import('./marketing/qua-tang/qua-tang.module').then(o => o.QuaTangModule)
    },
    {
        path: 'marketing/xuat-kho',
        loadChildren: () => import('./marketing/xuat-kho/marketing-xuat-kho.module').then(o => o.MarketingXuatKhoModule)
    },
    {
        path: 'marketing/ct-marketing/voucher',
        loadChildren: () => import('./marketing/chuong-trinh-marketing/theo-voucher/voucher.module').then(o => o.VoucherModule)
    },
    {
        path: 'ke-toan/cong-no-bhtn',
        loadChildren: () => import('./ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.module').then(o => o.CongNoBaoHiemTuNhanModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham',
        loadChildren: () => import('./nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.module').then(o => o.YeuCauMuaThuocModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa',
        loadChildren: () => import('./nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.module').then(o => o.TongHopDuTruMuaThuocTaiKhoaModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/ky-du-tru',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/ky-du-tru/ky-du-tru.module').then(o => o.KyDuTruModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-giam-doc',
        loadChildren: () => import('./nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-giam-doc/du-tru-giam-doc.module')
            .then(o => o.TongHopDuTruMuaThuocTaiGiamDocModule)
    },
    {
        path: 'nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa-duoc',
        loadChildren: () => import('./nhap-xuat/vat-tu/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc.module')
            .then(o => o.TongHopDuTruMuaTaiKhoaDuocModule)
    },
    {
        path: 'xet-nghiem/thiet-bi',
        loadChildren: () => import('./xet-nghiem/thiet-bi/thiet-bi.module').then(o => o.ThietBiXetNghiemModule)
    },
    {
        path: 'xet-nghiem/duyet-ket-qua',
        loadChildren: () => import('./xet-nghiem/duyet-ket-qua/duyet-ket-qua.module').then(o => o.DuyetKetQuaXetNghiemModule)
    },
    {
        path: 'xet-nghiem/duyet-ket-qua-new',
        loadChildren: () => import('./xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.module').then(o => o.DuyetKetQuaNewModule)
    },
    {
        path: 'nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-giam-doc',
        loadChildren: () => import('./nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-giam-doc/du-tru-giam-doc.module')
            .then(o => o.TongHopDuTruMuaVatTuTaiGiamDocModule)
    },
    {
        path: 'nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa',
        loadChildren: () => import('./nhap-xuat/vat-tu/tong-hop-du-tru-mua-vat-tu-tai-khoa/tong-hop-du-tru-mua-vat-tu-tai-khoa.module')
            .then(o => o.TongHopDuTruMuaVatTuTaiKhoaModule)
    },
    {
        path: 'bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan',
        loadChildren: () => import('./bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan.module').then(o => o.BaoCaoCongNoBaoHiemTuNhanModule)
    },
    {
        path: 'nhap-xuat/vat-tu/yeu-cau-mua-vat-tu',
        loadChildren: () => import('./nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.module').then(o => o.YeuCauMuaVatTuModule)
    },
    {
        path: 'nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc',
        loadChildren: () => import('./nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.module').then(o => o.TongHopDuTruMuaTaiKhoaDuocModule)
    },
    {
        path: 'xet-nghiem/lay-mau',
        loadChildren: () => import('./xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.module').then(o => o.LayMauXetNghiemModule)
    },
    {
        path: 'xet-nghiem/xac-nhan-cap-code',
        loadChildren: () => import('./xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.module').then(o => o.XetNghiemCapCodeModule)
    },
    {
        path: 'xet-nghiem/xac-nhan-nhan-mau',
        loadChildren: () => import('./xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau.module').then(o => o.XetNghiemNhanMauModule)
    },
    {
        path: 'xet-nghiem/chi-so-xet-nghiem',
        loadChildren: () => import('./xet-nghiem/chi-so-xet-nghiem/chi-so-xet-nghiem.module').then(o => o.ChiSoXetNghiemModule)
    },
    {
        path: 'xet-nghiem/goi-mau',
        loadChildren: () => import('./xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.module').then(o => o.GoiMauXetNghiemModule)
    },
    {
        path: 'xet-nghiem/nhan-mau',
        loadChildren: () => import('./xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem.module').then(o => o.NhanMauXetNghiemModule)
    },
    {
        path: 'xet-nghiem/duyet-yeu-cau-chay-lai',
        loadChildren: () => import('./xet-nghiem/duyet-yeu-cau-chay-lai/duyet-yeu-cau-chay-lai.module').then(o => o.DuyetYeuCauChayLaiModule)
    },


    //#region điều trị nội trú
    {
        path: 'dieu-tri-noi-tru',
        loadChildren: () => import('./dieu-tri-noi-tru/dieu-tri-noi-tru.module').then(o => o.DieuTriNoiTruModule)
    },
    {
        path: 'tao-benh-an-so-sinh',
        loadChildren: () => import('./dieu-tri-noi-tru/tao-benh-an-so-sinh/tao-benh-an-so-sinh.module').then(o => o.TaoBenhAnSoSinhModule)
    },
    //#endregion điều trị nội trú
    {
        path: 'noi-tru/tiep-nhan',
        loadChildren: () => import('./dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.module').then(o => o.TiepNhanNoiTruModule)
    },
    {
        path: 'luu-tru-benh-an',
        loadChildren: () => import('./dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so.module').then(o => o.LuuTruHoSoModule)
    },
    {
        path: 'noi-tru/tong-hop-y-lenh',
        loadChildren: () => import('./dieu-tri-noi-tru/tong-hop-y-lenh/tong-hop-y-lenh.module').then(o => o.TongHopYLenhModule)
    },
    {
        path: 'nhap-xuat/ksnk/nhap-kho',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/nhap-kho-ksnk/nhap-kho-ksnk.module').then(o => o.NhapKhoKSNKModule)
    },
    {
        path: 'nhap-xuat/ksnk/xuat-kho',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.module').then(o => o.XuatKhoKSNKModule)
    },
    {
        path: 'nhap-xuat/ksnk/xuat-kho-khac',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-khac-ksnk/xuat-kho-khac-ksnk.module').then(o => o.XuatKhoKhacKSNKModule)
    },
    // kết quả cls
    {
        path: 'nhap-xuat/mau/nhap-kho',
        loadChildren: () => import('./nhap-xuat/mau/mau.module').then(o => o.MauModule)
    },
    {
        path: 'ke-toan/nhap-gia-mau',
        loadChildren: () => import('./ke-toan/nhap-gia-mau/nhap-gia-mau.module').then(o => o.NhapGiaMauModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/benh-vien/che-do-an',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/che-do-an/che-do-an.module').then(o => o.CheDoAnModule)
    },
    {
        path: 'tu-dien-dich-vu-ky-thuat',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/tu-dien-dich-vu-ky-thuat/tu-dien-dich-vu-ky-thuat.module')
            .then(o => o.TuDienDichVuKyThuatModule)
    },
    // khám đoàn
    {
        path: 'kham-doan/cong-ty',
        loadChildren: () => import('./kham-doan/kham-doan-cong-ty/kham-doan-cong-ty.module').then(o => o.KhamDoanCongTyModule)
    },
    {
        path: 'kham-doan/do-chi-so-sinh-ton',
        loadChildren:
            () => import('./kham-doan/kham-doan-chi-so-sinh-ton/kham-doan-chi-so-sinh-ton.module').then(o => o.KhamDoanChiSoSinhTonModule)
    },
    {
        path: 'kham-doan/goi-kham',
        loadChildren: () => import('./kham-doan/kham-doan-goi-chung-suc-khoe/kham-doan-goi-kham-chung-suc-khoe.module').then(o => o.KhamDoanGoiKhamChungSucKhoeModule)
    },
    {
        path: 'kham-doan/hop-dong-kham',
        loadChildren: () => import('./kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.module').then(o => o.KhamDoanHopDongKhamModule)
    },
    {
        path: 'kham-doan/nhan-su-kham',
        loadChildren: () => import('./kham-doan/kham-doan-nhan-su-kham-suc-khoe/kham-doan-nhan-su-kham-suc-khoe.module').then(o => o.KhamDoanNhanSuKhamSucKhoeModule)
    },
    {
        path: 'kham-doan/khth-duyet',
        loadChildren: () => import('./kham-doan/kham-doan-khth-duyet/kham-doan-khth-duyet.module').then(o => o.KhamDoanKhthDuyetModule)
    },
    {
        path: 'kham-doan/nhan-su-duyet',
        loadChildren: () => import('./kham-doan/kham-doan-nhan-su-duyet/kham-doan-nhan-su-duyet.module').then(o => o.KhamDoanNhanSuDuyetModule)
    },
    {
        path: 'kham-doan/giam-doc-duyet',
        loadChildren: () => import('./kham-doan/kham-doan-giam-doc-duyet/kham-doan-giam-doc-duyet.module').then(o => o.KhamDoanGiamDocDuyetModule)
    },
    {
        path: 'kham-doan/tiep-nhan',
        loadChildren: () => import('./kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.module').then(o => o.KhamDoanTiepNhanModule)
    },
    {
        path: 'kham-doan/ket-luan-kham-suc-khoe-doan',
        loadChildren: () => import('./kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.module').then(o => o.KhamDoanKetLuanModule)
    },
    {
        path: 'kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe',
        loadChildren: () => import('./kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe.module').then(o => o.KhamDoanLsTiepNhanKhamSucKhoeModule)
    },
    {
        path: 'kham-doan/kham-doan-ket-luan-cls-ksk',
        loadChildren: () => import('./kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk.module').then(o => o.KhamDoanKetLuanClsKskModule)
    },
    {
        path: 'kham-doan/kham-doan-tat-ca-phong',
        loadChildren: () => import('./kham-benh/kham-doan-tat-ca-phong/kham-doan-tat-ca-phong.module').then(o => o.KhamDoanTatCaPhongModule)
    },
    {
        path: 'bao-cao/bao-cao-ton-kho',
        loadChildren: () => import('./bao-cao/bao-cao-ton-kho/bao-cao-ton-kho.module').then(o => o.BaoCaoTonKhoModule)
    },
    {
        path: 'bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv',
        loadChildren: () => import('./bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv/bao-cao-so-xet-nghiem-sang-loc-hiv.module').then(o => o.BaoCaoSoXetNghiemSangLocHivModule)
    },
    {
        path: 'bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem',
        loadChildren: () => import('./bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem/bao-cao-tong-hop-so-luong-xet-nghiem.module').then(o => o.BaoCaoTongHopSoLuongXetNghiemModule)
    },
    {
        path: 'bao-cao/bao-cao-benh-nhan-lam-xet-nghiem',
        loadChildren: () => import('./bao-cao/bao-cao-benh-nhan-lam-xet-nghiem/bao-cao-benh-nhan-lam-xet-nghiem.module').then(o => o.BaoCaoBenhNhanLamXetNghiemModule)
    },
    //Tiêm chủng
    {
        path: 'tiem-chung/kham-sang-loc',
        loadChildren: () => import('./tiem-chung/kham-sang-loc/kham-sang-loc.module').then(o => o.KhamSangLocModule)
    },
    {
        path: 'tiem-chung/thuc-hien-tiem',
        loadChildren: () => import('./tiem-chung/thuc-hien-tiem/thuc-hien-tiem.module').then(o => o.ThucHienTiemModule)
    },
    {
        path: 'tiem-chung/lich-su-tiem',
        loadChildren: () => import('./tiem-chung/lich-su-tiem-chung/lich-su-tiem-chung.module').then(o => o.LichSuTiemChungModule)
    },
    {
        path: 'bao-cao/bao-cao-so-luong-thu-thuat',
        loadChildren: () => import('./bao-cao/bao-cao-thong-ke-so-luong-thu-thuat/bao-cao-thong-ke-so-luong-thu-thuat.module').then(o => o.BaoCaoThongKeSoLuongThuThuatModule)
    },
    {
        path: 'bao-cao/bao-cao-hieu-qua-cong-viec',
        loadChildren: () => import('./bao-cao/bao-cao-hieu-qua-cong-viec/bao-cao-hieu-qua-cong-viec.module').then(o => o.BaoCaoHieuQuaCongViecModule)
    },
    {
        path: 'bao-cao/bao-cao-ton-kho-xn',
        loadChildren: () => import('./bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn.module').then(o => o.BaoCaoTonKhoXnModule)
    },    
    {
        path: 'bao-cao/xuat-nhap-ton-kho-xet-nghiem',
        loadChildren: () => import('./bao-cao/bao-cao-xuat-nhap-ton-kho-xet-nghiem/xuat-nhap-ton-kho-xet-nghiem.module').then(o => o.BaoCaoXuatNhapTonKhoXetNghiemModule)
    },
    {
        path: 'bao-cao/phieu-nhap-hoa-chat-xet-nghiem',
        loadChildren: () => import('./bao-cao/bao-cao-phieu-nhap-hoa-chat-xet-nghiem/phieu-nhap-hoa-chat-xet-nghiem.module').then(o => o.BaoCaoPhieuNhapTonKhoXetNghiemModule)
    },
    {
        path: 'bao-cao/phieu-xuat-hoa-chat-xet-nghiem',
        loadChildren: () => import('./bao-cao/bao-cao-phieu-xuat-hoa-chat-xet-nghiem/phieu-xuat-hoa-chat-xet-nghiem.module').then(o => o.BaoCaoPhieuXuatTonKhoXetNghiemModule)
    },     
    {
        path: 'bao-cao/bao-cao-tinh-hinh-tra-ncc',
        loadChildren: () => import('./bao-cao/bao-cao-tinh-hinh-tra-ncc/bao-cao-tinh-hinh-tra-ncc.module').then(o => o.BaoCaoTinhHinhTraNccModule)
    },
    {
        path: 'bao-cao/thong-ke-thuoc-theo-bac-si',
        loadChildren: () => import('./bao-cao/thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.module').then(o => o.ThongKeThuocTheoBacSiModule)
    },
    {
        path: 'bao-cao/thong-ke-bac-si-ke-don-theo-thuoc',
        loadChildren: () => import('./bao-cao/thong-ke-bac-si-ke-don-theo-thuoc/thong-ke-bac-si-ke-don-theo-thuoc.module').then(o => o.ThongKeBacSiKeDonTheoThuocModule)
    },
    {
        path: 'bao-cao/bao-cao-ton-kho-kt',
        loadChildren: () => import('./bao-cao/bao-cao-ton-kho-kt/bao-cao-ton-kho-kt.module').then(o => o.BaoCaoTonKhoKtModule)
    },
    {
        path: 'bao-cao/bao-cao-bien-ban-kiem-ke-kt',
        loadChildren: () => import('./bao-cao/bao-cao-bien-ban-kiem-ke-kt/bao-cao-bien-ban-kiem-ke-kt.module').then(o => o.BaoCaoBienBanKiemKeKtModule)
    },
    {
        path: 'bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet',
        loadChildren: () => import('./bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet.module').then(o => o.BaoCaoTinhHinhNhapNccChiTietModule)
    },
    {
        path: 'bao-cao/bao-cao-chi-tiet-xuat-noi-bo',
        loadChildren: () => import('./bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo.module').then(o => o.BaoCaoDuocChiTietXuatNoiBoModule)
    },
    {
        path: 'bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien',
        loadChildren: () => import('./bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien.module').then(o => o.BaoCaoChiTietMienPhiTronVienModule)
    },
    {
        path: 'bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc',
        loadChildren: () => import('./bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc.module').then(o => o.BaoCaoTinhHinhNhapTuNccModule)
    },
    {
        path: 'bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh',
        loadChildren: () => import('./bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh.module').then(o => o.BaoCaoTongHopDoanhThuThaiSanDaSinhModule)
    },
    {
        path: 'bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu',
        loadChildren: () => import('./bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu.module').then(o => o.BaoCaoTongHopDangKyGoiDichVuModule)
    },
    {
        path: 'bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa',
        loadChildren: () => import('./bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa.module').then(o => o.BaoCaoSoChiTietVatTuHangHoaModule)
    },
    {
        path: 'bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv',
        loadChildren: () => import('./bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv/bao-cao-doanh-thu-kham-doan-theo-nhom-dv.module').then(o => o.BaoCaoDoanhThuKhamDoanTheoNhomDvModule)
    },
    {
        path: 'bao-cao/bang-ke-xuat-thuoc-theo-benh-nhan',
        loadChildren: () => import('./bao-cao/bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan/bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan.module').then(o => o.BaoCaoBangKeXuatThuocTheoBenhNhanModule)
    },
    {

        path: 'bao-cao/bao-cao-doanh-thu-kham-doan-theo-khoa-phong',
        loadChildren: () => import('./bao-cao/bao-cao-doanh-thu-kham-doan-theo-khoa-phong/bao-cao-doanh-thu-kham-doan-theo-khoa-phong.module').then(o => o.BaoCaoDoanhThuKhamDoanTheoKhoaPhongModule)
    },
    {
        path: 'bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu',
        loadChildren: () => import('./bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.module').then(o => o.BaoCaoChiTietHoaHongCuaNguoiGioiThieuModule)
    },
    {
        path: 'bao-cao/bao-cao-tra-cuu-du-lieu',
        loadChildren: () => import('./bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-tu-lieu.module').then(o => o.BaoCaoTraCuuDuLieuModule)
    },
    {
        path: 'bao-cao/bao-cao-cam-ket-tu-nguyen-su-dung-thuoc-dv-ngoai-bhyt',
        loadChildren: () => import('./bao-cao/bao-cao-cam-ket-su-dung-thuoc-dv-ngoai-bhyt/bao-cao-cam-ket-su-dung-thuoc-dv-ngoai-bhyt.module').then(o => o.BaoCaoCamKetSuDungThuocDvNgoaiBhytModule)
    },
    {
        path: 'bao-cao/bao-cao-hoat-dong-cls',
        loadChildren: () => import('./bao-cao/bao-cao-hoat-dong-cls/bao-cao-hoat-dong-cls.module').then(o => o.BaoCaoHoatDongClsModule)
    },
    {
        path: 'bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh',
        loadChildren: () => import('./bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.module').then(o => o.BaoCaoTinhThoiGianSuDungDvCuaKhModule)
    },
    {
        path: 'bao-cao/bao-cao-thuoc-sap-het-han-dung',
        loadChildren: () => import('./bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung.module').then(o => o.BaoCaoThuocSapHetHanDungModule)
    },
    {
        path: 'bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt',
        loadChildren: () => import('./bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt.module').then(o => o.BaoCaoBangKeGiaoHoaDonSangPktModule)
    },
    {
        path: 'bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo',
        loadChildren: () => import('./bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo.module').then(o => o.BaoCaoDuocTinhHinhXuatNoiBoModule)
    },
    {
        path: 'bao-cao/bao-cao-tong-hop-kq-ksk',
        loadChildren: () => import('./bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk.module').then(o => o.BaoCaoTongHopKqKskModule)
    },
    {
        path: 'bao-cao/bao-cao-nhap-xuat-ton-chi-tiet-kt',
        loadChildren: () => import('./bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet.module').then(o => o.BaoCaoKeToanNhapXuatTonChiTietModule)
    },
    {
        path: 'bao-cao/bao-cao-nhap-xuat-ton-kt',
        loadChildren: () => import('./bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton.module').then(o => o.BaoCaoKeToanNhapXuatTonModule)
    },
    //-------------
    {
        path: 'bao-cao/bao-cao-tong-hop-kq-ksk',
        loadChildren: () => import('./bao-cao/bao-cao-tong-hop-kq-ksk/bao-cao-tong-hop-kq-ksk.module').then(o => o.BaoCaoTongHopKqKskModule)
    },
    {
        path: 'bao-cao/bao-cao-hoat-dong-noi-tru',
        loadChildren: () => import('./bao-cao/bao-cao-hoat-dong-noi-tru/bao-cao-hoat-dong-noi-tru.module').then(o => o.BaoCaoHoatDongNoiTruModule)
    },
    {
        path: 'bao-cao/bang-thong-ke-tiep-nhan-noi-tru-ngoai-tru',
        loadChildren: () => import('./bao-cao/bang-ke-tiep-nhan-noi-tru-ngoai-tru/bang-ke-tiep-nhan-noi-tru-ngoai-tru.module').then(o => o.BangKeTiepNhanNoiTruVaNgoaiTruModule)
    },
    {
        path: 'bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt',
        loadChildren: () => import('./bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt.module').then(o => o.BaoCaoBienBanKiemKeDpVtModule)
    },

    {
        path: 'lich-su-kham-chua-benh',
        loadChildren: () => import('./kham-benh/lich-su-kham-chua-benh/lich-su-kham-chua-benh.module').then(o => o.LichSuKhamChuaBenhModule)
    },
    {
        path: 'bao-cao/bao-cao-nguoi-benh-den-kham',
        loadChildren: () => import('./bao-cao/bao-cao-nguoi-benh-den-kham/bao-cao-nguoi-benh-den-kham.module').then(o => o.BaoCaoNguoiBenhDenKhamModule)
    },
    {
        path: 'bao-cao/bao-cao-nguoi-benh-den-lam-dvkt',
        loadChildren: () => import('./bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt.module').then(o => o.BaoCaoNguoiBenhDenLamDvktModule)
    },
    {
        path: 'bao-cao/bao-cao-benh-nhan-ra-vien-noi-tru',
        loadChildren: () => import('./bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru.module').then(o => o.BaoCaoBenhNhanRaVienNoiTruModule)
    },
    {
        path: 'bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan',
        loadChildren: () => import('./bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan/bao-cao-tong-hop-cong-no-chua-thanh-toan.module').then(o => o.BaoCaoTongHopCongNoChuaThanhToanModule)
    },
    {
        path: 'bao-cao/bang-ke-chi-tiet-theo-nguoi-benh',
        loadChildren: () => import('./bao-cao/bang-ke-chi-tiet-theo-nguoi-benh/bang-ke-chi-tiet-theo-nguoi-benh.module').then(o => o.BangKeChiTietTheoNguoiBenhModule)
    },
    {
        path: 'bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls',
        loadChildren: () => import('./bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.module').then(o => o.BaoCaoDuTruSoLuongThucHienDvLsClsModule)
    },
    {
        path: 'bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan',
        loadChildren: () => import('./bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.module').then(o => o.BaoCaoDvPhatSinhNgoaiGoiKeToanModule)
    },
    {
        path: 'bao-cao/bao-cao-ket-qua-kham-chua-benh-kt',
        loadChildren: () => import('./bao-cao/bao-cao-ket-qua-kham-chua-benh-kt/bao-cao-ket-qua-kham-chua-benh-kt.module').then(o => o.DanhSachBaoCaoKetQuaKhamChuaBenhKTModule)
    },
    {
        path: 'bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien',
        loadChildren: () => import('./bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien.module').then(o => o.ThongKeCacDichVuChuaLayLenBienLaiThuTienModule)
    },
    {
        path: 'bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu',
        loadChildren: () => import('./bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu.module').then(o => o.BaoCaoDtKhamDoanTheoNhomDichVuModule)
    },
    {
        path: 'bao-cao/bao-cao-hoat-dong-kham-benh-theo-dich-vu',
        loadChildren: () => import('./bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-dich-vu/bang-ke-bac-si-thuc-hien-cls-theo-dich-vu.module').then(o => o.BangKeBacSiThucHienClsTheoDichVuModule)
    },
    {
        path: 'bao-cao/bao-cao-hoat-dong-kham-benh-theo-khoa-phong',
        loadChildren: () => import('./bao-cao/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong.module').then(o => o.BangKeBacSiThucHienClsTheoKhoaPhongModule)
    },
    {
        path: 'bao-cao/bao-cao-hoat-dong-noi-tru-chi-tiet',
        loadChildren: () => import('./bao-cao/bao-cao-hoat-dong-noi-tru-chi-tiet/bao-cao-hoat-dong-noi-tru-chi-tiet.module').then(o => o.BaoCaoHoatDongNoiTruChiTietModule)
    },
    {
        path: 'bao-cao/bao-cao-thu-vien-phi-chua-hoan',
        loadChildren: () => import('./bao-cao/bao-cao-thu-vien-phi-chua-hoan/bao-cao-thu-vien-phi-chua-hoan.module').then(o => o.BaoCaoThuVienPhiChuaHoanModule)
    },
    {
        path: 'benh-an-dien-tu',
        loadChildren: () => import('./dieu-tri-noi-tru/benh-an-dien-tu/benh-an-dien-tu.module').then(o => o.BenhAnDienTuModule)
    },
    {
        path: 'benh-an-dien-tu/gay-benh-an',
        loadChildren: () => import('./dieu-tri-noi-tru/gay-benh-an/gay-benh-an.module').then(o => o.GayBenhAnModule)
    },
    {
        path: 'bao-cao/tinh-hinh-benh-tat-tu-vong',
        loadChildren: () => import('./bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/bao-cao-tinh-hinh-benh-tat-tu-vong.module').then(o => o.BaoCaoTinhHinhBenhTatTuVongModule)
    },
    {
        path: 'danh-muc/nhom-he-thong/nhom-benh-va-ten-benh',
        loadChildren: () => import('./danh-muc/nhom-he-thong/benh-vien/nhom-benh-va-ten-benh/nhom-benh-va-ten-benh.module').then(o => o.NhomBenhVaTenBenhModule)
    },

    {
        path: 'nhap-xuat/ksnk/yeu-cau-mua-ksnk',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.module').then(o => o.YeuCauMuaKSNKSModule)
    },
    {
        path: 'nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-ksnk-tai-khoa/tong-hop-du-tru-mua-ksnk-tai-khoa.module')
            .then(o => o.TongHopDuTruMuaKSNKTaiKhoaModule)
    },
    {
        path: 'nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.module')
            .then(o => o.TongHopDuTruKSNKMuaTaiKhoaDuocModule)
    },
    {
        path: 'nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/du-tru-mua/tong-hop-mua-ksnk-tai-giam-doc/du-tru-giam-doc.module')
            .then(o => o.TongHopDuTruMuaKSNKTaiGiamDocModule)
    },
    {
        path: 'nhap-xuat/ksnk/yeu-cau-tra-ksnk',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/hoan-tra/yeu-cau-tra-ksnk/yeu-cau-tra-ksnk.module').then(o => o.YeuCauTraKSNKModule)
    },
    {
        path: 'nhap-xuat/ksnk/duyet-hoan-tra-ksnk',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/hoan-tra/duyet-hoan-tra-ksnk/duyet-hoan-tra-ksnk.module').then(o => o.DuyetHoanTraKSNKModule)
    },
    {
        path: 'nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.module').then(o => o.YeuCauLinhKSNKModule)
    },
    {
        path: 'nhap-xuat/kiem-soat-nhiem-khuan/ksnk-can-bu',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/danh-sach-ksnk-can-bu/danh-sach-ksnk-can-bu.module').then(o => o.DanhSachKSNKCanBuModule)
    },
    {
        path: 'nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk',
        loadChildren: () => import('./nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk/duyet-yeu-cau-linh-ksnk.module').then(o => o.DuyetYeuCauLinhKSNKModule)
    },
];
const mainRoutes: Routes = [
    {
        path: '', component: MainComponent, data: { title: 'Main Views' }, children: mainChildRoutes, canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
