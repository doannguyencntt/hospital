import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanCongTyPhongPopupComponent } from './kham-doan-cong-ty-phong-popup.component';

describe('KhamDoanCongTyPhongPopupComponent', () => {
  let component: KhamDoanCongTyPhongPopupComponent;
  let fixture: ComponentFixture<KhamDoanCongTyPhongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanCongTyPhongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanCongTyPhongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
