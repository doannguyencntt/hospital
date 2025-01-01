import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanCongTyDetailPopupComponent } from './kham-doan-cong-ty-detail-popup.component';

describe('KhamDoanCongTyDetailPopupComponent', () => {
  let component: KhamDoanCongTyDetailPopupComponent;
  let fixture: ComponentFixture<KhamDoanCongTyDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanCongTyDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanCongTyDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
