import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBaoHiemTuNhanLichSuPopupComponent } from './cong-no-bao-hiem-tu-nhan-lich-su-popup.component';

describe('CongNoBaoHiemTuNhanLichSuPopupComponent', () => {
  let component: CongNoBaoHiemTuNhanLichSuPopupComponent;
  let fixture: ComponentFixture<CongNoBaoHiemTuNhanLichSuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBaoHiemTuNhanLichSuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBaoHiemTuNhanLichSuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
