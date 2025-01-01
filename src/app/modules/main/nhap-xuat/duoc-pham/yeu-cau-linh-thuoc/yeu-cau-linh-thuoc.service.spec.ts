import { TestBed } from '@angular/core/testing';

import { YeuCauLinhThuocService } from './yeu-cau-linh-thuoc.service';

describe('YeuCauLinhThuocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YeuCauLinhThuocService = TestBed.get(YeuCauLinhThuocService);
    expect(service).toBeTruthy();
  });
});
