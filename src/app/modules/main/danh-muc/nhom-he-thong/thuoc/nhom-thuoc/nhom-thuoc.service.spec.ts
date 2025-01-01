import { TestBed } from '@angular/core/testing';

import { NhomThuocService } from './nhom-thuoc.service';

describe('NhomThuocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhomThuocService = TestBed.get(NhomThuocService);
    expect(service).toBeTruthy();
  });
});
