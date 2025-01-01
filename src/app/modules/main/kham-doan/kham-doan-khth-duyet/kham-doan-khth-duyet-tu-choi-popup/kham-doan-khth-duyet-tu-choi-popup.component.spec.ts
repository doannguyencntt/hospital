import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanKhthDuyetTuChoiPopupComponent } from './kham-doan-khth-duyet-tu-choi-popup.component';

describe('KhamDoanKhthDuyetTuChoiPopupComponent', () => {
  let component: KhamDoanKhthDuyetTuChoiPopupComponent;
  let fixture: ComponentFixture<KhamDoanKhthDuyetTuChoiPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanKhthDuyetTuChoiPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanKhthDuyetTuChoiPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
