import { TestBed } from '@angular/core/testing';

import { ToaThuocMauService } from './toa-thuoc-mau.service';

describe('ToaThuocMauService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToaThuocMauService = TestBed.get(ToaThuocMauService);
    expect(service).toBeTruthy();
  });
});
