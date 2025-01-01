import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NghiHuongBhytDetailPopupComponent } from './nghi-huong-bhyt-detail-popup.component';

describe('NghiHuongBhytDetailPopupComponent', () => {
  let component: NghiHuongBhytDetailPopupComponent;
  let fixture: ComponentFixture<NghiHuongBhytDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NghiHuongBhytDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NghiHuongBhytDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
