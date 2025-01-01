import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPttCsSinhTonComponent } from './ls-ptt-cs-sinh-ton.component';

describe('LichSuPttCsSinhTonComponent', () => {
  let component: LichSuPttCsSinhTonComponent;
  let fixture: ComponentFixture<LichSuPttCsSinhTonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPttCsSinhTonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPttCsSinhTonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
