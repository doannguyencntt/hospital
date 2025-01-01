import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLichSuBaoHiemYTeComponent } from './ds-lich-su-bao-hiem-y-te.component';

describe('DsLichSuBaoHiemYTeComponent', () => {
  let component: DsLichSuBaoHiemYTeComponent;
  let fixture: ComponentFixture<DsLichSuBaoHiemYTeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsLichSuBaoHiemYTeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsLichSuBaoHiemYTeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
