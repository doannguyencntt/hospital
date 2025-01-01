import { TestBed } from '@angular/core/testing';

import { DanhMucChuanDoanService } from './danh-muc-chuan-doan.service';

describe('DanhMucChuanDoanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DanhMucChuanDoanService = TestBed.get(DanhMucChuanDoanService);
    expect(service).toBeTruthy();
  });
});
