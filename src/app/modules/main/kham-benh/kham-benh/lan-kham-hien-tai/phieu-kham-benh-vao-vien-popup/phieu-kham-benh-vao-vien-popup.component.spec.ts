import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuKhamBenhVaoVienPopupComponent } from './phieu-kham-benh-vao-vien-popup.component';

describe('PhieuKhamBenhVaoVienPopupComponent', () => {
  let component: PhieuKhamBenhVaoVienPopupComponent;
  let fixture: ComponentFixture<PhieuKhamBenhVaoVienPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuKhamBenhVaoVienPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuKhamBenhVaoVienPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
