export class ThongTinKhamBenhTheoKhoa {
    public constructor(
        public KhamBenhId: string = null,
        public BacSi: string = null,
        public PhongKham: string = null,
        public NgayKham: string = null
    ) { }
}
export class DanhSachKhoaKham {
    constructor(     
        public KeyId: number = 0,  
        public DisplayName: string = "Chọn khoa khám"      
    ) { }
}

export class ThongTinLichSuKhamBenhNoiTru {
    constructor(     
        public LyDoVaoVien: string = null,
        public BenhSu: string = null,
        public KhamToanThan: string = null,
        public ICD: string = null,
        public ChuanDoan: string = null
        
    ) { }
}

