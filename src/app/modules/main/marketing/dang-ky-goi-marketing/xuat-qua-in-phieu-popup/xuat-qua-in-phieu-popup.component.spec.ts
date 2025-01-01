import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatQuaInPhieuPopupComponent } from './xuat-qua-in-phieu-popup.component';

describe('XuatQuaInPhieuPopupComponent', () => {
  let component: XuatQuaInPhieuPopupComponent;
  let fixture: ComponentFixture<XuatQuaInPhieuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatQuaInPhieuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatQuaInPhieuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
