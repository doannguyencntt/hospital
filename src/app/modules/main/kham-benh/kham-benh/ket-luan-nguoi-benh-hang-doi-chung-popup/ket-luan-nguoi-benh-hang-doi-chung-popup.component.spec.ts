import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetLuanNguoiBenhHangDoiChungPopupComponent } from './ket-luan-nguoi-benh-hang-doi-chung-popup.component';

describe('KetLuanNguoiBenhHangDoiChungPopupComponent', () => {
  let component: KetLuanNguoiBenhHangDoiChungPopupComponent;
  let fixture: ComponentFixture<KetLuanNguoiBenhHangDoiChungPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetLuanNguoiBenhHangDoiChungPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetLuanNguoiBenhHangDoiChungPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
