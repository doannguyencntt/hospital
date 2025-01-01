import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanNoiTruThongTinDoiTuongPopupComponent } from './tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component';

describe('TiepNhanNoiTruThongTinDoiTuongPopupComponent', () => {
  let component: TiepNhanNoiTruThongTinDoiTuongPopupComponent;
  let fixture: ComponentFixture<TiepNhanNoiTruThongTinDoiTuongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanNoiTruThongTinDoiTuongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanNoiTruThongTinDoiTuongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
