import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonThuocBacSiKhacKePopupComponent } from './don-thuoc-bac-si-khac-ke-popup.component';

describe('DonThuocBacSiKhacKePopupComponent', () => {
  let component: DonThuocBacSiKhacKePopupComponent;
  let fixture: ComponentFixture<DonThuocBacSiKhacKePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonThuocBacSiKhacKePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonThuocBacSiKhacKePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
