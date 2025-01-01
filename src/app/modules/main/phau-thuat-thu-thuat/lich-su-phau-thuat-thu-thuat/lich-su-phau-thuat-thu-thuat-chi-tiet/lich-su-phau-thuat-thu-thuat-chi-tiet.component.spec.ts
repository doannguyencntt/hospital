import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPhauThuatThuThuatChiTietComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet.component';

describe('LichSuPhauThuatThuThuatChiTietComponent', () => {
  let component: LichSuPhauThuatThuThuatChiTietComponent;
  let fixture: ComponentFixture<LichSuPhauThuatThuThuatChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPhauThuatThuThuatChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPhauThuatThuThuatChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
