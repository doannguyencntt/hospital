import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanNhanSuDuyetDetailPopupComponent } from './kham-doan-nhan-su-duyet-detail-popup.component';

describe('KhamDoanNhanSuDuyetDetailPopupComponent', () => {
  let component: KhamDoanNhanSuDuyetDetailPopupComponent;
  let fixture: ComponentFixture<KhamDoanNhanSuDuyetDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanNhanSuDuyetDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanNhanSuDuyetDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
