import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuXuatLinhThuocPopupComponent } from './phieu-xuat-linh-thuoc-popup.component';

describe('PhieuXuatLinhThuocPopupComponent', () => {
  let component: PhieuXuatLinhThuocPopupComponent;
  let fixture: ComponentFixture<PhieuXuatLinhThuocPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuXuatLinhThuocPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuXuatLinhThuocPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
