import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanTiepNhanFilePopupComponent } from './kham-doan-tiep-nhan-file-popup.component';

describe('KhamDoanTiepNhanFilePopupComponent', () => {
  let component: KhamDoanTiepNhanFilePopupComponent;
  let fixture: ComponentFixture<KhamDoanTiepNhanFilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanTiepNhanFilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanTiepNhanFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
