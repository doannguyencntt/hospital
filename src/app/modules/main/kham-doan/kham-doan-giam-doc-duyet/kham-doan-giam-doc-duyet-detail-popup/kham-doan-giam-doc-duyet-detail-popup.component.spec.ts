import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanGiamDocDuyetDetailPopupComponent } from './kham-doan-giam-doc-duyet-detail-popup.component';

describe('KhamDoanGiamDocDuyetDetailPopupComponent', () => {
  let component: KhamDoanGiamDocDuyetDetailPopupComponent;
  let fixture: ComponentFixture<KhamDoanGiamDocDuyetDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanGiamDocDuyetDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanGiamDocDuyetDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
