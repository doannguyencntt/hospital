import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanNhanSuKhamSucKhoeDetailPopupComponent } from './kham-doan-nhan-su-kham-suc-khoe-detail-popup.component';

describe('KhamDoanNhanSuKhamSucKhoeDetailPopupComponent', () => {
  let component: KhamDoanNhanSuKhamSucKhoeDetailPopupComponent;
  let fixture: ComponentFixture<KhamDoanNhanSuKhamSucKhoeDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanNhanSuKhamSucKhoeDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanNhanSuKhamSucKhoeDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
