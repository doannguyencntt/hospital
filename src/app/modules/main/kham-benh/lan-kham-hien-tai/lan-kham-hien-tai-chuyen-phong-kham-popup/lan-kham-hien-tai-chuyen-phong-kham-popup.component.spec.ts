import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiChuyenPhongKhamPopupComponent } from './lan-kham-hien-tai-chuyen-phong-kham-popup.component';

describe('LanKhamHienTaiChuyenPhongKhamPopupComponent', () => {
  let component: LanKhamHienTaiChuyenPhongKhamPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiChuyenPhongKhamPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiChuyenPhongKhamPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiChuyenPhongKhamPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
