import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPhieuDangKyKhamPopupComponent } from './in-phieu-dang-ky-kham-popup.component';

describe('InPhieuDangKyKhamPopupComponent', () => {
  let component: InPhieuDangKyKhamPopupComponent;
  let fixture: ComponentFixture<InPhieuDangKyKhamPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPhieuDangKyKhamPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPhieuDangKyKhamPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
