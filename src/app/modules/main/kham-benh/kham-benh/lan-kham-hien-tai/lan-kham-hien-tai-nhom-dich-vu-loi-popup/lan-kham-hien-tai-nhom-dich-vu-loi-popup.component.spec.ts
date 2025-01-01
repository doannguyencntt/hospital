import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiNhomDichVuLoiPopupComponent } from './lan-kham-hien-tai-nhom-dich-vu-loi-popup.component';

describe('LanKhamHienTaiNhomDichVuLoiPopupComponent', () => {
  let component: LanKhamHienTaiNhomDichVuLoiPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiNhomDichVuLoiPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiNhomDichVuLoiPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiNhomDichVuLoiPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
