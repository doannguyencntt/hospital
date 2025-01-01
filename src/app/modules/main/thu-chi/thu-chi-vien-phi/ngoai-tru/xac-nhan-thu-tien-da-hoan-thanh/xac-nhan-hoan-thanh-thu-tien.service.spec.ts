import { TestBed } from '@angular/core/testing';

import { XacNhanHoanThanhThuTienService } from './xac-nhan-hoan-thanh-thu-tien.service';

describe('XacNhanHoanThanhThuTienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XacNhanHoanThanhThuTienService = TestBed.get(XacNhanHoanThanhThuTienService);
    expect(service).toBeTruthy();
  });
});
