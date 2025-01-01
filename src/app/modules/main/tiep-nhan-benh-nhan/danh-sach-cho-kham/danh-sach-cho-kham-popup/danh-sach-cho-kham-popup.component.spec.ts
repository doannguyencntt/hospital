import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachChoKhamPopupComponent } from './danh-sach-cho-kham-popup.component';

describe('DanhSachChoKhamPopupComponent', () => {
  let component: DanhSachChoKhamPopupComponent;
  let fixture: ComponentFixture<DanhSachChoKhamPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachChoKhamPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachChoKhamPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
