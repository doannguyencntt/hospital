import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiInToaThuocPopupComponent } from './lan-kham-hien-tai-in-toa-thuoc-popup.component';

describe('LanKhamHienTaiInToaThuocPopupComponent', () => {
  let component: LanKhamHienTaiInToaThuocPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiInToaThuocPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiInToaThuocPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiInToaThuocPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
