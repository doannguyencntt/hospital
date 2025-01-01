import { TestBed } from '@angular/core/testing';

import { LichSuCanLamSangService } from './lich-su-can-lam-sang.service';

describe('LichSuCanLamSangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LichSuCanLamSangService = TestBed.get(LichSuCanLamSangService);
    expect(service).toBeTruthy();
  });
});
