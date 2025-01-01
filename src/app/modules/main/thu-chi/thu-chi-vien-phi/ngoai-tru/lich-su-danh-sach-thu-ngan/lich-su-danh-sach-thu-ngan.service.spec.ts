import { TestBed } from '@angular/core/testing';
import { LichSuDanhSachThuNganService } from './lich-su-danh-sach-thu-ngan.service';



describe('LichSuDanhSachThuNganService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LichSuDanhSachThuNganService = TestBed.get(LichSuDanhSachThuNganService);
    expect(service).toBeTruthy();
  });
});
