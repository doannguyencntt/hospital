import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherSharedComponent } from './voucher-shared.component';

describe('VoucherSharedComponent', () => {
  let component: VoucherSharedComponent;
  let fixture: ComponentFixture<VoucherSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
