import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NghiHuongBhytConfirmPopupComponent } from './nghi-huong-bhyt-confirm-popup.component';

describe('NghiHuongBhytConfirmPopupComponent', () => {
  let component: NghiHuongBhytConfirmPopupComponent;
  let fixture: ComponentFixture<NghiHuongBhytConfirmPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NghiHuongBhytConfirmPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NghiHuongBhytConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
