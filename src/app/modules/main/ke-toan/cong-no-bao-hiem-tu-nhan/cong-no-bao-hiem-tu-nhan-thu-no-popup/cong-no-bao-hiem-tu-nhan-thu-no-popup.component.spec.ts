import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBaoHiemTuNhanThuNoPopupComponent } from './cong-no-bao-hiem-tu-nhan-thu-no-popup.component';

describe('CongNoBaoHiemTuNhanThuNoPopupComponent', () => {
  let component: CongNoBaoHiemTuNhanThuNoPopupComponent;
  let fixture: ComponentFixture<CongNoBaoHiemTuNhanThuNoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBaoHiemTuNhanThuNoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBaoHiemTuNhanThuNoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
