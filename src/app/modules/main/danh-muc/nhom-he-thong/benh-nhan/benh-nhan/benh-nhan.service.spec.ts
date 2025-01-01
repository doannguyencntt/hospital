import { TestBed } from '@angular/core/testing';

import { BenhNhanService } from './benh-nhan.service';

describe('BenhNhanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BenhNhanService = TestBed.get(BenhNhanService);
    expect(service).toBeTruthy();
  });
});
