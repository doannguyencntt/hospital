import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuInCongKhaiThuocPopupComponent } from './phieu-in-cong-khai-thuoc-popup.component';

describe('PhieuInCongKhaiThuocPopupComponent', () => {
  let component: PhieuInCongKhaiThuocPopupComponent;
  let fixture: ComponentFixture<PhieuInCongKhaiThuocPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuInCongKhaiThuocPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuInCongKhaiThuocPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
