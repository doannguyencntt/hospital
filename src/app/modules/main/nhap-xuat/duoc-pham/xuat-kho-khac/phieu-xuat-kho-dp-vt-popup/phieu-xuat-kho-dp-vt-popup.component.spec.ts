import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuXuatKhoDpVtPopupComponent } from './phieu-xuat-kho-dp-vt-popup.component';

describe('PhieuXuatKhoDpVtPopupComponent', () => {
  let component: PhieuXuatKhoDpVtPopupComponent;
  let fixture: ComponentFixture<PhieuXuatKhoDpVtPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuXuatKhoDpVtPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuXuatKhoDpVtPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
