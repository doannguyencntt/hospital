import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiKhamBenhDiUngThuocComponent } from './lan-kham-hien-tai-kham-benh-di-ung-thuoc.component';

describe('LanKhamHienTaiKhamBenhDiUngThuocComponent', () => {
  let component: LanKhamHienTaiKhamBenhDiUngThuocComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKhamBenhDiUngThuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKhamBenhDiUngThuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKhamBenhDiUngThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
