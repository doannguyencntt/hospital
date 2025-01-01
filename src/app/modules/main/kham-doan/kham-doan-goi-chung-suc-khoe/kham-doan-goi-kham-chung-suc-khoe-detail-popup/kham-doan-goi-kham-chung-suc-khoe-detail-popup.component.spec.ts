import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanGoiKhamSucKhoeDetailPopupComponent } from './kham-doan-goi-kham-suc-khoe-detail-popup.component';

describe('KhamDoanGoiKhamSucKhoeDetailPopupComponent', () => {
  let component: KhamDoanGoiKhamSucKhoeDetailPopupComponent;
  let fixture: ComponentFixture<KhamDoanGoiKhamSucKhoeDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanGoiKhamSucKhoeDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanGoiKhamSucKhoeDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
