import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLichSuKiemTraBhytComponent } from './popup-lich-su-kiem-tra-bhyt.component';

describe('PopupLichSuKiemTraBhytComponent', () => {
  let component: PopupLichSuKiemTraBhytComponent;
  let fixture: ComponentFixture<PopupLichSuKiemTraBhytComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupLichSuKiemTraBhytComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupLichSuKiemTraBhytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
