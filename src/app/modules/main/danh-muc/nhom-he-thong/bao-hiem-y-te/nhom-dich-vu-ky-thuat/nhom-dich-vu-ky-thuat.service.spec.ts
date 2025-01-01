import { TestBed } from '@angular/core/testing';

import { NhomDichVuKyThuatService } from './nhom-dich-vu-ky-thuat.service';

describe('NhomDichVuKyThuatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhomDichVuKyThuatService = TestBed.get(NhomDichVuKyThuatService);
    expect(service).toBeTruthy();
  });
});
