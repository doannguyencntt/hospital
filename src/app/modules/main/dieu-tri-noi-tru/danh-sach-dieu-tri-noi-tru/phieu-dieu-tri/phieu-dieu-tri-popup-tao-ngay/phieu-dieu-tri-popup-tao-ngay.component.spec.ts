import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriPopupTaoNgayComponent } from './phieu-dieu-tri-popup-tao-ngay.component';

describe('PhieuDieuTriPopupTaoNgayComponent', () => {
  let component: PhieuDieuTriPopupTaoNgayComponent;
  let fixture: ComponentFixture<PhieuDieuTriPopupTaoNgayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriPopupTaoNgayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriPopupTaoNgayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
