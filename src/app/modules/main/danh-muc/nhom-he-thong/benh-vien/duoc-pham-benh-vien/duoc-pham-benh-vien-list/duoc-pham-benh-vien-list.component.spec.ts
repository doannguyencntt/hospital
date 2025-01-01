import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamBenhVienListComponent } from './duoc-pham-benh-vien-list.component';

describe('DuocPhamBenhVienListComponent', () => {
  let component: DuocPhamBenhVienListComponent;
  let fixture: ComponentFixture<DuocPhamBenhVienListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamBenhVienListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamBenhVienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
