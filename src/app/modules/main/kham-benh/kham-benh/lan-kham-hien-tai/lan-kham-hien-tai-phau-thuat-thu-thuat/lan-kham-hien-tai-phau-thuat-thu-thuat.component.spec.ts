import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiPhauThuatThuThuatComponent } from './lan-kham-hien-tai-phau-thuat-thu-thuat.component';

describe('LanKhamHienTaiPhauThuatThuThuatComponent', () => {
  let component: LanKhamHienTaiPhauThuatThuThuatComponent;
  let fixture: ComponentFixture<LanKhamHienTaiPhauThuatThuThuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiPhauThuatThuThuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiPhauThuatThuThuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
