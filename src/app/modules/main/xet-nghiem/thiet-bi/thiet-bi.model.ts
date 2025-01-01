export class ThietBiXetNghiem {
  constructor(
      public Id: number = null,
      public NhomXetNghiemId: number = null,
      public NhomXetNghiemDisplay: string = null,
      public NhomThietBiId: number = null,
      public NhomThietBiDisplay: string = null,
      public Ma: string = null,
      public Ten: string = null,
      public Ncc: string = null,
      public HieuLuc: boolean = true,
      public IsCopy: boolean = false
  ) { }
}
