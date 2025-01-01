import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoBenhNhanChiTietComponent } from './cong-no-benh-nhan-chi-tiet.component';

describe('CongNoBenhNhanChiTietComponent', () => {
  let component: CongNoBenhNhanChiTietComponent;
  let fixture: ComponentFixture<CongNoBenhNhanChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoBenhNhanChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoBenhNhanChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
