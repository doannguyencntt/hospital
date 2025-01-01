import { TestBed } from '@angular/core/testing';

import { MarketingXuatKhoService } from './marketing-xuat-kho.service';

describe('MarketingXuatKhoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketingXuatKhoService = TestBed.get(MarketingXuatKhoService);
    expect(service).toBeTruthy();
  });
});
