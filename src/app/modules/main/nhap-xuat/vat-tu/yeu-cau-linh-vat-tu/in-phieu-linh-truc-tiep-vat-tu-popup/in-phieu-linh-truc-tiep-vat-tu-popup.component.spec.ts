import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPhieuLinhTrucTiepVatTuPopupComponent } from './in-phieu-linh-truc-tiep-vat-tu-popup.component';

describe('InPhieuLinhTrucTiepVatTuPopupComponent', () => {
  let component: InPhieuLinhTrucTiepVatTuPopupComponent;
  let fixture: ComponentFixture<InPhieuLinhTrucTiepVatTuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPhieuLinhTrucTiepVatTuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPhieuLinhTrucTiepVatTuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
