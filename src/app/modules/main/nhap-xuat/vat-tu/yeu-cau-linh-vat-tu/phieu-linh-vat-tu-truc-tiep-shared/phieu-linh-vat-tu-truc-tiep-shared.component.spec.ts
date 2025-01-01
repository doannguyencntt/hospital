import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhVatTuTrucTiepSharedComponent } from './phieu-linh-vat-tu-truc-tiep-shared.component';

describe('PhieuLinhVatTuTrucTiepSharedComponent', () => {
  let component: PhieuLinhVatTuTrucTiepSharedComponent;
  let fixture: ComponentFixture<PhieuLinhVatTuTrucTiepSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhVatTuTrucTiepSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhVatTuTrucTiepSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
