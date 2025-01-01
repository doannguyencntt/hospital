import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamNhapXuatTonKhoPopupComponent } from './duoc-pham-nhap-xuat-ton-kho-popup.component';

describe('DuocPhamNhapXuatTonKhoPopupComponent', () => {
  let component: DuocPhamNhapXuatTonKhoPopupComponent;
  let fixture: ComponentFixture<DuocPhamNhapXuatTonKhoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamNhapXuatTonKhoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamNhapXuatTonKhoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
