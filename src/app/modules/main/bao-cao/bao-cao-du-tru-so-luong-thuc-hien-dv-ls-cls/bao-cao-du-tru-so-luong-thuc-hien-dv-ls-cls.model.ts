import { Sort } from 'src/app/shared/models/common.model';

export class BaoCaoDuTruSoLuongThucHienDVLSCLS{
    constructor(
        public CongTyId: number = null,
        public HopDongId: number = null,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        public Sort: Sort[] = []
    ) { }
}