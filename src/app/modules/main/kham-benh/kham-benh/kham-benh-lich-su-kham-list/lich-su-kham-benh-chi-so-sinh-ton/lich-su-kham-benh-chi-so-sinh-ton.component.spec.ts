import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhChiSoSinhTonComponent } from './lich-su-kham-benh-chi-so-sinh-ton.component';

describe('LichSuKhamBenhChiSoSinhTonComponent', () => {
  let component: LichSuKhamBenhChiSoSinhTonComponent;
  let fixture: ComponentFixture<LichSuKhamBenhChiSoSinhTonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhChiSoSinhTonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhChiSoSinhTonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
