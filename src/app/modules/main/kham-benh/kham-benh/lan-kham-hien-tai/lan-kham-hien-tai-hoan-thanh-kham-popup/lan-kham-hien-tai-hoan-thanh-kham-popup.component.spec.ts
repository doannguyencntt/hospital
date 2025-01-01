import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiHoanThanhKhamPopupComponent } from './lan-kham-hien-tai-hoan-thanh-kham-popup.component';

describe('LanKhamHienTaiHoanThanhKhamPopupComponent', () => {
  let component: LanKhamHienTaiHoanThanhKhamPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiHoanThanhKhamPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiHoanThanhKhamPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiHoanThanhKhamPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
