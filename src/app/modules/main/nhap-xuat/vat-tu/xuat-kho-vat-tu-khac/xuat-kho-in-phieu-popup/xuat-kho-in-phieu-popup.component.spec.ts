import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoInPhieuPopupComponent } from './xuat-kho-in-phieu-popup.component';

describe('XuatKhoInPhieuPopupComponent', () => {
  let component: XuatKhoInPhieuPopupComponent;
  let fixture: ComponentFixture<XuatKhoInPhieuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoInPhieuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoInPhieuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
