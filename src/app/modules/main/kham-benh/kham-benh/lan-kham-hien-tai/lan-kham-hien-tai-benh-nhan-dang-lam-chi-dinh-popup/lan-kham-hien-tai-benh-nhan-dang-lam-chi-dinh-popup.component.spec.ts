import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent } from './lan-kham-hien-tai-benh-nhan-dang-lam-chi-dinh-popup.component';

describe('LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent', () => {
  let component: LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
