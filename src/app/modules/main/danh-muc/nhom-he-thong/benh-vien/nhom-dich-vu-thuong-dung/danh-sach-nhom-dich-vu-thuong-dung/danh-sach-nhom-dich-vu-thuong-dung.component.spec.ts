import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachNhomDichVuThuongDungComponent } from './danh-sach-nhom-dich-vu-thuong-dung.component';

describe('DanhSachNhomDichVuThuongDungComponent', () => {
  let component: DanhSachNhomDichVuThuongDungComponent;
  let fixture: ComponentFixture<DanhSachNhomDichVuThuongDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachNhomDichVuThuongDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachNhomDichVuThuongDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
