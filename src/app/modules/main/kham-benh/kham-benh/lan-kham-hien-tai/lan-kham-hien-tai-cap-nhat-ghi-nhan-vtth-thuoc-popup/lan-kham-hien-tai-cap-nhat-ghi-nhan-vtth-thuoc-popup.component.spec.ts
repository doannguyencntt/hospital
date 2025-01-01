import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent } from './lan-kham-hien-tai-cap-nhat-ghi-nhan-vtth-thuoc-popup.component';

describe('LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent', () => {
  let component: LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
