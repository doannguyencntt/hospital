import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanTatCaPhongDvChuaThucHienPopupComponent } from './kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component';

describe('KhamDoanTatCaPhongDvChuaThucHienPopupComponent', () => {
  let component: KhamDoanTatCaPhongDvChuaThucHienPopupComponent;
  let fixture: ComponentFixture<KhamDoanTatCaPhongDvChuaThucHienPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanTatCaPhongDvChuaThucHienPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanTatCaPhongDvChuaThucHienPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
