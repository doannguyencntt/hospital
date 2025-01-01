import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanNhanSuKhamSucKhoeListComponent } from './kham-doan-nhan-su-kham-suc-khoe-list.component';

describe('KhamDoanNhanSuKhamSucKhoeListComponent', () => {
  let component: KhamDoanNhanSuKhamSucKhoeListComponent;
  let fixture: ComponentFixture<KhamDoanNhanSuKhamSucKhoeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanNhanSuKhamSucKhoeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanNhanSuKhamSucKhoeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
