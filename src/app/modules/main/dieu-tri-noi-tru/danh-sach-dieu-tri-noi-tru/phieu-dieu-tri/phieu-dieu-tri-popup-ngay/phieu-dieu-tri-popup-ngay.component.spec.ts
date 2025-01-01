import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriPopupNgayComponent } from './phieu-dieu-tri-popup-ngay.component';

describe('PhieuDieuTriPopupNgayComponent', () => {
  let component: PhieuDieuTriPopupNgayComponent;
  let fixture: ComponentFixture<PhieuDieuTriPopupNgayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriPopupNgayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriPopupNgayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
