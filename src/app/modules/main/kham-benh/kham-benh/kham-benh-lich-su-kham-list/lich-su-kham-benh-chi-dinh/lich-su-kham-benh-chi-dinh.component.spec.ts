import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhChiDinhComponent } from './lich-su-kham-benh-chi-dinh.component';

describe('LichSuKhamBenhChiDinhComponent', () => {
  let component: LichSuKhamBenhChiDinhComponent;
  let fixture: ComponentFixture<LichSuKhamBenhChiDinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhChiDinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhChiDinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
