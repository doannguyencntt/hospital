import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhThuocBuPopupComponent } from './phieu-linh-thuoc-bu-popup.component';

describe('PhieuLinhThuocBuPopupComponent', () => {
  let component: PhieuLinhThuocBuPopupComponent;
  let fixture: ComponentFixture<PhieuLinhThuocBuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhThuocBuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhThuocBuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
