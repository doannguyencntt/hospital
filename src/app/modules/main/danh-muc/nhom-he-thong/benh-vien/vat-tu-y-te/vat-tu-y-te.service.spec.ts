import { TestBed } from '@angular/core/testing';

import { VatTuYTeService } from './vat-tu-y-te.service';

describe('VatTuYTeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VatTuYTeService = TestBed.get(VatTuYTeService);
    expect(service).toBeTruthy();
  });
});
