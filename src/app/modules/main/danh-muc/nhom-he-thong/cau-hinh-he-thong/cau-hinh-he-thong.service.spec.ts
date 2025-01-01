import { TestBed } from '@angular/core/testing';

import { CauHinhHeThongService } from './cau-hinh-he-thong.service';

describe('CauHinhHeThongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CauHinhHeThongService = TestBed.get(CauHinhHeThongService);
    expect(service).toBeTruthy();
  });
});
