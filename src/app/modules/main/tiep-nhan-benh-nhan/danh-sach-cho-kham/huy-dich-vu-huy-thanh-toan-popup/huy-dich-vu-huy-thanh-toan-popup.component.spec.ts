import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuyDichVuHuyThanhToanPopupComponent } from './huy-dich-vu-huy-thanh-toan-popup.component';

describe('HuyDichVuHuyThanhToanPopupComponent', () => {
  let component: HuyDichVuHuyThanhToanPopupComponent;
  let fixture: ComponentFixture<HuyDichVuHuyThanhToanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuyDichVuHuyThanhToanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyDichVuHuyThanhToanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
