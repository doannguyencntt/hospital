import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanHopDongKhamTimNhanVienPopupComponent } from './kham-doan-hop-dong-kham-tim-nhan-vien-popup.component';

describe('KhamDoanHopDongKhamTimNhanVienPopupComponent', () => {
  let component: KhamDoanHopDongKhamTimNhanVienPopupComponent;
  let fixture: ComponentFixture<KhamDoanHopDongKhamTimNhanVienPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanHopDongKhamTimNhanVienPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanHopDongKhamTimNhanVienPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
