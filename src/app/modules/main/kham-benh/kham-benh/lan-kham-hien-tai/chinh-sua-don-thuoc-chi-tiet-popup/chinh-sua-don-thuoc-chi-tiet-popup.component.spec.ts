import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhSuaDonThuocChiTietPopupComponent } from './chinh-sua-don-thuoc-chi-tiet-popup.component';

describe('ChinhSuaDonThuocChiTietPopupComponent', () => {
  let component: ChinhSuaDonThuocChiTietPopupComponent;
  let fixture: ComponentFixture<ChinhSuaDonThuocChiTietPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhSuaDonThuocChiTietPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhSuaDonThuocChiTietPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
