import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiNhomDichVuThuongDungPopupComponent } from './lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component';

describe('LanKhamHienTaiNhomDichVuThuongDungPopupComponent', () => {
  let component: LanKhamHienTaiNhomDichVuThuongDungPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiNhomDichVuThuongDungPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiNhomDichVuThuongDungPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiNhomDichVuThuongDungPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
