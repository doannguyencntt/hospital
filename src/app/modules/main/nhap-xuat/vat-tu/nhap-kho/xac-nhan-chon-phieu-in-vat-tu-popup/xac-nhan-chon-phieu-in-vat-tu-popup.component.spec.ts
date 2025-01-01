import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XacNhanChonPhieuInVatTuPopupComponent } from './xac-nhan-chon-phieu-in-vat-tu-popup.component';

describe('XacNhanChonPhieuInVatTuPopupComponent', () => {
  let component: XacNhanChonPhieuInVatTuPopupComponent;
  let fixture: ComponentFixture<XacNhanChonPhieuInVatTuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XacNhanChonPhieuInVatTuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XacNhanChonPhieuInVatTuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
