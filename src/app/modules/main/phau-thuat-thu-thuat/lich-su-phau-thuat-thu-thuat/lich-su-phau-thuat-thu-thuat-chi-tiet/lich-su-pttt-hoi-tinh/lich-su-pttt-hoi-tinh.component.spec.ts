import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPtttHoiTinhComponent } from './lich-su-pttt-hoi-tinh.component';

describe('LichSuPtttHoiTinhComponent', () => {
  let component: LichSuPtttHoiTinhComponent;
  let fixture: ComponentFixture<LichSuPtttHoiTinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPtttHoiTinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPtttHoiTinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
