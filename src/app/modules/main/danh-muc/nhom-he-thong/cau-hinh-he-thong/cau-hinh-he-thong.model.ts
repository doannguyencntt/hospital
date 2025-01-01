import { DataType } from "src/app/shared/enum/document-type.enum";

export class Cauhinh {
    Name: string;
    Description: string;
    Value: any;
    DataType: DataType;
    LoaiCauHinh: number;
    DataTypeLoaiCauHinh: number;
    CauHinhTheoThoiGianChiTiets: CauHinhTheoThoiGianChiTiet[];
    CauHinhDanhSachChiTiets: CauHinhDanhSachChiTiet[];
}

export class CauHinhTheoThoiGianChiTiet {
    constructor(
        public CauHinhTheoThoiGianId: number = null,
        public FromDate: Date = null,
        public ToDate: Date = null,
        public Value: any = null,
        public Id: number = null
    ) { }
}

export class searchLoaiCauHinh {
    constructor(
        public CauHinh: number = 0,
        public TenCauHinh: string = "Tất cả"
    ) { }
}

export class CauHinhDanhSachChiTiet {
    constructor(
        public STT: number = null,
        public KeyId: number = null,
        public DisplayName: string = null,
        public Value: any = null,
        public GhiChu: string = null,
        public DataType: DataType = null,
        public IsDisabled: boolean = false
    ) { }
}