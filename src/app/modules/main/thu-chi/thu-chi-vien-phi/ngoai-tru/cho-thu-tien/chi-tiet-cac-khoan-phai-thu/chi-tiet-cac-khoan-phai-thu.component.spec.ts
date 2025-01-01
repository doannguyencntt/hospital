import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietCacKhoanPhaiThuComponent } from './chi-tiet-cac-khoan-phai-thu.component';

describe('ChiTietCacKhoanPhaiThuComponent', () => {
  let component: ChiTietCacKhoanPhaiThuComponent;
  let fixture: ComponentFixture<ChiTietCacKhoanPhaiThuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietCacKhoanPhaiThuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietCacKhoanPhaiThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
