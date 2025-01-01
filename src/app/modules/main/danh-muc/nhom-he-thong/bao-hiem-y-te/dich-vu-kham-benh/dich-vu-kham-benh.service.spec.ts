import { TestBed } from '@angular/core/testing';

import { DichVuKhamBenhService } from './dich-vu-kham-benh.service';

describe('DichVuKhamBenhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DichVuKhamBenhService = TestBed.get(DichVuKhamBenhService);
    expect(service).toBeTruthy();
  });
});
