import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanTiepNhanNhanVienDetailPopupComponent } from './kham-doan-tiep-nhan-nhan-vien-detail-popup.component';

describe('KhamDoanTiepNhanNhanVienDetailPopupComponent', () => {
  let component: KhamDoanTiepNhanNhanVienDetailPopupComponent;
  let fixture: ComponentFixture<KhamDoanTiepNhanNhanVienDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanTiepNhanNhanVienDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanTiepNhanNhanVienDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
