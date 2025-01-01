export enum SystemMessage {
    ActionSuccessfully = '{0} thành công.',
    ActionUnsuccessfully = '{0} không thành công.',
    ObjectRequirement = '{0} yêu cầu nhập.',
    ObjectNotMacth = '{0} không giống.',
    ObjectIncorrect = '{0} không đúng.',
    GeneralExceptionMessageText =
    // tslint:disable-next-line: max-line-length
    'Có một ngoại lệ không mong muốn đã xảy ra trong hệ thống, vui lòng liên hệ với quản trị viên hệ thống của bạn và chuyển thông tin có trong thông báo này.',
    UnAuthorizedMessage = 'Bạn không được quyền thực hiện trên chức năng này.',
    Error404 = '404: Xin lỗi chúng tôi không thể tìm thấy trang này.',
    ErrorLogin = 'Tên đăng nhập hoặc mật khẩu không đúng.',
    LoginRequired = 'Tên đăng nhập và Mật khẩu yêu cầu nhập.',
    InvalidFiles = 'File không đúng. Bạn hãy xem lại yêu cầu chổ này.',
    InvalidPassCode = 'Mã code nhập chưa đủ 6 số.',
    ResendPassCodeTime = 'Bạn phải đợi đủ 5 phút mới gửi lại.',
    InvalidFileExtension = 'Loại file này không được phép tải lên. Những loại được phép tải lên {0}.',
    InvalidMaxFileSize = 'Kích thước file quá lớn. Kích thước file không được lớn hơn {0}MB.',
    InvalidMinFileSize = 'Kích thước file quá nhỏ. Kích thước file phải lớn hơn {0}MB.',
    MessConfirm = 'Bạn có chắc chắn muốn {0} dữ liệu này không?',
    MessConfirmGoiKhamBenh = 'Bạn có chắc chắn muốn {0} tất cả gói khám bệnh không?',
    MessConfirmGoiKyThuat = 'Bạn có chắc chắn muốn {0} tất cả gói kỹ thuật không?',
    MessConfirmGoiVatTu = 'Bạn có chắc chắn muốn {0} tất cả gói vật tư không?',
    MessConfirmGoiDuocPham = 'Bạn có chắc chắn muốn {0} tất cả gói dược phẩm không?',
    MessConfirmGoiGiuong = 'Bạn có chắc chắn muốn {0} tất cả gói giường không?',
    MessConfirmDeleteAll = 'Bạn có chắc chắn muốn {0} dữ liệu hợp đồng thầu chi tiết không?',
    MessComfirmChildren =
    'Bạn có chắc chắn muốn {0} triệu chứng này không? (Nếu có thì tất cả triệu chứng con của triệu chứng này cũng xóa theo)',
    MessComfirmChildrenLyDoTiepNhan = 'Bạn có chắc chắn muốn {0} {1} này không? (Nếu có thì tất cả {1} con của {1} này cũng xóa theo)',
    MessLockAccount = 'Bạn có chắc muốn {0} tài khoản này không?',
    MessLockTemplate = 'Bạn có chắc muốn {0} {1} này không?',
    MessLockCalendar = 'Bạn có chắc muốn {0} {1} hay không?',
    ObjectRequirementUpdate = 'Yêu cầu nhập số điện thoại hoặc email',
    MedicineExists = 'Dược phẩm <strong>{0}</strong> bị trùng với đơn thuốc của BS khác.',
    MedicinThan7Or30Days = 'Số ngày sử dụng thuốc <strong>{0}</strong> vượt quá {1} ngày.',
}

export enum LapPhiMessage {
    MessageConfirmDaLapPhi = 'Bạn chắc chắn đồng ý gửi bảng phí thẻ xe cho {0} không?',
    MessageConfirmDaLapPhiForMorePeople = 'Bạn chắc chắn đồng ý gửi bảng phí thẻ xe cho những cá nhân đang chọn hay không?'
}

export enum GoiLaiPhiMessage {
    MessageConfirmGoiLaiPhi = 'Bạn chắc chắn đồng ý gửi lại bảng phí thẻ xe cho {0} không?',
    MessageConfirmGoiLaiPhiMorePeople = 'Bạn chắc chắn đồng ý gửi lại bảng phí thẻ xe cho những khách thuê đang chọn hay không?'
}

export enum ChuyenGiaXeMessage {
    MessageChuyenGiaThanhCong = 'Áp dụng thành công'
}

export enum NhapKhoMessage {
    MessageLuuVaGoiDuyet = 'Bạn có chắc chắn muốn gửi lại phê duyệt cho lần nhập kho này không?'
}

export enum TiepNhanBenhNhanMessage {
    MessageErrorMustHaveOneDVGoi = "Phải chọn ít nhất một dịch vụ",
    MessageErrorDVOnGoi = "Số lượng sử dụng dịch vụ đã được cập nhật vui lòng làm mới trang",

    MessageConfirmThemVaoGoi = 'Dịch vụ {0} hiện tại đang có trong gói {1} của người bệnh {2}. Bạn có muốn sử dụng DV này trong gói hay không?',

    MessageDaTaoYCTN =
    'Người bệnh này trong ngày hôm nay đã có yêu cầu tiếp nhân, bạn có muốn chuyển sang cập nhật yêu cầu tiếp nhận này không?',
    MessageDangKyTiepTheo = 'Bạn có muốn chuyển qua trang thanh toán cho người bệnh này hay không?',
    MessageSaiThongTinBenhNhan = 'Thông tin bảo hiểm y tế bệnh nhân sai, xin vui lòng thử lại',
    MessageBHTNCongNo = 'Công ty này đang có công nợ, không thể xóa',
    MessageBHTNCongNoCapNhat = 'Công ty này đang có công nợ, không thể cập nhật',
    MessagePhaiChonNoiThucHien = 'Nơi thực hiện không được để trống, vui lòng chọn',

    MessageThemBHTN = 'Công ty này đã được chọn',

    MessageGoiTonTai = 'Gói dịch vụ này đã được chọn',
    MessageDichVuTrongGoiTonTai = 'Một dịch vụ trong gói dịch vụ đã được chọn',
    MessageDichVuTonTai = 'Dịch vụ này đã được chọn',

    MessagePhaiChonLoaiGia = 'Loại giá không được để trống, vui lòng chọn',

    MessagePhaiChonSoLuong = 'Số lượng không được để trống, vui lòng chọn',

    MessageBHYTThayDoi = 'Thông tin BHYT đã được thay đổi, vui lòng bấm lưu trước khi thêm dịch vụ',

    MessageRemoveDichVuSuccessfully = 'Xóa dịch vụ thành công',

    MessageConfirmRemoveGoi = 'Bạn muốn sử dụng DV tiếp hay không?',
}
export enum XuatKhoMessage {
    MessageUpdateValidate = 'Dược phẩm này đã được xuất không được sửa',
    MessageDeleteValidate = 'Dược phẩm này đã được xuất không được xóa'
}

export enum TaiKhoanNguoiDungMessage {
    MessageChange = 'Bạn chắc chắn muốn {0} cho tài khoản này không?',
    MessageChangeSuccessfully = '{0} thành công',

    MessageDontRemove = 'Không được xóa tài khoản đang sử dụng'
}

export enum DuyetBhytMessage {
    MessageNotAllowNull = 'Mức hưởng của dịch vụ này yêu cầu nhập.',
    MessageNotEqualZero = 'Mức hưởng của dịch vụ này yêu cầu không được bằng 0.',
    MessageLessThan100 =
    // tslint:disable-next-line: max-line-length
    'Tổng chi phí được hưởng BHYT của người bệnh này đang nhỏ hơn <strong>15%</strong> so với lương cơ sở nhưng có một hoặc một số dịch vụ đang được hưởng nhỏ hơn <strong>100%</strong>. Bạn có muốn thay đổi mức hưởng thành <strong>100%</strong> hay không?',
    MessageGreaterThanCurrent =
    // tslint:disable-next-line: max-line-length
    'Tổng chi phí được hưởng BHYT của người bệnh này đang lớn hơn <strong>15%</strong> so với lương cơ sở nhưng có một hoặc một số dịch vụ đang được hưởng lớn hơn <strong>{0}%</strong>. Bạn có muốn thay đổi mức hưởng thành <strong>{0}%</strong> hay không?',
    MessageNotAllowModifyDaThanhToan = 'Dịch vụ này đã thanh toán nên không thể chỉnh sửa được',
    BlueColorRow = 'bg-row-lightblue',
    MessageErrorMoveValidKhamBenh =
    'Không thể chỉ định! Dịch vụ khám bệnh này mà bạn đang chỉ định cho hưởng bảo hiểm đang vượt quá lần khám thử 5!',
    MessageSpecifyPhong = 'DV này đã được chỉ định trong ngày bởi phòng {0} - BS: {1}',
    MessageSpecifyMucHuongDaDuyet = 'Mức hưởng đã được duyệt: {0} %',
    MessageLoiKoXn = 'Không có bảo hiểm nào đang chờ duyệt!',
    MessageXnThanhCong = 'Đã xác nhận bảo hiểm thành công!',
    MessageHuyDuyetThanhCong = 'Đã xác nhận hủy duyệt bảo hiểm thành công!',
    MessageNotEmptyBhyt = 'Phải có ít nhất một dịch vụ để được hưởng bảo hiểm!'
}

export enum HopDongThauVatTuMessage {
    MessageNhaThauNotEmpty = 'Yêu cầu chọn Nhà Cung Cấp.',
    MessageSoHopDongNotEmpty = 'Số hợp đồng yêu cầu nhập.',
    MessageSoQuyetDinhNotEmpty = 'Số quyết định yêu cầu nhập.',
    MessageCongBoNotEmpty = 'Ngày công bố yêu cầu chọn.',
    MessageNgayKyNotEmpty = 'Ngày ký yêu cầu chọn.',
    MessageNgayHieuLucNotEmpty = 'Ngày hiệu lực yêu cầu chọn.',
    MessageNgayHetHanNotEmpty = 'Ngày hết hạn yêu cầu chọn.',
    MessageNgayHetHanNotValid = 'Chọn ngày hết hạn không hợp lệ. Ngày hết hạn yêu cầu phải lớn hơn ngày hôm nay. Hãy chọn lại.',
    MessageNamNotEmpty = 'Năm yêu cầu chọn.',
    MessageLoaiThauNotEmpty = 'Loại thầu yêu cầu chọn.',
    MessageNhomThauNotEmpty = 'Nhóm thầu yêu cầu nhập.',
    MessageGoiThauNotEmpty = 'Gói thầu thầu yêu cầu nhập.'
}

export enum DinhMucVatTuTonKhoMessage {
    MessageKhoNotEmpty = 'Kho yêu cầu chọn',
    MessageVatTuNotEmpty = 'Vật tư yêu cầu chọn'
}

export enum PtttMessage {
    MessageCdTruocPhauThuatNotAllowNull = 'Chẩn đoán trước phẫu thuật yêu cầu nhập',
    MessageChucDanhNotAllowNull = 'Chức danh yêu cầu nhập',
    MessageHoTenNotAllowNull = 'Họ tên yêu cầu nhập',
    MessageTgTuVongNotAllowNull = 'Thời gian tử vong yêu cầu nhập',
    MessageTuVongNotAllowNull = 'Trạng thái tử vong yêu cầu nhập',
    MessageVaiTroNotAllowNull = 'Vai trò yêu cầu nhập',
    MessageEkipEmpty = 'Ekip yêu cầu nhập',
    MessageNotPhauThuatVienChinh = 'Phải có một vai trò phẫu thuật viên chính trong ekip',
    MessageDuyNhatPhauThuatVienChinh = 'Chỉ có duy nhất một nhân viên với vai trò phẫu thuật viên chính',
    UrlVaiTroBsi = 'GetListVaiTroBacSi',
    UrlVaiTroDd = 'GetListVaiTroDieuDuong',
    MessageSaveEkipThanhCong = 'Đã lưu ekip thực hiện thành công',
    MessageSaveTuongTrinhThanhCong = 'Đã lưu tường trình thành công',
    MessageConfirmTuVong = 'Bạn có chắc chắn xác nhận người bệnh đã tử vong?',
    MessageConfirmSaveEkip = 'Bạn có chắc chắn xác nhận lưu thông tin ekip cho dịch vụ pt/tt này không?',
    MessageConfirmResetEkip = 'Bạn có chắc chắn xác nhận hủy thông tin ekip cho dịch vụ pt/tt này không?',
    MessageConfirmSaveTuongTrinh = 'Bạn có chắc chắn xác nhận lưu thông tin tường trình cho dịch vụ pt/tt này không?',
    MessageConfirmResetTuongTrinh = 'Bạn có chắc chắn xác nhận hủy thông tin tường trình cho dịch vụ pt/tt này không?',
    MessageConfirmSaveCsst = 'Bạn có chắc chắn xác nhận lưu thông tin chỉ số sinh tồn này không?',
    MessageConfirmResetCsst = 'Bạn có chắc chắn xác nhận hủy thông tin chỉ số sinh tồn này không?',
    MessageSaveTuongTrinhTuVongThanhCong = 'Đã lưu tường trình tử vong cho người bệnh',
    MessageSaveSinhHieuThanhCong = 'Đã lưu chỉ số sinh tồn cho người bệnh',
    MessageDeleteSinhHieuThanhCong = 'Đã xóa chỉ số sinh tồn thành công',
    MessageBlockingSaveSinhHieu = 'Phải có ít nhất 1 thông tin trong dòng chỉ số sinh tồn hiện tại được nhập',
    MessageBlockingSaveModelSinhHieu = 'Đang tồn tại 1 vài dòng chỉ số sinh tồn mà không có thông tin nào được nhập',
    MessageKetThucTuongTrinhThanhCong = 'Đã kết thúc tường trình pt/tt cho dịch vụ này',
    MessageKetThucTuongTrinhDisplayPopup = 'Bạn có muốn kết thúc tường trình cho pt/tt này không?',
    MessageKetThucTuongTrinhDisplayConfirmPopup = 'Bạn có chắc chắn muốn kết thúc tường trình cho pt/tt này không?',
    MessageKhongThucHienPtttDisplayPopup = 'Bạn có muốn xác nhận không thực hiện tường trình cho dịch vụ pt/tt này không?',
    MessageKhongThucHienPtttDisplayComfirmPopup = 'Bạn có chắc chắn không thực hiện tường trình cho dịch vụ pt/tt này không?',
    MessageKhongThucHienPtttThanhCong = 'Đã xác nhận không thực hiện tường trình cho pt/tt này',
    MessageGhiChuEmpty = 'Lý do không thực hiện pt/tt bắt buộc nhập',
    MessageGhiChuLess4000 = 'Lý do không thực hiện pt/tt bắt buộc nhập dưới 4000 ký tự trở xuống',
    MessageChuyenTabKetLuan = 'Người bệnh đã tường trình đầy đủ pt/tt. Bạn có muốn chuyển sang tab Kết luận không?',
    MessageCLSChuaThucHien = 'Chỉ được xoá YCDVKT chưa thực hiện',
    MessageCLSNhanVienTaoYeuCauDichVuKyThuat = 'Không được xoá YCDVKT của nhân viên khác',
    MessageCLSDaThanhToan = 'Không được xoá YCDVKT đã thanh toán',
    MessageCLSLichSuChuaHoanThanh = 'YCDVKT chưa thực hiện xong',
    MessageSameBacSiNotAllow = 'Bác sĩ này đang trùng',
    MessageSameDieuDuongNotAllow = 'Điều dưỡng này đang trùng',
    MessageChuyenTabKetLuanQuaTheoDoi = 'Người bệnh hiện đang được theo dõi. Bạn có muốn chuyển sang tab Theo dõi không?',
    MessageSaveDataTabCLSRequired = 'Yêu cầu lưu dữ liệu trong tab cận lâm sàng',
    MessageSaveDataTabKetLuanRequired = 'Yêu cầu lưu dữ liệu trong tab kết luận',
    MessageSaveDataTabTheoDoiRequired = 'Yêu cầu lưu dữ liệu trong tab theo dõi',
    MessageSaveDataTabTheoDoiChiSoSinhTonRequired = 'Yêu cầu lưu chỉ số sinh tồn trong tab theo dõi'
}

export enum DuocPhamBenhVienPhanNhomMessage {
    MessageTenNotEmpty = 'Tên yêu cầu nhập',
    MessageChiDinhSelf = 'Không được chỉ định vào chính dược phẩm hiện tại'
}

export enum KhoDuocPhamVtytMessage {
    MessageTenNotEmpty = 'Tên yêu cầu nhập',
    MessageLoaiNotEmpty = 'Loại yêu cầu nhập',
    MessageTenNvNotEmpty = 'Nhân viên yêu cầu chọn',
    MessageKhoaNotEmpty = 'Khoa yêu cầu chọn'
}

export enum NhapXuatKhoMessage {
    MessageRemoveItemGrid = 'Xóa thành công',

    MessageTonTaiNhaThauDuocPham =
    'Nhà thầu đã nhập dược phẩm này',
    MessageGiaNhapMustMoreThan = 'Giá nhập không được thấp hơn giá trên HĐ',
    MessageTonTaiNhaThauVatTu =
    'Nhà thầu đã nhập vật tư này',
    MessageConfirmKhoXuatChange = "Bạn có chắc muốn đổi kho xuất này không?"
}

export enum HoanTraDuocPhamVatTuMessage {
    MessageXacNhanDuyetHoanTraDuocPham = "Bạn có chắc chắn phê duyệt cho lần yêu cầu hoàn trả thuốc này không?",
    MessageXacNhanDuyetHoanTraVatTu = "Bạn có chắc chắn phê duyệt cho lần yêu cầu hoàn trả vật tư này không?"
}

export enum GoiDv {
    MessageTenGoiNotNull = 'Tên gói yêu cầu nhập',
    SuDungNotNull = 'Sử dụng yêu cầu chọn',
    MessageTenDvNotNull = 'Tên dịch vụ yêu cầu nhập',
    SoLuongNotNull = 'Số lượng yêu cầu nhập',
    MessageDvTrongGoiNotEmpty = 'Dịch vụ trong gói yêu cầu có ít nhất 1 dịch vụ'
}

export enum GoiDvMarketing {
    MessageMaCtNotNull = 'Mã chương trình yêu cầu nhập',
    MessageTenCtNotNull = 'Tên chương trình yêu cầu nhập',
    MessageGoiDvNotNull = 'Gói dịch vụ yêu cầu chọn',
    MessageTiLeCkNotNull = 'Tỉ lệ chiết khấu yêu cầu nhập',
    MessageTuNgayNotNull = 'Từ ngày yêu cầu chọn',
    MessageTuNgayNotAllowGreaterThanDenNgay = 'Đến ngày không được nhỏ hơn từ ngày',
    MessageTuNgayNotAllowGreaterThanCurrentTime = 'Đến ngày không được nhỏ hơn ngày hiện tại',
    SoLuongNotNull = 'Số lượng yêu cầu nhập',
    DonGiaKhuyenMaiNotNull = 'Đơn giá KM yêu cầu nhập',
    SoNgaySuDungNotNull = 'Số ngày sử dụng yêu cầu nhập',
    DonGiaTruocChietKhauNotNull = 'Đơn giá trước CK yêu cầu nhập',
    DonGiaSauChietKhauNotNull = 'Đơn giá sau CK yêu cầu nhập',
    SoLuongNotAllowToGreaterThanSoLuongTon = 'Số lượng yêu cầu nhập không được lớn hơn số lượng tồn. Số lượng tồn hiện tại: {0}',
    MessageQuaTangKemNotEmpty = 'Quà tặng yêu cầu ít nhất 1 món'
}

export enum CongTyBhtnMessage {
    MessageMaNotNull = 'Mã yêu cầu nhập',
    MessageTenNotNull = 'Tên yêu cầu nhập',
    MessageDiaChiNotNull = 'Địa chỉ yêu cầu nhập',
    MessageSdtNotNull = 'Số điện thoại yêu cầu nhập',
    MessageHinhThucBaoHiemNotNull = 'Hình thức bảo hiểm yêu cầu chọn',
    MessagePhamViBaoHiemNotNull = 'Phạm vi bảo hiểm yêu cầu chọn'
}


export enum DangKyGoiMarketingMessage {
    MessageConfirmXuatQua = 'Bạn có chắc chắn muốn xuất hay không?',
    MessageDaXuat = 'Bạn đã xuất hết quà tặng có thể xuất được.',

    MessageDaNhanTien = 'Bạn có chắc chắn đã nhận tiền của tất cả các gói có trạng thái Đang chờ nhận tiền hay chưa?',
    MessageDaNhanTienChild = 'Bạn có chắc chắn đã nhận tiền của gói này hay chưa?',
    MessageDaNhanTienThanhCong = "Chuyển trạng thái thành công",
    MessageXoa = 'Bạn có chắc chắn muốn xóa tất cả gói dịch vụ của bênh nhân này hay không?',
    MessageXoaChild = 'Bạn có chắc chắn muốn xóa gói dịch vụ này của bênh nhân hay không?',
    MessageXoaThanhCong = "Xóa thành công",

    MessageDangSuDungChild = 'Bạn có chắc chắn xác nhận người bệnh đã sử dụng xong gói này rồi hay chưa?',

    MessageXuatQuaChild = 'Bạn có chắc chắn xuất quà cho gói này hay không?',
    MessageXuatQuaChildThanhCong = 'Xuất quà thành công',

    MessageXuatQuaChildError = 'Quà không đủ trong kho để xuất, vui lòng thử lại',
}

export enum VoucherMarketingMessage {
    MessageThongTinNotNull = 'Yêu cầu nhập thông tin voucher',
    MessageDichVuNotNull = 'Yêu cầu chọn ít nhất một dịch vụ',
    MessageNhomDichVuNotNull = 'Yêu cầu chọn ít nhất một nhóm dịch vụ',
    MessageTatCaDichVuNotNull = 'Yêu cầu nhập chiết khấu cho tất cả dịch vụ',
    MessageLoaiGiaNotNull = 'Loại giá yêu cầu chọn',
    MessageTiLeChietKhauNotNull = 'Tỉ lệ chiết khấu yêu cầu nhập',
    MessageSoTienChietKhauNotNull = 'Số tiền chiết khấu yêu cầu nhập',
    MessageSoTienChietKhauItNhat1000 = 'Số tiền chiết khấu ít nhất là 1,000',
    MessageTiLeChietKhauItNhat1 = 'Tỉ lệ chiết khấu ít nhất là 1%',
    MessageDichVuIsExisted = 'Dịch vụ đã được bao gồm trong nhóm dịch vụ',
    MessageDichVuIsExistedInList = 'Dịch vụ này đã có trong danh sách',
    MessageNhomDichVuIsExisted = 'Dịch vụ trong nhóm này đã được thêm',
    MessageNhomDichVuIsExistedInList = 'Nhóm dịch vụ này đã có trong danh sách',
    MessageNhomDichVuChaIsExistedInList = 'Đã có nhóm dịch vụ cha trong danh sách',
    MessageNhomDichVuConIsExistedInList = 'Đã có nhóm dịch vụ con trong danh sách',
    MessageDichVuRequired = 'Dịch vụ yêu cầu chọn.',
    MessageLoaiGiaRequired = 'Loại giá yêu cầu chọn.',
    MessageSoTienChietKhauRequired = 'Số tiền chiết khấu yêu cầu nhập.',
    MessageTiLeChietKhauRequired = 'Tỉ lệ chiết khấu yêu cầu nhập.',
    MessageSoTienChietKhauGreaterThanDonGiaRequired = 'Số tiền chiết khấu không được lớn hơn đơn giá.',
    MessageNhomDichVuRequired = 'Nhóm dịch vụ yêu cầu chọn.',
    MessageDonGiaNotNull = 'Không có đơn giá. Chọn lại dịch vụ hoặc loại giá.',
    MessageDonGiaGridNotNull = 'Không có đơn giá. Chọn lại loại giá.'
}

export enum DuTruGiamDocMessage {
    MessageApprove = 'Giám đốc đã duyệt dự trù này thành công',
    MessageDecline = 'Giám đốc đã từ chối dự trù này',
    MessageLyDoNotNull = 'Lý do yêu cầu nhập',
    MessageLyDoNotAllowNull = 'Lý do vẫn chưa nhập, yêu cầu nhập',
    SoLuongGiamDocNotAllowNull = 'Số lượng dự trù giám đốc duyệt yêu cầu nhập.',
    SoLuongGiamDocNotAllowZero = 'Số lượng dự trù giám đốc duyệt yêu cầu khác 0.',
}

export enum ThietBiXetNghiemMessage {
    MessageMaNotNull = 'Mã yêu cầu nhập',
    MessageTenNotNull = 'Tên yêu cầu nhập',
    MessageNhomThietBiNotNull = 'Nhóm thiết bị yêu cầu chọn',
    MessageNhomXetNghiemNotNull = 'Nhóm xét nghiệm yêu cầu chọn',
}

export enum KetQuaXetNghiemMessage {
    MessageGoiDuyet = 'Bạn có chắc chắn muốn gởi duyệt kết quả mẫu này không?',
    MessageLoadingPdf = 'Đang mở bản in...',
    MessageDownloadingExcel = 'Đang xuất excel...'
}

export enum ChiTietDieuTriMessage {
    MessageRemoveDate = 'Bạn có chắc chắn muốn xóa ngày điều trị {0} không?',

    MessageRemoveDateSuccess = 'Xóa ngày thành công',
    MessageAddDateSuccess = 'Tạo ngày thành công',

    MessageUpdatePhieuKhamSuccess = 'Lưu phiếu khám thành công',
    MessageConfirmSave = 'Bạn có muốn lưu các ngày điều trị mới chọn hay không ?',
    MessageConfirmCancel = 'Bạn có chắc chắn muốn hủy tạo ngày điều trị  không ?',


}

export enum CuringInfoAndServicesGeneralSheet {
    MessageNgayThucHienNotEmpty = 'Ngày thực hiện yêu cầu chọn',
    MessageBsDieuTriNotEmpty = 'Bác sĩ điều trị yêu cầu chọn'
}

export enum BienBanHoiChanPhauThuatMessage {
    MessageNgayHoiChanNotEmpty = 'Ngày hội chẩn yêu cầu chọn',
    MessageNgayThucHienNotEmpty = 'Ngày thực hiện yêu cầu chọn',
    MessageBsDieuTriNotEmpty = 'Bác sĩ điều trị yêu cầu chọn',
    MessageBsGayMeNotEmpty = 'Bác sĩ gây mê yêu cầu chọn',
    MessageBsTruongKhoaNotEmpty = 'Bác sĩ trưởng khoa yêu cầu chọn',
    MessageBsDuyetMoNotEmpty = 'Bác sĩ duyệt mổ yêu cầu chọn',
    MessageNotAllowDelete = 'Không được xóa biên bản này vì đang được chỉnh sửa. Hãy xóa biên bản khác',
    MessageConfirmDeletePhieu = 'Bạn có muốn xóa biên bản này không?',
    MessageConfirmDeleteThanhVienThamGia = 'Bạn có muốn xóa thành viên tham gia này không?',
    MessageConfirmDeleteChungSinh = 'Bạn có muốn xóa không?',
}

export enum BienBanCamKetPhauThuatMessage {
    MessageNgayThucHienNotEmpty = 'Ngày thực hiện yêu cầu chọn',
    MessageNgayHoiChanNotEmpty = 'Ngày hội chẩn yêu cầu chọn',
    MessageBsGiaiThichNotEmpty = 'Bác sĩ giải thích yêu cầu chọn',
    MessagePhuongPhapPtttNotEmpty = 'Phương pháp phẫu thuật thủ thuật yêu cầu chọn',
    MessageBsThucHienNotEmpty = 'Bác sĩ thực hiện yêu cầu chọn',
    MessageNgayThucHien = 'Ngày thực hiện không nhỏ hơn ngày hội chẩn',
    MessageConfirmDeleteThongTin = 'Bạn có muốn xóa thông tin người bệnh này không?',
    MessageConfirmNamSinhNotValue = 'Năm sinh không lớn hơn năm hiện tại'
}

export enum BangKiemAnToanPhauThuatMessage {
    MessageNgayKiemNotEmpty = 'Ngày kiểm yêu cầu chọn',
    MessageNgayKiemNotInvalid = 'Ngày kiểm không được lớn hơn ngày hiện tại'
}

export enum PhieuKhamGayMeTruocMoMessage {
    MessageNgayKhamNotEmpty = 'Ngày khám yêu cầu chọn',
    MessageNgayHenKhamNotEmpty = 'Ngày thăm lại trước mổ yêu cầu chọn',
    MessageDdThucHienNotEmpty = 'Điều dưỡng thực hiện yêu cầu nhập',
    MessageBsGmhsNotEmpty = 'Bác sĩ GMHS yêu cầu nhập'
}

export enum GiayCamKetKyThuatMoiMessage {
    MessageHoTenNotEmpty = 'Họ tên yêu cầu nhập',
    MessageNgayThucHienNotEmpty = 'Ngày thực hiện yêu cầu chọn',
    MessageNamSinhNotValue = 'Năm sinh không được lớn hơn năm hiện tại'
}

export enum GiayKhamChuaBenhTheoYcMessage {
    MessageHoTenNotEmpty = 'Họ tên yêu cầu nhập',
    MessageNamSinhNotEmpty = 'Năm sinh yêu cầu nhập',
    MessageGioiTinhNotEmpty = 'Giới tính yêu cầu chọn',
    MessageDiaChiNotEmpty = 'Địa chỉ yêu cầu nhập',
    MessageNgayThucHienNotEmpty = 'Ngày thực hiện yêu cầu chọn'
}

export enum BangTheoDoiHoiTinhMessage {
    MessageNgayThucHienNotEmpty = 'Ngày thực hiện yêu cầu chọn',
    MessageNotAllowDelete = 'Không được xóa phiếu theo dõi này vì đang được chỉnh sửa. Hãy xóa phiếu theo dõi khác',
    MessageConfirmDeletePhieu = 'Bạn có muốn xóa phiếu theo dõi này không?'
}

export enum DuyetTraTuBnMessage {
    MessageConfirmDelete = 'Bạn có chắc muốn xóa phiếu không?',
    MessageApprove = 'Đã duyệt thành công'
}

export enum TomTatHoSoBenhAnMessage {
    MessageNgayThucHienNotEmpty = 'Ngày thực hiện yêu cầu chọn'
}

export enum KhamDoanCongTyMessage {
    MessageMaNotNull = 'Mã yêu cầu nhập',
    MessageTenNotNull = 'Tên yêu cầu nhập',
    MessageDiaChiNotNull = 'Địa chỉ yêu cầu nhập',
    MessageSdtNotNull = 'Số điện thoại yêu cầu nhập',
    MessageNguoiDaiDienNotNull = 'Người đại diện yêu cầu nhập',
    MessageNguoiLienHeNotNull = 'Người liên hệ yêu cầu nhập',
    MessageCoHoatDongNotNull = 'Trạng thái yêu cầu chọn'
}

export enum YeuCauNhanSuMessage {
    MessageViTriLamViecNotNull = 'Vị trí LV yêu cầu nhập',
    MessageDoiTuongNotNull = 'Đối tượng yêu cầu chọn',
    MessageXnThanhCong = 'Đã gửi yêu cầu nhân sự thành công!',
    MessageCapNhatThanhCong = 'Đã cập nhật yêu cầu nhân sự thành công!',
    MessageCongTyNotNull = 'Tên công ty yêu cầu chọn',
    MessageHopDongNotNull = 'Hợp đồng yêu cầu chọn'
}
export enum GiayCamKetTuNguyenSuDungThuocMessage {
    MessageHoTenNotEmpty = 'Họ tên yêu cầu chọn',
}
