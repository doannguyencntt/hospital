import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPtttTuongTrinhComponent } from './lich-su-pttt-tuong-trinh.component';

describe('LichSuPtttTuongTrinhComponent', () => {
  let component: LichSuPtttTuongTrinhComponent;
  let fixture: ComponentFixture<LichSuPtttTuongTrinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPtttTuongTrinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPtttTuongTrinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
