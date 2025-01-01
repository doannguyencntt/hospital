import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBaoHiemTuNhanCongTyPopupComponent } from './cong-no-bao-hiem-tu-nhan-cong-ty-popup.component';

describe('CongNoBaoHiemTuNhanCongTyPopupComponent', () => {
  let component: CongNoBaoHiemTuNhanCongTyPopupComponent;
  let fixture: ComponentFixture<CongNoBaoHiemTuNhanCongTyPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBaoHiemTuNhanCongTyPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBaoHiemTuNhanCongTyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
