import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiSuDungGoiDichVuPopupComponent } from './lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component';

describe('LanKhamHienTaiSuDungGoiDichVuPopupComponent', () => {
  let component: LanKhamHienTaiSuDungGoiDichVuPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiSuDungGoiDichVuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiSuDungGoiDichVuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiSuDungGoiDichVuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
