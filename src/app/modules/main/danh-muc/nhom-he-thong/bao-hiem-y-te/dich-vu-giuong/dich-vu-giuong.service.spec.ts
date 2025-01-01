import { TestBed } from '@angular/core/testing';

import { DichVuGiuongService } from './dich-vu-giuong.service';

describe('DichVuGiuongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DichVuGiuongService = TestBed.get(DichVuGiuongService);
    expect(service).toBeTruthy();
  });
});
