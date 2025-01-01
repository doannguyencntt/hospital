import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanTiepNhanListComponent } from './kham-doan-tiep-nhan-list.component';

describe('KhamDoanTiepNhanListComponent', () => {
  let component: KhamDoanTiepNhanListComponent;
  let fixture: ComponentFixture<KhamDoanTiepNhanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanTiepNhanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanTiepNhanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
