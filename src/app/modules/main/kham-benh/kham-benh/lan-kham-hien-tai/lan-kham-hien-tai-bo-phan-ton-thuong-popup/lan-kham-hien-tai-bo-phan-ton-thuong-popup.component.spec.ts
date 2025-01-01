import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiBoPhanTonThuongPopupComponent } from './lan-kham-hien-tai-bo-phan-ton-thuong-popup.component';

describe('LanKhamHienTaiBoPhanTonThuongPopupComponent', () => {
  let component: LanKhamHienTaiBoPhanTonThuongPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiBoPhanTonThuongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiBoPhanTonThuongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiBoPhanTonThuongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
