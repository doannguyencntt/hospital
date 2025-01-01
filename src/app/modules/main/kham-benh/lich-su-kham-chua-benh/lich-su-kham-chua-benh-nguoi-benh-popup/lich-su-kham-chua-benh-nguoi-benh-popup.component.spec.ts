import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamChuaBenhNguoiBenhPopupComponent } from './lich-su-kham-chua-benh-nguoi-benh-popup.component';

describe('LichSuKhamChuaBenhNguoiBenhPopupComponent', () => {
  let component: LichSuKhamChuaBenhNguoiBenhPopupComponent;
  let fixture: ComponentFixture<LichSuKhamChuaBenhNguoiBenhPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamChuaBenhNguoiBenhPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamChuaBenhNguoiBenhPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
