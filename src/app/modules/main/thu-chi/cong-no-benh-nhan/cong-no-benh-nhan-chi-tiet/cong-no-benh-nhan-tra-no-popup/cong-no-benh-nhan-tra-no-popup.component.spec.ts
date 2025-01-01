import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBenhNhanTraNoPopupComponent } from './cong-no-benh-nhan-tra-no-popup.component';

describe('CongNoBenhNhanTraNoPopupComponent', () => {
  let component: CongNoBenhNhanTraNoPopupComponent;
  let fixture: ComponentFixture<CongNoBenhNhanTraNoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBenhNhanTraNoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBenhNhanTraNoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
