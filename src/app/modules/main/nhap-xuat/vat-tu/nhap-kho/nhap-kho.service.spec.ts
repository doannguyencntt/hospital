import { TestBed } from '@angular/core/testing';

import { NhapKhoService } from './nhap-kho.service';

describe('NhapKhoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhapKhoService = TestBed.get(NhapKhoService);
    expect(service).toBeTruthy();
  });
});
