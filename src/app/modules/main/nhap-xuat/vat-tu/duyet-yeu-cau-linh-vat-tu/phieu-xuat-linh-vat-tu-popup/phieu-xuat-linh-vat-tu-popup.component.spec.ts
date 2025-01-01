import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuXuatLinhVatTuPopupComponent } from './phieu-xuat-linh-vat-tu-popup.component';

describe('PhieuXuatLinhVatTuPopupComponent', () => {
  let component: PhieuXuatLinhVatTuPopupComponent;
  let fixture: ComponentFixture<PhieuXuatLinhVatTuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuXuatLinhVatTuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuXuatLinhVatTuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
