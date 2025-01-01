import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoKeToanNhapXuatTonChiTietListComponent } from './bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component';

describe('BaoCaoKeToanNhapXuatTonChiTietListComponent', () => {
  let component: BaoCaoKeToanNhapXuatTonChiTietListComponent;
  let fixture: ComponentFixture<BaoCaoKeToanNhapXuatTonChiTietListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoKeToanNhapXuatTonChiTietListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoKeToanNhapXuatTonChiTietListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
