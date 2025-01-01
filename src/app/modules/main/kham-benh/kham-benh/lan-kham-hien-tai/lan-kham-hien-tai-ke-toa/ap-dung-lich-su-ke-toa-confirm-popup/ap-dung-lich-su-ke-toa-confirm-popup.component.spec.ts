import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApDungLichSuKeToaConfirmPopupComponent } from './ap-dung-lich-su-ke-toa-confirm-popup.component';

describe('ApDungLichSuKeToaConfirmPopupComponent', () => {
  let component: ApDungLichSuKeToaConfirmPopupComponent;
  let fixture: ComponentFixture<ApDungLichSuKeToaConfirmPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApDungLichSuKeToaConfirmPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApDungLichSuKeToaConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
