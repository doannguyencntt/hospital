import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanHopDongKhamDetailPopupComponent } from './kham-doan-hop-dong-kham-detail-popup.component';

describe('KhamDoanHopDongKhamDetailPopupComponent', () => {
  let component: KhamDoanHopDongKhamDetailPopupComponent;
  let fixture: ComponentFixture<KhamDoanHopDongKhamDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanHopDongKhamDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanHopDongKhamDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
