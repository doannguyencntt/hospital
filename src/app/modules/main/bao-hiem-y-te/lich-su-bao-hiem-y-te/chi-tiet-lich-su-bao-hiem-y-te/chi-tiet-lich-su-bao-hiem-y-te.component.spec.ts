import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietLichSuBaoHiemYTeComponent } from './chi-tiet-lich-su-bao-hiem-y-te.component';

describe('ChiTietLichSuBaoHiemYTeComponent', () => {
  let component: ChiTietLichSuBaoHiemYTeComponent;
  let fixture: ComponentFixture<ChiTietLichSuBaoHiemYTeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietLichSuBaoHiemYTeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietLichSuBaoHiemYTeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
