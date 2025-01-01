import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamTonKhoPopupTonKhoComponent } from './duoc-pham-ton-kho-popup-ton-kho.component';

describe('DuocPhamTonKhoPopupTonKhoComponent', () => {
  let component: DuocPhamTonKhoPopupTonKhoComponent;
  let fixture: ComponentFixture<DuocPhamTonKhoPopupTonKhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamTonKhoPopupTonKhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamTonKhoPopupTonKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
