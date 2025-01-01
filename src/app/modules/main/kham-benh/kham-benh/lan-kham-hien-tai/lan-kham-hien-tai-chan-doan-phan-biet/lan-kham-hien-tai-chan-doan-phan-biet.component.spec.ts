import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiChanDoanPhanBietComponent } from './lan-kham-hien-tai-chan-doan-phan-biet.component';

describe('LanKhamHienTaiChanDoanPhanBietComponent', () => {
  let component: LanKhamHienTaiChanDoanPhanBietComponent;
  let fixture: ComponentFixture<LanKhamHienTaiChanDoanPhanBietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiChanDoanPhanBietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiChanDoanPhanBietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
