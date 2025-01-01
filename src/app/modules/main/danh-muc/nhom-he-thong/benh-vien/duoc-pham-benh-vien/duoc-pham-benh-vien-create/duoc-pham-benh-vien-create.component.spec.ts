import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamBenhVienCreateComponent } from './duoc-pham-benh-vien-create.component';

describe('DuocPhamBenhVienCreateComponent', () => {
  let component: DuocPhamBenhVienCreateComponent;
  let fixture: ComponentFixture<DuocPhamBenhVienCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamBenhVienCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamBenhVienCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
