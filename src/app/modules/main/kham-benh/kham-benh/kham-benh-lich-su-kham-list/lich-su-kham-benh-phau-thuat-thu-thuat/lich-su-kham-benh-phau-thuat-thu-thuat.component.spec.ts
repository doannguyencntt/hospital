import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhPhauThuatThuThuatComponent } from './lich-su-kham-benh-phau-thuat-thu-thuat.component';

describe('LichSuKhamBenhPhauThuatThuThuatComponent', () => {
  let component: LichSuKhamBenhPhauThuatThuThuatComponent;
  let fixture: ComponentFixture<LichSuKhamBenhPhauThuatThuThuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhPhauThuatThuThuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhPhauThuatThuThuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
