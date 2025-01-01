import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiKhamBenhGoiDichVuPopupComponent } from './lan-kham-hien-tai-kham-benh-goi-dich-vu-popup.component';

describe('LanKhamHienTaiKhamBenhGoiDichVuPopupComponent', () => {
  let component: LanKhamHienTaiKhamBenhGoiDichVuPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKhamBenhGoiDichVuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKhamBenhGoiDichVuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKhamBenhGoiDichVuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
