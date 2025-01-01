import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoSoChiTietVatTuHangHoaListComponent } from './bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component';

describe('BaoCaoSoChiTietVatTuHangHoaListComponent', () => {
  let component: BaoCaoSoChiTietVatTuHangHoaListComponent;
  let fixture: ComponentFixture<BaoCaoSoChiTietVatTuHangHoaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoSoChiTietVatTuHangHoaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoSoChiTietVatTuHangHoaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
