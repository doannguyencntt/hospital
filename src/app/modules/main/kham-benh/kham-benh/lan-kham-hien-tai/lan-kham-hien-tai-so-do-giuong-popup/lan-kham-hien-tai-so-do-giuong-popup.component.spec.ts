import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiSoDoGiuongPopupComponent } from './lan-kham-hien-tai-so-do-giuong-popup.component';

describe('LanKhamHienTaiSoDoGiuongPopupComponent', () => {
  let component: LanKhamHienTaiSoDoGiuongPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiSoDoGiuongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiSoDoGiuongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiSoDoGiuongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
