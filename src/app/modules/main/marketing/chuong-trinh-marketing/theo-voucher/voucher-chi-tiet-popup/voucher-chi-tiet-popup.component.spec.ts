import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherChiTietPopupComponent } from './voucher-chi-tiet-popup.component';

describe('VoucherChiTietPopupComponent', () => {
  let component: VoucherChiTietPopupComponent;
  let fixture: ComponentFixture<VoucherChiTietPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherChiTietPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherChiTietPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
