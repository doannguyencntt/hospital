import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhNhanDaHoanThanhPtttPopupComponent } from './benh-nhan-da-hoan-thanh-pttt-popup.component';

describe('BenhNhanDaHoanThanhPtttPopupComponent', () => {
  let component: BenhNhanDaHoanThanhPtttPopupComponent;
  let fixture: ComponentFixture<BenhNhanDaHoanThanhPtttPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhNhanDaHoanThanhPtttPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhNhanDaHoanThanhPtttPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
