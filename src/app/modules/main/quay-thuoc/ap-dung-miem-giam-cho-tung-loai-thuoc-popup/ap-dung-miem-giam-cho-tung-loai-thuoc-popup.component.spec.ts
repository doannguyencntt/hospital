import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApDungMiemGiamChoTungLoaiThuocPopupComponent } from './ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component';

describe('ApDungMiemGiamChoTungLoaiThuocPopupComponent', () => {
  let component: ApDungMiemGiamChoTungLoaiThuocPopupComponent;
  let fixture: ComponentFixture<ApDungMiemGiamChoTungLoaiThuocPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApDungMiemGiamChoTungLoaiThuocPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApDungMiemGiamChoTungLoaiThuocPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
