import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayChuyenVienPopupComponent } from './giay-chuyen-vien-popup.component';

describe('GiayChuyenVienPopupComponent', () => {
  let component: GiayChuyenVienPopupComponent;
  let fixture: ComponentFixture<GiayChuyenVienPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiayChuyenVienPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiayChuyenVienPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
