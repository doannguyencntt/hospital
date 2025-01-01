import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanKhthDuyetListComponent } from './kham-doan-khth-duyet-list.component';

describe('KhamDoanKhthDuyetListComponent', () => {
  let component: KhamDoanKhthDuyetListComponent;
  let fixture: ComponentFixture<KhamDoanKhthDuyetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanKhthDuyetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanKhthDuyetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
