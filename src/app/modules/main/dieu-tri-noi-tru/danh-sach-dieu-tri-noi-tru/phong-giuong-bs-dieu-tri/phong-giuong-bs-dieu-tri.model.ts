export class ListTabPhongGiuongBacSiDieuTri {
    constructor(
        public tabBsDieuTriSelected: boolean = true,
        public tabCapGiuongSelected: boolean = false,
        public tabChuyenKhoaSelected: boolean = false,
    ) { }
}

export enum LoaiChiPhiGiuongBenh {
    ChiPhiGiuongBenhVien = 1,
    ChiPhiGiuongBHYT = 2
}