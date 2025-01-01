import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuCongKhaiVatTuLoaiInPopupComponent } from './phieu-cong-khai-vat-tu-loai-in-popup.component';

describe('PhieuCongKhaiVatTuLoaiInPopupComponent', () => {
  let component: PhieuCongKhaiVatTuLoaiInPopupComponent;
  let fixture: ComponentFixture<PhieuCongKhaiVatTuLoaiInPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuCongKhaiVatTuLoaiInPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuCongKhaiVatTuLoaiInPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
