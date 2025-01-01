import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoChiTietThuTienVienPhiBenhNhanComponent } from './bao-cao-danh-sach-thu-tien-vien-phi.component';

describe('BaoCaoChiTietThuTienVienPhiBenhNhanComponent', () => {
  let component: BaoCaoChiTietThuTienVienPhiBenhNhanComponent;
  let fixture: ComponentFixture<BaoCaoChiTietThuTienVienPhiBenhNhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoChiTietThuTienVienPhiBenhNhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoChiTietThuTienVienPhiBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
