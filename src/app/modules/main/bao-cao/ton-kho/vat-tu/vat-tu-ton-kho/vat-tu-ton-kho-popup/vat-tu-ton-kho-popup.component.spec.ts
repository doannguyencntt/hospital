import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatTuTonKhoPopupComponent } from './vat-tu-ton-kho-popup.component';

describe('VatTuTonKhoPopupComponent', () => {
  let component: VatTuTonKhoPopupComponent;
  let fixture: ComponentFixture<VatTuTonKhoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatTuTonKhoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatTuTonKhoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
