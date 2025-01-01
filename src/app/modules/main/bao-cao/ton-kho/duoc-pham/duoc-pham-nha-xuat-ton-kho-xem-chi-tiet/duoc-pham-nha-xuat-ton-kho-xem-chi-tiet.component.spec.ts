import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamNhaXuatTonKhoXemChiTietComponent } from './duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component';

describe('DuocPhamNhaXuatTonKhoXemChiTietComponent', () => {
  let component: DuocPhamNhaXuatTonKhoXemChiTietComponent;
  let fixture: ComponentFixture<DuocPhamNhaXuatTonKhoXemChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamNhaXuatTonKhoXemChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamNhaXuatTonKhoXemChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
