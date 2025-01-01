import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiInVatTuPopupComponent } from './lan-kham-hien-tai-in-vat-tu-popup.component';

describe('LanKhamHienTaiInVatTuPopupComponent', () => {
  let component: LanKhamHienTaiInVatTuPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiInVatTuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiInVatTuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiInVatTuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
