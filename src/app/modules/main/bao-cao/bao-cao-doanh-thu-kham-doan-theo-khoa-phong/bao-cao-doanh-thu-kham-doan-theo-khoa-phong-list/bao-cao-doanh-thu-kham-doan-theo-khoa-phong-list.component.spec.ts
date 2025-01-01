import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoDoanhThuKhamDoanTheoKhoaPhongListComponent } from './bao-cao-doanh-thu-kham-doan-theo-khoa-phong-list.component';

describe('BaoCaoDoanhThuKhamDoanTheoKhoaPhongListComponent', () => {
  let component: BaoCaoDoanhThuKhamDoanTheoKhoaPhongListComponent;
  let fixture: ComponentFixture<BaoCaoDoanhThuKhamDoanTheoKhoaPhongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoDoanhThuKhamDoanTheoKhoaPhongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoDoanhThuKhamDoanTheoKhoaPhongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
