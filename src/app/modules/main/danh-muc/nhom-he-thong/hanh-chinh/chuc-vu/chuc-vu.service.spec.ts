import { TestBed } from '@angular/core/testing';

import { ChucVuService } from './chuc-vu.service';

describe('ChucVuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChucVuService = TestBed.get(ChucVuService);
    expect(service).toBeTruthy();
  });
});
