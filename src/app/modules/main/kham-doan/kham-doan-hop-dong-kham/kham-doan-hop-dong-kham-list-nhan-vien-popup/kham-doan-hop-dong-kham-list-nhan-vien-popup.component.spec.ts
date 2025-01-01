import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanHopDongKhamListNhanVienPopupComponent } from './kham-doan-hop-dong-kham-list-nhan-vien-popup.component';

describe('KhamDoanHopDongKhamListNhanVienPopupComponent', () => {
  let component: KhamDoanHopDongKhamListNhanVienPopupComponent;
  let fixture: ComponentFixture<KhamDoanHopDongKhamListNhanVienPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanHopDongKhamListNhanVienPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanHopDongKhamListNhanVienPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
