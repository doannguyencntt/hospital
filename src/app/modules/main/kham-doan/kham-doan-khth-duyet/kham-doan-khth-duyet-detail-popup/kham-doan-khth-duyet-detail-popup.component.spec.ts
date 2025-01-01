import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanKhthDuyetDetailPopupComponent } from './kham-doan-khth-duyet-detail-popup.component';

describe('KhamDoanKhthDuyetDetailPopupComponent', () => {
  let component: KhamDoanKhthDuyetDetailPopupComponent;
  let fixture: ComponentFixture<KhamDoanKhthDuyetDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanKhthDuyetDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanKhthDuyetDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
