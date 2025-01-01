import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanHopDongKhamListComponent } from './kham-doan-hop-dong-kham-list.component';

describe('KhamDoanHopDongKhamListComponent', () => {
  let component: KhamDoanHopDongKhamListComponent;
  let fixture: ComponentFixture<KhamDoanHopDongKhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanHopDongKhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanHopDongKhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
