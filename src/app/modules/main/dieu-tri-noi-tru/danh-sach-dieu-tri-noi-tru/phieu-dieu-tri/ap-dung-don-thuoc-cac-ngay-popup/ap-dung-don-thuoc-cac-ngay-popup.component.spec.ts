import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApDungDonThuocCacNgayPopupComponent } from './ap-dung-don-thuoc-cac-ngay-popup.component';

describe('ApDungDonThuocCacNgayPopupComponent', () => {
  let component: ApDungDonThuocCacNgayPopupComponent;
  let fixture: ComponentFixture<ApDungDonThuocCacNgayPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApDungDonThuocCacNgayPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApDungDonThuocCacNgayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
