import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBaoHiemTuNhanBenhNhanPopupComponent } from './cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component';

describe('CongNoBaoHiemTuNhanBenhNhanPopupComponent', () => {
  let component: CongNoBaoHiemTuNhanBenhNhanPopupComponent;
  let fixture: ComponentFixture<CongNoBaoHiemTuNhanBenhNhanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBaoHiemTuNhanBenhNhanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBaoHiemTuNhanBenhNhanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
