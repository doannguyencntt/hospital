export enum EnumLoaiPhieuIn {
     InChiDinhKhamBenhNgoaiTru= 1,
     InChiDinhKhamBenhNoiTru = 2,
}
export class QueryObjData
{
    constructor(
        public YeuCauTiepNhanId:number = null,
        public YeuCauKhamBenhid:number = null,
        public ListDichVuChiDinh: any[]=[],
        public InChungChiDinh: number= null,
        public hosting: string =null,
        public KieuInChung: true,
        public GhiChuCanLamSang: string =null,
        public IsKhamDoanTatCa : string = null,
        public ListChonLoaiPhieuIn: any[]=[],
        public EnumInChiDinhKhamBenhNgoaiTru: EnumLoaiPhieuIn = null,
        public Loai:number=null,
        public InDichVuBacSiChiDinh:boolean=null, 
    ) { }
}
export class ListInChiDinh {
    constructor(
        public nhomChiDinhId: number = 0,
        public dichVuChiDinhId: number = 0,
    ) {
    }
}
