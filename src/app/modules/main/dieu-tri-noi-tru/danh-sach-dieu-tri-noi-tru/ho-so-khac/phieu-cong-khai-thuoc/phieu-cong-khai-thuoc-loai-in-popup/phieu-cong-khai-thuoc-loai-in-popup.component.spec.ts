import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuCongKhaiThuocLoaiInPopupComponent } from './phieu-cong-khai-thuoc-loai-in-popup.component';

describe('PhieuCongKhaiThuocLoaiInPopupComponent', () => {
  let component: PhieuCongKhaiThuocLoaiInPopupComponent;
  let fixture: ComponentFixture<PhieuCongKhaiThuocLoaiInPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuCongKhaiThuocLoaiInPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuCongKhaiThuocLoaiInPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
