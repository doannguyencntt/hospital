
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icPermIdentity from '@iconify/icons-ic/twotone-perm-identity';
import icPermContactCalendar from '@iconify/icons-ic/twotone-perm-contact-calendar';
import icList from '@iconify/icons-ic/twotone-list';
import outlineQueryBuilder from '@iconify/icons-ic/outline-query-builder';
import iCassignment from '@iconify/icons-ic/twotone-assignment';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icHotel from '@iconify/icons-ic/baseline-hotel';
import icSettings from '@iconify/icons-ic/twotone-settings';
import fileContract from '@iconify/icons-fa-solid/file-contract';
import wareHouse from '@iconify/icons-fa-solid/warehouse';
import icPayment from '@iconify/icons-ic/payment';
import icCheckCircle from '@iconify/icons-ic/check-circle';
import icPermission from '@iconify/icons-fa-solid/ban';
import icStore from '@iconify/icons-ic/store';
import medkit from '@iconify/icons-fa-solid/medkit';
import clinic from '@iconify/icons-fa-solid/clinic-medical';
import icHistory from '@iconify/icons-ic/history';
import icSend from '@iconify/icons-ic/send';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icMoney from '@iconify/icons-ic/twotone-money';
import icAccessible from '@iconify/icons-ic/accessible';
import icStoreMallDirectory from '@iconify/icons-ic/store-mall-directory';
import icContentPaste from '@iconify/icons-ic/content-paste';
import icCardGiftcard from '@iconify/icons-ic/twotone-card-giftcard';
import icBong from '@iconify/icons-fa-solid/bong';
import icSyringe from '@iconify/icons-fa-solid/syringe'
import iSholdingHeart from '@iconify/icons-fa-solid/hand-holding-heart';
import icOutlineLibraryBook from '@iconify/icons-ic/outline-library-books';
export const sidebarConfig: any[] = [
    { type: 'link', label: 'Trang Chủ', route: '/trang-chu', icon: icLayers },
    // { type: 'link', label: 'Gửi hồ sơ giám định BHYT', route: '/danh-muc/bao-hiem-y-te/gui-ho-so-giam-dinh', icon: icSend },
    {
        type: 'dropdown', label: 'Tiếp Nhận Người Bệnh', icon: icPersonAdd,
        children: [
            { type: 'link', label: 'Thêm Yêu Cầu Tiếp Nhận (F2)', route: '/them-yeu-cau-tiep-nhan', canViewType: DocumentType.YeuCauTiepNhan },
            { type: 'link', label: 'DS Tiếp Nhận', route: '/danh-sach-tiep-nhan', canViewType: DocumentType.DanhSachChoKham },
            { type: 'link', label: 'Lịch Sử Tiếp Nhận', route: '/lich-su-tiep-nhan', canViewType: DocumentType.LichSuTiepNhan }
        ]
    },
    {
        type: 'dropdown', label: 'Khám Bệnh', icon: medkit,
        children: [
            { type: 'link', label: 'Khám Bệnh', route: '/kham-benh', canViewType: DocumentType.KhamBenh },
            { type: 'link', label: 'Khám Bệnh Đang Khám', route: '/kham-benh-dang-kham', canViewType: DocumentType.KhamBenhDangKham },
            { type: 'link', label: 'Lịch Sử Khám Bệnh', route: '/lich-su-kham-benh', canViewType: DocumentType.LichSuKhamBenh },
            { type: 'link', label: 'Lịch sử khám chữa bệnh', route: '/lich-su-kham-chua-benh', icon: icHistory, canViewType: DocumentType.LichSuKhamChuaBenh },
        ]
    },
    {
        type: 'dropdown', label: 'Tiêm chủng', icon: icSyringe,
        children: [
            { type: 'link', label: 'Khám Sàng Lọc', route: '/tiem-chung/kham-sang-loc', canViewType: DocumentType.TiemChungKhamSangLoc },
            { type: 'link', label: 'Thực Hiện Tiêm', route: '/tiem-chung/thuc-hien-tiem', canViewType: DocumentType.TiemChungThucHienTiem },
            { type: 'link', label: 'Lịch Sử Tiêm Chủng', route: '/tiem-chung/lich-su-tiem', canViewType: DocumentType.TiemChungLichSuTiem }
        ]
    },
    {
        type: 'dropdown', label: 'Nội Trú', icon: icHotel,
        children: [
            { type: 'link', label: 'DS Tiếp Nhận', route: '/noi-tru/tiep-nhan', canViewType: DocumentType.TiepNhanNoiTru },
            { type: 'link', label: 'DS Điều Trị Nội Trú', route: '/dieu-tri-noi-tru', canViewType: DocumentType.DanhSachDieuTriNoiTru },
            { type: 'link', label: 'Tạo Bệnh Án Sơ Sinh', route: '/tao-benh-an-so-sinh', canViewType: DocumentType.TaoBenhAnSoSinh },
            { type: 'link', label: 'Lưu Trữ Bệnh Án', route: '/luu-tru-benh-an', canViewType: DocumentType.LuuTruHoSo },
            { type: 'link', label: 'Tổng Hợp Y Lệnh', route: '/noi-tru/tong-hop-y-lenh', canViewType: DocumentType.TongHopYLenh }
        ]
    },
    {
        type: 'dropdown', label: 'Bệnh án điện tử', icon: medkit,
        children: [
            { type: 'link', label: 'Gáy Bệnh Án', route: '/benh-an-dien-tu/gay-benh-an', canViewType: DocumentType.DanhMucGayBenhAn },
            { type: 'link', label: 'Bệnh Án Điện Tử', route: '/benh-an-dien-tu', canViewType: DocumentType.BenhAnDienTu },
        ]
    },
    {
        type: 'dropdown', label: 'Kết Quả CĐHA, TDCN', icon: iCassignment,
        children: [
            { type: 'link', label: 'DS Kết Quả CĐHA, TDCN (F9)', route: '/ket-qua-cdha-tdcn', canViewType: DocumentType.CanLamSang },
            { type: 'link', label: 'DS Lịch Sử Kết Quả CĐHA, TDCN', route: '/lich-su-ket-qua-cdha-tdcn', canViewType: DocumentType.LichSuCanLamSang },
            { type: 'link', label: 'Từ Điển Dịch Vụ Kỹ thuật', route: '/tu-dien-dich-vu-ky-thuat', canViewType: DocumentType.TuDienDichVuKyThuat }
        ]
    },
    {
        type: 'dropdown', label: 'Xét Nghiệm', icon: icBong,
        children: [
            { type: 'link', label: 'DS Cấp Code', route: '/xet-nghiem/xac-nhan-cap-code', canViewType: DocumentType.LayMauXetNghiem },
            { type: 'link', label: 'DS Nhận Mẫu', route: '/xet-nghiem/xac-nhan-nhan-mau', canViewType: DocumentType.NhanMauXetNghiem },
            // { type: 'link', label: 'DS Gửi Mẫu', route: '/xet-nghiem/goi-mau', canViewType: DocumentType.GoiMauXetNghiem },
            // { type: 'link', label: 'DS Nhận Mẫu', route: '/xet-nghiem/nhan-mau', canViewType: DocumentType.NhanMauXetNghiem },
            { type: 'link', label: 'DS Kết Quả', route: '/xet-nghiem/ket-qua-new', canViewType: DocumentType.KetQuaXetNghiem },
            { type: 'link', label: 'DS Duyệt Kết Quả', route: '/xet-nghiem/duyet-ket-qua-new', canViewType: DocumentType.DuyetKetQuaXetNghiem },
            // { type: 'link', label: 'DS Duyệt Yêu Cầu Chạy lại', route: '/xet-nghiem/duyet-yeu-cau-chay-lai', canViewType: DocumentType.DuyetYeuCauChayLaiXetNghiem },
            { type: 'link', label: 'DS Chỉ Số Xét Nghiệm', route: '/xet-nghiem/chi-so-xet-nghiem', canViewType: DocumentType.ChiSoXetNghiem },
            { type: 'link', label: 'Thiết Bị Xét Nghiệm', route: '/xet-nghiem/thiet-bi', canViewType: DocumentType.ThietBiXetNghiem },

            { type: 'link', label: 'DS Lấy Mẫu (cũ)', route: '/xet-nghiem/lay-mau', canViewType: DocumentType.LayMauXetNghiem },
            { type: 'link', label: 'DS Kết Quả (cũ)', route: '/xet-nghiem/ket-qua', canViewType: DocumentType.KetQuaXetNghiem },
            { type: 'link', label: 'DS Duyệt Kết Quả (cũ)', route: '/xet-nghiem/duyet-ket-qua', canViewType: DocumentType.DuyetKetQuaXetNghiem },

        ]
    },
    {
        type: 'dropdown', label: 'Phẫu Thuật Thủ Thuật', icon: icAccessible,
        children: [
            { type: 'link', label: 'Phẫu Thuật Thủ Thuật (F4)', route: '/phau-thuat-thu-thuat', canViewType: DocumentType.PhauThuatThuThuatTheoNgay },
            { type: 'link', label: 'Lịch Sử Phẫu Thuật Thủ Thuật', route: '/lich-su-phau-thuat-thu-thuat', canViewType: DocumentType.LichSuPhauThuatThuThuat },
            { type: 'link', label: 'Bảng kê Thuốc Và VT PTTT', route: '/bang-ke-thuoc-vt-pttt', canViewType: DocumentType.BangKeThuocVatTuPhauThuat }
        ]
    },
    {
        type: 'dropdown', label: 'Xác Nhận BHYT', icon: icCheckCircle,
        children: [
            {
                type: 'dropdown', label: 'Ngoại Trú',
                children: [
                    {
                        type: 'link',
                        label: 'DS Xác Nhận BHYT (F6)',
                        route: '/xac-nhan-bhyt/ngoai-tru',
                        canViewType: DocumentType.XacNhanBHYT
                    },
                    {
                        type: 'link', label: 'Xác Nhận Đã Hoàn Thành',
                        route: '/xac-nhan-bhyt-da-hoan-thanh/ngoai-tru',
                        canViewType: DocumentType.XacNhanBhytDaHoanThanh
                    },
                    {
                        type: 'link',
                        label: 'Lịch Sử Xác Nhận BHYT',
                        route: '/lich-su-xac-nhan-bhyt/ngoai-tru',
                        canViewType: DocumentType.LichSuXacNhanBHYT
                    }
                ]
            },
            {
                type: 'dropdown', label: 'Nội Trú',
                children: [
                    {
                        type: 'link',
                        label: 'DS Xác Nhận BHYT',
                        route: '/xac-nhan-bhyt/noi-tru',
                        canViewType: DocumentType.XacNhanBhytNoiTru
                    }
                ]
            },
            {
                type: 'link',
                label: 'DS Xác Nhận BHYT đã hoàn thành',
                route: '/danh-sach-xac-nhan-bhyt-da-hoan-thanh',
                canViewType: DocumentType.DSXNNgoaiTruVaNoiTruBHYT
            }
        ]
    },
    {
        type: 'dropdown', label: 'Thu Ngân', icon: icPayment,
        children: [
            { type: 'link', label: 'Viện phí ngoại trú', route: '/danh-sach-thu-dich-vu', canViewType: DocumentType.ThuNgan },
            { type: 'link', label: 'Viện phí nội trú', route: '/danh-sach-thu-tien-noi-tru', canViewType: DocumentType.ThuNgan },
            { type: 'link', label: 'Viện phí gói marketing', route: '/danh-sach-thu-goi-marketing', canViewType: DocumentType.ThuNgan },
            { type: 'link', label: 'Công nợ người bệnh', route: '/thu-ngan/cong-no-benh-nhan', canViewType: DocumentType.CongNoBenhNhan },
        ]
    },
    {
        type: 'dropdown', label: 'Nhà Thuốc', icon: icStore,
        children: [
            { type: 'link', label: 'DS Đơn Thuốc (F8)', route: '/nha-thuoc', canViewType: DocumentType.QuayThuoc },
            { type: 'link', label: 'Lịch Sử Bán Thuốc', route: '/lich-su-nha-thuoc', canViewType: DocumentType.LichSuQuayThuoc },
            { type: 'link', label: 'Lịch Sử Hủy Bán Thuốc', route: '/lich-su-huy-ban-thuoc', canViewType: DocumentType.DanhSachLichSuHuyBanThuoc },
            { type: 'link', label: 'Lịch Sử Xuất Thuốc', route: '/lich-su-xuat-thuoc', canViewType: DocumentType.LichSuQuayThuoc }
        ]
    },
    {
        type: 'dropdown', label: 'Cấp phát thuốc BHYT', icon: iSholdingHeart,
        children: [
            { type: 'link', label: 'Ds đơn thuốc chờ cấp thuốc', route: '/danh-sach-don-thuoc-cho-cap-thuoc', canViewType: DocumentType.DanhSachDonThuocChoCapThuocBHYT },
            { type: 'link', label: 'Lịch Sử xuất thuốc cấp phát ', route: '/lich-su-xuat-thuoc-cap-phat', canViewType: DocumentType.LichSuXuatThuocCapThuocBHYT }
        ]
    },
    {
        type: 'dropdown', label: 'Gửi H.Sơ Giám Định BHYT', icon: icSend,
        children: [
            { type: 'link', label: 'DS Gửi (F10)', route: '/danh-sach-goi', canViewType: DocumentType.GuiBaoHiemYTe },
            { type: 'link', label: 'Xuất excel chứng từ', route: '/danh-sach-xuat-excel-chung-tu', canViewType: DocumentType.DanhSachXuatChungTuExcel },
            { type: 'link', label: 'Lịch Sử H.Sơ Giám Định BHYT', route: '/lich-su-bao-hiem-y-te', canViewType: DocumentType.LichSuGuiBHYT }
        ]
    },
    {
        type: 'dropdown', label: 'Kế toán', icon: icContentPaste,
        children: [
            { type: 'link', label: 'Duyệt Nhập Kho Dược Phẩm', route: '/ke-toan/duyet-nhap-kho', canViewType: DocumentType.DuyetNhapKhoDuocPham },
            { type: 'link', label: 'Duyệt Nhập Kho Vật Tư', route: '/ke-toan/duyet-nhap-kho-vat-tu', canViewType: DocumentType.DuyetNhapKhoVatTu },
            { type: 'link', label: 'Cập Nhật Công Nợ', route: '/ke-toan/cong-no-bhtn', canViewType: DocumentType.CongNoBhtn },
            { type: 'link', label: 'DS Nhập Giá Máu', route: '/ke-toan/nhap-gia-mau', canViewType: DocumentType.DuyetNhapKhoMau },
            { type: 'link', label: 'Duyệt Điều Chuyển Dược Phẩm', route: '/ke-toan/duyet-dieu-chuyen-duoc-pham', canViewType: DocumentType.DanhSachDuyetDieuChuyenNoiBoDuocPham },

        ]
    },
    {
        type: 'dropdown', label: 'Marketing', icon: icCardGiftcard,
        children: [
            // /marketing/dang-ky-goi-marketing /danh-muc/danh-sach-marketing
            { type: 'link', label: 'Đăng Ký Gói Marketing', route: '/marketing/dang-ky-goi-marketing', canViewType: DocumentType.DanhSachMarketing },
            {
                type: 'dropdown', label: 'Chương Trình Marketing',
                children: [
                    { type: 'link', label: 'Theo Gói Dịch Vụ', route: '/marketing/ct-marketing/goi-dv', canViewType: DocumentType.GoiDvChuongTrinhMarketing },
                    { type: 'link', label: 'Theo Voucher', route: '/marketing/ct-marketing/voucher', canViewType: DocumentType.VoucherMarketing },
                ]
            },
            { type: 'link', label: 'Quà Tặng', route: '/marketing/qua-tang', canViewType: DocumentType.QuaTangMarketing },
            { type: 'link', label: 'Nhóm Dịch Vụ', route: '/marketing/goi-dv', canViewType: DocumentType.GoiDichVuMarketing },
            { type: 'link', label: 'Nhập Kho ', route: '/marketing/nhap-kho-marketing', canViewType: DocumentType.NhapKhoMarketing },
            { type: 'link', label: 'Xuất Kho', route: '/marketing/xuat-kho', canViewType: DocumentType.XuatKhoMarketing }

        ]
    },
    {
        type: 'dropdown', label: 'Khám Sức Khỏe', icon: icContentPaste,
        children: [
            {
                type: 'dropdown', label: 'Hợp Đồng',
                children: [
                    { type: 'link', label: 'Công Ty', route: '/kham-doan/cong-ty', canViewType: DocumentType.KhamDoanCongTy },
                    { type: 'link', label: 'HĐ Khám Sức Khỏe', route: '/kham-doan/hop-dong-kham', canViewType: DocumentType.KhamDoanHopDongKham }, // cần cập nhật lại
                    { type: 'link', label: 'Gói Khám Sức Khỏe', route: '/kham-doan/goi-kham', canViewType: DocumentType.KhamDoanGoiKhamSucKhoe }, // cần cập nhật lại
                ]
            },
            {
                type: 'dropdown', label: 'Quy Trình Khám',
                children: [
                    { type: 'link', label: 'Tiếp Nhận KSK Đoàn', route: '/kham-doan/tiep-nhan', canViewType: DocumentType.KhamDoanTiepNhan },
                    { type: 'link', label: 'Đo CSST', route: '/kham-doan/do-chi-so-sinh-ton', canViewType: DocumentType.KhamDoanChiSoSinhTon },
                    {
                        type: 'dropdown', label: 'Khám Sức Khỏe Đoàn',
                        children: [
                            { type: 'link', label: 'Theo Phòng', route: '/kham-doan/tiep-nhan/kham-benh', queryParams: { IsKhamDoan: true, IsKhamDoanTatCa: false }, canViewType: DocumentType.KhamDoanKhamBenh },
                            { type: 'link', label: 'Tất Cả', route: '/kham-doan/kham-doan-tat-ca-phong', canViewType: DocumentType.KhamDoanKhamBenhTatCaPhong }
                        ]
                    },
                    { type: 'link', label: 'Kết Luận CLS', route: '/kham-doan/kham-doan-ket-luan-cls-ksk', canViewType: DocumentType.KhamDoanKetLuanCanLamSangKhamSucKhoeDoan }, // cần cập nhật lại            
                    { type: 'link', label: 'Kết Luận', route: '/kham-doan/ket-luan-kham-suc-khoe-doan', canViewType: DocumentType.KhamDoanKetLuanKhamSucKhoeDoan },
                    { type: 'link', label: 'Lịch Sử KSK Đoàn', route: '/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe', canViewType: DocumentType.KhamDoanLichSuTiepNhanKhamSucKhoe }, // cần cập nhật lại            
                ]
            },

            {
                type: 'dropdown', label: 'Yêu Cầu Nhân Sự',
                children: [
                    { type: 'link', label: 'Yêu Cầu Nhân Sự', route: '/kham-doan/nhan-su-kham', canViewType: DocumentType.KhamDoanYeuCauNhanSuKhamSucKhoe },
                    { type: 'link', label: 'Duyệt YCNS - KHTH', route: '/kham-doan/khth-duyet', canViewType: DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoeKhth },
                    { type: 'link', label: 'Duyệt YCNS - Nhân Sự', route: '/kham-doan/nhan-su-duyet', canViewType: DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoePhongNhanSu },
                    { type: 'link', label: 'Duyệt YCNS - Giám Đốc', route: '/kham-doan/giam-doc-duyet', canViewType: DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoeGiamDoc },
                ]
            },
            {
                type: 'dropdown', label: 'Thống kê', icon: icList,
                children: [
                    { type: 'link', label: 'Tổng Hợp Kết Quả KSK', route: '/bao-cao/bao-cao-tong-hop-kq-ksk', canViewType: DocumentType.BaoCaoTongHopKetQuaKSK },
                    // { type: 'link', label: 'Tiếp Nhận Người Bệnh Khám',  route: '/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham', canViewType: DocumentType.BaoCaoTiepNhanBenhNhanKham},
                    { type: 'link', label: 'Người Bệnh KSK Theo Hợp Đồng', route: '/bao-cao/bao-cao-benh-nhan-kham-suc-khoe-doan', canViewType: DocumentType.BaoCaoDichVuTrongGoiKhamDoan },
                    { type: 'link', label: 'Dịch Vụ Ngoài Hợp Đồng KSK', route: '/bao-cao/bao-cao-dich-vu-ngoai-hop-dong', canViewType: DocumentType.BaoCaoDichVuNgoaiGoiKhamDoan },
                    { type: 'link', label: 'Hoạt Động Khám Đoàn', route: '/bao-cao/bao-cao-hoat-dong-kham-doan', canViewType: DocumentType.BaoCaoHoatDongKhamDoan },
                    { type: 'link', label: 'KSK Chuyên Khoa', route: '/bao-cao/bao-cao-ksk-chuyen-khoa', canViewType: DocumentType.BaoCaoKSKChuyenKhoa },
                    { type: 'link', label: 'Dự trù số lượng người khám sức khỏe thực hiện DV LS-CLS', route: '/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls', canViewType: DocumentType.KhamDoanThongKeSoNguoiKhamSucKhoeLSCLS },
                ]
            },

        ]
    },
    {
        type: 'subheading', label: 'NHẬP XUẤT',
        children: [
            {
                type: 'dropdown', label: 'Dược Phẩm ', icon: wareHouse,
                children: [
                    { type: 'link', label: 'Nhập Kho', route: '/nhap-xuat/duoc-pham/nhap-kho', canViewType: DocumentType.NhapKhoDuocPham },
                    {
                        type: 'dropdown', label: 'Xuất Kho',
                        children: [
                            { type: 'link', label: 'Xuất Kho', route: '/nhap-xuat/duoc-pham/xuat-kho', canViewType: DocumentType.XuatKhoDuocPham },
                            { type: 'link', label: 'Xuất khác', route: '/nhap-xuat/duoc-pham/xuat-kho-khac', canViewType: DocumentType.XuatKhoDuocPhamKhac },
                            { type: 'link', label: 'Điều chuyển kho nội bộ', route: '/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham', canViewType: DocumentType.DanhSachDieuChuyenNoiBoDuocPham },

                        ]
                    },
                    {
                        type: 'dropdown', label: 'Dự Trù Lĩnh',
                        children: [
                            { type: 'link', label: 'Yêu Cầu Lĩnh', route: '/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc', canViewType: DocumentType.DanhSachYeuCauLinhDuocPham },
                            { type: 'link', label: 'Duyệt Yêu Cầu Lĩnh', route: '/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc', canViewType: DocumentType.DuyetYeuCauLinhDuocPham },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Dự Trù Mua',
                        children: [
                            { type: 'link', label: 'Yêu Cầu Dự Trù Mua', route: '/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham', canViewType: DocumentType.DanhSachYeuCauDuTruMuaDuocPham },
                            { type: 'link', label: 'THDT Mua Tại Khoa', route: '/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa', canViewType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoa },
                            { type: 'link', label: 'THDT Mua Tại K.Dược', route: '/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc', canViewType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc },
                            { type: 'link', label: 'THDT Mua Tại G.Đốc', route: '/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-giam-doc', canViewType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiGiamDoc }

                        ]
                    },
                    {
                        type: 'dropdown', label: 'Hoàn Trả',
                        children: [
                            {
                                type: 'dropdown', label: 'Từ Tủ Trực', children: [
                                    { type: 'link', label: 'Yêu Cầu Trả', route: '/nhap-xuat/duoc-pham/yeu-cau-tra-duoc-pham', canViewType: DocumentType.YeuCauHoanTraDuocPham },
                                    { type: 'link', label: 'Duyệt Hoàn Trả', route: '/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham', canViewType: DocumentType.DuyetYeuCauHoanTraDuocPham }
                                ]
                            },
                            {
                                type: 'dropdown', label: 'Từ Người Bệnh', children: [
                                    { type: 'link', label: 'Yêu Cầu Trả', route: '/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham', canViewType: DocumentType.TraThuocTuBenhNhan },
                                    {
                                        type: 'link',
                                        label: 'Duyệt Hoàn Trả',
                                        route: '/nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra',
                                        canViewType: DocumentType.DuyetTraThuocTuBenhNhan
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                type: 'dropdown', label: 'Vật Tư ', icon: icStoreMallDirectory,
                children: [
                    { type: 'link', label: 'Nhập Kho', route: '/nhap-xuat/vat-tu/nhap-kho', canViewType: DocumentType.NhapKhoVatTu },
                    {
                        type: 'dropdown', label: 'Xuất Kho',
                        children: [
                            { type: 'link', label: 'Xuất Kho', route: '/nhap-xuat/vat-tu/xuat-kho', canViewType: DocumentType.XuatKhoVatTu },
                            { type: 'link', label: 'Xuất khác', route: '/nhap-xuat/vat-tu/xuat-kho-khac', canViewType: DocumentType.XuatKhoVatTuKhac },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Dự Trù Lĩnh',
                        children: [
                            { type: 'link', label: 'Yêu Cầu Lĩnh', route: '/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu', canViewType: DocumentType.DanhSachYeuCauLinhVatTu },
                            { type: 'link', label: 'Duyệt Yêu Cầu Lĩnh', route: '/nhap-xuat/vat-tu/duyet-yeu-cau-linh-vat-tu', canViewType: DocumentType.DuyetYeuCauLinhVatTu },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Dự Trù Mua',
                        children: [
                            { type: 'link', label: 'Yêu Cầu Dự Trù Mua', route: '/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu', canViewType: DocumentType.DanhSachYeuCauDuTruMuaVatTu },
                            { type: 'link', label: 'THDT Mua Tại Khoa', route: '/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa', canViewType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoa },
                            {
                                type: 'link',
                                label: 'THDT Mua Tại K.Dược',
                                route: '/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa-duoc',
                                canViewType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoaDuoc
                            },
                            { type: 'link', label: 'THDT Mua Tại G.Đốc', route: '/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-giam-doc', canViewType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiGiamDoc },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Hoàn Trả',
                        children: [
                            {
                                type: 'dropdown', label: 'Từ Tủ Trực', children: [
                                    { type: 'link', label: 'Yêu Cầu Trả', route: '/nhap-xuat/vat-tu/yeu-cau-tra-vat-tu', canViewType: DocumentType.YeuCauHoanTraVatTu },
                                    { type: 'link', label: 'Duyệt Hoàn Trả', route: '/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu', canViewType: DocumentType.DuyetYeuCauHoanTraVatTu }
                                ]
                            },

                            {
                                type: 'dropdown', label: 'Từ Người Bệnh', children: [
                                    { type: 'link', label: 'Yêu Cầu Trả', route: '/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu', canViewType: DocumentType.TraVatTuTuBenhNhan },
                                    {
                                        type: 'link',
                                        label: 'Duyệt Hoàn Trả',
                                        route: '/nhap-xuat/vat-tu/hoan-tra/tu-benh-nhan/duyet-hoan-tra',
                                        canViewType: DocumentType.DuyetTraVatTuTuBenhNhan
                                    }
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                type: 'dropdown', label: 'Hành chính - KSNK', icon: icOutlineLibraryBook,
                children: [
                    { type: 'link', label: 'Nhập Kho', route: '/nhap-xuat/ksnk/nhap-kho', canViewType: DocumentType.NhapVatTuThuocNhomKSNK },
                    {
                        type: 'dropdown', label: 'Xuất Kho',
                        children: [
                            { type: 'link', label: 'Xuất Kho', route: '/nhap-xuat/ksnk/xuat-kho', canViewType: DocumentType.XuatKhoVatTuThuocNhomKSNK },
                            { type: 'link', label: 'Xuất khác', route: '/nhap-xuat/ksnk/xuat-kho-khac', canViewType: DocumentType.XuatKhoKhacVatTuThuocNhomKSNK },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Dự Trù Lĩnh',
                        children: [
                            { type: 'link', label: 'Yêu Cầu Lĩnh', route: '/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk', canViewType: DocumentType.DanhSachYeuCauLinhKSNK },
                            { type: 'link', label: 'Duyệt Yêu Cầu Lĩnh', route: '/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk', canViewType: DocumentType.DuyetYeuCauLinhKSNK },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Dự Trù Mua',
                        children: [
                            { type: 'link', label: 'Yêu cầu dự trù mua', route: '/nhap-xuat/ksnk/yeu-cau-mua-ksnk', canViewType: DocumentType.YeuCauDuTruMuaNhomKSNK },
                            { type: 'link', label: 'THDT mua tại KSNK', route: '/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa', canViewType: DocumentType.THDTMuaTaiKSNK },
                            {
                                type: 'link',
                                label: 'THDT mua tại Hành chính',
                                route: '/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-hanh-chinh',
                                canViewType: DocumentType.THDTMuaTaiHanhChinh
                            },
                            { type: 'link', label: 'THDT mua tại Giám đốc', route: '/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-giam-doc', canViewType: DocumentType.THDTMuaTaiGiamDoc },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Hoàn Trả',
                        children: [
                            {
                                type: 'dropdown', label: 'Từ Kho KSNK', children: [
                                    { type: 'link', label: 'Yêu Cầu Trả', route: '/nhap-xuat/ksnk/yeu-cau-tra-ksnk', canViewType: DocumentType.YeuCauHoanTraKSNK},
                                    { type: 'link', label: 'Duyệt Hoàn Trả', route: '/nhap-xuat/ksnk/duyet-hoan-tra-ksnk', canViewType: DocumentType.DuyetYeuCauHoanTraKSNK}
                                ]
                            },                         
                        ]
                    }
                ]
            },
            {
                type: 'dropdown', label: 'Máu ', icon: wareHouse,
                children: [
                    { type: 'link', label: 'DS Nhập Kho Máu', route: '/nhap-xuat/mau/nhap-kho', canViewType: DocumentType.NhapKhoMau }
                ]
            },
        ]
    },
    {
        type: 'subheading', label: 'DANH MỤC',
        children: [
            //  { type: 'link', label: 'Người Bệnh', route: '/danh-muc/benh-nhan', icon: iCassignment, canViewType: DocumentType.User },
            {
                type: 'dropdown', label: 'Nhóm Hệ Thống', icon: icSettings,
                children: [
                    {
                        type: 'dropdown', label: 'Hành Chính',
                        children: [
                            { type: 'link', label: 'Nghề Nghiệp', route: '/danh-muc/nhom-he-thong/hanh-chinh/nghe-nghiep', canViewType: DocumentType.DanhMucNgheNghiep },
                            { type: 'link', label: 'Chức Vụ', route: '/danh-muc/nhom-he-thong/hanh-chinh/chuc-vu', canViewType: DocumentType.DanhMucChucVu },
                            { type: 'link', label: 'Nhóm Chức Danh', route: '/danh-muc/nhom-he-thong/hanh-chinh/nhom-chuc-danh', canViewType: DocumentType.DanhMucNhomChucDanh },
                            { type: 'link', label: 'Chức Danh', route: '/danh-muc/nhom-he-thong/hanh-chinh/chuc-danh', canViewType: DocumentType.DanhMucChucDanh },
                            { type: 'link', label: 'Văn Bằng Chuyên Môn', route: '/danh-muc/nhom-he-thong/hanh-chinh/van-bang-chuyen-mon', canViewType: DocumentType.DanhMucVanBangChuyenMon },
                            { type: 'link', label: 'Quốc Gia', route: '/danh-muc/nhom-he-thong/hanh-chinh/quoc-gia', canViewType: DocumentType.DanhMucQuocGia },
                            { type: 'link', label: 'Dân Tộc', route: '/danh-muc/nhom-he-thong/hanh-chinh/dan-toc', canViewType: DocumentType.DanToc }
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Bệnh Viện',
                        children: [
                            { type: 'link', label: 'Loại Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien', canViewType: DocumentType.DanhMucLoaiBenhVien },
                            { type: 'link', label: 'Cấp Quản Lý Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/cap-quan-ly-benh-vien', canViewType: DocumentType.DanhMucCapQuanLyBenhVien },
                            { type: 'link', label: 'Tên Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/ten-benh-vien', canViewType: DocumentType.DanhMucBenhVien },
                            { type: 'link', label: 'Loại Phòng Bệnh Nội Trú', route: '/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru', canViewType: DocumentType.DanhMucLoaiPhongBenh },
                            { type: 'link', label: 'Dịch Vụ Giường Tại Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/dich-vu-giuong-tai-benh-vien', canViewType: DocumentType.DanhMucDichVuGiuongTaiBenhVien },
                            { type: 'link', label: 'Dịch Vụ Khám Bệnh Tại Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/dich-vu-kham-benh-tai-benh-vien', canViewType: DocumentType.DanhMucDichVuKhamBenhTaiBenhVien },
                            { type: 'link', label: 'Dịch Vụ Kỹ Thuật Tại Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/dich-vu-ky-thuat-benh-vien', canViewType: DocumentType.DanhMucDichVuKyThuatTaiBenhVien },
                            //{ type: 'link', label: 'Dược Phẩm Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien', canViewType: DocumentType.DanhMucDuocPhamBenhVien },
                            {
                                type: 'link',
                                label: 'Dược Phẩm Bệnh Viện Phân Nhóm',
                                route: '/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom',
                                canViewType: DocumentType.DanhMucDuocPhamBenhVienPhanNhom
                            },
                            //{ type: 'link', label: 'Vật Tư Y Tế Tại Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/vat-tu-y-te-tai-benh-vien', canViewType: DocumentType.DanhMucVatTuYTeTaiBenhVien },
                            { type: 'link', label: 'ICD', route: '/danh-muc/nhom-he-thong/benh-vien/icd', canViewType: DocumentType.QuanLyICD },
                            { type: 'link', label: 'Triệu Chứng', route: '/danh-muc/nhom-he-thong/benh-vien/trieu-chung', canViewType: DocumentType.DanhMucTrieuChung },
                            { type: 'link', label: 'Chẩn Đoán', route: '/danh-muc/nhom-he-thong/benh-vien/chuan-doan', canViewType: DocumentType.DanhMucChuanDoan },
                            { type: 'link', label: 'Nhóm Chẩn Đoán', route: '/danh-muc/nhom-he-thong/benh-vien/danh-muc-chuan-doan', canViewType: DocumentType.DanhMucNhomChanDoan },
                            { type: 'link', label: 'Đối tượng ưu đãi dịch vụ kỹ thuật', route: '/danh-muc/nhom-he-thong/benh-vien/doi-tuong-uu-dai-dich-vu-ky-thuat', canViewType: DocumentType.DoiTuongUuDaiDichVuKyThuat },
                            { type: 'link', label: 'Đối tượng ưu đãi dịch vụ khám bệnh', route: '/danh-muc/nhom-he-thong/benh-vien/doi-tuong-uu-dai-dich-vu-kham-benh', canViewType: DocumentType.DoiTuongUuDaiDichVuKhamBenh },
                            { type: 'link', label: 'Lời dặn', route: '/danh-muc/nhom-he-thong/benh-vien/loi-dan', canViewType: DocumentType.LoiDan },
                            { type: 'link', label: 'Toa Thuốc Mẫu', route: '/danh-muc/nhom-he-thong/benh-vien/toa-thuoc-mau', canViewType: DocumentType.ToaThuocMau },
                            // { type: 'link', label: 'Người Giới Thiệu', route: '/danh-muc/nhom-he-thong/benh-vien/nguoi-gioi-thieu', canViewType: DocumentType.DanhMucNguoiGioiThieu },
                            { type: 'link', label: 'Nơi Giới Thiệu', route: '/danh-muc/nhom-he-thong/benh-vien/noi-gioi-thieu', canViewType: DocumentType.DanhMucNoiGioiThieu },
                            { type: 'link', label: 'Lý Do Tiếp Nhận', route: '/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan', canViewType: DocumentType.DanhMucLyDoTiepNhan },
                            { type: 'link', label: 'Nhóm Dịch Vụ Tại Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-benh-vien', canViewType: DocumentType.DanhMucNhomDichVuBenhVien },
                            { type: 'link', label: 'Phương Pháp Vô Cảm', route: '/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam', canViewType: DocumentType.DanhMucPhuongPhapVoCam },
                            //update code 19/10
                            { type: 'link', label: 'Nhóm DV Thường Dùng', route: '/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung', canViewType: DocumentType.GoiDichVuNhomThuongDung },
                            {
                                type: 'link', label: 'Công Ty BHTN',
                                route: '/danh-muc/nhom-he-thong/benh-vien/cong-ty-bhtn',
                                canViewType: DocumentType.DanhMucCongTyBhtn
                            },
                            {
                                type: 'link', label: 'Công Ty Ưu Đãi',
                                route: '/danh-muc/nhom-he-thong/benh-vien/cong-ty-uu-dai',
                                canViewType: DocumentType.DanhMucCongTyUuDai
                            },
                            { type: 'link', label: 'Kỳ Dự Trù', route: '/danh-muc/nhom-he-thong/benh-vien/ky-du-tru', canViewType: DocumentType.KyDuTru },
                            { type: 'link', label: 'Chế Độ Ăn', route: '/danh-muc/nhom-he-thong/benh-vien/che-do-an', canViewType: DocumentType.DanhMucCheDoAn }
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Người Bệnh',
                        children: [
                            { type: 'link', label: 'Người Bệnh', route: '/danh-muc/nhom-he-thong/benh-nhan/benh-nhan', canViewType: DocumentType.BenhNhan },
                            { type: 'link', label: 'Quan Hệ Thân Nhân', route: '/danh-muc/nhom-he-thong/benh-nhan/quan-he-than-nhan', canViewType: DocumentType.DanhMucQuanHeThanNhan },


                        ]
                    },
                    {
                        type: 'dropdown', label: 'Bảo Hiểm Y Tế',
                        children: [
                            // { type: 'link', label: 'Vật Tư', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/vat-tu-y-te', canViewType: DocumentType.DanhMucVatTuYTe },
                            { type: 'link', label: 'Nhóm Vật Tư', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/nhom-vat-tu', canViewType: DocumentType.DanhMucNhomVatTuYTe },
                            { type: 'link', label: 'Chuyên khoa', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/chuyen-khoa', canViewType: DocumentType.DanhMucChuyenKhoa },
                            { type: 'link', label: 'Dịch Vụ Kỹ Thuật', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-ky-thuat', canViewType: DocumentType.DanhMucDichVuKyThuat },
                            { type: 'link', label: 'Nhóm Dịch Vụ Kỹ Thuật', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/nhom-dich-vu-ky-thuat', canViewType: DocumentType.DanhMucNhomDichVuKyThuat },
                            { type: 'link', label: 'Phạm Vi Hành Nghề', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe', canViewType: DocumentType.DanhMucPhamViHanhNghe },
                            { type: 'link', label: 'Học Vị Học Hàm', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham', canViewType: DocumentType.DanhMucHocViHocHam },
                            { type: 'link', label: 'Dịch Vụ Giường', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong', canViewType: DocumentType.DanhMucDichVuGiuong },
                            { type: 'link', label: 'Dịch Vụ Khám Bệnh', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-kham-benh', canViewType: DocumentType.DanhMucDichVuKhamBenh },
                            { type: 'link', label: 'Chỉ Số Xét Nghiệm', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/chi-so-xet-nghiem', canViewType: DocumentType.DanhMucChiSoXetNghiem },
                            { type: 'link', label: 'Chẩn đoán Hình Ảnh', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh', canViewType: DocumentType.DanhMucChuanDoanHinhAnh }

                        ]
                    },
                    {
                        type: 'dropdown', label: 'Nội Dung Mẫu',
                        children: [
                            { type: 'link', label: 'Nội Dung Mẫu Xuất Ra PDF', route: '/danh-muc/nhom-he-thong/noi-dung-mau/noi-dung-mau-xuat-ra-pdf', canViewType: DocumentType.QuanLyNoiDungMauXuatRaPdf },
                            { type: 'link', label: 'Nội Dung Mẫu Email, SMS, Thông Báo', route: '/danh-muc/nhom-he-thong/noi-dung-mau/noi-dung-mau-email-sms-thong-bao', canViewType: DocumentType.QuanLyCacMessagingTemplate }
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Cấu Hình Hệ Thống',
                        children: [
                            { type: 'link', label: 'Thông Số Mặc Định', route: '/danh-muc/nhom-he-thong/cau-hinh-he-thong/thong-so-mac-dinh', canViewType: DocumentType.QuanLyCacCauHinh }

                        ]
                    },
                    {
                        type: 'dropdown', label: 'Thuốc',
                        children: [
                            { type: 'link', label: 'Máu Và Chế Phẩm', route: '/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham', canViewType: DocumentType.DanhMucMauVaChePham },
                            { type: 'link', label: 'Đơn Vị Tính', route: '/danh-muc/nhom-he-thong/thuoc/don-vi-tinh', canViewType: DocumentType.DanhMucDonViTinh },
                            { type: 'link', label: 'Nhà Sản Xuất', route: '/danh-muc/nhom-he-thong/thuoc/nha-san-xuat', canViewType: DocumentType.DanhMucNhaSanXuat },
                            { type: 'link', label: 'Đường Dùng', route: '/danh-muc/nhom-he-thong/thuoc/duong-dung', canViewType: DocumentType.DanhMucDuongDung },
                            { type: 'link', label: 'Nhóm Thuốc', route: '/danh-muc/nhom-he-thong/thuoc/nhom-thuoc', canViewType: DocumentType.DanhMucNhomThuoc },
                            { type: 'link', label: 'Dược Phẩm Quốc Gia', route: '/danh-muc/nhom-he-thong/thuoc/duoc-pham', canViewType: DocumentType.DanhMucDuocPham },
                            { type: 'link', label: 'Dược Phẩm Tại Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien', canViewType: DocumentType.DanhMucDuocPhamBenhVien },
                            { type: 'link', label: 'Phản Ứng Có Hại Của Thuốc', route: '/danh-muc/nhom-he-thong/thuoc/adr-phan-ung-co-hai-cua-thuoc', canViewType: DocumentType.DanhMucAdrPhanUngCoHaiCuaThuoc },
                            { type: 'link', label: 'Thuốc Hoặc Hoạt Chất', route: '/danh-muc/nhom-he-thong/thuoc/thuoc-hoac-hoat-chat', canViewType: DocumentType.DanhMucThuocHoacHoatChat },

                        ]
                    },
                    {
                        type: 'dropdown', label: 'Kho',
                        children: [
                            { type: 'link', label: 'Nhà Cung Cấp', route: '/danh-muc/nhom-he-thong/kho/nha-thau', canViewType: DocumentType.DanhMucNhaThau },
                            { type: 'link', label: 'Kho Dược Phẩm/VTYT', route: '/danh-muc/nhom-he-thong/kho/kho-duoc-pham-vat-tu-y-te', canViewType: DocumentType.DanhMucKhoDuocPham },
                            { type: 'link', label: 'Vị Trí Để DP/VT', route: '/danh-muc/nhom-he-thong/Kho/vi-tri-kho-duoc-pham-vat-tu-y-te', canViewType: DocumentType.DanhMucKhoDuocPhamViTri },
                            { type: 'link', label: 'Định Mức Dược Phẩm Tồn Kho', route: '/danh-muc/nhom-he-thong/kho/dinh-muc-duoc-pham-ton-kho', canViewType: DocumentType.DanhMucDinhMucDuocPhamTonKho },
                            {
                                type: 'link',
                                label: 'Định Mức Vật Tư Tồn Kho',
                                route: '/danh-muc/nhom-he-thong/kho/dinh-muc-vat-tu-ton-kho',
                                canViewType: DocumentType.DanhMucDinhMucVatTuTonKho
                            },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Vật tư',
                        children: [
                            { type: 'link', label: 'Vật Tư Quốc Gia', route: '/danh-muc/nhom-he-thong/bao-hiem-y-te/vat-tu-y-te', canViewType: DocumentType.DanhMucVatTuYTe },
                            { type: 'link', label: 'Vật Tư Tại Bệnh Viện', route: '/danh-muc/nhom-he-thong/benh-vien/vat-tu-y-te-tai-benh-vien', canViewType: DocumentType.DanhMucVatTuYTeTaiBenhVien },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Bệnh/Nhóm bệnh',
                        children: [
                            { type: 'link', label: 'Bệnh và nhóm bệnh', route: '/danh-muc/nhom-he-thong/nhom-benh-va-ten-benh', canViewType: DocumentType.DanhMucBenhVaNhomBenh },
                        ]
                    },
                ]
            },
            {
                type: 'dropdown', label: 'Nhóm Khoa Phòng', icon: icBusiness,
                children: [
                    { type: 'link', label: 'Khoa Phòng', route: '/danh-muc/nhom-khoa-phong/khoa-phong', canViewType: DocumentType.DanhMucKhoaPhong },
                    { type: 'link', label: 'Khoa Phòng - Phòng Khám', route: '/danh-muc/nhom-khoa-phong/khoa-phong-phong-kham-ngoai-tru', canViewType: DocumentType.DanhMucKhoaPhongPhongKham },
                    { type: 'link', label: 'Khoa Phòng - Nhân Viên', route: '/danh-muc/nhom-khoa-phong/khoa-phong-nhan-vien', canViewType: DocumentType.DanhMucKhoaPhongNhanVien },

                ]
            },

            {
                type: 'dropdown', label: 'Nhóm Giường Bệnh', icon: icHotel,
                children: [
                    { type: 'link', label: 'Danh Mục Giường Bệnh', route: '/danh-muc/nhom-giuong-benh/danh-muc-giuong-benh', canViewType: DocumentType.DanhMucGiuongBenh },
                    { type: 'link', label: 'Tình Trạng Giường Bệnh', route: '/danh-muc/nhom-giuong-benh/so-do-giuong-benh', canViewType: DocumentType.TinhTrangGiuongBenh },
                ]
            },

            {
                type: 'dropdown', label: 'Lịch Phân Công', icon: icPermContactCalendar,
                children: [
                    { type: 'link', label: 'Ngoại Trú', route: '/danh-muc/lich-phan-cong/ngoai-tru', canViewType: DocumentType.DanhMucLichPhanCongNgoaiTru }

                ]
            },
            {
                type: 'dropdown', label: 'Nhóm Nhân Viên', icon: icPermIdentity,
                children: [
                    { type: 'link', label: 'Hồ Sơ Nhân Viên', route: '/danh-muc/nhom-nhan-vien/ho-so-nhan-vien', canViewType: DocumentType.DanhMucNhanVien },
                    { type: 'link', label: 'Tài Khoản Người Dùng', route: '/danh-muc/nhom-nhan-vien/tai-khoan-nguoi-dung', canViewType: DocumentType.User }

                ]
            },
            {
                type: 'dropdown', label: 'Hợp Đồng Thầu', icon: fileContract,
                children: [
                    {
                        type: 'link', label: 'Dược Phẩm',
                        route: '/danh-muc/hop-dong-thau/duoc-pham', canViewType: DocumentType.DanhMucHopDongThauDuocPham
                    },
                    {
                        type: 'link', label: 'Vật Tư',
                        route: '/danh-muc/hop-dong-thau/vat-tu', canViewType: DocumentType.DanhMucHopDongThauVatTu
                    }
                ]
            },
            {
                type: 'link', label: 'Phân Quyền Người Dùng', icon: icPermission,
                route: '/danh-muc/phan-quyen-nguoi-dung', canViewType: DocumentType.Role
            }
        ]
    },
    {
        type: 'subheading', label: 'THỐNG KÊ',
        children: [
            {
                type: 'dropdown', label: 'Dược Phẩm', icon: icList,
                children: [
                    { type: 'link', label: 'Tồn Kho', route: '/bao-cao/ton-kho/duoc-pham', canViewType: DocumentType.DuocPhamTonKho },
                    { type: 'link', label: 'Sắp Hết Hạn', route: '/bao-cao/duoc-pham-sap-het-han', canViewType: DocumentType.DuocPhamSapHetHan },
                    { type: 'link', label: 'Đã Hết Hạn', route: '/bao-cao/duoc-pham-da-het-han', canViewType: DocumentType.DuocPhamDaHetHan, icon: outlineQueryBuilder }
                ]
            }, {
                type: 'dropdown', label: 'Vật Tư', icon: icList,
                children: [
                    { type: 'link', label: 'Tồn Kho', route: '/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho', canViewType: DocumentType.VatTuTonKho },
                    { type: 'link', label: 'Sắp Hết Hạn', route: '/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han', canViewType: DocumentType.VatTuSapHetHan },
                    { type: 'link', label: 'Đã Hết Hạn', route: '/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han', canViewType: DocumentType.VatTuDaHetHan }
                ]
            }, {
                type: 'dropdown', label: 'Báo Cáo', icon: icMoney,
                children: [
                    {
                        type: 'dropdown', label: 'Xét Nghiệm', icon: icList,
                        children: [
                            { type: 'link', label: 'Lưu KQ Xét Nghiệm Hàng Ngày', route: '/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay', canViewType: DocumentType.BaoCaoLuuKetQuaXetNghiemHangNgay },
                            //{ type: 'link', label: 'Tồn Kho',  route: '/bao-cao/', canViewType: DocumentType.None},
                            { type: 'link', label: 'Số Xét Nghiệm Sàng Lọc Hiv', route: '/bao-cao/bao-cao-so-xet-nghiem-sang-loc-hiv', canViewType: DocumentType.BaoCaoSoXetNghiemSangLocHiv },
                            { type: 'link', label: 'Tổng Hợp Số Lượng Xét Nghiệm', route: '/bao-cao/bao-cao-tong-hop-so-luong-xet-nghiem', canViewType: DocumentType.BaoCaoTongHopSoLuongXetNghiem },
                            { type: 'link', label: 'Người Bệnh Làm Xét Nghiệm', route: '/bao-cao/bao-cao-benh-nhan-lam-xet-nghiem', canViewType: DocumentType.BaoCaoBenhNhanLamXetNghiem },
                            { type: 'link', label: 'Tiếp Nhận Bệnh Phẩm', route: '/bao-cao/bao-cao-tiep-nhan-benh-pham', canViewType: DocumentType.BaoCaoTiepNhanBenhPham },
                            { type: 'link', label: 'Tồn Kho', route: '/bao-cao/bao-cao-ton-kho-xn', canViewType: DocumentType.BaoCaoTonKhoXN },
                     
                            { type: 'link', label: 'Xuất Nhập Tồn Kho Xét Nghiệm', route: '/bao-cao/xuat-nhap-ton-kho-xet-nghiem', canViewType: DocumentType.BaoCaoXNXuatNhapTonKhoXetNghiem },
                            { type: 'link', label: 'Phiếu Nhập Hoá Chất Xét Nghiệm', route: '/bao-cao/phieu-nhap-hoa-chat-xet-nghiem', canViewType: DocumentType.BaoCaoXNPhieuNhapHoaChat },
                            { type: 'link', label: 'Phiếu Xuất Hóa Chất Xét Nghiệm', route: '/bao-cao/phieu-xuat-hoa-chat-xet-nghiem', canViewType: DocumentType.BaoCaoXNPhieuXuatHoaChat },
          
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Lễ Tân - Thu Ngân', icon: icList,
                        children: [
                            { type: 'link', label: 'Viện Phí Thu Tiền', route: '/bao-cao/bao-cao-thu-tien-vien-phi', canViewType: DocumentType.BaoCaoDanhSachThuTienVienPhi },
                            { type: 'link', label: 'Tiếp Nhận Người Bệnh Khám', route: '/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham', canViewType: DocumentType.BaoCaoTiepNhanBenhNhanKham },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Kế Toán', icon: icList,
                        children: [
                            { type: 'link', label: 'Doanh Thu Theo Nhóm Dịch Vụ', route: '/bao-cao/bao-cao-doanh-thu-dich-vu-theo-nhom-benh-vien', canViewType: DocumentType.BaoCaoDoanhThuTheoNhomDichVu },
                            { type: 'link', label: 'Kết Quả Khám Chữa Bệnh', route: '/bao-cao/', canViewType: DocumentType.None },
                            { type: 'link', label: 'Bảng Kê Chi Tiết TTCN', route: '/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn', canViewType: DocumentType.BaoCaoBangKeChiTietTTCN },
                            { type: 'link', label: 'Công Nợ Công Ty BHTN', route: '/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan', canViewType: DocumentType.BaoCaoCongNoCongTyBhtn },
                            { type: 'link', label: 'Tồn Kho', route: '/bao-cao/bao-cao-ton-kho-kt', canViewType: DocumentType.BaoCaoTonKhoKT },
                            { type: 'link', label: 'Chi Tiết Miễn Phí, Giảm Phí', route: '/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien', canViewType: DocumentType.BaoCaoChiTietMienPhiTronVien },
                            { type: 'link', label: 'Nhập Xuất Tồn', route: '/bao-cao/bao-cao-nhap-xuat-ton-kt', canViewType: DocumentType.BaoCaoNhapXuatTon },
                            { type: 'link', label: 'Nhập Xuất Tồn Chi Tiết', route: '/bao-cao/bao-cao-nhap-xuat-ton-chi-tiet-kt', canViewType: DocumentType.BaoCaoKTNhapXuatTonChiTiet },
                            { type: 'link', label: 'Biên Bản Kiểm Kê', route: '/bao-cao/bao-cao-bien-ban-kiem-ke-kt', canViewType: DocumentType.BaoCaoBienBanKiemKeKT },
                            { type: 'link', label: 'Bảng Kê Phiếu Xuất Kho', route: '/bao-cao/bao-cao-bang-ke-phieu-xuat-kho', canViewType: DocumentType.BaoCaoBangKePhieuXuatKho },
                            { type: 'link', label: 'Tình Hình Nhập Từ Nhà Cung Cấp', route: '/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc', canViewType: DocumentType.BaoCaoTinhHinhNhapTuNhaCungCap },
                            { type: 'link', label: 'Tổng Hợp Doanh Thu Thai Sản Đã Sinh', route: '/bao-cao/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh', canViewType: DocumentType.BaoCaoTongHopDoanhThuThaiSanDaSinh },
                            { type: 'link', label: 'Tổng Hợp Đăng Ký Gói Dịch Vụ', route: '/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu', canViewType: DocumentType.BaoCaoTongHopDangKyGoiDichVu },
                            { type: 'link', label: 'Sổ Chi Tiết Vật Tư Hàng Hóa', route: '/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa', canViewType: DocumentType.BaoCaoSoChiTietVatTuHangHoa },
                            { type: 'link', label: 'Doanh Thu Khám Đoàn Theo Nhóm DV (Cũ)', route: '/bao-cao/bao-cao-doanh-thu-kham-doan-theo-nhom-dv', canViewType: DocumentType.BaoCaoDoanhThuKhamDoanTheoNhomDV },
                            { type: 'link', label: 'Doanh Thu Khám Đoàn Theo Nhóm DV', route: '/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu', canViewType: DocumentType.BaoCaoDoanhThuKhamDoanTheoNhomDichVu },
                            { type: 'link', label: 'Doanh Thu Khám Đoàn Theo Khoa Phòng', route: '/bao-cao/bao-cao-doanh-thu-kham-doan-theo-khoa-phong', canViewType: DocumentType.BaoCaoDoanhThuKhamDoanTheoKP },
                            { type: 'link', label: 'Chi Tiết Hoa Hồng Của Người Giới Thiệu', route: '/bao-cao/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu', canViewType: DocumentType.BaoCaoChiTietHoaHongCuaNguoiGT },
                            { type: 'link', label: 'Bảng Thống Kê Các Dịch Vụ Chưa Lấy Lên Biên Lai Thu Tiền', route: '/bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien', canViewType: DocumentType.ThongKeCacDichVuChuaLayLenBienLaiThuTien },
                            { type: 'link', label: 'Tra cứu dữ liệu', route: '/bao-cao/bao-cao-tra-cuu-du-lieu', canViewType: DocumentType.BaoCaoTraCuuDuLieu },
                            { type: 'link', label: 'Báo Cáo Dịch Vụ Phát Sinh Ngoài Gói Của Kế Toán', route: '/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan', canViewType: DocumentType.BaoCaoDichVuPhatSinhNgoaiGoiCuaKeToan },
                            { type: 'link', label: 'Thu Viện Phí Chưa Hoàn', route: '/bao-cao/bao-cao-thu-vien-phi-chua-hoan', canViewType: DocumentType.BaoCaoThuVienPhiChuaHoan },
                            { type: 'link', label: 'Báo Cáo Kết Quả Khám Chữa Bệnh', route: '/bao-cao/bao-cao-ket-qua-kham-chua-benh-kt', canViewType: DocumentType.BaoCaoKetQuaKhamChuaBenhKT }
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Dược', icon: icList,
                        children: [
                            { type: 'link', label: 'Xuất Nhập Tồn', route: '/bao-cao/bao-cao-xuat-nhap-ton', canViewType: DocumentType.BaoCaoXuatNhapTon },
                            { type: 'link', label: 'Doanh Thu Nhà Thuốc', route: '/bao-cao/doanh-thu-nha-thuoc', canViewType: DocumentType.BaoCaoDoanhThuNhaThuoc },
                            { type: 'link', label: 'Bảng Kê Xuất Thuốc Theo Bệnh Nhân', route: '/bao-cao/bang-ke-xuat-thuoc-theo-benh-nhan', canViewType: DocumentType.BaoCaoBangKeXuatThuocTheoBenhNhan },
                            { type: 'link', label: 'Chi Tiết Xuất Nội Bộ', route: '/bao-cao/bao-cao-chi-tiet-xuat-noi-bo', canViewType: DocumentType.BaoCaoDuocChiTietXuatNoiBo },
                            { type: 'link', label: 'Tình Hình Xuất Nội Bộ', route: '/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo', canViewType: DocumentType.BaoCaoDuocTinhHinhXuatNoiBo },
                            { type: 'link', label: 'Thuốc Sắp Hết Hạn Dùng', route: '/bao-cao/bao-cao-thuoc-sap-het-han-dung', canViewType: DocumentType.BaoCaoThuocSapHetHanDung },
                            { type: 'link', label: 'Thẻ Kho', route: '/bao-cao/bao-cao-the-kho', canViewType: DocumentType.BaoCaoTheKho },
                            { type: 'link', label: 'Tồn Kho', route: '/bao-cao/bao-cao-ton-kho', canViewType: DocumentType.BaoCaoTonKho },
                            { type: 'link', label: 'Tình Hình Nhập Nhà Cung Cấp Chi Tiết', route: '/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet', canViewType: DocumentType.BaoCaoTinhHinhNhapNCCChiTiet },
                            { type: 'link', label: 'Tình Hình Trả Nhà Cung Cấp', route: '/bao-cao/bao-cao-tinh-hinh-tra-ncc', canViewType: DocumentType.BaoCaoTinhHinhTraNCC },
                            { type: 'link', label: 'Thống Kê Thuốc Theo Bác Sĩ', route: '/bao-cao/thong-ke-thuoc-theo-bac-si', canViewType: DocumentType.ThongKeThuocTheoBacSi },
                            { type: 'link', label: 'Thống Kê Bác Sĩ Kê Đơn Theo Thuốc', route: '/bao-cao/thong-ke-bac-si-ke-don-theo-thuoc', canViewType: DocumentType.ThongKeBSKeDonTheoThuoc },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Vật Tư', icon: icList,
                        children: [
                            { type: 'link', label: 'Xuất Nhập Tồn', route: '/bao-cao/bao-cao-xuat-nhap-ton-vt', canViewType: DocumentType.BaoCaoXNTVatTu },
                            { type: 'link', label: 'Thẻ Kho', route: '/bao-cao/bao-cao-the-kho-vt', canViewType: DocumentType.BaoCaoTheKhoVatTuYTe },
                            { type: 'link', label: 'Tồn Kho', route: '/bao-cao/bao-cao-ton-kho-vt', canViewType: DocumentType.BaoCaoTonKhoVatTuYTe },
                            //{ type: 'link', label: 'Xuất Nhập Tồn',  route: '/bao-cao/bao-cao-xuat-nhap-ton-vt', canViewType: DocumentType.BaoCaoXNTVatTu},
                        ]
                    },
                    {
                        type: 'dropdown', label: 'BKTH', icon: icList,
                        children: [
                            //{ type: 'link', label: 'Lưu Trữ Hồ Sơ Bệnh Án', route: '/bao-cao/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an', canViewType: DocumentType.BaoCaoLuuTruHoSoBenhAn },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Bác Sĩ', icon: icList,
                        children: [
                            { type: 'link', label: 'Người Bệnh Khám Ngoại Trú', route: '/bao-cao/bao-cao-benh-nhan-kham-ngoai-tru', canViewType: DocumentType.BaoCaoBenhNhanKhamNgoaiTru },


                        ]
                    },
                    {
                        type: 'dropdown', label: 'Phẫu Thuật', icon: icList,
                        children: [
                            { type: 'link', label: 'Số Lượng Thủ Thuật', route: '/bao-cao/bao-cao-so-luong-thu-thuat', canViewType: DocumentType.BaoCaoSoLuongThuThuat },
                            { type: 'link', label: 'Sổ Phúc Trình Phẫu Thuật/Thủ Thuật', route: '/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat', canViewType: DocumentType.BaoCaoSoPhucTrinhPhauThuatThuThuat },
                            //{ type: 'link', label: 'Danh Sách Người Bệnh Phẫu Thuật',  route: '/bao-cao/danh-sach-benh-nhan-phau-thuat', canViewType: DocumentType.DanhSachBenhNhanPhauThuat},
                        ]
                    },
                    {
                        type: 'dropdown', label: 'CLS', icon: icList,
                        children: [
                            { type: 'link', label: 'Bác Sĩ Thực Hiện CLS', route: '/bao-cao/bao-cao-bac-si-thuc-hien-cls', canViewType: DocumentType.BaoCaoThucHienCls },
                            { type: 'link', label: 'Hoạt Động CLS Theo Khoa', route: '/bao-cao/bao-cao-hoat-dong-cls-theo-khoa', canViewType: DocumentType.BaoCaoHoatDongClsTheoKhoa },
                            { type: 'link', label: 'Sổ Thống Kê CLS', route: '/bao-cao/bao-cao-so-thong-ke-cls', canViewType: DocumentType.BaoCaoSoThongKeCls },
                            { type: 'link', label: 'Dịch Vụ Đã Thực Hiện', route: '/bao-cao/bao-cao-dich-vu-tia-plasma-ho-tro-vet-thuong', canViewType: DocumentType.BaoCaoDichVuTiaPlasMaHoTroDieuTriVetThuong }
                        ]
                    },
                    {
                        type: 'dropdown', label: 'BSK', icon: icList,
                        children: [
                            //{ type: 'link', label: 'Người Bệnh Khám Ngoại Trú',  route: '/bao-cao/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru', canViewType: DocumentType.BaoCaoBSDanhSachKhamNgoaiTru},
                        ]
                    },
                    {
                        type: 'dropdown', label: 'KHTH', icon: icList,
                        children: [
                            { type: 'link', label: 'Hoạt Động Khoa Khám Bệnh', route: '/bao-cao/bao-cao-hoat-dong-khoa-kham-benh', canViewType: DocumentType.BaoCaoHoatDongKhoaKhamBenh },
                            { type: 'link', label: 'Lưu Trữ Hồ Sơ Bệnh Án', route: '/bao-cao/bao-cao-luu-tru-benh-an', canViewType: DocumentType.BaoCaoLuuTruHoSoBenhAn },
                            { type: 'link', label: 'Hoạt Động Cận Lâm Sàng', route: '/bao-cao/bao-cao-hoat-dong-cls', canViewType: DocumentType.BaoCaoHoatDongCls },
                            { type: 'link', label: 'Hoạt Động Nội Trú', route: '/bao-cao/bao-cao-hoat-dong-noi-tru', canViewType: DocumentType.BaoCaoHoatDongNoiTru },
                            { type: 'link', label: 'Bảng thống kê tiếp nhận nội trú,ngoại trú', route: '/bao-cao/bang-thong-ke-tiep-nhan-noi-tru-ngoai-tru', canViewType: DocumentType.BangThongKeTiepNhanNoiTruVaNgoaiTru },
                           { type: 'link', label: 'Hoạt Động Khám Bệnh Theo Dịch Vụ',  route: '/bao-cao/bao-cao-hoat-dong-kham-benh-theo-dich-vu', canViewType: DocumentType.BaoCaoHoatDongKhamBenhTheoDichVu},
                           { type: 'link', label: 'Hoạt Động Khám Bệnh Theo Khoa Phòng',  route: '/bao-cao/bao-cao-hoat-dong-kham-benh-theo-khoa-phong', canViewType: DocumentType.BaoCaoHoatDongKhamBenhTheoKhoaPhong},
                           { type: 'link', label: 'Báo Cáo Hoạt Động Nội Trú Chi Tiết',  route: '/bao-cao/bao-cao-hoat-dong-noi-tru-chi-tiet', canViewType: DocumentType.BaoCaoHoatDongNoiTruChiTiet},
                           { type: 'link', label: 'Tình Hình Bệnh Tật Tử Vong ',  route: '/bao-cao/tinh-hinh-benh-tat-tu-vong', canViewType: DocumentType.BaoCaoTinhHinhBenhTatTuVong},
                                                ]
                        //BẢNG THỐNG KÊ TIẾP NHẬN NỘI TRÚ, NGOẠI TRÚ
                    },
                    {
                        type: 'dropdown', label: 'DP-VT', icon: icList,
                        children: [
                            { type: 'link', label: 'Bảng Kê Giao Hóa Đơn Sang PKT', route: '/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt', canViewType: DocumentType.BaoCaoBangKeGiaoHoaDonSangPKT },
                            { type: 'link', label: 'Biên Bản Kiểm Kê', route: '/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt', canViewType: DocumentType.BaoCaoBienBanKiemKeDuocVT },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'CSKH', icon: icList,
                        children: [


                            { type: 'link', label: 'Báo Cáo Bệnh Nhân Ra Viện Nội Trú', route: '/bao-cao/bao-cao-benh-nhan-ra-vien-noi-tru', canViewType: DocumentType.BaoCaoBenhNhanRaVienNoiTru },
                            { type: 'link', label: 'Người Bệnh Đến Khám', route: '/bao-cao/bao-cao-nguoi-benh-den-kham', canViewType: DocumentType.BaoCaoNguoiBenhDenKham },
                            { type: 'link', label: 'Người Bệnh Đến Làm DVKT', route: '/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt', canViewType: DocumentType.BaoCaoNguoiBenhDenLamDVKT },
                        ]
                    },
                    {
                        type: 'dropdown', label: 'Kinh Doanh', icon: icList,
                        children: [
                            { type: 'link', label: 'Tổng Hợp Công Nợ Chưa Thanh Toán', route: '/bao-cao/bao-cao-tong-hop-cong-no-chua-thanh-toan', canViewType: DocumentType.BaoCaoTongHopCongNoChuaThanhToan },
                            { type: 'link', label: 'Bảng Kê Chi Tiết Theo Người Bệnh', route: '/bao-cao/bang-ke-chi-tiet-theo-nguoi-benh', canViewType: DocumentType.BaoCaoBangKeChiTietTheoNguoiBenh },
                        ]
                    },

                    { type: 'link', label: 'Hiệu Quả Công Việc', route: '/bao-cao/bao-cao-hieu-qua-cong-viec', canViewType: DocumentType.BaoCaoHieuQuaCongViec },
                    // { type: 'link', label: 'Thu Tiền Viện Phí Người Bệnh', route: '/bao-cao/bao-cao-chi-tiet-tien-vien-phi-benh-nhan', canViewType: DocumentType.BaoCaoThuVienPhiBenhNhan },                    
                    // { type: 'link', label: 'Tổng Hợp D.Thu Khoa/Phòng', route: '/bao-cao/bao-cao-tong-hop-doanh-thu-theo-khoa-phong', canViewType: DocumentType.BaoCaoTongHopDoanhThuTheoKhoaPhong },
                    // { type: 'link', label: 'Chi Tiết D.Thu Khoa/Phòng', route: '/bao-cao/bao-cao-chi-tiet-doanh-thu-theo-khoa-phong', canViewType: DocumentType.BaoCaoChiTietDoanhThuTheoKhoaPhong },
                    // { type: 'link', label: 'Chi Tiết Doanh Thu Bác Sĩ', route: '/bao-cao/bao-cao-chi-tiet-doanh-thu-theo-bac-si', canViewType: DocumentType.BaoCaoChiTietDoanhThuTheoBacSi },
                    // { type: 'link', label: 'Tổng Hợp Doanh Thu Bác Sĩ', route: '/bao-cao/bao-cao-tong-hop-doanh-thu-theo-bac-si', canViewType: DocumentType.BaoCaoTongHopDoanhThuTheoBacSi }

                    { type: 'link', label: 'Cam kết tự nguyện sử dụng thuốc - dv ngoài BHYT', route: '/bao-cao/bao-cao-cam-ket-tu-nguyen-su-dung-thuoc-dv-ngoai-bhyt', canViewType: DocumentType.BaoCaoCamKetSuDungThuocNgoaiBHYT },
                    { type: 'link', label: 'Số liệu thời gian sử dụng DV của khách hàng', route: '/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh', canViewType: DocumentType.BaoCaoSoLieuThoiGianSuDungDV },
                ]
            },
            {
                type: 'dropdown', label: 'Nhật Ký Hệ Thống', icon: icHistory,
                children: [
                    { type: 'link', label: 'Lịch Sử Hoạt Động', route: '/bao-cao/nhat-ky-he-thong/lich-su-hoat-dong', canViewType: DocumentType.QuanLyNhatKyHeThong },
                    { type: 'link', label: 'Lịch Sử Gửi Thông Báo', route: '/bao-cao/nhat-ky-he-thong/lich-su-goi-thong-bao', canViewType: DocumentType.QuanLyLichSuThongBao },
                    { type: 'link', label: 'Lịch Sử Gửi Email', route: '/bao-cao/nhat-ky-he-thong/lich-su-goi-email', canViewType: DocumentType.QuanLyLichSuEmail },
                    { type: 'link', label: 'Lịch Sử Gửi SMS', route: '/bao-cao/nhat-ky-he-thong/lich-su-goi-sms', canViewType: DocumentType.QuanLyLichSuSMS },

                ]
            },
            // {
            //     type: 'dropdown', label: 'Báo Cáo Kết Quả Khám Chữa Bệnh', icon: icMoney,
            //     children: [
            //         { type: 'link', label: 'Kết Quả Khám Chữa Bệnh', route: '/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh', canViewType: DocumentType.BaoCaoBSDanhSachKhamNgoaiTru }
            //     ]
            // },
            // {
            //     type: 'dropdown', label: 'Báo Cáo Thống Kê Đơn Thuốc', icon: icMoney,
            //     children: [
            //         { type: 'link', label: 'Thống Kê Đơn Thuốc', route: '/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke', canViewType: DocumentType.BaoCaoThongKeDonThuoc }
            //     ]
            // },
        ]
    }
];
