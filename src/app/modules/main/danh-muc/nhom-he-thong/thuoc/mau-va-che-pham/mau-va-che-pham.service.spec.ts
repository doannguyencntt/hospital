import { TestBed } from '@angular/core/testing';

import { MauVaChePhamService } from './mau-va-che-pham.service';

describe('MauVaChePhamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MauVaChePhamService = TestBed.get(MauVaChePhamService);
    expect(service).toBeTruthy();
  });
});
