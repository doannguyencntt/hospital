import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachCanLamSangComponent } from './danh-sach-can-lam-sang.component';

describe('DanhSachCanLamSangComponent', () => {
  let component: DanhSachCanLamSangComponent;
  let fixture: ComponentFixture<DanhSachCanLamSangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachCanLamSangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachCanLamSangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
