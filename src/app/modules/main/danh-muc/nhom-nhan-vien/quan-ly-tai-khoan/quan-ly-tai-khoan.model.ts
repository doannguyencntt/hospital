export class QuanLyTaiKhoan {
}

export class NhanVien {
    constructor(
        public NhanVienId: number = null,
        public HoTen: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public Password: number = null,
        public PasswordConfirm: number = null,

        public IsChangePassword: boolean = false,

        public roleCurrent: number[] = null,
        public roleNew: number[] = null,
     ) {
    }
}

export class TimNhanVienGridVo {
    constructor(
        public Id: number = null,
        public HoTen: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public Password: number = null,
        public PasswordConfirm: number = null,
        public GioiTinhDisplay: string = null,
        public GioiTinh: number = null
     ) {
    }
}

export class ThayDoiQuyen {
    constructor(
        public Id: number = null,
        public HoTen: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        
        public roleCurrent: number[] = null,
        public roleNew: number[] = null,
     ) {
    }
}

export class SearchTimNhanVien {
    constructor(
        public HoTen: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public GioiTinh: number = null
     ) {
    }
}