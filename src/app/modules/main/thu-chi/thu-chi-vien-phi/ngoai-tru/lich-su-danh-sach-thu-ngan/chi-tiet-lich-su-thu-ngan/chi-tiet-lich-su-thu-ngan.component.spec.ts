import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietLichSuThuNganComponent } from './chi-tiet-lich-su-thu-ngan.component';

describe('ChiTietLichSuThuNganComponent', () => {
  let component: ChiTietLichSuThuNganComponent;
  let fixture: ComponentFixture<ChiTietLichSuThuNganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietLichSuThuNganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietLichSuThuNganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
