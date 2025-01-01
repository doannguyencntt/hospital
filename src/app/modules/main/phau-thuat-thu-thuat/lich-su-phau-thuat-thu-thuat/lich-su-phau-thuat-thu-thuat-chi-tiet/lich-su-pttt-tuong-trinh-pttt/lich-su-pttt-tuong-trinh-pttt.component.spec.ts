import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPtttTuongTrinhPtttComponent } from './lich-su-pttt-tuong-trinh-pttt.component';

describe('LichSuPtttTuongTrinhPtttComponent', () => {
  let component: LichSuPtttTuongTrinhPtttComponent;
  let fixture: ComponentFixture<LichSuPtttTuongTrinhPtttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPtttTuongTrinhPtttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPtttTuongTrinhPtttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
