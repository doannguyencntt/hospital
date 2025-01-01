import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent } from './lan-kham-hien-tai-chi-dinh-cua-bac-si-khac-popup.component';

describe('LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent', () => {
  let component: LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
