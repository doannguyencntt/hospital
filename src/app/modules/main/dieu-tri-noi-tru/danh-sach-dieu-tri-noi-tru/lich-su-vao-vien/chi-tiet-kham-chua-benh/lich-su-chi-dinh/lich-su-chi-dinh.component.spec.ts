import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuChiDinhComponent } from './lich-su-chi-dinh.component';

describe('LichSuChiDinhComponent', () => {
  let component: LichSuChiDinhComponent;
  let fixture: ComponentFixture<LichSuChiDinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuChiDinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuChiDinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
