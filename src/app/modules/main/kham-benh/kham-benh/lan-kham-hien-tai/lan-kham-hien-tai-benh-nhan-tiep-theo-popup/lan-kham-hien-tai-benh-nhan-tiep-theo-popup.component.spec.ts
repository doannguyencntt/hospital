import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiBenhNhanTiepTheoPopupComponent } from './lan-kham-hien-tai-benh-nhan-tiep-theo-popup.component';

describe('LanKhamHienTaiBenhNhanTiepTheoPopupComponent', () => {
  let component: LanKhamHienTaiBenhNhanTiepTheoPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiBenhNhanTiepTheoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiBenhNhanTiepTheoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiBenhNhanTiepTheoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
