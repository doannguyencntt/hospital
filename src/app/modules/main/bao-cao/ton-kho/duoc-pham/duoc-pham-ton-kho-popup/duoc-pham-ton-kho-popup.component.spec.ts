import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamTonKhoPopupComponent } from './duoc-pham-ton-kho-popup.component';

describe('DuocPhamTonKhoPopupComponent', () => {
  let component: DuocPhamTonKhoPopupComponent;
  let fixture: ComponentFixture<DuocPhamTonKhoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamTonKhoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamTonKhoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
