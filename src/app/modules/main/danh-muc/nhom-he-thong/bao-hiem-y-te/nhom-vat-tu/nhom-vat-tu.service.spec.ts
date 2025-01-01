import { TestBed } from '@angular/core/testing';

import { NhomVatTuService } from './nhom-vat-tu.service';

describe('NhomVatTuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhomVatTuService = TestBed.get(NhomVatTuService);
    expect(service).toBeTruthy();
  });
});
