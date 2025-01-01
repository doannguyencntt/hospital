import { TestBed } from '@angular/core/testing';

import { DuocPhamBenhVienService } from './duoc-pham-benh-vien.service';

describe('DuocPhamBenhVienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DuocPhamBenhVienService = TestBed.get(DuocPhamBenhVienService);
    expect(service).toBeTruthy();
  });
});
