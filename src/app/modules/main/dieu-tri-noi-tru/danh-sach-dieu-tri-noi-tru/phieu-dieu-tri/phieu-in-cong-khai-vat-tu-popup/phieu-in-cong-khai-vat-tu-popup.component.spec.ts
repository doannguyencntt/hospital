import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuInCongKhaiVatTuPopupComponent } from './phieu-in-cong-khai-vat-tu-popup.component';

describe('PhieuInCongKhaiVatTuPopupComponent', () => {
  let component: PhieuInCongKhaiVatTuPopupComponent;
  let fixture: ComponentFixture<PhieuInCongKhaiVatTuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuInCongKhaiVatTuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuInCongKhaiVatTuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
