import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanNoiTruHuyNhapVienPopupComponent } from './tiep-nhan-noi-tru-huy-nhap-vien-popup.component';

describe('TiepNhanNoiTruHuyNhapVienPopupComponent', () => {
  let component: TiepNhanNoiTruHuyNhapVienPopupComponent;
  let fixture: ComponentFixture<TiepNhanNoiTruHuyNhapVienPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanNoiTruHuyNhapVienPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanNoiTruHuyNhapVienPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
