import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanTiepNhanDetailPopupComponent } from './kham-doan-tiep-nhan-detail-popup.component';

describe('KhamDoanTiepNhanDetailPopupComponent', () => {
  let component: KhamDoanTiepNhanDetailPopupComponent;
  let fixture: ComponentFixture<KhamDoanTiepNhanDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanTiepNhanDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanTiepNhanDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
