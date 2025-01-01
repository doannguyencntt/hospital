import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanGoiKhamSucKhoeListComponent } from './kham-doan-goi-kham-suc-khoe-list.component';

describe('KhamDoanGoiKhamSucKhoeListComponent', () => {
  let component: KhamDoanGoiKhamSucKhoeListComponent;
  let fixture: ComponentFixture<KhamDoanGoiKhamSucKhoeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanGoiKhamSucKhoeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanGoiKhamSucKhoeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
