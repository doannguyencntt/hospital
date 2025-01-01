import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent } from './bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component';

describe('BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent', () => {
  let component: BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent;
  let fixture: ComponentFixture<BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
