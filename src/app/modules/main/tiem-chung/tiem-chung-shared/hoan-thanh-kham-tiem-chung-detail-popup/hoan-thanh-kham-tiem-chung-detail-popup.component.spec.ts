import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoanThanhKhamTiemChungDetailPopupComponent } from './hoan-thanh-kham-tiem-chung-detail-popup.component';

describe('HoanThanhKhamTiemChungDetailPopupComponent', () => {
  let component: HoanThanhKhamTiemChungDetailPopupComponent;
  let fixture: ComponentFixture<HoanThanhKhamTiemChungDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoanThanhKhamTiemChungDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoanThanhKhamTiemChungDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
