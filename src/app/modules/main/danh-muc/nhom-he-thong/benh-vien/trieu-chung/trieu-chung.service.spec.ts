import { TestBed } from '@angular/core/testing';

import { TrieuChungService } from './trieu-chung.service';

describe('TrieuChungService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrieuChungService = TestBed.get(TrieuChungService);
    expect(service).toBeTruthy();
  });
});
