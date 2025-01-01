import { PhanLoaiMau } from "src/app/shared/enum/phan-loai-mau.enum";

export class MauVaChePham {
    constructor(
        public Ma: string = null,
        public Ten: string = null,
        public PhanLoaiMau :PhanLoaiMau = 1,
        public TenPhanLoaiMau: string,
        public TheTich: number = 0,
        public GiaTriToiDa: number = 0,
        public GhiChu: string = null,
    ) { }
}