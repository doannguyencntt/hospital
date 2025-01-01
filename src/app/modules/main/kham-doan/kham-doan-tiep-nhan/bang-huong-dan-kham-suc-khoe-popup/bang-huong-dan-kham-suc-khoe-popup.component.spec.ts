import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangHuongDanKhamSucKhoePopupComponent } from './bang-huong-dan-kham-suc-khoe-popup.component';

describe('BangHuongDanKhamSucKhoePopupComponent', () => {
  let component: BangHuongDanKhamSucKhoePopupComponent;
  let fixture: ComponentFixture<BangHuongDanKhamSucKhoePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangHuongDanKhamSucKhoePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangHuongDanKhamSucKhoePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
