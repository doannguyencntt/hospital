import { TestBed } from '@angular/core/testing';

import { ChuyenPhongService } from './chuyen-phong.service';

describe('ChuyenPhongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChuyenPhongService = TestBed.get(ChuyenPhongService);
    expect(service).toBeTruthy();
  });
});
