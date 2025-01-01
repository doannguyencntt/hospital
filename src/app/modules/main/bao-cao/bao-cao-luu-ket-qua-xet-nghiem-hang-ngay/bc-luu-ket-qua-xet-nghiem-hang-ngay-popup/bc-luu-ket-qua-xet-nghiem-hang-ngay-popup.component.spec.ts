import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcLuuKetQuaXetNghiemHangNgayPopupComponent } from './bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component';

describe('BcLuuKetQuaXetNghiemHangNgayPopupComponent', () => {
  let component: BcLuuKetQuaXetNghiemHangNgayPopupComponent;
  let fixture: ComponentFixture<BcLuuKetQuaXetNghiemHangNgayPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcLuuKetQuaXetNghiemHangNgayPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcLuuKetQuaXetNghiemHangNgayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
