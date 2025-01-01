import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhThuocThuongPopupComponent } from './phieu-linh-thuoc-thuong-popup.component';

describe('PhieuLinhThuocThuongPopupComponent', () => {
  let component: PhieuLinhThuocThuongPopupComponent;
  let fixture: ComponentFixture<PhieuLinhThuocThuongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhThuocThuongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhThuocThuongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
