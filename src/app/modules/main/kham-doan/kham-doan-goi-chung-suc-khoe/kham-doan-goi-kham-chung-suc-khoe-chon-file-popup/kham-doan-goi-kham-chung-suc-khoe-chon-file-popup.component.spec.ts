import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanGoiKhamSucKhoeChonFilePopupComponent } from './kham-doan-goi-kham-suc-khoe-chon-file-popup.component';

describe('KhamDoanGoiKhamSucKhoeChonFilePopupComponent', () => {
  let component: KhamDoanGoiKhamSucKhoeChonFilePopupComponent;
  let fixture: ComponentFixture<KhamDoanGoiKhamSucKhoeChonFilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanGoiKhamSucKhoeChonFilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanGoiKhamSucKhoeChonFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
