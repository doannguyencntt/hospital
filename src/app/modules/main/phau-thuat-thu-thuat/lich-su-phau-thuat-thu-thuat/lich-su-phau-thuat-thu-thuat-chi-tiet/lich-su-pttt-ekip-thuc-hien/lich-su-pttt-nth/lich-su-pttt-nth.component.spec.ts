import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPtttNthComponent } from './lich-su-pttt-nth.component';

describe('LichSuPtttNthComponent', () => {
  let component: LichSuPtttNthComponent;
  let fixture: ComponentFixture<LichSuPtttNthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPtttNthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPtttNthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
