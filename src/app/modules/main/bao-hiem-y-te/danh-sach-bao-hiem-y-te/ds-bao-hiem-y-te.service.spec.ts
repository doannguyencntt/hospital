import { TestBed } from '@angular/core/testing';

import { DsBaoHiemYTeService } from './ds-bao-hiem-y-te.service';

describe('DsBaoHiemYTeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DsBaoHiemYTeService = TestBed.get(DsBaoHiemYTeService);
    expect(service).toBeTruthy();
  });
});
