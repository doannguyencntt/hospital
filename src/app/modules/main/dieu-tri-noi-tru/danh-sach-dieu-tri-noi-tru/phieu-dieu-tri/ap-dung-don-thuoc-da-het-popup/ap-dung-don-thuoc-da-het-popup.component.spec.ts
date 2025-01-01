import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApDungDonThuocDaHetPopupComponent } from './ap-dung-don-thuoc-da-het-popup.component';

describe('ApDungDonThuocDaHetPopupComponent', () => {
  let component: ApDungDonThuocDaHetPopupComponent;
  let fixture: ComponentFixture<ApDungDonThuocDaHetPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApDungDonThuocDaHetPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApDungDonThuocDaHetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
