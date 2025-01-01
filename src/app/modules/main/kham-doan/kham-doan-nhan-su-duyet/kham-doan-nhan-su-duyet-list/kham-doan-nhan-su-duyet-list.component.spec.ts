import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanNhanSuDuyetListComponent } from './kham-doan-nhan-su-duyet-list.component';

describe('KhamDoanNhanSuDuyetListComponent', () => {
  let component: KhamDoanNhanSuDuyetListComponent;
  let fixture: ComponentFixture<KhamDoanNhanSuDuyetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanNhanSuDuyetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanNhanSuDuyetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
