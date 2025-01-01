import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherInPopupComponent } from './voucher-in-popup.component';

describe('VoucherInPopupComponent', () => {
  let component: VoucherInPopupComponent;
  let fixture: ComponentFixture<VoucherInPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherInPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherInPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
