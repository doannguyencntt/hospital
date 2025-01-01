import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApDungMiemGiamThemPopupComponent } from './ap-dung-miem-giam-them-popup.component';

describe('ApDungMiemGiamThemPopupComponent', () => {
  let component: ApDungMiemGiamThemPopupComponent;
  let fixture: ComponentFixture<ApDungMiemGiamThemPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApDungMiemGiamThemPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApDungMiemGiamThemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
