import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhVatTuThuongPopupComponent } from './phieu-linh-vat-tu-thuong-popup.component';

describe('PhieuLinhVatTuThuongPopupComponent', () => {
  let component: PhieuLinhVatTuThuongPopupComponent;
  let fixture: ComponentFixture<PhieuLinhVatTuThuongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhVatTuThuongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhVatTuThuongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
