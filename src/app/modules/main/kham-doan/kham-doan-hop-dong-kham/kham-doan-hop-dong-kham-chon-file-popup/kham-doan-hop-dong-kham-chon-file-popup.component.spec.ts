import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanHopDongKhamChonFilePopupComponent } from './kham-doan-hop-dong-kham-chon-file-popup.component';

describe('KhamDoanHopDongKhamChonFilePopupComponent', () => {
  let component: KhamDoanHopDongKhamChonFilePopupComponent;
  let fixture: ComponentFixture<KhamDoanHopDongKhamChonFilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanHopDongKhamChonFilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanHopDongKhamChonFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
