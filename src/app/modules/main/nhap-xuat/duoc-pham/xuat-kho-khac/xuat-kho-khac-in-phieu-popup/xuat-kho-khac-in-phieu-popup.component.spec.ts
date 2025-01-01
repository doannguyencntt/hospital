import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoKhacInPhieuPopupComponent } from './xuat-kho-khac-in-phieu-popup.component';

describe('XuatKhoKhacInPhieuPopupComponent', () => {
  let component: XuatKhoKhacInPhieuPopupComponent;
  let fixture: ComponentFixture<XuatKhoKhacInPhieuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoKhacInPhieuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoKhacInPhieuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
