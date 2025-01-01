import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent } from './bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component';

describe('BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent', () => {
  let component: BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent;
  let fixture: ComponentFixture<BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
