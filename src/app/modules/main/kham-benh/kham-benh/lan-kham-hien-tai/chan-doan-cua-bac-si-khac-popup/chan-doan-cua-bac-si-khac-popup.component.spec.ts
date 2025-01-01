import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanDoanCuaBacSiKhacPopupComponent } from './chan-doan-cua-bac-si-khac-popup.component';

describe('ChanDoanCuaBacSiKhacPopupComponent', () => {
  let component: ChanDoanCuaBacSiKhacPopupComponent;
  let fixture: ComponentFixture<ChanDoanCuaBacSiKhacPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanDoanCuaBacSiKhacPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanDoanCuaBacSiKhacPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
