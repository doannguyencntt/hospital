import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent } from './in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component';

describe('InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent', () => {
  let component: InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent;
  let fixture: ComponentFixture<InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
