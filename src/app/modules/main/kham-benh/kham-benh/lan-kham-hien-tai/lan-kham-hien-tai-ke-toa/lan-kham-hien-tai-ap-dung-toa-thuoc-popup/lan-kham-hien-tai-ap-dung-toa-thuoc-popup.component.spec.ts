import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiApDungToaThuocPopupComponent } from './lan-kham-hien-tai-ap-dung-toa-thuoc-popup.component';

describe('LanKhamHienTaiApDungToaThuocPopupComponent', () => {
  let component: LanKhamHienTaiApDungToaThuocPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiApDungToaThuocPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiApDungToaThuocPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiApDungToaThuocPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
