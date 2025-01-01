import { TestBed } from '@angular/core/testing';

import { NhomDichVuThuongDungService } from './nhom-dich-vu-thuong-dung.service';

describe('NhomDichVuThuongDungService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhomDichVuThuongDungService = TestBed.get(NhomDichVuThuongDungService);
    expect(service).toBeTruthy();
  });
});
