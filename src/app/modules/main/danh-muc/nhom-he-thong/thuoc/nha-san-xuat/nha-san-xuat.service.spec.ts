import { TestBed } from '@angular/core/testing';

import { NhaSanXuatService } from './nha-san-xuat.service';

describe('NhaSanXuatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhaSanXuatService = TestBed.get(NhaSanXuatService);
    expect(service).toBeTruthy();
  });
});
