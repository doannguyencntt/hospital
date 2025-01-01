import { TestBed } from '@angular/core/testing';

import { CanLamSangService } from './can-lam-sang.service';

describe('CanLamSangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanLamSangService = TestBed.get(CanLamSangService);
    expect(service).toBeTruthy();
  });
});
