import { TestBed } from '@angular/core/testing';

import { ViTriKhoDuocPhamService } from './vi-tri-kho-duoc-pham.service';

describe('ViTriKhoDuocPhamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViTriKhoDuocPhamService = TestBed.get(ViTriKhoDuocPhamService);
    expect(service).toBeTruthy();
  });
});
