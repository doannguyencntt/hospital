import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamBenhThongTinDoiTuongPopupComponent } from './kham-benh-thong-tin-doi-tuong-popup.component';

describe('KhamBenhThongTinDoiTuongPopupComponent', () => {
  let component: KhamBenhThongTinDoiTuongPopupComponent;
  let fixture: ComponentFixture<KhamBenhThongTinDoiTuongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamBenhThongTinDoiTuongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamBenhThongTinDoiTuongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
