import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamBenhVienUpdateComponent } from './duoc-pham-benh-vien-update.component';

describe('DuocPhamBenhVienUpdateComponent', () => {
  let component: DuocPhamBenhVienUpdateComponent;
  let fixture: ComponentFixture<DuocPhamBenhVienUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamBenhVienUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamBenhVienUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
