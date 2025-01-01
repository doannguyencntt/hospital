import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamBenhVienSharedComponent } from './duoc-pham-benh-vien-shared.component';

describe('DuocPhamBenhVienSharedComponent', () => {
  let component: DuocPhamBenhVienSharedComponent;
  let fixture: ComponentFixture<DuocPhamBenhVienSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamBenhVienSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamBenhVienSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
