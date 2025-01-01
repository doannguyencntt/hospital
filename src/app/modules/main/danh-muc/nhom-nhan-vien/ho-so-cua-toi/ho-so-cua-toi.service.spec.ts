import { TestBed } from '@angular/core/testing';

import { HoSoCuaToiService } from './ho-so-cua-toi.service';

describe('HoSoCuaToiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoSoCuaToiService = TestBed.get(HoSoCuaToiService);
    expect(service).toBeTruthy();
  });
});
